export type ModalAnimationDirection = "top" | "bottom" | "left" | "right";

/**
 * The styled card container within a ModalV2, wrapping the modal's visual surface.
 *
 * @keywords modal card, modal container, dialog card
 */
export interface ModalCardProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Test identifier for automated testing. */
    "data-testid"?: string | undefined;
    /** The content to render inside the modal card. */
    children: React.ReactNode;
}

/**
 * A pre-styled close button for dismissing a ModalV2.
 *
 * @keywords modal close button, dismiss, close
 */
export interface ModalCloseButtonProps
    extends React.HTMLAttributes<HTMLDivElement> {
    /** Test identifier for automated testing. */
    "data-testid"?: string | undefined;
}

/**
 * The scrollable content area within a ModalV2.
 *
 * @keywords modal content, modal body, scrollable
 */
export interface ModalContentProps
    extends React.HTMLAttributes<HTMLDivElement> {
    /** Test identifier for automated testing. */
    "data-testid"?: string | undefined;
    /** The content to render inside the modal content area. */
    children: React.ReactNode;
}

/**
 * The footer area of a ModalV2, used to render primary and secondary action buttons.
 *
 * @keywords modal footer, action buttons, cta
 */
export interface ModalFooterProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Test identifier for automated testing. */
    "data-testid"?: string | undefined;
    /** The primary call-to-action button. */
    primaryButton?: React.ReactNode | undefined;
    /** The secondary call-to-action button. */
    secondaryButton?: React.ReactNode | undefined;
}

/**
 * A window or pop up that displays over other page content and provides information or actions.
 * Improved version of Modal with better scroll handling and accessibility.
 *
 * @keywords modal, dialog, overlay, popup, modal v2
 */
export interface ModalV2Props extends React.HTMLAttributes<HTMLDivElement> {
    /** Test identifier for automated testing. */
    "data-testid"?: string | undefined;
    /** Toggles the visibility of the Modal. */
    show: boolean;
    /** The content to render inside the modal. */
    children: React.ReactNode;
    /** Animation direction of appearance and dismissal. Values: "top" | "bottom" | "left" | "right" */
    animationFrom?: ModalAnimationDirection | undefined;
    /** Toggles whether the Modal can be dismissed by clicking on the overlay. @default true */
    enableOverlayClick?: boolean | undefined;
    /** The identifier of the element to inject the Modal into */
    rootComponentId?: string | undefined;
    /** Allows a custom z-index to be specified (useful for modal stacking). */
    zIndex?: number | undefined;
    /** Callback when the modal is closed. Can be triggered by the close button or pressing the Escape key. */
    onClose?: (() => void) | undefined;
    /** Callback when the overlay outside of the modal is clicked. Triggered if `enableOverlayClick` is true. */
    onOverlayClick?: (() => void) | undefined;
    /** Dismiss keyboard to keep modal in fullscreen */
    dismissKeyboardOnShow?: boolean | undefined;
    /** Disable initial focus on the modal when it is shown */
    disableInitialFocus?: boolean | undefined;
}
