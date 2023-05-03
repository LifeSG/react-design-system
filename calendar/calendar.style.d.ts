/// <reference types="react" />
import { CalendarType } from "./types";
interface ContainerStyleProps {
    $type: CalendarType;
}
interface SideArrowButtonStyleProps {
    $direction: "left" | "right";
}
interface DropdownButtonStyleProps {
    $expandedDisplay: boolean;
    $visible?: boolean;
}
interface OverlayStyleProps {
    $visible?: boolean;
}
export declare const Container: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, ContainerStyleProps, never>;
export declare const ContentBody: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const ToggleZone: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const OptionsOverlay: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, OverlayStyleProps, never>;
export declare const HeaderDropdown: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const DropdownButton: import("styled-components").StyledComponent<"button", import("styled-components").DefaultTheme, DropdownButtonStyleProps, never>;
export declare const SideArrowButton: import("styled-components").StyledComponent<(props: import("../icon-button").IconButtonProps & import("react").RefAttributes<HTMLButtonElement>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>, import("styled-components").DefaultTheme, SideArrowButtonStyleProps, never>;
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
export {};
