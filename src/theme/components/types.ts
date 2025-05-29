import { ThemeStyleInterpolation } from "../types";

export type ComponentTokenSet = {
    Button: ButtonTokens;
};
export type ComponentOverrideOptions = {
    [Component in keyof ComponentTokenSet]?:
        | Partial<ComponentTokenSet[Component]>
        | undefined;
};

export type ButtonTokens = {
    "button-radius": number | ThemeStyleInterpolation;
    "button-default-colour-bg": string | ThemeStyleInterpolation;
    "button-default-colour-bg-hover": string | ThemeStyleInterpolation;
    "button-default-colour-text": string | ThemeStyleInterpolation;
    "button-secondary-colour-border": string | ThemeStyleInterpolation;
    "button-secondary-colour-text": string | ThemeStyleInterpolation;
    "button-light-colour-text": string | ThemeStyleInterpolation;
    "button-link-colour-text": string | ThemeStyleInterpolation;
};
