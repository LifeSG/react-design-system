/**
 * TypeDependencyResolver - Resolve and cache type dependencies across source files.
 *
 * Owns type-level dependency concerns: local type discovery, imported type source
 * resolution, and safe property-symbol extraction from declarations.
 */

import {
    type InterfaceDeclaration,
    type PropertySignature,
    type SourceFile,
    type Symbol as TsMorphSymbol,
    type TypeAliasDeclaration,
} from "ts-morph";

/**
 * Resolves and caches type dependency operations used by argTypes generation.
 */
export class TypeDependencyResolver {
    /** Cache of locally declared interface/type-alias names keyed by source file path. */
    private readonly localTypeNamesCache = new Map<string, Set<string>>();
    /** Cache of wrapped imported type usage grouped by source file path and type name. */
    private readonly wrappedTypeNamesCache = new Map<
        string,
        Map<string, Set<string | undefined>>
    >();

    /**
     * Returns local interface/type-alias names for a file and memoizes the result.
     */
    public getLocalTypeNames(sourceFile: SourceFile): Set<string> {
        const filePath = sourceFile.getFilePath();

        if (this.localTypeNamesCache.has(filePath)) {
            return this.localTypeNamesCache.get(filePath)!;
        }

        const typeNames = new Set<string>();

        for (const declaration of sourceFile.getInterfaces()) {
            typeNames.add(declaration.getName());
        }

        for (const declaration of sourceFile.getTypeAliases()) {
            typeNames.add(declaration.getName());
        }

        this.localTypeNamesCache.set(filePath, typeNames);
        return typeNames;
    }

    /**
     * Returns the first property-signature declaration for a symbol, if present.
     */
    public getPropertyDeclaration(
        symbol: TsMorphSymbol
    ): PropertySignature | undefined {
        return symbol
            .getDeclarations()
            .find(
                (d): d is PropertySignature =>
                    d.getKindName() === "PropertySignature"
            );
    }

    /**
     * Treats symbols from node_modules and custom-types as external declarations.
     */
    public isExternalDeclaration(symbol: TsMorphSymbol): boolean {
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

    /**
     * Resolves declaration properties and filters out external symbols.
     */
    public getResolvedProperties(
        declaration: InterfaceDeclaration | TypeAliasDeclaration
    ): TsMorphSymbol[] {
        return declaration
            .getType()
            .getProperties()
            .filter((symbol) => !this.isExternalDeclaration(symbol))
            .sort((a, b) => a.getName().localeCompare(b.getName()));
    }

    /**
     * Resolves the source file backing an imported type name.
     *
     * Resolution order:
     * 1. Follow alias symbol declarations for interface/type-alias declarations.
     * 2. Fall back to module specifier source file when declaration lookup is not available.
     */
    public resolveImportedTypeSourceFile(
        sourceFile: SourceFile,
        importedTypeName: string
    ): SourceFile | undefined {
        for (const importDecl of sourceFile.getImportDeclarations()) {
            const namedImport = importDecl
                .getNamedImports()
                .find((ni) => ni.getName() === importedTypeName);

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

    /**
     * Gets cached wrapped type names or computes and stores them lazily.
     */
    public getOrCreateWrappedTypeNames(
        sourceFile: SourceFile,
        factory: () => Map<string, Set<string | undefined>>
    ): Map<string, Set<string | undefined>> {
        const filePath = sourceFile.getFilePath();

        if (this.wrappedTypeNamesCache.has(filePath)) {
            return this.wrappedTypeNamesCache.get(filePath)!;
        }

        const wrappedTypeNames = factory();
        this.wrappedTypeNamesCache.set(filePath, wrappedTypeNames);

        return wrappedTypeNames;
    }

    /** Clear all in-memory caches. */
    public clear(): void {
        this.localTypeNamesCache.clear();
        this.wrappedTypeNamesCache.clear();
    }
}
