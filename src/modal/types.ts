import { ModalAnimationDirection } from "../modal-v2/types";

/**
 * A window or pop up that displays over other page content and provides information or actions.
 *
 * @keywords modal, dialog, overlay, popup, window
 */
export interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Toggles the visibility of the Modal. */
    show: boolean;
    /** The content to render inside the modal. */
    children: React.ReactNode;
    /** Animation direction of appearance and dismissal. Values: "top" | "bottom" | "left" | "right" */
    animationFrom?: ModalAnimationDirection | undefined;
    /** Toggles whether the Modal can be dismissed by clicking on the overlay. */
    enableOverlayClick?: boolean | undefined;
    /** The identifier of the element to inject the Modal into */
    rootComponentId?: string | undefined;
    /** Allows a custom z-index to be specified (useful for modal stacking). */
    zIndex?: number | undefined;
    /** Callback when the overlay is clicked. Triggered if `enableOverlayClick` is true. */
    onOverlayClick?: (() => void) | undefined;
    /** Dismiss keyboard to keep modal in fullscreen */
    dismissKeyboardOnShow?: boolean | undefined;
}

/**
 * The styled container box within a Modal, optionally including a close button.
 *
 * @keywords modal box, modal container, close button
 */
export interface ModalBoxProps extends React.HTMLAttributes<HTMLDivElement> {
    /** The content to render inside the modal box. */
    children: React.ReactNode;
    /** Toggles the visibility of the close button. @default true */
    showCloseButton?: boolean | undefined;
    /** Callback when the close button is clicked. Triggered if the close button is visible. */
    onClose?: (() => void) | undefined;
}
