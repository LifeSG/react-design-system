import { type Project, type SourceFile } from "ts-morph";

import { TsMorphProjectFactory } from "./ts-morph-project-factory";

/**
 * Shared source provider for ts-morph project and source-file operations.
 */
export class TypeScriptSourceProvider {
    public getProject(): Project {
        return TsMorphProjectFactory.getProject();
    }

    public getSourceFile(filePath: string): SourceFile {
        const project = this.getProject();
        const sourceFile =
            project.getSourceFile(filePath) ??
            project.addSourceFileAtPathIfExists(filePath);

        if (!sourceFile) {
            throw new Error(`Could not find source file: ${filePath}`);
        }

        return sourceFile;
    }

    public getSourceFilesByGlobs(globs: readonly string[]): SourceFile[] {
        const filesByPath = new Map<string, SourceFile>();

        for (const glob of globs) {
            for (const sourceFile of this.getProject().getSourceFiles(glob)) {
                filesByPath.set(sourceFile.getFilePath(), sourceFile);
            }
        }

        return [...filesByPath.values()];
    }
}
