// This file is generated. Do not edit manually.
// Run: npm run storybook:argtypes

export const dateInputExtraArgTypes = {
    "DateInputProps.className": {
        name: "className",
        control: false,
        table: {
            category: "DateInputProps",
            type: {
                summary: "string",
            },
        },
    },
    "DateInputProps.id": {
        name: "id",
        control: false,
        table: {
            category: "DateInputProps",
            type: {
                summary: "string",
            },
        },
    },
    "DateInputProps.dropdownRootNode": {
        name: "dropdownRootNode",
        description:
            "The root element that contains the dropdown element. Defaults to the document body.\n\nIf the parent that contains the trigger element has a higher z-index than the dropdown,\nthe dropdown may not be visible. Specify the parent element here instead",
        control: false,
        table: {
            category: "DateInputProps",
            type: {
                summary: "RefObject<HTMLElement>",
            },
        },
    },
    "DateInputProps.data-testid": {
        name: "data-testid",
        control: false,
        table: {
            category: "DateInputProps",
            type: {
                summary: "string",
            },
        },
    },
    "DateInputProps.readOnly": {
        name: "readOnly",
        control: false,
        table: {
            category: "DateInputProps",
            type: {
                summary: "boolean",
            },
        },
    },
    "DateInputProps.hideInputKeyboard": {
        name: "hideInputKeyboard",
        control: false,
        table: {
            category: "DateInputProps",
            type: {
                summary: "boolean",
            },
        },
    },
    "DateInputProps.value": {
        name: "value",
        description:
            'The value of the date input in "YYYY-MM-DD" or "YYYY-M-D" string format.',
        control: false,
        table: {
            category: "DateInputProps",
            type: {
                summary: "string",
            },
        },
    },
    "DateInputProps.error": {
        name: "error",
        control: false,
        table: {
            category: "DateInputProps",
            type: {
                summary: "boolean",
            },
        },
    },
    "DateInputProps.disabled": {
        name: "disabled",
        control: false,
        table: {
            category: "DateInputProps",
            type: {
                summary: "boolean",
            },
        },
    },
    "DateInputProps.withButton": {
        name: "withButton",
        description:
            'Specifies if the "Done" and "Cancel" action buttons should be rendered.\nIs restricted to `true` on mobile viewports',
        control: false,
        table: {
            category: "DateInputProps",
            type: {
                summary: "boolean",
            },
        },
    },
    "DateInputProps.zIndex": {
        name: "zIndex",
        description: "The z-index of the calendar dropdown",
        control: false,
        table: {
            category: "DateInputProps",
            type: {
                summary: "number",
            },
        },
    },
    "DateInputProps.onChange": {
        name: "onChange",
        description:
            'Function that returns when a valid selection is made. Returns the start\ndate in "YYYY-MM-DD" string format.',
        control: false,
        table: {
            category: "DateInputProps",
            type: {
                summary: "((value: string) => void)",
            },
        },
    },
    "DateInputProps.onFocus": {
        name: "onFocus",
        description: "Called when the field is focused",
        control: false,
        table: {
            category: "DateInputProps",
            type: {
                summary: "(() => void)",
            },
        },
    },
    "DateInputProps.onBlur": {
        name: "onBlur",
        description: "Called when a defocus is made on the field",
        control: false,
        table: {
            category: "DateInputProps",
            type: {
                summary: "(() => void)",
            },
        },
    },
    "DateInputProps.onYearMonthDisplayChange": {
        name: "onYearMonthDisplayChange",
        description:
            "Called when there is a change in the current visible month and year",
        control: false,
        table: {
            category: "DateInputProps",
            type: {
                summary: "((value: YearMonthDisplay) => void)",
            },
        },
    },
} satisfies Record<string, unknown>;
