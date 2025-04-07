/// <reference types="react" />
interface FadeProps {
    $backgroundColor?: string[];
    $position?: "left" | "right";
    $showIndicator?: boolean;
}
interface IndicatorButtonProps {
    $position?: "left" | "right";
}
export declare const Wrapper: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const Fade: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, FadeProps, never>;
export declare const Content: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const FadeIndicatorButton: import("styled-components").StyledComponent<(props: import("../clickable-icon").ClickableIconProps & import("react").RefAttributes<HTMLButtonElement>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>, import("styled-components").DefaultTheme, IndicatorButtonProps, never>;
export {};
