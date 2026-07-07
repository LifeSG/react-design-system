export type ModalAnimationDirection = "top" | "bottom" | "left" | "right";

export interface ModalCardProps extends React.HTMLAttributes<HTMLDivElement> {
    "data-testid"?: string | undefined;
    children: React.ReactNode;
}

export interface ModalCloseButtonProps
    extends React.HTMLAttributes<HTMLDivElement> {
    "data-testid"?: string | undefined;
}

export interface ModalContentProps
    extends React.HTMLAttributes<HTMLDivElement> {
    "data-testid"?: string | undefined;
    children: React.ReactNode;
}

export interface ModalFooterProps extends React.HTMLAttributes<HTMLDivElement> {
    "data-testid"?: string | undefined;
    primaryButton?: React.ReactNode | undefined;
    secondaryButton?: React.ReactNode | undefined;
}

export interface ModalV2Props extends React.HTMLAttributes<HTMLDivElement> {
    "data-testid"?: string | undefined;
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
    onClose?: (() => void) | undefined;
    onOverlayClick?: (() => void) | undefined;
    /** Dismiss keyboard to keep modal in fullscreen */
    dismissKeyboardOnShow?: boolean | undefined;
    /** Disable automatic initial focus on show. Consumer must focus an element within the modal. */
    disableInitialFocus?: boolean | undefined;
}
