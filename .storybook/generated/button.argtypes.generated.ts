// This file is generated. Do not edit manually.
// Run: npm run storybook:argtypes

export const buttonExtraArgTypes = {
    "ButtonProps.__inheritedHtmlProps": {
        control: false,
        description: "Inherits props from `HTMLButtonElement`.",
        name: "",
        table: {
            category: "ButtonProps",
            type: {},
        },
    },
    "ButtonProps.danger": {
        control: false,
        description: "Applies a red color scheme for destructive actions.",
        name: "danger",
        table: {
            category: "ButtonProps",
            defaultValue: {
                summary: "false",
            },
            type: {
                summary: "boolean",
            },
        },
    },
    "ButtonProps.data-testid": {
        control: false,
        description: "Test ID for the button element.",
        name: "data-testid",
        table: {
            category: "ButtonProps",
            defaultValue: {
                summary: '"button"',
            },
            type: {
                summary: "string",
            },
        },
    },
    "ButtonProps.focusableWhenDisabled": {
        control: false,
        description:
            "Keeps the button keyboard-focusable when disabled. When true, the HTML\n`disabled` attribute is not set, but `aria-disabled` remains true and the\nclick handler is suppressed.",
        name: "focusableWhenDisabled",
        table: {
            category: "ButtonProps",
            defaultValue: {
                summary: "false",
            },
            type: {
                summary: "boolean",
            },
        },
    },
    "ButtonProps.icon": {
        control: false,
        description:
            "Icon element rendered inside the button. The icon receives `aria-hidden`\nautomatically. When provided without children, the button renders in\nicon-only mode (square layout) — provide `aria-label` on the button for\naccessibility in that case.",
        name: "icon",
        table: {
            category: "ButtonProps",
            type: {
                summary: "JSX.Element",
            },
        },
    },
    "ButtonProps.iconPosition": {
        control: false,
        description: "Position of the icon relative to the button label.",
        name: "iconPosition",
        table: {
            category: "ButtonProps",
            defaultValue: {
                summary: '"left"',
            },
            type: {
                summaryParts: ["'left'", "'right'"],
            },
        },
    },
    "ButtonProps.loading": {
        control: false,
        description:
            "Displays a loading spinner and sets `aria-busy` on the button.\nThe spinner replaces the icon (if present); children continue to render.",
        name: "loading",
        table: {
            category: "ButtonProps",
            defaultValue: {
                summary: "false",
            },
            type: {
                summary: "boolean",
            },
        },
    },
    "ButtonProps.sizeType": {
        control: false,
        description: "Controls the button's size.",
        name: "sizeType",
        table: {
            category: "ButtonProps",
            defaultValue: {
                summary: '"default"',
            },
            type: {
                summaryParts: ["'default'", "'large'", "'small'"],
            },
        },
    },
    "ButtonProps.styleType": {
        control: false,
        description: "Visual style variant of the button.",
        name: "styleType",
        table: {
            category: "ButtonProps",
            defaultValue: {
                summary: '"default"',
            },
            type: {
                summaryParts: ["'default'", "'light'", "'link'", "'secondary'"],
            },
        },
    },
} satisfies Record<string, unknown>;
