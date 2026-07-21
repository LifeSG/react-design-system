// This file is generated. Do not edit manually.
// Run: npm run storybook:argtypes

export const textListExtraArgTypes = {
    BulletType: {
        control: false,
        description: "Predefined bullet marker style for an unordered list.",
        name: "BulletType",
        type: {},
        table: {
            category: "BulletType",
            type: {
                summary: "'circle' | 'disc' | 'none' | 'square'",
            },
        },
    },
    CustomBulletIcon: {
        control: false,
        name: "CustomBulletIcon",
        type: {},
        table: {
            category: "CustomBulletIcon",
            type: {
                summary: "Exclude<React.ReactNode, string>",
            },
        },
    },
    "OrderedListProps.bottomMargin": {
        control: false,
        description:
            "Bottom margin in pixels applied to each list item except the last.",
        name: "bottomMargin",
        type: {
            required: false,
        },
        table: {
            category: "OrderedListProps",
            type: {
                summary: "number",
            },
        },
    },
    "OrderedListProps.children": {
        control: false,
        name: "children",
        type: {
            required: true,
        },
        table: {
            category: "OrderedListProps",
            type: {
                summaryParts: ["JSX.Element", "JSX.Element[]"],
            },
        },
    },
    "OrderedListProps.className": {
        control: false,
        name: "className",
        type: {
            required: false,
        },
        table: {
            category: "OrderedListProps",
            type: {
                summary: "string",
            },
        },
    },
    "OrderedListProps.counterSeparator": {
        control: false,
        description: "Character or string rendered after each counter value.",
        name: "counterSeparator",
        type: {
            required: false,
        },
        table: {
            category: "OrderedListProps",
            defaultValue: {
                summary: '")"',
            },
            type: {
                summary: "string",
            },
        },
    },
    "OrderedListProps.counterType": {
        control: false,
        description: "Counter style applied to each list item.",
        name: "counterType",
        type: {
            required: false,
        },
        table: {
            category: "OrderedListProps",
            defaultValue: {
                summary: '"decimal"',
            },
            type: {
                summaryParts: ["'decimal'", "'lower-alpha'", "'lower-roman'"],
            },
        },
    },
    "OrderedListProps.data-testid": {
        control: false,
        name: "data-testid",
        type: {
            required: false,
        },
        table: {
            category: "OrderedListProps",
            type: {
                summary: "string",
            },
        },
    },
    "OrderedListProps.id": {
        control: false,
        name: "id",
        type: {
            required: false,
        },
        table: {
            category: "OrderedListProps",
            type: {
                summary: "string",
            },
        },
    },
    "OrderedListProps.reversed": {
        control: false,
        description:
            "The counter is decremented from the start value instead of incremented.",
        name: "reversed",
        type: {
            required: false,
        },
        table: {
            category: "OrderedListProps",
            type: {
                summary: "boolean",
            },
        },
    },
    "OrderedListProps.size": {
        control: false,
        description: "Text size applied to the list content.",
        name: "size",
        type: {
            required: false,
        },
        table: {
            category: "OrderedListProps",
            type: {
                summary:
                    "'body-baseline' | 'body-md' | 'body-sm' | 'body-xs' | 'heading-lg' | 'heading-md' | 'heading-sm' | 'heading-xl' | 'heading-xs' | 'heading-xxl'",
            },
        },
    },
    "OrderedListProps.start": {
        control: false,
        description: "The value to start the list count from.",
        name: "start",
        type: {
            required: false,
        },
        table: {
            category: "OrderedListProps",
            type: {
                summary: "number",
            },
        },
    },
    "UnorderedListProps.bottomMargin": {
        control: false,
        description:
            "Bottom margin in pixels applied to each list item except the last.",
        name: "bottomMargin",
        type: {
            required: false,
        },
        table: {
            category: "UnorderedListProps",
            type: {
                summary: "number",
            },
        },
    },
    "UnorderedListProps.bulletType": {
        control: false,
        description:
            "Marker style for list items. Pass a `BulletType` token for a predefined\nmarker, or any React node to render a custom decorative icon before each\nitem's content.",
        name: "bulletType",
        type: {
            required: false,
        },
        table: {
            category: "UnorderedListProps",
            defaultValue: {
                summary: '"disc"',
            },
            type: {
                summary: "BulletType | CustomBulletIcon",
            },
        },
    },
    "UnorderedListProps.children": {
        control: false,
        name: "children",
        type: {
            required: true,
        },
        table: {
            category: "UnorderedListProps",
            type: {
                summaryParts: ["JSX.Element", "JSX.Element[]"],
            },
        },
    },
    "UnorderedListProps.className": {
        control: false,
        name: "className",
        type: {
            required: false,
        },
        table: {
            category: "UnorderedListProps",
            type: {
                summary: "string",
            },
        },
    },
    "UnorderedListProps.data-testid": {
        control: false,
        name: "data-testid",
        type: {
            required: false,
        },
        table: {
            category: "UnorderedListProps",
            type: {
                summary: "string",
            },
        },
    },
    "UnorderedListProps.id": {
        control: false,
        name: "id",
        type: {
            required: false,
        },
        table: {
            category: "UnorderedListProps",
            type: {
                summary: "string",
            },
        },
    },
    "UnorderedListProps.size": {
        control: false,
        description: "Text size applied to the list content.",
        name: "size",
        type: {
            required: false,
        },
        table: {
            category: "UnorderedListProps",
            type: {
                summary:
                    "'body-baseline' | 'body-md' | 'body-sm' | 'body-xs' | 'heading-lg' | 'heading-md' | 'heading-sm' | 'heading-xl' | 'heading-xs' | 'heading-xxl'",
            },
        },
    },
} satisfies Record<string, unknown>;
