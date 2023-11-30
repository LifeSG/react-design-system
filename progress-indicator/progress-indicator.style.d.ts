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
export declare const Wrapper: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const Content: import("styled-components").StyledComponent<"nav", import("styled-components").DefaultTheme, {}, never>;
export declare const Fade: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, FadeProps, never>;
export declare const Container: import("styled-components").StyledComponent<(props: import("../layout").ContentProps & import("react").RefAttributes<HTMLDivElement>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>, import("styled-components").DefaultTheme, {}, never>;
export declare const IndicatorBar: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, IndicatorProps, never>;
export declare const IndicatorTitle: import("styled-components").StyledComponent<"p", import("styled-components").DefaultTheme, import("../text").TextProps & IndicatorProps, never>;
export declare const Indicator: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export {};
