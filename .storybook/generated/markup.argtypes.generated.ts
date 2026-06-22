// This file is generated. Do not edit manually.
// Run: npm run storybook:argtypes

export const markupExtraArgTypes = {
    "MarkupProps.baseTextSize": {
        name: "baseTextSize",
        description:
            "The default font size. If not specified, inherited from the parent",
        control: false,
        table: {
            category: "MarkupProps",
            type: {
                summary: "MarkupTextSize",
            },
        },
    },
    "MarkupProps.baseTextColor": {
        name: "baseTextColor",
        description:
            "The default font color. If not specified, inherited from the parent",
        control: false,
        table: {
            category: "MarkupProps",
            type: {
                summary: "ColourCSSVariableString | CustomCssString",
            },
        },
    },
    "MarkupProps.inline": {
        name: "inline",
        description:
            "Specifies if element is rendered as block element `div` or inline\nelement `span`",
        control: false,
        table: {
            category: "MarkupProps",
            type: {
                summary: "boolean",
            },
        },
    },
    CustomCssString: {
        name: "CustomCssString",
        control: false,
        table: {
            category: "CustomCssString",
            type: {
                summary: "string & {}",
            },
        },
    },
    MarkupTextSize: {
        name: "MarkupTextSize",
        control: false,
        table: {
            category: "MarkupTextSize",
            type: {
                summary: 'Exclude<FontSize, "form-label" | "form-description">',
            },
        },
    },
} satisfies Record<string, unknown>;
