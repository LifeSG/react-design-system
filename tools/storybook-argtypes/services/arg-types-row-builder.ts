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
export class ArgTypesRowBuilder {
    /**
     * Build a complete argType row.
     * Combines property information with metadata to create a Storybook argType entry.
     *
     * @param opts Options object containing name, property, description, etc.
     * @returns Generated argType row
     */
    public buildArgTypeRow(opts: {
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
    }): GeneratedArgType {
        return {
            key: opts.key,
            value: {
                control: false,
                deprecated: opts.deprecated,
                description: opts.description,
                name: opts.name,
                type: {
                    required: opts.required,
                },
                table: {
                    category: opts.category,
                    defaultValue: opts.defaultValue
                        ? { summary: opts.defaultValue }
                        : undefined,
                    tabGroup: opts.tabGroup,
                    type:
                        opts.typeSummaryParts &&
                        opts.typeSummaryParts.length > 1
                            ? { summaryParts: opts.typeSummaryParts }
                            : { summary: opts.typeSummary },
                },
            },
        };
    }
}
