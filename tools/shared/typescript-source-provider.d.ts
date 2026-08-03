import { type Project, type SourceFile } from "ts-morph";
/**
 * Shared source provider for ts-morph project and source-file operations.
 */
export declare class TypeScriptSourceProvider {
    getProject(): Project;
    getSourceFile(filePath: string): SourceFile;
    getSourceFilesByGlobs(globs: readonly string[]): SourceFile[];
}
