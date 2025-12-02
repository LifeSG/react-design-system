import { StyledComponentProps, getCollection } from "../helpers";
import { ThemeStyleProps } from "../types";
import { A11yPlaygroundComponentTokenSet } from "./specs/a11yplayground-component-token-set";
import { DefaultComponentTokenSet } from "./specs/default-component-token-set";
import { LifeSGComponentTokenSet } from "./specs/lifesg-component-token-set";
import { PAComponentTokenSet } from "./specs/pa-component-token-set";
import { SPFComponentTokenSet } from "./specs/spf-component-token-set";
import {
    AnimationTokens,
    ButtonTokens,
    ComponentTokenSet,
    FooterTokens,
    NavbarTokens,
    ToggleTokens,
} from "./types";

const ComponentTokenSpec = {
    collections: {
        default: DefaultComponentTokenSet,
        pa: PAComponentTokenSet,
        a11yplayground: A11yPlaygroundComponentTokenSet,
        lifesg: LifeSGComponentTokenSet,
        spf: SPFComponentTokenSet,
    },
    defaultValue: "default",
};

export const getComponentTokenValue = <
    Component extends keyof ComponentTokenSet,
    Token extends keyof ComponentTokenSet[Component]
>(
    component: Component,
    token: Token
) => {
    return (props: StyledComponentProps): string => {
        const theme = props.theme;
        const components: ComponentTokenSet = getCollection(
            ComponentTokenSpec,
            theme?.componentScheme
        );

        return getTokenValue(
            theme?.componentOverrides?.[component]?.[token] ||
                components[component][token],
            props
        );
    };
};

export const getTokenValue = <
    Component extends keyof ComponentTokenSet,
    Token extends keyof ComponentTokenSet[Component]
>(
    token: ComponentTokenSet[Component][Token],
    props: ThemeStyleProps
) => {
    switch (typeof token) {
        case "function":
            return token(props);
        case "number":
            return token + "px";
        case "string":
            return token;
    }
};

export const ThemeButton: {
    [key in keyof ButtonTokens]: (props: StyledComponentProps) => string;
} = {
    "button-radius": getComponentTokenValue("Button", "button-radius"),
    "button-default-colour-bg": getComponentTokenValue(
        "Button",
        "button-default-colour-bg"
    ),
    "button-default-colour-bg-hover": getComponentTokenValue(
        "Button",
        "button-default-colour-bg-hover"
    ),
    "button-default-colour-text": getComponentTokenValue(
        "Button",
        "button-default-colour-text"
    ),
    "button-secondary-colour-border": getComponentTokenValue(
        "Button",
        "button-secondary-colour-border"
    ),
    "button-secondary-colour-text": getComponentTokenValue(
        "Button",
        "button-secondary-colour-text"
    ),
    "button-light-colour-text": getComponentTokenValue(
        "Button",
        "button-light-colour-text"
    ),
    "button-link-colour-text": getComponentTokenValue(
        "Button",
        "button-link-colour-text"
    ),
};

export const ThemeAnimation: {
    [key in keyof AnimationTokens]: (props: StyledComponentProps) => string;
} = {
    "loading-dots-spinner-colour": getComponentTokenValue(
        "Animation",
        "loading-dots-spinner-colour"
    ),
};

export const ThemeNavbar: {
    [key in keyof NavbarTokens]: (props: StyledComponentProps) => string;
} = {
    "navbar-full-height": getComponentTokenValue(
        "Navbar",
        "navbar-full-height"
    ),
    "navbar-full-logo-height": getComponentTokenValue(
        "Navbar",
        "navbar-full-logo-height"
    ),
    "navbar-compressed-height": getComponentTokenValue(
        "Navbar",
        "navbar-compressed-height"
    ),
    "navbar-compressed-logo-height": getComponentTokenValue(
        "Navbar",
        "navbar-compressed-logo-height"
    ),
    "navbar-mobile-height": getComponentTokenValue(
        "Navbar",
        "navbar-mobile-height"
    ),
    "navbar-mobile-logo-height": getComponentTokenValue(
        "Navbar",
        "navbar-mobile-logo-height"
    ),
    "navbar-colour-bg": getComponentTokenValue("Navbar", "navbar-colour-bg"),
    "navbar-colour-icon": getComponentTokenValue(
        "Navbar",
        "navbar-colour-icon"
    ),
    "navbar-link-colour-text": getComponentTokenValue(
        "Navbar",
        "navbar-link-colour-text"
    ),
    "navbar-link-colour-text-hover": getComponentTokenValue(
        "Navbar",
        "navbar-link-colour-text-hover"
    ),
    "navbar-link-colour-text-selected-hover": getComponentTokenValue(
        "Navbar",
        "navbar-link-colour-text-selected-hover"
    ),
};

export const ThemeFooter: {
    [key in keyof FooterTokens]: (props: StyledComponentProps) => string;
} = {
    "footer-colour-bg": getComponentTokenValue("Footer", "footer-colour-bg"),
    "footer-colour-text": getComponentTokenValue(
        "Footer",
        "footer-colour-text"
    ),
    "footer-link-colour-text": getComponentTokenValue(
        "Footer",
        "footer-link-colour-text"
    ),
    "footer-link-colour-text-hover": getComponentTokenValue(
        "Footer",
        "footer-link-colour-text-hover"
    ),
    "footer-disclaimer-link-colour-text": getComponentTokenValue(
        "Footer",
        "footer-disclaimer-link-colour-text"
    ),
    "footer-disclaimer-link-colour-text-hover": getComponentTokenValue(
        "Footer",
        "footer-disclaimer-link-colour-text-hover"
    ),
};

export const ThemeToggle: {
    [key in keyof ToggleTokens]: (props: StyledComponentProps) => string;
} = {
    "toggle-selected-colour-text": getComponentTokenValue(
        "Toggle",
        "toggle-selected-colour-text"
    ),
};
