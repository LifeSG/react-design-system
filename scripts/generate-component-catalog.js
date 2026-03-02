#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const ts = require("typescript");

const ROOT_DIR = path.resolve(__dirname, "..");
const SRC_DIR = path.join(ROOT_DIR, "src");
const STORIES_DIR = path.join(ROOT_DIR, "stories");
const OUTPUT_PATH = path.join(ROOT_DIR, "component-catalog.json");

function parseArgs(argv) {
    const options = {
        mode: "update",
        only: null,
        light: false,
        maxExamples: 3,
        verbose: false,
    };

    for (let i = 0; i < argv.length; i += 1) {
        const arg = argv[i];

        if (arg === "--check") {
            options.mode = "check";
            continue;
        }

        if (arg === "--update") {
            options.mode = "update";
            continue;
        }

        if (arg === "--light") {
            options.light = true;
            continue;
        }

        if (arg === "--verbose") {
            options.verbose = true;
            continue;
        }

        if (arg === "--only") {
            options.only = argv[i + 1] || null;
            i += 1;
            continue;
        }

        if (arg === "--max-examples") {
            const value = Number(argv[i + 1]);
            if (!Number.isNaN(value) && value > 0) {
                options.maxExamples = value;
            }
            i += 1;
        }
    }

    return options;
}

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

