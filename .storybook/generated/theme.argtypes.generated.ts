// This file is generated. Do not edit manually.
// Run: npm run storybook:argtypes

export const themeExtraArgTypes = {
    ThemeType: {
        name: "ThemeType",
        control: false,
        table: {
            category: "ThemeType",
            type: {
                summary: "(typeof THEME_TYPES)[number]",
            },
        },
    },
    ThemeMode: {
        name: "ThemeMode",
        control: false,
        table: {
            category: "ThemeMode",
            type: {
                summary: '"light" | "dark" | "auto"',
            },
        },
    },
    ResolvedThemeMode: {
        name: "ResolvedThemeMode",
        control: false,
        table: {
            category: "ResolvedThemeMode",
            type: {
                summary: '"light" | "dark"',
            },
        },
    },
    FontSize: {
        name: "FontSize",
        control: false,
        table: {
            category: "FontSize",
            type: {
                summary:
                    '| "heading-xxl" | "heading-xl" | "heading-lg" | "heading-md" | "heading-sm" | "heading-xs" | "body-baseline" | "body-md" | "body-sm" | "body-xs" | "form-label" | "form-description"',
            },
        },
    },
    FontWeight: {
        name: "FontWeight",
        control: false,
        table: {
            category: "FontWeight",
            type: {
                summary: '"light" | "regular" | "semibold" | "bold"',
            },
        },
    },
    BreakpointCSSVariableString: {
        name: "BreakpointCSSVariableString",
        control: false,
        table: {
            category: "BreakpointCSSVariableString",
            type: {
                summary: "ValueOf<typeof Breakpoint>",
            },
        },
    },
    BorderCSSVariableString: {
        name: "BorderCSSVariableString",
        control: false,
        table: {
            category: "BorderCSSVariableString",
            type: {
                summary: "ValueOf<typeof Border>",
            },
        },
    },
    ComponentTokenCSSVariableString: {
        name: "ComponentTokenCSSVariableString",
        control: false,
        table: {
            category: "ComponentTokenCSSVariableString",
            type: {
                summary:
                    "| ValueOf<typeof ComponentToken.Animation> | ValueOf<typeof ComponentToken.Button> | ValueOf<typeof ComponentToken.Footer> | ValueOf<typeof ComponentToken.Navbar>",
            },
        },
    },
    FontSpecCSSVariableString: {
        name: "FontSpecCSSVariableString",
        control: false,
        table: {
            category: "FontSpecCSSVariableString",
            type: {
                summary: "ValueOf<typeof FontSpec>",
            },
        },
    },
    MotionCSSVariableString: {
        name: "MotionCSSVariableString",
        control: false,
        table: {
            category: "MotionCSSVariableString",
            type: {
                summary: "ValueOf<typeof Motion>",
            },
        },
    },
    PrimitiveColourCSSVariableString: {
        name: "PrimitiveColourCSSVariableString",
        control: false,
        table: {
            category: "PrimitiveColourCSSVariableString",
            type: {
                summary: "ValueOf<typeof PrimitiveColours>",
            },
        },
    },
    RadiusCSSVariableString: {
        name: "RadiusCSSVariableString",
        control: false,
        table: {
            category: "RadiusCSSVariableString",
            type: {
                summary: "ValueOf<typeof Radius>",
            },
        },
    },
    SemanticColourCSSVariableString: {
        name: "SemanticColourCSSVariableString",
        control: false,
        table: {
            category: "SemanticColourCSSVariableString",
            type: {
                summary: "ValueOf<typeof SemanticColours>",
            },
        },
    },
    ColourCSSVariableString: {
        name: "ColourCSSVariableString",
        control: false,
        table: {
            category: "ColourCSSVariableString",
            type: {
                summary:
                    "| PrimitiveColourCSSVariableString | SemanticColourCSSVariableString",
            },
        },
    },
    ShadowCSSVariableString: {
        name: "ShadowCSSVariableString",
        control: false,
        table: {
            category: "ShadowCSSVariableString",
            type: {
                summary: "ValueOf<typeof Shadow>",
            },
        },
    },
    SpacingCSSVariableString: {
        name: "SpacingCSSVariableString",
        control: false,
        table: {
            category: "SpacingCSSVariableString",
            type: {
                summary: "ValueOf<typeof Spacing>",
            },
        },
    },
    CSSVariableString: {
        name: "CSSVariableString",
        control: false,
        table: {
            category: "CSSVariableString",
            type: {
                summary:
                    "| BreakpointCSSVariableString | BorderCSSVariableString | ColourCSSVariableString | ComponentTokenCSSVariableString | FontSpecCSSVariableString | MotionCSSVariableString | RadiusCSSVariableString | ShadowCSSVariableString | SpacingCSSVariableString",
            },
        },
    },
    ExtractCleanCSSVariableName: {
        name: "ExtractCleanCSSVariableName<T>",
        control: false,
        table: {
            category: "ExtractCleanCSSVariableName<T>",
            type: {
                summary: "T extends `var(${infer Name})` ? Name : never",
            },
        },
    },
    CSSVariableKey: {
        name: "CSSVariableKey",
        control: false,
        table: {
            category: "CSSVariableKey",
            type: {
                summary: "ExtractCleanCSSVariableName<CSSVariableString>",
            },
        },
    },
} satisfies Record<string, unknown>;
