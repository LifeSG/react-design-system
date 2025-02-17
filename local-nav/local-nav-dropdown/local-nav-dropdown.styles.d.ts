/// <reference types="react" />
interface DropdownNavStyleProps {
    $isStickied?: boolean;
    $stickyOffset: number;
    $sideMargin?: number;
}
interface NavItemListStyleProps {
    $viewportHeight?: number;
}
interface NavItemStyleProps {
    $isSelected?: boolean;
}
interface DropdownExpandedProps {
    $isDropdownExpanded: boolean;
}
interface NavIconStyleProps extends DropdownExpandedProps {
}
interface NavLabelStyleProps extends DropdownExpandedProps {
}
export declare const Backdrop: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const LabelText: import("styled-components").StyledComponent<"p", import("styled-components").DefaultTheme, import("../..").TextProps & NavItemStyleProps, never>;
export declare const StyledTickIcon: import("styled-components").StyledComponent<{
    (props: import("react").SVGProps<SVGSVGElement>): JSX.Element;
    displayName: string;
}, import("styled-components").DefaultTheme, {}, never>;
export declare const NavIcon: import("styled-components").StyledComponent<{
    (props: import("react").SVGProps<SVGSVGElement>): JSX.Element;
    displayName: string;
}, import("styled-components").DefaultTheme, NavIconStyleProps, never>;
export declare const NavLabel: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, NavLabelStyleProps, never>;
export declare const NavItem: import("styled-components").StyledComponent<"li", import("styled-components").DefaultTheme, NavItemStyleProps, never>;
export declare const NavItemList: import("styled-components").StyledComponent<"ul", import("styled-components").DefaultTheme, NavItemListStyleProps, never>;
export declare const NavWrapper: import("styled-components").StyledComponent<"nav", import("styled-components").DefaultTheme, DropdownNavStyleProps, never>;
export {};
