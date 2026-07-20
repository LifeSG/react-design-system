// This file is generated. Do not edit manually.
// Run: npm run storybook:argtypes

export const calendarExtraArgTypes = {
    "CalendarMultiProps.allowDisabledSelection": {
        control: false,
        description:
            "Specifies if dates normally disabled by `minDate`, `maxDate` and `disabledDates` are still selectable",
        name: "allowDisabledSelection",
        table: {
            category: "CalendarMultiProps",
            type: {
                summary: "boolean",
            },
        },
    },
    "CalendarMultiProps.className": {
        control: false,
        name: "className",
        table: {
            category: "CalendarMultiProps",
            type: {
                summary: "string",
            },
        },
    },
    "CalendarMultiProps.data-testid": {
        control: false,
        name: "data-testid",
        table: {
            category: "CalendarMultiProps",
            type: {
                summary: "string",
            },
        },
    },
    "CalendarMultiProps.disabledDates": {
        control: false,
        description:
            'Dates to disable in `YYYY-MM-DD` format. Example: `["2023-04-30"]`',
        name: "disabledDates",
        table: {
            category: "CalendarMultiProps",
            type: {
                summary: "string[]",
            },
        },
    },
    "CalendarMultiProps.id": {
        control: false,
        name: "id",
        table: {
            category: "CalendarMultiProps",
            type: {
                summary: "string",
            },
        },
    },
    "CalendarMultiProps.maxDate": {
        control: false,
        description:
            "The maximum date that can be selected (inclusive) in 'YYYY-MM-DD' format.",
        name: "maxDate",
        table: {
            category: "CalendarMultiProps",
            type: {
                summary: "string",
            },
        },
    },
    "CalendarMultiProps.maxSelectable": {
        control: false,
        description: "Maximum number of dates that can be selected",
        name: "maxSelectable",
        table: {
            category: "CalendarMultiProps",
            type: {
                summary: "number",
            },
        },
    },
    "CalendarMultiProps.minDate": {
        control: false,
        description:
            "The minimum date that can be selected (inclusive) in 'YYYY-MM-DD' format.",
        name: "minDate",
        table: {
            category: "CalendarMultiProps",
            type: {
                summary: "string",
            },
        },
    },
    "CalendarMultiProps.minSelectable": {
        control: false,
        description: "Minimum number of dates that must be selected",
        name: "minSelectable",
        table: {
            category: "CalendarMultiProps",
            type: {
                summary: "number",
            },
        },
    },
    "CalendarMultiProps.onChange": {
        control: false,
        description: "Called when the selection changes.",
        name: "onChange",
        table: {
            category: "CalendarMultiProps",
            type: {
                summary: "(values: string[]) => void",
            },
        },
    },
    "CalendarMultiProps.onHover": {
        control: false,
        description: "Called when a day cell is hovered.",
        name: "onHover",
        table: {
            category: "CalendarMultiProps",
            type: {
                summary: "(value: string) => void",
            },
        },
    },
    "CalendarMultiProps.onYearMonthDisplayChange": {
        control: false,
        description: "Called when the visible month or year changes.",
        name: "onYearMonthDisplayChange",
        table: {
            category: "CalendarMultiProps",
            type: {
                summary: "(value: YearMonthDisplay) => void",
            },
        },
    },
    "CalendarMultiProps.showActiveMonthDaysOnly": {
        control: false,
        description:
            "Specifies if the calendar should display only dates for the selected month",
        name: "showActiveMonthDaysOnly",
        table: {
            category: "CalendarMultiProps",
            type: {
                summary: "boolean",
            },
        },
    },
    "CalendarMultiProps.styleType": {
        control: false,
        description: "Border style of the calendar container.",
        name: "styleType",
        table: {
            category: "CalendarMultiProps",
            defaultValue: {
                summary: '"bordered"',
            },
            type: {
                summary: "'no-border' | 'bordered'",
            },
        },
    },
    "CalendarMultiProps.values": {
        control: false,
        description: "Selected dates in `YYYY-MM-DD` format",
        name: "values",
        table: {
            category: "CalendarMultiProps",
            type: {
                summary: "string[]",
            },
        },
    },
    "CalendarMultiProps.variant": {
        control: false,
        name: "variant",
        table: {
            category: "CalendarMultiProps",
            type: {
                summary: '"multi"',
            },
        },
    },
    "CalendarSingleProps.allowDisabledSelection": {
        control: false,
        description:
            "Specifies if dates normally disabled by `minDate`, `maxDate` and `disabledDates` are still selectable",
        name: "allowDisabledSelection",
        table: {
            category: "CalendarSingleProps",
            type: {
                summary: "boolean",
            },
        },
    },
    "CalendarSingleProps.className": {
        control: false,
        name: "className",
        table: {
            category: "CalendarSingleProps",
            type: {
                summary: "string",
            },
        },
    },
    "CalendarSingleProps.data-testid": {
        control: false,
        name: "data-testid",
        table: {
            category: "CalendarSingleProps",
            type: {
                summary: "string",
            },
        },
    },
    "CalendarSingleProps.disabledDates": {
        control: false,
        description:
            'Dates to disable in `YYYY-MM-DD` format. Example: `["2023-04-30"]`',
        name: "disabledDates",
        table: {
            category: "CalendarSingleProps",
            type: {
                summary: "string[]",
            },
        },
    },
    "CalendarSingleProps.id": {
        control: false,
        name: "id",
        table: {
            category: "CalendarSingleProps",
            type: {
                summary: "string",
            },
        },
    },
    "CalendarSingleProps.maxDate": {
        control: false,
        description:
            "The maximum date that can be selected (inclusive) in 'YYYY-MM-DD' format.",
        name: "maxDate",
        table: {
            category: "CalendarSingleProps",
            type: {
                summary: "string",
            },
        },
    },
    "CalendarSingleProps.minDate": {
        control: false,
        description:
            "The minimum date that can be selected (inclusive) in 'YYYY-MM-DD' format.",
        name: "minDate",
        table: {
            category: "CalendarSingleProps",
            type: {
                summary: "string",
            },
        },
    },
    "CalendarSingleProps.onChange": {
        control: false,
        description: "Called when the selected date changes.",
        name: "onChange",
        table: {
            category: "CalendarSingleProps",
            type: {
                summary: "(value: string) => void",
            },
        },
    },
    "CalendarSingleProps.onHover": {
        control: false,
        description: "Called when a day cell is hovered.",
        name: "onHover",
        table: {
            category: "CalendarSingleProps",
            type: {
                summary: "(value: string) => void",
            },
        },
    },
    "CalendarSingleProps.onSelect": {
        control: false,
        deprecated: "Use `onChange` instead.",
        description: "Called when a date is selected.",
        name: "onSelect",
        table: {
            category: "CalendarSingleProps",
            type: {
                summary: "(value: string) => void",
            },
        },
    },
    "CalendarSingleProps.onYearMonthDisplayChange": {
        control: false,
        description: "Called when the visible month or year changes.",
        name: "onYearMonthDisplayChange",
        table: {
            category: "CalendarSingleProps",
            type: {
                summary: "(value: YearMonthDisplay) => void",
            },
        },
    },
    "CalendarSingleProps.showActiveMonthDaysOnly": {
        control: false,
        description:
            "Specifies if the calendar should display only dates for the selected month",
        name: "showActiveMonthDaysOnly",
        table: {
            category: "CalendarSingleProps",
            type: {
                summary: "boolean",
            },
        },
    },
    "CalendarSingleProps.styleType": {
        control: false,
        description: "Border style of the calendar container.",
        name: "styleType",
        table: {
            category: "CalendarSingleProps",
            defaultValue: {
                summary: '"bordered"',
            },
            type: {
                summary: "'no-border' | 'bordered'",
            },
        },
    },
    "CalendarSingleProps.value": {
        control: false,
        description: "Selected date in `YYYY-MM-DD` format",
        name: "value",
        table: {
            category: "CalendarSingleProps",
            type: {
                summary: "string",
            },
        },
    },
    "CalendarSingleProps.variant": {
        control: false,
        name: "variant",
        table: {
            category: "CalendarSingleProps",
            defaultValue: {
                summary: '"single"',
            },
            type: {
                summary: '"single"',
            },
        },
    },
    "YearMonthDisplay.month": {
        control: false,
        name: "month",
        table: {
            category: "YearMonthDisplay",
            type: {
                summary: "number",
            },
        },
    },
    "YearMonthDisplay.year": {
        control: false,
        name: "year",
        table: {
            category: "YearMonthDisplay",
            type: {
                summary: "number",
            },
        },
    },
} satisfies Record<string, unknown>;
