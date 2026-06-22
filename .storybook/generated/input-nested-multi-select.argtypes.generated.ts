// This file is generated. Do not edit manually.
// Run: npm run storybook:argtypes

export const inputNestedMultiSelectExtraArgTypes = {
    "InputNestedMultiSelectProps.selectedKeyPaths": {
        name: "selectedKeyPaths",
        description: "Specifies key paths to select particular option label",
        control: false,
        table: {
            category: "InputNestedMultiSelectProps<T>",
            type: {
                summary: "string[][]",
            },
        },
    },
    "InputNestedMultiSelectProps.onSelectOptions": {
        name: "onSelectOptions",
        description:
            "Called when a selection is made. Returns the key paths and values of selected items in the next selection state",
        control: false,
        table: {
            category: "InputNestedMultiSelectProps<T>",
            type: {
                summary:
                    "| ((keyPaths: string[][], values: Array<V1 | V2 | V3>) => void)",
            },
        },
    },
    "InputNestedMultiSelectProps.dropdownWidth": {
        name: "dropdownWidth",
        description: "Custom width for the dropdown.",
        control: false,
        table: {
            category: "InputNestedMultiSelectProps<T>",
            type: {
                summary: "string",
            },
        },
    },
    "InputNestedMultiSelectProps.onBlur": {
        name: "onBlur",
        control: false,
        table: {
            category: "InputNestedMultiSelectProps<T>",
            type: {
                summary: "(() => void)",
            },
        },
    },
    "InputNestedMultiSelectProps.customLabels": {
        name: "customLabels",
        control: false,
        table: {
            category: "InputNestedMultiSelectProps<T>",
            type: {
                summary: "DropdownCustomLabelProps",
            },
        },
    },
    InputNestedMultiSelectPartialProps: {
        name: "InputNestedMultiSelectPartialProps<T>",
        description: "To be exposed for Form component inheritance",
        control: false,
        table: {
            category: "InputNestedMultiSelectPartialProps<T>",
            type: {
                summary:
                    'Omit< InputNestedMultiSelectProps<V1, V2, V3>, "error" >',
            },
        },
    },
} satisfies Record<string, unknown>;
