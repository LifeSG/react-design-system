/// <reference types="react" />
interface StyleProps {
    $collapsible?: boolean;
    $expanded?: boolean;
}
interface DividerStyleProps {
    $showDivider: boolean;
    $showMobileDivider: boolean;
}
export declare const FilterItemWrapper: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, StyleProps, never>;
export declare const Divider: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, DividerStyleProps, never>;
export declare const FilterItemHeader: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const FilterItemExpandButton: import("styled-components").StyledComponent<(props: import("../shared/clickable-icon").ClickableIconProps & import("react").RefAttributes<HTMLButtonElement>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>, import("styled-components").DefaultTheme, {}, never>;
export declare const ChevronIcon: import("styled-components").StyledComponent<{
    (props: import("react").SVGProps<SVGSVGElement>): JSX.Element;
    displayName: string;
}, import("styled-components").DefaultTheme, StyleProps, never>;
export declare const FilterItemTitle: import("styled-components").StyledComponent<"h4", import("styled-components").DefaultTheme, import("../text").TextProps, never>;
export declare const ExpandableItem: import("styled-components").StyledComponent<import("@react-spring/web").AnimatedComponent<"div">, import("styled-components").DefaultTheme, {}, never>;
export declare const FilterItemBody: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const MinimisableContent: import("styled-components").StyledComponent<import("@react-spring/web").AnimatedComponent<"div">, import("styled-components").DefaultTheme, {
    $height?: number;
    $minimisable: boolean;
}, never>;
export declare const FilterItemMinimiseButton: import("styled-components").StyledComponent<(props: import("..").ButtonProps & import("react").RefAttributes<HTMLButtonElement>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>, import("styled-components").DefaultTheme, {}, never>;
export {};
