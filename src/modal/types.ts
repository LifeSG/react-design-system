import type { ModalAnimationDirection } from "../modal-v2/types";

/**
 * Props for the `Modal` component.
 */
export interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * Controls whether the modal is visible.
     */
    show: boolean;
    /**
     * The content of the modal. The parent element must be a valid HTML
     * element or a component that forwards a ref to a valid HTML element.
     */
    children: React.JSX.Element;
    /**
     * Direction from which the modal slides in and out.
     *
     * @default "bottom"
     */
    animationFrom?: ModalAnimationDirection | undefined;
    /**
     * Whether clicking the overlay backdrop dismisses the modal.
     *
     * @default true
     */
    enableOverlayClick?: boolean | undefined;
    /**
     * The `id` of the DOM element to portal the modal into.
     *
     * @default `document.body`
     */
    rootComponentId?: string | undefined;
    /**
     * The z-index applied to the overlay stack.
     */
    zIndex?: number | undefined;
    /**
     * Called when the overlay backdrop is clicked and `enableOverlayClick` is
     * `true`.
     */
    onOverlayClick?: (() => void) | undefined;
    /**
     * Blurs the currently focused element when the modal becomes visible,
     * dismissing the on-screen keyboard on mobile to prevent it from
     * obscuring the modal.
     *
     * @default true
     */
    dismissKeyboardOnShow?: boolean | undefined;
}

/**
 * Props for the `Modal.Box` sub-component.
 */
export interface ModalBoxProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    /**
     * Whether to render the close button in the top-right corner of the box.
     *
     * @default true
     */
    showCloseButton?: boolean | undefined;
    /**
     * Called when the close button is clicked.
     */
    onClose?: (() => void) | undefined;
    /**
     * Ref to the DOM element of the modal box.
     */
    elementRef?: React.Ref<HTMLDivElement> | undefined;
}
