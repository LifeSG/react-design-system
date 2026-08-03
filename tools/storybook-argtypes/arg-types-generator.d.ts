/**
 * ArgTypesGenerator - Orchestrator for Storybook argTypes generation.
 *
 * Composes all services to generate argTypes files from TypeScript sources
 * and the registry mapping story titles to their argTypes.
 *
 * This class mirrors the logic in the original procedural script but with
 * clear method boundaries and injectable dependencies.
 */
import type { IFileSystemAdapter } from "./adapters/file-system-adapter";
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
export declare class ArgTypesGenerator {
    private readonly sourceProvider;
    private readonly jsDocExtractor;
    private readonly typeDependencyResolver;
    private readonly typeFormatter;
    private readonly rowBuilder;
    private readonly resolver;
    private readonly storyRegistryGenerator;
    private readonly generatedFileFormatter;
    private readonly fsAdapter;
    /**
     * Create a new ArgTypesGenerator.
     *
     * @param fsAdapter Optional filesystem adapter for testability
     */
    constructor(fsAdapter?: IFileSystemAdapter);
    /**
     * Generate all component argTypes files and the registry.
     * This is the main entry point for full generation.
     */
    generateAll(): Promise<void>;
    /**
     * Generate argTypes for a single component types.ts file.
     *
     * @param sourceFilePath Path to the source types.ts file
     */
    generateForSourceFile(sourceFilePath: string): Promise<void>;
    /**
     * Generate the global registry mapping story titles to their argTypes imports.
     * Scans all story files to discover which component types.ts each story uses.
     */
    generateStorybookArgTypesRegistry(): Promise<void>;
    /**
     * Format all generated files using prettier.
     */
    formatGenerated(): void;
    /**
     * Get the output file path for generated argTypes.
     */
    getOutputFile(sourceFilePath: string): string;
    /**
     * Delete the generated argTypes output file for a given source file path.
     * Used when the source file is removed during watch mode.
     */
    deleteOutputFile(sourceFilePath: string): Promise<void>;
    /**
     * Get the export name for the component's argTypes object.
     * e.g. "form-custom-field" → "formCustomFieldExtraArgTypes"
     */
    getExportName(sourceFilePath: string): string;
    /**
     * Get the relative import path for a generated argTypes file.
     */
    getArgTypesImportPath(outputFile: string): string;
    private getPropertyName;
    private getCategoryName;
    private findReferencedTypeNames;
    private getWrappedTypeNames;
    private getInheritedHtmlAttributesRow;
    private getInheritedInterfacesDescription;
    private getInterfaceArgTypes;
    private getTypeAliasArgTypes;
    private generateImportedTypeRows;
    private shouldSkipImportedTypeRows;
}
