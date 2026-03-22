import { RefObject } from "react";

/**
 * Props for the PopoverV2 component - floating content bubble (v2).
 *
 * The base popover bubble controlled via `visible`. For most use cases
 * prefer `PopoverV2.Trigger` which handles positioning automatically.
 *
 * @see PopoverV2TriggerProps for the recommended usage via the Trigger wrapper.
 * @keywords floating popover, anchored tooltip, positioned overlay, info bubble v2, floating-ui popover
 */
export interface PopoverV2Props {
    children: string | JSX.Element;
    visible?: boolean | undefined;
    id?: string | undefined;
    className?: string | undefined;
    "data-testid"?: string | undefined;
    onMobileClose?: (() => void) | undefined;
}

export type PopoverV2TriggerType = "click" | "hover";

type Position = "top" | "right" | "bottom" | "left";
type Alignment = "start" | "end";
type AlignedPosition = `${Position}-${Alignment}`;

export type PopoverV2Position = Position | AlignedPosition;

/**
 * Props for the PopoverV2.Trigger component - positioning wrapper with popover.
 *
 * Wraps any trigger element and positions a floating popover next to it.
 * Uses `@floating-ui` for accurate placement and supports 12 position options.
 *
 * @example
 * ```tsx
 * <PopoverV2.Trigger popoverContent="More info" trigger="hover">
 *     <InfoIcon />
 * </PopoverV2.Trigger>
 * ```
 */
export interface PopoverV2TriggerProps {
    /** The trigger element the popover is anchored to. */
    children: React.ReactNode;
    /** The content to display inside the popover. */
    popoverContent: string | JSX.Element | (() => React.ReactNode);
    /**
     * The interaction that opens the popover.
     *
     * @default "click"
     */
    trigger?: PopoverV2TriggerType | undefined;
    /**
     * The position of the popover relative to its trigger.
     *
     * @default "top"
     */
    position?: PopoverV2Position | undefined;
    /** Unique id attribute forwarded to the popover element. */
    id?: string | undefined;
    /** CSS class selector for the trigger wrapper. */
    className?: string | undefined;
    /** The test identifier for the component. */
    "data-testid"?: string | undefined;
    /**
     * The container element used as the portal root for the popover.
     *
     * Specify a parent with a higher stacking context if the popover is
     * obscured by sibling elements. Defaults to `document.body`.
     */
    rootNode?: RefObject<HTMLElement> | undefined;
    /** Called when the popover becomes visible. */
    onPopoverAppear?: (() => void) | undefined;
    /** Called when the popover is dismissed. */
    onPopoverDismiss?: (() => void) | undefined;
}
