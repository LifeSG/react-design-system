// This file is generated. Do not edit manually.
// Run: npm run storybook:argtypes

export const markupExtraArgTypes = {
    "MarkupProps.__inheritedHtmlProps": {
        control: false,
        description: "Inherits props from `HTMLDivElement`.",
        name: "",
        table: {
            category: "MarkupProps",
            type: {},
        },
    },
    "MarkupProps.baseTextColor": {
        control: false,
        description:
            "The default font color. If not specified, inherited from the parent",
        name: "baseTextColor",
        table: {
            category: "MarkupProps",
            type: {
                summary: "ColourCSSVariableString | CustomCssString",
            },
        },
    },
    "MarkupProps.baseTextSize": {
        control: false,
        description:
            "The default font size. If not specified, inherited from the parent",
        name: "baseTextSize",
        table: {
            category: "MarkupProps",
            type: {
                summary:
                    "'heading-xxl' | 'heading-xl' | 'heading-lg' | 'heading-md' | 'heading-sm' | 'heading-xs' | 'body-baseline' | 'body-md' | 'body-sm' | 'body-xs'",
            },
        },
    },
    "MarkupProps.inline": {
        control: false,
        description: "Renders as an inline `span` instead of a block `div`.",
        name: "inline",
        table: {
            category: "MarkupProps",
            defaultValue: {
                summary: "false",
            },
            type: {
                summary: "boolean",
            },
        },
    },
} satisfies Record<string, unknown>;
