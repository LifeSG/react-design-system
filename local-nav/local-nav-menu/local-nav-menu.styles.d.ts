interface NavItemStyleProps {
    $isSelected?: boolean;
}
export declare const Nav: import("styled-components").StyledComponent<"ul", import("styled-components").DefaultTheme, {}, never>;
export declare const TextLabel: import("styled-components").StyledComponent<"p", import("styled-components").DefaultTheme, import("../../typography").TypographyProps & NavItemStyleProps, never>;
export declare const NavItem: import("styled-components").StyledComponent<"li", import("styled-components").DefaultTheme, NavItemStyleProps, never>;
export declare const NavItemContent: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export {};
