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
     * Files with a `// @storybookSkipFile` line comment before the first
     * statement are skipped.
     *
     * @param sourceFile Source file to check
     * @returns true if file should be skipped, false otherwise
     */
    public isSkippedFile(sourceFile: SourceFile): boolean {
        const fullText = sourceFile.getFullText();
        const firstStatement = sourceFile.getStatements()[0];
        const textBeforeFirstStatement = firstStatement
            ? fullText.slice(0, firstStatement.getStart())
            : fullText;

        return /^\s*\/\/[^\n]*@storybookSkipFile\b/m.test(
            textBeforeFirstStatement
        );
    }
}
