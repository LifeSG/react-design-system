// This file is generated. Do not edit manually.
// Run: npm run storybook:argtypes

export const markupExtraArgTypes = {
    "MarkupProps.__inheritedHtmlProps": {
        control: false,
        description: "Inherits props from `HTMLDivElement`.",
        name: "",
        type: {},
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
        type: {
            required: false,
        },
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
        type: {
            required: false,
        },
        table: {
            category: "MarkupProps",
            type: {
                summary:
                    "'body-baseline' | 'body-md' | 'body-sm' | 'body-xs' | 'heading-lg' | 'heading-md' | 'heading-sm' | 'heading-xl' | 'heading-xs' | 'heading-xxl'",
            },
        },
    },
    "MarkupProps.inline": {
        control: false,
        description: "Renders as an inline `span` instead of a block `div`.",
        name: "inline",
        type: {
            required: false,
        },
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
