/// <reference types="react" />
export declare const NAVBAR_HEIGHT: {
    notCompress: number;
    compress: number;
};
export declare const NAVBAR_MOBILE_HEIGHT = 3.5;
interface StyleProps {
    $compress?: boolean;
    $fixed?: boolean;
    $hideNavBranding?: boolean;
}
export declare const Wrapper: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, StyleProps, never>;
export declare const Nav: import("styled-components").StyledComponent<"nav", import("styled-components").DefaultTheme, StyleProps, never>;
export declare const NavElementsContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, StyleProps, never>;
export declare const MobileMenuButton: import("styled-components").StyledComponent<(props: import("../shared/clickable-icon").ClickableIconProps & import("react").RefAttributes<HTMLButtonElement>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>, import("styled-components").DefaultTheme, {}, never>;
export declare const MobileMenuIcon: import("styled-components").StyledComponent<{
    (props: import("react").SVGProps<SVGSVGElement>): import("react/jsx-runtime").JSX.Element;
    displayName: string;
}, import("styled-components").DefaultTheme, {}, never>;
export declare const NavBrandContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, StyleProps, never>;
export declare const NavSeparator: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, StyleProps, never>;
export {};
