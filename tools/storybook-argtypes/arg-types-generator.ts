/**
 * ArgTypesGenerator - Orchestrator for Storybook argTypes generation.
 *
 * Composes all services to generate argTypes files from TypeScript sources
 * and the registry mapping story titles to their argTypes.
 *
 * This class mirrors the logic in the original procedural script but with
 * clear method boundaries and injectable dependencies.
 */

import { spawnSync } from "node:child_process";
import fs from "node:fs/promises";
import * as path from "node:path";

import {
    type IndexSignatureDeclaration,
    type InterfaceDeclaration,
    type PropertySignature,
    type SourceFile,
    type Symbol as TsMorphSymbol,
    type TypeAliasDeclaration,
} from "ts-morph";

import type { IFileSystemAdapter } from "./adapters/file-system-adapter";
import { FileSystemAdapter } from "./adapters/file-system-adapter";
import {
    SOURCE_FILE_GLOBS,
    STORYBOOK_ARGTYPES_FILE,
} from "./config/arg-types-config";
import { ArgTypesRowBuilder } from "./services/arg-types-row-builder";
import { FilePathResolver } from "./services/file-path-resolver";
import { JsDocMetadataExtractor } from "./services/jsdoc-metadata-extractor";
import { TypeFormattingService } from "./services/type-formatting-service";
import { TypeScriptSourceAnalyzer } from "./services/typescript-source-analyzer";
import type { GeneratedArgType } from "./types/arg-types-types";

/** Matches React HTML attribute interfaces (e.g. HTMLAttributes, ButtonHTMLAttributes, React.HTMLAttributes). */
const HTML_ATTRIBUTES_REGEX = /(?:React\.)?\w*HTMLAttributes?$/;

/**
 * Orchestrates the full Storybook argTypes generation pipeline.
 * Coordinates all services: source analysis, type formatting, row building, and registry generation.
 *
 * Usage:
 * ```typescript
 * const generator = new ArgTypesGenerator();
 * await generator.generateAll();
 * ```
 */
export class ArgTypesGenerator {
    private readonly analyzer: TypeScriptSourceAnalyzer;
    private readonly jsDocExtractor: JsDocMetadataExtractor;
    private readonly typeFormatter: TypeFormattingService;
    private readonly rowBuilder: ArgTypesRowBuilder;
    private readonly resolver: FilePathResolver;
    private readonly fsAdapter: IFileSystemAdapter;

    /** Cache for wrapped type names, keyed by source file path. */
    private readonly wrappedTypeNamesCache = new Map<
        string,
        Map<string, Set<string | undefined>>
    >();

    /**
     * Create a new ArgTypesGenerator.
     *
     * @param fsAdapter Optional filesystem adapter for testability
     */
    public constructor(fsAdapter?: IFileSystemAdapter) {
        this.fsAdapter = fsAdapter ?? new FileSystemAdapter();
        this.analyzer = new TypeScriptSourceAnalyzer();
        this.jsDocExtractor = new JsDocMetadataExtractor();
        this.typeFormatter = new TypeFormattingService();
        this.rowBuilder = new ArgTypesRowBuilder();
        this.resolver = new FilePathResolver(this.fsAdapter);
    }

    // =========================================================================
    // Public API
    // =========================================================================

    /**
     * Generate all component argTypes files and the registry.
     * This is the main entry point for full generation.
     */
    public async generateAll(): Promise<void> {
        const project = this.analyzer.getProject();
        const sourceFiles = SOURCE_FILE_GLOBS.flatMap((glob) =>
            project.getSourceFiles(glob)
        );

        for (const sourceFile of sourceFiles) {
            await this.generateForSourceFile(sourceFile.getFilePath());
        }

        await this.generateStorybookArgTypesRegistry();

        console.log(
            `[storybook:argtypes] generated ${sourceFiles.length} files`
        );
    }

