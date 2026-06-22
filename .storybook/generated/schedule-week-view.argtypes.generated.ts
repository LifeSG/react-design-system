// This file is generated. Do not edit manually.
// Run: npm run storybook:argtypes

export const scheduleWeekViewExtraArgTypes = {
    "ScheduleWeekViewProps.serviceData": {
        name: "serviceData",
        control: false,
        table: {
            category: "ScheduleWeekViewProps",
            type: {
                summary: "ScheduleEntityProps[]",
            },
        },
    },
    "ScheduleWeekViewProps.onSlotClick": {
        name: "onSlotClick",
        control: false,
        table: {
            category: "ScheduleWeekViewProps",
            type: {
                summary:
                    "( data: ScheduleSlotProps, e: React.MouseEvent ) => void",
            },
        },
    },
    "ScheduleWeekViewProps.onClickHiddenSlots": {
        name: "onClickHiddenSlots",
        control: false,
        table: {
            category: "ScheduleWeekViewProps",
            type: {
                summary: "(hiddenServices: string[]) => void",
            },
        },
    },
    "SlotWithService.serviceName": {
        name: "serviceName",
        control: false,
        table: {
            category: "SlotWithService",
            type: {
                summary: "string",
            },
        },
    },
    "SlotLayoutInfo.date": {
        name: "date",
        control: false,
        table: {
            category: "SlotLayoutInfo",
            type: {
                summary: "string",
            },
        },
    },
    "SlotLayoutInfo.serviceName": {
        name: "serviceName",
        control: false,
        table: {
            category: "SlotLayoutInfo",
            type: {
                summary: "string",
            },
        },
    },
    "SlotLayoutInfo.startTime": {
        name: "startTime",
        control: false,
        table: {
            category: "SlotLayoutInfo",
            type: {
                summary: "string",
            },
        },
    },
    "SlotLayoutInfo.endTime": {
        name: "endTime",
        control: false,
        table: {
            category: "SlotLayoutInfo",
            type: {
                summary: "string",
            },
        },
    },
    "SlotLayoutInfo.visible": {
        name: "visible",
        control: false,
        table: {
            category: "SlotLayoutInfo",
            type: {
                summary: "boolean",
            },
        },
    },
    "SlotLayoutInfo.width": {
        name: "width",
        control: false,
        table: {
            category: "SlotLayoutInfo",
            type: {
                summary: "number",
            },
        },
    },
    SlotLayoutMap: {
        name: "SlotLayoutMap",
        control: false,
        table: {
            category: "SlotLayoutMap",
            type: {
                summary: "Record<string, SlotLayoutInfo>",
            },
        },
    },
} satisfies Record<string, unknown>;
