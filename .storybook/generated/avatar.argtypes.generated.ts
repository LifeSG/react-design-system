// This file is generated. Do not edit manually.
// Run: npm run storybook:argtypes

export const avatarExtraArgTypes = {
    "AvatarProps.__inheritedHtmlProps": {
        control: false,
        description: "Inherits props from `HTMLDivElement`.",
        name: "",
        type: {},
        table: {
            category: "AvatarProps",
            type: {},
        },
    },
    "AvatarProps.children": {
        control: false,
        description:
            "A string or JSX element to display inside the avatar. When a string is\nprovided, only the first Unicode code point is rendered as an uppercase\ninitial. Pass a JSX element (e.g. an `<img>`) to render custom content.",
        name: "children",
        type: {
            required: true,
        },
        table: {
            category: "AvatarProps",
            type: {
                summaryParts: ["JSX.Element", "string"],
            },
        },
    },
    "AvatarProps.data-testid": {
        control: false,
        name: "data-testid",
        type: {
            required: false,
        },
        table: {
            category: "AvatarProps",
            type: {
                summary: "string",
            },
        },
    },
    "AvatarProps.sizeType": {
        control: false,
        description:
            'Controls the visual size of the avatar. `"small"` renders a compact variant\nwith reduced typography; `"default"` uses the standard size.',
        name: "sizeType",
        type: {
            required: false,
        },
        table: {
            category: "AvatarProps",
            type: {
                summaryParts: ["'default'", "'small'"],
            },
        },
    },
} satisfies Record<string, unknown>;
