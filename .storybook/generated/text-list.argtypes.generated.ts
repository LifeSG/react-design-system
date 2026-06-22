// This file is generated. Do not edit manually.
// Run: npm run storybook:argtypes

export const textListExtraArgTypes = {
    "BaseListProps.children": {
        name: "children",
        control: false,
        table: {
            category: "BaseListProps",
            type: {
                summary: "JSX.Element | JSX.Element[]",
            },
        },
    },
    "BaseListProps.bottomMargin": {
        name: "bottomMargin",
        control: false,
        table: {
            category: "BaseListProps",
            type: {
                summary: "number",
            },
        },
    },
    "BaseListProps.size": {
        name: "size",
        control: false,
        table: {
            category: "BaseListProps",
            type: {
                summary: "TextListSize",
            },
        },
    },
    "BaseListProps.id": {
        name: "id",
        control: false,
        table: {
            category: "BaseListProps",
            type: {
                summary: "string",
            },
        },
    },
    "BaseListProps.data-testid": {
        name: "data-testid",
        control: false,
        table: {
            category: "BaseListProps",
            type: {
                summary: "string",
            },
        },
    },
    "BaseListProps.className": {
        name: "className",
        control: false,
        table: {
            category: "BaseListProps",
            type: {
                summary: "string",
            },
        },
    },
    "OrderedListProps.counterType": {
        name: "counterType",
        description: 'Values: "lower-alpha" | "decimal" | "lower-roman"',
        control: false,
        table: {
            category: "OrderedListProps",
            type: {
                summary: "CounterType",
            },
        },
    },
    "OrderedListProps.counterSeparator": {
        name: "counterSeparator",
        control: false,
        table: {
            category: "OrderedListProps",
            type: {
                summary: "string",
            },
        },
    },
    "OrderedListProps.reversed": {
        name: "reversed",
        description: "Specifies if the list counter decrements",
        control: false,
        table: {
            category: "OrderedListProps",
            type: {
                summary: "boolean",
            },
        },
    },
    "OrderedListProps.start": {
        name: "start",
        description: "The value to start the list count from",
        control: false,
        table: {
            category: "OrderedListProps",
            type: {
                summary: "number",
            },
        },
    },
    "UnorderedListProps.bulletType": {
        name: "bulletType",
        description:
            'Values: "disc" | "circle" | "square" | "none" or custom React.ReactNode icon',
        control: false,
        table: {
            category: "UnorderedListProps",
            type: {
                summary: "BulletType | CustomBulletIcon",
            },
        },
    },
    TextListSize: {
        name: "TextListSize",
        control: false,
        table: {
            category: "TextListSize",
            type: {
                summary: 'Exclude<FontSize, "form-label" | "form-description">',
            },
        },
    },
    CounterType: {
        name: "CounterType",
        control: false,
        table: {
            category: "CounterType",
            type: {
                summary: '"lower-alpha" | "decimal" | "lower-roman"',
            },
        },
    },
    BulletType: {
        name: "BulletType",
        control: false,
        table: {
            category: "BulletType",
            type: {
                summary: '"disc" | "circle" | "square" | "none"',
            },
        },
    },
    CustomBulletIcon: {
        name: "CustomBulletIcon",
        control: false,
        table: {
            category: "CustomBulletIcon",
            type: {
                summary: "Exclude<React.ReactNode, string>",
            },
        },
    },
} satisfies Record<string, unknown>;
