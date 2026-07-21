// This file is generated. Do not edit manually.
// Run: npm run storybook:argtypes

export const typographyExtraArgTypes = {
    "TypographyLinkProps.__inheritedHtmlProps": {
        control: false,
        description: "Inherits props from `HTMLAnchorElement`.",
        name: "",
        type: {},
        table: {
            category: "TypographyLinkProps",
            tabGroup: "Link",
            type: {},
        },
    },
    "TypographyLinkProps.external": {
        control: false,
        description:
            "Appends an external-link icon after the link text to signal that the\ndestination is outside the current site.",
        name: "external",
        type: {
            required: false,
        },
        table: {
            category: "TypographyLinkProps",
            tabGroup: "Link",
            type: {
                summary: "boolean",
            },
        },
    },
    "TypographyLinkProps.underlineStyle": {
        control: false,
        description: "Text-decoration style for the link.",
        name: "underlineStyle",
        type: {
            required: false,
        },
        table: {
            category: "TypographyLinkProps",
            defaultValue: {
                summary: '"underline"',
            },
            tabGroup: "Link",
            type: {
                summaryParts: ["'none'", "'underline'"],
            },
        },
    },
    "TypographyLinkProps.weight": {
        control: false,
        description: "Font weight of the link text.",
        name: "weight",
        type: {
            required: false,
        },
        table: {
            category: "TypographyLinkProps",
            defaultValue: {
                summary: '"regular"',
            },
            tabGroup: "Link",
            type: {
                summaryParts: ["'bold'", "'light'", "'regular'", "'semibold'"],
            },
        },
    },
    "TypographyProps.as": {
        control: false,
        description:
            'Overrides the rendered HTML element, e.g. `"h2"`.\n\nRemarks:\nHas no effect when `inline` is `true`.',
        name: "as",
        type: {
            required: false,
        },
        table: {
            category: "TypographyProps<T>",
            tabGroup: "Heading/Body",
            type: {
                summary: "T",
            },
        },
    },
    "TypographyProps.inline": {
        control: false,
        description:
            "Renders the element as an inline `span`. When `true`, the `as` prop\nis ignored and `maxLines` clamping is disabled.",
        name: "inline",
        type: {
            required: false,
        },
        table: {
            category: "TypographyProps<T>",
            tabGroup: "Heading/Body",
            type: {
                summary: "false | true",
            },
        },
    },
    "TypographyProps.maxLines": {
        control: false,
        description:
            "Clamps visible text to the given number of lines, truncating the\nremainder.\n\nRemarks:\nHas no effect when `inline` is `true`.",
        name: "maxLines",
        type: {
            required: false,
        },
        table: {
            category: "TypographyProps<T>",
            tabGroup: "Heading/Body",
            type: {
                summary: "number",
            },
        },
    },
    "TypographyProps.paragraph": {
        control: false,
        description:
            "Adds a bottom margin to separate the element from following content.",
        name: "paragraph",
        type: {
            required: false,
        },
        table: {
            category: "TypographyProps<T>",
            tabGroup: "Heading/Body",
            type: {
                summary: "false | true",
            },
        },
    },
    "TypographyProps.weight": {
        control: false,
        description: "Font weight of the rendered text.",
        name: "weight",
        type: {
            required: false,
        },
        table: {
            category: "TypographyProps<T>",
            defaultValue: {
                summary: '"regular"',
            },
            tabGroup: "Heading/Body",
            type: {
                summaryParts: ["'bold'", "'light'", "'regular'", "'semibold'"],
            },
        },
    },
} satisfies Record<string, unknown>;
