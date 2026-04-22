/** @deprecated Use `PopoverV2` */
export type TooltipPosition = "top" | "bottom" | "left" | "right";

/** @deprecated Use `PopoverV2` */
export interface TooltipProps {
    /** The tooltip trigger or content element. */
    children: string | JSX.Element;
    /** When `true`, the tooltip is visible. */
    visible?: boolean | undefined;
    /** The position of the tooltip. Values: "top" | "bottom" | "left" | "right" */
    position?: TooltipPosition | undefined;
    /** Unique HTML identifier for the root element. */
    id?: string | undefined;
    /** Additional CSS class names applied to the root element. */
    className?: string | undefined;
    /** Sets the `data-testid` attribute for targeting the element in automated tests. */
    "data-testid"?: string | undefined;
}

/** @deprecated Use `PopoverV2` */
export interface TooltipHOCProps {
    /** When `true`, the tooltip is visible. */
    tooltipVisible?: boolean | undefined;
    /** The position of the tooltip. Values: "top" | "bottom" | "left" | "right" */
    position?: TooltipPosition | undefined;
}

/** @deprecated Use `PopoverV2` */
export interface TooltipHOCOptionsProps {
    /** The tooltip content to display. */
    content: string | JSX.Element;
}
