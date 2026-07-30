/**
 * ArgTypesRowBuilder - Build individual Storybook argType rows.
 *
 * Constructs complete argType entries with type information, descriptions,
 * and control metadata from TypeScript properties and type declarations.
 */

import type { GeneratedArgType, GeneratedArgTypeControl } from "../types";

/** Single-quoted TypeScript string literal as it appears in type text: `'value'` */
const QUOTED_STRING_LITERAL = /^'[^']*'$/;
/** Bare number literal, including negative and decimal */
const NUMBER_LITERAL = /^-?\d+(\.\d+)?$/;
const NON_PLAYGROUND_PROP_NAMES = new Set(["className", "data-testid", "id"]);

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
    private getLiteralUnionPartsFromSummary(
        typeSummary: string | undefined
    ): string[] | undefined {
        if (!typeSummary?.includes("|")) {
            return undefined;
        }

        const parts = typeSummary.split("|").map((part) => part.trim());
        if (parts.length <= 1) {
            return undefined;
        }

        const allStrings = parts.every((part) =>
            QUOTED_STRING_LITERAL.test(part)
        );
        const allNumbers = parts.every((part) => NUMBER_LITERAL.test(part));

        return allStrings || allNumbers ? parts : undefined;
    }

    /**
     * Infer the Storybook control type from the TypeScript type summary.
     * Only primitive types are enabled; everything else returns `false`.
     */
    private inferControl(
        name: string,
        typeSummary: string | undefined,
        typeSummaryParts: string[] | undefined
    ): { control: GeneratedArgTypeControl; options?: (string | number)[] } {
        if (NON_PLAYGROUND_PROP_NAMES.has(name)) {
            return { control: false };
        }

        // Color picker — prop name contains "color" or "colour" (e.g. color, bgColor, colour)
        if (/colou?r$/i.test(name)) {
            return { control: "color" };
        }

        // Boolean toggle
        if (
            typeSummary === "boolean" ||
            typeSummary === "false | true" ||
            typeSummary === "true | false"
        ) {
            return { control: "boolean" };
        }

        // Free-text input
        if (typeSummary === "string") {
            return { control: "text" };
        }

        // Number input
        if (typeSummary === "number") {
            return { control: "number" };
        }

        // Enum dropdown — union of string or number literals only
        const literalUnionParts =
            typeSummaryParts?.length && typeSummaryParts.length > 1
                ? typeSummaryParts
                : this.getLiteralUnionPartsFromSummary(typeSummary);

        if (literalUnionParts && literalUnionParts.length > 1) {
            const allStrings = literalUnionParts.every((p) =>
                QUOTED_STRING_LITERAL.test(p)
            );
            const allNumbers = literalUnionParts.every((p) =>
                NUMBER_LITERAL.test(p)
            );

            if (allStrings || allNumbers) {
                return {
                    control: "select",
                    options: literalUnionParts.map((p) =>
                        QUOTED_STRING_LITERAL.test(p)
                            ? p.slice(1, -1)
                            : Number(p)
                    ),
                };
            }
        }

        return { control: false };
    }

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
        const { control, options } = this.inferControl(
            opts.name,
            opts.typeSummary,
            opts.typeSummaryParts
        );

        return {
            key: opts.key,
            value: {
                control,
                ...(options && { options }),
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
