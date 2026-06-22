// This file is generated. Do not edit manually.
// Run: npm run storybook:argtypes

export const inputTextareaExtraArgTypes = {
    "TextareaProps.error": {
        name: "error",
        control: false,
        table: {
            category: "TextareaProps",
            type: {
                summary: "boolean",
            },
        },
    },
    "TextareaProps.data-testid": {
        name: "data-testid",
        control: false,
        table: {
            category: "TextareaProps",
            type: {
                summary: "string",
            },
        },
    },
    "TextareaProps.transformValue": {
        name: "transformValue",
        control: false,
        table: {
            category: "TextareaProps",
            type: {
                summary: "((value: string) => string)",
            },
        },
    },
    "TextareaProps.prefix": {
        name: "prefix",
        control: false,
        table: {
            category: "TextareaProps",
            type: {
                summary: "string",
            },
        },
    },
    "TextareaProps.renderCustomCounter": {
        name: "renderCustomCounter",
        control: false,
        table: {
            category: "TextareaProps",
            type: {
                summary:
                    "| ((maxLength: number, currentValueLength: number) => JSX.Element)",
            },
        },
    },
    TextareaPartialProps: {
        name: "TextareaPartialProps",
        description: "To be exposed for Form component inheritance",
        control: false,
        table: {
            category: "TextareaPartialProps",
            type: {
                summary: 'Omit<TextareaProps, "error">',
            },
        },
    },
    TextareaRef: {
        name: "TextareaRef",
        control: false,
        table: {
            category: "TextareaRef",
            type: {
                summary: "React.Ref<HTMLTextAreaElement>",
            },
        },
    },
} satisfies Record<string, unknown>;
