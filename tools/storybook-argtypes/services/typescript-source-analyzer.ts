/**
 * TypeScriptSourceAnalyzer - Analyze TypeScript source files using ts-morph.
 *
 * Handles project creation and source file operations.
 * Responsible for reading and parsing TypeScript files.
 */

import { type Project, type SourceFile } from "ts-morph";

import { TsMorphProjectFactory } from "../adapters/ts-morph-project-factory";

/**
 * Analyzes TypeScript source files.
 * Provides access to the ts-morph Project and source file operations.
 *
 * Usage:
 * ```typescript
 * const analyzer = new TypeScriptSourceAnalyzer();
 * const sourceFile = analyzer.getSourceFile('src/button/types.ts');
 * ```
 */
export class TypeScriptSourceAnalyzer {
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

    /**
     * Check if a source file should be skipped from analysis.
     * Files with @storybook-skip JSDoc tag are skipped.
     *
     * @param sourceFile Source file to check
     * @returns true if file should be skipped, false otherwise
     */
    public isSkippedFile(sourceFile: SourceFile): boolean {
        const leadingComments = sourceFile.getLeadingCommentRanges();
        for (const comment of leadingComments) {
            const text = comment.getText();
            // Check for @storybook-skip or @ignore tags
            if (
                /@storybook-skip|@ignore/.test(text) &&
                comment.getKind() === 3
            ) {
                return true;
            }
        }
        return false;
    }
}
