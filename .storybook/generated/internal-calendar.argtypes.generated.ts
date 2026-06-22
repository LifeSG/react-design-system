// This file is generated. Do not edit manually.
// Run: npm run storybook:argtypes

export const internalCalendarExtraArgTypes = {
    "CommonCalendarProps.minDate": {
        name: "minDate",
        description:
            "The minimum date that can be selected (inclusive) in 'YYYY-MM-DD' format.",
        control: false,
        table: {
            category: "CommonCalendarProps",
            type: {
                summary: "string",
            },
        },
    },
    "CommonCalendarProps.maxDate": {
        name: "maxDate",
        description:
            "The maximum date that can be selected (inclusive) in 'YYYY-MM-DD' format.",
        control: false,
        table: {
            category: "CommonCalendarProps",
            type: {
                summary: "string",
            },
        },
    },
    "CommonCalendarProps.disabledDates": {
        name: "disabledDates",
        description:
            'Dates to disable in `YYYY-MM-DD` format. Example: `["2023-04-30"]`',
        control: false,
        table: {
            category: "CommonCalendarProps",
            type: {
                summary: "string[]",
            },
        },
    },
    "CommonCalendarProps.allowDisabledSelection": {
        name: "allowDisabledSelection",
        description:
            "Specifies if dates normally disabled by `minDate`, `maxDate` and `disabledDates` are still selectable",
        control: false,
        table: {
            category: "CommonCalendarProps",
            type: {
                summary: "boolean",
            },
        },
    },
    "CommonCalendarProps.showActiveMonthDaysOnly": {
        name: "showActiveMonthDaysOnly",
        description:
            "Specifies if the calendar should display only dates for the selected month",
        control: false,
        table: {
            category: "CommonCalendarProps",
            type: {
                summary: "boolean",
            },
        },
    },
    "InternalCalendarProps.value": {
        name: "value",
        description: "Selected start date in `YYYY-MM-DD` format",
        control: false,
        table: {
            category: "InternalCalendarProps",
            type: {
                summary: "string",
            },
        },
    },
    "InternalCalendarProps.endValue": {
        name: "endValue",
        description: "Selected end date in `YYYY-MM-DD` format",
        control: false,
        table: {
            category: "InternalCalendarProps",
            type: {
                summary: "string",
            },
        },
    },
    "InternalCalendarProps.values": {
        name: "values",
        description:
            'Selected dates in `YYYY-MM-DD` format, used with variant="multi"',
        control: false,
        table: {
            category: "InternalCalendarProps",
            type: {
                summary: "string[]",
            },
        },
    },
    "InternalCalendarProps.minSelectable": {
        name: "minSelectable",
        description:
            'Minimum number of dates that must be selected before the selection is valid, used with variant="multi"',
        control: false,
        table: {
            category: "InternalCalendarProps",
            type: {
                summary: "number",
            },
        },
    },
    "InternalCalendarProps.maxSelectable": {
        name: "maxSelectable",
        description:
            'Maximum number of dates that can be selected at once, used with variant="multi"',
        control: false,
        table: {
            category: "InternalCalendarProps",
            type: {
                summary: "number",
            },
        },
    },
    "InternalCalendarProps.withButton": {
        name: "withButton",
        description: "Specifies if done/cancel buttons are visible",
        control: false,
        table: {
            category: "InternalCalendarProps",
            type: {
                summary: "boolean",
            },
        },
    },
    "InternalCalendarProps.currentFocus": {
        name: "currentFocus",
        description: "Indicate current focus in the date-input component.",
        control: false,
        table: {
            category: "InternalCalendarProps",
            type: {
                summary: "FocusType",
            },
        },
    },
    "InternalCalendarProps.variant": {
        name: "variant",
        description: "Indicate calendar variant from the date input component.",
        control: false,
        table: {
            category: "InternalCalendarProps",
            type: {
                summary: "Variant",
            },
        },
    },
    "InternalCalendarProps.selectWithinRange": {
        name: "selectWithinRange",
        description: "Selection to respect start or end range.",
        control: false,
        table: {
            category: "InternalCalendarProps",
            type: {
                summary: "boolean",
            },
        },
    },
    "InternalCalendarProps.initialCalendarDate": {
        name: "initialCalendarDate",
        description: "The initially visible calendar month",
        control: false,
        table: {
            category: "InternalCalendarProps",
            type: {
                summary: "string",
            },
        },
    },
    "InternalCalendarProps.onDismiss": {
        name: "onDismiss",
        description: "Function to handle cancel/done .",
        control: false,
        table: {
            category: "InternalCalendarProps",
            type: {
                summary: "((action: CalendarAction) => void)",
            },
        },
    },
    "InternalCalendarProps.onYearMonthDisplayChange": {
        name: "onYearMonthDisplayChange",
        description:
            "Called when there is a change in the current visible month and year",
        control: false,
        table: {
            category: "InternalCalendarProps",
            type: {
                summary: "((value: YearMonthDisplay) => void)",
            },
        },
    },
    "InternalCalendarProps.onSelect": {
        name: "onSelect",
        description:
            "Called when date is selected, returns value in `YYYY-MM-DD` format",
        control: false,
        table: {
            category: "InternalCalendarProps",
            type: {
                summary: "((value: string) => void)",
            },
        },
    },
    "InternalCalendarProps.onChange": {
        name: "onChange",
        description:
            "Called when multi-select changes, returns all selected dates",
        control: false,
        table: {
            category: "InternalCalendarProps",
            type: {
                summary: "((values: string[]) => void)",
            },
        },
    },
    "InternalCalendarProps.onHover": {
        name: "onHover",
        description:
            "Called when day cell is hovered, returns value in `YYYY-MM-DD`",
        control: false,
        table: {
            category: "InternalCalendarProps",
            type: {
                summary: "((value: string) => void)",
            },
        },
    },
    "InternalCalendarProps.numberOfDays": {
        name: "numberOfDays",
        description: "Indicate the number of days used in fixed-range variant",
        control: false,
        table: {
            category: "InternalCalendarProps",
            type: {
                summary: "number",
            },
        },
    },
    "InternalCalendarProps.isFocusable": {
        name: "isFocusable",
        description: "Indicates whether calendar is focusable",
        control: false,
        table: {
            category: "InternalCalendarProps",
            type: {
                summary: "boolean",
            },
        },
    },
    "CalendarDropdownProps.width": {
        name: "width",
        control: false,
        table: {
            category: "CalendarDropdownProps",
            type: {
                summary: "number",
            },
        },
    },
    "YearMonthDisplay.year": {
        name: "year",
        control: false,
        table: {
            category: "YearMonthDisplay",
            type: {
                summary: "number",
            },
        },
    },
    "YearMonthDisplay.month": {
        name: "month",
        control: false,
        table: {
            category: "YearMonthDisplay",
            type: {
                summary: "number",
            },
        },
    },
    "InternalCalendarRef.reset": {
        name: "reset",
        control: false,
        table: {
            category: "InternalCalendarRef",
            type: {
                summary: "() => void",
            },
        },
    },
    "InternalCalendarRef.setCalendarDate": {
        name: "setCalendarDate",
        control: false,
        table: {
            category: "InternalCalendarRef",
            type: {
                summary: "(value?: string) => void",
            },
        },
    },
    "InternalCalendarRef.contains": {
        name: "contains",
        control: false,
        table: {
            category: "InternalCalendarRef",
            type: {
                summary: "(node: Node) => boolean",
            },
        },
    },
    "CalendarManagerProps.children": {
        name: "children",
        control: false,
        table: {
            category: "CalendarManagerProps",
            type: {
                summary:
                    "React.ReactNode | ((props: DefaultViewProps) => React.ReactNode)",
            },
        },
    },
    "CalendarManagerProps.initialCalendarDate": {
        name: "initialCalendarDate",
        control: false,
        table: {
            category: "CalendarManagerProps",
            type: {
                summary: "string",
            },
        },
    },
    "CalendarManagerProps.currentFocus": {
        name: "currentFocus",
        control: false,
        table: {
            category: "CalendarManagerProps",
            type: {
                summary: "FocusType",
            },
        },
    },
    "CalendarManagerProps.selectedStartDate": {
        name: "selectedStartDate",
        control: false,
        table: {
            category: "CalendarManagerProps",
            type: {
                summary: "string",
            },
        },
    },
    "CalendarManagerProps.selectedEndDate": {
        name: "selectedEndDate",
        control: false,
        table: {
            category: "CalendarManagerProps",
            type: {
                summary: "string",
            },
        },
    },
    "CalendarManagerProps.selectWithinRange": {
        name: "selectWithinRange",
        control: false,
        table: {
            category: "CalendarManagerProps",
            type: {
                summary: "boolean",
            },
        },
    },
    "CalendarManagerProps.onCalendarDateChange": {
        name: "onCalendarDateChange",
        control: false,
        table: {
            category: "CalendarManagerProps",
            type: {
                summary: "((calendarDate: Dayjs) => void)",
            },
        },
    },
    "CalendarManagerProps.dynamicHeight": {
        name: "dynamicHeight",
        control: false,
        table: {
            category: "CalendarManagerProps",
            type: {
                summary: "boolean",
            },
        },
    },
    "CalendarManagerProps.withButton": {
        name: "withButton",
        control: false,
        table: {
            category: "CalendarManagerProps",
            type: {
                summary: "boolean",
            },
        },
    },
    "CalendarManagerProps.doneButtonDisabled": {
        name: "doneButtonDisabled",
        control: false,
        table: {
            category: "CalendarManagerProps",
            type: {
                summary: "boolean",
            },
        },
    },
    "CalendarManagerProps.onDismiss": {
        name: "onDismiss",
        control: false,
        table: {
            category: "CalendarManagerProps",
            type: {
                summary: "((action: CalendarAction) => void)",
            },
        },
    },
    "CalendarManagerProps.showNavigationHeader": {
        name: "showNavigationHeader",
        control: false,
        table: {
            category: "CalendarManagerProps",
            type: {
                summary: "boolean",
            },
        },
    },
    "CalendarManagerProps.getLeftArrowDate": {
        name: "getLeftArrowDate",
        control: false,
        table: {
            category: "CalendarManagerProps",
            type: {
                summary: "((current: Dayjs) => Dayjs)",
            },
        },
    },
    "CalendarManagerProps.getRightArrowDate": {
        name: "getRightArrowDate",
        control: false,
        table: {
            category: "CalendarManagerProps",
            type: {
                summary: "((current: Dayjs) => Dayjs)",
            },
        },
    },
    "CalendarManagerProps.isLeftArrowDisabled": {
        name: "isLeftArrowDisabled",
        control: false,
        table: {
            category: "CalendarManagerProps",
            type: {
                summary: "((calendarDate: Dayjs) => boolean)",
            },
        },
    },
    "CalendarManagerProps.isRightArrowDisabled": {
        name: "isRightArrowDisabled",
        control: false,
        table: {
            category: "CalendarManagerProps",
            type: {
                summary: "((calendarDate: Dayjs) => boolean)",
            },
        },
    },
    "CalendarManagerProps.getMonthHeaderLabel": {
        name: "getMonthHeaderLabel",
        control: false,
        table: {
            category: "CalendarManagerProps",
            type: {
                summary: "((calendarDate: Dayjs) => string)",
            },
        },
    },
    "CalendarManagerProps.getYearHeaderLabel": {
        name: "getYearHeaderLabel",
        control: false,
        table: {
            category: "CalendarManagerProps",
            type: {
                summary: "((calendarDate: Dayjs) => string)",
            },
        },
    },
    "CalendarManagerProps.isFocusable": {
        name: "isFocusable",
        control: false,
        table: {
            category: "CalendarManagerProps",
            type: {
                summary: "boolean",
            },
        },
    },
    "DefaultViewProps.calendarDate": {
        name: "calendarDate",
        control: false,
        table: {
            category: "DefaultViewProps",
            type: {
                summary: "Dayjs",
            },
        },
    },
    "DefaultViewProps.currentView": {
        name: "currentView",
        control: false,
        table: {
            category: "DefaultViewProps",
            type: {
                summary: "View",
            },
        },
    },
    "CalendarManagerRef.defaultView": {
        name: "defaultView",
        control: false,
        table: {
            category: "CalendarManagerRef",
            type: {
                summary: "() => void",
            },
        },
    },
    "CalendarManagerRef.resetView": {
        name: "resetView",
        control: false,
        table: {
            category: "CalendarManagerRef",
            type: {
                summary: "() => void",
            },
        },
    },
    "CalendarManagerRef.setCalendarDate": {
        name: "setCalendarDate",
        control: false,
        table: {
            category: "CalendarManagerRef",
            type: {
                summary: "(date: string) => void",
            },
        },
    },
    CalendarAction: {
        name: "CalendarAction",
        control: false,
        table: {
            category: "CalendarAction",
            type: {
                summary: '"reset" | "confirmed"',
            },
        },
    },
    Variant: {
        name: "Variant",
        control: false,
        table: {
            category: "Variant",
            type: {
                summary:
                    '"single" | "range" | "week" | "fixed-range" | "multi"',
            },
        },
    },
    FocusType: {
        name: "FocusType",
        control: false,
        table: {
            category: "FocusType",
            type: {
                summary: '"start" | "end" | "none"',
            },
        },
    },
    View: {
        name: "View",
        control: false,
        table: {
            category: "View",
            type: {
                summary: '"default" | "month-options" | "year-options"',
            },
        },
    },
} satisfies Record<string, unknown>;
