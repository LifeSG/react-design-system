/// <reference types="react" />
import { BoxContainerDisplayState } from "./types";
interface StyleProps {
    $expanded?: boolean;
    $collapsible?: boolean;
}
interface LabelIconStyleProps {
    $displayState?: BoxContainerDisplayState;
}
export declare const Container: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const Expandable: import("styled-components").StyledComponent<import("react-spring").AnimatedComponent<"div">, any, {}, never>;
export declare const NonExpandable: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const ChildContainer: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const Header: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const LabelText: import("styled-components").StyledComponent<"h3", any, import("..").TextProps, never>;
export declare const LabelIcon: import("styled-components").StyledComponent<"span", any, LabelIconStyleProps, never>;
export declare const CallToActionContainer: import("styled-components").StyledComponent<"div", any, StyleProps, never>;
export declare const Handle: import("styled-components").StyledComponent<"button", any, {}, never>;
export declare const HandleLabel: import("styled-components").StyledComponent<"h4", any, import("..").TextProps, never>;
export declare const HandleIconContainer: import("styled-components").StyledComponent<"div", any, StyleProps, never>;
export declare const HandleIcon: import("styled-components").StyledComponent<({ type, ...props }: import("..").IconProps) => JSX.Element, any, {}, never>;
export {};
