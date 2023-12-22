interface StyleProps {
    $fixed?: boolean;
}
interface DrawerStyleProps {
    $showDrawer: boolean;
}
export declare const Wrapper: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, StyleProps, never>;
export declare const DesktopContainer: import("styled-components").StyledComponent<"nav", import("styled-components").DefaultTheme, {}, never>;
export declare const MobileContainer: import("styled-components").StyledComponent<"nav", import("styled-components").DefaultTheme, {}, never>;
export declare const DesktopDrawer: import("styled-components").StyledComponent<import("react-spring").AnimatedComponent<"ul">, import("styled-components").DefaultTheme, DrawerStyleProps, never>;
export {};
