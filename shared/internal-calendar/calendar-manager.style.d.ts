/// <reference types="react" />
interface DropdownButtonStyleProps {
    $expanded: boolean;
    $visible?: boolean;
}
interface OverlayStyleProps {
    $visible?: boolean;
}
export declare const ArrowLeft: import("styled-components").StyledComponent<{
    (props: import("react").SVGProps<SVGSVGElement>): JSX.Element;
    displayName: string;
}, import("styled-components").DefaultTheme, {}, never>;
export declare const ArrowRight: import("styled-components").StyledComponent<{
    (props: import("react").SVGProps<SVGSVGElement>): JSX.Element;
    displayName: string;
}, import("styled-components").DefaultTheme, {}, never>;
export declare const IconChevronDown: import("styled-components").StyledComponent<{
    (props: import("react").SVGProps<SVGSVGElement>): JSX.Element;
    displayName: string;
}, import("styled-components").DefaultTheme, {}, never>;
export declare const Container: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const ToggleZone: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const DefaultView: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const OptionsOverlay: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, OverlayStyleProps, never>;
export declare const Header: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const HeaderInputDropdown: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const DropdownButton: import("styled-components").StyledComponent<"button", import("styled-components").DefaultTheme, DropdownButtonStyleProps, never>;
export declare const DropdownText: import("styled-components").StyledComponent<"p", import("styled-components").DefaultTheme, {}, never>;
export declare const HeaderArrows: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const HeaderArrowButton: import("styled-components").StyledComponent<(props: import("../clickable-icon").ClickableIconProps & import("react").RefAttributes<HTMLButtonElement>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>, import("styled-components").DefaultTheme, {}, never>;
export declare const ActionButtonSection: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const ActionButton: import("styled-components").StyledComponent<(props: import("../../button").ButtonProps & import("react").RefAttributes<HTMLButtonElement>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>, import("styled-components").DefaultTheme, {}, never>;
export {};
