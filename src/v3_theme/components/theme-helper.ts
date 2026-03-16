import type { V3_StyledComponentProps } from "../helpers";
import { getCollection } from "../helpers";
import type { V3_ThemeStyleProps } from "../types";
import { V3_A11yPlaygroundComponentTokenSet } from "./specs/a11yplayground-component-token-set";
import { V3_DefaultComponentTokenSet } from "./specs/default-component-token-set";
import { V3_LifeSGComponentTokenSet } from "./specs/lifesg-component-token-set";
import { V3_PAComponentTokenSet } from "./specs/pa-component-token-set";
import { V3_SPFComponentTokenSet } from "./specs/spf-component-token-set";
import type {
    V3_AnimationTokens,
    V3_ButtonTokens,
    V3_ComponentTokenSet,
    V3_FooterTokens,
    V3_NavbarTokens,
} from "./types";

const V3_ComponentTokenSpec = {
    collections: {
        default: V3_DefaultComponentTokenSet,
        pa: V3_PAComponentTokenSet,
        a11yplayground: V3_A11yPlaygroundComponentTokenSet,
        lifesg: V3_LifeSGComponentTokenSet,
        spf: V3_SPFComponentTokenSet,
    },
    defaultValue: "default",
};

export const getComponentTokenValue = <
    Component extends keyof V3_ComponentTokenSet,
    Token extends keyof V3_ComponentTokenSet[Component]
>(
    component: Component,
    token: Token
) => {
    return (props: V3_StyledComponentProps): string => {
        const theme = props.theme;
        const components: V3_ComponentTokenSet = getCollection(
            V3_ComponentTokenSpec,
            theme?.componentScheme
        );

        const componentToken: V3_ComponentTokenSet[Component][Token] =
            theme?.componentOverrides?.[component]?.[token] ||
            components[component][token];
        return getTokenValue(componentToken, props);
    };
};

export const getTokenValue = <
    Component extends keyof V3_ComponentTokenSet,
    Token extends keyof V3_ComponentTokenSet[Component]
>(
    token: V3_ComponentTokenSet[Component][Token],
    props: V3_ThemeStyleProps
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

export const V3_ThemeButton: {
    [key in keyof V3_ButtonTokens]: (props: V3_StyledComponentProps) => string;
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

export const V3_ThemeAnimation: {
    [key in keyof V3_AnimationTokens]: (
        props: V3_StyledComponentProps
    ) => string;
} = {
    "loading-dots-spinner-colour": getComponentTokenValue(
        "Animation",
        "loading-dots-spinner-colour"
    ),
};

export const V3_ThemeNavbar: {
    [key in keyof V3_NavbarTokens]: (props: V3_StyledComponentProps) => string;
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

export const V3_ThemeFooter: {
    [key in keyof V3_FooterTokens]: (props: V3_StyledComponentProps) => string;
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
