// This file is generated. Do not edit manually.
// Run: npm run storybook:argtypes

export const typographyExtraArgTypes = {
    "TypographyLinkProps.weight": {
        name: "weight",
        description: "The font weight",
        control: false,
        table: {
            category: "TypographyLinkProps",
            type: {
                summary: "TypographyWeight",
            },
        },
    },
    "TypographyLinkProps.external": {
        name: "external",
        description:
            "Displays indicator to signal that link leads to an external site",
        control: false,
        table: {
            category: "TypographyLinkProps",
            type: {
                summary: "boolean",
            },
        },
    },
    "TypographyLinkProps.underlineStyle": {
        name: "underlineStyle",
        description:
            "Toggle text decoration for hyperlinks, underline by default",
        control: false,
        table: {
            category: "TypographyLinkProps",
            type: {
                summary: "TypographyUnderlineStyle",
            },
        },
    },
    TypographyWeight: {
        name: "TypographyWeight",
        control: false,
        table: {
            category: "TypographyWeight",
            type: {
                summary: '"regular" | "semibold" | "bold" | "light"',
            },
        },
    },
    TypographySize: {
        name: "TypographySize",
        control: false,
        table: {
            category: "TypographySize",
            type: {
                summary:
                    'Exclude< FontSize, "form-label" | "form-description" >',
            },
        },
    },
    TypographyProps: {
        name: "TypographyProps<T>",
        control: false,
        table: {
            category: "TypographyProps<T>",
            type: {
                summary:
                    "React.ComponentPropsWithoutRef<T> & { /** The font weight */ weight?: TypographyWeight; /** Specifies if text is displayed inline */ inline?: boolean; /** Specifies if text has a bottom margin */ paragraph?: boolean; /** Specify the number of lines visible, the additional lines will be truncated */ maxLines?: number; /** Overrides rendered element, e.g. `h2` for semantic hierarchy */ as?: T; }",
            },
        },
    },
    TypographyUnderlineStyle: {
        name: "TypographyUnderlineStyle",
        control: false,
        table: {
            category: "TypographyUnderlineStyle",
            type: {
                summary: '"none" | "underline"',
            },
        },
    },
} satisfies Record<string, unknown>;
