// This file is generated. Do not edit manually.
// Run: npm run storybook:argtypes

export const dateNavigatorExtraArgTypes = {
    "DateNavigatorProps.id": {
        name: "id",
        control: false,
        table: {
            category: "DateNavigatorProps",
            type: {
                summary: "string",
            },
        },
    },
    "DateNavigatorProps.className": {
        name: "className",
        control: false,
        table: {
            category: "DateNavigatorProps",
            type: {
                summary: "string",
            },
        },
    },
    "DateNavigatorProps.data-testid": {
        name: "data-testid",
        control: false,
        table: {
            category: "DateNavigatorProps",
            type: {
                summary: "string",
            },
        },
    },
    "DateNavigatorProps.selectedDate": {
        name: "selectedDate",
        description: "The current visible date in YYYY-MM-DD format",
        control: false,
        table: {
            category: "DateNavigatorProps",
            type: {
                summary: "string",
            },
        },
    },
    "DateNavigatorProps.minDate": {
        name: "minDate",
        description: "YYYY-MM-DD format",
        control: false,
        table: {
            category: "DateNavigatorProps",
            type: {
                summary: "string",
            },
        },
    },
    "DateNavigatorProps.maxDate": {
        name: "maxDate",
        description: "YYYY-MM-DD format",
        control: false,
        table: {
            category: "DateNavigatorProps",
            type: {
                summary: "string",
            },
        },
    },
    "DateNavigatorProps.loading": {
        name: "loading",
        control: false,
        table: {
            category: "DateNavigatorProps",
            type: {
                summary: "boolean",
            },
        },
    },
    "DateNavigatorProps.showDateAsShortForm": {
        name: "showDateAsShortForm",
        control: false,
        table: {
            category: "DateNavigatorProps",
            type: {
                summary: "boolean",
            },
        },
    },
    "DateNavigatorProps.showCurrentDateAsToday": {
        name: "showCurrentDateAsToday",
        control: false,
        table: {
            category: "DateNavigatorProps",
            type: {
                summary: "boolean",
            },
        },
    },
    "DateNavigatorProps.view": {
        name: "view",
        description:
            "View type for navigation - 'day' for single day, 'week' for week range",
        control: false,
        table: {
            category: "DateNavigatorProps",
            type: {
                summary: '"day" | "week"',
            },
        },
    },
    "DateNavigatorProps.onLeftArrowClick": {
        name: "onLeftArrowClick",
        control: false,
        table: {
            category: "DateNavigatorProps",
            type: {
                summary: "(currentDate: string) => void",
            },
        },
    },
    "DateNavigatorProps.onRightArrowClick": {
        name: "onRightArrowClick",
        control: false,
        table: {
            category: "DateNavigatorProps",
            type: {
                summary: "(currentDate: string) => void",
            },
        },
    },
    "DateNavigatorProps.onCalendarDateSelect": {
        name: "onCalendarDateSelect",
        control: false,
        table: {
            category: "DateNavigatorProps",
            type: {
                summary: "((currentDate: string) => void)",
            },
        },
    },
    "DateNavigatorProps.dropdownRootNode": {
        name: "dropdownRootNode",
        description:
            "The root element that contains the dropdown element. Defaults to the document body.\n\nIf the parent that contains the trigger element has a higher z-index than the dropdown,\nthe dropdown may not be visible. Specify the parent element here instead",
        control: false,
        table: {
            category: "DateNavigatorProps",
            type: {
                summary: "RefObject<HTMLElement>",
            },
        },
    },
} satisfies Record<string, unknown>;
