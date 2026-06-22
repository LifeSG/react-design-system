// This file is generated. Do not edit manually.
// Run: npm run storybook:argtypes

export const componentsExtraArgTypes = {
    V3_ComponentTokenSet: {
        name: "V3_ComponentTokenSet",
        control: false,
        table: {
            category: "V3_ComponentTokenSet",
            type: {
                summary:
                    "{ Button: V3_ButtonTokens; Animation: V3_AnimationTokens; Navbar: V3_NavbarTokens; Footer: V3_FooterTokens; }",
            },
        },
    },
    V3_ComponentOverrideOptions: {
        name: "V3_ComponentOverrideOptions",
        control: false,
        table: {
            category: "V3_ComponentOverrideOptions",
            type: {
                summary:
                    "{ [Component in keyof V3_ComponentTokenSet]?: | Partial<V3_ComponentTokenSet[Component]>; }",
            },
        },
    },
    V3_ButtonTokens: {
        name: "V3_ButtonTokens",
        control: false,
        table: {
            category: "V3_ButtonTokens",
            type: {
                summary:
                    '{ "button-radius": number | ((props: V3_StyledComponentProps) => string); "button-default-colour-bg": | string | ((props: V3_StyledComponentProps) => string); "button-default-colour-bg-hover": | string | ((props: V3_StyledComponentProps) => string); "button-default-colour-text": | string | ((props: V3_StyledComponentProps) => string); "button-secondary-colour-border": | string | ((props: V3_StyledComponentProps) => string); "button-secondary-colour-text": | string | ((props: V3_StyledComponentProps) => string); "button-light-colour-text": | string | ((props: V3_StyledComponentProps) => string); "button-link-colour-text": | string | ((props: V3_StyledComponentProps) => string); }',
            },
        },
    },
    V3_AnimationTokens: {
        name: "V3_AnimationTokens",
        control: false,
        table: {
            category: "V3_AnimationTokens",
            type: {
                summary:
                    '{ "loading-dots-spinner-colour": | string | ((props: V3_StyledComponentProps) => string); }',
            },
        },
    },
    V3_NavbarTokens: {
        name: "V3_NavbarTokens",
        control: false,
        table: {
            category: "V3_NavbarTokens",
            type: {
                summary:
                    '{ "navbar-full-height": | number | string | ((props: V3_StyledComponentProps) => string); "navbar-full-logo-height": | number | string | ((props: V3_StyledComponentProps) => string); "navbar-compressed-height": | number | string | ((props: V3_StyledComponentProps) => string); "navbar-compressed-logo-height": | number | string | ((props: V3_StyledComponentProps) => string); "navbar-mobile-height": | number | string | ((props: V3_StyledComponentProps) => string); "navbar-mobile-logo-height": | number | string | ((props: V3_StyledComponentProps) => string); "navbar-colour-bg": string | ((props: V3_StyledComponentProps) => string); "navbar-colour-icon": string | ((props: V3_StyledComponentProps) => string); "navbar-link-colour-text": | string | ((props: V3_StyledComponentProps) => string); "navbar-link-colour-text-hover": | string | ((props: V3_StyledComponentProps) => string); "navbar-link-colour-text-selected-hover": | string | ((props: V3_StyledComponentProps) => string); }',
            },
        },
    },
    V3_FooterTokens: {
        name: "V3_FooterTokens",
        control: false,
        table: {
            category: "V3_FooterTokens",
            type: {
                summary:
                    '{ "footer-colour-bg": string | ((props: V3_StyledComponentProps) => string); "footer-colour-text": string | ((props: V3_StyledComponentProps) => string); "footer-link-colour-text": | string | ((props: V3_StyledComponentProps) => string); "footer-link-colour-text-hover": | string | ((props: V3_StyledComponentProps) => string); "footer-disclaimer-link-colour-text": | string | ((props: V3_StyledComponentProps) => string); "footer-disclaimer-link-colour-text-hover": | string | ((props: V3_StyledComponentProps) => string); }',
            },
        },
    },
} satisfies Record<string, unknown>;
