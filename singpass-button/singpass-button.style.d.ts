import { SingpassButtonStyleType } from "./types";
export type MainButtonSize = "default" | "small" | "large";
export interface MainStyleProps {
    $buttonStyle: SingpassButtonStyleType;
    $buttonSizeStyle?: MainButtonSize | undefined;
}
export declare const Main: import("styled-components").StyledComponent<"button", import("styled-components").DefaultTheme, MainStyleProps, never>;
interface SvgContainerProps {
    $buttonSizeStyle?: MainButtonSize | undefined;
}
export declare const SvgContainer: import("styled-components").StyledComponent<"span", import("styled-components").DefaultTheme, SvgContainerProps, never>;
export {};
