import { StyledComponentProps } from "../helpers";

export type ComponentTokenSet = {
    Button: ButtonTokens;
    Animation: AnimationTokens;
    Navbar: NavbarTokens;
    Footer: FooterTokens;
};
export type ComponentOverrideOptions = {
    [Component in keyof ComponentTokenSet]?:
        | Partial<ComponentTokenSet[Component]>
        | undefined;
};

export type ButtonTokens = {
    "button-radius": number | ((props: StyledComponentProps) => string);
    "button-default-colour-bg":
        | string
        | ((props: StyledComponentProps) => string);
    "button-default-colour-bg-hover":
        | string
        | ((props: StyledComponentProps) => string);
    "button-default-colour-text":
        | string
        | ((props: StyledComponentProps) => string);
    "button-secondary-colour-border":
        | string
        | ((props: StyledComponentProps) => string);
    "button-secondary-colour-text":
        | string
        | ((props: StyledComponentProps) => string);
    "button-light-colour-text":
        | string
        | ((props: StyledComponentProps) => string);
    "button-link-colour-text":
        | string
        | ((props: StyledComponentProps) => string);
};

export type AnimationTokens = {
    "loading-dots-spinner-colour":
        | string
        | ((props: StyledComponentProps) => string);
};

export type NavbarTokens = {
    "navbar-full-height":
        | number
        | string
        | ((props: StyledComponentProps) => string);
    "navbar-full-logo-height":
        | number
        | string
        | ((props: StyledComponentProps) => string);
    "navbar-compressed-height":
        | number
        | string
        | ((props: StyledComponentProps) => string);
    "navbar-compressed-logo-height":
        | number
        | string
        | ((props: StyledComponentProps) => string);
    "navbar-mobile-height":
        | number
        | string
        | ((props: StyledComponentProps) => string);
    "navbar-mobile-logo-height":
        | number
        | string
        | ((props: StyledComponentProps) => string);
    "navbar-colour-bg": string | ((props: StyledComponentProps) => string);
    "navbar-colour-icon": string | ((props: StyledComponentProps) => string);
    "navbar-link-colour-text":
        | string
        | ((props: StyledComponentProps) => string);
    "navbar-link-colour-text-hover":
        | string
        | ((props: StyledComponentProps) => string);
    "navbar-link-colour-text-selected-hover":
        | string
        | ((props: StyledComponentProps) => string);
};

export type FooterTokens = {
    "footer-colour-bg": string | ((props: StyledComponentProps) => string);
    "footer-colour-text": string | ((props: StyledComponentProps) => string);
    "footer-link-colour-text":
        | string
        | ((props: StyledComponentProps) => string);
    "footer-link-colour-text-hover":
        | string
        | ((props: StyledComponentProps) => string);
    "footer-disclaimer-link-colour-text":
        | string
        | ((props: StyledComponentProps) => string);
    "footer-disclaimer-link-colour-text-hover":
        | string
        | ((props: StyledComponentProps) => string);
};
