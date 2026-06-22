// This file is generated. Do not edit manually.
// Run: npm run storybook:argtypes

export const dashedBorderExtraArgTypes = {
    "DashedBorderProps.backgroundColor": {
        name: "backgroundColor",
        description: "Optional background fill behind the dashed overlay.",
        control: false,
        table: {
            category: "DashedBorderProps",
            type: {
                summary: "ColourCSSVariableString | CustomCssString",
            },
        },
    },
    "DashedBorderProps.colour": {
        name: "colour",
        description: "Border stroke colour for the dashed border.",
        control: false,
        table: {
            category: "DashedBorderProps",
            type: {
                summary: "ColourCSSVariableString | CustomCssString",
            },
        },
    },
    "DashedBorderProps.enabled": {
        name: "enabled",
        description: "Enables or disables rendering of the dashed stroke.",
        control: false,
        table: {
            category: "DashedBorderProps",
            type: {
                summary: "boolean",
            },
        },
    },
    "DashedBorderProps.radius": {
        name: "radius",
        description: "Border radius of the dashed container.",
        control: false,
        table: {
            category: "DashedBorderProps",
            type: {
                summary: "RadiusCSSVariableString | CustomCssValue",
            },
        },
    },
    "DashedBorderProps.thickness": {
        name: "thickness",
        description: "Border thickness of the dashed stroke.",
        control: false,
        table: {
            category: "DashedBorderProps",
            type: {
                summary: "ValueOf<typeof BorderThickness> | CustomCssValue",
            },
        },
    },
    CustomCssValue: {
        name: "CustomCssValue",
        control: false,
        table: {
            category: "CustomCssValue",
            type: {
                summary: "number | (string & {})",
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
} satisfies Record<string, unknown>;
