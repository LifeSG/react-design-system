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

import { spawnSync } from "node:child_process";
import { existsSync } from "node:fs";
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

// =============================================================================
// Configuration & Types
// =============================================================================

type JsDocMeta = {
    defaultValue?: string;
    deprecated?: string | boolean;
    description?: string;
    examples?: string[];
    remarks?: string;
    tabGroups?: string[];
};

type StorybookTaggedDeclarationNode =
    | InterfaceDeclaration
    | TypeAliasDeclaration
    | VariableStatement;

const sourceFileGlob = "src/*/types.ts";
const watchRoots = ["src", "stories"];
const storyFileGlob = "stories/**/*.stories.@(ts|tsx)";
const storybookArgTypesFile = path.resolve(
    ".storybook/generated/storybook-argtypes.generated.ts"
);

const typeFormatFlags =
    TypeFormatFlags.NoTruncation |
    TypeFormatFlags.UseSingleQuotesForStringLiteralType;

// =============================================================================
// Project & Source File Setup
// =============================================================================

function createProject() {
    return new Project({
        tsConfigFilePath: path.resolve("tsconfig.json"),
    });
}

function getSourceFile(project: Project, filePath: string) {
    const sourceFile =
        project.getSourceFile(filePath) ??
        project.addSourceFileAtPathIfExists(filePath);

    if (!sourceFile) {
        throw new Error(`Could not find source file: ${filePath}`);
    }

    return sourceFile;
}

// =============================================================================
// JSDoc / Comment Parsing
// =============================================================================

function getTagCommentText(tag: { getCommentText: () => string | undefined }) {
    const comment = tag.getCommentText();

    return typeof comment === "string" ? comment.trim() : undefined;
}

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

/** Parse `@storybookSection` from leading non-JSDoc comments. Returns comma-separated sections. */
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

function hasSkipTag(node: StorybookTaggedDeclarationNode) {
    for (const comment of getLeadingNonJsDocComments(node)) {
        if (/@?storybookSkipProps\b/.test(comment)) {
            return true;
        }
    }

    return false;
}

/**
 * Collect JSDoc metadata from a node. Supported tags: "@deprecated", "@default", "@remarks", "@example".
 * Also reads "@storybookSection" from leading non-JSDoc comments on interface/type/variable nodes.
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
        tabGroups: tabGroups.length > 0 ? tabGroups : undefined,
    };
}

/** Merge JSDoc metadata from multiple declarations of the same symbol (e.g. declaration merging). */
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

// =============================================================================
// Type Text Formatting
// =============================================================================

function cleanType(type: string) {
    let cleaned = type
        .replace(/\s*\|\s*undefined/g, "")
        .replace(/^\s*\|\s*/, "") // Remove leading pipe
        .replace(/\s+/g, " ")
        .trim();

    // Strip redundant outer parens: ((args) => Type) -> (args) => Type
    // Only strip when the entire string is wrapped in one balanced pair of parens.
    if (cleaned.startsWith("(") && cleaned.endsWith(")")) {
        let depth = 0;
        let outerWraps = true;

        for (let i = 0; i < cleaned.length - 1; i++) {
            if (cleaned[i] === "(") depth++;
            if (cleaned[i] === ")") depth--;
            if (depth === 0) {
                outerWraps = false;
                break;
            }
        }

        if (outerWraps) {
            cleaned = cleaned.slice(1, -1);
        }
    }

    return cleaned;
}

