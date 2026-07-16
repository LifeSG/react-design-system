import { existsSync } from "node:fs";
import fs from "node:fs/promises";
import path from "node:path";

import { Project, type SourceFile } from "ts-morph";

const ROOT_DIR = path.resolve(__dirname, "..");
const SRC_DIR = path.join(ROOT_DIR, "src");
const OUTPUT_PATH = path.join(ROOT_DIR, "component-catalog.json");

/** Create a ts-morph project using the repo tsconfig. */
function createProject() {
    return new Project({
        tsConfigFilePath: path.resolve(ROOT_DIR, "tsconfig.json"),
    });
}

/** Parse src/index.ts to discover all re-exported module names.
 *  - Read export declarations like `export * from "./accordion"`
 *  - Extract the module folder name from the specifier (strip leading "./")
 *  - Deduplicate and sort alphabetically
 */
function parseExportedModules(_sourceFile: SourceFile): string[] {
    // TODO: implement
    return [];
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
 *  - searchKeys: @keywords tag value split by comma, trimmed, sorted
 *  - Return { description, searchKeys } from the first file that has either
 */
function extractSourceMetadata(
    _moduleDir: string,
    _moduleName: string
): { description: string; searchKeys: string[] } {
    // TODO: implement
    return { description: "", searchKeys: [] };
}

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

    const modules = parseExportedModules(srcIndexFile);
    const components = [];

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
        const { description, searchKeys } = extractSourceMetadata(
            moduleDir,
            moduleName
        );

        components.push({
            name,
            importPath: `@lifesg/react-design-system/${moduleName}`,
            description,
            searchKeys,
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

/** Entry point: generate the full component catalog. */
async function main() {
    const project = createProject();
    await buildAndWriteCatalog(project);
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});
