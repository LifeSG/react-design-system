/**
 * StoryRegistryGenerator - Generate registry of story files and their argTypes.
 *
 * Scans story files and generates a registry mapping story titles
 * to their corresponding generated argTypes imports.
 */

import * as path from "node:path";

import { GlobSync } from "glob";

import type { IFileSystemAdapter } from "../adapters/file-system-adapter";
import { FileSystemAdapter } from "../adapters/file-system-adapter";
import { STORY_FILE_GLOB } from "../config/arg-types-config";
import { FilePathResolver } from "./file-path-resolver";

/**
 * Generates a registry of story files mapped to their argTypes.
 * Scans all story files and determines their corresponding type files.
 *
 * Usage:
 * ```typescript
 * const generator = new StoryRegistryGenerator();
 * const registry = generator.generateRegistry();
 * ```
 */
export class StoryRegistryGenerator {
    private readonly filePathResolver: FilePathResolver;
    private readonly fileSystemAdapter: IFileSystemAdapter;

    /**
     * Create a new StoryRegistryGenerator.
     *
     * @param filePathResolver File path resolver service (optional, uses default)
     * @param fileSystemAdapter Filesystem adapter (optional, uses default)
     */
    public constructor(
        filePathResolver?: FilePathResolver,
        fileSystemAdapter?: IFileSystemAdapter
    ) {
        this.fileSystemAdapter = fileSystemAdapter || new FileSystemAdapter();
        this.filePathResolver =
            filePathResolver || new FilePathResolver(this.fileSystemAdapter);
    }

    /**
     * Check if a file is a story file based on naming convention.
     *
     * @param filePath Path to the file
     * @returns true if file is a story file, false otherwise
     */
    public isStoryFile(filePath: string): boolean {
        return /\.stories\.(tsx?|jsx?)$/.test(filePath);
    }

    /**
     * Check if a file is a types file based on naming convention.
     *
     * @param filePath Path to the file
     * @returns true if file is a types file, false otherwise
     */
    public isTypesFile(filePath: string): boolean {
        return /types\.(tsx?|jsx?)$/.test(filePath);
    }

    /**
     * Find all story files in the workspace.
     *
     * @returns Array of story file paths
     */
    public findAllStoryFiles(): string[] {
        try {
            return new GlobSync(STORY_FILE_GLOB, { cwd: process.cwd() }).found;
        } catch {
            return [];
        }
    }

    /**
     * Generate the story registry by scanning all story files.
     * Returns a mapping of story titles to their argTypes import information.
     *
     * @returns Registry object with story titles as keys
     */
    public generateRegistry(): Record<
        string,
        { source: string; export: string }
    > {
        const registry: Record<string, { source: string; export: string }> = {};

        const storyFiles = this.findAllStoryFiles();

        for (const storyFile of storyFiles) {
            try {
                // Read story file content
                if (!this.fileSystemAdapter.existsSync(storyFile)) {
                    continue;
                }

                // Extract story title from filename (e.g., button.stories.ts)
                const storyBaseName = path
                    .basename(storyFile)
                    .replace(/\.stories\.(tsx?|jsx?)$/, "");

                // Try to find corresponding types file
                let typesFile =
                    this.filePathResolver.getTypesFileFromStoryDirectory(
                        storyFile
                    );

                // Fallback: check src/{component}/types.ts
                if (!typesFile) {
                    const kebabName =
                        this.filePathResolver.toCamelCase(storyBaseName);
                    const candidate = path.resolve(
                        "src",
                        kebabName,
                        "types.ts"
                    );
                    if (
                        this.fileSystemAdapter.existsSync(candidate) &&
                        this.fileSystemAdapter.statSync(candidate).isFile()
                    ) {
                        typesFile = candidate;
                    }
                }

                if (typesFile) {
                    const exportName =
                        this.filePathResolver.getExportName(typesFile);
                    const importPath =
                        this.filePathResolver.getArgTypesImportPath(
                            this.filePathResolver.getOutputFile(typesFile)
                        );

                    // Use story file base name as key
                    registry[storyBaseName] = {
                        source: importPath,
                        export: exportName,
                    };
                }
            } catch {
                // Skip files that cause errors during processing
                continue;
            }
        }

        return registry;
    }

    /**
     * Generate a Storybook argTypes registry file header.
     * Returns the file header comment and imports.
     *
     * @returns Header string for the registry file
     */
    public getRegistryFileHeader(): string {
        return `/**
 * Auto-generated Storybook argTypes registry.
 * Maps story titles to their corresponding argTypes exports.
 *
 * DO NOT EDIT MANUALLY - generated by generate-storybook-argtypes.ts
 */

`;
    }

    /**
     * Generate complete registry file content.
     * Returns the full content for the storybook-argtypes.generated.ts file.
     *
     * @returns Complete file content
     */
    public generateRegistryFileContent(): string {
        const registry = this.generateRegistry();
        const header = this.getRegistryFileHeader();

        // Group imports by source
        const importsBySource = new Map<string, Set<string>>();

        for (const [, { source, export: exportName }] of Object.entries(
            registry
        )) {
            if (!importsBySource.has(source)) {
                importsBySource.set(source, new Set());
            }
            importsBySource.get(source)!.add(exportName);
        }

        // Build import statements
        let content = header;
        for (const [source, exports] of importsBySource) {
            const exportList = Array.from(exports).sort().join(", ");
            content += `import { ${exportList} } from "${source}";\n`;
        }

        // Build registry export
        content +=
            "\nexport const storybookArgTypesByTitle: Record<string, unknown> = {\n";

        for (const [title, { source: _, export: exportName }] of Object.entries(
            registry
        ).sort()) {
            content += `  "${title}": ${exportName},\n`;
        }

        content += "};\n";

        return content;
    }
}
