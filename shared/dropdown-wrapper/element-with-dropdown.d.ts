import { OpenChangeReason } from "@floating-ui/react";
import { RefObject } from "react";
import { DropdownAlignmentType } from "./types";
export interface DropdownRenderProps {
    elementWidth: number;
}
interface ElementWithDropdownProps {
    enabled: boolean;
    isOpen: boolean;
    onOpen?: () => void | undefined;
    onClose?: (reason: OpenChangeReason | undefined) => void | undefined;
    onDismiss?: () => void | undefined;
    renderElement: () => React.ReactNode;
    renderDropdown: (props: DropdownRenderProps) => React.ReactNode;
    customZIndex?: number | undefined;
    clickToToggle?: boolean | undefined;
    offset?: number | undefined;
    alignment?: DropdownAlignmentType | undefined;
    fitAvailableHeight?: boolean | undefined;
    /**
     * The root element that contains the popover element. Defaults to the document body.
     *
     * If the parent that contains the trigger element has a higher z-index than the popover,
     * the popover may not be visible. Specify the parent element here instead
     */
    rootNode?: RefObject<HTMLElement> | undefined;
}
export declare const ElementWithDropdown: ({ enabled, isOpen, onOpen, onClose, onDismiss, renderElement, renderDropdown, customZIndex, clickToToggle, offset: dropdownOffset, alignment, fitAvailableHeight, rootNode, }: ElementWithDropdownProps) => import("react/jsx-runtime").JSX.Element;
export {};
