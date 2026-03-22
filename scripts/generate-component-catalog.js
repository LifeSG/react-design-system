#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const ts = require("typescript");

const ROOT_DIR = path.resolve(__dirname, "..");
const SRC_DIR = path.join(ROOT_DIR, "src");
const OUTPUT_PATH = path.join(ROOT_DIR, "component-catalog.json");

function toPosixPath(filePath) {
    return path.relative(ROOT_DIR, filePath).split(path.sep).join("/");
}

function fileExists(filePath) {
    try {
        fs.accessSync(filePath, fs.constants.F_OK);
        return true;
    } catch {
        return false;
    }
}

function readFileSafe(filePath) {
    if (!fileExists(filePath)) return "";
    return fs.readFileSync(filePath, "utf8");
}

function createSourceFile(filePath) {
    const sourceText = readFileSafe(filePath);
    return ts.createSourceFile(
        filePath,
        sourceText,
        ts.ScriptTarget.Latest,
        true,
        ts.ScriptKind.TSX
    );
}

function stableStringify(value) {
    return JSON.stringify(value, null, 2);
}

/**
 * Returns all module names re-exported from src/index.ts.
 * E.g. `export * from "./accordion"` -> "accordion"
 */
function parseExportedModules(indexPath) {
    const sourceFile = createSourceFile(indexPath);
    const modules = [];
    for (const statement of sourceFile.statements) {
        if (!ts.isExportDeclaration(statement)) continue;
        if (
            !statement.moduleSpecifier ||
            !ts.isStringLiteral(statement.moduleSpecifier)
        )
            continue;
        const moduleName = statement.moduleSpecifier.text.replace(/^\.\//, "");
        if (moduleName.length > 0) modules.push(moduleName);
    }
    return [...new Set(modules)].sort((a, b) => a.localeCompare(b));
}

/**
 * Returns all named symbols exported from a module's index.ts.
 */
function parseNamedExports(moduleIndexPath) {
    if (!fileExists(moduleIndexPath)) return [];
    const sourceFile = createSourceFile(moduleIndexPath);
    const names = new Set();
    function addName(text) {
        if (text && text.trim()) names.add(text.trim());
    }
    for (const statement of sourceFile.statements) {
        if (
            ts.isExportDeclaration(statement) &&
            statement.exportClause &&
            ts.isNamedExports(statement.exportClause)
        ) {
            for (const element of statement.exportClause.elements)
                addName(element.name.text);
            continue;
        }
        if (
            ts.isClassDeclaration(statement) ||
            ts.isFunctionDeclaration(statement) ||
            ts.isInterfaceDeclaration(statement) ||
            ts.isTypeAliasDeclaration(statement) ||
            ts.isEnumDeclaration(statement)
        ) {
            if (
                statement.modifiers?.some(
                    (m) => m.kind === ts.SyntaxKind.ExportKeyword
                ) &&
                statement.name
            )
                addName(statement.name.text);
            continue;
        }
        if (ts.isVariableStatement(statement)) {
            if (
                !statement.modifiers?.some(
                    (m) => m.kind === ts.SyntaxKind.ExportKeyword
                )
            )
                continue;
            for (const declaration of statement.declarationList.declarations) {
                if (ts.isIdentifier(declaration.name))
                    addName(declaration.name.text);
            }
        }
    }
    return [...names].sort((a, b) => a.localeCompare(b));
}

/**
 * Strips JSDoc comment syntax and returns clean description text (stops at first @tag).
 */
function cleanJsDocText(raw) {
    const lines = raw
        .replace(/^\/\*\*/, "")
        .replace(/\*\/$/, "")
        .split("\n")
        .map((line) => line.replace(/^\s*\*\s?/, "").trim());

    const descLines = [];
    for (const line of lines) {
        if (line.startsWith("@")) break;
        descLines.push(line);
    }

    return descLines.join(" ").replace(/\s+/g, " ").trim();
}

/**
 * Extracts the @keywords tag value from a JSDoc block as a sorted string array.
 */
function extractKeywordsFromJsDoc(raw) {
    const match = raw.match(/@keywords\s+([^\r\n*]+)/);
    if (!match) return [];
    return match[1]
        .split(",")
        .map((k) => k.trim())
        .filter(Boolean)
        .sort((a, b) => a.localeCompare(b));
}

/**
 * Reads the first JSDoc block from candidate source files and returns
 * both the description and searchKeys.
 * - description: taken from the first JSDoc block in the file
 * - searchKeys: taken from the first @keywords tag found ANYWHERE in the file
 * Looks in types.ts first, then the main component .tsx/.ts file.
 */
function extractSourceMetadata(moduleDir, moduleName) {
    const candidates = [
        path.join(moduleDir, "types.ts"),
        path.join(moduleDir, moduleName + ".tsx"),
        path.join(moduleDir, moduleName + ".ts"),
    ];
    for (const filePath of candidates) {
        const text = readFileSafe(filePath);
        if (!text) continue;

        // Description from the first JSDoc block
        const firstBlock = text.match(/\/\*\*([\s\S]*?)\*\//);
        const description = firstBlock ? cleanJsDocText(firstBlock[0]) : "";

        // @keywords can appear on any JSDoc block in the file
        const allBlocks = [...text.matchAll(/\/\*\*([\s\S]*?)\*\//g)];
        let searchKeys = [];
        for (const block of allBlocks) {
            const keys = extractKeywordsFromJsDoc(block[0]);
            if (keys.length > 0) {
                searchKeys = keys;
                break;
            }
        }

        if (description || searchKeys.length > 0)
            return { description, searchKeys };
    }
    return { description: "", searchKeys: [] };
}

function inferMainName(moduleName, exportedSymbols) {
    const candidates = exportedSymbols.filter((name) => /^[A-Z]/.test(name));
    if (candidates.length > 0) return candidates[0];
    return moduleName
        .split("-")
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .join("");
}

function buildCatalog() {
    const srcIndexPath = path.join(SRC_DIR, "index.ts");
    const modules = parseExportedModules(srcIndexPath);
    const components = [];
    for (const moduleName of modules) {
        const moduleDir = path.join(SRC_DIR, moduleName);
        const moduleIndexPath = path.join(moduleDir, "index.ts");
        const exportedSymbols = parseNamedExports(moduleIndexPath);
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
    return {
        meta: {
            packageName: "@lifesg/react-design-system",
            totalModules: components.length,
        },
        components: components.sort((a, b) => a.name.localeCompare(b.name)),
    };
}

function run() {
    const catalog = buildCatalog();
    fs.writeFileSync(OUTPUT_PATH, stableStringify(catalog) + "\n", "utf8");
    console.log(
        `Generated ${toPosixPath(OUTPUT_PATH)} (${
            catalog.components.length
        } components).`
    );
}

run();
