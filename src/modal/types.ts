import type { ModalAnimationDirection } from "../modal-v2/types";

export interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
    show: boolean;
    /** The content of the modal. The parent element must be a valid HTML
     * element or a component that forwards a ref to a valid HTML element. This
     * element is used to determine the boundaries for overlay click
     * detection. Fragments are not supported. */
    children: React.JSX.Element;
    /** Animation direction of appearance and dismissal. Values: "top" | "bottom" | "left" | "right" */
    animationFrom?: ModalAnimationDirection | undefined;
    enableOverlayClick?: boolean | undefined;
    /** The identifier of the element to inject the Modal into */
    rootComponentId?: string | undefined;
    zIndex?: number | undefined;
    onOverlayClick?: (() => void) | undefined;
    /** Dismiss keyboard to keep modal in fullscreen */
    dismissKeyboardOnShow?: boolean | undefined;
}

export interface ModalBoxProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    showCloseButton?: boolean | undefined;
    onClose?: (() => void) | undefined;
}
