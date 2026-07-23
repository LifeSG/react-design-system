/**
 * Direction from which the modal animates in and out.
 */
export type ModalAnimationDirection = "top" | "bottom" | "left" | "right";

/**
 * Props for the `ModalV2.Card` sub-component.
 */
export interface ModalCardProps extends React.HTMLAttributes<HTMLDivElement> {
    "data-testid"?: string | undefined;
    children: React.ReactNode;
    /**
     * Ref to the modal card DOM element, used to apply styles directly to it.
     */
    elementRef?: React.Ref<HTMLDivElement> | undefined;
}

/**
 * Props for the `ModalV2.CloseButton` slot.
 */
export interface ModalCloseButtonProps
    extends React.HTMLAttributes<HTMLDivElement> {
    "data-testid"?: string | undefined;
}

/**
 * Props for the `ModalV2.Content` slot.
 */
export interface ModalContentProps
    extends React.HTMLAttributes<HTMLDivElement> {
    "data-testid"?: string | undefined;
    children: React.ReactNode;
}

/**
 * Props for the `ModalV2.Footer` slot.
 */
export interface ModalFooterProps extends React.HTMLAttributes<HTMLDivElement> {
    "data-testid"?: string | undefined;
    /**
     * Node rendered in the primary action position.
     */
    primaryButton?: React.ReactNode | undefined;
    /**
     * Node rendered in the secondary action position.
     */
    secondaryButton?: React.ReactNode | undefined;
}

/**
 * Props for the `ModalV2` component.
 */
export interface ModalV2Props extends React.HTMLAttributes<HTMLDivElement> {
    "data-testid"?: string | undefined;
    /**
     * Controls whether the modal is visible.
     */
    show: boolean;
    /**
     * The content of the modal. The parent element must be a valid HTML
     * element or a component that forwards a ref to a valid HTML element.
     *
     * @remarks This element is used to determine the boundaries for overlay click detection.
     */
    children: React.JSX.Element;
    /**
     * Direction from which the modal animates in and out.
     *
     * @default "bottom"
     */
    animationFrom?: ModalAnimationDirection | undefined;
    /**
     * Whether clicking the overlay backdrop triggers `onOverlayClick`.
     * The caller is responsible for dismissing the modal in the callback.
     *
     * @default true
     */
    enableOverlayClick?: boolean | undefined;
    /**
     * The `id` of the DOM element to portal the modal into.
     */
    rootComponentId?: string | undefined;
    /**
     * The z-index applied to the overlay stack.
     */
    zIndex?: number | undefined;
    /**
     * Called when the modal is dismissed via the Escape key and close button.
     */
    onClose?: (() => void) | undefined;
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
    /**
     * Disables automatic focus on the modal container when it opens. When
     * `true`, the consumer is responsible for focusing an element within the
     * modal.
     *
     * @default false
     */
    disableInitialFocus?: boolean | undefined;
}
