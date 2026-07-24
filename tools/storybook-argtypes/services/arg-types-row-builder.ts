/**
 * ArgTypesRowBuilder - Build individual Storybook argType rows.
 *
 * Constructs complete argType entries with type information, descriptions,
 * and control metadata from TypeScript properties and type declarations.
 */

import type { GeneratedArgType } from "../types/arg-types-types";

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

    /**
     * Build argType row for inherited HTML attributes.
     * Creates a catch-all entry for HTML attribute inheritance.
     *
     * @param interfaceName Name of the interface
     * @param category Category name
     * @param tabGroup Optional tab group
     * @param description Optional description for HTML attributes
     * @returns ArgType row for HTML attributes or undefined
     */
    public buildInheritedHtmlAttributesRow(
        interfaceName: string,
        category: string,
        tabGroup: string | undefined,
        description?: string
    ): GeneratedArgType | undefined {
        return {
            key: `${interfaceName}.__inheritedHtmlProps`,
            value: {
                control: false,
                description:
                    description ||
                    "Inherits all standard HTML element attributes (e.g., `id`, `className`, `data-*`, etc.)",
                name: "",
                table: {
                    category,
                    tabGroup,
                    type: {
                        summary: "HTMLAttributes<HTMLElement>",
                    },
                },
            },
        };
    }

    /**
     * Build argType row for inherited interface.
     * Creates an entry documenting type inheritance.
     *
     * @param inheritedInterfaceName Name of the inherited interface
     * @param category Category name
     * @param tabGroup Optional tab group
     * @param description Optional description
     * @returns ArgType row for inherited interface
     */
    public buildInheritedInterfaceRow(
        inheritedInterfaceName: string,
        category: string,
        tabGroup: string | undefined,
        description?: string
    ): GeneratedArgType {
        return {
            key: inheritedInterfaceName,
            value: {
                control: false,
                description:
                    description ||
                    `Inherits props from \`${inheritedInterfaceName}\`.`,
                name: "",
                table: {
                    category,
                    tabGroup,
                    type: {
                        summary: inheritedInterfaceName,
                    },
                },
            },
        };
    }
}
