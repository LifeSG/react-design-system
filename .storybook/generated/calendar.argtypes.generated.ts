// This file is generated. Do not edit manually.
// Run: npm run storybook:argtypes

export const calendarExtraArgTypes = {
    "CalendarBaseProps.className": {
        name: "className",
        control: false,
        table: {
            category: "CalendarBaseProps",
            type: {
                summary: "string",
            },
        },
    },
    "CalendarBaseProps.data-testid": {
        name: "data-testid",
        control: false,
        table: {
            category: "CalendarBaseProps",
            type: {
                summary: "string",
            },
        },
    },
    "CalendarBaseProps.id": {
        name: "id",
        control: false,
        table: {
            category: "CalendarBaseProps",
            type: {
                summary: "string",
            },
        },
    },
    "CalendarBaseProps.styleType": {
        name: "styleType",
        description:
            "Specifies if the component should have a border around it. Values `no-border` | `bordered`",
        control: false,
        table: {
            category: "CalendarBaseProps",
            type: {
                summary: '"no-border" | "bordered"',
            },
        },
    },
    "CalendarBaseProps.onHover": {
        name: "onHover",
        description:
            "Called when day cell is hovered, returns value in `YYYY-MM-DD`",
        control: false,
        table: {
            category: "CalendarBaseProps",
            type: {
                summary: "((value: string) => void)",
            },
        },
    },
    "CalendarBaseProps.onYearMonthDisplayChange": {
        name: "onYearMonthDisplayChange",
        description:
            "Called when there is a change in the current visible month and year",
        control: false,
        table: {
            category: "CalendarBaseProps",
            type: {
                summary: "((value: YearMonthDisplay) => void)",
            },
        },
    },
    "CalendarSingleProps.variant": {
        name: "variant",
        control: false,
        table: {
            category: "CalendarSingleProps",
            type: {
                summary: '"single"',
            },
        },
    },
    "CalendarSingleProps.value": {
        name: "value",
        description: "Selected date in `YYYY-MM-DD` format",
        control: false,
        table: {
            category: "CalendarSingleProps",
            type: {
                summary: "string",
            },
        },
    },
    "CalendarSingleProps.onChange": {
        name: "onChange",
        description:
            "Called when the selected date changes. Returns the selected date in `YYYY-MM-DD` format",
        control: false,
        table: {
            category: "CalendarSingleProps",
            type: {
                summary: "((value: string) => void)",
            },
        },
    },
    "CalendarSingleProps.onSelect": {
        name: "onSelect",
        description:
            "Called when the selected date changes. Returns the selected date in `YYYY-MM-DD` format",
        deprecated: "Use `onChange` instead",
        control: false,
        table: {
            category: "CalendarSingleProps",
            type: {
                summary: "((value: string) => void)",
            },
        },
    },
    "CalendarMultiProps.variant": {
        name: "variant",
        control: false,
        table: {
            category: "CalendarMultiProps",
            type: {
                summary: '"multi"',
            },
        },
    },
    "CalendarMultiProps.values": {
        name: "values",
        description: "Selected dates in `YYYY-MM-DD` format",
        control: false,
        table: {
            category: "CalendarMultiProps",
            type: {
                summary: "string[]",
            },
        },
    },
    "CalendarMultiProps.minSelectable": {
        name: "minSelectable",
        description: "Minimum number of dates that must be selected",
        control: false,
        table: {
            category: "CalendarMultiProps",
            type: {
                summary: "number",
            },
        },
    },
    "CalendarMultiProps.maxSelectable": {
        name: "maxSelectable",
        description: "Maximum number of dates that can be selected",
        control: false,
        table: {
            category: "CalendarMultiProps",
            type: {
                summary: "number",
            },
        },
    },
    "CalendarMultiProps.onChange": {
        name: "onChange",
        description:
            "Called when the selection changes. Returns all selected dates in `YYYY-MM-DD` format",
        control: false,
        table: {
            category: "CalendarMultiProps",
            type: {
                summary: "((values: string[]) => void)",
            },
        },
    },
    CalendarProps: {
        name: "CalendarProps",
        control: false,
        table: {
            category: "CalendarProps",
            type: {
                summary: "CalendarSingleProps | CalendarMultiProps",
            },
        },
    },
} satisfies Record<string, unknown>;
