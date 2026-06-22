// This file is generated. Do not edit manually.
// Run: npm run storybook:argtypes

export const toastExtraArgTypes = {
    "ToastActionButtonProps.label": {
        name: "label",
        control: false,
        table: {
            category: "ToastActionButtonProps",
            type: {
                summary: "string",
            },
        },
    },
    "ToastActionButtonProps.onClick": {
        name: "onClick",
        control: false,
        table: {
            category: "ToastActionButtonProps",
            type: {
                summary: "() => void",
            },
        },
    },
    "ToastProps.type": {
        name: "type",
        description: "The type of Toast. Control the display",
        control: false,
        table: {
            category: "ToastProps",
            type: {
                summary: "ToastType",
            },
        },
    },
    "ToastProps.label": {
        name: "label",
        description:
            "The content of the Toast. If a `title` is provided, this will act as a description label",
        control: false,
        table: {
            category: "ToastProps",
            type: {
                summary: "string | React.ReactNode",
            },
        },
    },
    "ToastProps.title": {
        name: "title",
        description: "The title of the Toast",
        control: false,
        table: {
            category: "ToastProps",
            type: {
                summary: "string | React.ReactNode",
            },
        },
    },
    "ToastProps.autoDismiss": {
        name: "autoDismiss",
        description:
            "If specified, the Toast will be automatically dismissed after 4 seconds",
        control: false,
        table: {
            category: "ToastProps",
            type: {
                summary: "boolean",
            },
        },
    },
    "ToastProps.autoDismissTime": {
        name: "autoDismissTime",
        description:
            "Time until auto dismissal in milliseconds. Requires `autoDismiss` to be `true`",
        control: false,
        table: {
            category: "ToastProps",
            type: {
                summary: "number",
            },
        },
    },
    "ToastProps.onDismiss": {
        name: "onDismiss",
        description:
            "If given, the function will be called when the Toast is dismissed",
        control: false,
        table: {
            category: "ToastProps",
            type: {
                summary: "(() => void)",
            },
        },
    },
    "ToastProps.fixed": {
        name: "fixed",
        description:
            "Specifies if Toast should be fixed to top. Defaults to true",
        control: false,
        table: {
            category: "ToastProps",
            type: {
                summary: "boolean",
            },
        },
    },
    "ToastProps.actionButton": {
        name: "actionButton",
        description:
            "If given, will display an actionButton with the given title and run the given function upon clicking of the button",
        control: false,
        table: {
            category: "ToastProps",
            type: {
                summary: "ToastActionButtonProps",
            },
        },
    },
    ToastType: {
        name: "ToastType",
        control: false,
        table: {
            category: "ToastType",
            type: {
                summary: '"success" | "warning" | "error" | "info"',
            },
        },
    },
} satisfies Record<string, unknown>;
