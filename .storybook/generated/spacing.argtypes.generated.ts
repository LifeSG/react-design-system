// This file is generated. Do not edit manually.
// Run: npm run storybook:argtypes

export const spacingExtraArgTypes = {
    V3_SpacingSet: {
        name: "V3_SpacingSet",
        control: false,
        table: {
            category: "V3_SpacingSet",
            type: {
                summary:
                    '{ "spacing-0": number; "spacing-4": number; "spacing-8": number; "spacing-12": number; "spacing-16": number; "spacing-20": number; "spacing-24": number; "spacing-32": number; "spacing-40": number; "spacing-48": number; "spacing-64": number; "spacing-72": number; "layout-xs": number; "layout-sm": number; "layout-md": number; "layout-lg": number; "layout-xl": number; "layout-xxl": number; "layout-xxxl": number; }',
            },
        },
    },
    V3_SpacingSetOptions: {
        name: "V3_SpacingSetOptions",
        control: false,
        table: {
            category: "V3_SpacingSetOptions",
            type: {
                summary: "Partial<V3_SpacingSet>",
            },
        },
    },
    V3_SpacingCollectionsMap: {
        name: "V3_SpacingCollectionsMap",
        control: false,
        table: {
            category: "V3_SpacingCollectionsMap",
            type: {
                summary: "{ [key in V3_SpacingScheme]: V3_SpacingSet; }",
            },
        },
    },
} satisfies Record<string, unknown>;
