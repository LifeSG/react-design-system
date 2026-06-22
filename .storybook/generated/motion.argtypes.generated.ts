// This file is generated. Do not edit manually.
// Run: npm run storybook:argtypes

export const motionExtraArgTypes = {
    V3_MotionSet: {
        name: "V3_MotionSet",
        control: false,
        table: {
            category: "V3_MotionSet",
            type: {
                summary:
                    '{ "duration-150": string; "duration-250": string; "duration-350": string; "duration-500": string; "duration-800": string; "duration-1000": string; "ease-default": string; "ease-standard": string; "ease-entrance": string; "ease-exit": string; }',
            },
        },
    },
    V3_MotionCollectionsMap: {
        name: "V3_MotionCollectionsMap",
        control: false,
        table: {
            category: "V3_MotionCollectionsMap",
            type: {
                summary: "{ [key in V3_MotionScheme]: V3_MotionSet; }",
            },
        },
    },
    V3_MotionSetOptions: {
        name: "V3_MotionSetOptions",
        control: false,
        table: {
            category: "V3_MotionSetOptions",
            type: {
                summary: "Partial<V3_MotionSet>",
            },
        },
    },
} satisfies Record<string, unknown>;
