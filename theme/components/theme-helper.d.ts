import { StyledComponentProps } from "../helpers";
import { ThemeStyleProps } from "../types";
import { ButtonTokens, ComponentTokenSet } from "./types";
export declare const getComponentTokenValue: <Component extends keyof ComponentTokenSet, Token extends keyof ComponentTokenSet[Component]>(component: Component, token: Token) => (props: StyledComponentProps) => string;
export declare const getTokenValue: <Component extends keyof ComponentTokenSet, Token extends keyof ComponentTokenSet[Component]>(token: ComponentTokenSet[Component][Token], props: ThemeStyleProps) => any;
export declare const ThemeButton: {
    [key in keyof ButtonTokens]: (props: StyledComponentProps) => string;
};
