export type TooltipPosition = "top" | "bottom" | "left" | "right";

export interface TooltipProps {
    visible?: boolean;
    children: string | JSX.Element;
    position?: TooltipPosition;
    id?: string;
    className?: string;
    "data-testid"?: string;
}

export interface TooltipHOCProps {
    tooltipVisible?: boolean;
    position?: TooltipPosition;
}

export interface ToolTipHOCOptionsProps {
    content: string | JSX.Element;
}
