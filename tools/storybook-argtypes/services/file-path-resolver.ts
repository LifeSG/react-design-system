/**
 * FilePathResolver - Resolve file paths and import paths for components and types.
 *
 * Handles mapping story files to their corresponding type files,
 * resolving import paths, and generating output file names.
 */

import * as path from "node:path";

import type { IFileSystemAdapter } from "../adapters/file-system-adapter";
import { FileSystemAdapter } from "../adapters/file-system-adapter";

/**
 * Resolves file paths for type definitions and output files.
 * Maps story files to component types and generates import paths.
 *
 * Usage:
 * ```typescript
 * const fsAdapter = new FileSystemAdapter();
 * const resolver = new FilePathResolver(fsAdapter);
 * const typesFile = resolver.getTypesFileFromStoryDirectory('stories/button.stories.ts');
 * ```
 */
export class FilePathResolver {
    private readonly fileSystemAdapter: IFileSystemAdapter;

    /**
     * Create a new FilePathResolver.
     *
     * @param fileSystemAdapter Adapter for filesystem operations (optional, uses default)
     */
    public constructor(
        fileSystemAdapter: IFileSystemAdapter = new FileSystemAdapter()
    ) {
        this.fileSystemAdapter = fileSystemAdapter;
    }

    /**
     * Get the output file path for a component type file.
     * Generates the filename for the generated .argtypes.ts file.
     *
     * @param sourceFilePath Path to the source types.ts file
     * @returns Output file path
     */
    public getOutputFile(sourceFilePath: string): string {
        const dir = path.dirname(sourceFilePath);
        const baseName = path.basename(sourceFilePath, ".ts");
        return path.join(dir, `${baseName}.argtypes.generated.ts`);
    }

    /**
     * Get the export name for a component based on its source path.
     * Converts path to camelCase export name (e.g., form-custom-field => formCustomFieldStoryArgTypes).
     *
     * @param sourceFilePath Path to the source types.ts file
     * @returns Export name for the argTypes object
     */
    public getExportName(sourceFilePath: string): string {
        const baseName = path.basename(sourceFilePath, ".ts");
        const componentName = this.toCamelCase(baseName);
        return `${componentName}StoryArgTypes`;
    }

    /**
     * Get the import path for the generated argTypes file from a story file.
     *
     * @param outputFile Path to the generated .argtypes.ts file
     * @returns Relative import path for use in story files
     */
    public getArgTypesImportPath(outputFile: string): string {
        return outputFile.replace(/\.ts$/, "");
    }

    /**
     * Extract the story title from story file text.
     * Looks for the Meta or default export.
     *
     * @param fileText Content of the story file
     * @returns Story title or empty string
     */
    public getStoryTitle(fileText: string): string {
        // Match: export const Meta = { title: 'Button' } or { title: "Button" }
        const metaTitleMatch = new RegExp(
            /(?:export\s+)?const\s+Meta\s*=\s*\{[^}]*title:\s*['"]([^'"]+)['"]/
        ).exec(fileText);
        if (metaTitleMatch) {
            return metaTitleMatch[1];
        }

        // Match: { title: 'Button/Variant' } in default export
        const defaultTitleMatch = new RegExp(
            /export\s+default\s*\{[^}]*title:\s*['"]([^'"]+)['"]/
        ).exec(fileText);
        if (defaultTitleMatch) {
            return defaultTitleMatch[1];
        }

        return "";
    }

