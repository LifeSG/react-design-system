// This file is generated. Do not edit manually.
// Run: npm run storybook:argtypes

export const timepickerExtraArgTypes = {
    "TimepickerProps.className": {
        name: "className",
        control: false,
        table: {
            category: "TimepickerProps",
            type: {
                summary: "string",
            },
        },
    },
    "TimepickerProps.id": {
        name: "id",
        control: false,
        table: {
            category: "TimepickerProps",
            type: {
                summary: "string",
            },
        },
    },
    "TimepickerProps.style": {
        name: "style",
        control: false,
        table: {
            category: "TimepickerProps",
            type: {
                summary: "React.CSSProperties",
            },
        },
    },
    "TimepickerProps.aria-labelledby": {
        name: "aria-labelledby",
        control: false,
        table: {
            category: "TimepickerProps",
            type: {
                summary: "string",
            },
        },
    },
    "TimepickerProps.aria-describedby": {
        name: "aria-describedby",
        control: false,
        table: {
            category: "TimepickerProps",
            type: {
                summary: "string",
            },
        },
    },
    "TimepickerProps.data-testid": {
        name: "data-testid",
        control: false,
        table: {
            category: "TimepickerProps",
            type: {
                summary: "string",
            },
        },
    },
    "TimepickerProps.value": {
        name: "value",
        description:
            'The value of the time input in a string based format\n\n24 hour uses "hh:mm" e.g. `"13:00"`\n\n12 hour uses "hh:mmA" e.g. `"01:00PM"`',
        control: false,
        table: {
            category: "TimepickerProps",
            type: {
                summary: "string",
            },
        },
    },
    "TimepickerProps.placeholder": {
        name: "placeholder",
        control: false,
        table: {
            category: "TimepickerProps",
            type: {
                summary: "string",
            },
        },
    },
    "TimepickerProps.format": {
        name: "format",
        description:
            "The time input format in `12hr` or `24hr`. Defaults to `24hr`",
        control: false,
        table: {
            category: "TimepickerProps",
            type: {
                summary: "TimepickerFormat",
            },
        },
    },
    "TimepickerProps.disabled": {
        name: "disabled",
        control: false,
        table: {
            category: "TimepickerProps",
            type: {
                summary: "boolean",
            },
        },
    },
    "TimepickerProps.readOnly": {
        name: "readOnly",
        control: false,
        table: {
            category: "TimepickerProps",
            type: {
                summary: "boolean",
            },
        },
    },
    "TimepickerProps.error": {
        name: "error",
        control: false,
        table: {
            category: "TimepickerProps",
            type: {
                summary: "boolean",
            },
        },
    },
    "TimepickerProps.alignment": {
        name: "alignment",
        control: false,
        table: {
            category: "TimepickerProps",
            type: {
                summary: "DropdownAlignmentType",
            },
        },
    },
    "TimepickerProps.dropdownZIndex": {
        name: "dropdownZIndex",
        control: false,
        table: {
            category: "TimepickerProps",
            type: {
                summary: "number",
            },
        },
    },
    "TimepickerProps.dropdownRootNode": {
        name: "dropdownRootNode",
        control: false,
        table: {
            category: "TimepickerProps",
            type: {
                summary: "RefObject<HTMLElement>",
            },
        },
    },
    "TimepickerProps.onChange": {
        name: "onChange",
        description:
            'Called when the user makes a selection and clicks on the "Confirm" button\nin the time selection box. Returns a string based format.\n\n24 hour returns "hh:mm" e.g. `"13:00"`\n\n12 hour returns "hh:mmA" e.g. `"01:00PM"`',
        control: false,
        table: {
            category: "TimepickerProps",
            type: {
                summary: "((value: string) => void)",
            },
        },
    },
    "TimepickerProps.onFocus": {
        name: "onFocus",
        description: "Called when the field is focused",
        control: false,
        table: {
            category: "TimepickerProps",
            type: {
                summary: "(() => void)",
            },
        },
    },
    "TimepickerProps.onBlur": {
        name: "onBlur",
        description: "Called when a defocus is made on the field",
        control: false,
        table: {
            category: "TimepickerProps",
            type: {
                summary: "(() => void)",
            },
        },
    },
    TimepickerFormat: {
        name: "TimepickerFormat",
        control: false,
        table: {
            category: "TimepickerFormat",
            type: {
                summary: '"12hr" | "24hr"',
            },
        },
    },
} satisfies Record<string, unknown>;
