import type { V3_StyledComponentProps } from "../helpers";
import type { V3_ThemeStyleProps } from "../types";
import type { V3_AnimationTokens, V3_ButtonTokens, V3_ComponentTokenSet, V3_FooterTokens, V3_NavbarTokens } from "./types";
export declare const getComponentTokenValue: <Component extends keyof V3_ComponentTokenSet, Token extends keyof V3_ComponentTokenSet[Component]>(component: Component, token: Token) => (props: V3_StyledComponentProps) => string;
export declare const getTokenValue: <Component extends keyof V3_ComponentTokenSet, Token extends keyof V3_ComponentTokenSet[Component]>(token: V3_ComponentTokenSet[Component][Token], props: V3_ThemeStyleProps) => any;
export declare const V3_ThemeButton: {
    [key in keyof V3_ButtonTokens]: (props: V3_StyledComponentProps) => string;
};
export declare const V3_ThemeAnimation: {
    [key in keyof V3_AnimationTokens]: (props: V3_StyledComponentProps) => string;
};
export declare const V3_ThemeNavbar: {
    [key in keyof V3_NavbarTokens]: (props: V3_StyledComponentProps) => string;
};
export declare const V3_ThemeFooter: {
    [key in keyof V3_FooterTokens]: (props: V3_StyledComponentProps) => string;
};
