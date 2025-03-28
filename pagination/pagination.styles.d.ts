/// <reference types="react" />
interface StyleProps {
    $selected: boolean;
}
interface ButtonProps {
    $position: string;
}
export declare const PaginationWrapper: import("styled-components").StyledComponent<"nav", import("styled-components").DefaultTheme, {}, never>;
export declare const PaginationList: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const PaginationMenu: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const NavigationItem: import("styled-components").StyledComponent<(props: import("../shared/clickable-icon").ClickableIconProps & import("react").RefAttributes<HTMLButtonElement>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>, import("styled-components").DefaultTheme, {}, never>;
export declare const NavigationButton: import("styled-components").StyledComponent<(props: import("../shared/clickable-icon").ClickableIconProps & import("react").RefAttributes<HTMLButtonElement>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>, import("styled-components").DefaultTheme, ButtonProps, never>;
export declare const PageItem: import("styled-components").StyledComponent<(props: import("..").ButtonProps & import("react").RefAttributes<HTMLButtonElement>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>, import("styled-components").DefaultTheme, StyleProps, never>;
export declare const EllipsisItem: import("styled-components").StyledComponent<(props: import("../shared/clickable-icon").ClickableIconProps & import("react").RefAttributes<HTMLButtonElement>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>, import("styled-components").DefaultTheme, {}, never>;
export declare const EllipsisContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const PaginationMobileInput: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const Label: import("styled-components").StyledComponent<"p", import("styled-components").DefaultTheme, import("../text").TextProps, never>;
export declare const LabelDivider: import("styled-components").StyledComponent<"p", import("styled-components").DefaultTheme, import("../text").TextProps, never>;
export declare const InputView: import("styled-components").StyledComponent<(props: import("../input").InputProps & import("react").RefAttributes<HTMLInputElement>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>, import("styled-components").DefaultTheme, {}, never>;
export declare const Hover: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const InputSelectWrapper: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export {};
