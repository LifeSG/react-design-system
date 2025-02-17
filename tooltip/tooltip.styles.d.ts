/// <reference types="react" />
import { TooltipPosition } from "./types";
interface TooltipStyleProps {
    position?: TooltipPosition;
    visible?: boolean;
}
export declare const BubbleWrap: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, TooltipStyleProps, never>;
export declare const Bubble: import("styled-components").StyledComponent<({ children, ...otherProps }: import("../card/types").CardProps) => JSX.Element, import("styled-components").DefaultTheme, {}, never>;
export declare const Arrow: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, TooltipStyleProps, never>;
export declare const HOCWrapper: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export {};
