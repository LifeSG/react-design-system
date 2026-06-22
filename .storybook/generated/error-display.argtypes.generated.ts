// This file is generated. Do not edit manually.
// Run: npm run storybook:argtypes

export const errorDisplayExtraArgTypes = {
    "MaintenanceAdditionalAttributes.dateString": {
        name: "dateString",
        control: false,
        table: {
            category: "MaintenanceAdditionalAttributes",
            type: {
                summary: "string",
            },
        },
    },
    "InactivityAdditionalAttributes.secondsLeft": {
        name: "secondsLeft",
        control: false,
        table: {
            category: "InactivityAdditionalAttributes",
            type: {
                summary: "number",
            },
        },
    },
    "InactivityAdditionalAttributes.reminderInterval": {
        name: "reminderInterval",
        description:
            "Interval (in seconds) for announcing remaining time via screen readers",
        control: false,
        table: {
            category: "InactivityAdditionalAttributes",
            type: {
                summary: "number",
            },
        },
    },
    "ErrorDisplayAttributes.img": {
        name: "img",
        description: "The custom image attributes",
        control: false,
        table: {
            category: "ErrorDisplayAttributes",
            type: {
                summary: "React.ImgHTMLAttributes<HTMLImageElement>",
            },
        },
    },
    "ErrorDisplayAttributes.title": {
        name: "title",
        control: false,
        table: {
            category: "ErrorDisplayAttributes",
            type: {
                summary: "string | JSX.Element",
            },
        },
    },
    "ErrorDisplayAttributes.description": {
        name: "description",
        control: false,
        table: {
            category: "ErrorDisplayAttributes",
            type: {
                summary: "string | JSX.Element",
            },
        },
    },
    "ErrorDisplayAttributes.actionButton": {
        name: "actionButton",
        description:
            "The action button displayed at the bottom of the Error Display",
        control: false,
        table: {
            category: "ErrorDisplayAttributes",
            type: {
                summary: "ButtonProps",
            },
        },
    },
    "ErrorDisplayAttributes.additionalProps": {
        name: "additionalProps",
        description:
            "Additional pre-specified props to control specific content",
        control: false,
        table: {
            category: "ErrorDisplayAttributes",
            type: {
                summary:
                    "| MaintenanceAdditionalAttributes | InactivityAdditionalAttributes",
            },
        },
    },
    "ErrorDisplayAttributes.imageOnly": {
        name: "imageOnly",
        description: "Specifies if only the image is rendered",
        control: false,
        table: {
            category: "ErrorDisplayAttributes",
            type: {
                summary: "boolean",
            },
        },
    },
    "ErrorDisplayAttributes.illustrationScheme": {
        name: "illustrationScheme",
        description:
            "Use specific resource scheme instead of theme resource scheme",
        control: false,
        table: {
            category: "ErrorDisplayAttributes",
            type: {
                summary: "ThemeType",
            },
        },
    },
    "ErrorDisplayProps.type": {
        name: "type",
        control: false,
        table: {
            category: "ErrorDisplayProps",
            type: {
                summary: "ErrorDisplayType",
            },
        },
    },
    "ErrorDisplayProps.data-testid": {
        name: "data-testid",
        control: false,
        table: {
            category: "ErrorDisplayProps",
            type: {
                summary: "string",
            },
        },
    },
    ErrorDisplayType: {
        name: "ErrorDisplayType",
        control: false,
        table: {
            category: "ErrorDisplayType",
            type: {
                summary:
                    '| "400" | "403" | "404" | "408" | "500" | "502" | "503" | "504" | "confirmation" | "inactivity" | "insufficient-credits" | "link-error" | "logout" | "warning" | "maintenance" | "no-item-found" | "payment-unsuccessful" | "transfer-unsuccessful" | "unsupported-browser" | "partially-supported-browser"',
            },
        },
    },
} satisfies Record<string, unknown>;
