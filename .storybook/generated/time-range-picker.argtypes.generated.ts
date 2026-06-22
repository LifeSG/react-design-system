// This file is generated. Do not edit manually.
// Run: npm run storybook:argtypes

export const timeRangePickerExtraArgTypes = {
    "TimeRangePickerValue.start": {
        name: "start",
        control: false,
        table: {
            category: "TimeRangePickerValue",
            type: {
                summary: "string",
            },
        },
    },
    "TimeRangePickerValue.end": {
        name: "end",
        control: false,
        table: {
            category: "TimeRangePickerValue",
            type: {
                summary: "string",
            },
        },
    },
    "TimeRangePickerProps.className": {
        name: "className",
        control: false,
        table: {
            category: "TimeRangePickerProps",
            type: {
                summary: "string",
            },
        },
    },
    "TimeRangePickerProps.id": {
        name: "id",
        control: false,
        table: {
            category: "TimeRangePickerProps",
            type: {
                summary: "string",
            },
        },
    },
    "TimeRangePickerProps.style": {
        name: "style",
        control: false,
        table: {
            category: "TimeRangePickerProps",
            type: {
                summary: "React.CSSProperties",
            },
        },
    },
    "TimeRangePickerProps.aria-labelledby": {
        name: "aria-labelledby",
        control: false,
        table: {
            category: "TimeRangePickerProps",
            type: {
                summary: "string",
            },
        },
    },
    "TimeRangePickerProps.aria-describedby": {
        name: "aria-describedby",
        control: false,
        table: {
            category: "TimeRangePickerProps",
            type: {
                summary: "string",
            },
        },
    },
    "TimeRangePickerProps.aria-invalid": {
        name: "aria-invalid",
        control: false,
        table: {
            category: "TimeRangePickerProps",
            type: {
                summary: "boolean",
            },
        },
    },
    "TimeRangePickerProps.data-testid": {
        name: "data-testid",
        control: false,
        table: {
            category: "TimeRangePickerProps",
            type: {
                summary: "string",
            },
        },
    },
    "TimeRangePickerProps.value": {
        name: "value",
        description:
            'An object with `start` and `end` values as an empty string or a\nstring based format.\n\n24 hour uses "hh:mm" e.g. `{ start: "13:00", end: "14:00" }`\n\n12 hour uses "hh:mmA" e.g. `{ start: "01:00PM", end: "02:00PM" }`\n\nNote: combobox variant uses "h:mma" instead.',
        control: false,
        table: {
            category: "TimeRangePickerProps",
            type: {
                summary: "TimeRangePickerValue",
            },
        },
    },
    "TimeRangePickerProps.format": {
        name: "format",
        description:
            "The time input format in `12hr` or `24hr`. Defaults to `24hr`",
        control: false,
        table: {
            category: "TimeRangePickerProps",
            type: {
                summary: "TimeRangePickerFormat",
            },
        },
    },
    "TimeRangePickerProps.disabled": {
        name: "disabled",
        control: false,
        table: {
            category: "TimeRangePickerProps",
            type: {
                summary: "boolean",
            },
        },
    },
    "TimeRangePickerProps.readOnly": {
        name: "readOnly",
        control: false,
        table: {
            category: "TimeRangePickerProps",
            type: {
                summary: "boolean",
            },
        },
    },
    "TimeRangePickerProps.error": {
        name: "error",
        control: false,
        table: {
            category: "TimeRangePickerProps",
            type: {
                summary: "boolean",
            },
        },
    },
    "TimeRangePickerProps.variant": {
        name: "variant",
        description: "Specifies the variant for the time range picker",
        control: false,
        table: {
            category: "TimeRangePickerProps",
            type: {
                summary: "TimeRangePickerVariant",
            },
        },
    },
    "TimeRangePickerProps.interval": {
        name: "interval",
        description:
            "Combobox variant specific attributes\n\nSpecifies the interval (minutes) between each dropdown option",
        control: false,
        table: {
            category: "TimeRangePickerProps",
            type: {
                summary: "number",
            },
        },
    },
    "TimeRangePickerProps.startLimit": {
        name: "startLimit",
        description: "Specifies the starting time for the dropdown options",
        control: false,
        table: {
            category: "TimeRangePickerProps",
            type: {
                summary: "string",
            },
        },
    },
    "TimeRangePickerProps.endLimit": {
        name: "endLimit",
        description: "Specifies the ending time for the dropdown options",
        control: false,
        table: {
            category: "TimeRangePickerProps",
            type: {
                summary: "string",
            },
        },
    },
    "TimeRangePickerProps.initialScrollStartTime": {
        name: "initialScrollStartTime",
        description:
            "Specifies the initial start time to scroll to when the start dropdown opens",
        control: false,
        table: {
            category: "TimeRangePickerProps",
            type: {
                summary: "string",
            },
        },
    },
    "TimeRangePickerProps.initialScrollEndTime": {
        name: "initialScrollEndTime",
        description:
            "Specifies the initial end time to scroll to when the end dropdown opens",
        control: false,
        table: {
            category: "TimeRangePickerProps",
            type: {
                summary: "string",
            },
        },
    },
    "TimeRangePickerProps.alignment": {
        name: "alignment",
        description:
            "Specifies the alignment of the dropdown to the left or right of the reference element",
        control: false,
        table: {
            category: "TimeRangePickerProps",
            type: {
                summary: "DropdownAlignmentType",
            },
        },
    },
    "TimeRangePickerProps.dropdownZIndex": {
        name: "dropdownZIndex",
        description: "Specifies the z-index of the dropdown element",
        control: false,
        table: {
            category: "TimeRangePickerProps",
            type: {
                summary: "number",
            },
        },
    },
    "TimeRangePickerProps.dropdownRootNode": {
        name: "dropdownRootNode",
        description:
            "Use this when the parent container has a higher z-index\nand the dropdown would otherwise be hidden.",
        control: false,
        table: {
            category: "TimeRangePickerProps",
            type: {
                summary: "RefObject<HTMLElement>",
            },
        },
    },
    "TimeRangePickerProps.onChange": {
        name: "onChange",
        description:
            'Called when a selection is made. Returns an object with `start` and\n`end` values as an empty string or a string based format.\n\n24 hour returns "hh:mm" e.g. `{ start: "13:00", end: "14:00" }`\n\n12 hour returns "hh:mmA" e.g. `{ start: "01:00PM", end: "02:00PM" }`',
        control: false,
        table: {
            category: "TimeRangePickerProps",
            type: {
                summary: "((value: TimeRangePickerValue) => void)",
            },
        },
    },
    "TimeRangePickerProps.onFocus": {
        name: "onFocus",
        description: "Called when the field is focused",
        control: false,
        table: {
            category: "TimeRangePickerProps",
            type: {
                summary: "(() => void)",
            },
        },
    },
    "TimeRangePickerProps.onBlur": {
        name: "onBlur",
        description: "Called when a defocus is made on the field",
        control: false,
        table: {
            category: "TimeRangePickerProps",
            type: {
                summary: "(() => void)",
            },
        },
    },
    TimeRangePickerFormat: {
        name: "TimeRangePickerFormat",
        control: false,
        table: {
            category: "TimeRangePickerFormat",
            type: {
                summary: '"12hr" | "24hr"',
            },
        },
    },
    TimeRangePickerVariant: {
        name: "TimeRangePickerVariant",
        control: false,
        table: {
            category: "TimeRangePickerVariant",
            type: {
                summary: '"dial" | "combobox"',
            },
        },
    },
} satisfies Record<string, unknown>;
