// This file is generated. Do not edit manually.
// Run: npm run storybook:argtypes

export const textListExtraArgTypes = {
    BulletType: {
        control: false,
        description: "Predefined bullet marker style for an unordered list.",
        name: "BulletType",
        table: {
            category: "BulletType",
            type: {
                summary: "'none' | 'disc' | 'circle' | 'square'",
            },
        },
    },
    CounterType: {
        control: false,
        description: "Counter style applied to each item in an ordered list.",
        name: "CounterType",
        table: {
            category: "CounterType",
            type: {
                summary: "'decimal' | 'lower-alpha' | 'lower-roman'",
            },
        },
    },
    CustomBulletIcon: {
        control: false,
        name: "CustomBulletIcon",
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
        table: {
            category: "OrderedListProps",
            type: {
                summary: "JSX.Element | JSX.Element[]",
            },
        },
    },
    "OrderedListProps.className": {
        control: false,
        name: "className",
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
        table: {
            category: "OrderedListProps",
            defaultValue: {
                summary: '"decimal"',
            },
            type: {
                summary: "CounterType",
            },
        },
    },
    "OrderedListProps.data-testid": {
        control: false,
        name: "data-testid",
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
        table: {
            category: "OrderedListProps",
            type: {
                summary: "TextListSize",
            },
        },
    },
    "OrderedListProps.start": {
        control: false,
        description: "The value to start the list count from.",
        name: "start",
        table: {
            category: "OrderedListProps",
            type: {
                summary: "number",
            },
        },
    },
    TextListSize: {
        control: false,
        description: "Text size tokens available for list content.",
        name: "TextListSize",
        table: {
            category: "TextListSize",
            type: {
                summary:
                    "'heading-xxl' | 'heading-xl' | 'heading-lg' | 'heading-md' | 'heading-sm' | 'heading-xs' | 'body-baseline' | 'body-md' | 'body-sm' | 'body-xs'",
            },
        },
    },
    "UnorderedListProps.bottomMargin": {
        control: false,
        description:
            "Bottom margin in pixels applied to each list item except the last.",
        name: "bottomMargin",
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
        table: {
            category: "UnorderedListProps",
            type: {
                summary: "JSX.Element | JSX.Element[]",
            },
        },
    },
    "UnorderedListProps.className": {
        control: false,
        name: "className",
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
        table: {
            category: "UnorderedListProps",
            type: {
                summary: "TextListSize",
            },
        },
    },
} satisfies Record<string, unknown>;
