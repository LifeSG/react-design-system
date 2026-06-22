// This file is generated. Do not edit manually.
// Run: npm run storybook:argtypes

export const scheduleDayViewExtraArgTypes = {
    "ScheduleDayViewProps.serviceData": {
        name: "serviceData",
        control: false,
        table: {
            category: "ScheduleDayViewProps",
            type: {
                summary: "ScheduleEntityProps[]",
            },
        },
    },
    "ScheduleDayViewProps.isMobile": {
        name: "isMobile",
        control: false,
        table: {
            category: "ScheduleDayViewProps",
            type: {
                summary: "boolean",
            },
        },
    },
    "ScheduleDayViewProps.onNextService": {
        name: "onNextService",
        control: false,
        table: {
            category: "ScheduleDayViewProps",
            type: {
                summary: "() => void",
            },
        },
    },
    "ScheduleDayViewProps.onPrevService": {
        name: "onPrevService",
        control: false,
        table: {
            category: "ScheduleDayViewProps",
            type: {
                summary: "() => void",
            },
        },
    },
    "ScheduleDayViewProps.onEmptySlotClick": {
        name: "onEmptySlotClick",
        control: false,
        table: {
            category: "ScheduleDayViewProps",
            type: {
                summary: "(slot: ScheduleEmptySlotProps) => void",
            },
        },
    },
    "ScheduleDayViewProps.showPrevArrow": {
        name: "showPrevArrow",
        control: false,
        table: {
            category: "ScheduleDayViewProps",
            type: {
                summary: "boolean",
            },
        },
    },
    "ScheduleDayViewProps.showNextArrow": {
        name: "showNextArrow",
        control: false,
        table: {
            category: "ScheduleDayViewProps",
            type: {
                summary: "boolean",
            },
        },
    },
    "ScheduleDayViewProps.emptySlotPopover": {
        name: "emptySlotPopover",
        control: false,
        table: {
            category: "ScheduleDayViewProps",
            type: {
                summary:
                    "| ((slot: ScheduleEmptySlotProps) => SchedulePopoverProps)",
            },
        },
    },
} satisfies Record<string, unknown>;
