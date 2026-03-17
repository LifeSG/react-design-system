#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const ts = require("typescript");

const ROOT_DIR = path.resolve(__dirname, "..");
const SRC_DIR = path.join(ROOT_DIR, "src");
const STORIES_DIR = path.join(ROOT_DIR, "stories");
const OUTPUT_PATH = path.join(ROOT_DIR, "component-catalog.json");

// Max number of code examples to extract per component from MDX files
const MAX_EXAMPLES = 3;

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
    if (!fileExists(filePath)) {
        return "";
    }

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

function stableSortObject(value) {
    if (Array.isArray(value)) {
        return value.map(stableSortObject);
    }

    if (!value || typeof value !== "object") {
        return value;
    }

    const sortedKeys = Object.keys(value).sort((left, right) =>
        left.localeCompare(right)
    );
    const result = {};

    for (const key of sortedKeys) {
        result[key] = stableSortObject(value[key]);
    }

    return result;
}

function stableStringify(value) {
    return JSON.stringify(stableSortObject(value), null, 2);
}

function parseExportedModules(indexPath) {
    const sourceFile = createSourceFile(indexPath);
    const modules = [];

    for (const statement of sourceFile.statements) {
        if (!ts.isExportDeclaration(statement)) {
            continue;
        }

        if (
            !statement.moduleSpecifier ||
            !ts.isStringLiteral(statement.moduleSpecifier)
        ) {
            continue;
        }

        const rawModule = statement.moduleSpecifier.text;
        const moduleName = rawModule.replace(/^\.\//, "");
        if (moduleName.length > 0) {
            modules.push(moduleName);
        }
    }

    return [...new Set(modules)].sort((left, right) =>
        left.localeCompare(right)
    );
}

function parseNamedExports(moduleIndexPath) {
    if (!fileExists(moduleIndexPath)) {
        return [];
    }

    const sourceFile = createSourceFile(moduleIndexPath);
    const names = new Set();

    function addName(text) {
        if (text && text.trim()) {
            names.add(text.trim());
        }
    }

    for (const statement of sourceFile.statements) {
        if (
            ts.isExportDeclaration(statement) &&
            statement.exportClause &&
            ts.isNamedExports(statement.exportClause)
        ) {
            for (const element of statement.exportClause.elements) {
                addName(element.name.text);
            }
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
                    (modifier) => modifier.kind === ts.SyntaxKind.ExportKeyword
                ) &&
                statement.name
            ) {
                addName(statement.name.text);
            }
            continue;
        }

        if (ts.isVariableStatement(statement)) {
            const isExported = statement.modifiers?.some(
                (modifier) => modifier.kind === ts.SyntaxKind.ExportKeyword
            );
            if (!isExported) {
                continue;
            }

            for (const declaration of statement.declarationList.declarations) {
                if (ts.isIdentifier(declaration.name)) {
                    addName(declaration.name.text);
                }
            }
        }
    }

    return [...names].sort((left, right) => left.localeCompare(right));
}

function cleanupText(value) {
    return value
        .replace(/\{\s*code\(([^)]*)\)\s*\}/g, "$1")
        .replace(/<\/?[A-Za-z][^>]*>/g, " ")
        .replace(/[{}]/g, " ")
        .replace(/\s+/g, " ")
        .replace(/"/g, "")
        .trim();
}

function expressionToText(expression, sourceFile) {
    if (!expression) {
        return "";
    }

    if (
        ts.isStringLiteral(expression) ||
        ts.isNoSubstitutionTemplateLiteral(expression)
    ) {
        return expression.text.trim();
    }

    if (
        ts.isJsxElement(expression) ||
        ts.isJsxSelfClosingElement(expression) ||
        ts.isJsxFragment(expression) ||
        ts.isTemplateExpression(expression)
    ) {
        return cleanupText(expression.getText(sourceFile));
    }

    if (ts.isIdentifier(expression)) {
        return expression.text.trim();
    }

    return cleanupText(expression.getText(sourceFile));
}

