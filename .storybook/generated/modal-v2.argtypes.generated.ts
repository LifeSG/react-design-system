// This file is generated. Do not edit manually.
// Run: npm run storybook:argtypes

export const modalV2ExtraArgTypes = {
    "ModalCardProps.data-testid": {
        name: "data-testid",
        control: false,
        table: {
            category: "ModalCardProps",
            type: {
                summary: "string",
            },
        },
    },
    "ModalCardProps.children": {
        name: "children",
        control: false,
        table: {
            category: "ModalCardProps",
            type: {
                summary: "React.ReactNode",
            },
        },
    },
    "ModalCloseButtonProps.data-testid": {
        name: "data-testid",
        control: false,
        table: {
            category: "ModalCloseButtonProps",
            type: {
                summary: "string",
            },
        },
    },
    "ModalContentProps.data-testid": {
        name: "data-testid",
        control: false,
        table: {
            category: "ModalContentProps",
            type: {
                summary: "string",
            },
        },
    },
    "ModalContentProps.children": {
        name: "children",
        control: false,
        table: {
            category: "ModalContentProps",
            type: {
                summary: "React.ReactNode",
            },
        },
    },
    "ModalFooterProps.data-testid": {
        name: "data-testid",
        control: false,
        table: {
            category: "ModalFooterProps",
            type: {
                summary: "string",
            },
        },
    },
    "ModalFooterProps.primaryButton": {
        name: "primaryButton",
        control: false,
        table: {
            category: "ModalFooterProps",
            type: {
                summary: "React.ReactNode",
            },
        },
    },
    "ModalFooterProps.secondaryButton": {
        name: "secondaryButton",
        control: false,
        table: {
            category: "ModalFooterProps",
            type: {
                summary: "React.ReactNode",
            },
        },
    },
    "ModalV2Props.data-testid": {
        name: "data-testid",
        control: false,
        table: {
            category: "ModalV2Props",
            type: {
                summary: "string",
            },
        },
    },
    "ModalV2Props.show": {
        name: "show",
        control: false,
        table: {
            category: "ModalV2Props",
            type: {
                summary: "boolean",
            },
        },
    },
    "ModalV2Props.children": {
        name: "children",
        description:
            "The content of the modal. The parent element must be a valid HTML\nelement or a component that forwards a ref to a valid HTML element. This\nelement is used to determine the boundaries for overlay click\ndetection. Fragments are not supported.",
        control: false,
        table: {
            category: "ModalV2Props",
            type: {
                summary: "React.JSX.Element",
            },
        },
    },
    "ModalV2Props.animationFrom": {
        name: "animationFrom",
        description:
            'Animation direction of appearance and dismissal. Values: "top" | "bottom" | "left" | "right"',
        control: false,
        table: {
            category: "ModalV2Props",
            type: {
                summary: "ModalAnimationDirection",
            },
        },
    },
    "ModalV2Props.enableOverlayClick": {
        name: "enableOverlayClick",
        control: false,
        table: {
            category: "ModalV2Props",
            type: {
                summary: "boolean",
            },
        },
    },
    "ModalV2Props.rootComponentId": {
        name: "rootComponentId",
        description: "The identifier of the element to inject the Modal into",
        control: false,
        table: {
            category: "ModalV2Props",
            type: {
                summary: "string",
            },
        },
    },
    "ModalV2Props.zIndex": {
        name: "zIndex",
        control: false,
        table: {
            category: "ModalV2Props",
            type: {
                summary: "number",
            },
        },
    },
    "ModalV2Props.onClose": {
        name: "onClose",
        control: false,
        table: {
            category: "ModalV2Props",
            type: {
                summary: "(() => void)",
            },
        },
    },
    "ModalV2Props.onOverlayClick": {
        name: "onOverlayClick",
        control: false,
        table: {
            category: "ModalV2Props",
            type: {
                summary: "(() => void)",
            },
        },
    },
    "ModalV2Props.dismissKeyboardOnShow": {
        name: "dismissKeyboardOnShow",
        description: "Dismiss keyboard to keep modal in fullscreen",
        control: false,
        table: {
            category: "ModalV2Props",
            type: {
                summary: "boolean",
            },
        },
    },
    "ModalV2Props.disableInitialFocus": {
        name: "disableInitialFocus",
        description:
            "Disable automatic initial focus on show. Consumer must focus an element within the modal.",
        control: false,
        table: {
            category: "ModalV2Props",
            type: {
                summary: "boolean",
            },
        },
    },
    ModalAnimationDirection: {
        name: "ModalAnimationDirection",
        control: false,
        table: {
            category: "ModalAnimationDirection",
            type: {
                summary: '"top" | "bottom" | "left" | "right"',
            },
        },
    },
} satisfies Record<string, unknown>;
