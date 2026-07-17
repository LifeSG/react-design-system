/**
 * Generate Storybook argTypes from component type definitions.
 *
 * Reads exported interfaces and type aliases from `src/*\/types.ts` files and
 * generates Storybook-compatible argTypes documentation that powers the
 * interactive props table in component stories.
 *
 * Usage:
 * - `npm run storybook:argtypes` — generate all component argTypes files
 * - `npm run storybook:argtypes -- --watch` — watch for changes and regenerate
 */

import { existsSync, statSync } from "node:fs";
import fs from "node:fs/promises";
import path from "node:path";

import chokidar from "chokidar";
import {
    type IndexSignatureDeclaration,
    type InterfaceDeclaration,
    type Node,
    Project,
    type PropertySignature,
    type SourceFile,
    type Symbol as TsMorphSymbol,
    type Type,
    type TypeAliasDeclaration,
    TypeFormatFlags,
    type VariableStatement,
} from "ts-morph";

import type { GeneratedArgType } from "../stories/storybook-common/arg-types";

/**
 * Parsed JSDoc metadata from component type declarations.
 * Extracted from JSDoc tags and comments, used to enrich generated argTypes.
 */
type JsDocMeta = {
    defaultValue?: string | undefined;
    deprecated?: string | boolean | undefined;
    description?: string | undefined;
    examples?: string[] | undefined;
    remarks?: string | undefined;
    /** Single resolved tab group (first entry of tabGroups). Used by downstream callers that only need one. */
    tabGroup?: string | undefined;
    /** All declared tab groups — multiple when `@storybookSection` lists comma-separated sections. */
    tabGroups?: string[] | undefined;
};

type StorybookTaggedDeclarationNode =
    | InterfaceDeclaration
    | TypeAliasDeclaration
    | VariableStatement;

const sourceFileGlob = "src/**/types.ts";
const watchRoots = ["src", "stories"];
const storyFileGlob = "stories/**/*.stories.@(ts|tsx)";
const storybookArgTypesFile = path.resolve(
    ".storybook/generated/storybook-argtypes.generated.ts"
);

const typeFormatFlags =
    TypeFormatFlags.NoTruncation |
    TypeFormatFlags.UseSingleQuotesForStringLiteralType;

/** Create a ts-morph project using the repo tsconfig. */
function createProject() {
    return new Project({
        tsConfigFilePath: path.resolve("tsconfig.json"),
    });
}

/** Resolve a source file from the project or throw when not found. */
function getSourceFile(project: Project, filePath: string) {
    const sourceFile =
        project.getSourceFile(filePath) ??
        project.addSourceFileAtPathIfExists(filePath);

    if (!sourceFile) {
        throw new Error(`Could not find source file: ${filePath}`);
    }

    return sourceFile;
}

/** Read and trim the textual value of a JSDoc tag. */
function getTagCommentText(tag: { getCommentText: () => string | undefined }) {
    const comment = tag.getCommentText();

    return typeof comment === "string" ? comment.trim() : undefined;
}