function parsePropsTable(propsTablePath) {
    if (!fileExists(propsTablePath)) {
        return [];
    }

    const sourceFile = createSourceFile(propsTablePath);
    const sectionByVariable = new Map();
    const sectionsByTitle = [];

    function getPropertyInitializer(node, propertyName) {
        for (const property of node.properties) {
            if (!ts.isPropertyAssignment(property)) {
                continue;
            }

            if (
                ts.isIdentifier(property.name) &&
                property.name.text === propertyName
            ) {
                return property.initializer;
            }
        }

        return null;
    }

    for (const statement of sourceFile.statements) {
        if (!ts.isVariableStatement(statement)) {
            continue;
        }

        for (const declaration of statement.declarationList.declarations) {
            if (
                !ts.isIdentifier(declaration.name) ||
                !declaration.initializer
            ) {
                continue;
            }

            const variableName = declaration.name.text;

            if (
                variableName.endsWith("_DATA") &&
                ts.isArrayLiteralExpression(declaration.initializer)
            ) {
                const attributes = [];
                for (const item of declaration.initializer.elements) {
                    if (!ts.isObjectLiteralExpression(item)) {
                        continue;
                    }

                    const attributesInitializer = getPropertyInitializer(
                        item,
                        "attributes"
                    );
                    if (
                        !attributesInitializer ||
                        !ts.isArrayLiteralExpression(attributesInitializer)
                    ) {
                        continue;
                    }

                    for (const attrElement of attributesInitializer.elements) {
                        if (!ts.isObjectLiteralExpression(attrElement)) {
                            continue;
                        }

                        const nameInit = getPropertyInitializer(
                            attrElement,
                            "name"
                        );
                        if (!nameInit) {
                            continue;
                        }

                        const descriptionInit = getPropertyInitializer(
                            attrElement,
                            "description"
                        );
                        const defaultValueInit = getPropertyInitializer(
                            attrElement,
                            "defaultValue"
                        );
                        const mandatoryInit = getPropertyInitializer(
                            attrElement,
                            "mandatory"
                        );
                        const propTypesInit = getPropertyInitializer(
                            attrElement,
                            "propTypes"
                        );

                        const propTypes = [];
                        if (
                            propTypesInit &&
                            ts.isArrayLiteralExpression(propTypesInit)
                        ) {
                            for (const propTypeValue of propTypesInit.elements) {
                                propTypes.push(
                                    expressionToText(propTypeValue, sourceFile)
                                );
                            }
                        }

                        attributes.push({
                            name: expressionToText(nameInit, sourceFile),
                            description: descriptionInit
                                ? expressionToText(descriptionInit, sourceFile)
                                : "",
                            defaultValue: defaultValueInit
                                ? expressionToText(defaultValueInit, sourceFile)
                                : "",
                            mandatory: mandatoryInit
                                ? expressionToText(
                                      mandatoryInit,
                                      sourceFile
                                  ) === "true"
                                : false,
                            propTypes: propTypes.filter(Boolean),
                        });
                    }
                }

                sectionByVariable.set(variableName, attributes);
            }

            if (variableName === "PROPS_TABLE_DATA") {
                const rawText = declaration.initializer.getText(sourceFile);
                const regex =
                    /title:\s*"([^"]+)"[\s\S]*?sections=\{([A-Z0-9_]+)\}/g;
                let match = regex.exec(rawText);

                while (match) {
                    const title = match[1].trim();
                    const variableRef = match[2].trim();
                    const attributes = sectionByVariable.get(variableRef) || [];
                    sectionsByTitle.push({
                        title,
                        attributes: attributes.sort((left, right) =>
                            left.name.localeCompare(right.name)
                        ),
                    });
                    match = regex.exec(rawText);
                }
            }
        }
    }

    return sectionsByTitle.sort((left, right) =>
        left.title.localeCompare(right.title)
    );
}

function extractOverviewDescription(mdxText) {
    const overviewMarker = /<Secondary>Overview<\/Secondary>/i;
    const markerMatch = mdxText.match(overviewMarker);

    if (!markerMatch || markerMatch.index === undefined) {
        return "";
    }

    const afterMarker = mdxText.slice(
        markerMatch.index + markerMatch[0].length
    );
    const lines = afterMarker.split(/\r?\n/).map((line) => line.trim());
    const descriptionLines = [];

    for (const line of lines) {
        if (!line) {
            if (descriptionLines.length > 0) {
                break;
            }
            continue;
        }

        if (line.startsWith("```") || line.startsWith("<")) {
            if (descriptionLines.length > 0) {
                break;
            }
            continue;
        }

        descriptionLines.push(line);
    }

    return descriptionLines.join(" ").trim();
}

function extractMarkdownCodeExamples(mdxText, maxExamples) {
    const examples = [];
    const regex = /```(?:tsx|ts|jsx|js)\n([\s\S]*?)```/g;
    let match = regex.exec(mdxText);

    while (match && examples.length < maxExamples) {
        const value = match[1].trim();
        if (value) {
            examples.push(value);
        }
        match = regex.exec(mdxText);
    }

    return examples;
}

function getMdxFilesForModule(moduleName) {
    const moduleStoriesDir = path.join(STORIES_DIR, moduleName);
    if (!fileExists(moduleStoriesDir)) {
        return [];
    }

    return fs
        .readdirSync(moduleStoriesDir)
        .filter((fileName) => fileName.endsWith(".mdx"))
        .map((fileName) => path.join(moduleStoriesDir, fileName))
        .sort((left, right) => left.localeCompare(right));
}

