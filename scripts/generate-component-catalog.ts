import { existsSync } from "node:fs";
import fs from "node:fs/promises";
import path from "node:path";

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
const OUTPUT_PATH = path.join(ROOT_DIR, "docs", "component-catalog.json");

// =============================================================================
// Helpers
// =============================================================================

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

/** Get all named export symbols from a module's index.ts file.
 *  Returns sorted alphabetically so inferMainName picks a deterministic first PascalCase name.
 */
function getSortedNamedExports(sourceFile: SourceFile): string[] {
    const symbols = new Set<string>();

    for (const [name] of sourceFile.getExportedDeclarations()) {
        symbols.add(name);
    }

    return [...symbols].sort((a, b) => a.localeCompare(b));
}

/** Extract metadata from source files using ts-morph JSDoc APIs.
 *  - Look in candidate files: <moduleName>.tsx, <moduleName>.ts, types.ts
 *  - Description: first JSDoc block's comment text (via getCommentText())
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
            // Check if the statement can have JSDoc comments
            if (!Node.isJSDocable(statement)) continue;

            const jsDocs = statement.getJsDocs();

            for (const jsDoc of jsDocs) {
                if (!description) {
                    const comment = jsDoc.getCommentText()?.trim();
                    if (comment) {
                        description = comment;
                    }
                }

                // TODO: check actual how will @keywords tag appear in jsdocs
                if (keywords.length === 0) {
                    for (const tag of jsDoc.getTags()) {
                        if (tag.getTagName() === "keywords") {
                            const tagComment = tag.getCommentText()?.trim();
                            if (tagComment) {
                                keywords = tagComment
                                    .split(",")
                                    .map((k: string) => k.trim())
                                    .filter(Boolean)
                                    .sort((a: string, b: string) =>
                                        a.localeCompare(b)
                                    );
                            }
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
// =============================================================================
// Main
// =============================================================================

/** Assemble the catalog and write the output JSON file.
 *  - Shape: { meta: { packageName, totalModules }, components: [...] }
 *  - Components sorted alphabetically by name
 *  - Write to component-catalog.json at repo root with stable JSON formatting
 */
async function buildAndWriteCatalog(project: Project) {
    const srcIndexPath = path.join(SRC_DIR, "index.ts");
    const srcIndexFile = project.getSourceFile(srcIndexPath);

    if (!srcIndexFile) {
        throw new Error(`Could not find source file: ${srcIndexPath}`);
    }

    const modules = getExportedModules(srcIndexFile);
    const components: Component[] = [];

    for (const moduleName of modules) {
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

        const sortedNamedExports = getSortedNamedExports(moduleIndexFile);
        const componentName = sortedNamedExports[0];

        const { description, keywords } = extractSourceMetadata(
            project,
            moduleDir,
            moduleName
        );

        components.push({
            name: componentName,
            importPath: `@lifesg/react-design-system/${moduleName}`,
            description,
            keywords,
        });
    }

    const catalog = {
        meta: {
            packageName: "@lifesg/react-design-system",
            totalModules: components.length,
        },
        components: components.sort((a, b) => a.name.localeCompare(b.name)),
    };

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
