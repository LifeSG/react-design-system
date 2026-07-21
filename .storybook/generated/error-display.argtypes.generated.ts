// This file is generated. Do not edit manually.
// Run: npm run storybook:argtypes

export const errorDisplayExtraArgTypes = {
    "ErrorDisplayProps.actionButton": {
        control: false,
        description:
            'Action button rendered below the description.\nDefaults to a "Proceed" label when `children` is omitted.',
        name: "actionButton",
        type: {
            required: false,
        },
        table: {
            category: "ErrorDisplayProps",
            type: {
                summary: "ButtonProps",
            },
        },
    },
    "ErrorDisplayProps.additionalProps": {
        control: false,
        description:
            'Type-specific attributes that inject dynamic content into the default description.\n\nRemarks:\nPass `MaintenanceAdditionalAttributes` when `type` is `"maintenance"` and\n`InactivityAdditionalAttributes` when `type` is `"inactivity"`. Ignored for all other types.',
        name: "additionalProps",
        type: {
            required: false,
        },
        table: {
            category: "ErrorDisplayProps",
            type: {
                summaryParts: [
                    "InactivityAdditionalAttributes",
                    "MaintenanceAdditionalAttributes",
                ],
            },
        },
    },
    "ErrorDisplayProps.data-testid": {
        control: false,
        name: "data-testid",
        type: {
            required: false,
        },
        table: {
            category: "ErrorDisplayProps",
            type: {
                summary: "string",
            },
        },
    },
    "ErrorDisplayProps.description": {
        control: false,
        description:
            'Overrides the default description for the selected `type`.\nWhen `additionalProps` is also provided for `"maintenance"` or\n`"inactivity"` types, `additionalProps` takes precedence.',
        name: "description",
        type: {
            required: false,
        },
        table: {
            category: "ErrorDisplayProps",
            type: {
                summaryParts: ["JSX.Element", "string"],
            },
        },
    },
    "ErrorDisplayProps.illustrationScheme": {
        control: false,
        description:
            "Selects the illustration resource scheme to use.\n\nRemarks:\nFalls back to the active theme scheme from `ThemeProvider` when omitted.",
        name: "illustrationScheme",
        type: {
            required: false,
        },
        table: {
            category: "ErrorDisplayProps",
            type: {
                summary:
                    "'a11y-playground' | 'bookingsg' | 'careercompass' | 'ccube' | 'imda' | 'lifesg' | 'mylegacy' | 'oneservice' | 'pa' | 'rbs' | 'sgw-digital-lobby' | 'smgs' | 'spf' | 'supportgowhere'",
            },
        },
    },
    "ErrorDisplayProps.imageOnly": {
        control: false,
        description:
            "Renders only the illustration, hiding the title, description, and action button.",
        name: "imageOnly",
        type: {
            required: false,
        },
        table: {
            category: "ErrorDisplayProps",
            defaultValue: {
                summary: "false",
            },
            type: {
                summary: "boolean",
            },
        },
    },
    "ErrorDisplayProps.img": {
        control: false,
        description:
            "Overrides the default illustration for the selected `type`.",
        name: "img",
        type: {
            required: false,
        },
        table: {
            category: "ErrorDisplayProps",
            type: {
                summary: "React.ImgHTMLAttributes<HTMLImageElement>",
            },
        },
    },
    "ErrorDisplayProps.title": {
        control: false,
        description: "Overrides the default title for the selected `type`.",
        name: "title",
        type: {
            required: false,
        },
        table: {
            category: "ErrorDisplayProps",
            type: {
                summaryParts: ["JSX.Element", "string"],
            },
        },
    },
    "ErrorDisplayProps.type": {
        control: false,
        description:
            "Determines the default illustration assets and copy to display.",
        name: "type",
        type: {
            required: true,
        },
        table: {
            category: "ErrorDisplayProps",
            type: {
                summary:
                    "'400' | '403' | '404' | '408' | '500' | '502' | '503' | '504' | 'confirmation' | 'inactivity' | 'insufficient-credits' | 'link-error' | 'logout' | 'maintenance' | 'no-item-found' | 'partially-supported-browser' | 'payment-unsuccessful' | 'transfer-unsuccessful' | 'unsupported-browser' | 'warning'",
            },
        },
    },
    "InactivityAdditionalAttributes.reminderInterval": {
        control: false,
        description:
            "Interval (in seconds) for announcing remaining time via screen readers.",
        name: "reminderInterval",
        type: {
            required: false,
        },
        table: {
            category: "InactivityAdditionalAttributes",
            type: {
                summary: "number",
            },
        },
    },
    "InactivityAdditionalAttributes.secondsLeft": {
        control: false,
        description:
            "Remaining seconds before the session expires, used to render the countdown timer.",
        name: "secondsLeft",
        type: {
            required: true,
        },
        table: {
            category: "InactivityAdditionalAttributes",
            type: {
                summary: "number",
            },
        },
    },
    "MaintenanceAdditionalAttributes.dateString": {
        control: false,
        description:
            "Date string rendered inside the default maintenance description.",
        name: "dateString",
        type: {
            required: true,
        },
        table: {
            category: "MaintenanceAdditionalAttributes",
            type: {
                summary: "string",
            },
        },
    },
} satisfies Record<string, unknown>;
