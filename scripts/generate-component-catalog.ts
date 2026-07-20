import { existsSync } from "node:fs";
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
const THEME_TOKENS_DIR = path.join(SRC_DIR, "theme", "tokens");
const THEME_TOKENS_FILES = path.join(THEME_TOKENS_DIR, "*.ts");
const OUTPUT_PATH = path.join(ROOT_DIR, "docs", "component-catalog.json");

const MODULES_WITH_CATALOG_TAGS = ["theme"];

const CATALOG_MARKER = "// @catalog";
const KEYWORDS_TAG = "keywords";

// =============================================================================
// Helpers
// =============================================================================

function hasCatalogTagHandling(moduleName: string): boolean {
    return MODULES_WITH_CATALOG_TAGS.includes(moduleName);
}

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
function extractSourceMetadata(
    project: Project,
    moduleDir: string,
    moduleName: string
): { description: string; keywords: string[] } {
    const possibleFilePaths = [
        path.join(moduleDir, moduleName + ".tsx"),
        path.join(moduleDir, moduleName + ".ts"),
        path.join(moduleDir, "types.ts"),
    ];

    for (const filePath of possibleFilePaths) {
        const sourceFile = project.addSourceFileAtPathIfExists(filePath);
        if (!sourceFile) continue;

        const statements = sourceFile.getStatements();

        let description = "";
        let keywords: string[] = [];

        for (const statement of statements) {
            if (!Node.isJSDocable(statement)) continue;
            if (!hasCatalogMarker(sourceFile, statement)) continue;

            const jsDocs = statement.getJsDocs();

            for (const jsDoc of jsDocs) {
                if (!description) {
                    const comment = trimAndReplaceNewLines(
                        jsDoc.getCommentText()
                    );
                    if (comment) {
                        description = comment;
                    }
                }

                if (keywords.length === 0) {
                    for (const tag of jsDoc.getTags()) {
                        if (tag.getTagName() === KEYWORDS_TAG) {
                            keywords = trimAndSortComment(tag.getCommentText());
                            break;
                        }
                    }
                }

                if (description && keywords.length > 0) break;
            }

            if (description && keywords.length > 0) break;
        }

        if (description || keywords.length > 0) {
            return { description, keywords };
        }
    }

    return { description: "", keywords: [] };
}

function hasCatalogMarker(sourceFile: SourceFile, statement: Node): boolean {
    const fullText = sourceFile.getFullText();
    const start = statement.getFullStart();
    const textBefore = fullText.slice(0, start);
    const lines = textBefore.split("\n");

    for (let i = lines.length - 1; i >= 0; i--) {
        const trimmed = lines[i].trim();
        if (trimmed === "") continue;
        if (trimmed === CATALOG_MARKER) return true;
        break;
    }

    const leadingTrivia = fullText.slice(start, statement.getStart());
    return leadingTrivia.includes(CATALOG_MARKER);
}

function extractCatalogTaggedEntries(project: Project): Component[] {
    const entries: Component[] = [];
    const sourceFiles = project.getSourceFiles(THEME_TOKENS_FILES);

    for (const sourceFile of sourceFiles) {
        if (sourceFile.getBaseName() === "index.ts") continue;

        for (const statement of sourceFile.getStatements()) {
            if (!Node.isJSDocable(statement)) continue;
            if (!hasCatalogMarker(sourceFile, statement)) continue;

            const jsDocs = statement.getJsDocs();
            let description = "";
            let keywords: string[] = [];

            for (const jsDoc of jsDocs) {
                if (!description) {
                    const comment = trimAndReplaceNewLines(
                        jsDoc.getCommentText()
                    );
                    if (comment) description = comment;
                }
                for (const tag of jsDoc.getTags()) {
                    if (
                        tag.getTagName() === KEYWORDS_TAG &&
                        keywords.length === 0
                    ) {
                        keywords = trimAndSortComment(tag.getCommentText());
                    }
                }
            }

            if (Node.isVariableStatement(statement)) {
                for (const decl of statement.getDeclarations()) {
                    entries.push({
                        name: decl.getName(),
                        importPath: "@lifesg/react-design-system/theme",
                        description,
                        keywords,
                    });
                }
            } else if (Node.isFunctionDeclaration(statement)) {
                const name = statement.getName();
                if (name) {
                    entries.push({
                        name,
                        importPath: "@lifesg/react-design-system/theme",
                        description,
                        keywords,
                    });
                }
            }
        }
    }

    return entries;
}

function getCatalogTaggedEntries(project: Project): Component[] {
    const entries = extractCatalogTaggedEntries(project);
    entries.sort((a, b) => a.name.localeCompare(b.name));
    return entries;
}

// =============================================================================
// Main
// =============================================================================

/** Assemble the catalog and write the output JSON file.
 *  - Shape: { meta: { packageName, totalModules }, components: [...] }
 *  - Components sorted alphabetically by name
 *  - Write to component-catalog.json at repo root with stable JSON formatting
 */
async function buildAndWriteCatalog(project: Project) {
    const srcIndexFile = project.getSourceFile(SRC_INDEX_PATH);

    if (!srcIndexFile) {
        throw new Error(`Could not find source file: ${SRC_INDEX_PATH}`);
    }

    const modules = getExportedModules(srcIndexFile);
    const components: Component[] = [];

    project.addSourceFilesAtPaths(THEME_TOKENS_FILES);
    const catalogTaggedEntries = getCatalogTaggedEntries(project);

    for (const moduleName of modules) {
        if (hasCatalogTagHandling(moduleName)) {
            continue;
        }

        const moduleDir = path.join(SRC_DIR, moduleName);
        const moduleIndexPath = path.join(moduleDir, "index.ts");

        if (!existsSync(moduleIndexPath)) {
            continue;
        }

        const moduleIndexFile =
            project.addSourceFileAtPathIfExists(moduleIndexPath);

        if (!moduleIndexFile) {
            continue;
        }

        const componentNamePascalCase = upperFirst(camelCase(moduleName));

        const { description, keywords } = extractSourceMetadata(
            project,
            moduleDir,
            moduleName
        );

        components.push({
            name: componentNamePascalCase,
            importPath: `@lifesg/react-design-system/${moduleName}`,
            description,
            keywords,
        });
    }

    components.sort((a, b) => a.name.localeCompare(b.name));

    for (const moduleName of modules) {
        if (!hasCatalogTagHandling(moduleName)) {
            continue;
        }

        const moduleDir = path.join(SRC_DIR, moduleName);
        const componentNamePascalCase = upperFirst(camelCase(moduleName));
        const { description, keywords } = extractSourceMetadata(
            project,
            moduleDir,
            moduleName
        );

        components.push({
            name: componentNamePascalCase,
            importPath: `@lifesg/react-design-system/${moduleName}`,
            description,
            keywords,
        });
        components.push(...catalogTaggedEntries);
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

async function main() {
    const project = new Project({
        tsConfigFilePath: path.resolve(ROOT_DIR, "tsconfig.json"),
    });
    await buildAndWriteCatalog(project);
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});
