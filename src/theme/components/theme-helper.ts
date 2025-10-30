import { StyledComponentProps, getCollection } from "../helpers";
import { ThemeStyleProps } from "../types";
import { A11yPlaygroundComponentTokenSet } from "./specs/a11yplayground-component-token-set";
import { DefaultComponentTokenSet } from "./specs/default-component-token-set";
import { LifeSGComponentTokenSet } from "./specs/lifesg-component-token-set";
import { PAComponentTokenSet } from "./specs/pa-component-token-set";
import { SPFComponentTokenSet } from "./specs/spf-component-token-set";
import { AnimationTokens, ButtonTokens, ComponentTokenSet } from "./types";

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
