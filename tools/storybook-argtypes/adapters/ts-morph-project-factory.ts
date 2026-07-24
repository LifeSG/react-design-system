/**
 * TsMorphProjectFactory - Singleton factory for ts-morph Project creation.
 *
 * ts-morph's Project is expensive to create (parses entire tsconfig and project).
 * This factory ensures only one Project instance exists per process, reused
 * across all services. The factory pattern allows future flexibility
 * (e.g., switching implementations or supporting multiple projects).
 */

import * as path from "node:path";

import { Project } from "ts-morph";

/**
 * Singleton factory for ts-morph Project instances.
 * Ensures efficient resource usage by maintaining a single Project per process.
 *
 * Usage:
 * ```typescript
 * const project = TsMorphProjectFactory.getProject();
 * const sourceFile = project.getSourceFile('src/button/types.ts');
 * ```
 */
export class TsMorphProjectFactory {
    private static _instance: Project | null = null;

    /**
     * Get or create the singleton Project instance.
     *
     * @returns Singleton Project instance
     */
    public static getProject(): Project {
        if (!this._instance) {
            this._instance = new Project({
                tsConfigFilePath: path.resolve("tsconfig.json"),
            });
        }
        return this._instance;
    }

    /**
     * Reset the singleton instance (for testing purposes).
     * Clears the cached Project so next call to getProject() creates a new one.
     */
    public static reset(): void {
        this._instance = null;
    }
}
