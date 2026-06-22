// This file is generated. Do not edit manually.
// Run: npm run storybook:argtypes

export const timeSlotWeekViewExtraArgTypes = {
    "TimeSlotWeekViewProps.className": {
        name: "className",
        control: false,
        table: {
            category: "TimeSlotWeekViewProps",
            type: {
                summary: "string",
            },
        },
    },
    "TimeSlotWeekViewProps.data-testid": {
        name: "data-testid",
        control: false,
        table: {
            category: "TimeSlotWeekViewProps",
            type: {
                summary: "string",
            },
        },
    },
    "TimeSlotWeekViewProps.id": {
        name: "id",
        control: false,
        table: {
            category: "TimeSlotWeekViewProps",
            type: {
                summary: "string",
            },
        },
    },
    "TimeSlotWeekViewProps.value": {
        name: "value",
        description: "The value of the selected date in YYYY-MM-DD format",
        control: false,
        table: {
            category: "TimeSlotWeekViewProps",
            type: {
                summary: "string",
            },
        },
    },
    "TimeSlotWeekViewProps.slots": {
        name: "slots",
        description: "Time slots to render",
        control: false,
        table: {
            category: "TimeSlotWeekViewProps",
            type: {
                summary: "{ [date: string]: TimeSlot[] }",
            },
        },
    },
    "TimeSlotWeekViewProps.showNavigationHeader": {
        name: "showNavigationHeader",
        description:
            "Specifies if the month/year dropdown and navigation arrows should be displayed.",
        control: false,
        table: {
            category: "TimeSlotWeekViewProps",
            type: {
                summary: "boolean",
            },
        },
    },
    "TimeSlotWeekViewProps.enableSelection": {
        name: "enableSelection",
        description: "Specifies if date can be selected",
        control: false,
        table: {
            category: "TimeSlotWeekViewProps",
            type: {
                summary: "boolean",
            },
        },
    },
    "TimeSlotWeekViewProps.currentCalendarDate": {
        name: "currentCalendarDate",
        description:
            "The initial date to be visible in the week view in YYYY-DD-MM format",
        control: false,
        table: {
            category: "TimeSlotWeekViewProps",
            type: {
                summary: "string",
            },
        },
    },
    "TimeSlotWeekViewProps.onSlotClick": {
        name: "onSlotClick",
        description: "Called when user clicks on a time slot",
        control: false,
        table: {
            category: "TimeSlotWeekViewProps",
            type: {
                summary: "((date: string, timeSlot: TimeSlot) => void)",
            },
        },
    },
    "TimeSlotWeekViewProps.onChange": {
        name: "onChange",
        description: "Called when user clicks on a date",
        control: false,
        table: {
            category: "TimeSlotWeekViewProps",
            type: {
                summary: "((value: string) => void)",
            },
        },
    },
    "TimeSlotWeekViewProps.onWeekDisplayChange": {
        name: "onWeekDisplayChange",
        description: "Called when the current visible week changes",
        control: false,
        table: {
            category: "TimeSlotWeekViewProps",
            type: {
                summary: "((value: YearMonthWeekDisplay) => void)",
            },
        },
    },
    "YearMonthWeekDisplay.week": {
        name: "week",
        control: false,
        table: {
            category: "YearMonthWeekDisplay",
            type: {
                summary: "{ firstDayOfWeek: string; lastDayOfWeek: string }",
            },
        },
    },
    "YearMonthWeekDisplay.year": {
        name: "year",
        control: false,
        table: {
            category: "YearMonthWeekDisplay",
            type: {
                summary: "number",
            },
        },
    },
    "YearMonthWeekDisplay.month": {
        name: "month",
        control: false,
        table: {
            category: "YearMonthWeekDisplay",
            type: {
                summary: "number",
            },
        },
    },
} satisfies Record<string, unknown>;
