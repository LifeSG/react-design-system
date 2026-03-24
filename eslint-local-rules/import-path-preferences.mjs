import fs from "node:fs";
import path from "node:path";

const SRC_PREFIX = "src/";
const STORYBOOK_COMMON_PREFIX = "stories/storybook-common";
const PACKAGE_PREFIX = "@lifesg/react-design-system";
const SOURCE_EXTENSIONS = [".ts", ".tsx", ".js", ".jsx"];

const RELATIVE_SRC_BARE_PATTERN = /^(?:\.\.\/)+src$/;
const RELATIVE_SRC_PATTERN = /^(?:\.\.\/)+src\/(.+)$/;
const RELATIVE_STORYBOOK_COMMON_PATTERN =
    /^(?:(?:\.\.\/)+|\.\/)storybook-common(?:\/(.*))?$/;
const SRC_IN_STORIES_OR_TESTS_PATTERN = /^(?:\.\.\/)+src(?:\/|$)/;
const STORYBOOK_COMMON_IN_STORIES_PATTERN =
    /^(?:(?:\.\.\/)+|\.\/)storybook-common(?:\/|$)/;
const STYLE_MODULE_IMPORT_PATTERN = /\.styles?$/;

function normalizePath(filePath) {
    return filePath.replaceAll("\\", "/");
}

/**
 * Identify which folder policy applies to a given file.
 * The rule intentionally uses filename paths to decide behavior.
 */
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

function getStyleNamespaceLocalName(node) {
    const namespaceSpecifier = node.specifiers.find(
        (specifier) => specifier.type === "ImportNamespaceSpecifier"
    );
    if (namespaceSpecifier) return namespaceSpecifier.local.name;

    const defaultSpecifier = node.specifiers.find(
        (specifier) => specifier.type === "ImportDefaultSpecifier"
    );
    if (defaultSpecifier) return defaultSpecifier.local.name;

    return "styles";
}

function toKebabCase(value) {
    return value
        .replaceAll(/([a-z0-9])([A-Z])/g, "$1-$2")
        .replaceAll("_", "-")
        .toLowerCase();
}

/**
 * Check whether a `src/<module>` path exists either as:
 * - a directory with index file
 * - a direct module file
 */
function hasSrcModule(cwd, modulePath) {
    const basePath = path.join(cwd, modulePath);

    if (fs.existsSync(basePath) && fs.statSync(basePath).isDirectory()) {
        return SOURCE_EXTENSIONS.some((ext) =>
            fs.existsSync(path.join(basePath, `index${ext}`))
        );
    }

    return SOURCE_EXTENSIONS.some((ext) => fs.existsSync(`${basePath}${ext}`));
}

/**
 * Infer module path when there is exactly one named import and module exists.
 */
function inferSrcPathFromBareImport(node, cwd) {
    if (node.type !== "ImportDeclaration") return null;
    if (node.specifiers.length !== 1) return null;

    const specifier = node.specifiers[0];
    if (specifier.type !== "ImportSpecifier") return null;
    if (specifier.imported.type !== "Identifier") return null;

    const inferredPath = `src/${toKebabCase(specifier.imported.name)}`;
    return hasSrcModule(cwd, inferredPath) ? inferredPath : null;
}

function relativeSrcToAlias(node, cwd, importSource) {
    if (RELATIVE_SRC_BARE_PATTERN.test(importSource)) {
        return inferSrcPathFromBareImport(node, cwd) || "src";
    }

    const match = importSource.match(RELATIVE_SRC_PATTERN);
    if (!match) return null;
    return `${SRC_PREFIX}${match[1]}`;
}

function relativeStorybookCommonToAlias(importSource) {
    const match = importSource.match(RELATIVE_STORYBOOK_COMMON_PATTERN);
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
    if (RELATIVE_SRC_BARE_PATTERN.test(importSource)) return PACKAGE_PREFIX;

    const match = importSource.match(RELATIVE_SRC_PATTERN);
    if (!match) return null;
    return `${PACKAGE_PREFIX}/${match[1]}`;
}

function getReplacement(zone, context, node, importSource) {
    // Policy: in stories, prefer `src/*` for components and
    // `stories/storybook-common/*` for shared Storybook helpers.
    if (zone === "stories") {
        return (
            relativeSrcToAlias(node, context.cwd, importSource) ||
            relativeStorybookCommonToAlias(importSource)
        );
    }

    // Policy: in tests, prefer `src/*` for component imports.
    if (zone === "tests") {
        return relativeSrcToAlias(node, context.cwd, importSource);
    }

    // Policy: inside src, prefer relative imports over `src/*`.
    if (zone === "src") {
        return srcAliasToRelative(context.filename, importSource);
    }

    // Policy: in nextjs-app, prefer package imports over direct relative src paths.
    if (zone === "nextjs") {
        return relativeSrcToPackage(importSource);
    }

    return null;
}

function getMessageId(zone, importSource) {
    if (zone === "stories") {
        if (SRC_IN_STORIES_OR_TESTS_PATTERN.test(importSource)) {
            return "storiesSrc";
        }
        if (STORYBOOK_COMMON_IN_STORIES_PATTERN.test(importSource)) {
            return "storiesStorybookCommon";
        }
    }

    if (
        zone === "tests" &&
        SRC_IN_STORIES_OR_TESTS_PATTERN.test(importSource)
    ) {
        return "testsSrc";
    }

    if (zone === "src" && importSource.startsWith(SRC_PREFIX)) {
        return "srcRelative";
    }

    if (
        zone === "nextjs" &&
        SRC_IN_STORIES_OR_TESTS_PATTERN.test(importSource)
    ) {
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

        function validateImportSource(node) {
            if (!node?.source || typeof node.source.value !== "string") return;

            const importSource = node.source.value;
            const replacement = getReplacement(
                zone,
                context,
                node,
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
            ImportDeclaration: validateImportSource,
        };
    },
};

const styleNamespaceImportRule = {
    meta: {
        type: "suggestion",
        docs: {
            description:
                "Enforce namespace imports for style modules (*.style, *.styles).",
        },
        fixable: "code",
        schema: [],
        messages: {
            namespaceStyleImport:
                "Import style modules using a namespace import (e.g. import * as styles from './component.style').",
        },
    },
    create(context) {
        return {
            ImportDeclaration(node) {
                if (!node?.source || typeof node.source.value !== "string") {
                    return;
                }

                const importSource = node.source.value;
                if (!STYLE_MODULE_IMPORT_PATTERN.test(importSource)) {
                    return;
                }

                // Type-only imports are ignored to avoid rewriting TS type flows.
                if (node.importKind === "type") return;

                // Side-effect imports are allowed (no bindings to enforce).
                if (!node.specifiers.length) return;

                const hasOnlyNamespaceSpecifiers = node.specifiers.every(
                    (specifier) => specifier.type === "ImportNamespaceSpecifier"
                );
                if (hasOnlyNamespaceSpecifiers) return;

                context.report({
                    node,
                    messageId: "namespaceStyleImport",
                    fix(fixer) {
                        const quote = getQuote(node.source.raw);
                        const localName = getStyleNamespaceLocalName(node);
                        const fixedImport = `import * as ${localName} from ${quote}${importSource}${quote};`;
                        return fixer.replaceText(node, fixedImport);
                    },
                });
            },
        };
    },
};

export default {
    rules: {
        "import-path-preferences": importPathPreferencesRule,
        "style-namespace-import": styleNamespaceImportRule,
    },
};
