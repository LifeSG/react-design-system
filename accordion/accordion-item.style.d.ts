/// <reference types="react" />
interface StyleProps {
    $isCollapsed?: boolean;
}
export declare const Container: import("styled-components").StyledComponent<"div", any, StyleProps, never>;
export declare const TitleContainer: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const Title: import("styled-components").StyledComponent<"h3", any, import("..").TextProps & StyleProps, never>;
export declare const TitleH4: import("styled-components").StyledComponent<"h4", any, import("..").TextProps & StyleProps, never>;
export declare const ExpandCollapseButton: import("styled-components").StyledComponent<import("react").ForwardRefExoticComponent<import("../icon-button").IconButtonProps & import("react").RefAttributes<HTMLButtonElement>>, any, StyleProps, never>;
export declare const ChevronIcon: import("styled-components").StyledComponent<({ type, ...props }: import("..").IconProps) => JSX.Element, any, {}, never>;
export declare const Expandable: import("styled-components").StyledComponent<import("react-spring").AnimatedComponent<"div">, any, StyleProps, never>;
export declare const DescriptionContainer: import("styled-components").StyledComponent<"div", any, {}, never>;
export {};
