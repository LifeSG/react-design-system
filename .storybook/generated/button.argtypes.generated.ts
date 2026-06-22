// This file is generated. Do not edit manually.
// Run: npm run storybook:argtypes

export const buttonExtraArgTypes = {
    "ButtonProps.data-testid": {
        name: "data-testid",
        control: false,
        table: {
            category: "ButtonProps",
            type: {
                summary: "string",
            },
        },
    },
    "ButtonProps.styleType": {
        name: "styleType",
        description:
            'The style type of the button. Values: "default" | "secondary" | "light" | "link"',
        control: false,
        table: {
            category: "ButtonProps",
            type: {
                summary: "ButtonStyleType",
            },
        },
    },
    "ButtonProps.sizeType": {
        name: "sizeType",
        description:
            'The size of the button. Values: "large" | "default" | "small"',
        control: false,
        table: {
            category: "ButtonProps",
            type: {
                summary: "ButtonSizeType",
            },
        },
    },
    "ButtonProps.danger": {
        name: "danger",
        description:
            "If specified, the component will have a red color scheme being applied",
        control: false,
        table: {
            category: "ButtonProps",
            type: {
                summary: "boolean",
            },
            defaultValue: {
                summary: "false",
            },
        },
    },
    "ButtonProps.loading": {
        name: "loading",
        description: "Indicates if a loading spinner is to be displayed",
        control: false,
        table: {
            category: "ButtonProps",
            type: {
                summary: "boolean",
            },
        },
    },
    "ButtonProps.focusableWhenDisabled": {
        name: "focusableWhenDisabled",
        description:
            "If true, the button remains focusable when disabled. Defaults to false.",
        control: false,
        table: {
            category: "ButtonProps",
            type: {
                summary: "boolean",
            },
        },
    },
    "ButtonProps.icon": {
        name: "icon",
        description:
            "The icon to be rendered in the button. When provided without children, the\nbutton renders in icon-only mode (square). Requires aria-label on the button\nfor accessibility in icon-only mode.",
        control: false,
        table: {
            category: "ButtonProps",
            type: {
                summary: "JSX.Element",
            },
        },
    },
    "ButtonProps.iconPosition": {
        name: "iconPosition",
        description:
            "Specifies where the icon will be positioned relative to the label.",
        control: false,
        table: {
            category: "ButtonProps",
            type: {
                summary: "ButtonIconPosition",
            },
        },
    },
    ButtonStyleType: {
        name: "ButtonStyleType",
        control: false,
        table: {
            category: "ButtonStyleType",
            type: {
                summary: '"default" | "secondary" | "light" | "link"',
            },
        },
    },
    ButtonSizeType: {
        name: "ButtonSizeType",
        control: false,
        table: {
            category: "ButtonSizeType",
            type: {
                summary: '"large" | "default" | "small"',
            },
        },
    },
    ButtonIconPosition: {
        name: "ButtonIconPosition",
        control: false,
        table: {
            category: "ButtonIconPosition",
            type: {
                summary: '"left" | "right"',
            },
        },
    },
    ButtonRef: {
        name: "ButtonRef",
        control: false,
        table: {
            category: "ButtonRef",
            type: {
                summary: "React.Ref<HTMLButtonElement>",
            },
        },
    },
} satisfies Record<string, unknown>;
