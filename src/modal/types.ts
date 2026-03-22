import React from "react";

export type ModalAnimationDirection = "top" | "bottom" | "left" | "right";

/**
 * Props for the Modal component - animated overlay dialog.
 *
 * Renders content inside a portal injected into the DOM. Supports directional
 * slide-in animation, optional overlay-click dismissal, and custom z-index for
 * stacked modals. Toggle visibility with the `show` prop.
 *
 * @example
 * ```tsx
 * <Modal show={isOpen} animationFrom="bottom" enableOverlayClick onOverlayClick={() => setIsOpen(false)}>
 *     <Modal.Box onClose={() => setIsOpen(false)}>
 *         <p>Modal content</p>
 *     </Modal.Box>
 * </Modal>
 * ```
 * @keywords dialog, popup, lightbox, overlay dialog, confirmation dialog
 */
export interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Toggles the visibility of the Modal. */
    show: boolean;
    /** The content rendered inside the modal portal (typically `Modal.Box`). */
    children: JSX.Element | JSX.Element[];
    /**
     * The direction from which the Modal slides in.
     *
     * @default "bottom"
     */
    animationFrom?: ModalAnimationDirection | undefined;
    /**
     * When `true`, clicking the overlay dismisses the Modal and fires `onOverlayClick`.
     */
    enableOverlayClick?: boolean | undefined;
    /**
     * The DOM element id to inject the Modal portal into. Defaults to `<body>` if omitted.
     */
    rootComponentId?: string | undefined;
    /** Custom CSS `z-index` value. Useful for stacking multiple modals. */
    zIndex?: number | undefined;
    /** Called when the overlay is clicked (requires `enableOverlayClick` to be `true`). */
    onOverlayClick?: (() => void) | undefined;
    /**
     * When `true`, the mobile keyboard is dismissed when the Modal opens.
     *
     * @default true
     */
    dismissKeyboardOnShow?: boolean | undefined;
}

/**
 * Props for the Modal.Box component - the white card container inside the Modal.
 *
 * Renders the styled content box with an optional close button.
 */
export interface ModalBoxProps extends React.HTMLAttributes<HTMLDivElement> {
    /** The content rendered inside the modal box. */
    children: JSX.Element | JSX.Element[];
    /**
     * When `true`, a close button is rendered in the top-right corner.
     *
     * @default true
     */
    showCloseButton?: boolean | undefined;
    /** Called when the close button is clicked. */
    onClose?: (() => void) | undefined;
}
