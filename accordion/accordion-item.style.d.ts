/// <reference types="react" />
interface StyleProps {
    $isCollapsed?: boolean;
}
export declare const Container: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, StyleProps, never>;
export declare const TitleContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const Title: import("styled-components").StyledComponent<"h3", import("styled-components").DefaultTheme, import("..").TextProps & StyleProps, never>;
export declare const TitleH4: import("styled-components").StyledComponent<"h4", import("styled-components").DefaultTheme, import("..").TextProps & StyleProps, never>;
export declare const ExpandCollapseButton: import("styled-components").StyledComponent<(props: import("../icon-button").IconButtonProps & import("react").RefAttributes<HTMLButtonElement>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>, import("styled-components").DefaultTheme, StyleProps, never>;
export declare const ChevronIcon: import("styled-components").StyledComponent<{
    (props: import("react").SVGProps<SVGSVGElement>): JSX.Element;
    displayName: string;
}, import("styled-components").DefaultTheme, {}, never>;
export declare const Expandable: import("styled-components").StyledComponent<import("react-spring").AnimatedComponent<"div">, import("styled-components").DefaultTheme, StyleProps, never>;
export declare const DescriptionContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export {};
