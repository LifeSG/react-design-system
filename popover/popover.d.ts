import type { PopoverProps } from "./types";
/**
 * The presentational overlay for a popover panel. Renders as a floating card
 * on desktop and modal on mobile.
 *
 * Use with `PopoverTrigger`, which manages visibility state and positioning.
 * @keywords info, overlay, tooltip
 */
export declare const Popover: ({ children, visible, onMobileClose, maxHeight, overflow, ariaLabel, id, className, "data-testid": testId, ...otherProps }: PopoverProps) => JSX.Element;