/** Split top-level union members without breaking nested generics or function types. */
function splitTopLevelUnionMembers(typeText: string) {
    const members: string[] = [];
    let current = "";
    let parenDepth = 0;
    let bracketDepth = 0;
    let braceDepth = 0;
    let angleDepth = 0;

    for (const char of typeText) {
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

function formatUnionSummary(typeText: string) {
    const members = splitTopLevelUnionMembers(typeText);

    if (members.length <= 1) {
        return typeText;
    }

    return members.filter(Boolean).join("\n| ");
}

/**
 * Check if a union type contains only literal types (strings, numbers, booleans).
 * Returns true for "simple" unions that should be inlined in properties.
 */
function isSimpleLiteralUnion(type: Type): boolean {
    const nonNullableType = type.getNonNullableType();

    if (!nonNullableType.isUnion()) {
        return false;
    }

    const unionTypes = nonNullableType.getUnionTypes();

    // Exclude boolean unions (true | false) — keep them as "boolean" instead
    const hasBooleanLiterals = unionTypes.some((t) => t.isBooleanLiteral());
    const hasOnlyBooleanLiterals =
        hasBooleanLiterals && unionTypes.every((t) => t.isBooleanLiteral());

    if (hasOnlyBooleanLiterals) {
        return false;
    }

    return unionTypes.every(
        (t) =>
            t.isStringLiteral() || t.isNumberLiteral() || t.isBooleanLiteral()
    );
}

/**
 * Expand a type to its literal union members when fully resolvable.
 * e.g. `Exclude<FontSize, "form-label">` -> `"heading-xxl" | "heading-xl" | ...`
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

function getIndexSignatureTypeText(indexSignature: IndexSignatureDeclaration) {
    const summary = getSummaryTypeText(
        indexSignature.getReturnType(),
        indexSignature,
        indexSignature.getReturnTypeNode()?.getText()
    );

    return formatUnionSummary(summary);
}

// =============================================================================
// Path & File Resolution
// =============================================================================

function getOutputFile(sourceFilePath: string) {
    const componentName = path.basename(path.dirname(sourceFilePath));

    return path.resolve(
        path.dirname(storybookArgTypesFile),
        `${componentName}.argtypes.generated.ts`
    );
}

function getExportName(sourceFilePath: string) {
    const componentName = path.basename(path.dirname(sourceFilePath));

    const camelCaseName = componentName.replace(
        /-([a-z])/g,
        (_match: string, letter: string) => letter.toUpperCase()
    );

    return `${camelCaseName}ExtraArgTypes`;
}

function getArgTypesImportPath(outputFile: string) {
    return path
        .relative(path.dirname(storybookArgTypesFile), outputFile)
        .replaceAll("\\", "/")
        .replace(/\.ts$/, "")
        .replace(/^([^./])/, "./$1");
}

function getStoryTitle(fileText: string) {
    const match = new RegExp(/title:\s*["'`]([^"'`]+)["'`]/).exec(fileText);

    return match?.[1];
}

function getComponentRootIdentifier(fileText: string) {
    const match = new RegExp(/component:\s*([A-Za-z0-9_]+)/).exec(fileText);

    return match?.[1];
}

function getImportPathForIdentifier(fileText: string, identifier: string) {
    const importRegex = new RegExp(
        `import\\s+(?:\\{[^}]*\\b${identifier}\\b[^}]*\\}|${identifier})\\s+from\\s+["']([^"']+)["']`
    );

    return importRegex.exec(fileText)?.[1];
}

/** Build file resolution candidates: [exact, .ts, .tsx, /index.ts, /index.tsx]. */
function buildResolutionCandidates(basePath: string) {
    return [
        basePath,
        `${basePath}.ts`,
        `${basePath}.tsx`,
        path.join(basePath, "index.ts"),
        path.join(basePath, "index.tsx"),
    ];
}

function resolveImportPath(storyFilePath: string, importPath: string) {
    let basePath: string;

    if (importPath.startsWith("src/")) {
        basePath = path.resolve(importPath);
    } else if (importPath.startsWith(".")) {
        basePath = path.resolve(path.dirname(storyFilePath), importPath);
    } else {
        return undefined;
    }

    return buildResolutionCandidates(basePath).find((candidate) =>
        existsSync(candidate)
    );
}

function getComponentDirectory(componentSourcePath: string) {
    if (path.basename(componentSourcePath).startsWith("index.")) {
        return path.dirname(componentSourcePath);
    }

    return path.dirname(componentSourcePath);
}

function getTypesFileForComponentDirectory(componentDirectory: string) {
    const typesFilePath = path.join(componentDirectory, "types.ts");

    return existsSync(typesFilePath) ? typesFilePath : undefined;
}

/** Fallback: infer types.ts from the story's directory name matching a src/ folder. */
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

function isStoryFile(filePath: string) {
    return /(^|[\\/])stories[\\/].*\.stories\.(ts|tsx)$/.test(filePath);
}

function isTypesFile(filePath: string) {
    return /(^|[\\/])types\.ts$/.test(filePath);
}

/** Check for `// @storybookSkipFile` marker in file-leading comments. */
function isSkippedFile(sourceFile: SourceFile) {
    const fullText = sourceFile.getFullText();
    const firstStatement = sourceFile.getStatements()[0];
    const textBeforeFirstStatement = firstStatement
        ? fullText.slice(0, firstStatement.getStart())
        : fullText;

    return /^\s*\/\/[^\n]*@storybookSkipFile\b/m.test(textBeforeFirstStatement);
}

// =============================================================================
// ArgType Row Construction
// =============================================================================

/** Matches React HTML attribute interfaces (e.g. HTMLAttributes, ButtonHTMLAttributes, React.HTMLAttributes). */
const HTML_ATTRIBUTES_REGEX = /(?:React\.)?\w*HTMLAttributes?$/;

/**
 * HTML element props that leak through `isFromNodeModules` because they are
 * declared in lib.dom.d.ts rather than @types/react. These are already
 * covered by the synthetic __inheritedHtmlProps row.
 */
const HTML_ELEMENT_PROPS = new Set(["inert"]);

/** Single factory for building a GeneratedArgType row. All 7 construction sites funnel through here. */
function buildArgTypeRow(opts: {
    key: string;
    name: string;
    category: string;
    tabGroup?: string;
    typeSummary?: string;
    defaultValue?: string;
    deprecated?: string | boolean;
    description?: string;
}): GeneratedArgType {
    return {
        key: opts.key,
        value: {
            control: false,
            deprecated: opts.deprecated,
            description: opts.description,
            name: opts.name,
            table: {
                category: opts.category,
                defaultValue: opts.defaultValue
                    ? { summary: opts.defaultValue }
                    : undefined,
                tabGroup: opts.tabGroup,
                type: {
                    summary: opts.typeSummary,
                },
            },
        },
    };
}

/** Strip surrounding quotes from property names (handles `"foo"` or `'foo'`). */
function getPropertyName(property: PropertySignature) {
    return property.getName().replace(/^['"]|['"]$/g, "");
}

/** Build category label, appending `<T>` when the declaration has type parameters. */
function getCategoryName(
    name: string,
    declaration: InterfaceDeclaration | TypeAliasDeclaration
) {
    return declaration.getTypeParameters().length > 0 ? `${name}<T>` : name;
}

/** Check whether a symbol's declaration originates from node_modules. */
function isFromNodeModules(symbol: TsMorphSymbol) {
    const declaration = symbol.getDeclarations()[0];

    if (!declaration) {
        return true;
    }

    return declaration.getSourceFile().getFilePath().includes("node_modules");
}

/** Get own (non-node_modules) properties from a type, sorted alphabetically. */
function getResolvedProperties(
    declaration: InterfaceDeclaration | TypeAliasDeclaration,
    excludeHtmlAttributes: boolean = false
) {
    let properties = declaration
        .getType()
        .getProperties()
        .filter((symbol) => !isFromNodeModules(symbol))
        .sort((a, b) => a.getName().localeCompare(b.getName()));

    // When interface extends HTMLAttributes, exclude inherited HTML element properties
    // since they're documented via the synthetic __inheritedHtmlProps row
    if (
        excludeHtmlAttributes &&
        declaration.getKindName() === "InterfaceDeclaration"
    ) {
        properties = properties.filter(
            (p) => !HTML_ELEMENT_PROPS.has(p.getName())
        );
    }

    return properties;
}

/** Resolve a Symbol to its first PropertySignature declaration. */
function getPropertyDeclaration(symbol: TsMorphSymbol) {
    return symbol
        .getDeclarations()
        .find(
            (d): d is PropertySignature =>
                d.getKindName() === "PropertySignature"
        );
}

/**
 * Collect type names that appear in "wrapped" contexts — arrays, generics,
 * complex unions, or function signatures. These types need their own category
 * rows even if they're simple literal unions, because their values can't be
 * inlined at the usage site.
 *
 * A property like `size: ButtonSize` is NOT wrapped (the union can be inlined).
 * A property like `sizes: ButtonSize[]` IS wrapped (ButtonSize needs its own row).
 */
function getWrappedTypeNames(sourceFile: SourceFile): Set<string> {
    const wrappedNames = new Set<string>();

    // Collect all type names visible in this file: local definitions + named imports
    const knownTypeNames = new Set([
        ...sourceFile.getInterfaces().map((i) => i.getName()),
        ...sourceFile.getTypeAliases().map((t) => t.getName()),
        ...sourceFile
            .getImportDeclarations()
            .flatMap((decl) =>
                decl.getNamedImports().map((ni) => ni.getName())
            ),
    ]);

    for (const declaration of [
        ...sourceFile.getInterfaces(),
        ...sourceFile.getTypeAliases(),
    ]) {
        for (const prop of declaration.getType().getProperties()) {
            const propDecl = prop
                .getDeclarations()
                .find(
                    (d): d is PropertySignature =>
                        d.getKindName() === "PropertySignature"
                );

            if (!propDecl) continue;

            const propType = propDecl.getType();

            // If the property's resolved type is itself a simple literal union,
            // the type name is NOT wrapped — it can be inlined at this usage site.
            if (isSimpleLiteralUnion(propType)) continue;

            // Otherwise, any known type name referenced in this property's type
            // text is considered "wrapped" and needs its own category row.
            const typeText = propDecl.getTypeNode()?.getText() ?? "";

            for (const name of knownTypeNames) {
                if (new RegExp(`\\b${name}\\b`).test(typeText)) {
                    wrappedNames.add(name);
                }
            }
        }
    }

    return wrappedNames;
}

// =============================================================================
// Per-Component Generation
// =============================================================================

function hasInheritedHtmlAttributes(
    interfaceDeclaration: InterfaceDeclaration
): boolean {
    return interfaceDeclaration.getExtends().some((extendNode) => {
        return HTML_ATTRIBUTES_REGEX.test(extendNode.getExpression().getText());
    });
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
            return HTML_ATTRIBUTES_REGEX.test(
                extendNode.getExpression().getText()
            );
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

    return buildArgTypeRow({
        key: `${interfaceName}.__inheritedHtmlProps`,
        name: "",
        category,
        tabGroup: interfaceJsDocMeta.tabGroups?.[0],
        description: inheritedDescription,
    });
}

function getInterfaceArgTypes(
    sourceFile: SourceFile,
    interfaceName: string
): GeneratedArgType[] {
    const interfaceDeclaration = sourceFile.getInterfaceOrThrow(interfaceName);
    const interfaceJsDocMeta = getJsDocMeta(interfaceDeclaration);
    const declaredTabGroups = interfaceJsDocMeta.tabGroups ?? [];
    const hasMultipleTabs = declaredTabGroups.length > 1;

    const category = getCategoryName(interfaceName, interfaceDeclaration);
    const inheritedHtmlAttributesRow = getInheritedHtmlAttributesRow(
        interfaceName,
        interfaceDeclaration,
        interfaceJsDocMeta,
        category
    );

    // An interface with no own members is treated as a pass-through alias:
    // emit a single descriptive row instead of expanding all inherited HTML/React props.
    const ownMembers = interfaceDeclaration.getMembers();

    if (ownMembers.length === 0) {
        // If the interface only extends HTML attributes, return just the inherited row
        if (inheritedHtmlAttributesRow) {
            return [inheritedHtmlAttributesRow];
        }

        // Otherwise return a generic descriptive row
        return [
            buildArgTypeRow({
                key: interfaceName,
                name: "",
                category,
                tabGroup: interfaceJsDocMeta.tabGroups?.[0],
                deprecated: interfaceJsDocMeta.deprecated,
                description: toStorybookDescription(interfaceJsDocMeta),
            }),
        ];
    }

    const hasHtmlAttrs = hasInheritedHtmlAttributes(interfaceDeclaration);
    const resolvedProperties = getResolvedProperties(
        interfaceDeclaration,
        hasHtmlAttrs
    );

    const indexSignatureRows = interfaceDeclaration
        .getIndexSignatures()
        .map((indexSignature) => {
            const jsDocMeta = getJsDocMeta(indexSignature);
            const keyName = indexSignature.getKeyName();
            const keyType = cleanType(
                indexSignature.getKeyTypeNode().getText()
            );
            const displayName = `[${keyName}: ${keyType}]`;

            return buildArgTypeRow({
                category,
                defaultValue: jsDocMeta.defaultValue,
                deprecated: jsDocMeta.deprecated,
                description: toStorybookDescription(jsDocMeta),
                key: `${interfaceName}.${displayName}`,
                name: displayName,
                tabGroup: interfaceJsDocMeta.tabGroups?.[0],
                typeSummary: getIndexSignatureTypeText(indexSignature),
            });
        });

    const propertyRows = resolvedProperties.flatMap((symbol) => {
        const property = getPropertyDeclaration(symbol);

        if (!property) {
            return [];
        }

        const propertyName = getPropertyName(property);
        const jsDocMeta = getJsDocMeta(property);

        // Resolve the property type to check for simple literal unions to inline
        const resolvedType = symbol.getTypeAtLocation(interfaceDeclaration);
        let typeSummary = getPropertyTypeText(property);

        // If the resolved type is a simple literal union, use the expanded version
        if (isSimpleLiteralUnion(resolvedType)) {
            typeSummary = getSummaryTypeText(resolvedType, property);
        }

        return [
            buildArgTypeRow({
                category,
                defaultValue: jsDocMeta.defaultValue,
                deprecated: jsDocMeta.deprecated,
                description: toStorybookDescription(jsDocMeta),
                key: `${interfaceName}.${propertyName}`,
                name: propertyName,
                tabGroup: interfaceJsDocMeta.tabGroups?.[0],
                typeSummary,
            }),
        ];
    });

    const baseRows: GeneratedArgType[] = [
        ...(inheritedHtmlAttributesRow ? [inheritedHtmlAttributesRow] : []),
        ...propertyRows,
        ...indexSignatureRows,
    ];

    if (!hasMultipleTabs) {
        return baseRows;
    }

    // When an interface declares multiple @storybookSection tabs, duplicate rows
    // into each tab so the props table renders one complete copy per tab.
    return declaredTabGroups.flatMap((tab) =>
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

function getTypeAliasArgTypes(
    sourceFile: SourceFile,
    typeName: string,
    wrappedTypeNames?: Set<string>
): GeneratedArgType[] {
    const typeAlias = sourceFile.getTypeAliasOrThrow(typeName);
    const jsDocMeta = getJsDocMeta(typeAlias);
    const category = getCategoryName(typeName, typeAlias);

    // Skip simple literal unions only if they're NOT used in wrapped contexts.
    // If wrapped (e.g., TypeName[]), we need the category entry for documentation.
    const isWrapped = wrappedTypeNames?.has(typeName);
    if (isSimpleLiteralUnion(typeAlias.getType()) && !isWrapped) {
        return [];
    }

    const typeNodeKind = typeAlias.getTypeNodeOrThrow().getKindName();
    const isOmitAlias = /^Omit<.+>$/.test(
        typeAlias.getTypeNodeOrThrow().getText().replace(/\s+/g, " ").trim()
    );
    const isTypeLiteralAlias = typeNodeKind === "TypeLiteral";
    const isCompositeAlias =
        typeNodeKind === "IntersectionType" || typeNodeKind === "UnionType";

    // Expandable type aliases: resolve individual properties
    if (isOmitAlias || isTypeLiteralAlias || isCompositeAlias) {
        const resolvedProperties = getResolvedProperties(typeAlias);

        const propertyRows = resolvedProperties.flatMap((symbol) => {
            const declarations = symbol
                .getDeclarations()
                .filter(
                    (d): d is PropertySignature =>
                        d.getKindName() === "PropertySignature"
                );
            const property = declarations[0];

            if (!property) {
                return [];
            }

            const propertyName = getPropertyName(property);
            const propertyJsDocMeta = mergeJsDocMeta(
                declarations.map((declaration) => getJsDocMeta(declaration))
            );
            const resolvedSymbolType = symbol.getTypeAtLocation(typeAlias);

            const propertySummary =
                resolvedSymbolType.isAny() || resolvedSymbolType.isUnknown()
                    ? getPropertyTypeText(property)
                    : getSummaryTypeText(resolvedSymbolType, typeAlias);

            return [
                buildArgTypeRow({
                    category,
                    defaultValue: propertyJsDocMeta.defaultValue,
                    deprecated: propertyJsDocMeta.deprecated,
                    description: toStorybookDescription(propertyJsDocMeta),
                    key: `${typeName}.${propertyName}`,
                    name: propertyName,
                    tabGroup: jsDocMeta.tabGroups?.[0],
                    typeSummary: propertySummary,
                }),
            ];
        });

        if (!isCompositeAlias) {
            return propertyRows;
        }

        // Composite types get a header row showing the full union/intersection shape
        return [
            buildArgTypeRow({
                category,
                defaultValue: jsDocMeta.defaultValue,
                deprecated: jsDocMeta.deprecated,
                description: toStorybookDescription(jsDocMeta),
                key: typeName,
                name: category,
                tabGroup: jsDocMeta.tabGroups?.[0],
                typeSummary: getSummaryTypeText(
                    typeAlias.getType(),
                    typeAlias,
                    typeAlias.getTypeNodeOrThrow().getText()
                ),
            }),
            ...propertyRows,
        ];
    }

    // Non-expandable type aliases (mapped types, generics, etc.): single summary row
    // (Simple literal unions are already skipped earlier and inlined in properties)
    return [
        buildArgTypeRow({
            category,
            defaultValue: jsDocMeta.defaultValue,
            deprecated: jsDocMeta.deprecated,
            description: toStorybookDescription(jsDocMeta),
            key: typeName,
            name: category,
            tabGroup: jsDocMeta.tabGroups?.[0],
            typeSummary: getSummaryTypeText(
                typeAlias.getType(),
                typeAlias,
                typeAlias.getTypeNodeOrThrow().getText()
            ),
        }),
    ];
}

/** Generate argTypes for a single component's types.ts file. */
async function generateForSourceFile(project: Project, sourceFilePath: string) {
    const sourceFile = getSourceFile(project, sourceFilePath);

    if (isSkippedFile(sourceFile)) {
        return;
    }

    const outputFile = getOutputFile(sourceFilePath);
    const exportName = getExportName(sourceFilePath);

    // Compute once and reuse across all local type processing
    const wrappedTypeNames = getWrappedTypeNames(sourceFile);

    const localTypeNames = new Set([
        ...sourceFile.getInterfaces().map((i) => i.getName()),
        ...sourceFile.getTypeAliases().map((t) => t.getName()),
    ]);

    const rows = [
        ...sourceFile.getInterfaces().flatMap((declaration) => {
            if (hasSkipTag(declaration)) {
                return [];
            }

            return getInterfaceArgTypes(sourceFile, declaration.getName());
        }),
        ...sourceFile.getTypeAliases().flatMap((declaration) => {
            if (hasSkipTag(declaration)) {
                return [];
            }

            return getTypeAliasArgTypes(
                sourceFile,
                declaration.getName(),
                wrappedTypeNames
            );
        }),
        // For wrapped types that are imported from non-node_modules source files,
        // generate rows by resolving them from their origin file.
        ...[...wrappedTypeNames]
            .filter((name) => !localTypeNames.has(name))
            .flatMap((name) => {
                for (const importDecl of sourceFile.getImportDeclarations()) {
                    const hasName = importDecl
                        .getNamedImports()
                        .some((ni) => ni.getName() === name);

                    if (!hasName) {
                        continue;
                    }

                    const importedFile =
                        importDecl.getModuleSpecifierSourceFile();

                    if (
                        !importedFile ||
                        importedFile.getFilePath().includes("node_modules")
                    ) {
                        continue;
                    }

                    if (importedFile.getInterface(name)) {
                        return getInterfaceArgTypes(importedFile, name);
                    }

                    if (importedFile.getTypeAlias(name)) {
                        return getTypeAliasArgTypes(
                            importedFile,
                            name,
                            getWrappedTypeNames(importedFile)
                        );
                    }
                }

                return [];
            }),
    ];

    const sortedRows = rows.toSorted((a, b) => a.key.localeCompare(b.key));

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

// =============================================================================
// Registry Generation
// =============================================================================

/**
 * Generate the global registry mapping story titles to their argTypes imports.
 * Scans all story files to discover which component types.ts each story uses.
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

// =============================================================================
// CLI Entrypoint
// =============================================================================

function formatGenerated() {
    spawnSync("npx", [
        "pretty-quick",
        "--pattern",
        ".storybook/generated/**/*",
    ]);
}

async function generateAll() {
    const project = createProject();
    const sourceFiles = project.getSourceFiles(sourceFileGlob);

    for (const sourceFile of sourceFiles) {
        await generateForSourceFile(project, sourceFile.getFilePath());
    }

    await generateStorybookArgTypesRegistry();

    console.log(`[storybook:argtypes] generated ${sourceFiles.length} files`);
}

async function main() {
    const isWatchMode = process.argv.includes("--watch");

    await generateAll();
    formatGenerated();

    if (!isWatchMode) {
        return;
    }

    console.log("[storybook:argtypes] watching...");

    const watcher = chokidar.watch(watchRoots, {
        ignoreInitial: true,
        persistent: true,
        ignored: (filePath, stats) => {
            if (!stats?.isFile()) {
                return false;
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
            } else if (eventName === "unlink") {
                await fs.rm(getOutputFile(resolvedFilePath), { force: true });
                await generateStorybookArgTypesRegistry();
            } else {
                await generateForSourceFile(createProject(), resolvedFilePath);
                await generateStorybookArgTypesRegistry();
            }

            formatGenerated();
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
