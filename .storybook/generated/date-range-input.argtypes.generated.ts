// This file is generated. Do not edit manually.
// Run: npm run storybook:argtypes

export const dateRangeInputExtraArgTypes = {
    "DateRangeInputProps.className": {
        name: "className",
        control: false,
        table: {
            category: "DateRangeInputProps",
            type: {
                summary: "string",
            },
        },
    },
    "DateRangeInputProps.id": {
        name: "id",
        control: false,
        table: {
            category: "DateRangeInputProps",
            type: {
                summary: "string",
            },
        },
    },
    "DateRangeInputProps.data-testid": {
        name: "data-testid",
        control: false,
        table: {
            category: "DateRangeInputProps",
            type: {
                summary: "string",
            },
        },
    },
    "DateRangeInputProps.hideInputKeyboard": {
        name: "hideInputKeyboard",
        control: false,
        table: {
            category: "DateRangeInputProps",
            type: {
                summary: "boolean",
            },
        },
    },
    "DateRangeInputProps.value": {
        name: "value",
        description:
            'The value of the start date input in "YYYY-MM-DD" or "YYYY-M-D" string format.',
        control: false,
        table: {
            category: "DateRangeInputProps",
            type: {
                summary: "string",
            },
        },
    },
    "DateRangeInputProps.valueEnd": {
        name: "valueEnd",
        description:
            'The value of the end date input in "YYYY-MM-DD" or "YYYY-M-D" string format.',
        control: false,
        table: {
            category: "DateRangeInputProps",
            type: {
                summary: "string",
            },
        },
    },
    "DateRangeInputProps.error": {
        name: "error",
        control: false,
        table: {
            category: "DateRangeInputProps",
            type: {
                summary: "boolean",
            },
        },
    },
    "DateRangeInputProps.disabled": {
        name: "disabled",
        control: false,
        table: {
            category: "DateRangeInputProps",
            type: {
                summary: "boolean",
            },
        },
    },
    "DateRangeInputProps.readOnly": {
        name: "readOnly",
        control: false,
        table: {
            category: "DateRangeInputProps",
            type: {
                summary: "boolean",
            },
        },
    },
    "DateRangeInputProps.variant": {
        name: "variant",
        description: "Indicate calendar variant from the date input component.",
        control: false,
        table: {
            category: "DateRangeInputProps",
            type: {
                summary: 'Exclude<Variant, "single" | "multi">',
            },
        },
    },
    "DateRangeInputProps.numberOfDays": {
        name: "numberOfDays",
        description: "Set the number of days for fixed-range variant",
        control: false,
        table: {
            category: "DateRangeInputProps",
            type: {
                summary: "number",
            },
        },
    },
    "DateRangeInputProps.withButton": {
        name: "withButton",
        description:
            'Specifies if the "Done" and "Cancel" action buttons should be rendered.\nIs restricted to `true` on mobile viewports',
        control: false,
        table: {
            category: "DateRangeInputProps",
            type: {
                summary: "boolean",
            },
        },
    },
    "DateRangeInputProps.zIndex": {
        name: "zIndex",
        description: "The z-index of the calendar dropdown",
        control: false,
        table: {
            category: "DateRangeInputProps",
            type: {
                summary: "number",
            },
        },
    },
    "DateRangeInputProps.dropdownRootNode": {
        name: "dropdownRootNode",
        description:
            "The root element that contains the dropdown element. Defaults to the document body.\n\nIf the parent that contains the trigger element has a higher z-index than the dropdown,\nthe dropdown may not be visible. Specify the parent element here instead",
        control: false,
        table: {
            category: "DateRangeInputProps",
            type: {
                summary: "RefObject<HTMLElement>",
            },
        },
    },
    "DateRangeInputProps.onChange": {
        name: "onChange",
        description:
            'Function that returns when a valid selection is made. Returns the start and\nend date in "YYYY-MM-DD" string format.',
        control: false,
        table: {
            category: "DateRangeInputProps",
            type: {
                summary: "((startDate: string, endDate: string) => void)",
            },
        },
    },
    "DateRangeInputProps.onFocus": {
        name: "onFocus",
        description: "Called when field is focused",
        control: false,
        table: {
            category: "DateRangeInputProps",
            type: {
                summary: "(() => void)",
            },
        },
    },
    "DateRangeInputProps.onBlur": {
        name: "onBlur",
        description:
            "Function that returns when a defocus is made on the field",
        control: false,
        table: {
            category: "DateRangeInputProps",
            type: {
                summary: "(() => void)",
            },
        },
    },
    "DateRangeInputProps.onYearMonthDisplayChange": {
        name: "onYearMonthDisplayChange",
        description:
            "Called when there is a change in the current visible month and year",
        control: false,
        table: {
            category: "DateRangeInputProps",
            type: {
                summary: "((value: YearMonthDisplay) => void)",
            },
        },
    },
} satisfies Record<string, unknown>;
