import { RefObject } from "react";
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
export interface PopoverV2TriggerProps {
    children: React.ReactNode;
    popoverContent: string | JSX.Element | (() => React.ReactNode);
    trigger?: PopoverV2TriggerType | undefined;
    position?: PopoverV2Position | undefined;
    id?: string | undefined;
    zIndex?: number | undefined;
    className?: string | undefined;
    "data-testid"?: string | undefined;
    /**
     * The root element that contains the popover element. Defaults to the document body.
     *
     * If the parent that contains the trigger element has a higher z-index than the popover,
     * the popover may not be visible. Specify the parent element here instead
     */
    rootNode?: RefObject<HTMLElement> | undefined;
    customOffset?: number | undefined;
    delay?: {
        open?: number | undefined;
        close?: number | undefined;
    } | undefined;
    onPopoverAppear?: (() => void) | undefined;
    onPopoverDismiss?: (() => void) | undefined;
}
export type PopoverInlineStyle = "default" | "underline" | "underline-dashed";
export interface PopoverInlineProps extends Omit<PopoverV2TriggerProps, "children"> {
    content?: React.ReactNode | undefined;
    icon?: JSX.Element | undefined;
    underlineStyle?: PopoverInlineStyle | undefined;
    underlineHoverStyle?: PopoverInlineStyle | undefined;
}
export {};
