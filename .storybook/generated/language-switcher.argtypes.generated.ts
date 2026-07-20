// This file is generated. Do not edit manually.
// Run: npm run storybook:argtypes

export const languageSwitcherExtraArgTypes = {
    "LanguageSwitcherCode": {
        "control": false,
        "description": "Code identifying a supported display language.",
        "name": "LanguageSwitcherCode",
        "table": {
            "category": "LanguageSwitcherCode",
            "type": {
                "summary": "'en' | 'zh' | 'ms' | 'ta'"
            }
        }
    },
    "LanguageSwitcherProps.__inheritedHtmlProps": {
        "control": false,
        "description": "Inherits props from `HTMLDivElement`.",
        "name": "",
        "table": {
            "category": "LanguageSwitcherProps",
            "type": {}
        }
    },
    "LanguageSwitcherProps.data-testid": {
        "control": false,
        "name": "data-testid",
        "table": {
            "category": "LanguageSwitcherProps",
            "type": {
                "summary": "string"
            }
        }
    },
    "LanguageSwitcherProps.inert": {
        "control": false,
        "name": "inert",
        "table": {
            "category": "LanguageSwitcherProps",
            "type": {
                "summary": "boolean | string"
            }
        }
    },
    "LanguageSwitcherProps.onSelectLanguage": {
        "control": false,
        "description": "Called when the user selects a language different from `selectedLanguage`.",
        "name": "onSelectLanguage",
        "table": {
            "category": "LanguageSwitcherProps",
            "type": {
                "summary": "(language: LanguageSwitcherCode) => void"
            }
        }
    },
    "LanguageSwitcherProps.selectedLanguage": {
        "control": false,
        "description": "The currently active language code.",
        "name": "selectedLanguage",
        "table": {
            "category": "LanguageSwitcherProps",
            "defaultValue": {
                "summary": "\"en\""
            },
            "type": {
                "summary": "LanguageSwitcherCode"
            }
        }
    },
    "LanguageSwitcherProps.variant": {
        "control": false,
        "description": "Presentation mode.",
        "name": "variant",
        "table": {
            "category": "LanguageSwitcherProps",
            "defaultValue": {
                "summary": "\"dropdown\""
            },
            "type": {
                "summary": "LanguageSwitcherVariant"
            }
        }
    },
    "LanguageSwitcherVariant": {
        "control": false,
        "description": "Presentation mode for the language switcher control.\n\n- `\"dropdown\"` renders a compact select control.\n- `\"link-container\"` renders languages as inline links.",
        "name": "LanguageSwitcherVariant",
        "table": {
            "category": "LanguageSwitcherVariant",
            "type": {
                "summary": "'dropdown' | 'link-container'"
            }
        }
    }
} satisfies Record<string, unknown>;