/** Collect normalized leading non-JSDoc comment texts for a node. */
function getLeadingNonJsDocComments(node: StorybookTaggedDeclarationNode) {
    return node
        .getLeadingCommentRanges()
        .map((commentRange) => commentRange.getText())
        .filter((rawText) => !rawText.startsWith("/**"))
        .map((rawText) =>
            rawText
                .replace(/^\/\//gm, "")
                .replace(/^\/\*|\*\/$/g, "")
                .trim()
        )
        .filter(Boolean);
}

/** Parse `@storybookSection ...` from leading non-JSDoc comments. Returns all comma-separated sections. */
function getStorybookSectionsFromLeadingComment(
    node: StorybookTaggedDeclarationNode
): string[] {
    const marker = "@storybookSection";

    for (const comment of getLeadingNonJsDocComments(node)) {
        const markerIndex = comment.indexOf(marker);

        if (markerIndex >= 0) {
            const raw = comment.slice(markerIndex + marker.length).trim();

            if (!raw) {
                return [];
            }

            return raw
                .split(",")
                .map((s) => s.trim())
                .filter(Boolean);
        }
    }

    return [];
}

/** Return `true` when a leading non-JSDoc comment includes skip marker text. */
function hasSkipTag(node: StorybookTaggedDeclarationNode) {
    for (const comment of getLeadingNonJsDocComments(node)) {
        if (/@?storybookSkipProps\b/.test(comment)) {
            return true;
        }
    }

    return false;
}

/**
 * Collect supported JSDoc metadata tags for Storybook mapping.
 * Supported tags: "@deprecated, @default, @remarks, @example".
 */
function getJsDocMeta(
    node:
        | IndexSignatureDeclaration
        | InterfaceDeclaration
        | PropertySignature
        | VariableStatement
        | TypeAliasDeclaration
): JsDocMeta {
    const docs = node.getJsDocs();

    if (!docs.length) {
        return {};
    }

    const description =
        docs
            .map((doc) => doc.getCommentText()?.trim())
            .filter((comment): comment is string => Boolean(comment))
            .join("\n\n") || undefined;

    const tags = docs.flatMap((doc) => doc.getTags());

    let deprecated: string | boolean | undefined;
    let defaultValue: string | undefined;
    const remarks: string[] = [];
    const examples: string[] = [];

    for (const tag of tags) {
        const tagName = tag.getTagName();
        const comment = getTagCommentText(tag);

        if (tagName === "deprecated") {
            deprecated = comment || true;
            continue;
        }

        if (tagName === "default") {
            if (!defaultValue && comment) {
                defaultValue = comment;
            }
            continue;
        }

        if (tagName === "remarks" && comment) {
            remarks.push(comment);
            continue;
        }

        if (tagName === "example" && comment) {
            examples.push(comment);
            continue;
        }
    }

    const tabGroups =
        node.getKindName() === "InterfaceDeclaration" ||
        node.getKindName() === "TypeAliasDeclaration" ||
        node.getKindName() === "VariableStatement"
            ? getStorybookSectionsFromLeadingComment(
                  node as StorybookTaggedDeclarationNode
              )
            : [];

    return {
        description,
        deprecated,
        defaultValue,
        remarks: remarks.length > 0 ? remarks.join("\n\n") : undefined,
        examples: examples.length > 0 ? examples : undefined,
        tabGroup: tabGroups[0],
        tabGroups: tabGroups.length > 0 ? tabGroups : undefined,
    };
}

/** Build a Storybook-friendly description string from parsed JSDoc metadata. */
function toStorybookDescription(meta: JsDocMeta) {
    const blocks: string[] = [];

    if (meta.description) {
        blocks.push(meta.description);
    }

    if (meta.remarks) {
        blocks.push(`Remarks:\n${meta.remarks}`);
    }

    if (meta.examples && meta.examples.length > 0) {
        blocks.push(
            meta.examples.map((example) => `Example:\n${example}`).join("\n\n")
        );
    }

    return blocks.length > 0 ? blocks.join("\n\n") : undefined;
}

/** Normalize type text to improve readability in generated summaries. */
function cleanType(type: string) {
    return type
        .replace(/\s*\|\s*undefined/g, "")
        .replace(/\s+/g, " ")
        .trim();
}

/** Split top-level union members without breaking nested function/generic syntax. */
function splitTopLevelUnionMembers(typeText: string) {
    const members: string[] = [];
    let current = "";
    let parenDepth = 0;
    let bracketDepth = 0;
    let braceDepth = 0;
    let angleDepth = 0;

    for (let index = 0; index < typeText.length; index++) {
        const char = typeText[index];

        if (char === "(") parenDepth++;
        if (char === ")") parenDepth = Math.max(0, parenDepth - 1);
        if (char === "[") bracketDepth++;
        if (char === "]") bracketDepth = Math.max(0, bracketDepth - 1);
        if (char === "{") braceDepth++;
        if (char === "}") braceDepth = Math.max(0, braceDepth - 1);
        if (char === "<") angleDepth++;
        if (char === ">") angleDepth = Math.max(0, angleDepth - 1);

        const isTopLevel =
            parenDepth === 0 &&
            bracketDepth === 0 &&
            braceDepth === 0 &&
            angleDepth === 0;

        if (char === "|" && isTopLevel) {
            members.push(current.trim());
            current = "";
            continue;
        }

        current += char;
    }

    if (current.trim()) {
        members.push(current.trim());
    }

    return members;
}

/** Format verbose unions as multiline summaries for better table readability. */
function formatUnionSummary(typeText: string) {
    const members = splitTopLevelUnionMembers(typeText);

    if (members.length <= 1) {
        return typeText;
    }

    return members.join("\n| ");
}

/**
 * Expand literal unions when TypeScript can fully resolve the type.
 *
 * Example: `Exclude<FontSize, "form-label">` -> `"heading-xxl" | ...`.
 */
function getExpandedLiteralUnionText(type: Type, contextNode: Node) {
    const nonNullableType = type.getNonNullableType();

    if (!nonNullableType.isUnion()) {
        return undefined;
    }

    const unionTypes = nonNullableType.getUnionTypes();
    const hasOnlyLiterals = unionTypes.every(
        (unionType) =>
            unionType.isStringLiteral() ||
            unionType.isNumberLiteral() ||
            unionType.isBooleanLiteral()
    );

    if (!hasOnlyLiterals) {
        return undefined;
    }

    return cleanType(
        unionTypes
            .map((unionType) => unionType.getText(contextNode, typeFormatFlags))
            .join(" | ")
    );
}

/** Resolve readable type text for generated argTypes summaries. */
function getSummaryTypeText(
    type: Type,
    contextNode: Node,
    fallbackText?: string
) {
    return (
        getExpandedLiteralUnionText(type, contextNode) ||
        cleanType(fallbackText ?? type.getText(contextNode, typeFormatFlags))
    );
}

/** Resolve a property type to display in Storybook tables. */
function getPropertyTypeText(property: PropertySignature) {
    const typeNodeText = property.getTypeNode()?.getText();

    // For props, keep declared aliases (e.g. `TextListSize`) so the table
    // stays aligned with the public API surface seen by component consumers.
    if (typeNodeText) {
        return cleanType(typeNodeText);
    }

    // Fallback for declarations without an explicit type node (for example
    // legacy/generated declarations like `foo?;`): rely on checker-resolved type.
    const resolvedType = property.getType();

    if (resolvedType.isAny() || resolvedType.isUnknown()) {
        return "-";
    }

    return getSummaryTypeText(resolvedType, property);
}

/** Resolve an index signature type to display in Storybook tables. */
function getIndexSignatureTypeText(indexSignature: IndexSignatureDeclaration) {
    const summary = getSummaryTypeText(
        indexSignature.getReturnType(),
        indexSignature,
        indexSignature.getReturnTypeNode()?.getText()
    );

    return formatUnionSummary(summary);
}

/** List interface and type-alias section names from a source file. */
function getTypeSections(sourceFile: SourceFile) {
    return [
        ...sourceFile
            .getInterfaces()
            .map((declaration) => declaration.getName()),
        ...sourceFile
            .getTypeAliases()
            .map((declaration) => declaration.getName()),
    ];
}

/** Compute the generated argTypes output path for a component types file.
 *  All per-component generated files are co-located with the registry in
 *  .storybook/generated/ to keep generated artifacts out of the source tree.
 */
function getOutputFile(sourceFilePath: string) {
    const componentName = path.basename(path.dirname(sourceFilePath));

    return path.resolve(
        path.dirname(storybookArgTypesFile),
        `${componentName}.argtypes.generated.ts`
    );
}

/** Compute the exported argTypes variable name for a component. */
function getExportName(sourceFilePath: string) {
    const componentName = path.basename(path.dirname(sourceFilePath));

    const camelCaseName = componentName.replace(
        /-([a-z])/g,
        (_match: string, letter: string) => letter.toUpperCase()
    );

    return `${camelCaseName}ExtraArgTypes`;
}

/** Build a normalized import path from the registry file to a generated file. */
function getArgTypesImportPath(outputFile: string) {
    return path
        .relative(path.dirname(storybookArgTypesFile), outputFile)
        .replace(/\\/g, "/")
        .replace(/\.ts$/, "")
        .replace(/^([^./])/, "./$1");
}

/** Parse the Storybook title from a story file source string. */
function getStoryTitle(fileText: string) {
    const match = fileText.match(/title:\s*["'`]([^"'`]+)["'`]/);

    return match?.[1];
}

/** Parse the root component identifier from story meta. */
function getComponentRootIdentifier(fileText: string) {
    const match = fileText.match(/component:\s*([A-Za-z0-9_]+)/);

    return match?.[1];
}

/** Find the import path of a given identifier in a story file. */
function getImportPathForIdentifier(fileText: string, identifier: string) {
    const importRegex = new RegExp(
        `import\\s+(?:\\{[^}]*\\b${identifier}\\b[^}]*\\}|${identifier})\\s+from\\s+["']([^"']+)["']`
    );

    return fileText.match(importRegex)?.[1];
}

/** Resolve an import path from a story file to an absolute source file path. */
function resolveImportPath(storyFilePath: string, importPath: string) {
    const candidates = importPath.startsWith("src/")
        ? [
              path.resolve(importPath),
              path.resolve(`${importPath}.ts`),
              path.resolve(`${importPath}.tsx`),
              path.resolve(importPath, "index.ts"),
              path.resolve(importPath, "index.tsx"),
          ]
        : importPath.startsWith(".")
        ? [
              path.resolve(path.dirname(storyFilePath), importPath),
              path.resolve(path.dirname(storyFilePath), `${importPath}.ts`),
              path.resolve(path.dirname(storyFilePath), `${importPath}.tsx`),
              path.resolve(path.dirname(storyFilePath), importPath, "index.ts"),
              path.resolve(
                  path.dirname(storyFilePath),
                  importPath,
                  "index.tsx"
              ),
          ]
        : [];

    return candidates.find((candidate) => existsSync(candidate));
}

/** Resolve a component directory from a component source path. */
function getComponentDirectory(componentSourcePath: string) {
    const stats = statSync(componentSourcePath);

    if (stats.isDirectory()) {
        return componentSourcePath;
    }

    if (path.basename(componentSourcePath).startsWith("index.")) {
        return path.dirname(componentSourcePath);
    }

    return path.dirname(componentSourcePath);
}

/** Resolve the canonical types.ts path for a component directory. */
function getTypesFileForComponentDirectory(componentDirectory: string) {
    const typesFilePath = path.join(componentDirectory, "types.ts");

    return existsSync(typesFilePath) ? typesFilePath : undefined;
}

/**
 * Fallback: infer a component types.ts from the story file directory.
 *
 * Example: stories/text-list/*.stories.tsx -> src/text-list/types.ts.
 */
function getTypesFileFromStoryDirectory(storyFilePath: string) {
    const storiesRoot = path.resolve("stories");
    const relativeStoryDirectory = path.relative(
        storiesRoot,
        path.dirname(storyFilePath)
    );

    if (
        !relativeStoryDirectory ||
        relativeStoryDirectory.startsWith("..") ||
        path.isAbsolute(relativeStoryDirectory)
    ) {
        return undefined;
    }

    const topLevelStoryDirectory = relativeStoryDirectory.split(path.sep)[0];

    if (!topLevelStoryDirectory) {
        return undefined;
    }

    return getTypesFileForComponentDirectory(
        path.resolve("src", topLevelStoryDirectory)
    );
}

/** Check whether a file path looks like a Storybook story file. */
function isStoryFile(filePath: string) {
    return /(^|[\\/])stories[\\/].*\.stories\.(ts|tsx)$/.test(filePath);
}

/** Check whether a file path points to a component types.ts file. */
function isTypesFile(filePath: string) {
    return /(^|[\\/])types\.ts$/.test(filePath);
}

/** * Return `true` when the source file has a `@storybookSkipFile` marker comment.
 *
 * Place `// @storybookSkipFile` anywhere near the top of a `types.ts` file to
 * exclude the entire file from argTypes generation.
 */
function isSkippedFile(sourceFile: SourceFile) {
    const fullText = sourceFile.getFullText();
    const firstStatement = sourceFile.getStatements()[0];
    const textBeforeFirstStatement = firstStatement
        ? fullText.slice(0, firstStatement.getStart())
        : fullText;

    return /^\s*\/\/[^\n]*@storybookSkipFile\b/m.test(textBeforeFirstStatement);
}

/** * Generate the global Storybook registry mapping story titles to argTypes.
 *
 * Scans all story files to extract story titles and their associated component
 * types, then emits `.storybook/generated/storybook-argtypes.generated.ts`
 * which maps each story title to its generated argTypes for use in Storybook.
 */
async function generateStorybookArgTypesRegistry() {
    const project = createProject();
    const storyFiles = project.getSourceFiles(storyFileGlob);
    const importRows: string[] = [];
    const mapRows: string[] = [];

    for (const storyFile of storyFiles) {
        const storyFilePath = storyFile.getFilePath();
        const fileText = storyFile.getFullText();
        const title = getStoryTitle(fileText);
        const componentRootIdentifier = getComponentRootIdentifier(fileText);

        if (!title) {
            continue;
        }

        let typesFilePath: string | undefined;

        if (componentRootIdentifier) {
            const importPath = getImportPathForIdentifier(
                fileText,
                componentRootIdentifier
            );

            if (importPath) {
                const componentSourcePath = resolveImportPath(
                    storyFilePath,
                    importPath
                );

                if (componentSourcePath) {
                    const componentDirectory =
                        getComponentDirectory(componentSourcePath);
                    typesFilePath =
                        getTypesFileForComponentDirectory(componentDirectory);
                }
            }
        }

        if (!typesFilePath) {
            typesFilePath = getTypesFileFromStoryDirectory(storyFilePath);
        }

        if (!typesFilePath) {
            continue;
        }

        const typesSourceFile = getSourceFile(project, typesFilePath);

        if (isSkippedFile(typesSourceFile)) {
            continue;
        }

        const outputFile = getOutputFile(typesFilePath);
        const exportName = getExportName(typesFilePath);
        const importAlias = exportName.replace(
            /ExtraArgTypes$/,
            "StoryArgTypes"
        );

        importRows.push(
            `import { ${exportName} as ${importAlias} } from ${JSON.stringify(
                getArgTypesImportPath(outputFile)
            )};`
        );
        mapRows.push(`    ${JSON.stringify(title)}: ${importAlias},`);
    }

    const generated = `// This file is generated. Do not edit manually.
// Run: npm run storybook:argtypes

${Array.from(new Set(importRows)).sort().join("\n")}

export const storybookArgTypesByTitle: Record<string, unknown> = {
${mapRows.sort().join("\n")}
} satisfies Record<string, Record<string, unknown>>;
`;

    await fs.mkdir(path.dirname(storybookArgTypesFile), { recursive: true });
    await fs.writeFile(storybookArgTypesFile, generated);

    console.log(
        `[storybook:argtypes] generated ${path.relative(
            process.cwd(),
            storybookArgTypesFile
        )}`
    );
}

/**
 * Generate component-level argTypes from a single `types.ts` source file.
 *
 * Extracts all exported interfaces and type aliases, parses their JSDoc
 * metadata, and emits `.storybook/generated/[component].argtypes.generated.ts`.
 * Each generated file contains a single export mapping prop names to their
 * Storybook control metadata (type, description, deprecation, etc.).
 *
 * @param project ts-morph Project configured with tsconfig
 * @param sourceFilePath Absolute path to `src/[component]/types.ts`
 */
async function generateForSourceFile(project: Project, sourceFilePath: string) {
    const sourceFile = getSourceFile(project, sourceFilePath);

    if (isSkippedFile(sourceFile)) {
        return;
    }

    const outputFile = getOutputFile(sourceFilePath);
    const exportName = getExportName(sourceFilePath);
    const typeSections = getTypeSections(sourceFile);

    /** Resolve PropertySignature declarations from a Symbol. */
    function getPropertyDeclarations(symbol: TsMorphSymbol) {
        const declarations = symbol.getDeclarations();

        return declarations.filter(
            (d): d is PropertySignature =>
                d.getKindName() === "PropertySignature"
        ) as PropertySignature[];
    }

    /** Resolve a Symbol to its first PropertySignature declaration, if available. */
    function getPropertyDeclaration(symbol: TsMorphSymbol) {
        return getPropertyDeclarations(symbol)[0];
    }

    /** Check whether a symbol's declaration originates from node_modules. */
    function isFromNodeModules(symbol: TsMorphSymbol) {
        const declaration = symbol.getDeclarations()[0];

        if (!declaration) {
            return true;
        }

        return declaration
            .getSourceFile()
            .getFilePath()
            .includes("node_modules");
    }

    function buildTableMeta({
        category,
        defaultValue,
        tabGroup,
        summary,
    }: {
        category: string;
        defaultValue?: string;
        tabGroup?: string;
        summary: string | undefined;
    }) {
        return {
            category,
            defaultValue: defaultValue
                ? {
                      summary: defaultValue,
                  }
                : undefined,
            tabGroup,
            type: {
                summary,
            },
        };
    }

    function getInheritedHtmlAttributesRow(
        interfaceName: string,
        interfaceDeclaration: InterfaceDeclaration,
        interfaceJsDocMeta: JsDocMeta,
        category: string
    ): GeneratedArgType | undefined {
        const inheritedElementTypes = interfaceDeclaration
            .getExtends()
            .filter((extendNode) => {
                const expressionText = extendNode.getExpression().getText();

                return /(?:React\.)?\w*HTMLAttributes?$/.test(expressionText);
            })
            .map((extendNode) => extendNode.getTypeArguments()[0]?.getText())
            .filter((typeText): typeText is string => Boolean(typeText))
            .map((typeText) => cleanType(typeText));

        if (inheritedElementTypes.length === 0) {
            return undefined;
        }

        const uniqueElementTypes = Array.from(new Set(inheritedElementTypes));
        const inheritedDescription =
            uniqueElementTypes.length === 1
                ? `Inherits props from \`${uniqueElementTypes[0]}\`.`
                : `Inherits props from ${uniqueElementTypes
                      .map((t) => `\`${t}\``)
                      .join(", ")}.`;

        return {
            key: `${interfaceName}.__inheritedHtmlProps`,
            value: {
                control: false,
                deprecated: undefined,
                description: inheritedDescription,
                name: "",
                table: buildTableMeta({
                    category,
                    defaultValue: undefined,
                    tabGroup: interfaceJsDocMeta.tabGroup,
                    summary: undefined,
                }),
            },
        };
    }

    function mergeJsDocMeta(metas: JsDocMeta[]): JsDocMeta {
        const descriptions = metas
            .map((meta) => meta.description)
            .filter((value): value is string => Boolean(value));
        const remarks = metas
            .map((meta) => meta.remarks)
            .filter((value): value is string => Boolean(value));
        const examples = metas
            .flatMap((meta) => meta.examples ?? [])
            .filter(Boolean);

        return {
            description:
                descriptions.length > 0
                    ? Array.from(new Set(descriptions)).join("\n\n")
                    : undefined,
            remarks:
                remarks.length > 0
                    ? Array.from(new Set(remarks)).join("\n\n")
                    : undefined,
            examples:
                examples.length > 0 ? Array.from(new Set(examples)) : undefined,
            deprecated: metas.find((meta) => meta.deprecated !== undefined)
                ?.deprecated,
            defaultValue: metas.find((meta) => meta.defaultValue !== undefined)
                ?.defaultValue,
            tabGroup: metas.find((meta) => meta.tabGroup !== undefined)
                ?.tabGroup,
        };
    }

    /** Build argTypes rows for interface properties (including inherited). */
    function getInterfaceArgTypes(interfaceName: string): GeneratedArgType[] {
        const interfaceDeclaration =
            sourceFile.getInterfaceOrThrow(interfaceName);
        const interfaceJsDocMeta = getJsDocMeta(interfaceDeclaration);
        const declaredTabGroups = interfaceJsDocMeta.tabGroups ?? [
            interfaceJsDocMeta.tabGroup,
        ];
        const hasMultipleTabs = declaredTabGroups.filter(Boolean).length > 1;

        const category =
            interfaceDeclaration.getTypeParameters().length > 0
                ? `${interfaceName}<T>`
                : interfaceName;
        const inheritedHtmlAttributesRow = getInheritedHtmlAttributesRow(
            interfaceName,
            interfaceDeclaration,
            interfaceJsDocMeta,
            category
        );

        // An interface with no own members (empty body, only extends) is treated
        // as a pass-through alias: emit a single descriptive row instead of
        // expanding all the inherited HTML/React props.
        const ownMembers = interfaceDeclaration.getMembers();

        if (ownMembers.length === 0) {
            const description = toStorybookDescription(interfaceJsDocMeta);

            return [
                {
                    key: interfaceName,
                    value: {
                        control: false,
                        deprecated: interfaceJsDocMeta.deprecated,
                        description: description || undefined,
                        name: "",
                        table: buildTableMeta({
                            category,
                            defaultValue: undefined,
                            tabGroup: interfaceJsDocMeta.tabGroup,
                            summary: undefined,
                        }),
                    },
                } satisfies GeneratedArgType,
                ...(inheritedHtmlAttributesRow
                    ? [inheritedHtmlAttributesRow]
                    : []),
            ];
        }

        const resolvedProperties = interfaceDeclaration
            .getType()
            .getProperties()
            .filter((symbol) => !isFromNodeModules(symbol))
            .sort((a, b) => a.getName().localeCompare(b.getName()));

        const indexSignatureRows = interfaceDeclaration
            .getIndexSignatures()
            .map((indexSignature) => {
                const jsDocMeta = getJsDocMeta(indexSignature);
                const keyName = indexSignature.getKeyName();
                const keyType = cleanType(
                    indexSignature.getKeyTypeNode().getText()
                );
                const displayName = `[${keyName}: ${keyType}]`;

                return {
                    key: `${interfaceName}.${displayName}`,
                    value: {
                        control: false,
                        deprecated: jsDocMeta.deprecated,
                        description: toStorybookDescription(jsDocMeta),
                        name: displayName,
                        table: buildTableMeta({
                            category,
                            defaultValue: jsDocMeta.defaultValue,
                            tabGroup: interfaceJsDocMeta.tabGroup,
                            summary: getIndexSignatureTypeText(indexSignature),
                        }),
                    },
                } satisfies GeneratedArgType;
            });

        const baseRows: GeneratedArgType[] = [
            ...(inheritedHtmlAttributesRow ? [inheritedHtmlAttributesRow] : []),
            ...resolvedProperties.flatMap((symbol) => {
                const property = getPropertyDeclaration(symbol);

                if (!property) {
                    return [];
                }

                const propertyName = property
                    .getName()
                    .replace(/^['"]|['"]$/g, "");
                const jsDocMeta = getJsDocMeta(property);

                return [
                    {
                        key: `${interfaceName}.${propertyName}`,
                        value: {
                            control: false,
                            deprecated: jsDocMeta.deprecated,
                            description: toStorybookDescription(jsDocMeta),
                            name: propertyName,
                            table: buildTableMeta({
                                category,
                                defaultValue: jsDocMeta.defaultValue,
                                tabGroup: interfaceJsDocMeta.tabGroup,
                                summary: getPropertyTypeText(property),
                            }),
                        },
                    } satisfies GeneratedArgType,
                ];
            }),
            ...indexSignatureRows,
        ];

        if (!hasMultipleTabs) {
            return baseRows;
        }

        // Emit one copy of each row per declared tab, with unique keys.
        return (declaredTabGroups.filter(Boolean) as string[]).flatMap((tab) =>
            baseRows.map((row) => ({
                ...row,
                key: `${tab}__${row.key}`,
                value: {
                    ...row.value,
                    table: {
                        ...row.value.table,
                        tabGroup: tab,
                    },
                },
            }))
        );
    }

    /** Build argTypes rows for a type alias declaration. */
    function getTypeAliasArgTypes(typeName: string): GeneratedArgType[] {
        const typeAlias = sourceFile.getTypeAliasOrThrow(typeName);
        const jsDocMeta = getJsDocMeta(typeAlias);

        const category =
            typeAlias.getTypeParameters().length > 0
                ? `${typeName}<T>`
                : typeName;

        const normalizedTypeText = typeAlias
            .getTypeNodeOrThrow()
            .getText()
            .replace(/\s+/g, " ")
            .trim();
        const typeNodeKind = typeAlias.getTypeNodeOrThrow().getKindName();

        const isOmitAlias = /^Omit<.+>$/.test(normalizedTypeText);
        const isTypeLiteralAlias = typeNodeKind === "TypeLiteral";
        const isCompositeAlias =
            typeNodeKind === "IntersectionType" || typeNodeKind === "UnionType";

        if (isOmitAlias || isTypeLiteralAlias || isCompositeAlias) {
            const resolvedProperties = typeAlias
                .getType()
                .getProperties()
                .filter((symbol) => !isFromNodeModules(symbol))
                .sort((a, b) => a.getName().localeCompare(b.getName()));

            const propertyRows = resolvedProperties.flatMap((symbol) => {
                const declarations = getPropertyDeclarations(symbol);
                const property = declarations[0];

                if (!property) {
                    return [];
                }

                const propertyName = property
                    .getName()
                    .replace(/^['"]|['"]$/g, "");
                const propertyJsDocMeta = mergeJsDocMeta(
                    declarations.map((declaration) => getJsDocMeta(declaration))
                );
                const resolvedSymbolType = symbol.getTypeAtLocation(typeAlias);

                const propertySummary =
                    resolvedSymbolType.isAny() || resolvedSymbolType.isUnknown()
                        ? getPropertyTypeText(property)
                        : getSummaryTypeText(resolvedSymbolType, typeAlias);

                return [
                    {
                        key: `${typeName}.${propertyName}`,
                        value: {
                            control: false,
                            deprecated: propertyJsDocMeta.deprecated,
                            description:
                                toStorybookDescription(propertyJsDocMeta),
                            name: propertyName,
                            table: buildTableMeta({
                                category,
                                defaultValue: propertyJsDocMeta.defaultValue,
                                tabGroup: jsDocMeta.tabGroup,
                                summary: propertySummary,
                            }),
                        },
                    } satisfies GeneratedArgType,
                ];
            });

            if (!isCompositeAlias) {
                return propertyRows;
            }

            return [
                {
                    key: typeName,
                    value: {
                        name: category,
                        description: toStorybookDescription(jsDocMeta),
                        deprecated: jsDocMeta.deprecated,
                        control: false,
                        table: buildTableMeta({
                            category,
                            defaultValue: jsDocMeta.defaultValue,
                            tabGroup: jsDocMeta.tabGroup,
                            summary: getSummaryTypeText(
                                typeAlias.getType(),
                                typeAlias,
                                typeAlias.getTypeNodeOrThrow().getText()
                            ),
                        }),
                    },
                },
                ...propertyRows,
            ];
        }

        return [
            {
                key: typeName,
                value: {
                    name: category,
                    description: toStorybookDescription(jsDocMeta),
                    deprecated: jsDocMeta.deprecated,
                    control: false,
                    table: buildTableMeta({
                        category,
                        defaultValue: jsDocMeta.defaultValue,
                        tabGroup: jsDocMeta.tabGroup,
                        // For alias definitions, prefer expanded literal unions
                        // when TypeScript can resolve them (e.g. `Exclude<...>`).
                        summary: getSummaryTypeText(
                            typeAlias.getType(),
                            typeAlias,
                            typeAlias.getTypeNodeOrThrow().getText()
                        ),
                    }),
                },
            },
        ];
    }

    /**
     * Build a single descriptive row for `export const FooProps = Component<...>`
     * declarations that exist only to document inherited DOM props.
     */
    function getInheritedComponentArgTypes(): GeneratedArgType[] {
        return sourceFile
            .getVariableStatements()
            .filter((statement) => statement.isExported())
            .filter((statement) => {
                const declaration = statement.getDeclarations()[0];

                return declaration
                    ?.getInitializer()
                    ?.getText()
                    .includes("Component<");
            })
            .flatMap((statement) => {
                if (hasSkipTag(statement)) {
                    return [];
                }

                const declaration = statement.getDeclarations()[0];

                if (!declaration) {
                    return [];
                }

                const name = declaration.getName();
                const jsDocMeta = getJsDocMeta(statement);

                return [
                    {
                        key: name,
                        value: {
                            control: false,
                            deprecated: jsDocMeta.deprecated,
                            description: toStorybookDescription(jsDocMeta),
                            name: "",
                            table: buildTableMeta({
                                category: name,
                                defaultValue: jsDocMeta.defaultValue,
                                tabGroup: jsDocMeta.tabGroup,
                                summary: "",
                            }),
                        },
                    } satisfies GeneratedArgType,
                ];
            });
    }

    const rows = [
        ...typeSections.flatMap((typeName) => {
            const interfaceDeclaration = sourceFile.getInterface(typeName);

            if (interfaceDeclaration) {
                if (hasSkipTag(interfaceDeclaration)) {
                    return [];
                }

                return getInterfaceArgTypes(typeName);
            }

            const typeAlias = sourceFile.getTypeAlias(typeName);

            if (typeAlias) {
                if (hasSkipTag(typeAlias)) {
                    return [];
                }

                return getTypeAliasArgTypes(typeName);
            }

            throw new Error(
                `Unable to find interface or type alias: ${typeName}`
            );
        }),
        ...getInheritedComponentArgTypes(),
    ];

    const sortedRows = rows.sort((a, b) => a.key.localeCompare(b.key));

    const generatedArgTypes = Object.fromEntries(
        sortedRows.map((row) => [row.key, row.value])
    );

    const generated = `// This file is generated. Do not edit manually.
// Run: npm run storybook:argtypes

export const ${exportName} = ${JSON.stringify(
        generatedArgTypes,
        null,
        4
    )} satisfies Record<string, unknown>;
`;

    await fs.mkdir(path.dirname(outputFile), { recursive: true });
    await fs.writeFile(outputFile, generated);

    console.log(
        `[storybook:argtypes] generated ${path.relative(
            process.cwd(),
            outputFile
        )}`
    );
}

/**
 * Generate all component argTypes files and update the global registry.
 *
 * Orchestrates the full generation pipeline: generates per-component files
 * from all `src/*\/types.ts` files, then emits the global registry that
 * Storybook uses to populate props documentation.
 */
async function generateAll() {
    const project = createProject();
    const sourceFiles = project.getSourceFiles(sourceFileGlob);

    for (const sourceFile of sourceFiles) {
        await generateForSourceFile(project, sourceFile.getFilePath());
    }

    await generateStorybookArgTypesRegistry();

    console.log(`[storybook:argtypes] generated ${sourceFiles.length} files`);
}

/**
 * Runs a full generation pass immediately. If `--watch` is provided,
 * watches `src/` and `stories/` for changes and regenerates affected files.
 *
 * @remarks
 * Watch mode only regenerates when `types.ts` or `.stories.ts` files change,
 * ignoring generated files and other file types to avoid circular triggers.
 */
async function main() {
    const isWatchMode = process.argv.includes("--watch");

    await generateAll();

    if (!isWatchMode) {
        return;
    }

    console.log("[storybook:argtypes] watching...");

    const watcher = chokidar.watch(watchRoots, {
        ignoreInitial: true,
        persistent: true,
        ignored: (filePath, stats) => {
            // Do not ignore directories, otherwise chokidar cannot enter src.
            if (!stats?.isFile()) {
                return false;
            }

            if (filePath.endsWith(".argtypes.generated.ts")) {
                return true;
            }

            return !isTypesFile(filePath) && !isStoryFile(filePath);
        },
    });

    watcher.on("ready", () => {
        console.log("[storybook:argtypes] watcher ready");
    });

    watcher.on("all", async (eventName, filePath) => {
        console.log(`[storybook:argtypes] ${eventName}: ${filePath}`);

        try {
            const resolvedFilePath = path.resolve(filePath);

            if (isStoryFile(filePath)) {
                await generateStorybookArgTypesRegistry();
                return;
            }

            if (eventName === "unlink") {
                await fs.rm(getOutputFile(resolvedFilePath), { force: true });
                await generateStorybookArgTypesRegistry();
                return;
            }

            /**
             * Recreate project on every watched generate.
             * This makes watch mode read the latest file content.
             */
            await generateForSourceFile(createProject(), resolvedFilePath);
            await generateStorybookArgTypesRegistry();
        } catch (error) {
            console.error("[storybook:argtypes] failed to regenerate");
            console.error(error);
        }
    });
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});
