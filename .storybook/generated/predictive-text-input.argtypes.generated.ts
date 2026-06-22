// This file is generated. Do not edit manually.
// Run: npm run storybook:argtypes

export const predictiveTextInputExtraArgTypes = {
    "PredictiveTextInputProps.id": {
        name: "id",
        control: false,
        table: {
            category: "PredictiveTextInputProps<T>",
            type: {
                summary: "string",
            },
        },
    },
    "PredictiveTextInputProps.className": {
        name: "className",
        control: false,
        table: {
            category: "PredictiveTextInputProps<T>",
            type: {
                summary: "string",
            },
        },
    },
    "PredictiveTextInputProps.data-testid": {
        name: "data-testid",
        control: false,
        table: {
            category: "PredictiveTextInputProps<T>",
            type: {
                summary: "string",
            },
        },
    },
    "PredictiveTextInputProps.minimumCharacters": {
        name: "minimumCharacters",
        description: "Minimum number of characters, before options are shown",
        control: false,
        table: {
            category: "PredictiveTextInputProps<T>",
            type: {
                summary: "number",
            },
        },
    },
    "PredictiveTextInputProps.placeholder": {
        name: "placeholder",
        control: false,
        table: {
            category: "PredictiveTextInputProps<T>",
            type: {
                summary: "string",
            },
        },
    },
    "PredictiveTextInputProps.readOnly": {
        name: "readOnly",
        control: false,
        table: {
            category: "PredictiveTextInputProps<T>",
            type: {
                summary: "boolean",
            },
        },
    },
    "PredictiveTextInputProps.disabled": {
        name: "disabled",
        control: false,
        table: {
            category: "PredictiveTextInputProps<T>",
            type: {
                summary: "boolean",
            },
        },
    },
    "PredictiveTextInputProps.error": {
        name: "error",
        control: false,
        table: {
            category: "PredictiveTextInputProps<T>",
            type: {
                summary: "boolean",
            },
        },
    },
    "PredictiveTextInputProps.selectedOption": {
        name: "selectedOption",
        control: false,
        table: {
            category: "PredictiveTextInputProps<T>",
            type: {
                summary: "T",
            },
        },
    },
    "PredictiveTextInputProps.alignment": {
        name: "alignment",
        control: false,
        table: {
            category: "PredictiveTextInputProps<T>",
            type: {
                summary: "DropdownAlignmentType",
            },
        },
    },
    "PredictiveTextInputProps.dropdownZIndex": {
        name: "dropdownZIndex",
        control: false,
        table: {
            category: "PredictiveTextInputProps<T>",
            type: {
                summary: "number",
            },
        },
    },
    "PredictiveTextInputProps.dropdownRootNode": {
        name: "dropdownRootNode",
        description:
            "The root element that contains the dropdown element. Defaults to the document body.\n\nIf the parent that contains the trigger element has a higher z-index than the dropdown,\nthe dropdown may not be visible. Specify the parent element here instead",
        control: false,
        table: {
            category: "PredictiveTextInputProps<T>",
            type: {
                summary: "RefObject<HTMLElement>",
            },
        },
    },
    "PredictiveTextInputProps.dropdownWidth": {
        name: "dropdownWidth",
        description:
            "Custom width for the dropdown. When specified, the dropdown will use this\nwidth instead of matching the input element width.",
        control: false,
        table: {
            category: "PredictiveTextInputProps<T>",
            type: {
                summary: "string",
            },
        },
    },
    "PredictiveTextInputProps.fetchOptions": {
        name: "fetchOptions",
        description: "Async Function to populate options",
        control: false,
        table: {
            category: "PredictiveTextInputProps<T>",
            type: {
                summary: "(input: string) => Promise<T[]>",
            },
        },
    },
    "PredictiveTextInputProps.valueExtractor": {
        name: "valueExtractor",
        description: "Function to derive value from an item",
        control: false,
        table: {
            category: "PredictiveTextInputProps<T>",
            type: {
                summary: "((item: T) => V)",
            },
        },
    },
    "PredictiveTextInputProps.listExtractor": {
        name: "listExtractor",
        description: "Function to derive options display value from an item",
        control: false,
        table: {
            category: "PredictiveTextInputProps<T>",
            type: {
                summary: "((item: T) => string | ListItemDisplayProps)",
            },
        },
    },
    "PredictiveTextInputProps.displayValueExtractor": {
        name: "displayValueExtractor",
        description: "Function to derive display value for selected option",
        control: false,
        table: {
            category: "PredictiveTextInputProps<T>",
            type: {
                summary: "((option: T) => string)",
            },
        },
    },
    "PredictiveTextInputProps.onSelectOption": {
        name: "onSelectOption",
        description: "Callback function when option is selected",
        control: false,
        table: {
            category: "PredictiveTextInputProps<T>",
            type: {
                summary: "| ((option: T, extractedValue: V) => void)",
            },
        },
    },
} satisfies Record<string, unknown>;
