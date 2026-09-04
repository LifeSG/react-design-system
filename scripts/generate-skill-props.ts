/**
 * Generates ## Props sections in skill resource files from TypeScript source types.
 *
 * Run with: tsx scripts/generate-skill-props.ts
 *
 * For each component resource file under skills/fds-build/resources/,
 * this script:
 *   1. Reads the "Import:" line to find the source folder
 *   2. Loads the corresponding src/.../types.ts via ts-morph
 *   3. Flattens the interface hierarchy (skipping raw HTML/React base types)
 *   4. Generates a markdown ## Props table
 *   5. Inserts it before ## Rules (or ## Anti-patterns, or at the end)
 *
 * Re-run whenever @lifesg/react-design-system types change.
 */

import * as fs from "node:fs";
import * as path from "node:path";

import {
    InterfaceDeclaration,
    Node,
    Project,
    TypeAliasDeclaration,
    type SourceFile,
} from "ts-morph";

// =============================================================================
// Constants
// =============================================================================

const ROOT_DIR = path.resolve(__dirname, "..");
const SRC_DIR = path.join(ROOT_DIR, "src");
const SKILLS_RESOURCES_DIR = path.join(
    ROOT_DIR,
    "skills",
    "fds-build",
    "resources"
);

// Props that come from React/HTML base types — noise for skill docs
const SKIP_PROP_NAMES = new Set([
    "data-testid",
    "data-error-testid",
    "ref",
    "key",
]);

// Declaration source paths that indicate a prop is from a React/HTML base type
function isFromReactOrHtmlBase(declFilePath: string): boolean {
    return (
        declFilePath.includes("node_modules/typescript") ||
        declFilePath.includes("node_modules/@types/react") ||
        declFilePath.includes("node_modules/@types/react-dom")
    );
}

// =============================================================================
// Source path resolution
// =============================================================================

/** Extract the import subfolder from the resource file's "Import:" line. */
function extractImportFolder(content: string): string | null {
    const match = content.match(/@lifesg\/react-design-system\/([a-z0-9-]+)/);
    return match ? match[1] : null;
}

/**
 * Derive the source types.ts path for a resource file.
 * Tries candidates in order and returns the first that exists on disk:
 *   1. src/{importFolder}/{resourceName}/types.ts  (nested — form-select under form/)
 *   2. src/{importFolder}/types.ts                 (top-level — accordion, otp-verification)
 *   3. src/{importFolder}s/types.ts                (plural folder — animation → animations)
 */
function resolveSourceTypesPath(
    resourceName: string,
    importFolder: string
): string {
    const candidates = [
        path.join(SRC_DIR, importFolder, resourceName, "types.ts"),
        path.join(SRC_DIR, importFolder, "types.ts"),
        path.join(SRC_DIR, `${importFolder}s`, "types.ts"),
    ];
    return candidates.find(fs.existsSync) ?? candidates[0];
}

// =============================================================================
// Type extraction
// =============================================================================

/** Clean up a type string for display in the markdown table. */
function formatType(raw: string): string {
    return (
        raw
            // Remove trailing | undefined (optional marker)
            .replace(/\s*\|\s*undefined/g, "")
            // Collapse excessive whitespace
            .replace(/\s+/g, " ")
            .trim()
    );
}

type PropEntry = {
    name: string;
    type: string;
    required: boolean;
    defaultVal: string;
    description: string;
};

/**
 * Collect all props for an interface or type alias using ts-morph's
 * fully-resolved type system. Handles Omit<>, intersections, extends chains,
 * and union members in one pass — no manual recursion needed.
 */
function collectProps(
    node: InterfaceDeclaration | TypeAliasDeclaration
): PropEntry[] {
    const result: PropEntry[] = [];

    for (const sym of node.getType().getProperties()) {
        const name = sym.getName();
        if (SKIP_PROP_NAMES.has(name)) continue;
        if (name.startsWith("__")) continue;

        // Find the best declaration for type text and JSDoc
        const decls = sym.getDeclarations();
        const propDecl =
            decls.find(Node.isPropertySignature) ??
            decls.find(Node.isMethodSignature) ??
            decls[0];

        if (!propDecl) continue;

        // Skip props that originate from React/@types — they're HTML noise
        const declPath = propDecl.getSourceFile().getFilePath();
        if (isFromReactOrHtmlBase(declPath)) continue;

        // Get a clean type string
        let type = "unknown";
        if (Node.isPropertySignature(propDecl)) {
            const typeNode = propDecl.getTypeNode();
            type = formatType(
                typeNode
                    ? typeNode.getText()
                    : propDecl.getType().getText(propDecl)
            );
        } else {
            type = formatType(sym.getTypeAtLocation(node).getText());
        }

        const required = Node.isPropertySignature(propDecl)
            ? !propDecl.hasQuestionToken()
            : false;

        let description = "";
        let defaultVal = "";

        if (Node.isPropertySignature(propDecl)) {
            for (const jsDoc of propDecl.getJsDocs()) {
                const comment = jsDoc.getCommentText();
                if (comment && !description) {
                    description = comment.replace(/\n\s*/g, " ").trim();
                }
                for (const tag of jsDoc.getTags()) {
                    if (tag.getTagName() === "default") {
                        defaultVal = (tag.getCommentText() ?? "").trim();
                    }
                }
            }
        }

        result.push({ name, type, required, defaultVal, description });
    }

    return result;
}

// =============================================================================
// Markdown generation
// =============================================================================

function escapeCell(s: string): string {
    return s.replace(/\|/g, "\\|");
}

