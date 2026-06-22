// This file is generated. Do not edit manually.
// Run: npm run storybook:argtypes

export const inputRangeSelectExtraArgTypes = {
    "InputRangeSelectOptionsProps.options": {
        name: "options",
        control: false,
        table: {
            category: "InputRangeSelectOptionsProps<T>",
            type: {
                summary: "InputRangeProp<T[]>",
            },
        },
    },
    "InputRangeSelectOptionsProps.optionsLoadState": {
        name: "optionsLoadState",
        control: false,
        table: {
            category: "InputRangeSelectOptionsProps<T>",
            type: {
                summary: "InputRangeProp<ItemsLoadStateType>",
            },
        },
    },
    "InputRangeProp.from": {
        name: "from",
        control: false,
        table: {
            category: "InputRangeProp<T>",
            type: {
                summary: "T",
            },
        },
    },
    "InputRangeProp.to": {
        name: "to",
        control: false,
        table: {
            category: "InputRangeProp<T>",
            type: {
                summary: "T",
            },
        },
    },
    "InputRangeSelectProps.readOnly": {
        name: "readOnly",
        control: false,
        table: {
            category: "InputRangeSelectProps<T>",
            type: {
                summary: "boolean",
            },
        },
    },
    "InputRangeSelectProps.placeholders": {
        name: "placeholders",
        control: false,
        table: {
            category: "InputRangeSelectProps<T>",
            type: {
                summary: "InputRangeProp<string>",
            },
        },
    },
    "InputRangeSelectProps.selectedOptions": {
        name: "selectedOptions",
        control: false,
        table: {
            category: "InputRangeSelectProps<T>",
            type: {
                summary: "InputRangeProp<T>",
            },
        },
    },
    "InputRangeSelectProps.alignment": {
        name: "alignment",
        control: false,
        table: {
            category: "InputRangeSelectProps<T>",
            type: {
                summary: "DropdownAlignmentType",
            },
        },
    },
    "InputRangeSelectProps.dropdownZIndex": {
        name: "dropdownZIndex",
        control: false,
        table: {
            category: "InputRangeSelectProps<T>",
            type: {
                summary: "number",
            },
        },
    },
    "InputRangeSelectProps.dropdownRootNode": {
        name: "dropdownRootNode",
        control: false,
        table: {
            category: "InputRangeSelectProps<T>",
            type: {
                summary: "RefObject<HTMLElement>",
            },
        },
    },
    "InputRangeSelectProps.dropdownWidth": {
        name: "dropdownWidth",
        control: false,
        table: {
            category: "InputRangeSelectProps<T>",
            type: {
                summary: "string",
            },
        },
    },
    "InputRangeSelectProps.onSelectOption": {
        name: "onSelectOption",
        control: false,
        table: {
            category: "InputRangeSelectProps<T>",
            type: {
                summary:
                    "| ((option: InputRangeProp<T>, extractedValue: V) => void)",
            },
        },
    },
    "InputRangeSelectProps.displayValueExtractor": {
        name: "displayValueExtractor",
        control: false,
        table: {
            category: "InputRangeSelectProps<T>",
            type: {
                summary: "((option: T) => string)",
            },
        },
    },
    "InputRangeSelectProps.valueToStringFunction": {
        name: "valueToStringFunction",
        control: false,
        table: {
            category: "InputRangeSelectProps<T>",
            type: {
                summary: "((value: V) => string)",
            },
        },
    },
    "InputRangeSelectProps.renderCustomSelectedOption": {
        name: "renderCustomSelectedOption",
        control: false,
        table: {
            category: "InputRangeSelectProps<T>",
            type: {
                summary: "((option: T) => JSX.Element)",
            },
        },
    },
    InputRangeSelectPartialProps: {
        name: "InputRangeSelectPartialProps<T>",
        description: "To be exposed for Form component inheritance",
        control: false,
        table: {
            category: "InputRangeSelectPartialProps<T>",
            type: {
                summary: 'Omit< InputRangeSelectProps<T, V>, "error" >',
            },
        },
    },
} satisfies Record<string, unknown>;
