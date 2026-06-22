// This file is generated. Do not edit manually.
// Run: npm run storybook:argtypes

export const inputSelectExtraArgTypes = {
    "InputSelectOptionsProps.options": {
        name: "options",
        control: false,
        table: {
            category: "InputSelectOptionsProps<T>",
            type: {
                summary: "T[]",
            },
        },
    },
    "InputSelectOptionsProps.optionsLoadState": {
        name: "optionsLoadState",
        description:
            'Used when options are loaded from an api call.\nValues: "loading" | "fail" | "success"',
        control: false,
        table: {
            category: "InputSelectOptionsProps<T>",
            type: {
                summary: "ItemsLoadStateType",
            },
        },
    },
    "InputSelectOptionsProps.optionTruncationType": {
        name: "optionTruncationType",
        description:
            'Specifies the truncation type. Truncated text will be replaced with ellipsis. Values: "middle" | "end"',
        control: false,
        table: {
            category: "InputSelectOptionsProps<T>",
            type: {
                summary: "TruncateType",
            },
        },
    },
    "InputSelectOptionsProps.onShowOptions": {
        name: "onShowOptions",
        control: false,
        table: {
            category: "InputSelectOptionsProps<T>",
            type: {
                summary: "(() => void)",
            },
        },
    },
    "InputSelectOptionsProps.onHideOptions": {
        name: "onHideOptions",
        control: false,
        table: {
            category: "InputSelectOptionsProps<T>",
            type: {
                summary: "(() => void)",
            },
        },
    },
    "InputSelectOptionsProps.onRetry": {
        name: "onRetry",
        control: false,
        table: {
            category: "InputSelectOptionsProps<T>",
            type: {
                summary: "(() => void)",
            },
        },
    },
    "InputSelectSharedProps.name": {
        name: "name",
        description: "HTML button props",
        control: false,
        table: {
            category: "InputSelectSharedProps<T>",
            type: {
                summary: "string",
            },
        },
    },
    "InputSelectSharedProps.options": {
        name: "options",
        description: "Component specific props",
        control: false,
        table: {
            category: "InputSelectSharedProps<T>",
            type: {
                summary: "T[]",
            },
        },
    },
    "InputSelectSharedProps.placeholder": {
        name: "placeholder",
        control: false,
        table: {
            category: "InputSelectSharedProps<T>",
            type: {
                summary: "string",
            },
        },
    },
    "InputSelectSharedProps.disabled": {
        name: "disabled",
        control: false,
        table: {
            category: "InputSelectSharedProps<T>",
            type: {
                summary: "boolean",
            },
        },
    },
    "InputSelectSharedProps.error": {
        name: "error",
        control: false,
        table: {
            category: "InputSelectSharedProps<T>",
            type: {
                summary: "boolean",
            },
        },
    },
    "InputSelectSharedProps.data-testid": {
        name: "data-testid",
        control: false,
        table: {
            category: "InputSelectSharedProps<T>",
            type: {
                summary: "string",
            },
        },
    },
    "InputSelectProps.readOnly": {
        name: "readOnly",
        control: false,
        table: {
            category: "InputSelectProps<T>",
            type: {
                summary: "boolean",
            },
        },
    },
    "InputSelectProps.selectedOption": {
        name: "selectedOption",
        control: false,
        table: {
            category: "InputSelectProps<T>",
            type: {
                summary: "T",
            },
        },
    },
    "InputSelectProps.onSelectOption": {
        name: "onSelectOption",
        control: false,
        table: {
            category: "InputSelectProps<T>",
            type: {
                summary: "((option: T, extractedValue: V) => void)",
            },
        },
    },
    "InputSelectProps.displayValueExtractor": {
        name: "displayValueExtractor",
        description: "Function to derive display value for selected option",
        control: false,
        table: {
            category: "InputSelectProps<T>",
            type: {
                summary: "((option: T) => string)",
            },
        },
    },
    "InputSelectProps.valueToStringFunction": {
        name: "valueToStringFunction",
        description: "Function to convert value into a string",
        control: false,
        table: {
            category: "InputSelectProps<T>",
            type: {
                summary: "((value: V) => string)",
            },
        },
    },
    "InputSelectProps.renderCustomSelectedOption": {
        name: "renderCustomSelectedOption",
        description: "Function to render selected custom component",
        control: false,
        table: {
            category: "InputSelectProps<T>",
            type: {
                summary: "((option: T) => JSX.Element)",
            },
        },
    },
    "InputSelectProps.onBlur": {
        name: "onBlur",
        control: false,
        table: {
            category: "InputSelectProps<T>",
            type: {
                summary: "(() => void)",
            },
        },
    },
    "InputSelectProps.variant": {
        name: "variant",
        control: false,
        table: {
            category: "InputSelectProps<T>",
            type: {
                summary: "DropdownVariantType",
            },
        },
    },
    "InputSelectProps.alignment": {
        name: "alignment",
        control: false,
        table: {
            category: "InputSelectProps<T>",
            type: {
                summary: "DropdownAlignmentType",
            },
        },
    },
    "InputSelectProps.dropdownZIndex": {
        name: "dropdownZIndex",
        control: false,
        table: {
            category: "InputSelectProps<T>",
            type: {
                summary: "number",
            },
        },
    },
    "InputSelectProps.dropdownRootNode": {
        name: "dropdownRootNode",
        description:
            "The root element that contains the dropdown element. Defaults to the document body.\n\nIf the parent that contains the trigger element has a higher z-index than the dropdown,\nthe dropdown may not be visible. Specify the parent element here instead",
        control: false,
        table: {
            category: "InputSelectProps<T>",
            type: {
                summary: "RefObject<HTMLElement>",
            },
        },
    },
    "InputSelectProps.dropdownWidth": {
        name: "dropdownWidth",
        description:
            "Custom width for the dropdown. When specified, the dropdown will use this\nwidth instead of matching the input element width.",
        control: false,
        table: {
            category: "InputSelectProps<T>",
            type: {
                summary: "string",
            },
        },
    },
    "InputSelectProps.customLabels": {
        name: "customLabels",
        control: false,
        table: {
            category: "InputSelectProps<T>",
            type: {
                summary: "DropdownCustomLabelProps",
            },
        },
    },
    InputSelectPartialProps: {
        name: "InputSelectPartialProps<T>",
        description: "To be exposed for Form component inheritance",
        control: false,
        table: {
            category: "InputSelectPartialProps<T>",
            type: {
                summary: 'Omit< InputSelectProps<T, V>, "error" >',
            },
        },
    },
} satisfies Record<string, unknown>;