    /**
     * Extract component reference from story file text.
     * Handles both simple names (Button) and nested paths (Form.CustomField).
     *
     * @param fileText Content of the story file
     * @returns Object with rootIdentifier and memberPath array
     */
    public getComponentReference(fileText: string): {
        rootIdentifier: string;
        memberPath: string[];
    } {
        // Match: import { Button } from '../button'
        // or: import Button from '../button'
        const importMatch = new RegExp(
            /import\s+(?:\{\s*(\w+)\s*\}|(\w+))\s+from\s+['"'][^'"]+['"]/
        ).exec(fileText);

        if (importMatch) {
            const identifier = importMatch[1] || importMatch[2];

            // Check if used as Form.CustomField or similar
            const usageMatch = new RegExp(
                `(?:stories|argTypes)\\s*=\\s*from\\s*'.*\\$${identifier}\\.[A-Za-z]+`
            ).exec(fileText);

            if (usageMatch) {
                return {
                    rootIdentifier: identifier,
                    memberPath: [usageMatch[1]],
                };
            }

            return {
                rootIdentifier: identifier,
                memberPath: [],
            };
        }

        return {
            rootIdentifier: "",
            memberPath: [],
        };
    }

    /**
     * Convert a string to camelCase format.
     * Handles kebab-case to camelCase conversion.
     *
     * @param name Input name (can be kebab-case or other formats)
     * @returns camelCase formatted name
     */
    public toCamelCase(name: string): string {
        return name.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
    }

    /**
     * Get the types file for a nested form component (e.g., Form.CustomField).
     * Maps Form.X to form-x/types.ts.
     *
     * @param componentName Component identifier (e.g., "CustomField")
     * @returns Path to the types file or undefined
     */
    public getNestedFormTypesFile(componentName: string): string | undefined {
        if (!componentName) {
            return undefined;
        }

        // Convert CamelCase to kebab-case
        const kebabName = componentName
            .replace(/([a-z])([A-Z])/g, "$1-$2")
            .toLowerCase();

        const candidate = `src/form/form-${kebabName}/types.ts`;
        if (this.fileSystemAdapter.existsSync(candidate)) {
            return candidate;
        }

        return undefined;
    }

    /**
     * Get the import path for a referenced identifier in story file.
     *
     * @param fileText Story file content
     * @param identifier Component identifier to find
     * @returns Import path or empty string
     */
    public getImportPathForIdentifier(
        fileText: string,
        identifier: string
    ): string {
        const pattern = new RegExp(
            `import\\s+(?:\\{\\s*${identifier}\\s*\\}|${identifier})\\s+from\\s+['"]([^'"]+)['"]`
        );
        const match = fileText.match(pattern);
        return match ? match[1] : "";
    }

    /**
     * Build candidate paths for type file resolution.
     * Tries multiple patterns: basename.ts, index.ts, types.ts, etc.
     *
     * @param basePath Base directory path
     * @returns Array of candidate type file paths
     */
    public buildResolutionCandidates(basePath: string): string[] {
        const baseName = path.basename(basePath);
        return [
            path.join(basePath, `${baseName}.ts`),
            path.join(basePath, "index.ts"),
            path.join(basePath, "types.ts"),
        ];
    }

    /**
     * Resolve an import path to an absolute file path.
     * Handles relative paths, component references, etc.
     *
     * @param storyFilePath Path to the story file (for relative resolution)
     * @param importPath Import path to resolve
     * @returns Absolute file path or empty string if not found
     */
    public resolveImportPath(
        storyFilePath: string,
        importPath: string
    ): string {
        const storyDir = path.dirname(storyFilePath);
        const absolutePath = path.resolve(storyDir, importPath + ".ts");

        // Check if direct file exists
        if (
            this.fileSystemAdapter.existsSync(absolutePath) &&
            this.fileSystemAdapter.statSync(absolutePath).isFile()
        ) {
            return absolutePath;
        }

        // Check if directory with index.ts exists
        const indexPath = path.resolve(storyDir, importPath, "index.ts");
        if (
            this.fileSystemAdapter.existsSync(indexPath) &&
            this.fileSystemAdapter.statSync(indexPath).isFile()
        ) {
            return indexPath;
        }

        return "";
    }

    /**
     * Get component directory from a component source path.
     * E.g., src/button/types.ts => src/button.
     *
     * @param componentSourcePath Path to component source file
     * @returns Component directory path
     */
    public getComponentDirectory(componentSourcePath: string): string {
        return path.dirname(componentSourcePath);
    }

    /**
     * Get types file for a component directory.
     * Looks for types.ts or index.ts in the directory.
     *
     * @param componentDirectory Component directory path
     * @returns Path to types file or empty string
     */
    public getTypesFileForComponentDirectory(
        componentDirectory: string
    ): string {
        const candidates = this.buildResolutionCandidates(componentDirectory);
        for (const candidate of candidates) {
            if (
                this.fileSystemAdapter.existsSync(candidate) &&
                this.fileSystemAdapter.statSync(candidate).isFile()
            ) {
                return candidate;
            }
        }
        return "";
    }

    /**
     * Get types file from a story directory.
     * Infers the types file based on story file location.
     * E.g., stories/button.stories.ts => src/button/types.ts.
     *
     * @param storyFilePath Path to the story file
     * @returns Path to inferred types file or empty string
     */
    public getTypesFileFromStoryDirectory(storyFilePath: string): string {
        const storyBaseName = path
            .basename(storyFilePath)
            .replace(/\.stories\.(tsx?|jsx?)$/, "");

        // Try stripped name (e.g., "button-icon" => "button")
        const stripedName = storyBaseName.split("-")[0];
        let candidate = path.resolve("src", stripedName, "types.ts");

        if (
            this.fileSystemAdapter.existsSync(candidate) &&
            this.fileSystemAdapter.statSync(candidate).isFile()
        ) {
            return candidate;
        }

        // Try full story base name as directory (e.g., "popover-inline" => "popover-inline")
        candidate = path.resolve("src", storyBaseName, "types.ts");
        if (
            this.fileSystemAdapter.existsSync(candidate) &&
            this.fileSystemAdapter.statSync(candidate).isFile()
        ) {
            return candidate;
        }

        return "";
    }
}
