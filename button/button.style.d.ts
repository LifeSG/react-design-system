/// <reference types="react" />
export type MainButtonStyle = "default" | "disabled" | "secondary" | "light" | "link";
export type MainButtonSize = "default" | "small" | "large";
export interface MainStyleProps {
    $buttonStyle: MainButtonStyle;
    $buttonSizeStyle?: MainButtonSize | undefined;
    $buttonIsDanger?: boolean;
}
export declare const Main: import("styled-components").StyledComponent<"button", import("styled-components").DefaultTheme, MainStyleProps, never>;
export declare const Spinner: import("styled-components").StyledComponent<({ color, className, size, }: import("../shared/component-loading-spinner/component-loading-spinner").ComponentLoadingSpinnerProps) => JSX.Element, import("styled-components").DefaultTheme, {}, never>;
