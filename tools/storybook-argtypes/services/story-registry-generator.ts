/**
 * StoryRegistryGenerator - Generate story-title to argTypes registry content.
 */

import { type SourceFile } from "ts-morph";

import type { IFileSystemAdapter } from "../adapters/file-system-adapter";
import { FileSystemAdapter } from "../adapters/file-system-adapter";
import { FilePathResolver } from "./file-path-resolver";

/**
 * Generates registry file content from story source files.
 */
export class StoryRegistryGenerator {
    private readonly filePathResolver: FilePathResolver;

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
        this.filePathResolver =
            filePathResolver ||
            new FilePathResolver(fileSystemAdapter || new FileSystemAdapter());
    }

    /**
     * Generate complete registry file content.
     * Returns the full content for the storybook-argtypes.generated.ts file.
     *
     * @returns Complete file content
     */
    public generateRegistryFileContent(
        storyFiles: SourceFile[],
        shouldIncludeTypesFile: (typesFilePath: string) => boolean
    ): string {
        const registry: Record<string, { source: string; export: string }> = {};

        for (const storyFile of storyFiles) {
            const storyFilePath = storyFile.getFilePath();
            const fileText = storyFile.getFullText();
            const title = this.filePathResolver.getStoryTitle(fileText);
            const componentReference =
                this.filePathResolver.getComponentReference(fileText);
            const componentRootIdentifier = componentReference?.rootIdentifier;

            if (!title) {
                continue;
            }

            let typesFilePath: string | undefined;
            let hasNestedComponentReference = false;

            if (componentRootIdentifier) {
                const importPath =
                    this.filePathResolver.getImportPathForIdentifier(
                        fileText,
                        componentRootIdentifier
                    );

                if (importPath) {
                    const componentSourcePath =
                        this.filePathResolver.resolveImportPath(
                            storyFilePath,
                            importPath
                        );

                    if (componentSourcePath) {
                        const componentDirectory =
                            this.filePathResolver.getComponentDirectory(
                                componentSourcePath
                            );
                        const nestedTypesFile =
                            this.filePathResolver.getNestedFormTypesFile(
                                componentDirectory,
                                componentReference?.memberPath ?? []
                            );

                        if (nestedTypesFile) {
                            typesFilePath = nestedTypesFile;
                            hasNestedComponentReference = true;
                        } else {
                            typesFilePath =
                                this.filePathResolver.getTypesFileForComponentDirectory(
                                    componentDirectory
                                );
                        }
                    }
                }
            }

            const storyDirectoryTypesFile =
                this.filePathResolver.getTypesFileFromStoryDirectory(
                    storyFilePath
                );

            if (
                storyDirectoryTypesFile &&
                (!typesFilePath || !hasNestedComponentReference)
            ) {
                typesFilePath = storyDirectoryTypesFile;
            }

            if (!typesFilePath) {
                continue;
            }

            if (!shouldIncludeTypesFile(typesFilePath)) {
                continue;
            }

            const outputFile =
                this.filePathResolver.getOutputFile(typesFilePath);
            registry[title] = {
                source: this.filePathResolver.getArgTypesImportPath(outputFile),
                export: this.filePathResolver.getExportName(typesFilePath),
            };
        }

        return this.renderRegistryFileContent(registry);
    }

    private renderRegistryFileContent(
        registry: Record<string, { source: string; export: string }>
    ): string {
        const importsBySource = new Map<string, Set<string>>();

        for (const [, { source, export: exportName }] of Object.entries(
            registry
        )) {
            if (!importsBySource.has(source)) {
                importsBySource.set(source, new Set());
            }
            importsBySource.get(source)!.add(exportName);
        }

        let content =
            "// This file is generated. Do not edit manually.\n// Run: npm run storybook:argtypes\n\n";

        for (const [source, exports] of importsBySource) {
            const sortedExports = Array.from(exports).sort();
            const exportList = sortedExports
                .map(
                    (exportName) =>
                        `${exportName} as ${exportName.replace(
                            /ExtraArgTypes$/,
                            "StoryArgTypes"
                        )}`
                )
                .join(", ");

            content += `import { ${exportList} } from "${source}";\n`;
        }

        content +=
            "\nexport const storybookArgTypesByTitle: Record<string, Record<string, unknown>> = {\n";

        for (const [title, { export: exportName }] of Object.entries(
            registry
        ).sort()) {
            const mapValue = exportName.replace(
                /ExtraArgTypes$/,
                "StoryArgTypes"
            );
            content += `  "${title}": ${mapValue},\n`;
        }

        content += "} satisfies Record<string, Record<string, unknown>>;\n";

        return content;
    }
}
