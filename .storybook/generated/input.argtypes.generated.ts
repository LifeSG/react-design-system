// This file is generated. Do not edit manually.
// Run: npm run storybook:argtypes

export const inputExtraArgTypes = {
    "InputProps.spacing": {
        name: "spacing",
        description:
            "Sets the number of characters before a space is added (works only with type `tel` input)",
        control: false,
        table: {
            category: "InputProps",
            type: {
                summary: "number",
            },
        },
    },
    "InputProps.error": {
        name: "error",
        control: false,
        table: {
            category: "InputProps",
            type: {
                summary: "boolean",
            },
        },
    },
    "InputProps.allowClear": {
        name: "allowClear",
        control: false,
        table: {
            category: "InputProps",
            type: {
                summary: "boolean",
            },
        },
    },
    "InputProps.onClear": {
        name: "onClear",
        control: false,
        table: {
            category: "InputProps",
            type: {
                summary: "() => void",
            },
        },
    },
    "InputProps.data-testid": {
        name: "data-testid",
        control: false,
        table: {
            category: "InputProps",
            type: {
                summary: "string",
            },
        },
    },
    "InputProps.styleType": {
        name: "styleType",
        control: false,
        table: {
            category: "InputProps",
            type: {
                summary: "InputStyleType",
            },
        },
    },
    InputStyleType: {
        name: "InputStyleType",
        control: false,
        table: {
            category: "InputStyleType",
            type: {
                summary: '"no-border" | "bordered"',
            },
        },
    },
    InputPartialProps: {
        name: "InputPartialProps",
        description: "To be exposed for Form component inheritance",
        control: false,
        table: {
            category: "InputPartialProps",
            type: {
                summary: 'Omit<InputProps, "error">',
            },
        },
    },
    InputRef: {
        name: "InputRef",
        control: false,
        table: {
            category: "InputRef",
            type: {
                summary: "React.Ref<HTMLInputElement>",
            },
        },
    },
} satisfies Record<string, unknown>;
