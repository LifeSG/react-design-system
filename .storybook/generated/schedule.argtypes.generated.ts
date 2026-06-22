// This file is generated. Do not edit manually.
// Run: npm run storybook:argtypes

export const scheduleExtraArgTypes = {
    "ScheduleEntityProps.id": {
        name: "id",
        control: false,
        table: {
            category: "ScheduleEntityProps",
            type: {
                summary: "string",
            },
        },
    },
    "ScheduleEntityProps.name": {
        name: "name",
        control: false,
        table: {
            category: "ScheduleEntityProps",
            type: {
                summary: "string",
            },
        },
    },
    "ScheduleEntityProps.slots": {
        name: "slots",
        control: false,
        table: {
            category: "ScheduleEntityProps",
            type: {
                summary: "ScheduleSlotProps[]",
            },
        },
    },
    "SchedulePopoverProps.trigger": {
        name: "trigger",
        control: false,
        table: {
            category: "SchedulePopoverProps",
            type: {
                summary: "PopoverTriggerType",
            },
        },
    },
    "SchedulePopoverProps.content": {
        name: "content",
        control: false,
        table: {
            category: "SchedulePopoverProps",
            type: {
                summary: "string | JSX.Element | (() => React.ReactNode)",
            },
        },
    },
    "SchedulePopoverProps.delay": {
        name: "delay",
        control: false,
        table: {
            category: "SchedulePopoverProps",
            type: {
                summary: "{ open?: number; close?: number }",
            },
        },
    },
    "SchedulePopoverProps.offset": {
        name: "offset",
        control: false,
        table: {
            category: "SchedulePopoverProps",
            type: {
                summary: "number",
            },
        },
    },
    "ScheduleProps.id": {
        name: "id",
        control: false,
        table: {
            category: "ScheduleProps",
            type: {
                summary: "string",
            },
        },
    },
    "ScheduleProps.className": {
        name: "className",
        control: false,
        table: {
            category: "ScheduleProps",
            type: {
                summary: "string",
            },
        },
    },
    "ScheduleProps.data-testid": {
        name: "data-testid",
        control: false,
        table: {
            category: "ScheduleProps",
            type: {
                summary: "string",
            },
        },
    },
    "ScheduleProps.view": {
        name: "view",
        control: false,
        table: {
            category: "ScheduleProps",
            type: {
                summary: "ScheduleView",
            },
        },
    },
    "ScheduleProps.date": {
        name: "date",
        control: false,
        table: {
            category: "ScheduleProps",
            type: {
                summary: "string",
            },
        },
    },
    "ScheduleProps.emptyContentMessage": {
        name: "emptyContentMessage",
        control: false,
        table: {
            category: "ScheduleProps",
            type: {
                summary: "string",
            },
        },
    },
    "ScheduleProps.serviceData": {
        name: "serviceData",
        control: false,
        table: {
            category: "ScheduleProps",
            type: {
                summary: "ScheduleEntityProps[]",
            },
        },
    },
    "ScheduleProps.loading": {
        name: "loading",
        control: false,
        table: {
            category: "ScheduleProps",
            type: {
                summary: "boolean",
            },
        },
    },
    "ScheduleProps.minTime": {
        name: "minTime",
        control: false,
        table: {
            category: "ScheduleProps",
            type: {
                summary: "string",
            },
        },
    },
    "ScheduleProps.maxTime": {
        name: "maxTime",
        control: false,
        table: {
            category: "ScheduleProps",
            type: {
                summary: "string",
            },
        },
    },
    "ScheduleProps.initialScrollTime": {
        name: "initialScrollTime",
        control: false,
        table: {
            category: "ScheduleProps",
            type: {
                summary: "string",
            },
        },
    },
    "ScheduleProps.minDate": {
        name: "minDate",
        control: false,
        table: {
            category: "ScheduleProps",
            type: {
                summary: "string",
            },
        },
    },
    "ScheduleProps.maxDate": {
        name: "maxDate",
        control: false,
        table: {
            category: "ScheduleProps",
            type: {
                summary: "string",
            },
        },
    },
    "ScheduleProps.onPreviousDayClick": {
        name: "onPreviousDayClick",
        control: false,
        table: {
            category: "ScheduleProps",
            type: {
                summary: "(currentDate: string) => void",
            },
        },
    },
    "ScheduleProps.onNextDayClick": {
        name: "onNextDayClick",
        control: false,
        table: {
            category: "ScheduleProps",
            type: {
                summary: "(currentDate: string) => void",
            },
        },
    },
    "ScheduleProps.onCalendarDateSelect": {
        name: "onCalendarDateSelect",
        control: false,
        table: {
            category: "ScheduleProps",
            type: {
                summary: "(currentDate: string) => void",
            },
        },
    },
    "ScheduleProps.onTodayClick": {
        name: "onTodayClick",
        control: false,
        table: {
            category: "ScheduleProps",
            type: {
                summary: "() => void",
            },
        },
    },
    "ScheduleProps.onEmptySlotClick": {
        name: "onEmptySlotClick",
        control: false,
        table: {
            category: "ScheduleProps",
            type: {
                summary: "((slot: ScheduleEmptySlotProps) => void)",
            },
        },
    },
    "ScheduleProps.emptySlotPopover": {
        name: "emptySlotPopover",
        control: false,
        table: {
            category: "ScheduleProps",
            type: {
                summary:
                    "| ((slot: ScheduleEmptySlotProps) => SchedulePopoverProps)",
            },
        },
    },
    "ScheduleProps.blockedMessage": {
        name: "blockedMessage",
        control: false,
        table: {
            category: "ScheduleProps",
            type: {
                summary: "string",
            },
        },
    },
    "ScheduleProps.onClickHiddenSlots": {
        name: "onClickHiddenSlots",
        control: false,
        table: {
            category: "ScheduleProps",
            type: {
                summary: "((hiddenServices: string[]) => void)",
            },
        },
    },
    "CommonScheduleViewProps.date": {
        name: "date",
        control: false,
        table: {
            category: "CommonScheduleViewProps",
            type: {
                summary: "string",
            },
        },
    },
    "CommonScheduleViewProps.loading": {
        name: "loading",
        control: false,
        table: {
            category: "CommonScheduleViewProps",
            type: {
                summary: "boolean",
            },
        },
    },
    "CommonScheduleViewProps.minTime": {
        name: "minTime",
        control: false,
        table: {
            category: "CommonScheduleViewProps",
            type: {
                summary: "string",
            },
        },
    },
    "CommonScheduleViewProps.maxTime": {
        name: "maxTime",
        control: false,
        table: {
            category: "CommonScheduleViewProps",
            type: {
                summary: "string",
            },
        },
    },
    "CommonScheduleViewProps.initialScrollTime": {
        name: "initialScrollTime",
        control: false,
        table: {
            category: "CommonScheduleViewProps",
            type: {
                summary: "string",
            },
        },
    },
    "CommonScheduleViewProps.containerRef": {
        name: "containerRef",
        control: false,
        table: {
            category: "CommonScheduleViewProps",
            type: {
                summary: "RefObject<HTMLDivElement>",
            },
        },
    },
    "CommonScheduleViewProps.blockedMessage": {
        name: "blockedMessage",
        control: false,
        table: {
            category: "CommonScheduleViewProps",
            type: {
                summary: "string",
            },
        },
    },
    "ScheduleSlotProps.id": {
        name: "id",
        control: false,
        table: {
            category: "ScheduleSlotProps",
            type: {
                summary: "string",
            },
        },
    },
    "ScheduleSlotProps.startTime": {
        name: "startTime",
        control: false,
        table: {
            category: "ScheduleSlotProps",
            type: {
                summary: "string",
            },
        },
    },
    "ScheduleSlotProps.endTime": {
        name: "endTime",
        control: false,
        table: {
            category: "ScheduleSlotProps",
            type: {
                summary: "string",
            },
        },
    },
    "ScheduleSlotProps.status": {
        name: "status",
        control: false,
        table: {
            category: "ScheduleSlotProps",
            type: {
                summary: "ScheduleCellType",
            },
        },
    },
    "ScheduleSlotProps.capacity": {
        name: "capacity",
        control: false,
        table: {
            category: "ScheduleSlotProps",
            type: {
                summary: "number",
            },
        },
    },
    "ScheduleSlotProps.date": {
        name: "date",
        control: false,
        table: {
            category: "ScheduleSlotProps",
            type: {
                summary: "string",
            },
        },
    },
    "ScheduleSlotProps.booked": {
        name: "booked",
        control: false,
        table: {
            category: "ScheduleSlotProps",
            type: {
                summary: "number",
            },
        },
    },
    "ScheduleSlotProps.customPopover": {
        name: "customPopover",
        control: false,
        table: {
            category: "ScheduleSlotProps",
            type: {
                summary: "SchedulePopoverProps",
            },
        },
    },
    "ScheduleSlotProps.onClick": {
        name: "onClick",
        control: false,
        table: {
            category: "ScheduleSlotProps",
            type: {
                summary:
                    "| ((data: ScheduleSlotProps, e: React.MouseEvent) => void)",
            },
        },
    },
    "ScheduleEmptySlotProps.startTime": {
        name: "startTime",
        control: false,
        table: {
            category: "ScheduleEmptySlotProps",
            type: {
                summary: "string",
            },
        },
    },
    "ScheduleEmptySlotProps.endTime": {
        name: "endTime",
        control: false,
        table: {
            category: "ScheduleEmptySlotProps",
            type: {
                summary: "string",
            },
        },
    },
    "ScheduleEmptySlotProps.name": {
        name: "name",
        control: false,
        table: {
            category: "ScheduleEmptySlotProps",
            type: {
                summary: "string",
            },
        },
    },
    ScheduleCellType: {
        name: "ScheduleCellType",
        control: false,
        table: {
            category: "ScheduleCellType",
            type: {
                summary: '"booked" | "available" | "blocked" | "pending"',
            },
        },
    },
    ScheduleView: {
        name: "ScheduleView",
        control: false,
        table: {
            category: "ScheduleView",
            type: {
                summary: '"day" | "week"',
            },
        },
    },
} satisfies Record<string, unknown>;
