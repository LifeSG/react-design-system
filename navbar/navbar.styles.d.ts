/// <reference types="react" />
export declare const NAVBAR_HEIGHT: {
    notCompress: number;
    compress: number;
};
export declare const NAVBAR_MOBILE_HEIGHT = 3.5;
interface StyleProps {
    $compress?: boolean;
    $fixed?: boolean;
}
export declare const Wrapper: import("styled-components").StyledComponent<"div", any, StyleProps, never>;
export declare const Nav: import("styled-components").StyledComponent<"nav", any, StyleProps, never>;
export declare const NavElementsContainer: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const MobileMenuButton: import("styled-components").StyledComponent<(props: import("../icon-button").IconButtonProps & import("react").RefAttributes<HTMLButtonElement>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>, any, {}, never>;
export declare const MobileMenuIcon: import("styled-components").StyledComponent<{
    (props: import("react").SVGProps<SVGSVGElement>): JSX.Element;
    displayName: string;
}, any, {}, never>;
export declare const NavBrandContainer: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const NavSeparator: import("styled-components").StyledComponent<"div", any, StyleProps, never>;
export {};