function generatePropsTable(props: PropEntry[]): string {
    if (props.length === 0) return "";

    const header = [
        "| Prop | Type | Default | Description |",
        "| ---- | ---- | ------- | ----------- |",
    ];

    const rows = props.map((p) => {
        const namePart = p.required ? `\`${p.name}\` \\*` : `\`${p.name}\``;
        return `| ${namePart} | \`${escapeCell(p.type)}\` | ${
            p.defaultVal || "—"
        } | ${escapeCell(p.description) || "—"} |`;
    });

    return [...header, ...rows].join("\n");
}

/** Build the full ## Props content to insert. Supports multiple interfaces (sub-sections). */
function buildPropsContent(
    interfaces: Array<{ title: string; props: PropEntry[] }>
): string {
    if (interfaces.length === 0) return "";

    const sections = interfaces
        .filter((i) => i.props.length > 0)
        .map((i) => `${i.title}\n\n${generatePropsTable(i.props)}`);

    if (sections.length === 0) return "";
    return sections.join("\n\n");
}

// =============================================================================
// Resource file processing
// =============================================================================

function insertPropsSection(content: string, propsBlock: string): string {
    const marker = "\n\n" + propsBlock;

    if (content.includes("\n## Rules")) {
        return content.replace("\n## Rules", marker + "\n\n## Rules");
    }
    if (content.includes("\n## Anti-patterns")) {
        return content.replace(
            "\n## Anti-patterns",
            marker + "\n\n## Anti-patterns"
        );
    }
    return content.trimEnd() + marker + "\n";
}

function processResourceFile(
    filePath: string,
    project: Project
): { skipped: boolean; reason?: string } {
    const content = fs.readFileSync(filePath, "utf-8");

    const importFolder = extractImportFolder(content);
    if (!importFolder) return { skipped: true, reason: "no Import: line" };

    const resourceName = path.basename(filePath, ".md");
    const sourceTypesPath = resolveSourceTypesPath(resourceName, importFolder);

    if (!fs.existsSync(sourceTypesPath)) {
        return {
            skipped: true,
            reason: `no source: ${path.relative(ROOT_DIR, sourceTypesPath)}`,
        };
    }

    let sourceFile: SourceFile | undefined;
    try {
        sourceFile =
            project.getSourceFile(sourceTypesPath) ??
            project.addSourceFileAtPathIfExists(sourceTypesPath);
    } catch {
        return { skipped: true, reason: "ts-morph load failed" };
    }

    if (!sourceFile) {
        return { skipped: true, reason: "source file not found by ts-morph" };
    }

    // Collect interfaces and type aliases that have a JSDoc description (public API intent)
    const hasJsDoc = (n: InterfaceDeclaration | TypeAliasDeclaration) =>
        n.getJsDocs().some((d) => d.getCommentText());

    const nodesFromFile = (sf: SourceFile) => [
        ...sf.getInterfaces().filter((i) => i.isExported() && hasJsDoc(i)),
        ...sf.getTypeAliases().filter((t) => t.isExported() && hasJsDoc(t)),
    ];

    let publicNodes: Array<InterfaceDeclaration | TypeAliasDeclaration> =
        nodesFromFile(sourceFile);

    // Barrel files (e.g. form/form-otp-verification/types.ts) only re-export from
    // another file. Follow named re-exports one level deep.
    if (publicNodes.length === 0) {
        for (const exportDecl of sourceFile.getExportDeclarations()) {
            const reFile = exportDecl.getModuleSpecifierSourceFile();
            if (!reFile) continue;
            const exportedNames = new Set(
                exportDecl.getNamedExports().map((s) => s.getName())
            );
            const candidates = nodesFromFile(reFile).filter((n) =>
                exportedNames.has(n.getName())
            );
            publicNodes = publicNodes.concat(candidates);
        }
    }

    if (publicNodes.length === 0) {
        return { skipped: true, reason: "no documented exported interfaces" };
    }

    // Build interface sections
    const ifaceSections = publicNodes.map((node) => {
        const props = collectProps(node);
        const title =
            publicNodes.length > 1
                ? `## Props — \`${node.getName()}\``
                : "## Props";
        return { title, props };
    });

    const propsBlock = buildPropsContent(ifaceSections);
    if (!propsBlock) return { skipped: true, reason: "no props extracted" };

    const newContent = insertPropsSection(content, propsBlock);
    fs.writeFileSync(filePath, newContent, "utf-8");

    return { skipped: false };
}

// =============================================================================
// Main
// =============================================================================

function main() {
    const project = new Project({
        tsConfigFilePath: path.join(ROOT_DIR, "tsconfig.json"),
        skipAddingFilesFromTsConfig: true,
    });

    const resourceDirs = ["v3", "v4"].map((v) =>
        path.join(SKILLS_RESOURCES_DIR, v, "components")
    );

    let updated = 0;
    let skipped = 0;

    for (const dir of resourceDirs) {
        if (!fs.existsSync(dir)) continue;
        const version = path.basename(path.dirname(dir));

        for (const file of fs.readdirSync(dir).sort()) {
            if (!file.endsWith(".md")) continue;
            const filePath = path.join(dir, file);
            const { skipped: wasSkipped, reason } = processResourceFile(
                filePath,
                project
            );

            if (wasSkipped) {
                skipped++;
                if (process.env.VERBOSE) {
                    console.log(
                        `  skip  [${version}] ${file}${
                            reason ? ` (${reason})` : ""
                        }`
                    );
                }
            } else {
                updated++;
                console.log(`  props [${version}] ${file}`);
            }
        }
    }

    console.log(`\nDone. Updated: ${updated}, Skipped: ${skipped}`);
}

main();
