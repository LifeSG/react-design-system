import { RefObject } from "react";

/**
 * Props for the presentational Popover component that displays content in an
 * overlay anchored to a trigger element.
 *
 * @keywords popover, overlay, popup, floating, content, visible
 */
export interface PopoverV2Props extends PopoverRenderProps {
    /** The content of the Popover. */
    children: string | JSX.Element;
    /** The visibility state of the Popover. */
    visible?: boolean | undefined;
    /** Unique identifier for the component. */
    id?: string | undefined;
    /** CSS class name for custom styling. */
    className?: string | undefined;
    /** Test identifier for automated testing. */
    "data-testid"?: string | undefined;
    /** The callback when the user dismisses the Popover (modal form) in mobile viewports. */
    onMobileClose?: (() => void) | undefined;
    /** The accessible label for the popover content. @default "More information" */
    ariaLabel?: string | undefined;
}

/**
 * Render props passed dynamically to popover content when using the function form.
 *
 * @keywords popover, render props, maxHeight, overflow
 */
export interface PopoverRenderProps {
    /** Controls how overflow content behaves inside the popover container. */
    overflow?: PopoverOverflowType | undefined;
    /** Maximum height (in pixels) allowed for the popover content. */
    maxHeight?: number | undefined;
}

export type PopoverV2TriggerType = "click" | "hover";

type Position = "top" | "right" | "bottom" | "left";
type Alignment = "start" | "end";
type AlignedPosition = `${Position}-${Alignment}`;

export type PopoverOverflowType =
    | "visible"
    | "hidden"
    | "clip"
    | "scroll"
    | "auto";

export type PopoverV2Position = Position | AlignedPosition;

/**
 * Props for the PopoverTrigger utility component that handles triggering and
 * positioning of the Popover overlay.
 *
 * @keywords popover, trigger, click, hover, position, tooltip
 */
export interface PopoverV2TriggerProps {
    /** The item to interact with to trigger the Popover. */
    children: React.ReactNode;
    /** The content of the Popover. Can be a string, JSX.Element, or a function that receives PopoverRenderProps. */
    popoverContent:
        | string
        | JSX.Element
        | ((renderProps: PopoverRenderProps) => React.ReactNode);
    /** The trigger for the appearance of the Popover. @default "click" */
    trigger?: PopoverV2TriggerType | undefined;
    /** The visual position of the Popover in relation to its trigger. @default "top" */
    position?: PopoverV2Position | undefined;
    /** Unique identifier for the component. */
    id?: string | undefined;
    /** The custom z-index of the Popover. Try specifying this if you encounter z-index conflicts. */
    zIndex?: number | undefined;
    /** CSS class name for custom styling. */
    className?: string | undefined;
    /** Test identifier for automated testing. */
    "data-testid"?: string | undefined;
    /**
     * The root element that contains the popover element. Defaults to the document body.
     *
     * If the parent that contains the trigger element has a higher z-index than the popover,
     * the popover may not be visible. Specify the parent element here instead
     */
    rootNode?: RefObject<HTMLElement> | undefined;
    /** How much offset to apply for the popover (in px). @default 16 */
    customOffset?: number | undefined;
    /** How much delay (in milliseconds) for popover to appear/dismiss. Note: delay is not applied for `click` trigger. @default { open: 0, close: 500 } */
    delay?:
        | { open?: number | undefined; close?: number | undefined }
        | undefined;
    /** Enables the Popover's flip behavior (vertically) when there is not enough space in the window's viewport for the specified position. @default true */
    enableFlip?: boolean | undefined;
    /** Controls how overflow content behaves inside the popover container. Used with `enableResize`. @default "auto" */
    overflow?: PopoverOverflowType | undefined;
    /** Enables popover resize to fit the remaining vertical space of the window and contents become scrollable. @default false */
    enableResize?: boolean | undefined;
    /** The accessible label for the popover content. @default "More information" */
    popoverAriaLabel?: string | undefined;
    /** Opens the popover when the trigger element receives keyboard focus (e.g. via Tab), instead of requiring a click. @default false */
    triggerOnFocus?: boolean | undefined;
    /** Controls whether the popover behaves as a modal. When true, focus is trapped within the popover. @default true */
    isModal?: boolean | undefined;
    /** The callback when the Popover appears. */
    onPopoverAppear?: (() => void) | undefined;
    /** The callback when the Popover dismisses. */
    onPopoverDismiss?: (() => void) | undefined;
}

export type PopoverInlineStyle = "default" | "underline" | "underline-dashed";

/**
 * Props for the PopoverInline utility component that displays a text or
 * icon-based inline trigger for a Popover.
 *
 * @keywords popover, inline, text, icon, underline, trigger
 */
export interface PopoverInlineProps
    extends Omit<PopoverV2TriggerProps, "children"> {
    /** The accessible label for the inline trigger element. */
    ariaLabel?: string | undefined;
    /** The text content to display as an inline trigger. */
    content?: React.ReactNode | undefined;
    /** The icon to display as an inline trigger. */
    icon?: JSX.Element | undefined;
    /** The underline style of the inline trigger. */
    underlineStyle?: PopoverInlineStyle | undefined;
    /** The underline style of the inline trigger on hover. */
    underlineHoverStyle?: PopoverInlineStyle | undefined;
}
