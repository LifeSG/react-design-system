/// <reference types="react" />
export type TooltipPosition = "top" | "bottom" | "left" | "right";
export interface TooltipProps {
    children: string | JSX.Element;
    visible?: boolean | undefined;
    /** The position of the tooltip. Values: "top" | "bottom" | "left" | "right" */
    position?: TooltipPosition | undefined;
    id?: string | undefined;
    className?: string | undefined;
    "data-testid"?: string | undefined;
}
export interface TooltipHOCProps {
    tooltipVisible?: boolean | undefined;
    /** The position of the tooltip. Values: "top" | "bottom" | "left" | "right" */
    position?: TooltipPosition | undefined;
}
export interface TooltipHOCOptionsProps {
    content: string | JSX.Element;
}
