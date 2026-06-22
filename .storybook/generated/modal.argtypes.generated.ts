// This file is generated. Do not edit manually.
// Run: npm run storybook:argtypes

export const modalExtraArgTypes = {
    "ModalProps.show": {
        name: "show",
        control: false,
        table: {
            category: "ModalProps",
            type: {
                summary: "boolean",
            },
        },
    },
    "ModalProps.children": {
        name: "children",
        description:
            "The content of the modal. The parent element must be a valid HTML\nelement or a component that forwards a ref to a valid HTML element. This\nelement is used to determine the boundaries for overlay click\ndetection. Fragments are not supported.",
        control: false,
        table: {
            category: "ModalProps",
            type: {
                summary: "React.JSX.Element",
            },
        },
    },
    "ModalProps.animationFrom": {
        name: "animationFrom",
        description:
            'Animation direction of appearance and dismissal. Values: "top" | "bottom" | "left" | "right"',
        control: false,
        table: {
            category: "ModalProps",
            type: {
                summary: "ModalAnimationDirection",
            },
        },
    },
    "ModalProps.enableOverlayClick": {
        name: "enableOverlayClick",
        control: false,
        table: {
            category: "ModalProps",
            type: {
                summary: "boolean",
            },
        },
    },
    "ModalProps.rootComponentId": {
        name: "rootComponentId",
        description: "The identifier of the element to inject the Modal into",
        control: false,
        table: {
            category: "ModalProps",
            type: {
                summary: "string",
            },
        },
    },
    "ModalProps.zIndex": {
        name: "zIndex",
        control: false,
        table: {
            category: "ModalProps",
            type: {
                summary: "number",
            },
        },
    },
    "ModalProps.onOverlayClick": {
        name: "onOverlayClick",
        control: false,
        table: {
            category: "ModalProps",
            type: {
                summary: "(() => void)",
            },
        },
    },
    "ModalProps.dismissKeyboardOnShow": {
        name: "dismissKeyboardOnShow",
        description: "Dismiss keyboard to keep modal in fullscreen",
        control: false,
        table: {
            category: "ModalProps",
            type: {
                summary: "boolean",
            },
        },
    },
    "ModalBoxProps.children": {
        name: "children",
        control: false,
        table: {
            category: "ModalBoxProps",
            type: {
                summary: "React.ReactNode",
            },
        },
    },
    "ModalBoxProps.showCloseButton": {
        name: "showCloseButton",
        control: false,
        table: {
            category: "ModalBoxProps",
            type: {
                summary: "boolean",
            },
        },
    },
    "ModalBoxProps.onClose": {
        name: "onClose",
        control: false,
        table: {
            category: "ModalBoxProps",
            type: {
                summary: "(() => void)",
            },
        },
    },
} satisfies Record<string, unknown>;
