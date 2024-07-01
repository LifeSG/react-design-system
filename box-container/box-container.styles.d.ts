/// <reference types="react" />
import { BoxContainerDisplayState } from "./types";
interface StyleProps {
    $expanded?: boolean;
    $collapsible?: boolean;
}
interface LabelIconStyleProps {
    $displayState?: BoxContainerDisplayState;
}
export declare const Container: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const Expandable: import("styled-components").StyledComponent<import("@react-spring/web").AnimatedComponent<"div">, import("styled-components").DefaultTheme, {}, never>;
export declare const NonExpandable: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const ChildContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const Header: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const LabelText: import("styled-components").StyledComponent<"h3", import("styled-components").DefaultTheme, import("..").TextProps, never>;
export declare const LabelWrapper: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const LabelIcon: import("styled-components").StyledComponent<"span", import("styled-components").DefaultTheme, LabelIconStyleProps, never>;
export declare const AlertIcon: import("styled-components").StyledComponent<{
    (props: import("react").SVGProps<SVGSVGElement>): JSX.Element;
    displayName: string;
}, import("styled-components").DefaultTheme, {}, never>;
export declare const CallToActionContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, StyleProps, never>;
export declare const Handle: import("styled-components").StyledComponent<"button", import("styled-components").DefaultTheme, {}, never>;
export declare const HandleLabel: import("styled-components").StyledComponent<"h4", import("styled-components").DefaultTheme, import("..").TextProps, never>;
export declare const HandleIconContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, StyleProps, never>;
export declare const HandleIcon: import("styled-components").StyledComponent<{
    (props: import("react").SVGProps<SVGSVGElement>): JSX.Element;
    displayName: string;
}, import("styled-components").DefaultTheme, {}, never>;
export {};
