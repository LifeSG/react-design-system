// This file is generated. Do not edit manually.
// Run: npm run storybook:argtypes

export const linkListExtraArgTypes = {
    "LinkListEagerProps.loadMode": {
        control: false,
        description: 'When `"eager"`, all items are rendered immediately.',
        name: "loadMode",
        type: {
            required: false,
        },
        table: {
            category: "LinkListEagerProps",
            type: {
                summary: "'eager'",
            },
        },
    },
    "LinkListEagerProps.maxShown": {
        control: false,
        description:
            "Maximum number of items shown before the list is truncated.\nItems beyond this count are hidden until the user activates the toggle.\nWhen omitted, all items are shown without truncation.",
        name: "maxShown",
        type: {
            required: false,
        },
        table: {
            category: "LinkListEagerProps",
            type: {
                summary: "number",
            },
        },
    },
    "LinkListItemProps.__inheritedHtmlProps": {
        control: false,
        description: "Inherits props from `HTMLAnchorElement`.",
        name: "",
        type: {},
        table: {
            category: "LinkListItemProps<T>",
            type: {},
        },
    },
    "LinkListItemProps.data-testid": {
        control: false,
        name: "data-testid",
        type: {
            required: false,
        },
        table: {
            category: "LinkListItemProps<T>",
            type: {
                summary: "string",
            },
        },
    },
    "LinkListItemProps.description": {
        control: false,
        description: "Secondary text shown below the title.",
        name: "description",
        type: {
            required: false,
        },
        table: {
            category: "LinkListItemProps<T>",
            type: {
                summary: "string",
            },
        },
    },
    "LinkListItemProps.onClick": {
        control: false,
        description:
            "Called when an item is clicked. This overrides the `onItemClick` event handler.",
        name: "onClick",
        type: {
            required: false,
        },
        table: {
            category: "LinkListItemProps<T>",
            type: {
                summary: "(event: React.MouseEvent<HTMLAnchorElement>) => void",
            },
        },
    },
    "LinkListItemProps.options": {
        control: false,
        description:
            "Arbitrary custom data passed through to the `onItemClick` callback.",
        name: "options",
        type: {
            required: false,
        },
        table: {
            category: "LinkListItemProps<T>",
            type: {
                summary: "T",
            },
        },
    },
    "LinkListItemProps.secondaryDescription": {
        control: false,
        description:
            "Additional content rendered below the description.\nAccepts a JSX element for rich secondary content.",
        name: "secondaryDescription",
        type: {
            required: false,
        },
        table: {
            category: "LinkListItemProps<T>",
            type: {
                summary: "JSX.Element",
            },
        },
    },
    "LinkListItemProps.title": {
        control: false,
        description: "Primary label displayed as the link text.",
        name: "title",
        type: {
            required: true,
        },
        table: {
            category: "LinkListItemProps<T>",
            type: {
                summary: "string",
            },
        },
    },
    "LinkListLazyProps.loadMode": {
        control: false,
        description: 'When `"lazy"`, items are loaded on demand.',
        name: "loadMode",
        type: {
            required: true,
        },
        table: {
            category: "LinkListLazyProps",
            type: {
                summary: "'lazy'",
            },
        },
    },
    "LinkListLazyProps.loadMore": {
        control: false,
        description:
            'Whether more items are available to load.\nWhen `false`, the "View more" button is hidden.',
        name: "loadMore",
        type: {
            required: true,
        },
        table: {
            category: "LinkListLazyProps",
            type: {
                summary: "false | true",
            },
        },
    },
    "LinkListLazyProps.onLoadMore": {
        control: false,
        description: 'Called when the user activates the "View more" button.',
        name: "onLoadMore",
        type: {
            required: true,
        },
        table: {
            category: "LinkListLazyProps",
            type: {
                summary: "() => void | Promise<void>",
            },
        },
    },
    LinkListProps: {
        control: false,
        description: "Props for the `LinkList` component.",
        name: "LinkListProps<T>",
        type: {},
        table: {
            category: "LinkListProps<T>",
            type: {
                summary:
                    "LinkListBaseProps<T> & (LinkListEagerProps | LinkListLazyProps)",
            },
        },
    },
    "LinkListProps.className": {
        control: false,
        name: "className",
        type: {
            required: false,
        },
        table: {
            category: "LinkListProps<T>",
            type: {
                summary: "string",
            },
        },
    },
    "LinkListProps.customLabels": {
        control: false,
        description: "Overrides the default toggle button labels.",
        name: "customLabels",
        type: {
            required: false,
        },
        table: {
            category: "LinkListProps<T>",
            type: {
                summary: "{ viewMore?: string; viewLess?: string; }",
            },
        },
    },
    "LinkListProps.data-testid": {
        control: false,
        name: "data-testid",
        type: {
            required: false,
        },
        table: {
            category: "LinkListProps<T>",
            type: {
                summary: "string",
            },
        },
    },
    "LinkListProps.items": {
        control: false,
        description: "The list of link items to render.",
        name: "items",
        type: {
            required: true,
        },
        table: {
            category: "LinkListProps<T>",
            type: {
                summary: "LinkListItemProps<T>[]",
            },
        },
    },
    "LinkListProps.loadMode": {
        control: false,
        description:
            'When `"eager"`, all items are rendered immediately.\n\nWhen `"lazy"`, items are loaded on demand.',
        name: "loadMode",
        type: {
            required: false,
        },
        table: {
            category: "LinkListProps<T>",
            type: {
                summaryParts: ["'eager'", "'lazy'"],
            },
        },
    },
    "LinkListProps.onItemClick": {
        control: false,
        description:
            "Component-level click handler called for every item click, unless the\nitem defines its own `onClick`.",
        name: "onItemClick",
        type: {
            required: false,
        },
        table: {
            category: "LinkListProps<T>",
            type: {
                summary:
                    "(item: LinkListItemProps<T>, event: React.MouseEvent<HTMLAnchorElement>) => void",
            },
        },
    },
    "LinkListProps.style": {
        control: false,
        description: "Visual size variant applied to all items.",
        name: "style",
        type: {
            required: false,
        },
        table: {
            category: "LinkListProps<T>",
            defaultValue: {
                summary: '"default"',
            },
            type: {
                summaryParts: ["'default'", "'small'"],
            },
        },
    },
} satisfies Record<string, unknown>;
