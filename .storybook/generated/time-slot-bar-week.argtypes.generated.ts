// This file is generated. Do not edit manually.
// Run: npm run storybook:argtypes

export const timeSlotBarWeekExtraArgTypes = {
    "TimeSlotBarWeekProps.className": {
        name: "className",
        control: false,
        table: {
            category: "TimeSlotBarWeekProps",
            type: {
                summary: "string",
            },
        },
    },
    "TimeSlotBarWeekProps.data-testid": {
        name: "data-testid",
        control: false,
        table: {
            category: "TimeSlotBarWeekProps",
            type: {
                summary: "string",
            },
        },
    },
    "TimeSlotBarWeekProps.id": {
        name: "id",
        control: false,
        table: {
            category: "TimeSlotBarWeekProps",
            type: {
                summary: "string",
            },
        },
    },
    "TimeSlotBarWeekProps.slots": {
        name: "slots",
        description: "Time slots to render",
        control: false,
        table: {
            category: "TimeSlotBarWeekProps",
            type: {
                summary: "{ [date: string]: TimeSlot[] }",
            },
        },
    },
    "TimeSlotBarWeekProps.startTime": {
        name: "startTime",
        description: "The start time of the time slot cells in HH:mm format",
        control: false,
        table: {
            category: "TimeSlotBarWeekProps",
            type: {
                summary: "string",
            },
        },
    },
    "TimeSlotBarWeekProps.endTime": {
        name: "endTime",
        description: "The end time of the time slot cells in HH:mm format",
        control: false,
        table: {
            category: "TimeSlotBarWeekProps",
            type: {
                summary: "string",
            },
        },
    },
    "TimeSlotBarWeekProps.value": {
        name: "value",
        description: "The value of the selected date in YYYY-MM-DD format",
        control: false,
        table: {
            category: "TimeSlotBarWeekProps",
            type: {
                summary: "string",
            },
        },
    },
    "TimeSlotBarWeekProps.interval": {
        name: "interval",
        description: "Number of minutes each cell should represent",
        control: false,
        table: {
            category: "TimeSlotBarWeekProps",
            type: {
                summary: "number",
            },
        },
    },
    "TimeSlotBarWeekProps.variant": {
        name: "variant",
        description: "Variant for the timeslot cells that will be rendered",
        control: false,
        table: {
            category: "TimeSlotBarWeekProps",
            type: {
                summary: "TimeSlotCellsVariant",
            },
        },
    },
    "TimeSlotBarWeekProps.maxVisibleCellHeight": {
        name: "maxVisibleCellHeight",
        description:
            "Maximum height (px) of the entire timeslot component before it becomes truncated",
        control: false,
        table: {
            category: "TimeSlotBarWeekProps",
            type: {
                summary: "number",
            },
        },
    },
    "TimeSlotBarWeekProps.showNavigationHeader": {
        name: "showNavigationHeader",
        description:
            "Specifies if the month/year dropdown and navigation arrows should be displayed.",
        control: false,
        table: {
            category: "TimeSlotBarWeekProps",
            type: {
                summary: "boolean",
            },
        },
    },
    "TimeSlotBarWeekProps.enableSelection": {
        name: "enableSelection",
        description: "Specifies if date can be selected",
        control: false,
        table: {
            category: "TimeSlotBarWeekProps",
            type: {
                summary: "boolean",
            },
        },
    },
    "TimeSlotBarWeekProps.currentCalendarDate": {
        name: "currentCalendarDate",
        description:
            "The initial date to be visible in the week view in YYYY-DD-MM format",
        control: false,
        table: {
            category: "TimeSlotBarWeekProps",
            type: {
                summary: "string",
            },
        },
    },
    "TimeSlotBarWeekProps.onSlotClick": {
        name: "onSlotClick",
        description: "Called when user clicks on a time slot",
        control: false,
        table: {
            category: "TimeSlotBarWeekProps",
            type: {
                summary: "((date: string, timeSlot: TimeSlot) => void)",
            },
        },
    },
    "TimeSlotBarWeekProps.onChange": {
        name: "onChange",
        description: "Called when user clicks on a date",
        control: false,
        table: {
            category: "TimeSlotBarWeekProps",
            type: {
                summary: "((value: string) => void)",
            },
        },
    },
    "TimeSlotBarWeekProps.onWeekDisplayChange": {
        name: "onWeekDisplayChange",
        description: "Called when the current visible week changes",
        control: false,
        table: {
            category: "TimeSlotBarWeekProps",
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
    TimeSlotCellsVariant: {
        name: "TimeSlotCellsVariant",
        control: false,
        table: {
            category: "TimeSlotCellsVariant",
            type: {
                summary: '"flexible" | "fixed"',
            },
        },
    },
} satisfies Record<string, unknown>;
