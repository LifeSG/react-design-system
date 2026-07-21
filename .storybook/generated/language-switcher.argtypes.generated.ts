// This file is generated. Do not edit manually.
// Run: npm run storybook:argtypes

export const languageSwitcherExtraArgTypes = {
    LanguageSwitcherCode: {
        control: false,
        description: "Code identifying a supported display language.",
        name: "LanguageSwitcherCode",
        type: {},
        table: {
            category: "LanguageSwitcherCode",
            type: {
                summary: "'en' | 'ms' | 'ta' | 'zh'",
            },
        },
    },
    "LanguageSwitcherProps.__inheritedHtmlProps": {
        control: false,
        description: "Inherits props from `HTMLDivElement`.",
        name: "",
        type: {},
        table: {
            category: "LanguageSwitcherProps",
            type: {},
        },
    },
    "LanguageSwitcherProps.data-testid": {
        control: false,
        name: "data-testid",
        type: {
            required: false,
        },
        table: {
            category: "LanguageSwitcherProps",
            type: {
                summary: "string",
            },
        },
    },
    "LanguageSwitcherProps.onSelectLanguage": {
        control: false,
        description:
            "Called when the user selects a language different from `selectedLanguage`.",
        name: "onSelectLanguage",
        type: {
            required: false,
        },
        table: {
            category: "LanguageSwitcherProps",
            type: {
                summary: "(language: LanguageSwitcherCode) => void",
            },
        },
    },
    "LanguageSwitcherProps.selectedLanguage": {
        control: false,
        description: "The currently active language code.",
        name: "selectedLanguage",
        type: {
            required: false,
        },
        table: {
            category: "LanguageSwitcherProps",
            defaultValue: {
                summary: '"en"',
            },
            type: {
                summaryParts: ["'en'", "'ms'", "'ta'", "'zh'"],
            },
        },
    },
    "LanguageSwitcherProps.variant": {
        control: false,
        description: "Presentation mode.",
        name: "variant",
        type: {
            required: false,
        },
        table: {
            category: "LanguageSwitcherProps",
            defaultValue: {
                summary: '"dropdown"',
            },
            type: {
                summaryParts: ["'dropdown'", "'link-container'"],
            },
        },
    },
} satisfies Record<string, unknown>;
