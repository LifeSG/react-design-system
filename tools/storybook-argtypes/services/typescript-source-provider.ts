/**
 * TypeScriptSourceProvider - Provide TypeScript source files via ts-morph.
 *
 * Handles ts-morph project access and source-file lookup.
 */

import { type Project, type SourceFile } from "ts-morph";

import { TsMorphProjectFactory } from "../adapters/ts-morph-project-factory";

/**
 * Provides TypeScript source files.
 * Provides access to the ts-morph Project and source file operations.
 *
 * Usage:
 * ```typescript
 * const provider = new TypeScriptSourceProvider();
 * const sourceFile = provider.getSourceFile('src/button/types.ts');
 * ```
 */
export class TypeScriptSourceProvider {
    /**
     * Get the singleton ts-morph Project instance.
     * Used to perform TypeScript AST analysis.
     *
     * @returns Singleton Project instance
     */
    public getProject(): Project {
        return TsMorphProjectFactory.getProject();
    }

    /**
     * Get a source file by path.
     * Attempts to find the file in the project, then adds it if not found.
     *
     * @param filePath Relative or absolute path to the source file
     * @returns SourceFile instance
     * @throws Error if file cannot be found or accessed
     */
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
}
