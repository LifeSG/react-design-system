/// <reference types="react" />
import { TooltipPosition } from "./types";
interface TooltipStyleProps {
    position?: TooltipPosition;
    visible?: boolean;
}
export declare const BubbleWrap: import("styled-components").StyledComponent<"div", any, TooltipStyleProps, never>;
export declare const Bubble: import("styled-components").StyledComponent<({ children, ...otherProps }: import("../card/types").CardProps) => JSX.Element, any, {}, never>;
export declare const Arrow: import("styled-components").StyledComponent<"div", any, TooltipStyleProps, never>;
export declare const HOCWrapper: import("styled-components").StyledComponent<"div", any, {}, never>;
export {};
