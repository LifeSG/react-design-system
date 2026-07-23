import type { RefObject } from "react";

// @storybookSection Popover
/**
 * Props for the `Popover` component.
 */
export interface PopoverProps extends PopoverRenderProps {
    /**
     * Content displayed inside the popover. A plain string is automatically
     * wrapped in a `Typography.BodyMD` element.
     */
    children: string | JSX.Element;
    /**
     * Controls whether the popover is visible.
     *
     * @default false
     */
    visible?: boolean | undefined;
    id?: string | undefined;
    className?: string | undefined;
    "data-testid"?: string | undefined;
    /**
     * Called when the user dismisses the popover on a mobile viewport, either
     * by tapping the overlay or the close button.
     */
    onMobileClose?: (() => void) | undefined;
    /**
     * Accessible label for the `role="dialog"` element.
     *
     * @default "More information"
     */
    ariaLabel?: string | undefined;
}

// @storybookSection PopoverTrigger
/**
 * Style constraints that control the popover card's height and overflow.
 */
export interface PopoverRenderProps {
    /**
     * CSS `overflow` value applied to the popover card body.
     */
    overflow?: PopoverOverflowType | undefined;
    /**
     * Maximum height of the popover card in pixels.
     */
    maxHeight?: number | undefined;
}

/**
 * Interaction that opens the popover.
 *
 * @remarks On mobile viewports `"hover"` is automatically promoted to `"click"`.
 */
export type PopoverTriggerType = "click" | "hover";

type Position = "top" | "right" | "bottom" | "left";
type Alignment = "start" | "end";
type AlignedPosition = `${Position}-${Alignment}`;

/**
 * CSS `overflow` value applied to the popover card body.
 */
export type PopoverOverflowType =
    | "visible"
    | "hidden"
    | "clip"
    | "scroll"
    | "auto";

/**
 * Preferred placement of the popover relative to its trigger element.
 */
export type PopoverPosition = Position | AlignedPosition;

// @storybookSection PopoverTrigger
/**
 * Props for the `PopoverTrigger` component.
 */
export interface PopoverTriggerProps {
    /**
     * The trigger element rendered inside a focusable wrapper div.
     */
    children: React.ReactNode;
    /**
     * Content shown inside the popover panel. A string or JSX element is
     * rendered inside the default `Popover`; a render function bypasses it
     * for completely custom rendering.
     */
    popoverContent:
        | string
        | JSX.Element
        | ((renderProps: PopoverRenderProps) => React.ReactNode);
    /**
     * Interaction that opens the popover.
     *
     * @remarks On mobile, always `"click"`.
     *
     * @default "click"
     */
    trigger?: PopoverTriggerType | undefined;
    /**
     * Preferred placement of the popover relative to the trigger.
     *
     * @default "top"
     */
    position?: PopoverPosition | undefined;
    id?: string | undefined;
    /**
     * Overrides the stacking context z-index for the floating popover layer.
     * Falls back to the inherited floating context z-index when omitted.
     */
    zIndex?: number | undefined;
    className?: string | undefined;
    "data-testid"?: string | undefined;
    /**
     * The root element that contains the popover element.
     *
     * @remarks Specify this if you need to change the parent of the
     * popover in the HTML DOM.
     * Possible use case: sharing a stacking context.
     *
     * Note: if a parent of the trigger has a higher `z-index` than the popover,
     * the popover may be obscured.
     *
     * @default document.body
     */
    rootNode?: RefObject<HTMLElement> | undefined;
    /**
     * Distance in pixels between the trigger element and the popover panel.
     *
     * @default 16
     */
    customOffset?: number | undefined;
    /**
     * Open and close delays in milliseconds. Only applies when `trigger` is `"hover"`.
     */
    delay?:
        | { open?: number | undefined; close?: number | undefined }
        | undefined;
    /**
     * Allows the popover to flip to the opposite side when the preferred
     * position has insufficient viewport space.
     *
     * @default true
     */
    enableFlip?: boolean | undefined;
    /**
     * Resizes the popover to fit the remaining vertical space in the viewport.
     *
     * @default false
     */
    enableResize?: boolean | undefined;
    /**
     * CSS `overflow` value forwarded to the popover card when `enableResize`
     * is active.
     *
     * @default "auto"
     */
    overflow?: PopoverOverflowType | undefined;
    /**
     * Accessible label for the popover dialog element.
     *
     * @default "More information"
     */
    popoverAriaLabel?: string | undefined;
    /**
     * Also opens the popover when the trigger element receives focus.
     *
     * @default false
     */
    triggerOnFocus?: boolean | undefined;
    /**
     * When `true`, focus is trapped inside the popover until dismissed.
     * When `false`, the popover closes automatically once the user tabs
     * away from both the trigger and the popover.
     *
     * @default true
     */
    isModal?: boolean | undefined;
    /**
     * Called when the popover becomes visible.
     */
    onPopoverAppear?: (() => void) | undefined;
    /**
     * Called when the popover is dismissed.
     */
    onPopoverDismiss?: (() => void) | undefined;
}
