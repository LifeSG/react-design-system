// This file is generated. Do not edit manually.
// Run: npm run storybook:argtypes

export const radiusExtraArgTypes = {
    V3_RadiusSet: {
        name: "V3_RadiusSet",
        control: false,
        table: {
            category: "V3_RadiusSet",
            type: {
                summary:
                    "{ none: number; xs: number; sm: number; md: number; lg: number; full: number; }",
            },
        },
    },
    V3_RadiusSetOptions: {
        name: "V3_RadiusSetOptions",
        control: false,
        table: {
            category: "V3_RadiusSetOptions",
            type: {
                summary: "Partial<V3_RadiusSet>",
            },
        },
    },
    V3_RadiusCollectionsMap: {
        name: "V3_RadiusCollectionsMap",
        control: false,
        table: {
            category: "V3_RadiusCollectionsMap",
            type: {
                summary: "{ [key in V3_RadiusScheme]: V3_RadiusSet; }",
            },
        },
    },
} satisfies Record<string, unknown>;
