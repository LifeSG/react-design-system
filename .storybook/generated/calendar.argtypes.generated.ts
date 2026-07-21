// This file is generated. Do not edit manually.
// Run: npm run storybook:argtypes

export const calendarExtraArgTypes = {
    "CalendarMultiProps.maxSelectable": {
        control: false,
        description: "Maximum number of dates that can be selected",
        name: "maxSelectable",
        type: {
            required: false,
        },
        table: {
            category: "CalendarMultiProps",
            type: {
                summary: "number",
            },
        },
    },
    "CalendarMultiProps.minSelectable": {
        control: false,
        description: "Minimum number of dates that must be selected",
        name: "minSelectable",
        type: {
            required: false,
        },
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
        type: {
            required: false,
        },
        table: {
            category: "CalendarMultiProps",
            type: {
                summary: "(values: string[]) => void",
            },
        },
    },
    "CalendarMultiProps.values": {
        control: false,
        description: "Selected dates in `YYYY-MM-DD` format",
        name: "values",
        type: {
            required: false,
        },
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
        type: {
            required: true,
        },
        table: {
            category: "CalendarMultiProps",
            type: {
                summary: '"multi"',
            },
        },
    },
    CalendarProps: {
        control: false,
        description: "Props for the `Calendar` component",
        name: "CalendarProps",
        type: {},
        table: {
            category: "CalendarProps",
            type: {
                summary:
                    "CalendarBaseProps & (CalendarSingleProps | CalendarMultiProps)",
            },
        },
    },
    "CalendarProps.allowDisabledSelection": {
        control: false,
        description:
            "Specifies if dates normally disabled by `minDate`, `maxDate` and `disabledDates` are still selectable",
        name: "allowDisabledSelection",
        type: {
            required: false,
        },
        table: {
            category: "CalendarProps",
            type: {
                summary: "false | true",
            },
        },
    },
    "CalendarProps.className": {
        control: false,
        name: "className",
        type: {
            required: false,
        },
        table: {
            category: "CalendarProps",
            type: {
                summary: "string",
            },
        },
    },
    "CalendarProps.data-testid": {
        control: false,
        name: "data-testid",
        type: {
            required: false,
        },
        table: {
            category: "CalendarProps",
            type: {
                summary: "string",
            },
        },
    },
    "CalendarProps.disabledDates": {
        control: false,
        description:
            'Dates to disable in `YYYY-MM-DD` format. Example: `["2023-04-30"]`',
        name: "disabledDates",
        type: {
            required: false,
        },
        table: {
            category: "CalendarProps",
            type: {
                summary: "string[]",
            },
        },
    },
    "CalendarProps.id": {
        control: false,
        name: "id",
        type: {
            required: false,
        },
        table: {
            category: "CalendarProps",
            type: {
                summary: "string",
            },
        },
    },
    "CalendarProps.maxDate": {
        control: false,
        description:
            "The maximum date that can be selected (inclusive) in 'YYYY-MM-DD' format.",
        name: "maxDate",
        type: {
            required: false,
        },
        table: {
            category: "CalendarProps",
            type: {
                summary: "string",
            },
        },
    },
    "CalendarProps.minDate": {
        control: false,
        description:
            "The minimum date that can be selected (inclusive) in 'YYYY-MM-DD' format.",
        name: "minDate",
        type: {
            required: false,
        },
        table: {
            category: "CalendarProps",
            type: {
                summary: "string",
            },
        },
    },
    "CalendarProps.onChange": {
        control: false,
        description:
            "Called when the selected date changes.\n\nCalled when the selection changes.",
        name: "onChange",
        type: {
            required: false,
        },
        table: {
            category: "CalendarProps",
            type: {
                summaryParts: [
                    "(value: string) => void",
                    "(values: string[]) => void",
                ],
            },
        },
    },
    "CalendarProps.onHover": {
        control: false,
        description: "Called when a day cell is hovered.",
        name: "onHover",
        type: {
            required: false,
        },
        table: {
            category: "CalendarProps",
            type: {
                summary: "(value: string) => void",
            },
        },
    },
    "CalendarProps.onYearMonthDisplayChange": {
        control: false,
        description: "Called when the visible month or year changes.",
        name: "onYearMonthDisplayChange",
        type: {
            required: false,
        },
        table: {
            category: "CalendarProps",
            type: {
                summary: "(value: YearMonthDisplay) => void",
            },
        },
    },
    "CalendarProps.showActiveMonthDaysOnly": {
        control: false,
        description:
            "Specifies if the calendar should display only dates for the selected month",
        name: "showActiveMonthDaysOnly",
        type: {
            required: false,
        },
        table: {
            category: "CalendarProps",
            type: {
                summary: "false | true",
            },
        },
    },
    "CalendarProps.styleType": {
        control: false,
        description: "Border style of the calendar container.",
        name: "styleType",
        type: {
            required: false,
        },
        table: {
            category: "CalendarProps",
            defaultValue: {
                summary: '"bordered"',
            },
            type: {
                summaryParts: ["'bordered'", "'no-border'"],
            },
        },
    },
    "CalendarProps.variant": {
        control: false,
        name: "variant",
        type: {
            required: false,
        },
        table: {
            category: "CalendarProps",
            defaultValue: {
                summary: '"single"',
            },
            type: {
                summaryParts: ["'multi'", "'single'"],
            },
        },
    },
    "CalendarSingleProps.onChange": {
        control: false,
        description: "Called when the selected date changes.",
        name: "onChange",
        type: {
            required: false,
        },
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
        type: {
            required: false,
        },
        table: {
            category: "CalendarSingleProps",
            jsDocTags: {
                deprecated: "Use `onChange` instead.",
            },
            type: {
                summary: "(value: string) => void",
            },
        },
    },
    "CalendarSingleProps.value": {
        control: false,
        description: "Selected date in `YYYY-MM-DD` format",
        name: "value",
        type: {
            required: false,
        },
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
        type: {
            required: false,
        },
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
        type: {
            required: true,
        },
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
        type: {
            required: true,
        },
        table: {
            category: "YearMonthDisplay",
            type: {
                summary: "number",
            },
        },
    },
} satisfies Record<string, unknown>;