function hashText(value) {
    return crypto.createHash("sha256").update(value).digest("hex");
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

function extractJsDocFirstLine(node) {
    const jsDocNodes = node.jsDoc || [];
    if (jsDocNodes.length === 0) {
        return "";
    }

    const text = String(jsDocNodes[0].comment || "").trim();
    if (!text) {
        return "";
    }

    const firstLine = text.split(/\r?\n/)[0].trim();
    return firstLine;
}

function parsePropsInterfaces(typesPath) {
    if (!fileExists(typesPath)) {
        return [];
    }

    const sourceFile = createSourceFile(typesPath);
    const interfaces = [];

    for (const statement of sourceFile.statements) {
        if (!ts.isInterfaceDeclaration(statement)) {
            continue;
        }

        const interfaceName = statement.name.text;
        if (!interfaceName.endsWith("Props")) {
            continue;
        }

        const properties = [];
        for (const member of statement.members) {
            if (!ts.isPropertySignature(member) || !member.name) {
                continue;
            }

            const propertyName = ts.isIdentifier(member.name)
                ? member.name.text
                : member.name.getText(sourceFile);

            const typeText = member.type
                ? member.type.getText(sourceFile)
                : "unknown";

            properties.push({
                name: propertyName,
                type: typeText,
                optional: Boolean(member.questionToken),
                description: extractJsDocFirstLine(member),
            });
        }

        interfaces.push({
            name: interfaceName,
            description: extractJsDocFirstLine(statement),
            properties: properties.sort((left, right) =>
                left.name.localeCompare(right.name)
            ),
        });
    }

    return interfaces.sort((left, right) =>
        left.name.localeCompare(right.name)
    );
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

function extractListMarker(mdxText, markerName) {
    const regex = new RegExp(`${markerName}\\s*:\\s*([^\\n\\r]+)`, "i");
    const match = mdxText.match(regex);

    if (!match) {
        return [];
    }

    return match[1]
        .split(",")
        .map((value) => value.trim())
        .filter(Boolean)
        .sort((left, right) => left.localeCompare(right));
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

function parseModuleStories(moduleName, maxExamples, lightMode) {
    const mdxFiles = getMdxFilesForModule(moduleName);
    const primaryStoriesFile = getPrimaryStoriesFile(moduleName);

    let description = "";
    let descriptionSource = "none";
    const related = new Set();
    const examples = [];

    for (const mdxPath of mdxFiles) {
        const mdxText = readFileSafe(mdxPath);

        if (!description) {
            const overview = extractOverviewDescription(mdxText);
            if (overview) {
                description = overview;
                descriptionSource = "story";
            }
        }

        for (const value of extractListMarker(mdxText, "Related")) {
            related.add(value);
        }

        if (!lightMode && examples.length < maxExamples) {
            const foundExamples = extractMarkdownCodeExamples(
                mdxText,
                maxExamples - examples.length
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
        descriptionSource,
        searchKeys,
        related: [...related].sort((left, right) => left.localeCompare(right)),
        examples,
        storyFiles: mdxFiles.map(toPosixPath),
        primaryStoriesFile: fileExists(primaryStoriesFile)
            ? toPosixPath(primaryStoriesFile)
            : "",
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
            source: toPosixPath(tokenFilePath),
            hash: hashText(tokenName),
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

function buildCatalog(options) {
    const srcIndexPath = path.join(SRC_DIR, "index.ts");
    const allModules = parseExportedModules(srcIndexPath);
    const modules = options.only
        ? allModules.filter((moduleName) => moduleName === options.only)
        : allModules;

    const components = [];
    const warnings = [];

    for (const moduleName of modules) {
        const moduleDir = path.join(SRC_DIR, moduleName);
        const moduleIndexPath = path.join(moduleDir, "index.ts");
        const moduleTypesPath = path.join(moduleDir, "types.ts");
        const modulePropsTablePath = path.join(
            STORIES_DIR,
            moduleName,
            "props-table.tsx"
        );

        const exportedSymbols = parseNamedExports(moduleIndexPath);
        const propsInterfaces = parsePropsInterfaces(moduleTypesPath);
        const storyData = parseModuleStories(
            moduleName,
            options.maxExamples,
            options.light
        );
        const propTableSections = parsePropsTable(modulePropsTablePath);

        if (!storyData.description) {
            warnings.push(`Missing story overview for module: ${moduleName}`);
        }

        if (storyData.searchKeys.length === 0) {
            warnings.push(
                `Missing tags in stories file for module: ${moduleName}`
            );
        }

        const sourceParts = [
            readFileSafe(moduleIndexPath),
            readFileSafe(moduleTypesPath),
            ...storyData.storyFiles.map((relativePath) =>
                readFileSafe(path.join(ROOT_DIR, relativePath))
            ),
            readFileSafe(
                storyData.primaryStoriesFile
                    ? path.join(ROOT_DIR, storyData.primaryStoriesFile)
                    : ""
            ),
            readFileSafe(modulePropsTablePath),
        ];

        const sourceHash = hashText(sourceParts.join("\n"));

        components.push({
            name: inferMainName(moduleName, exportedSymbols),
            module: moduleName,
            importPath: `@lifesg/react-design-system/${moduleName}`,
            exportedSymbols,
            description: storyData.description,
            descriptionSource: storyData.descriptionSource,
            searchKeys: storyData.searchKeys,
            related: options.light ? [] : storyData.related,
            examples: options.light ? [] : storyData.examples,
            propsInterfaces,
            propTableSections,
            sources: {
                moduleIndex: toPosixPath(moduleIndexPath),
                types: fileExists(moduleTypesPath)
                    ? toPosixPath(moduleTypesPath)
                    : "",
                stories: storyData.storyFiles,
                storiesFile: storyData.primaryStoriesFile,
                propsTable: fileExists(modulePropsTablePath)
                    ? toPosixPath(modulePropsTablePath)
                    : "",
            },
            hash: sourceHash,
        });
    }

    const designTokens = parseDesignTokens();

    const catalog = {
        meta: {
            packageName: "@lifesg/react-design-system",
            totalModules: components.length,
            totalTokens: designTokens.length,
            lightMode: options.light,
        },
        components: components.sort((left, right) =>
            left.module.localeCompare(right.module)
        ),
        designTokens,
    };

    return {
        catalog,
        warnings: [...new Set(warnings)].sort((left, right) =>
            left.localeCompare(right)
        ),
    };
}

function run() {
    const options = parseArgs(process.argv.slice(2));
    const { catalog, warnings } = buildCatalog(options);
    const output = `${stableStringify(catalog)}\n`;
    const existing = readFileSafe(OUTPUT_PATH);

    if (options.verbose && warnings.length > 0) {
        for (const warning of warnings) {
            console.warn(`[catalog] ${warning}`);
        }
    }

    if (options.mode === "check") {
        if (existing !== output) {
            console.error(
                "component-catalog.json is stale. Run: npm run catalog:generate"
            );
            process.exit(1);
        }

        console.log("component-catalog.json is up to date.");
        return;
    }

    fs.writeFileSync(OUTPUT_PATH, output, "utf8");
    console.log(
        `Generated ${toPosixPath(OUTPUT_PATH)} (${
            catalog.components.length
        } components).`
    );
}

run();
