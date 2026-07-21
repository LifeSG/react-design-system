import fs from "node:fs/promises";
import path from "node:path";

import camelCase from "lodash/camelCase";
import upperFirst from "lodash/upperFirst";
import { Node, Project, type SourceFile } from "ts-morph";

// =============================================================================
// Types
// =============================================================================

type Component = {
    name: string;
    importPath: string;
    description: string;
    keywords: string[];
};

// =============================================================================
// Constants
// =============================================================================

const ROOT_DIR = path.resolve(__dirname, "..");
const SRC_DIR = path.join(ROOT_DIR, "src");
const SRC_INDEX_PATH = path.join(SRC_DIR, "index.ts");
const OUTPUT_PATH = path.join(ROOT_DIR, "docs", "component-catalog.json");

const CATALOG_TAG = "// @catalog";
const KEYWORDS_TAG = "@keywords";

// =============================================================================
// Helpers
// =============================================================================

function trimAndReplaceNewLines(text: string | undefined): string {
    return text?.trim().replace(/\n/g, " ") ?? "";
}

function trimAndSortComment(tagComment: string | undefined): string[] {
    if (!tagComment) return [];
    return tagComment
        .trim()
        .split(",")
        .map((k: string) => k.trim())
        .filter(Boolean)
        .sort((a: string, b: string) => a.localeCompare(b));
}

function extractDocFromStatement(statement: Node): {
    description: string;
    keywords: string[];
} {
    if (!Node.isJSDocable(statement)) return { description: "", keywords: [] };

    let description = "";
    let keywords: string[] = [];

    for (const jsDoc of statement.getJsDocs()) {
        if (!description) {
            const comment = trimAndReplaceNewLines(jsDoc.getCommentText());
            if (comment) description = comment;
        }
        if (keywords.length === 0) {
            const tag = jsDoc
                .getTags()
                .find((t) => t.getTagName() === KEYWORDS_TAG);
            if (tag) keywords = trimAndSortComment(tag.getCommentText());
        }
        if (description && keywords.length > 0) break;
    }

    return { description, keywords };
}

function getExportedModules(sourceFile: SourceFile): string[] {
    const modules = new Set<string>();

    for (const exportDeclaration of sourceFile.getExportDeclarations()) {
        const moduleSpecifier = exportDeclaration.getModuleSpecifierValue();
        // e.g. of moduleSpecifier: "./accordion", "./alert", etc.
        if (moduleSpecifier && moduleSpecifier.startsWith("./")) {
            modules.add(moduleSpecifier.slice(2));
        }
    }
    return [...modules].sort((a, b) => a.localeCompare(b));
}

/** Extract metadata from source files using ts-morph JSDoc APIs.
 *  - Look in candidate files: <moduleName>.tsx, <moduleName>.ts, types.ts
 *  - Only considers statements preceded by `// @catalog`
 *  - Description: JSDoc block's comment text (via getCommentText())
 *  - keywords: first @keywords tag value split by comma, trimmed, sorted
 *  - Return { description, keywords } from the first file that has either
 */
function extractSourceDocumentation(
    project: Project,
    moduleDir: string,
    moduleName: string
): { description: string; keywords: string[] } {
    const possibleFilePaths = [
        path.join(moduleDir, moduleName + ".tsx"), // e.g. alert.tsx
        path.join(moduleDir, moduleName + ".ts"), // e.g. border.ts
        path.join(moduleDir, "index.ts"), // e.g. uneditable-section/index.ts
    ];

    for (const filePath of possibleFilePaths) {
        const sourceFile = project.addSourceFileAtPathIfExists(filePath);
        if (!sourceFile) continue;

        let description = "";
        let keywords: string[] = [];

        for (const statement of sourceFile.getStatements()) {
            if (!hasCatalogTag(sourceFile, statement)) continue;

            const doc = extractDocFromStatement(statement);
            if (!description && doc.description) description = doc.description;
            if (keywords.length === 0 && doc.keywords.length > 0)
                keywords = doc.keywords;
            if (description && keywords.length > 0) break;
        }

        if (description || keywords.length > 0) {
            return { description, keywords };
        }
    }

    return { description: "", keywords: [] };
}

