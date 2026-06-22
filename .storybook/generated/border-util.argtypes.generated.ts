// This file is generated. Do not edit manually.
// Run: npm run storybook:argtypes

export const borderUtilExtraArgTypes = {
    "V3_BorderUtilSet.solid": {
        name: "solid",
        control: false,
        table: {
            category: "V3_BorderUtilSet",
            type: {
                summary:
                    "(options?: { thickness?: number | ((props: V3_StyledComponentProps) => string); radius?: number | ((props: V3_StyledComponentProps) => string); colour?: string | ((props: V3_StyledComponentProps) => string); }) => (props: V3_StyledComponentProps) => CSSProp",
            },
        },
    },
    "V3_BorderUtilSet.dashed-default": {
        name: "dashed-default",
        control: false,
        table: {
            category: "V3_BorderUtilSet",
            type: {
                summary:
                    "(options?: { thickness?: number | ((props: V3_StyledComponentProps) => string); radius?: number | ((props: V3_StyledComponentProps) => string); colour?: string | ((props: V3_StyledComponentProps) => string); }) => (props: V3_StyledComponentProps) => CSSProp",
            },
        },
    },
    V3_BorderUtilCollectionMap: {
        name: "V3_BorderUtilCollectionMap",
        control: false,
        table: {
            category: "V3_BorderUtilCollectionMap",
            type: {
                summary: "{ [key in V3_BorderScheme]: V3_BorderUtilSet; }",
            },
        },
    },
    V3_BorderUtilSetOptions: {
        name: "V3_BorderUtilSetOptions",
        control: false,
        table: {
            category: "V3_BorderUtilSetOptions",
            type: {
                summary: "Partial<V3_BorderUtilSet>",
            },
        },
    },
} satisfies Record<string, unknown>;
