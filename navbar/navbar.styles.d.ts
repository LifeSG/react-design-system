/// <reference types="react" />
interface StyleProps {
    compress?: boolean;
    fixed?: boolean;
}
export declare const Wrapper: import("styled-components").StyledComponent<"div", any, StyleProps, never>;
export declare const Nav: import("styled-components").StyledComponent<"nav", any, StyleProps, never>;
export declare const NavElementsContainer: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const MobileMenuButton: import("styled-components").StyledComponent<import("react").ForwardRefExoticComponent<import("../icon-button").IconButtonProps & import("react").RefAttributes<HTMLButtonElement>>, any, {}, never>;
export declare const NAVBAR_HEIGHT: {
    notCompress: number;
    compress: number;
};
export {};