function hasCatalogTag(sourceFile: SourceFile, statement: Node): boolean {
    const fullText = sourceFile.getFullText();
    const commentRanges = statement.getLeadingCommentRanges();

    return commentRanges.some((range) => {
        const text = fullText.slice(range.getPos(), range.getEnd()).trim();
        return text === CATALOG_TAG;
    });
}

function extractSubComponentEntries(
    project: Project,
    moduleDir: string,
    moduleName: string,
    importPath: string
): Component[] {
    const entries: Component[] = [];
    const sourceFiles = project.addSourceFilesAtPaths([
        path.join(moduleDir, "**", "*.ts"),
        path.join(moduleDir, "**", "*.tsx"),
    ]);

    const mainFileBases = new Set([
        moduleName + ".tsx",
        moduleName + ".ts",
        "index.ts",
        "types.ts",
    ]);

    for (const sourceFile of sourceFiles) {
        const baseName = sourceFile.getBaseName();
        if (baseName === "index.ts") continue;
        if (mainFileBases.has(baseName)) continue;

        for (const statement of sourceFile.getStatements()) {
            if (!hasCatalogTag(sourceFile, statement)) continue;

            const { description, keywords } =
                extractDocFromStatement(statement);

            if (Node.isVariableStatement(statement)) {
                for (const decl of statement.getDeclarations()) {
                    entries.push({
                        name: decl.getName(),
                        importPath,
                        description,
                        keywords,
                    });
                }
            } else if (Node.isFunctionDeclaration(statement)) {
                const name = statement.getName();
                if (name) {
                    entries.push({
                        name,
                        importPath,
                        description,
                        keywords,
                    });
                }
            }
        }
    }

    entries.sort((a, b) => a.name.localeCompare(b.name));
    return entries;
}

function getModuleSourceFile(
    project: Project,
    moduleName: string
): { moduleDir: string; moduleIndexFile: SourceFile } | undefined {
    const moduleDir = path.join(SRC_DIR, moduleName);
    const moduleIndexPath = path.join(moduleDir, "index.ts");

    const moduleIndexFile =
        project.addSourceFileAtPathIfExists(moduleIndexPath);

    if (!moduleIndexFile) {
        return undefined;
    }

    return { moduleDir, moduleIndexFile };
}

// =============================================================================
// Main
// =============================================================================

/** Assemble the catalog and write the output JSON file.
 *  - Shape: { meta: { packageName, totalModules }, components: [...] }
 *  - Components sorted alphabetically by name
 *  - Write to component-catalog.json at repo root with stable JSON formatting
 */

async function main() {
    const project = new Project({
        tsConfigFilePath: path.resolve(ROOT_DIR, "tsconfig.json"),
    });
    const srcIndexFile = project.getSourceFile(SRC_INDEX_PATH);

    if (!srcIndexFile) {
        throw new Error(`Could not find source file: ${SRC_INDEX_PATH}`);
    }

    const modules = getExportedModules(srcIndexFile);
    const components: Component[] = [];

    for (const moduleName of modules) {
        const result = getModuleSourceFile(project, moduleName);
        if (!result) continue;
        const { moduleDir } = result;

        const importPath = `@lifesg/react-design-system/${moduleName}`;
        const componentNamePascalCase = upperFirst(camelCase(moduleName));

        const { description, keywords } = extractSourceDocumentation(
            project,
            moduleDir,
            moduleName
        );

        if (description || keywords.length > 0) {
            components.push({
                name: componentNamePascalCase,
                importPath,
                description,
                keywords,
            });
        }

        const subEntries = extractSubComponentEntries(
            project,
            moduleDir,
            moduleName,
            importPath
        );
        components.push(...subEntries);
    }

    const catalog = {
        meta: {
            packageName: "@lifesg/react-design-system",
            totalComponents: components.length,
        },
        components,
    };

    await fs.mkdir(path.dirname(OUTPUT_PATH), { recursive: true });
    await fs.writeFile(OUTPUT_PATH, JSON.stringify(catalog, null, 2) + "\n");

    console.log(
        `Generated ${path.relative(ROOT_DIR, OUTPUT_PATH)} (${
            catalog.components.length
        } components).`
    );
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});
