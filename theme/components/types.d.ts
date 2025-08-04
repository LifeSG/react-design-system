import { StyledComponentProps } from "../helpers";
export type ComponentTokenSet = {
    Button: ButtonTokens;
};
export type ComponentOverrideOptions = {
    [Component in keyof ComponentTokenSet]?: Partial<ComponentTokenSet[Component]> | undefined;
};
export type ButtonTokens = {
    "button-radius": number | ((props: StyledComponentProps) => string);
    "button-default-colour-bg": string | ((props: StyledComponentProps) => string);
    "button-default-colour-bg-hover": string | ((props: StyledComponentProps) => string);
    "button-default-colour-text": string | ((props: StyledComponentProps) => string);
    "button-secondary-colour-border": string | ((props: StyledComponentProps) => string);
    "button-secondary-colour-text": string | ((props: StyledComponentProps) => string);
    "button-light-colour-text": string | ((props: StyledComponentProps) => string);
    "button-link-colour-text": string | ((props: StyledComponentProps) => string);
};