function extractTagsFromStoriesFile(storiesFilePath) {
    if (!fileExists(storiesFilePath)) {
        return [];
    }
    const content = readFileSafe(storiesFilePath);
    const match = content.match(/\btags\s*:\s*\[([^\]]*)\]/);
    if (!match) {
        return [];
    }
    return [...match[1].matchAll(/['"]([^'"]+)['"]/g)]
        .map((m) => m[1])
        .filter((tag) => !tag.startsWith("autodocs"));
}

function getPrimaryStoriesFile(moduleName) {
    return path.join(STORIES_DIR, moduleName, `${moduleName}.stories.tsx`);
}

function parseModuleStories(moduleName) {
    const mdxFiles = getMdxFilesForModule(moduleName);
    const primaryStoriesFile = getPrimaryStoriesFile(moduleName);

    let description = "";
    const examples = [];

    for (const mdxPath of mdxFiles) {
        const mdxText = readFileSafe(mdxPath);

        if (!description) {
            const overview = extractOverviewDescription(mdxText);
            if (overview) {
                description = overview;
            }
        }

        if (examples.length < MAX_EXAMPLES) {
            const foundExamples = extractMarkdownCodeExamples(
                mdxText,
                MAX_EXAMPLES - examples.length
            );
            for (const sample of foundExamples) {
                examples.push(sample);
            }
        }
    }

    const searchKeys = extractTagsFromStoriesFile(primaryStoriesFile).sort(
        (left, right) => left.localeCompare(right)
    );

    return {
        description,
        searchKeys,
        examples: examples.filter((ex) => ex.includes("\n")),
    };
}

function parseDesignTokens() {
    const tokenFilePath = path.join(SRC_DIR, "design-token", "design-token.ts");
    if (!fileExists(tokenFilePath)) {
        return [];
    }

    const sourceFile = createSourceFile(tokenFilePath);
    const tokens = new Set();

    function visit(node) {
        if (
            ts.isCallExpression(node) &&
            ts.isIdentifier(node.expression) &&
            node.expression.text === "getThemeDesignToken" &&
            node.arguments.length > 0 &&
            ts.isStringLiteral(node.arguments[0])
        ) {
            tokens.add(node.arguments[0].text);
        }

        ts.forEachChild(node, visit);
    }

    visit(sourceFile);

    return [...tokens]
        .sort((left, right) => left.localeCompare(right))
        .map((tokenName) => ({
            name: tokenName,
            category: tokenName.includes(".")
                ? tokenName.split(".")[0]
                : "global",
        }));
}

function inferMainName(moduleName, exportedSymbols) {
    const candidates = exportedSymbols.filter((name) => /^[A-Z]/.test(name));
    if (candidates.length > 0) {
        return candidates[0];
    }

    const fromModule = moduleName
        .split("-")
        .map((value) => value.charAt(0).toUpperCase() + value.slice(1))
        .join("");
    return fromModule;
}

function buildCatalog() {
    const srcIndexPath = path.join(SRC_DIR, "index.ts");
    const modules = parseExportedModules(srcIndexPath);
    const components = [];
    const warnings = [];

    for (const moduleName of modules) {
        const moduleDir = path.join(SRC_DIR, moduleName);
        const moduleIndexPath = path.join(moduleDir, "index.ts");
        const modulePropsTablePath = path.join(
            STORIES_DIR,
            moduleName,
            "props-table.tsx"
        );

        const exportedSymbols = parseNamedExports(moduleIndexPath);
        const storyData = parseModuleStories(moduleName);
        const propTableSections = parsePropsTable(modulePropsTablePath);

        if (!storyData.description) {
            warnings.push(`Missing story overview for module: ${moduleName}`);
        }
        if (storyData.searchKeys.length === 0) {
            warnings.push(
                `Missing tags in stories file for module: ${moduleName}`
            );
        }

        components.push({
            name: inferMainName(moduleName, exportedSymbols),
            importPath: `@lifesg/react-design-system/${moduleName}`,
            description: storyData.description,
            searchKeys: storyData.searchKeys,
            examples: storyData.examples,
            propTableSections,
        });
    }

    const designTokens = parseDesignTokens();

    return {
        catalog: {
            meta: {
                packageName: "@lifesg/react-design-system",
                totalModules: components.length,
                totalTokens: designTokens.length,
            },
            components: components.sort((left, right) =>
                left.name.localeCompare(right.name)
            ),
            designTokens,
        },
        warnings: [...new Set(warnings)].sort(),
    };
}

function run() {
    const { catalog, warnings } = buildCatalog();

    for (const warning of warnings) {
        console.warn(`[catalog] ${warning}`);
    }

    fs.writeFileSync(OUTPUT_PATH, `${stableStringify(catalog)}\n`, "utf8");
    console.log(
        `Generated ${toPosixPath(OUTPUT_PATH)} (${
            catalog.components.length
        } components).`
    );
}

run();
