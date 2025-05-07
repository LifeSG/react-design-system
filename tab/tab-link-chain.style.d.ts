/// <reference types="react" />
interface LabelStyleProps {
    $active?: boolean;
}
interface ChainStyleProps {
    $fullWidthIndicatorLine?: boolean;
}
interface ChainItemStyleProps {
    $active?: boolean;
}
export declare const Chain: import("styled-components").StyledComponent<"ul", import("styled-components").DefaultTheme, ChainStyleProps, never>;
export declare const ChainItem: import("styled-components").StyledComponent<"li", import("styled-components").DefaultTheme, ChainItemStyleProps, never>;
export declare const ChainLink: import("styled-components").StyledComponent<"button", import("styled-components").DefaultTheme, {}, never>;
export declare const Label: import("styled-components").StyledComponent<"p", import("styled-components").DefaultTheme, import("../text").TextProps & LabelStyleProps, never>;
export declare const BoldLabel: import("styled-components").StyledComponent<"p", import("styled-components").DefaultTheme, import("../text").TextProps & LabelStyleProps, never>;
export declare const CustomFadeWrapper: import("styled-components").StyledComponent<(props: import("../shared/fade-wrapper").FadeWrapperProps & import("react").RefAttributes<import("../shared/fade-wrapper").FadeWrapperRef>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>, import("styled-components").DefaultTheme, {}, never>;
export {};
