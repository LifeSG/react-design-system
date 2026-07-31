import * as path from "node:path";

import { Project } from "ts-morph";

/**
 * Shared singleton factory for ts-morph Project instances.
 */
export class TsMorphProjectFactory {
    private static _instance: Project | null = null;

    public static getProject(): Project {
        if (!this._instance) {
            this._instance = new Project({
                tsConfigFilePath: path.resolve("tsconfig.json"),
            });
        }

        return this._instance;
    }

    public static reset(): void {
        this._instance = null;
    }
}
