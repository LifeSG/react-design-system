// This file is generated. Do not edit manually.
// Run: npm run storybook:argtypes

export const languageSwitcherExtraArgTypes = {
    "LanguageSwitcherProps.variant": {
        name: "variant",
        control: false,
        table: {
            category: "LanguageSwitcherProps",
            type: {
                summary: "LanguageSwitcherVariant",
            },
        },
    },
    "LanguageSwitcherProps.selectedLanguage": {
        name: "selectedLanguage",
        control: false,
        table: {
            category: "LanguageSwitcherProps",
            type: {
                summary: "LanguageSwitcherCode",
            },
        },
    },
    "LanguageSwitcherProps.onSelectLanguage": {
        name: "onSelectLanguage",
        control: false,
        table: {
            category: "LanguageSwitcherProps",
            type: {
                summary: "((language: LanguageSwitcherCode) => void)",
            },
        },
    },
    "LanguageSwitcherProps.data-testid": {
        name: "data-testid",
        control: false,
        table: {
            category: "LanguageSwitcherProps",
            type: {
                summary: "string",
            },
        },
    },
    LanguageSwitcherCode: {
        name: "LanguageSwitcherCode",
        control: false,
        table: {
            category: "LanguageSwitcherCode",
            type: {
                summary: '"en" | "zh" | "ms" | "ta"',
            },
        },
    },
    LanguageSwitcherVariant: {
        name: "LanguageSwitcherVariant",
        control: false,
        table: {
            category: "LanguageSwitcherVariant",
            type: {
                summary: '"dropdown" | "link-container"',
            },
        },
    },
} satisfies Record<string, unknown>;
