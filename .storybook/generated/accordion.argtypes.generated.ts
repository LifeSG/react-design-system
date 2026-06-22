// This file is generated. Do not edit manually.
// Run: npm run storybook:argtypes

export const accordionExtraArgTypes = {
    "AccordionProps.children": {
        name: "children",
        control: false,
        table: {
            category: "AccordionProps",
            type: {
                summary: "JSX.Element | JSX.Element[]",
            },
        },
    },
    "AccordionProps.title": {
        name: "title",
        control: false,
        table: {
            category: "AccordionProps",
            type: {
                summary: "string",
            },
        },
    },
    "AccordionProps.enableExpandAll": {
        name: "enableExpandAll",
        control: false,
        table: {
            category: "AccordionProps",
            type: {
                summary: "boolean",
            },
        },
    },
    "AccordionProps.initialDisplay": {
        name: "initialDisplay",
        control: false,
        table: {
            category: "AccordionProps",
            type: {
                summary: '"collapse-all" | "expand-all"',
            },
        },
    },
    "AccordionProps.showTitleInMobile": {
        name: "showTitleInMobile",
        control: false,
        table: {
            category: "AccordionProps",
            type: {
                summary: "boolean",
            },
        },
    },
    "AccordionProps.id": {
        name: "id",
        control: false,
        table: {
            category: "AccordionProps",
            type: {
                summary: "string",
            },
        },
    },
    "AccordionProps.data-testid": {
        name: "data-testid",
        control: false,
        table: {
            category: "AccordionProps",
            type: {
                summary: "string",
            },
        },
    },
    "AccordionProps.className": {
        name: "className",
        control: false,
        table: {
            category: "AccordionProps",
            type: {
                summary: "string",
            },
        },
    },
    "AccordionProps.headingLevel": {
        name: "headingLevel",
        control: false,
        table: {
            category: "AccordionProps",
            type: {
                summary: "number",
            },
        },
    },
    "AccordionProps.onExpandCollapseChange": {
        name: "onExpandCollapseChange",
        control: false,
        table: {
            category: "AccordionProps",
            type: {
                summary: "((expanded: boolean) => void)",
            },
        },
    },
    "AccordionItemProps.title": {
        name: "title",
        control: false,
        table: {
            category: "AccordionItemProps",
            type: {
                summary: "string | JSX.Element",
            },
        },
    },
    "AccordionItemProps.children": {
        name: "children",
        control: false,
        table: {
            category: "AccordionItemProps",
            type: {
                summary: "JSX.Element | JSX.Element[]",
            },
        },
    },
    "AccordionItemProps.expanded": {
        name: "expanded",
        description:
            "Omit or set this to undefined to allow 'Hide All'/'Show All' in parent to take precedence\nfor cases where we want the default expand behaviour",
        control: false,
        table: {
            category: "AccordionItemProps",
            type: {
                summary: "boolean",
            },
        },
    },
    "AccordionItemProps.id": {
        name: "id",
        control: false,
        table: {
            category: "AccordionItemProps",
            type: {
                summary: "string",
            },
        },
    },
    "AccordionItemProps.data-testid": {
        name: "data-testid",
        control: false,
        table: {
            category: "AccordionItemProps",
            type: {
                summary: "string",
            },
        },
    },
    "AccordionItemProps.className": {
        name: "className",
        control: false,
        table: {
            category: "AccordionItemProps",
            type: {
                summary: "string",
            },
        },
    },
    "AccordionItemProps.type": {
        name: "type",
        control: false,
        table: {
            category: "AccordionItemProps",
            type: {
                summary: "AccordionItemType",
            },
        },
    },
    "AccordionItemProps.collapsible": {
        name: "collapsible",
        control: false,
        table: {
            category: "AccordionItemProps",
            type: {
                summary: "boolean",
            },
        },
    },
    "AccordionItemApi.expand": {
        name: "expand",
        control: false,
        table: {
            category: "AccordionItemApi",
            type: {
                summary: "() => void",
            },
        },
    },
    "AccordionItemApi.collapse": {
        name: "collapse",
        control: false,
        table: {
            category: "AccordionItemApi",
            type: {
                summary: "() => void",
            },
        },
    },
    "AccordionItemApi.isExpanded": {
        name: "isExpanded",
        control: false,
        table: {
            category: "AccordionItemApi",
            type: {
                summary: "() => boolean",
            },
        },
    },
    AccordionItemType: {
        name: "AccordionItemType",
        control: false,
        table: {
            category: "AccordionItemType",
            type: {
                summary: '"default" | "small"',
            },
        },
    },
    AccordionItemHandle: {
        name: "AccordionItemHandle",
        control: false,
        table: {
            category: "AccordionItemHandle",
            type: {
                summary: "HTMLDivElement & AccordionItemApi",
            },
        },
    },
} satisfies Record<string, unknown>;
