// This file is generated. Do not edit manually.
// Run: npm run storybook:argtypes

export const dateNavigatorExtraArgTypes = {
    "DateNavigatorProps.className": {
        control: false,
        name: "className",
        type: {
            required: false,
        },
        table: {
            category: "DateNavigatorProps",
            type: {
                summary: "string",
            },
        },
    },
    "DateNavigatorProps.data-testid": {
        control: false,
        name: "data-testid",
        type: {
            required: false,
        },
        table: {
            category: "DateNavigatorProps",
            type: {
                summary: "string",
            },
        },
    },
    "DateNavigatorProps.dropdownRootNode": {
        control: false,
        description:
            "The root element that contains the dropdown element.\n\nRemarks:\nSpecify this if you need to change the parent of the\ndropdown in the HTML DOM.\nPossible use case: sharing a stacking context.\n\nNote: if a parent of the trigger has a higher `z-index` than the dropdown,\nthe dropdown may be obscured.",
        name: "dropdownRootNode",
        type: {
            required: false,
        },
        table: {
            category: "DateNavigatorProps",
            defaultValue: {
                summary: "document.body",
            },
            type: {
                summary: "RefObject<HTMLElement>",
            },
        },
    },
    "DateNavigatorProps.id": {
        control: false,
        name: "id",
        type: {
            required: false,
        },
        table: {
            category: "DateNavigatorProps",
            type: {
                summary: "string",
            },
        },
    },
    "DateNavigatorProps.loading": {
        control: false,
        description:
            "When `true`, both navigation arrows and the calendar trigger are disabled.",
        name: "loading",
        type: {
            required: false,
        },
        table: {
            category: "DateNavigatorProps",
            type: {
                summary: "boolean",
            },
        },
    },
    "DateNavigatorProps.maxDate": {
        control: false,
        description:
            "The latest selectable date in `YYYY-MM-DD` format. The right arrow is\ndisabled when `selectedDate` reaches this boundary.",
        name: "maxDate",
        type: {
            required: false,
        },
        table: {
            category: "DateNavigatorProps",
            type: {
                summary: "string",
            },
        },
    },
    "DateNavigatorProps.minDate": {
        control: false,
        description:
            "The earliest selectable date in `YYYY-MM-DD` format. The left arrow is\ndisabled when `selectedDate` reaches this boundary.",
        name: "minDate",
        type: {
            required: false,
        },
        table: {
            category: "DateNavigatorProps",
            type: {
                summary: "string",
            },
        },
    },
    "DateNavigatorProps.onCalendarDateSelect": {
        control: false,
        description:
            "Called with the chosen date string when the user selects a date from the\ncalendar dropdown. When omitted the date label is non-interactive and the\ncalendar dropdown is not shown.",
        name: "onCalendarDateSelect",
        type: {
            required: false,
        },
        table: {
            category: "DateNavigatorProps",
            type: {
                summary: "(currentDate: string) => void",
            },
        },
    },
    "DateNavigatorProps.onLeftArrowClick": {
        control: false,
        description:
            "Called with the current `selectedDate` value when the left arrow is clicked.",
        name: "onLeftArrowClick",
        type: {
            required: true,
        },
        table: {
            category: "DateNavigatorProps",
            type: {
                summary: "(currentDate: string) => void",
            },
        },
    },
    "DateNavigatorProps.onRightArrowClick": {
        control: false,
        description:
            "Called with the current `selectedDate` value when the right arrow is clicked.",
        name: "onRightArrowClick",
        type: {
            required: true,
        },
        table: {
            category: "DateNavigatorProps",
            type: {
                summary: "(currentDate: string) => void",
            },
        },
    },
    "DateNavigatorProps.selectedDate": {
        control: false,
        description: "The currently displayed date in `YYYY-MM-DD` format.",
        name: "selectedDate",
        type: {
            required: true,
        },
        table: {
            category: "DateNavigatorProps",
            type: {
                summary: "string",
            },
        },
    },
    "DateNavigatorProps.showCurrentDateAsToday": {
        control: false,
        description:
            'When `true`, replaces the day-of-week label with `"Today"` if `selectedDate`\nmatches the current calendar date.',
        name: "showCurrentDateAsToday",
        type: {
            required: false,
        },
        table: {
            category: "DateNavigatorProps",
            type: {
                summary: "boolean",
            },
        },
    },
    "DateNavigatorProps.showDateAsShortForm": {
        control: false,
        description:
            'When `true`, formats the displayed date using abbreviated month and day names\n(e.g. `"3 Jul 2025, Wed"` instead of `"3 July 2025, Wednesday"`).',
        name: "showDateAsShortForm",
        type: {
            required: false,
        },
        table: {
            category: "DateNavigatorProps",
            type: {
                summary: "boolean",
            },
        },
    },
    "DateNavigatorProps.view": {
        control: false,
        description:
            'Controls whether navigation steps by a single day or by a full week. In\n`"week"` mode the label shows the Sunday–Saturday range that contains\n`selectedDate`.',
        name: "view",
        type: {
            required: false,
        },
        table: {
            category: "DateNavigatorProps",
            defaultValue: {
                summary: '"day"',
            },
            type: {
                summaryParts: ["'day'", "'week'"],
            },
        },
    },
} satisfies Record<string, unknown>;
