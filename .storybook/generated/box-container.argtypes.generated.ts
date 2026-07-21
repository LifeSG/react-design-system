// This file is generated. Do not edit manually.
// Run: npm run storybook:argtypes

export const boxContainerExtraArgTypes = {
    "BoxContainerProps.callToActionComponent": {
        control: false,
        description:
            "Optional element rendered in the header alongside the title, e.g. a link or button.",
        name: "callToActionComponent",
        type: {
            required: false,
        },
        table: {
            category: "BoxContainerProps",
            type: {
                summary: "JSX.Element",
            },
        },
    },
    "BoxContainerProps.children": {
        control: false,
        name: "children",
        type: {
            required: true,
        },
        table: {
            category: "BoxContainerProps",
            type: {
                summaryParts: ["JSX.Element", "JSX.Element[]"],
            },
        },
    },
    "BoxContainerProps.className": {
        control: false,
        name: "className",
        type: {
            required: false,
        },
        table: {
            category: "BoxContainerProps",
            type: {
                summary: "string",
            },
        },
    },
    "BoxContainerProps.clickableHeader": {
        control: false,
        description:
            "When `true` (and `collapsible` is also `true`), the entire header row\nbecomes a click target for toggling expand/collapse, not just the chevron\nbutton.",
        name: "clickableHeader",
        type: {
            required: false,
        },
        table: {
            category: "BoxContainerProps",
            type: {
                summary: "boolean",
            },
        },
    },
    "BoxContainerProps.collapsible": {
        control: false,
        description:
            "When `false`, the container is always expanded and the collapse handle is\nhidden.",
        name: "collapsible",
        type: {
            required: false,
        },
        table: {
            category: "BoxContainerProps",
            defaultValue: {
                summary: "true",
            },
            type: {
                summary: "boolean",
            },
        },
    },
    "BoxContainerProps.data-testid": {
        control: false,
        name: "data-testid",
        type: {
            required: false,
        },
        table: {
            category: "BoxContainerProps",
            type: {
                summary: "string",
            },
        },
    },
    "BoxContainerProps.displayState": {
        control: false,
        description:
            'Renders an inline alert icon next to the title and announces the state to\nscreen readers. Has no effect when set to `"default"`.',
        name: "displayState",
        type: {
            required: false,
        },
        table: {
            category: "BoxContainerProps",
            defaultValue: {
                summary: '"default"',
            },
            type: {
                summaryParts: ["'default'", "'error'", "'warning'"],
            },
        },
    },
    "BoxContainerProps.expanded": {
        control: false,
        description: "Initial expanded state when `collapsible` is `true`.",
        name: "expanded",
        type: {
            required: false,
        },
        table: {
            category: "BoxContainerProps",
            defaultValue: {
                summary: "false",
            },
            type: {
                summary: "boolean",
            },
        },
    },
    "BoxContainerProps.id": {
        control: false,
        name: "id",
        type: {
            required: false,
        },
        table: {
            category: "BoxContainerProps",
            type: {
                summary: "string",
            },
        },
    },
    "BoxContainerProps.subComponentTestIds": {
        control: false,
        name: "subComponentTestIds",
        type: {
            required: false,
        },
        table: {
            category: "BoxContainerProps",
            type: {
                summary: "BoxContainerSubComponentTestIds",
            },
        },
    },
    "BoxContainerProps.title": {
        control: false,
        name: "title",
        type: {
            required: true,
        },
        table: {
            category: "BoxContainerProps",
            type: {
                summaryParts: ["JSX.Element", "string"],
            },
        },
    },
    "BoxContainerSubComponentTestIds.displayStateIcon": {
        control: false,
        name: "displayStateIcon",
        type: {
            required: false,
        },
        table: {
            category: "BoxContainerSubComponentTestIds",
            type: {
                summary: "string",
            },
        },
    },
    "BoxContainerSubComponentTestIds.handle": {
        control: false,
        name: "handle",
        type: {
            required: false,
        },
        table: {
            category: "BoxContainerSubComponentTestIds",
            type: {
                summary: "string",
            },
        },
    },
    "BoxContainerSubComponentTestIds.title": {
        control: false,
        name: "title",
        type: {
            required: false,
        },
        table: {
            category: "BoxContainerSubComponentTestIds",
            type: {
                summary: "string",
            },
        },
    },
} satisfies Record<string, unknown>;
