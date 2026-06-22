// This file is generated. Do not edit manually.
// Run: npm run storybook:argtypes

export const dividerExtraArgTypes = {
    "DividerProps.thickness": {
        name: "thickness",
        description: "The thickness of the Divider in px",
        control: false,
        table: {
            category: "DividerProps",
            type: {
                summary: "number",
            },
        },
    },
    "DividerProps.lineStyle": {
        name: "lineStyle",
        description: 'The line display style type. Values: "solid" | "dashed"',
        control: false,
        table: {
            category: "DividerProps",
            type: {
                summary: "DividerLineStyleType",
            },
        },
    },
    "DividerProps.layoutType": {
        name: "layoutType",
        description: 'The layout type. Values: "flex" | "grid"',
        control: false,
        table: {
            category: "DividerProps",
            type: {
                summary: "DividerLayoutType",
            },
        },
    },
    "DividerProps.color": {
        name: "color",
        description: "The line color",
        control: false,
        table: {
            category: "DividerProps",
            type: {
                summary: "string",
            },
        },
    },
    DividerLineStyleType: {
        name: "DividerLineStyleType",
        control: false,
        table: {
            category: "DividerLineStyleType",
            type: {
                summary: '"solid" | "dashed"',
            },
        },
    },
    DividerLayoutType: {
        name: "DividerLayoutType",
        control: false,
        table: {
            category: "DividerLayoutType",
            type: {
                summary: '"flex" | "grid"',
            },
        },
    },
} satisfies Record<string, unknown>;
