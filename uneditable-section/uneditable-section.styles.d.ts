interface WrapperStyleProps {
    $background: boolean;
}
interface ContentStyleProps {
    $stretch: boolean | undefined;
}
export declare const Wrapper: import("styled-components").StyledComponent<(props: import("../layout").ContentProps & import("react").RefAttributes<HTMLDivElement>) => import("react").ReactElement | null, import("styled-components").DefaultTheme, WrapperStyleProps, never>;
export declare const Title: import("styled-components").StyledComponent<keyof JSX.IntrinsicElements, import("styled-components").DefaultTheme, import("../typography").TypographyProps & ContentStyleProps, never>;
export declare const Description: import("styled-components").StyledComponent<"p", import("styled-components").DefaultTheme, import("../typography").TypographyProps & ContentStyleProps, never>;
export declare const CustomSection: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, ContentStyleProps, never>;
export declare const GridUl: import("styled-components").StyledComponent<"ul", import("styled-components").DefaultTheme, ContentStyleProps, never>;
export {};
