/**
 * TypeDependencyResolver - Resolve and cache type dependencies across source files.
 *
 * Owns type-level dependency concerns: local type discovery, imported type source
 * resolution, and safe property-symbol extraction from declarations.
 */
import { type InterfaceDeclaration, type PropertySignature, type SourceFile, type Symbol as TsMorphSymbol, type TypeAliasDeclaration } from "ts-morph";
/**
 * Resolves and caches type dependency operations used by argTypes generation.
 */
export declare class TypeDependencyResolver {
    /** Cache of locally declared interface/type-alias names keyed by source file path. */
    private readonly localTypeNamesCache;
    /** Cache of wrapped imported type usage grouped by source file path and type name. */
    private readonly wrappedTypeNamesCache;
    /**
     * Returns local interface/type-alias names for a file and memoizes the result.
     */
    getLocalTypeNames(sourceFile: SourceFile): Set<string>;
    /**
     * Returns the first property-signature declaration for a symbol, if present.
     */
    getPropertyDeclaration(symbol: TsMorphSymbol): PropertySignature | undefined;
    /**
     * Treats symbols from node_modules and custom-types as external declarations.
     */
    isExternalDeclaration(symbol: TsMorphSymbol): boolean;
    /**
     * Resolves declaration properties and filters out external symbols.
     */
    getResolvedProperties(declaration: InterfaceDeclaration | TypeAliasDeclaration): TsMorphSymbol[];
    /**
     * Resolves the source file backing an imported type name.
     *
     * Resolution order:
     * 1. Follow alias symbol declarations for interface/type-alias declarations.
     * 2. Fall back to module specifier source file when declaration lookup is not available.
     */
    resolveImportedTypeSourceFile(sourceFile: SourceFile, importedTypeName: string): SourceFile | undefined;
    /**
     * Gets cached wrapped type names or computes and stores them lazily.
     */
    getOrCreateWrappedTypeNames(sourceFile: SourceFile, factory: () => Map<string, Set<string | undefined>>): Map<string, Set<string | undefined>>;
    /** Clear all in-memory caches. */
    clear(): void;
}
