// This file is generated. Do not edit manually.
// Run: npm run storybook:argtypes

export const inputNestedSelectExtraArgTypes = {
    "InputNestedSelectOptionsProps.options": {
        name: "options",
        control: false,
        table: {
            category: "InputNestedSelectOptionsProps<T>",
            type: {
                summary: "L1OptionProps<V1, V2, V3>[]",
            },
        },
    },
    "InputNestedSelectSharedProps.readOnly": {
        name: "readOnly",
        control: false,
        table: {
            category: "InputNestedSelectSharedProps<T>",
            type: {
                summary: "boolean",
            },
        },
    },
    "InputNestedSelectSharedProps.mode": {
        name: "mode",
        description:
            "Specifies if items are expanded or collapsed when the dropdown is opened",
        control: false,
        table: {
            category: "InputNestedSelectSharedProps<T>",
            type: {
                summary: "ExpandMode",
            },
        },
    },
    "InputNestedSelectSharedProps.variant": {
        name: "variant",
        control: false,
        table: {
            category: "InputNestedSelectSharedProps<T>",
            type: {
                summary: "DropdownVariantType",
            },
        },
    },
    "InputNestedSelectSharedProps.alignment": {
        name: "alignment",
        control: false,
        table: {
            category: "InputNestedSelectSharedProps<T>",
            type: {
                summary: "DropdownAlignmentType",
            },
        },
    },
    "InputNestedSelectSharedProps.dropdownZIndex": {
        name: "dropdownZIndex",
        control: false,
        table: {
            category: "InputNestedSelectSharedProps<T>",
            type: {
                summary: "number",
            },
        },
    },
    "InputNestedSelectSharedProps.dropdownRootNode": {
        name: "dropdownRootNode",
        description:
            "The root element that contains the dropdown element. Defaults to the document body.\n\nIf the parent that contains the trigger element has a higher z-index than the dropdown,\nthe dropdown may not be visible. Specify the parent element here instead",
        control: false,
        table: {
            category: "InputNestedSelectSharedProps<T>",
            type: {
                summary: "RefObject<HTMLElement>",
            },
        },
    },
    "InputNestedSelectSharedProps.valueToStringFunction": {
        name: "valueToStringFunction",
        description: "Function to convert selected value into a string",
        control: false,
        table: {
            category: "InputNestedSelectSharedProps<T>",
            type: {
                summary: "((value: V1 | V2 | V3) => string)",
            },
        },
    },
    "InputNestedSelectProps.selectedKeyPath": {
        name: "selectedKeyPath",
        description: "Specifies key path of the selected option",
        control: false,
        table: {
            category: "InputNestedSelectProps<T>",
            type: {
                summary: "string[]",
            },
        },
    },
    "InputNestedSelectProps.selectableCategory": {
        name: "selectableCategory",
        description: "If specified, the category label is selectable",
        control: false,
        table: {
            category: "InputNestedSelectProps<T>",
            type: {
                summary: "boolean",
            },
        },
    },
    "InputNestedSelectProps.onSelectOption": {
        name: "onSelectOption",
        description:
            "Called when an option is selected. Returns the option's key path and value",
        control: false,
        table: {
            category: "InputNestedSelectProps<T>",
            type: {
                summary: "| ((keyPath: string[], value: V1 | V2 | V3) => void)",
            },
        },
    },
    "InputNestedSelectProps.dropdownWidth": {
        name: "dropdownWidth",
        description: "Custom width for the dropdown",
        control: false,
        table: {
            category: "InputNestedSelectProps<T>",
            type: {
                summary: "string",
            },
        },
    },
    "InputNestedSelectProps.onBlur": {
        name: "onBlur",
        control: false,
        table: {
            category: "InputNestedSelectProps<T>",
            type: {
                summary: "(() => void)",
            },
        },
    },
    "InputNestedSelectProps.customLabels": {
        name: "customLabels",
        control: false,
        table: {
            category: "InputNestedSelectProps<T>",
            type: {
                summary: "DropdownCustomLabelProps",
            },
        },
    },
    "BaseOptionProps.label": {
        name: "label",
        control: false,
        table: {
            category: "BaseOptionProps",
            type: {
                summary: "string",
            },
        },
    },
    "BaseOptionProps.key": {
        name: "key",
        control: false,
        table: {
            category: "BaseOptionProps",
            type: {
                summary: "string",
            },
        },
    },
    "L1OptionProps.value": {
        name: "value",
        control: false,
        table: {
            category: "L1OptionProps<T>",
            type: {
                summary: "V1",
            },
        },
    },
    "L1OptionProps.subItems": {
        name: "subItems",
        control: false,
        table: {
            category: "L1OptionProps<T>",
            type: {
                summary: "L2OptionProps<V2, V3>[]",
            },
        },
    },
    "L2OptionProps.value": {
        name: "value",
        control: false,
        table: {
            category: "L2OptionProps<T>",
            type: {
                summary: "V2",
            },
        },
    },
    "L2OptionProps.subItems": {
        name: "subItems",
        control: false,
        table: {
            category: "L2OptionProps<T>",
            type: {
                summary: "L3OptionProps<V3>[]",
            },
        },
    },
    "L3OptionProps.value": {
        name: "value",
        control: false,
        table: {
            category: "L3OptionProps<T>",
            type: {
                summary: "V3",
            },
        },
    },
    "L3OptionProps.subItems": {
        name: "subItems",
        control: false,
        table: {
            category: "L3OptionProps<T>",
            type: {
                summary: "undefined",
            },
        },
    },
    InputNestedSelectPartialProps: {
        name: "InputNestedSelectPartialProps<T>",
        description: "To be exposed for Form component inheritance",
        control: false,
        table: {
            category: "InputNestedSelectPartialProps<T>",
            type: {
                summary: 'Omit< InputNestedSelectProps<V1, V2, V3>, "error" >',
            },
        },
    },
} satisfies Record<string, unknown>;
