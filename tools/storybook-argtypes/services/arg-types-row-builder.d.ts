/**
 * ArgTypesRowBuilder - Build individual Storybook argType rows.
 *
 * Constructs complete argType entries with type information, descriptions,
 * and control metadata from TypeScript properties and type declarations.
 */
import type { GeneratedArgType } from "../types";
/**
 * Builds Storybook argType rows.
 * Creates complete argType entries with metadata.
 *
 * Usage:
 * ```typescript
 * const builder = new ArgTypesRowBuilder();
 * const row = builder.buildArgTypeRow({
 *   key: 'Button.color',
 *   name: 'color',
 *   category: 'Styling',
 *   typeSummary: 'string | number'
 * });
 * ```
 */
export declare class ArgTypesRowBuilder {
    private getLiteralUnionPartsFromSummary;
    /**
     * Infer the Storybook control type from the TypeScript type summary.
     * Only primitive types are enabled; everything else returns `false`.
     */
    private inferControl;
    /**
     * Build a complete argType row.
     * Combines property information with metadata to create a Storybook argType entry.
     *
     * @param opts Options object containing name, property, description, etc.
     * @returns Generated argType row
     */
    buildArgTypeRow(opts: {
        key: string;
        name: string;
        category: string;
        tabGroup?: string;
        typeSummary?: string;
        typeSummaryParts?: string[];
        defaultValue?: string;
        deprecated?: string | boolean;
        description?: string;
        required?: boolean;
    }): GeneratedArgType;
}
