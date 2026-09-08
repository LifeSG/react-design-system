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
    Project,
    TypeAliasDeclaration,
    type SourceFile,
} from "ts-morph";

import { PropExtractor, type PropEntry } from "../tools/shared/prop-extractor";

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

function stripPropsSection(content: string): string {
    const lines = content.split("\n");
    const out: string[] = [];
    let inProps = false;
    for (const line of lines) {
        if (/^## Props(\b|$)/.test(line)) {
            inProps = true;
            continue;
        }
        if (inProps && /^## /.test(line)) {
            inProps = false;
        }
        if (!inProps) out.push(line);
    }
    return out.join("\n").replace(/\n{3,}/g, "\n\n");
}

function insertPropsSection(content: string, propsBlock: string): string {
    const stripped = stripPropsSection(content);
    const marker = "\n\n" + propsBlock;

    if (stripped.includes("\n## Rules")) {
        return stripped.replace("\n## Rules", marker + "\n\n## Rules");
    }
    if (stripped.includes("\n## Anti-patterns")) {
        return stripped.replace(
            "\n## Anti-patterns",
            marker + "\n\n## Anti-patterns"
        );
    }
    return stripped.trimEnd() + marker + "\n";
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

    const propExtractor = new PropExtractor();

    // Build interface sections
    const ifaceSections = publicNodes.map((node) => {
        const props = propExtractor.collectProps(node);
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
