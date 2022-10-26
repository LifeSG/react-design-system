/// <reference types="react" />
export declare const INDICATOR_BAR_WIDTH_MOBILE = 10;
export declare const INDICATOR_BAR_MARGIN_RIGHT_MOBILE = 0.5;
export declare const INDICATOR_BAR_FADE_WIDTH_MOBILE = 4;
interface FadeProps {
    backgroundColor: string[];
    position?: "left" | "right";
}
interface IndicatorProps {
    highlighted: boolean;
}
export declare const Wrapper: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const Content: import("styled-components").StyledComponent<"nav", any, {}, never>;
export declare const Fade: import("styled-components").StyledComponent<"div", any, FadeProps, never>;
export declare const Container: import("styled-components").StyledComponent<import("react").ForwardRefExoticComponent<import("../layout").ContentProps & import("react").RefAttributes<HTMLDivElement>>, any, {}, never>;
export declare const IndicatorBar: import("styled-components").StyledComponent<"div", any, IndicatorProps, never>;
export declare const IndicatorTitle: import("styled-components").StyledComponent<"p", any, import("../text").TextProps & IndicatorProps, never>;
export declare const Indicator: import("styled-components").StyledComponent<"div", any, {}, never>;
export {};
