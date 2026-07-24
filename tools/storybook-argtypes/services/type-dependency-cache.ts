/**
 * TypeDependencyCache - Cache and resolve type dependencies across files.
 *
 * Handles type resolution, symbol lookup, and caching of type dependencies
 * to avoid duplicate analysis of imported types.
 */

import { type SourceFile, type Symbol as TsMorphSymbol } from "ts-morph";

/**
 * Caches resolved type names and dependencies.
 * Reduces redundant type analysis and improves performance.
 *
 * Usage:
 * ```typescript
 * const cache = new TypeDependencyCache();
 * const localNames = cache.getLocalTypeNames(sourceFile);
 * ```
 */
export class TypeDependencyCache {
    // Cache for local type names by source file
    private readonly localTypeNamesCache = new Map<string, Set<string>>();
    // Cache for wrapped type names (e.g., React.FC -> FC)
    private readonly wrappedTypeNamesCache = new Map<
        string,
        Map<string, string>
    >();

    /**
     * Get all locally-defined type names in a source file.
     * Includes interfaces, type aliases, classes, etc.
     * Caches results for subsequent lookups.
     *
     * @param sourceFile Source file to analyze
     * @returns Set of local type names
     */
    public getLocalTypeNames(sourceFile: SourceFile): Set<string> {
        const filePath = sourceFile.getFilePath();

        // Return cached result if available
        if (this.localTypeNamesCache.has(filePath)) {
            return this.localTypeNamesCache.get(filePath)!;
        }

        const typeNames = new Set<string>();

        // Get all exported symbols
        const exportedSymbols = sourceFile.getExportedDeclarations().entries();

        for (const [name] of exportedSymbols) {
            typeNames.add(name);
        }

        // Also get internal declarations from statements
        for (const statement of sourceFile.getStatements()) {
            if ("getName" in statement) {
                const name = (statement as { getName: () => string }).getName();
                if (name) {
                    typeNames.add(name);
                }
            }
        }

        // Cache and return
        this.localTypeNamesCache.set(filePath, typeNames);
        return typeNames;
    }

    /**
     * Get property declaration from a symbol.
     * Handles symbol resolution and property lookups.
     *
     * @param symbol ts-morph Symbol to query
     * @returns Property name or undefined
     */
    public getPropertyDeclaration(symbol: TsMorphSymbol): string | undefined {
        const declarations = symbol.getDeclarations();
        if (declarations.length === 0) {
            return undefined;
        }

        const decl = declarations[0];
        if ("getName" in decl) {
            return (decl as { getName: () => string | undefined }).getName();
        }

        return undefined;
    }

    /**
     * Find type names referenced within a source file.
     * Analyzes import statements and type references.
     *
     * @param sourceFile Source file to analyze
     * @returns Set of referenced type names
     */
    public findReferencedTypeNames(sourceFile: SourceFile): Set<string> {
        const referencedNames = new Set<string>();

        // Get import statements
        const importDecls = sourceFile.getImportDeclarations();
        for (const importDecl of importDecls) {
            const namedImports = importDecl.getNamedImports();
            for (const namedImport of namedImports) {
                const name = namedImport.getName();
                if (name) {
                    referencedNames.add(name);
                }
            }

            // Also check default import
            const defaultImport = importDecl.getDefaultImport();
            if (defaultImport && "getText" in defaultImport) {
                const text = (
                    defaultImport as { getText: () => string }
                ).getText();
                if (text) {
                    referencedNames.add(text);
                }
            }
        }

        return referencedNames;
    }

    /**
     * Resolve the source file for an imported type.
     * Follows aliased symbols to find the true declaration source file.
     *
     * @param sourceFile Source file containing the import
     * @param importedTypeName Name of the imported type
     * @returns Source file where type is defined, or undefined
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
     * Get wrapped type names (e.g., React.FC -> FC).
     * Caches results by source file and type name.
     *
     * @param sourceFile Source file context
     * @returns Map of wrapped names to unwrapped names
     */
    public getWrappedTypeNames(sourceFile: SourceFile): Map<string, string> {
        const filePath = sourceFile.getFilePath();

        // Return cached result if available
        if (this.wrappedTypeNamesCache.has(filePath)) {
            return this.wrappedTypeNamesCache.get(filePath)!;
        }

        const wrappedNames = new Map<string, string>();

        // Extract wrapped names from import statements
        const importDecls = sourceFile.getImportDeclarations();
        for (const importDecl of importDecls) {
            const moduleSpecifier = importDecl.getModuleSpecifierValue();
            const namedImports = importDecl.getNamedImports();

            for (const namedImport of namedImports) {
                const name = namedImport.getName();
                const alias = namedImport.getAliasNode();

                // If there's an alias, use it; otherwise use the name
                const importedName = alias ? alias.getText() : name;

                // Build wrapped name (e.g., "React.FC")
                const wrappedName = `${moduleSpecifier}.${name}`;
                wrappedNames.set(wrappedName, importedName);

                // Also map direct name for convenience
                wrappedNames.set(name, importedName);
            }
        }

        // Cache and return
        this.wrappedTypeNamesCache.set(filePath, wrappedNames);
        return wrappedNames;
    }

    /**
     * Check if a symbol comes from an external/imported module.
     * Returns true for symbols from node_modules or custom-types/.
     *
     * @param symbol ts-morph Symbol to check
     * @returns true if symbol is external, false if local
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
     * Get resolved properties from a symbol.
     * Flattens properties from inherited interfaces.
     *
     * @param symbol ts-morph Symbol to analyze
     * @returns Array of resolved property names
     */
    public getResolvedProperties(symbol: TsMorphSymbol): string[] {
        const properties: string[] = [];

        try {
            const valueDeclaration = symbol.getValueDeclaration();
            if (!valueDeclaration) {
                return properties;
            }

            // Get symbol members
            const members = symbol.getMembers();
            if (members) {
                for (const member of members) {
                    const memberName = member.getName();
                    if (memberName && !memberName.startsWith("__")) {
                        properties.push(memberName);
                    }
                }
            }
        } catch {
            // If resolution fails, return what we have
        }

        return properties;
    }

    /**
     * Clear all caches.
     * Useful for testing or resetting analyzer state.
     */
    public clear(): void {
        this.localTypeNamesCache.clear();
        this.wrappedTypeNamesCache.clear();
    }
}
