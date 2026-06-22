// This file is generated. Do not edit manually.
// Run: npm run storybook:argtypes

export const alertExtraArgTypes = {
    "AlertProps.type": {
        name: "type",
        control: false,
        table: {
            category: "AlertProps",
            type: {
                summary: "AlertType",
            },
        },
    },
    "AlertProps.data-testid": {
        name: "data-testid",
        control: false,
        table: {
            category: "AlertProps",
            type: {
                summary: "string",
            },
        },
    },
    "AlertProps.actionLink": {
        name: "actionLink",
        control: false,
        table: {
            category: "AlertProps",
            type: {
                summary: "React.AnchorHTMLAttributes<HTMLAnchorElement>",
            },
        },
    },
    "AlertProps.showIcon": {
        name: "showIcon",
        control: false,
        table: {
            category: "AlertProps",
            type: {
                summary: "boolean",
            },
        },
    },
    "AlertProps.actionLinkIcon": {
        name: "actionLinkIcon",
        control: false,
        table: {
            category: "AlertProps",
            type: {
                summary: "JSX.Element",
            },
        },
    },
    "AlertProps.sizeType": {
        name: "sizeType",
        control: false,
        table: {
            category: "AlertProps",
            type: {
                summary: "AlertSizeType",
            },
        },
    },
    "AlertProps.customIcon": {
        name: "customIcon",
        description:
            "Custom alert icon to be rendered, replacing the default alert icons",
        control: false,
        table: {
            category: "AlertProps",
            type: {
                summary: "JSX.Element",
            },
        },
    },
    "AlertProps.maxCollapsedHeight": {
        name: "maxCollapsedHeight",
        description:
            "Specifies the maximum height of content, after which it is collapsed",
        control: false,
        table: {
            category: "AlertProps",
            type: {
                summary: "number",
            },
        },
    },
    AlertType: {
        name: "AlertType",
        control: false,
        table: {
            category: "AlertType",
            type: {
                summary:
                    '| "success" | "warning" | "error" | "info" | "description"',
            },
        },
    },
    AlertSizeType: {
        name: "AlertSizeType",
        control: false,
        table: {
            category: "AlertSizeType",
            type: {
                summary: '"default" | "small"',
            },
        },
    },
} satisfies Record<string, unknown>;
