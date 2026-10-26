import type { PopoverTriggerProps } from "./types";
/**
 * Wraps an element to make it a popover trigger.
 *
 * Use `PopoverTrigger` when you need to attach a popover to any arbitrary
 * child element.
 */
export declare const PopoverTrigger: ({ children, popoverContent, trigger: _trigger, position, zIndex, rootNode, customOffset, delay, onPopoverAppear, onPopoverDismiss, popoverAriaLabel, enableFlip, enableResize, overflow, triggerOnFocus, isModal, className, ...otherProps }: PopoverTriggerProps) => import("react/jsx-runtime").JSX.Element;
