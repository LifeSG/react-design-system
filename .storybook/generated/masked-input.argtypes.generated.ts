// This file is generated. Do not edit manually.
// Run: npm run storybook:argtypes

export const maskedInputExtraArgTypes = {
    "MaskAttributeProps.maskRange": {
        name: "maskRange",
        control: false,
        table: {
            category: "MaskAttributeProps",
            type: {
                summary: "number[]",
            },
        },
    },
    "MaskAttributeProps.unmaskRange": {
        name: "unmaskRange",
        control: false,
        table: {
            category: "MaskAttributeProps",
            type: {
                summary: "number[]",
            },
        },
    },
    "MaskAttributeProps.maskRegex": {
        name: "maskRegex",
        control: false,
        table: {
            category: "MaskAttributeProps",
            type: {
                summary: "RegExp",
            },
        },
    },
    "MaskAttributeProps.maskTransformer": {
        name: "maskTransformer",
        control: false,
        table: {
            category: "MaskAttributeProps",
            type: {
                summary: "((value: string) => string)",
            },
        },
    },
    "MaskAttributeProps.maskChar": {
        name: "maskChar",
        control: false,
        table: {
            category: "MaskAttributeProps",
            type: {
                summary: "string",
            },
        },
    },
    "MaskedInputProps.value": {
        name: "value",
        control: false,
        table: {
            category: "MaskedInputProps",
            type: {
                summary: "string",
            },
        },
    },
    "MaskedInputProps.iconMask": {
        name: "iconMask",
        control: false,
        table: {
            category: "MaskedInputProps",
            type: {
                summary: "JSX.Element",
            },
        },
    },
    "MaskedInputProps.iconUnmask": {
        name: "iconUnmask",
        control: false,
        table: {
            category: "MaskedInputProps",
            type: {
                summary: "JSX.Element",
            },
        },
    },
    "MaskedInputProps.iconActiveColor": {
        name: "iconActiveColor",
        control: false,
        table: {
            category: "MaskedInputProps",
            type: {
                summary: "string",
            },
        },
    },
    "MaskedInputProps.iconInactiveColor": {
        name: "iconInactiveColor",
        control: false,
        table: {
            category: "MaskedInputProps",
            type: {
                summary: "string",
            },
        },
    },
    "MaskedInputProps.disableMask": {
        name: "disableMask",
        control: false,
        table: {
            category: "MaskedInputProps",
            type: {
                summary: "boolean",
            },
        },
    },
    "MaskedInputProps.transformInput": {
        name: "transformInput",
        control: false,
        table: {
            category: "MaskedInputProps",
            type: {
                summary: '"uppercase" | "lowercase"',
            },
        },
    },
    "MaskedInputProps.loadState": {
        name: "loadState",
        description:
            'Specifies the state of the component when there is a\nloading behaviour. Note that this only applies if\nthe component is in `readOnly` mode.\n\nValues: "loading" | "fail" | "success"',
        control: false,
        table: {
            category: "MaskedInputProps",
            type: {
                summary: "MaskedInputLoadState",
            },
        },
    },
    "MaskedInputProps.onMask": {
        name: "onMask",
        control: false,
        table: {
            category: "MaskedInputProps",
            type: {
                summary: "(() => void)",
            },
        },
    },
    "MaskedInputProps.onUnmask": {
        name: "onUnmask",
        control: false,
        table: {
            category: "MaskedInputProps",
            type: {
                summary: "(() => void)",
            },
        },
    },
    "MaskedInputProps.onTryAgain": {
        name: "onTryAgain",
        description:
            'The callback function when the "Try again" button is clicked in error state',
        control: false,
        table: {
            category: "MaskedInputProps",
            type: {
                summary: "(() => void)",
            },
        },
    },
    MaskedInputLoadState: {
        name: "MaskedInputLoadState",
        control: false,
        table: {
            category: "MaskedInputLoadState",
            type: {
                summary: '"loading" | "fail" | "success"',
            },
        },
    },
    MaskedInputPartialProps: {
        name: "MaskedInputPartialProps",
        description: "To be exposed for Form component inheritance",
        control: false,
        table: {
            category: "MaskedInputPartialProps",
            type: {
                summary: 'Omit<MaskedInputProps, "error">',
            },
        },
    },
} satisfies Record<string, unknown>;
