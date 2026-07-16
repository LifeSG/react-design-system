import { existsSync } from "node:fs";
import fs from "node:fs/promises";
import path from "node:path";

import { Project, type SourceFile } from "ts-morph";

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

/** Parse a module's index.ts to collect all named exported symbols.
 *  - Handle named export declarations: `export { Foo, Bar } from "./foo"`
 *  - Handle directly exported declarations (class, function, interface, type, enum, variable)
 *  - Return a sorted, deduplicated list of exported symbol names
 */
function parseNamedExports(_sourceFile: SourceFile): string[] {
    // TODO: implement
    return [];
}

/** Infer the component's display name from its exported symbols.
 *  - From the exported symbols, pick the first PascalCase name
 *  - Fallback: convert the kebab-case module folder name to PascalCase
 */
function inferMainName(
    _moduleName: string,
    _exportedSymbols: string[]
): string {
    // TODO: implement
    return "";
}

/** Extract metadata from source files (description + searchKeys).
 *  - Look in candidate files: <moduleName>.tsx, <moduleName>.ts, types.ts
 *  - Description: first JSDoc block's main comment text (stop at first @tag)
 *  - keywords: @keywords tag value split by comma, trimmed, sorted
 *  - Return { description, keywords } from the first file that has either
 */
function extractSourceMetadata(
    _moduleDir: string,
    _moduleName: string
): { description: string; keywords: string[] } {
    // TODO: implement
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

        const exportedSymbols = parseNamedExports(moduleIndexFile);
        const name = inferMainName(moduleName, exportedSymbols);
        const { description, keywords } = extractSourceMetadata(
            moduleDir,
            moduleName
        );

        components.push({
            name,
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
