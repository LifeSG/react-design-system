// This file is generated. Do not edit manually.
// Run: npm run storybook:argtypes

export const accordionExtraArgTypes = {
    "AccordionItemApi.collapse": {
        control: false,
        name: "collapse",
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
        table: {
            category: "AccordionItemProps",
            tabGroup: "Accordion.Item",
            type: {
                summary: "JSX.Element | JSX.Element[]",
            },
        },
    },
    "AccordionItemProps.className": {
        control: false,
        name: "className",
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
        table: {
            category: "AccordionItemProps",
            tabGroup: "Accordion.Item",
            type: {
                summary: "string | JSX.Element",
            },
        },
    },
    "AccordionItemProps.type": {
        control: false,
        description: "Visual size variant for the accordion item.",
        name: "type",
        table: {
            category: "AccordionItemProps",
            tabGroup: "Accordion.Item",
            type: {
                summary: "'default' | 'small'",
            },
        },
    },
    "AccordionProps.children": {
        control: false,
        name: "children",
        table: {
            category: "AccordionProps",
            tabGroup: "Accordion",
            type: {
                summary: "JSX.Element | JSX.Element[]",
            },
        },
    },
    "AccordionProps.className": {
        control: false,
        name: "className",
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
        table: {
            category: "AccordionProps",
            defaultValue: {
                summary: '"expand-all"',
            },
            tabGroup: "Accordion",
            type: {
                summary: "'collapse-all' | 'expand-all'",
            },
        },
    },
    "AccordionProps.onExpandCollapseChange": {
        control: false,
        description: "Called after the expand/collapse state changes.",
        name: "onExpandCollapseChange",
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
        table: {
            category: "AccordionProps",
            tabGroup: "Accordion",
            type: {
                summary: "string",
            },
        },
    },
} satisfies Record<string, unknown>;
