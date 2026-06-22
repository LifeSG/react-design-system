// This file is generated. Do not edit manually.
// Run: npm run storybook:argtypes

export const countdownTimerExtraArgTypes = {
    "Offset.top": {
        name: "top",
        control: false,
        table: {
            category: "Offset",
            type: {
                summary: "number",
            },
        },
    },
    "Offset.left": {
        name: "left",
        control: false,
        table: {
            category: "Offset",
            type: {
                summary: "number",
            },
        },
    },
    "Offset.right": {
        name: "right",
        control: false,
        table: {
            category: "Offset",
            type: {
                summary: "number",
            },
        },
    },
    "MobileOffset.top": {
        name: "top",
        control: false,
        table: {
            category: "MobileOffset",
            type: {
                summary: "number",
            },
        },
    },
    "CountdownTimerBaseProps.data-testid": {
        name: "data-testid",
        control: false,
        table: {
            category: "CountdownTimerBaseProps",
            type: {
                summary: "string",
            },
        },
    },
    "CountdownTimerBaseProps.show": {
        name: "show",
        description: "To show/play the countdown timer",
        control: false,
        table: {
            category: "CountdownTimerBaseProps",
            type: {
                summary: "boolean",
            },
        },
    },
    "CountdownTimerBaseProps.fixed": {
        name: "fixed",
        control: false,
        table: {
            category: "CountdownTimerBaseProps",
            type: {
                summary: "boolean",
            },
        },
    },
    "CountdownTimerBaseProps.notifyTimer": {
        name: "notifyTimer",
        description: "Specifies a timer (in seconds) for notifications",
        control: false,
        table: {
            category: "CountdownTimerBaseProps",
            type: {
                summary: "number",
            },
        },
    },
    "CountdownTimerBaseProps.offset": {
        name: "offset",
        description:
            "Allows customization of the sticky position in tablet/desktop view",
        control: false,
        table: {
            category: "CountdownTimerBaseProps",
            type: {
                summary: "Offset",
            },
        },
    },
    "CountdownTimerBaseProps.mobileOffset": {
        name: "mobileOffset",
        description:
            "Allows customization of the sticky position in mobile only",
        control: false,
        table: {
            category: "CountdownTimerBaseProps",
            type: {
                summary: "MobileOffset",
            },
        },
    },
    "CountdownTimerBaseProps.align": {
        name: "align",
        description:
            "Specifies if the component is aligned to its left or right in its sticky position",
        control: false,
        table: {
            category: "CountdownTimerBaseProps",
            type: {
                summary: "AlignPosition",
            },
        },
    },
    "CountdownTimerBaseProps.onTick": {
        name: "onTick",
        description:
            "Called every second with the remaining time left when the timer value falls below the `notifyTimer` threshold",
        control: false,
        table: {
            category: "CountdownTimerBaseProps",
            type: {
                summary: "((seconds: number) => void)",
            },
        },
    },
    "CountdownTimerBaseProps.onNotify": {
        name: "onNotify",
        description:
            "Called when the timer value falls below the specified `notifyTimer` threshold",
        control: false,
        table: {
            category: "CountdownTimerBaseProps",
            type: {
                summary: "(() => void)",
            },
        },
    },
    "CountdownTimerBaseProps.onFinish": {
        name: "onFinish",
        description: "Called when countdown reaches 0",
        control: false,
        table: {
            category: "CountdownTimerBaseProps",
            type: {
                summary: "(() => void)",
            },
        },
    },
    "CountdownTimerBaseProps.reminderInterval": {
        name: "reminderInterval",
        description:
            "Specifies the interval (in seconds) between polite announcements of the remaining time left",
        control: false,
        table: {
            category: "CountdownTimerBaseProps",
            type: {
                summary: "number",
            },
        },
    },
    "TimerProps.timer": {
        name: "timer",
        description: "Specifies the countdown timer (in seconds)",
        control: false,
        table: {
            category: "TimerProps",
            type: {
                summary: "number",
            },
        },
    },
    "TimerProps.timestamp": {
        name: "timestamp",
        control: false,
        table: {
            category: "TimerProps",
            type: {
                summary: "number",
            },
        },
    },
    "TimestampProps.timestamp": {
        name: "timestamp",
        description:
            "Specifies the timestamp at which the countdown ends (milliseconds since Jan 1, 1970)",
        control: false,
        table: {
            category: "TimestampProps",
            type: {
                summary: "number",
            },
        },
    },
    "TimestampProps.timer": {
        name: "timer",
        control: false,
        table: {
            category: "TimestampProps",
            type: {
                summary: "number",
            },
        },
    },
    AlignPosition: {
        name: "AlignPosition",
        control: false,
        table: {
            category: "AlignPosition",
            type: {
                summary: '"left" | "right"',
            },
        },
    },
    CountdownTimerProps: {
        name: "CountdownTimerProps",
        control: false,
        table: {
            category: "CountdownTimerProps",
            type: {
                summary: "TimerProps | TimestampProps",
            },
        },
    },
} satisfies Record<string, unknown>;
