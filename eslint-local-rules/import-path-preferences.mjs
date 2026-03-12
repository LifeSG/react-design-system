import path from "node:path";

const SRC_PREFIX = "src/";
const STORYBOOK_COMMON_PREFIX = "stories/storybook-common";
const PACKAGE_PREFIX = "@lifesg/react-design-system";

function normalizePath(filePath) {
    return filePath.replaceAll("\\", "/");
}

function detectZone(filename) {
    const normalizedFilename = normalizePath(filename);

    if (normalizedFilename.includes("/e2e/nextjs-app/src/")) return "nextjs";
    if (normalizedFilename.includes("/stories/")) return "stories";
    if (normalizedFilename.includes("/tests/")) return "tests";
    if (normalizedFilename.includes("/src/")) return "src";

    return null;
}

function getQuote(rawSource) {
    if (!rawSource || rawSource.length < 2) return '"';
    const quote = rawSource[0];
    return quote === "'" || quote === '"' ? quote : '"';
}

function relativeSrcToAlias(importSource) {
    if (/^(?:\.\.\/)+src$/.test(importSource)) return "src";

    const match = importSource.match(/^(?:\.\.\/)+src\/(.+)$/);
    if (!match) return null;
    return `${SRC_PREFIX}${match[1]}`;
}

function relativeStorybookCommonToAlias(importSource) {
    const match = importSource.match(
        /^(?:(?:\.\.\/)+|\.\/)storybook-common(?:\/(.*))?$/
    );
    if (!match) return null;
    const suffix = match[1];
    return suffix
        ? `${STORYBOOK_COMMON_PREFIX}/${suffix}`
        : STORYBOOK_COMMON_PREFIX;
}

function srcAliasToRelative(filename, importSource) {
    if (!importSource.startsWith(SRC_PREFIX)) return null;

    const normalizedFilename = normalizePath(filename);
    const marker = "/src/";
    const srcIndex = normalizedFilename.lastIndexOf(marker);

    if (srcIndex === -1) return null;

    const fileWithinSrc = normalizedFilename.slice(srcIndex + marker.length);
    const fileDirWithinSrc = path.posix.dirname(fileWithinSrc);
    const targetWithinSrc = importSource.slice(SRC_PREFIX.length);
    let relativeImport = path.posix.relative(fileDirWithinSrc, targetWithinSrc);

    if (!relativeImport.startsWith(".")) {
        relativeImport = `./${relativeImport}`;
    }

    return relativeImport;
}

function relativeSrcToPackage(importSource) {
    if (/^(?:\.\.\/)+src$/.test(importSource)) return PACKAGE_PREFIX;

    const match = importSource.match(/^(?:\.\.\/)+src\/(.+)$/);
    if (!match) return null;
    return `${PACKAGE_PREFIX}/${match[1]}`;
}

function getReplacement(zone, filename, importSource) {
    if (zone === "stories") {
        return (
            relativeSrcToAlias(importSource) ||
            relativeStorybookCommonToAlias(importSource)
        );
    }

    if (zone === "tests") {
        return relativeSrcToAlias(importSource);
    }

    if (zone === "src") {
        return srcAliasToRelative(filename, importSource);
    }

    if (zone === "nextjs") {
        return relativeSrcToPackage(importSource);
    }

    return null;
}

function getMessageId(zone, importSource) {
    if (zone === "stories") {
        if (/^(?:\.\.\/)+src(?:\/|$)/.test(importSource)) return "storiesSrc";
        if (
            /^(?:(?:\.\.\/)+|\.\/)storybook-common(?:\/|$)/.test(importSource)
        ) {
            return "storiesStorybookCommon";
        }
    }

    if (zone === "tests" && /^(?:\.\.\/)+src(?:\/|$)/.test(importSource)) {
        return "testsSrc";
    }

    if (zone === "src" && importSource.startsWith(SRC_PREFIX)) {
        return "srcRelative";
    }

    if (zone === "nextjs" && /^(?:\.\.\/)+src(?:\/|$)/.test(importSource)) {
        return "nextjsPackage";
    }

    return null;
}

const importPathPreferencesRule = {
    meta: {
        type: "suggestion",
        docs: {
            description: "Enforce import path preferences with autofix.",
        },
        fixable: "code",
        schema: [],
        messages: {
            storiesSrc:
                "For component imports in stories, use src/* paths instead of relative src paths.",
            storiesStorybookCommon:
                "For shared Storybook imports, use stories/storybook-common.",
            testsSrc:
                "For component imports in tests, use src/* paths instead of relative src paths.",
            srcRelative:
                "Inside src, prefer relative imports for internal modules.",
            nextjsPackage:
                "In nextjs-app, import components from @lifesg/react-design-system/* instead of direct src paths.",
        },
    },
    create(context) {
        const zone = detectZone(context.filename);
        if (!zone) return {};

        function validateSourceNode(node) {
            if (!node?.source || typeof node.source.value !== "string") return;

            const importSource = node.source.value;

            const replacement = getReplacement(
                zone,
                context.filename,
                importSource
            );
            if (!replacement || replacement === importSource) return;

            const messageId = getMessageId(zone, importSource);
            if (!messageId) return;

            context.report({
                node: node.source,
                messageId,
                fix(fixer) {
                    const quote = getQuote(node.source.raw);
                    return fixer.replaceText(
                        node.source,
                        `${quote}${replacement}${quote}`
                    );
                },
            });
        }

        return {
            ImportDeclaration: validateSourceNode,
        };
    },
};

export default {
    rules: {
        "import-path-preferences": importPathPreferencesRule,
    },
};
