import { V3_StyledComponentProps } from "../helpers";

export type V3_ComponentTokenSet = {
    Button: V3_ButtonTokens;
    Animation: V3_AnimationTokens;
    Navbar: V3_NavbarTokens;
    Footer: V3_FooterTokens;
};
export type V3_ComponentOverrideOptions = {
    [Component in keyof V3_ComponentTokenSet]?:
        | Partial<V3_ComponentTokenSet[Component]>
        | undefined;
};

export type V3_ButtonTokens = {
    "button-radius": number | ((props: V3_StyledComponentProps) => string);
    "button-default-colour-bg":
        | string
        | ((props: V3_StyledComponentProps) => string);
    "button-default-colour-bg-hover":
        | string
        | ((props: V3_StyledComponentProps) => string);
    "button-default-colour-text":
        | string
        | ((props: V3_StyledComponentProps) => string);
    "button-secondary-colour-border":
        | string
        | ((props: V3_StyledComponentProps) => string);
    "button-secondary-colour-text":
        | string
        | ((props: V3_StyledComponentProps) => string);
    "button-light-colour-text":
        | string
        | ((props: V3_StyledComponentProps) => string);
    "button-link-colour-text":
        | string
        | ((props: V3_StyledComponentProps) => string);
};

export type V3_AnimationTokens = {
    "loading-dots-spinner-colour":
        | string
        | ((props: V3_StyledComponentProps) => string);
};

export type V3_NavbarTokens = {
    "navbar-full-height":
        | number
        | string
        | ((props: V3_StyledComponentProps) => string);
    "navbar-full-logo-height":
        | number
        | string
        | ((props: V3_StyledComponentProps) => string);
    "navbar-compressed-height":
        | number
        | string
        | ((props: V3_StyledComponentProps) => string);
    "navbar-compressed-logo-height":
        | number
        | string
        | ((props: V3_StyledComponentProps) => string);
    "navbar-mobile-height":
        | number
        | string
        | ((props: V3_StyledComponentProps) => string);
    "navbar-mobile-logo-height":
        | number
        | string
        | ((props: V3_StyledComponentProps) => string);
    "navbar-colour-bg": string | ((props: V3_StyledComponentProps) => string);
    "navbar-colour-icon": string | ((props: V3_StyledComponentProps) => string);
    "navbar-link-colour-text":
        | string
        | ((props: V3_StyledComponentProps) => string);
    "navbar-link-colour-text-hover":
        | string
        | ((props: V3_StyledComponentProps) => string);
    "navbar-link-colour-text-selected-hover":
        | string
        | ((props: V3_StyledComponentProps) => string);
};

export type V3_FooterTokens = {
    "footer-colour-bg": string | ((props: V3_StyledComponentProps) => string);
    "footer-colour-text": string | ((props: V3_StyledComponentProps) => string);
    "footer-link-colour-text":
        | string
        | ((props: V3_StyledComponentProps) => string);
    "footer-link-colour-text-hover":
        | string
        | ((props: V3_StyledComponentProps) => string);
    "footer-disclaimer-link-colour-text":
        | string
        | ((props: V3_StyledComponentProps) => string);
    "footer-disclaimer-link-colour-text-hover":
        | string
        | ((props: V3_StyledComponentProps) => string);
};
