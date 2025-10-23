/// <reference types="react" />
/** @deprecated Use `PopoverV2` */
export type TooltipPosition = "top" | "bottom" | "left" | "right";
/** @deprecated Use `PopoverV2` */
export interface TooltipProps {
    children: string | JSX.Element;
    visible?: boolean | undefined;
    /** The position of the tooltip. Values: "top" | "bottom" | "left" | "right" */
    position?: TooltipPosition | undefined;
    id?: string | undefined;
    className?: string | undefined;
    "data-testid"?: string | undefined;
}
/** @deprecated Use `PopoverV2` */
export interface TooltipHOCProps {
    tooltipVisible?: boolean | undefined;
    /** The position of the tooltip. Values: "top" | "bottom" | "left" | "right" */
    position?: TooltipPosition | undefined;
}
/** @deprecated Use `PopoverV2` */
export interface TooltipHOCOptionsProps {
    content: string | JSX.Element;
}
