/**
 * Props for the Popover component - floating content bubble.
 *
 * Renders a floating tooltip-style bubble positioned relative to its
 * trigger element. Controlled via the `visible` prop.
 *
 * @example
 * ```tsx
 * // Via the HOC wrapper (recommended)
 * const TriggerWithPopover = Popover.withPopover(MyTrigger, {
 *     content: "Helpful information",
 *     trigger: "hover",
 * });
 * ```
 * @keywords info bubble, hover card, contextual overlay, floating hint, help popup
 */
export interface PopoverProps {
    /** The content to display inside the popover bubble. */
    children: string | JSX.Element;
    /**
     * Controls the visibility of the popover.
     *
     * @default false
     */
    visible?: boolean | undefined;
    /** The unique id attribute of the popover element. */
    id?: string | undefined;
    /** CSS class selector for the popover element. */
    className?: string | undefined;
    /** The test identifier for the component. */
    "data-testid"?: string | undefined;
    /** Called when the mobile close button is tapped. */
    onMobileClose?: (() => void) | undefined;
}

/**
 * Props added to the wrapped component by the `Popover.withPopover` HOC.
 */
export interface PopoverHOCProps {
    /** Called when the popover becomes visible. */
    onPopoverAppear?: (() => void) | undefined;
    /** Called when the popover is dismissed. */
    onPopoverDismiss?: (() => void) | undefined;
}

/**
 * Configuration options passed to `Popover.withPopover` to define the
 * popover content and trigger behaviour.
 */
export interface PopoverHOCOptionsProps {
    /** The content to display inside the popover. */
    content: string | JSX.Element;
    /**
     * The interaction that opens the popover.
     *
     * @default "click"
     */
    trigger?: "click" | "hover" | undefined;
    /** Unique identifier forwarded to the Popover element. */
    id?: string | undefined;
    /** Test identifier forwarded to the Popover element. */
    "data-testid"?: string | undefined;
}
