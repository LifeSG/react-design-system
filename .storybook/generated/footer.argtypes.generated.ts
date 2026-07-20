// This file is generated. Do not edit manually.
// Run: npm run storybook:argtypes

export const footerExtraArgTypes = {
    "DisclaimerLinks.privacy": {
        "control": false,
        "name": "privacy",
        "table": {
            "category": "DisclaimerLinks",
            "type": {
                "summary": "DisclaimerTextLinkProps"
            }
        }
    },
    "DisclaimerLinks.reportVulnerability": {
        "control": false,
        "name": "reportVulnerability",
        "table": {
            "category": "DisclaimerLinks",
            "type": {
                "summary": "DisclaimerTextLinkProps"
            }
        }
    },
    "DisclaimerLinks.termsOfUse": {
        "control": false,
        "name": "termsOfUse",
        "table": {
            "category": "DisclaimerLinks",
            "type": {
                "summary": "DisclaimerTextLinkProps"
            }
        }
    },
    "DisclaimerTextLinkProps.external": {
        "control": false,
        "description": "Appends an external-link icon after the link text to signal that the\ndestination is outside the current site.",
        "name": "external",
        "table": {
            "category": "DisclaimerTextLinkProps",
            "type": {
                "summary": "false | true"
            }
        }
    },
    "DisclaimerTextLinkProps.inert": {
        "control": false,
        "name": "inert",
        "table": {
            "category": "DisclaimerTextLinkProps",
            "type": {
                "summary": "string | boolean"
            }
        }
    },
    "DisclaimerTextLinkProps.underlineStyle": {
        "control": false,
        "description": "Text-decoration style for the link.",
        "name": "underlineStyle",
        "table": {
            "category": "DisclaimerTextLinkProps",
            "defaultValue": {
                "summary": "\"underline\""
            },
            "type": {
                "summary": "'none' | 'underline'"
            }
        }
    },
    "DisclaimerTextLinkProps.weight": {
        "control": false,
        "description": "Font weight of the link text.",
        "name": "weight",
        "table": {
            "category": "DisclaimerTextLinkProps",
            "defaultValue": {
                "summary": "\"regular\""
            },
            "type": {
                "summary": "'light' | 'bold' | 'regular' | 'semibold'"
            }
        }
    },
    "FooterLinkProps.data-options": {
        "control": false,
        "description": "Any custom attributes you would like to pass to the link",
        "name": "data-options",
        "table": {
            "category": "FooterLinkProps<T>",
            "type": {
                "summary": "T"
            }
        }
    },
    "FooterLinkProps.data-testid": {
        "control": false,
        "name": "data-testid",
        "table": {
            "category": "FooterLinkProps<T>",
            "type": {
                "summary": "string"
            }
        }
    },
    "FooterLinkProps.external": {
        "control": false,
        "description": "Appends an external-link icon after the link text to signal that the\ndestination is outside the current site.",
        "name": "external",
        "table": {
            "category": "FooterLinkProps<T>",
            "type": {
                "summary": "boolean"
            }
        }
    },
    "FooterLinkProps.inert": {
        "control": false,
        "name": "inert",
        "table": {
            "category": "FooterLinkProps<T>",
            "type": {
                "summary": "boolean | string"
            }
        }
    },
    "FooterLinkProps.underlineStyle": {
        "control": false,
        "description": "Text-decoration style for the link.",
        "name": "underlineStyle",
        "table": {
            "category": "FooterLinkProps<T>",
            "defaultValue": {
                "summary": "\"underline\""
            },
            "type": {
                "summary": "TypographyUnderlineStyle"
            }
        }
    },
    "FooterLinkProps.weight": {
        "control": false,
        "description": "Font weight of the link text.",
        "name": "weight",
        "table": {
            "category": "FooterLinkProps<T>",
            "defaultValue": {
                "summary": "\"regular\""
            },
            "type": {
                "summary": "TypographyWeight"
            }
        }
    },
    "FooterProps.children": {
        "control": false,
        "description": "Custom component. This overrides the logo, links and download section",
        "name": "children",
        "table": {
            "category": "FooterProps<T>",
            "type": {
                "summary": "JSX.Element | JSX.Element[]"
            }
        }
    },
    "FooterProps.className": {
        "control": false,
        "name": "className",
        "table": {
            "category": "FooterProps<T>",
            "type": {
                "summary": "string"
            }
        }
    },
    "FooterProps.copyrightInfo": {
        "control": false,
        "description": "A custom copyright text",
        "name": "copyrightInfo",
        "table": {
            "category": "FooterProps<T>",
            "type": {
                "summary": "string"
            }
        }
    },
    "FooterProps.data-testid": {
        "control": false,
        "name": "data-testid",
        "table": {
            "category": "FooterProps<T>",
            "type": {
                "summary": "string"
            }
        }
    },
    "FooterProps.disclaimerLinks": {
        "control": false,
        "description": "Override attributes for the built-in disclaimer links.\n\nEach supplied key is merged with the theme defaults. Omitted keys fall\nback to the default URLs for the active theme.",
        "name": "disclaimerLinks",
        "table": {
            "category": "FooterProps<T>",
            "type": {
                "summary": "DisclaimerLinks"
            }
        }
    },
    "FooterProps.hideLogo": {
        "control": false,
        "description": "Suppresses the logo even when a `logoSrc` or a theme-based logo URL is available.",
        "name": "hideLogo",
        "table": {
            "category": "FooterProps<T>",
            "type": {
                "summary": "boolean"
            }
        }
    },
    "FooterProps.id": {
        "control": false,
        "name": "id",
        "table": {
            "category": "FooterProps<T>",
            "type": {
                "summary": "string"
            }
        }
    },
    "FooterProps.lastUpdated": {
        "control": false,
        "description": "Date displayed in the copyright line as \"Last updated D MMMM YYYY\".\n\nRemarks:\nFalls back to the current date when omitted.",
        "name": "lastUpdated",
        "table": {
            "category": "FooterProps<T>",
            "type": {
                "summary": "Date"
            }
        }
    },
    "FooterProps.layout": {
        "control": false,
        "description": "Controls whether the footer content is constrained to a maximum width or\nstretches to fill the full viewport width.",
        "name": "layout",
        "table": {
            "category": "FooterProps<T>",
            "defaultValue": {
                "summary": "\"default\""
            },
            "type": {
                "summary": "\"default\" | \"stretch\""
            }
        }
    },
    "FooterProps.links": {
        "control": false,
        "description": "The footer links. Multi array to present in different columns",
        "name": "links",
        "table": {
            "category": "FooterProps<T>",
            "type": {
                "summary": "FooterLinkProps<T>[][]"
            }
        }
    },
    "FooterProps.logoAlt": {
        "control": false,
        "description": "Custom logo alt text",
        "name": "logoAlt",
        "table": {
            "category": "FooterProps<T>",
            "type": {
                "summary": "string"
            }
        }
    },
    "FooterProps.logoSrc": {
        "control": false,
        "description": "Custom logo source",
        "name": "logoSrc",
        "table": {
            "category": "FooterProps<T>",
            "type": {
                "summary": "string"
            }
        }
    },
    "FooterProps.onFooterLinkClick": {
        "control": false,
        "description": "Called when a footer navigation link is clicked.\n\nReceives the full `FooterLinkProps` for the clicked link. If the link\ndefines its own `onClick` handler, that handler takes priority and\n`onFooterLinkClick` is not called.",
        "name": "onFooterLinkClick",
        "table": {
            "category": "FooterProps<T>",
            "type": {
                "summary": "(link: FooterLinkProps<T>) => void"
            }
        }
    },
    "FooterProps.showDownloadAddon": {
        "control": false,
        "description": "Indicates if the download app icons are to be present",
        "name": "showDownloadAddon",
        "table": {
            "category": "FooterProps<T>",
            "type": {
                "summary": "boolean"
            }
        }
    },
    "FooterProps.showResourceAddon": {
        "control": false,
        "description": "Indicates if additional app resources should be displayed.\n\nWhen both `showDownloadAddon` and `showResourceAddon` are `true`,\n`showDownloadAddon` takes priority and the resource add-on is not rendered.",
        "name": "showResourceAddon",
        "table": {
            "category": "FooterProps<T>",
            "type": {
                "summary": "boolean"
            }
        }
    }
} satisfies Record<string, unknown>;
