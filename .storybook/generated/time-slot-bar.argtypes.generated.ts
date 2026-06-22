// This file is generated. Do not edit manually.
// Run: npm run storybook:argtypes

export const timeSlotBarExtraArgTypes = {
    "TimeSlotBarRef.resetScroll": {
        name: "resetScroll",
        description:
            "Resets the scroll position to the initialScrollTime if provided",
        control: false,
        table: {
            category: "TimeSlotBarRef",
            type: {
                summary: "() => void",
            },
        },
    },
    "TimeSlotBarStyleAttributes.styleType": {
        name: "styleType",
        description:
            'The type of style of the time slot. Values: "default" | "stripes"',
        control: false,
        table: {
            category: "TimeSlotBarStyleAttributes",
            type: {
                summary: "SlotStyle",
            },
        },
    },
    "TimeSlotBarStyleAttributes.color": {
        name: "color",
        description: "The label color",
        control: false,
        table: {
            category: "TimeSlotBarStyleAttributes",
            type: {
                summary: "string",
            },
        },
    },
    "TimeSlotBarStyleAttributes.backgroundColor": {
        name: "backgroundColor",
        description: "The background color",
        control: false,
        table: {
            category: "TimeSlotBarStyleAttributes",
            type: {
                summary: "string",
            },
        },
    },
    "TimeSlotBarStyleAttributes.backgroundColor2": {
        name: "backgroundColor2",
        description:
            'The secondary background color. Used in conjunction if styleType is "stripes"',
        control: false,
        table: {
            category: "TimeSlotBarStyleAttributes",
            type: {
                summary: "string",
            },
        },
    },
    "TimeSlotBarStyleAttributes.hoverBackgroundColor": {
        name: "hoverBackgroundColor",
        description: "The background color on hover",
        control: false,
        table: {
            category: "TimeSlotBarStyleAttributes",
            type: {
                summary: "string",
            },
        },
    },
    "TimeSlotBarStyleAttributes.hoverBackgroundColor2": {
        name: "hoverBackgroundColor2",
        description:
            'The secondary background color on hover. Used in conjunction if styleType is "stripes"',
        control: false,
        table: {
            category: "TimeSlotBarStyleAttributes",
            type: {
                summary: "string",
            },
        },
    },
    "TimeSlotBarProps.data-testid": {
        name: "data-testid",
        control: false,
        table: {
            category: "TimeSlotBarProps",
            type: {
                summary: "string",
            },
        },
    },
    "TimeSlotBarProps.className": {
        name: "className",
        control: false,
        table: {
            category: "TimeSlotBarProps",
            type: {
                summary: "string",
            },
        },
    },
    "TimeSlotBarProps.variant": {
        name: "variant",
        description:
            'The display variant of the component. Values: "minified" | "default"',
        control: false,
        table: {
            category: "TimeSlotBarProps",
            type: {
                summary: "TimeSlotBarVariant",
            },
        },
    },
    "TimeSlotBarProps.startTime": {
        name: "startTime",
        description:
            "The start time of time slot bar. Format in HH:mm. Note: Minutes can be 00, 15, 30, 45",
        control: false,
        table: {
            category: "TimeSlotBarProps",
            type: {
                summary: "string",
            },
        },
    },
    "TimeSlotBarProps.endTime": {
        name: "endTime",
        description:
            "The end time of time slot bar. Format in HH:mm. Note: Minutes can be 00, 15, 30, 45",
        control: false,
        table: {
            category: "TimeSlotBarProps",
            type: {
                summary: "string",
            },
        },
    },
    "TimeSlotBarProps.initialScrollTime": {
        name: "initialScrollTime",
        description:
            'Initial scroll position in HH:mm format (e.g., "09:00" will scroll to 9am on mount)',
        control: false,
        table: {
            category: "TimeSlotBarProps",
            type: {
                summary: "string",
            },
        },
    },
    "TimeSlotBarProps.slots": {
        name: "slots",
        control: false,
        table: {
            category: "TimeSlotBarProps",
            type: {
                summary: "TimeSlot[]",
            },
        },
    },
    "TimeSlotBarProps.onSlotClick": {
        name: "onSlotClick",
        description: "Callback function when user clicks on the time slot",
        control: false,
        table: {
            category: "TimeSlotBarProps",
            type: {
                summary: "(timeSlot: TimeSlot) => void",
            },
        },
    },
    "TimeSlotBarProps.onClick": {
        name: "onClick",
        description:
            "The default click behaviour when no time slot is specified for the time period",
        control: false,
        table: {
            category: "TimeSlotBarProps",
            type: {
                summary: "() => void",
            },
        },
    },
    "TimeSlotBarProps.styleAttributes": {
        name: "styleAttributes",
        description:
            "The default styling attributes when no time slot is specified for the time period",
        control: false,
        table: {
            category: "TimeSlotBarProps",
            type: {
                summary: "TimeSlotBarStyleAttributes",
            },
        },
    },
    "TimeSlotBarProps.roundInitialScrollTime": {
        name: "roundInitialScrollTime",
        description:
            "Rounds initial scroll time to the nearest interval, e.g 6:30 will be clamped to 6:00 when interval = 60. Default is true",
        control: false,
        table: {
            category: "TimeSlotBarProps",
            type: {
                summary: "boolean",
            },
        },
    },
    "TimeSlot.id": {
        name: "id",
        control: false,
        table: {
            category: "TimeSlot",
            type: {
                summary: "string",
            },
        },
    },
    "TimeSlot.startTime": {
        name: "startTime",
        description:
            "The start time of time slot. Format in HH:mm. Note: Minutes can be 00, 15, 30, 45",
        control: false,
        table: {
            category: "TimeSlot",
            type: {
                summary: "string",
            },
        },
    },
    "TimeSlot.endTime": {
        name: "endTime",
        description:
            "The end time of time slot. Format in HH:mm. Note: Minutes can be 00, 15, 30, 45",
        control: false,
        table: {
            category: "TimeSlot",
            type: {
                summary: "string",
            },
        },
    },
    "TimeSlot.label": {
        name: "label",
        description: "The slot cell label",
        control: false,
        table: {
            category: "TimeSlot",
            type: {
                summary: "string",
            },
        },
    },
    "TimeSlot.clickable": {
        name: "clickable",
        description: "Specifies if the slot cell is clickable",
        control: false,
        table: {
            category: "TimeSlot",
            type: {
                summary: "boolean",
            },
        },
    },
    "TimeSlot.styleAttributes": {
        name: "styleAttributes",
        control: false,
        table: {
            category: "TimeSlot",
            type: {
                summary: "TimeSlotBarStyleAttributes",
            },
        },
    },
    TimeSlotBarVariant: {
        name: "TimeSlotBarVariant",
        control: false,
        table: {
            category: "TimeSlotBarVariant",
            type: {
                summary: '"minified" | "default"',
            },
        },
    },
    Direction: {
        name: "Direction",
        control: false,
        table: {
            category: "Direction",
            type: {
                summary: '"right" | "left"',
            },
        },
    },
} satisfies Record<string, unknown>;
