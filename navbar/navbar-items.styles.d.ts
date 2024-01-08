/// <reference types="react" />
interface StyleProps {
    $selected: boolean;
}
interface WrapperStyleProps {
    $alignLeft: boolean;
}
interface ItemStyleProps {
    $hiddenBranding: boolean;
}
export declare const Wrapper: import("styled-components").StyledComponent<"ul", import("styled-components").DefaultTheme, WrapperStyleProps, never>;
export declare const MobileWrapper: import("styled-components").StyledComponent<"ul", import("styled-components").DefaultTheme, {}, never>;
export declare const LinkItem: import("styled-components").StyledComponent<"li", import("styled-components").DefaultTheme, ItemStyleProps, never>;
export declare const Link: import("styled-components").StyledComponent<(props: import("../text").TextLinkProps) => JSX.Element, import("styled-components").DefaultTheme, StyleProps, never>;
export declare const LinkLabel: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const LinkIndicator: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const LinkIconContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const ExpandCollapseButton: import("styled-components").StyledComponent<(props: import("../shared/clickable-icon").ClickableIconProps & import("react").RefAttributes<HTMLButtonElement>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>, import("styled-components").DefaultTheme, StyleProps, never>;
export declare const ChevronIcon: import("styled-components").StyledComponent<{
    (props: import("react").SVGProps<SVGSVGElement>): JSX.Element;
    displayName: string;
}, import("styled-components").DefaultTheme, {}, never>;
export {};
