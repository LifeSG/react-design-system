import { getTokenValue } from "../../shared/styles";
import { StyledComponentProps, getCollection } from "../helpers";
import { DefaultComponents } from "./specs/default-components.tokens";
import { PaComponents } from "./specs/pa-components-tokens";
import { Components, ThemeButtonToken } from "./types";

const ComponentSpec = {
    collections: {
        default: DefaultComponents,
        pa: PaComponents,
    },
    defaultValue: "default",
};

export const getComponentValue = (
    name: keyof Components,
    property: keyof ThemeButtonToken
) => {
    return (
        props: StyledComponentProps
    ): string | ((props: StyledComponentProps) => string) => {
        const theme = props.theme;
        const components: Components = getCollection(
            ComponentSpec,
            theme?.componentScheme
        );
        const value = components[name][property];

        if (theme?.componentOverrides?.[name]?.[property]) {
            return getTokenValue(
                theme?.componentOverrides?.[name]?.[property],
                props
            );
        }

        return getTokenValue(value, props);
    };
};

export const ThemeButton: {
    [key in keyof ThemeButtonToken]: any;
} = {
    "button-radius": getComponentValue("Button", "button-radius"),
    "button-default-colour-bg": getComponentValue(
        "Button",
        "button-default-colour-bg"
    ),
    "button-default-colour-bg-hover": getComponentValue(
        "Button",
        "button-default-colour-bg-hover"
    ),
    "button-default-colour-text": getComponentValue(
        "Button",
        "button-default-colour-text"
    ),
    "button-secondary-colour-border": getComponentValue(
        "Button",
        "button-secondary-colour-border"
    ),
    "button-secondary-colour-text": getComponentValue(
        "Button",
        "button-secondary-colour-text"
    ),
    "button-light-colour-text": getComponentValue(
        "Button",
        "button-light-colour-text"
    ),
    "button-link-colour-text": getComponentValue(
        "Button",
        "button-link-colour-text"
    ),
};
