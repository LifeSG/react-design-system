import { OpenChangeReason } from "@floating-ui/react";
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
}
export declare const ElementWithDropdown: ({ enabled, isOpen, onOpen, onClose, onDismiss, renderElement, renderDropdown, customZIndex, clickToToggle, offset: dropdownOffset, alignment, fitAvailableHeight, }: ElementWithDropdownProps) => import("react/jsx-runtime").JSX.Element;
export {};
