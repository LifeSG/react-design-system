/**
 * StoryRegistryGenerator - Generate story-title to argTypes registry content.
 */
import { type SourceFile } from "ts-morph";
import type { IFileSystemAdapter } from "../adapters/file-system-adapter";
import { FilePathResolver } from "./file-path-resolver";
/**
 * Generates registry file content from story source files.
 */
export declare class StoryRegistryGenerator {
    private readonly filePathResolver;
    /**
     * Create a new StoryRegistryGenerator.
     *
     * @param filePathResolver File path resolver service (optional, uses default)
     * @param fileSystemAdapter Filesystem adapter (optional, uses default)
     */
    constructor(filePathResolver?: FilePathResolver, fileSystemAdapter?: IFileSystemAdapter);
    /**
     * Generate complete registry file content.
     * Returns the full content for the storybook-argtypes.generated.ts file.
     *
     * @returns Complete file content
     */
    generateRegistryFileContent(storyFiles: SourceFile[], shouldIncludeTypesFile: (typesFilePath: string) => boolean): string;
    private renderRegistryFileContent;
}
