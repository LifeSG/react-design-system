import { Project } from "ts-morph";
/**
 * Shared singleton factory for ts-morph Project instances.
 */
export declare class TsMorphProjectFactory {
    private static _instance;
    static getProject(): Project;
    static reset(): void;
}
