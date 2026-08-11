/**
 * FilePathResolver - Resolve file paths and import paths for components and types.
 *
 * Handles mapping story files to their corresponding type files
 * and resolving import paths for components.
 */
import type { IFileSystemAdapter } from "../adapters/file-system-adapter";
/**
 * Resolves file paths for type definitions and story imports.
 * Maps story files to component types and resolves import paths.
 *
 * Usage:
 * ```typescript
 * const resolver = new FilePathResolver();
 * const typesFile = resolver.getTypesFileFromStoryDirectory('stories/button/button.stories.ts');
 * ```
 */
export declare class FilePathResolver {
    private readonly fileSystemAdapter;
    /**
     * Create a new FilePathResolver.
     *
     * @param fileSystemAdapter Adapter for filesystem operations (optional, uses default)
     */
    constructor(fileSystemAdapter?: IFileSystemAdapter);
    /**
     * Extract the story title from story file text.
     *
     * @param fileText Content of the story file
     * @returns Story title or undefined if not found
     */
    getStoryTitle(fileText: string): string | undefined;
    /**
     * Extract the component reference from story file text.
     * Matches `component: Form.CustomField` style declarations.
     *
     * @param fileText Content of the story file
     * @returns Object with rootIdentifier and memberPath, or undefined if not found
     */
    getComponentReference(fileText: string): {
        rootIdentifier: string;
        memberPath: string[];
    } | undefined;
    /**
     * Get the import path for a referenced identifier in story file text.
     *
     * @param fileText Story file content
     * @param identifier Component identifier to find
     * @returns Import path or undefined if not found
     */
    getImportPathForIdentifier(fileText: string, identifier: string): string | undefined;
    toKebabCase(name: string): string;
    private buildResolutionCandidates;
    /**
     * Resolve an import path to an absolute file path.
     * Handles `src/`-prefixed paths and relative paths.
     *
     * @param storyFilePath Path to the story file (for relative resolution)
     * @param importPath Import path to resolve
     * @returns Absolute file path or undefined if not found
     */
    resolveImportPath(storyFilePath: string, importPath: string): string | undefined;
    /**
     * Get component directory from a component source path.
     *
     * @param componentSourcePath Path to component source file
     * @returns Component directory path
     */
    getComponentDirectory(componentSourcePath: string): string;
    /**
     * Get the types.ts file for a component directory.
     *
     * @param componentDirectory Component directory path
     * @returns Path to types.ts or undefined if not found
     */
    getTypesFileForComponentDirectory(componentDirectory: string): string | undefined;
    /**
     * Get the types file for a nested form component (e.g., Form.CustomField).
     * Maps `form` directory + member path to `form-{leaf-member}/types.ts`.
     *
     * @param componentDirectory Component directory (must be the `form` directory)
     * @param memberPath Member access path (e.g., ["CustomField"])
     * @returns Path to the types file or undefined
     */
    getNestedFormTypesFile(componentDirectory: string, memberPath: string[]): string | undefined;
    /**
     * Get the types file inferred from a story file's location.
     * Resolves `stories/{dir}/{story-name}.stories.ts` to `src/{dir}/types.ts`
     * with subdirectory-aware fallback logic.
     *
     * @param storyFilePath Path to the story file
     * @returns Path to the inferred types file or undefined
     */
    getTypesFileFromStoryDirectory(storyFilePath: string): string | undefined;
    /**
     * Get the output file path for a types source file.
     * e.g. `src/button/types.ts` → `.storybook/generated/button.argtypes.generated.ts`
     *
     * @param sourceFilePath Absolute path to the types source file
     * @returns Absolute path to the generated output file
     */
    getOutputFile(sourceFilePath: string): string;
    /**
     * Get the export name for the component's argTypes object.
     * e.g. "form-custom-field" → "formCustomFieldExtraArgTypes"
     *
     * @param sourceFilePath Absolute path to the types source file
     * @returns Export identifier name
     */
    getExportName(sourceFilePath: string): string;
    /**
     * Get the relative import path for a generated argTypes file.
     *
     * @param outputFile Absolute path to the generated output file
     * @returns Relative import path (suitable for use in import statements)
     */
    getArgTypesImportPath(outputFile: string): string;
}
