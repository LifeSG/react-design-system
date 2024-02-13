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
export interface PopoverV2TriggerProps {
    children: React.ReactNode;
    popoverContent: string | JSX.Element;
    trigger?: PopoverV2TriggerType | undefined;
    id?: string | undefined;
    className?: string | undefined;
    "data-testid"?: string | undefined;
    /**
     * The root element that contains the popover element. Defaults to the document body.
     *
     * If the parent that contains the trigger element has a higher z-index than the popover,
     * the popover may not be visible. Specify the parent element here instead
     */
    rootNode?: RefObject<HTMLElement> | undefined;
    onPopoverAppear?: (() => void) | undefined;
    onPopoverDismiss?: (() => void) | undefined;
}
