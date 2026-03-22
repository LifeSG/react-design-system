export type TooltipPosition = "top" | "bottom" | "left" | "right";

/**
 * Props for the Tooltip component - floating informational bubble.
 *
 * Renders a small floating label positioned relative to its trigger
 * element. Controlled via the `visible` prop.
 *
 * @example
 * ```tsx
 * // Via the HOC wrapper (recommended)
 * const ButtonWithTooltip = withTooltip(
 *     <Button>Hover me</Button>,
 *     { content: "Helpful information" }
 * );
 * ```
 * @keywords hover hint, info popup, help text, hover label, withTooltip HOC
 */
export interface TooltipProps {
    /** The content to display inside the tooltip bubble. */
    children: string | JSX.Element;
    /**
     * Controls the visibility of the tooltip.
     *
     * @default false
     */
    visible?: boolean | undefined;
    /**
     * The position of the tooltip relative to its trigger.
     *
     * @default "top"
     */
    position?: TooltipPosition | undefined;
    /** Unique id attribute for the tooltip element. */
    id?: string | undefined;
    /** CSS class selector for the tooltip element. */
    className?: string | undefined;
    /** The test identifier for the component. */
    "data-testid"?: string | undefined;
}

/**
 * Props added to the wrapped component by the `withTooltip` HOC.
 */
export interface TooltipHOCProps {
    /** Programmatically controls tooltip visibility when provided. */
    tooltipVisible?: boolean | undefined;
    /**
     * The position of the tooltip relative to its trigger.
     *
     * @default "top"
     */
    position?: TooltipPosition | undefined;
}

/**
 * Configuration options passed to `withTooltip` to define the tooltip content.
 */
export interface TooltipHOCOptionsProps {
    /** The content to display inside the tooltip. */
    content: string | JSX.Element;
}
