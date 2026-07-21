// This file is generated. Do not edit manually.
// Run: npm run storybook:argtypes

export const typographyExtraArgTypes = {
    "TypographyLinkProps.__inheritedHtmlProps": {
        control: false,
        description: "Inherits props from `HTMLAnchorElement`.",
        name: "",
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
        table: {
            category: "TypographyLinkProps",
            defaultValue: {
                summary: '"underline"',
            },
            tabGroup: "Link",
            type: {
                summary: "'none' | 'underline'",
            },
        },
    },
    "TypographyLinkProps.weight": {
        control: false,
        description: "Font weight of the link text.",
        name: "weight",
        table: {
            category: "TypographyLinkProps",
            defaultValue: {
                summary: '"regular"',
            },
            tabGroup: "Link",
            type: {
                summary: "'bold' | 'light' | 'regular' | 'semibold'",
            },
        },
    },
    TypographyProps: {
        control: false,
        description:
            "Props shared by all non-link typography variants.\n\nThe generic `T` narrows the element type for the `as` prop and ensures\nforwarded HTML attributes match the rendered element.",
        name: "TypographyProps<T>",
        table: {
            category: "TypographyProps<T>",
            tabGroup: "Heading/Body",
            type: {
                summary:
                    'React.ComponentPropsWithoutRef<T> & { /** * Font weight of the rendered text. * * @default "regular" */ weight?: TypographyWeight; /** * Renders the element as an inline `span`. When `true`, the `as` prop * is ignored and `maxLines` clamping is disabled. */ inline?: boolean; /** * Adds a bottom margin to separate the element from following content. */ paragraph?: boolean; /** * Clamps visible text to the given number of lines, truncating the * remainder. * * @remarks Has no effect when `inline` is `true`. */ maxLines?: number; /** * Overrides the rendered HTML element, e.g. `"h2"`. * * @remarks Has no effect when `inline` is `true`. */ as?: T; }',
            },
        },
    },
    "TypographyProps.as": {
        control: false,
        description:
            'Overrides the rendered HTML element, e.g. `"h2"`.\n\nRemarks:\nHas no effect when `inline` is `true`.',
        name: "as",
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
        table: {
            category: "TypographyProps<T>",
            defaultValue: {
                summary: '"regular"',
            },
            tabGroup: "Heading/Body",
            type: {
                summary: "'bold' | 'light' | 'regular' | 'semibold'",
            },
        },
    },
} satisfies Record<string, unknown>;
