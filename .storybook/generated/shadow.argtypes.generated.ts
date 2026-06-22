// This file is generated. Do not edit manually.
// Run: npm run storybook:argtypes

export const shadowExtraArgTypes = {
    V3_ShadowValue: {
        name: "V3_ShadowValue",
        control: false,
        table: {
            category: "V3_ShadowValue",
            type: {
                summary:
                    "string | ((props: V3_StyledComponentProps) => CSSProp)",
            },
        },
    },
    V3_ShadowSet: {
        name: "V3_ShadowSet",
        control: false,
        table: {
            category: "V3_ShadowSet",
            type: {
                summary:
                    '{ "xs-subtle": V3_ShadowValue; "xs-strong": V3_ShadowValue; "xs-focus-strong": V3_ShadowValue; "xs-error-strong": V3_ShadowValue; "sm-subtle": V3_ShadowValue; "sm-strong": V3_ShadowValue; "md-subtle": V3_ShadowValue; "md-strong": V3_ShadowValue; "lg-subtle": V3_ShadowValue; "lg-strong": V3_ShadowValue; }',
            },
        },
    },
    V3_ShadowCollectionsMap: {
        name: "V3_ShadowCollectionsMap",
        control: false,
        table: {
            category: "V3_ShadowCollectionsMap",
            type: {
                summary: "{ [key in V3_ShadowScheme]: V3_ShadowSet; }",
            },
        },
    },
    V3_ShadowSetOptions: {
        name: "V3_ShadowSetOptions",
        control: false,
        table: {
            category: "V3_ShadowSetOptions",
            type: {
                summary: "Partial<V3_ShadowSet>",
            },
        },
    },
} satisfies Record<string, unknown>;
