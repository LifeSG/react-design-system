// This file is generated. Do not edit manually.
// Run: npm run storybook:argtypes

export const footerExtraArgTypes = {
    "DisclaimerLinks.privacy": {
        name: "privacy",
        control: false,
        table: {
            category: "DisclaimerLinks",
            type: {
                summary: "DisclaimerTextLinkProps",
            },
        },
    },
    "DisclaimerLinks.termsOfUse": {
        name: "termsOfUse",
        control: false,
        table: {
            category: "DisclaimerLinks",
            type: {
                summary: "DisclaimerTextLinkProps",
            },
        },
    },
    "DisclaimerLinks.reportVulnerability": {
        name: "reportVulnerability",
        control: false,
        table: {
            category: "DisclaimerLinks",
            type: {
                summary: "DisclaimerTextLinkProps",
            },
        },
    },
    "FooterLinkProps.data-options": {
        name: "data-options",
        description: "Any custom attributes you would like to pass to the link",
        control: false,
        table: {
            category: "FooterLinkProps<T>",
            type: {
                summary: "T",
            },
        },
    },
    "FooterLinkProps.data-testid": {
        name: "data-testid",
        control: false,
        table: {
            category: "FooterLinkProps<T>",
            type: {
                summary: "string",
            },
        },
    },
    "FooterProps.links": {
        name: "links",
        description:
            "The footer links. Multi array to present in different columns",
        control: false,
        table: {
            category: "FooterProps<T>",
            type: {
                summary: "FooterLinkProps<T>[][]",
            },
        },
    },
    "FooterProps.showDownloadAddon": {
        name: "showDownloadAddon",
        description: "Indicates if the download app icons are to be present",
        control: false,
        table: {
            category: "FooterProps<T>",
            type: {
                summary: "boolean",
            },
        },
    },
    "FooterProps.showResourceAddon": {
        name: "showResourceAddon",
        description:
            "Indicates if additional app resources should be displayed",
        control: false,
        table: {
            category: "FooterProps<T>",
            type: {
                summary: "boolean",
            },
        },
    },
    "FooterProps.children": {
        name: "children",
        description:
            "Custom component. This overrides the logo, links and download section",
        control: false,
        table: {
            category: "FooterProps<T>",
            type: {
                summary: "JSX.Element | JSX.Element[]",
            },
        },
    },
    "FooterProps.disclaimerLinks": {
        name: "disclaimerLinks",
        description: "Custom disclaimer link attributes",
        control: false,
        table: {
            category: "FooterProps<T>",
            type: {
                summary: "DisclaimerLinks",
            },
        },
    },
    "FooterProps.copyrightInfo": {
        name: "copyrightInfo",
        description: "A custom copyright text",
        control: false,
        table: {
            category: "FooterProps<T>",
            type: {
                summary: "string",
            },
        },
    },
    "FooterProps.logoSrc": {
        name: "logoSrc",
        description: "Custom logo source",
        control: false,
        table: {
            category: "FooterProps<T>",
            type: {
                summary: "string",
            },
        },
    },
    "FooterProps.lastUpdated": {
        name: "lastUpdated",
        description:
            "Last updated date value that is displayed in the bottom of the Footer",
        control: false,
        table: {
            category: "FooterProps<T>",
            type: {
                summary: "Date",
            },
        },
    },
    "FooterProps.onFooterLinkClick": {
        name: "onFooterLinkClick",
        control: false,
        table: {
            category: "FooterProps<T>",
            type: {
                summary: "((link: FooterLinkProps<T>) => void)",
            },
        },
    },
    "FooterProps.layout": {
        name: "layout",
        description:
            "Determines if the content of the footer scales with the max width",
        control: false,
        table: {
            category: "FooterProps<T>",
            type: {
                summary: '"default" | "stretch"',
            },
        },
    },
    "FooterProps.id": {
        name: "id",
        control: false,
        table: {
            category: "FooterProps<T>",
            type: {
                summary: "string",
            },
        },
    },
    "FooterProps.data-testid": {
        name: "data-testid",
        control: false,
        table: {
            category: "FooterProps<T>",
            type: {
                summary: "string",
            },
        },
    },
    "FooterProps.className": {
        name: "className",
        control: false,
        table: {
            category: "FooterProps<T>",
            type: {
                summary: "string",
            },
        },
    },
    "FooterProps.hideLogo": {
        name: "hideLogo",
        control: false,
        table: {
            category: "FooterProps<T>",
            type: {
                summary: "boolean",
            },
        },
    },
    DisclaimerTextLinkProps: {
        name: "DisclaimerTextLinkProps",
        control: false,
        table: {
            category: "DisclaimerTextLinkProps",
            type: {
                summary: 'Omit<TypographyLinkProps, "children">',
            },
        },
    },
} satisfies Record<string, unknown>;
