// This file is generated. Do not edit manually.
// Run: npm run storybook:argtypes

export const accordionExtraArgTypes = {
    "AccordionItemApi.collapse": {
        control: false,
        name: "collapse",
        type: {
            required: true,
        },
        table: {
            category: "AccordionItemApi",
            tabGroup: "Accordion.Item",
            type: {
                summary: "() => void",
            },
        },
    },
    "AccordionItemApi.expand": {
        control: false,
        name: "expand",
        type: {
            required: true,
        },
        table: {
            category: "AccordionItemApi",
            tabGroup: "Accordion.Item",
            type: {
                summary: "() => void",
            },
        },
    },
    "AccordionItemApi.isExpanded": {
        control: false,
        name: "isExpanded",
        type: {
            required: true,
        },
        table: {
            category: "AccordionItemApi",
            tabGroup: "Accordion.Item",
            type: {
                summary: "() => boolean",
            },
        },
    },
    "AccordionItemProps.children": {
        control: false,
        name: "children",
        type: {
            required: true,
        },
        table: {
            category: "AccordionItemProps",
            tabGroup: "Accordion.Item",
            type: {
                summaryParts: ["JSX.Element", "JSX.Element[]"],
            },
        },
    },
    "AccordionItemProps.className": {
        control: false,
        name: "className",
        type: {
            required: false,
        },
        table: {
            category: "AccordionItemProps",
            tabGroup: "Accordion.Item",
            type: {
                summary: "string",
            },
        },
    },
    "AccordionItemProps.collapsible": {
        control: false,
        description:
            "When `false`, the item header is non-interactive and the content panel is\nalways visible.",
        name: "collapsible",
        type: {
            required: false,
        },
        table: {
            category: "AccordionItemProps",
            defaultValue: {
                summary: "true",
            },
            tabGroup: "Accordion.Item",
            type: {
                summary: "boolean",
            },
        },
    },
    "AccordionItemProps.data-testid": {
        control: false,
        name: "data-testid",
        type: {
            required: false,
        },
        table: {
            category: "AccordionItemProps",
            tabGroup: "Accordion.Item",
            type: {
                summary: "string",
            },
        },
    },
    "AccordionItemProps.expanded": {
        control: false,
        description:
            'Controls the expanded state of this item. Omit (or pass `undefined`) to let the parent\n"Show all" / "Hide all" button manage the state. Pass an explicit boolean to take\nindividual control of this item.',
        name: "expanded",
        type: {
            required: false,
        },
        table: {
            category: "AccordionItemProps",
            tabGroup: "Accordion.Item",
            type: {
                summary: "boolean",
            },
        },
    },
    "AccordionItemProps.id": {
        control: false,
        name: "id",
        type: {
            required: false,
        },
        table: {
            category: "AccordionItemProps",
            tabGroup: "Accordion.Item",
            type: {
                summary: "string",
            },
        },
    },
    "AccordionItemProps.title": {
        control: false,
        name: "title",
        type: {
            required: true,
        },
        table: {
            category: "AccordionItemProps",
            tabGroup: "Accordion.Item",
            type: {
                summaryParts: ["JSX.Element", "string"],
            },
        },
    },
    "AccordionItemProps.type": {
        control: false,
        description: "Visual size variant for the accordion item.",
        name: "type",
        type: {
            required: false,
        },
        table: {
            category: "AccordionItemProps",
            tabGroup: "Accordion.Item",
            type: {
                summaryParts: ["'default'", "'small'"],
            },
        },
    },
    "AccordionProps.children": {
        control: false,
        name: "children",
        type: {
            required: true,
        },
        table: {
            category: "AccordionProps",
            tabGroup: "Accordion",
            type: {
                summaryParts: ["JSX.Element", "JSX.Element[]"],
            },
        },
    },
    "AccordionProps.className": {
        control: false,
        name: "className",
        type: {
            required: false,
        },
        table: {
            category: "AccordionProps",
            tabGroup: "Accordion",
            type: {
                summary: "string",
            },
        },
    },
    "AccordionProps.data-testid": {
        control: false,
        name: "data-testid",
        type: {
            required: false,
        },
        table: {
            category: "AccordionProps",
            tabGroup: "Accordion",
            type: {
                summary: "string",
            },
        },
    },
    "AccordionProps.enableExpandAll": {
        control: false,
        description: 'Renders the "Show all" / "Hide all" toggle button.',
        name: "enableExpandAll",
        type: {
            required: false,
        },
        table: {
            category: "AccordionProps",
            defaultValue: {
                summary: "true",
            },
            tabGroup: "Accordion",
            type: {
                summary: "boolean",
            },
        },
    },
    "AccordionProps.headingLevel": {
        control: false,
        description:
            "The ARIA heading level for the accordion and item titles.\nSpecify a custom value to reflect the component's hierarchy within a page.\nWhen a title is provided, the title level = n and the item title level = n + 1.\nOtherwise, the item title level = n.",
        name: "headingLevel",
        type: {
            required: false,
        },
        table: {
            category: "AccordionProps",
            defaultValue: {
                summary: "2",
            },
            tabGroup: "Accordion",
            type: {
                summary: "number",
            },
        },
    },
    "AccordionProps.id": {
        control: false,
        name: "id",
        type: {
            required: false,
        },
        table: {
            category: "AccordionProps",
            tabGroup: "Accordion",
            type: {
                summary: "string",
            },
        },
    },
    "AccordionProps.initialDisplay": {
        control: false,
        description: "Controls whether all items start expanded or collapsed.",
        name: "initialDisplay",
        type: {
            required: false,
        },
        table: {
            category: "AccordionProps",
            defaultValue: {
                summary: '"expand-all"',
            },
            tabGroup: "Accordion",
            type: {
                summaryParts: ["'collapse-all'", "'expand-all'"],
            },
        },
    },
    "AccordionProps.onExpandCollapseChange": {
        control: false,
        description: "Called after the expand/collapse state changes.",
        name: "onExpandCollapseChange",
        type: {
            required: false,
        },
        table: {
            category: "AccordionProps",
            tabGroup: "Accordion",
            type: {
                summary: "(expanded: boolean) => void",
            },
        },
    },
    "AccordionProps.showTitleInMobile": {
        control: false,
        description:
            "When `true`, the `title` remains visible on mobile viewports.",
        name: "showTitleInMobile",
        type: {
            required: false,
        },
        table: {
            category: "AccordionProps",
            defaultValue: {
                summary: "false",
            },
            tabGroup: "Accordion",
            type: {
                summary: "boolean",
            },
        },
    },
    "AccordionProps.title": {
        control: false,
        description:
            "Section heading rendered above the item list. Visually hidden on mobile unless `showTitleInMobile` is true.",
        name: "title",
        type: {
            required: false,
        },
        table: {
            category: "AccordionProps",
            tabGroup: "Accordion",
            type: {
                summary: "string",
            },
        },
    },
} satisfies Record<string, unknown>;