    /**
     * Generate argTypes for a single component types.ts file.
     *
     * @param sourceFilePath Path to the source types.ts file
     */
    public async generateForSourceFile(sourceFilePath: string): Promise<void> {
        const sourceFile = this.analyzer.getSourceFile(sourceFilePath);

        if (this.analyzer.isSkippedFile(sourceFile)) {
            return;
        }

        const outputFile = this.getOutputFile(sourceFilePath);
        const exportName = this.getExportName(sourceFilePath);

        const wrappedTypeNames = this.getWrappedTypeNames(sourceFile);
        const localTypeNames = this.getLocalTypeNames(sourceFile);

        const rows: GeneratedArgType[] = [
            ...sourceFile.getInterfaces().flatMap((declaration) => {
                if (this.jsDocExtractor.hasSkipTag(declaration)) {
                    return [];
                }
                return this.getInterfaceArgTypes(
                    sourceFile,
                    declaration.getName()
                );
            }),
            ...sourceFile.getTypeAliases().flatMap((declaration) => {
                if (this.jsDocExtractor.hasSkipTag(declaration)) {
                    return [];
                }
                return this.getTypeAliasArgTypes(
                    sourceFile,
                    declaration.getName(),
                    wrappedTypeNames
                );
            }),
            ...[...wrappedTypeNames.entries()]
                .filter(([name]) => !localTypeNames.has(name))
                .flatMap(([name, tabGroups]) => {
                    if (this.shouldSkipImportedTypeRows(sourceFile, name)) {
                        return [];
                    }

                    const importedFile = this.resolveImportedTypeSourceFile(
                        sourceFile,
                        name
                    );

                    if (!importedFile) {
                        return [];
                    }

                    const groups = [...tabGroups];
                    const needsKeyPrefix = groups.length > 1;

                    return groups.flatMap((tabGroup) => {
                        const importedRows = this.generateImportedTypeRows(
                            importedFile,
                            name,
                            tabGroup
                        );

                        if (!needsKeyPrefix || !tabGroup) {
                            return importedRows;
                        }

                        return importedRows.map((row) => ({
                            ...row,
                            key: `${tabGroup}__${row.key}`,
                        }));
                    });
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

    /**
     * Generate the global registry mapping story titles to their argTypes imports.
     * Scans all story files to discover which component types.ts each story uses.
     */
    public async generateStorybookArgTypesRegistry(): Promise<void> {
        const project = this.analyzer.getProject();
        const storyFiles = project.getSourceFiles(
            "stories/**/*.stories.@(ts|tsx)"
        );
        const importRows: string[] = [];
        const mapRows: string[] = [];

        for (const storyFile of storyFiles) {
            const storyFilePath = storyFile.getFilePath();
            const fileText = storyFile.getFullText();
            const title = this.resolver.getStoryTitle(fileText);
            const componentReference =
                this.resolver.getComponentReference(fileText);
            const componentRootIdentifier = componentReference?.rootIdentifier;

            if (!title) {
                continue;
            }

            let typesFilePath: string | undefined;
            let hasNestedComponentReference = false;

            if (componentRootIdentifier) {
                const importPath = this.resolver.getImportPathForIdentifier(
                    fileText,
                    componentRootIdentifier
                );

                if (importPath) {
                    const componentSourcePath = this.resolver.resolveImportPath(
                        storyFilePath,
                        importPath
                    );

                    if (componentSourcePath) {
                        const componentDirectory =
                            this.resolver.getComponentDirectory(
                                componentSourcePath
                            );
                        const nestedTypesFile =
                            this.resolver.getNestedFormTypesFile(
                                componentDirectory,
                                componentReference?.memberPath ?? []
                            );

                        if (nestedTypesFile) {
                            typesFilePath = nestedTypesFile;
                            hasNestedComponentReference = true;
                        } else {
                            typesFilePath =
                                this.resolver.getTypesFileForComponentDirectory(
                                    componentDirectory
                                );
                        }
                    }
                }
            }

            const storyDirectoryTypesFile =
                this.resolver.getTypesFileFromStoryDirectory(storyFilePath);

            if (
                storyDirectoryTypesFile &&
                (!typesFilePath || !hasNestedComponentReference)
            ) {
                typesFilePath = storyDirectoryTypesFile;
            }

            if (!typesFilePath) {
                continue;
            }

            const typesSourceFile = this.analyzer.getSourceFile(typesFilePath);

            if (this.analyzer.isSkippedFile(typesSourceFile)) {
                continue;
            }

            const outputFile = this.getOutputFile(typesFilePath);
            const exportName = this.getExportName(typesFilePath);
            const importAlias = exportName.replace(
                /ExtraArgTypes$/,
                "StoryArgTypes"
            );

            importRows.push(
                `import { ${exportName} as ${importAlias} } from ${JSON.stringify(
                    this.getArgTypesImportPath(outputFile)
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

        await fs.mkdir(path.dirname(STORYBOOK_ARGTYPES_FILE), {
            recursive: true,
        });
        await fs.writeFile(STORYBOOK_ARGTYPES_FILE, generated);

        console.log(
            `[storybook:argtypes] generated ${path.relative(
                process.cwd(),
                STORYBOOK_ARGTYPES_FILE
            )}`
        );
    }

    /**
     * Format all generated files using prettier.
     */
    public formatGenerated(): void {
        spawnSync("npx", [
            "pretty-quick",
            "--pattern",
            ".storybook/generated/**/*",
        ]);
    }

    // =========================================================================
    // File I/O helpers
    // =========================================================================

    /**
     * Get the output file path for generated argTypes.
     */
    public getOutputFile(sourceFilePath: string): string {
        return this.resolver.getOutputFile(sourceFilePath);
    }

    /**
     * Get the export name for the component's argTypes object.
     * e.g. "form-custom-field" → "formCustomFieldExtraArgTypes"
     */
    public getExportName(sourceFilePath: string): string {
        return this.resolver.getExportName(sourceFilePath);
    }

    /**
     * Get the relative import path for a generated argTypes file.
     */
    public getArgTypesImportPath(outputFile: string): string {
        return this.resolver.getArgTypesImportPath(outputFile);
    }

    // =========================================================================
    // Type name helpers
    // =========================================================================

    private getLocalTypeNames(sourceFile: SourceFile): Set<string> {
        return new Set([
            ...sourceFile.getInterfaces().map((i) => i.getName()),
            ...sourceFile.getTypeAliases().map((t) => t.getName()),
        ]);
    }

    private getPropertyDeclaration(
        symbol: TsMorphSymbol
    ): PropertySignature | undefined {
        return symbol
            .getDeclarations()
            .find(
                (d): d is PropertySignature =>
                    d.getKindName() === "PropertySignature"
            );
    }

    private isExternalDeclaration(symbol: TsMorphSymbol): boolean {
        const declaration = symbol.getDeclarations()[0];

        if (!declaration) {
            return true;
        }

        const filePath = declaration.getSourceFile().getFilePath();

        return (
            filePath.includes("node_modules") ||
            filePath.includes("custom-types/")
        );
    }

    private getResolvedProperties(
        declaration: InterfaceDeclaration | TypeAliasDeclaration
    ): TsMorphSymbol[] {
        return declaration
            .getType()
            .getProperties()
            .filter((symbol) => !this.isExternalDeclaration(symbol))
            .sort((a, b) => a.getName().localeCompare(b.getName()));
    }

    private getPropertyName(property: PropertySignature): string {
        return property.getName().replace(/^['"]|['"]$/g, "");
    }

    private getCategoryName(
        name: string,
        declaration: InterfaceDeclaration | TypeAliasDeclaration
    ): string {
        return declaration.getTypeParameters().length > 0 ? `${name}<T>` : name;
    }

    private findReferencedTypeNames(
        declaration: InterfaceDeclaration | TypeAliasDeclaration,
        knownTypeNames: Set<string>,
        excludeSelf = false
    ): Set<string> {
        const found = new Set<string>();

        for (const prop of declaration.getType().getProperties()) {
            const propDecl = prop
                .getDeclarations()
                .find(
                    (d): d is PropertySignature =>
                        d.getKindName() === "PropertySignature"
                );

            if (!propDecl) {
                continue;
            }

            if (this.typeFormatter.isSimpleLiteralUnion(propDecl.getType())) {
                continue;
            }

            const typeText = propDecl.getTypeNode()?.getText() ?? "";

            for (const name of knownTypeNames) {
                if (excludeSelf && name === declaration.getName()) {
                    continue;
                }

                if (new RegExp(`\\b${name}\\b`).test(typeText)) {
                    found.add(name);
                }
            }
        }

        return found;
    }

    private resolveImportedTypeSourceFile(
        sourceFile: SourceFile,
        typeName: string
    ): SourceFile | undefined {
        for (const importDecl of sourceFile.getImportDeclarations()) {
            const namedImport = importDecl
                .getNamedImports()
                .find((ni) => ni.getName() === typeName);

            if (!namedImport) {
                continue;
            }

            const symbol = namedImport.getNameNode().getSymbol();
            const aliasedSymbol = symbol?.getAliasedSymbol() ?? symbol;
            const declaration = aliasedSymbol
                ?.getDeclarations()
                .find((decl) => {
                    const kind = decl.getKindName();
                    return (
                        kind === "InterfaceDeclaration" ||
                        kind === "TypeAliasDeclaration"
                    );
                });

            const resolvedSourceFile = declaration?.getSourceFile();

            if (
                resolvedSourceFile &&
                !resolvedSourceFile.getFilePath().includes("node_modules")
            ) {
                return resolvedSourceFile;
            }

            const moduleSpecifierSourceFile =
                importDecl.getModuleSpecifierSourceFile();

            if (
                moduleSpecifierSourceFile &&
                !moduleSpecifierSourceFile
                    .getFilePath()
                    .includes("node_modules")
            ) {
                return moduleSpecifierSourceFile;
            }
        }

        return undefined;
    }

    private getWrappedTypeNames(
        sourceFile: SourceFile
    ): Map<string, Set<string | undefined>> {
        const filePath = sourceFile.getFilePath();

        if (this.wrappedTypeNamesCache.has(filePath)) {
            return this.wrappedTypeNamesCache.get(filePath)!;
        }

        const wrappedNames = new Map<string, Set<string | undefined>>();

        const addWrappedName = (name: string, tabGroup: string | undefined) => {
            const existing = wrappedNames.get(name);

            if (existing) {
                existing.add(tabGroup);
                return;
            }

            wrappedNames.set(name, new Set([tabGroup]));
        };

        const knownTypeNames = new Set([
            ...this.getLocalTypeNames(sourceFile),
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
            if (this.jsDocExtractor.hasSkipTag(declaration)) {
                continue;
            }

            const tabGroup =
                this.jsDocExtractor.getJsDocMeta(declaration).tabGroups?.[0];

            if (declaration.getKindName() === "InterfaceDeclaration") {
                const extendsText = (declaration as InterfaceDeclaration)
                    .getExtends()
                    .map((e) => e.getText())
                    .join(" ");

                for (const name of knownTypeNames) {
                    if (new RegExp(`\\b${name}\\b`).test(extendsText)) {
                        addWrappedName(name, tabGroup);
                    }
                }
            }

            for (const name of this.findReferencedTypeNames(
                declaration,
                knownTypeNames
            )) {
                addWrappedName(name, tabGroup);
            }
        }

        this.wrappedTypeNamesCache.set(filePath, wrappedNames);

        return wrappedNames;
    }

    // =========================================================================
    // ArgType row generation
    // =========================================================================

    private getInheritedHtmlAttributesRow(
        interfaceName: string,
        interfaceDeclaration: InterfaceDeclaration,
        category: string,
        tabGroup: string | undefined
    ): GeneratedArgType | undefined {
        const inheritedElementTypes = interfaceDeclaration
            .getExtends()
            .filter((extendNode) =>
                HTML_ATTRIBUTES_REGEX.test(extendNode.getExpression().getText())
            )
            .map((extendNode) => extendNode.getTypeArguments()[0]?.getText())
            .filter((typeText): typeText is string => Boolean(typeText))
            .map((typeText) => this.typeFormatter.cleanType(typeText));

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

        return this.rowBuilder.buildArgTypeRow({
            key: `${interfaceName}.__inheritedHtmlProps`,
            name: "",
            category,
            tabGroup,
            description: inheritedDescription,
        });
    }

    private getInheritedInterfacesDescription(
        interfaceDeclaration: InterfaceDeclaration
    ): string | undefined {
        const inheritedTypes = interfaceDeclaration
            .getExtends()
            .map((extendNode) =>
                this.typeFormatter.cleanType(
                    extendNode.getExpression().getText()
                )
            )
            .filter((name) => !HTML_ATTRIBUTES_REGEX.test(name));

        if (inheritedTypes.length === 0) {
            return undefined;
        }

        const uniqueTypes = Array.from(new Set(inheritedTypes)).sort((a, b) =>
            a.localeCompare(b)
        );

        if (uniqueTypes.length === 1) {
            return `Inherits props from \`${uniqueTypes[0]}\`.`;
        }

        return `Inherits props from ${uniqueTypes
            .map((name) => `\`${name}\``)
            .join(", ")}.`;
    }

    private getInterfaceArgTypes(
        sourceFile: SourceFile,
        interfaceName: string,
        tabGroupOverride?: string
    ): GeneratedArgType[] {
        const interfaceDeclaration =
            sourceFile.getInterfaceOrThrow(interfaceName);
        const interfaceJsDocMeta =
            this.jsDocExtractor.getJsDocMeta(interfaceDeclaration);
        const declaredTabGroups = tabGroupOverride
            ? [tabGroupOverride]
            : interfaceJsDocMeta.tabGroups ?? [];
        const hasMultipleTabs = declaredTabGroups.length > 1;

        const category = this.getCategoryName(
            interfaceName,
            interfaceDeclaration
        );
        const inheritedHtmlAttributesRow = this.getInheritedHtmlAttributesRow(
            interfaceName,
            interfaceDeclaration,
            category,
            declaredTabGroups[0]
        );

        const ownMembers = interfaceDeclaration.getMembers();

        if (ownMembers.length === 0) {
            if (inheritedHtmlAttributesRow) {
                return [inheritedHtmlAttributesRow];
            }

            const inheritedInterfacesDescription =
                this.getInheritedInterfacesDescription(interfaceDeclaration);
            const interfaceDescription =
                this.jsDocExtractor.toStorybookDescription(interfaceJsDocMeta);
            const combinedDescription = [
                interfaceDescription,
                inheritedInterfacesDescription,
            ]
                .filter((text): text is string => Boolean(text))
                .join("\n\n");

            return [
                this.rowBuilder.buildArgTypeRow({
                    key: interfaceName,
                    name: "",
                    category,
                    tabGroup: declaredTabGroups[0],
                    deprecated: interfaceJsDocMeta.deprecated,
                    description: combinedDescription || undefined,
                }),
            ];
        }

        const resolvedProperties =
            this.getResolvedProperties(interfaceDeclaration);

        const indexSignatureRows = interfaceDeclaration
            .getIndexSignatures()
            .map((indexSignature: IndexSignatureDeclaration) => {
                const jsDocMeta =
                    this.jsDocExtractor.getJsDocMeta(indexSignature);
                const keyName = indexSignature.getKeyName();
                const keyType = this.typeFormatter.cleanType(
                    indexSignature.getKeyTypeNode().getText()
                );
                const displayName = `[${keyName}: ${keyType}]`;

                return this.rowBuilder.buildArgTypeRow({
                    category,
                    defaultValue: jsDocMeta.defaultValue,
                    deprecated: jsDocMeta.deprecated,
                    description:
                        this.jsDocExtractor.toStorybookDescription(jsDocMeta),
                    key: `${interfaceName}.${displayName}`,
                    name: displayName,
                    tabGroup: declaredTabGroups[0],
                    typeSummary:
                        this.typeFormatter.getIndexSignatureTypeText(
                            indexSignature
                        ),
                });
            });

        const propertyRows = resolvedProperties.flatMap((symbol) => {
            const property = this.getPropertyDeclaration(symbol);

            if (!property) {
                return [];
            }

            const propertyName = this.getPropertyName(property);
            const jsDocMeta = this.jsDocExtractor.getJsDocMeta(property);

            const resolvedType = symbol.getTypeAtLocation(interfaceDeclaration);
            let typeSummary = this.typeFormatter.getPropertyTypeText(property);

            if (this.typeFormatter.isSimpleLiteralUnion(resolvedType)) {
                typeSummary = this.typeFormatter.getSummaryTypeText(
                    resolvedType,
                    property
                );
            }

            return [
                this.rowBuilder.buildArgTypeRow({
                    category,
                    defaultValue: jsDocMeta.defaultValue,
                    deprecated: jsDocMeta.deprecated,
                    description:
                        this.jsDocExtractor.toStorybookDescription(jsDocMeta),
                    key: `${interfaceName}.${propertyName}`,
                    name: propertyName,
                    typeSummaryParts: this.typeFormatter.getUnionMemberTexts(
                        resolvedType,
                        property
                    ),
                    required: !property.hasQuestionToken(),
                    tabGroup: declaredTabGroups[0],
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

    private getTypeAliasArgTypes(
        sourceFile: SourceFile,
        typeName: string,
        wrappedTypeNames?: Map<string, Set<string | undefined>>,
        tabGroupOverride?: string
    ): GeneratedArgType[] {
        const typeAlias = sourceFile.getTypeAliasOrThrow(typeName);
        const jsDocMeta = this.jsDocExtractor.getJsDocMeta(typeAlias);
        if (tabGroupOverride) {
            jsDocMeta.tabGroups = [tabGroupOverride];
        }
        const category = this.getCategoryName(typeName, typeAlias);

        const isWrapped = wrappedTypeNames?.has(typeName);
        if (
            this.typeFormatter.isSimpleLiteralUnion(typeAlias.getType()) &&
            !isWrapped
        ) {
            return [];
        }

        const typeNodeKind = typeAlias.getTypeNodeOrThrow().getKindName();
        const isOmitAlias = /^Omit<.+>$/.test(
            typeAlias.getTypeNodeOrThrow().getText().replace(/\s+/g, " ").trim()
        );
        const isTypeLiteralAlias = typeNodeKind === "TypeLiteral";
        const isCompositeAlias =
            typeNodeKind === "IntersectionType" || typeNodeKind === "UnionType";

        if (isOmitAlias || isTypeLiteralAlias || isCompositeAlias) {
            const resolvedProperties = this.getResolvedProperties(typeAlias);

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

                const propertyName = this.getPropertyName(property);
                const propertyJsDocMeta = this.jsDocExtractor.mergeJsDocMeta(
                    declarations.map((declaration) =>
                        this.jsDocExtractor.getJsDocMeta(declaration)
                    )
                );
                const resolvedSymbolType = symbol.getTypeAtLocation(typeAlias);

                const propertySummary =
                    resolvedSymbolType.isAny() || resolvedSymbolType.isUnknown()
                        ? this.typeFormatter.getPropertyTypeText(property)
                        : this.typeFormatter.getSummaryTypeText(
                              resolvedSymbolType,
                              typeAlias
                          );

                return [
                    this.rowBuilder.buildArgTypeRow({
                        category,
                        defaultValue: propertyJsDocMeta.defaultValue,
                        deprecated: propertyJsDocMeta.deprecated,
                        description:
                            this.jsDocExtractor.toStorybookDescription(
                                propertyJsDocMeta
                            ),
                        key: `${typeName}.${propertyName}`,
                        name: propertyName,
                        required: !property.hasQuestionToken(),
                        tabGroup: jsDocMeta.tabGroups?.[0],
                        typeSummary: propertySummary,
                        typeSummaryParts:
                            this.typeFormatter.getUnionMemberTexts(
                                resolvedSymbolType,
                                typeAlias
                            ),
                    }),
                ];
            });

            if (!isCompositeAlias) {
                return propertyRows;
            }

            if (typeNodeKind === "IntersectionType") {
                return propertyRows;
            }

            const typeNodeText = typeAlias.getTypeNodeOrThrow().getText();
            const hasUnresolvableGeneric =
                /ComponentPropsWithoutRef|ComponentPropsWithRef|HTMLAttributes/.test(
                    typeNodeText
                );

            if (hasUnresolvableGeneric) {
                return propertyRows;
            }

            return [
                this.rowBuilder.buildArgTypeRow({
                    category,
                    defaultValue: jsDocMeta.defaultValue,
                    deprecated: jsDocMeta.deprecated,
                    description:
                        this.jsDocExtractor.toStorybookDescription(jsDocMeta),
                    key: typeName,
                    name: category,
                    tabGroup: jsDocMeta.tabGroups?.[0],
                    typeSummary: this.typeFormatter.getSummaryTypeText(
                        typeAlias.getType(),
                        typeAlias,
                        typeNodeText
                    ),
                }),
                ...propertyRows,
            ];
        }

        return [
            this.rowBuilder.buildArgTypeRow({
                category,
                defaultValue: jsDocMeta.defaultValue,
                deprecated: jsDocMeta.deprecated,
                description:
                    this.jsDocExtractor.toStorybookDescription(jsDocMeta),
                key: typeName,
                name: category,
                tabGroup: jsDocMeta.tabGroups?.[0],
                typeSummary: this.typeFormatter.getSummaryTypeText(
                    typeAlias.getType(),
                    typeAlias,
                    typeAlias.getTypeNodeOrThrow().getText()
                ),
            }),
        ];
    }

    private generateImportedTypeRows(
        importedFile: SourceFile,
        name: string,
        tabGroup: string | undefined,
        visited = new Set<string>()
    ): GeneratedArgType[] {
        if (visited.has(name)) {
            return [];
        }
        visited.add(name);

        const isInterface = !!importedFile.getInterface(name);
        const isTypeAlias = !!importedFile.getTypeAlias(name);

        if (!isInterface && !isTypeAlias) {
            return [];
        }

        const declaration = isInterface
            ? importedFile.getInterfaceOrThrow(name)
            : importedFile.getTypeAliasOrThrow(name);

        const rows = isInterface
            ? this.getInterfaceArgTypes(importedFile, name, tabGroup)
            : this.getTypeAliasArgTypes(
                  importedFile,
                  name,
                  this.getWrappedTypeNames(importedFile),
                  tabGroup
              );

        const localTypeNames = this.getLocalTypeNames(importedFile);

        const dependencies = this.findReferencedTypeNames(
            declaration,
            localTypeNames,
            true
        );

        const dependencyRows = [...dependencies].flatMap((depName) =>
            this.generateImportedTypeRows(
                importedFile,
                depName,
                tabGroup,
                visited
            )
        );

        return [...rows, ...dependencyRows];
    }

    private shouldSkipImportedTypeRows(
        sourceFile: SourceFile,
        importedTypeName: string
    ): boolean {
        return sourceFile.getInterfaces().some((interfaceDeclaration) => {
            if (this.jsDocExtractor.hasSkipTag(interfaceDeclaration)) {
                return false;
            }

            const extendsImportedType = interfaceDeclaration
                .getExtends()
                .some((extendNode) => {
                    const extendText = extendNode.getExpression().getText();
                    return new RegExp(`\\b${importedTypeName}\\b`).test(
                        extendText
                    );
                });

            return (
                extendsImportedType &&
                interfaceDeclaration.getMembers().length > 0
            );
        });
    }
}
