// This file is generated. Do not edit manually.
// Run: npm run storybook:argtypes

export const inputMultiSelectExtraArgTypes = {
    "InputMultiSelectProps.readOnly": {
        name: "readOnly",
        control: false,
        table: {
            category: "InputMultiSelectProps<T>",
            type: {
                summary: "boolean",
            },
        },
    },
    "InputMultiSelectProps.selectedOptions": {
        name: "selectedOptions",
        control: false,
        table: {
            category: "InputMultiSelectProps<T>",
            type: {
                summary: "T[]",
            },
        },
    },
    "InputMultiSelectProps.onSelectOptions": {
        name: "onSelectOptions",
        control: false,
        table: {
            category: "InputMultiSelectProps<T>",
            type: {
                summary: "((options: T[]) => void)",
            },
        },
    },
    "InputMultiSelectProps.onBlur": {
        name: "onBlur",
        control: false,
        table: {
            category: "InputMultiSelectProps<T>",
            type: {
                summary: "(() => void)",
            },
        },
    },
    "InputMultiSelectProps.variant": {
        name: "variant",
        control: false,
        table: {
            category: "InputMultiSelectProps<T>",
            type: {
                summary: "DropdownVariantType",
            },
        },
    },
    "InputMultiSelectProps.alignment": {
        name: "alignment",
        control: false,
        table: {
            category: "InputMultiSelectProps<T>",
            type: {
                summary: "DropdownAlignmentType",
            },
        },
    },
    "InputMultiSelectProps.dropdownZIndex": {
        name: "dropdownZIndex",
        control: false,
        table: {
            category: "InputMultiSelectProps<T>",
            type: {
                summary: "number",
            },
        },
    },
    "InputMultiSelectProps.maxSelectable": {
        name: "maxSelectable",
        control: false,
        table: {
            category: "InputMultiSelectProps<T>",
            type: {
                summary: "number",
            },
        },
    },
    "InputMultiSelectProps.customLabels": {
        name: "customLabels",
        control: false,
        table: {
            category: "InputMultiSelectProps<T>",
            type: {
                summary: "DropdownCustomLabelProps",
            },
        },
    },
    "InputMultiSelectProps.dropdownWidth": {
        name: "dropdownWidth",
        description: "Custom width for the dropdown.",
        control: false,
        table: {
            category: "InputMultiSelectProps<T>",
            type: {
                summary: "string",
            },
        },
    },
    "InputMultiSelectProps.dropdownRootNode": {
        name: "dropdownRootNode",
        description:
            "The root element that contains the dropdown element. Defaults to the document body.\n\nIf the parent that contains the trigger element has a higher z-index than the dropdown,\nthe dropdown may not be visible. Specify the parent element here instead",
        control: false,
        table: {
            category: "InputMultiSelectProps<T>",
            type: {
                summary: "RefObject<HTMLElement>",
            },
        },
    },
    InputMultiSelectPartialProps: {
        name: "InputMultiSelectPartialProps<T>",
        description: "To be exposed for Form component inheritance",
        control: false,
        table: {
            category: "InputMultiSelectPartialProps<T>",
            type: {
                summary: 'Omit< InputMultiSelectProps<T, V>, "error" >',
            },
        },
    },
} satisfies Record<string, unknown>;
