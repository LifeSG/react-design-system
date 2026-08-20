/**
 * A full-screen overlay modal with a slide animation.
 *
 * Use `Modal` to present content that requires the user's immediate attention
 * or a focused interaction. Use `ModalV2` for built-in scroll handling and improved accessibility.
 *
 * Sub-components:
 * - `Modal.Box` — a styled content box with an optional close button.
 *
 * @deprecated Use `ModalV2` instead, which provides a more composable API, improved scroll behaviour, and proper accessibility.
 */
export declare const Modal: (({ id, show, animationFrom, children, enableOverlayClick, rootComponentId, zIndex, onOverlayClick, dismissKeyboardOnShow, className, ...otherProps }: import("./types").ModalProps) => JSX.Element) & {
    /**
     * A styled content container for use inside `Modal`. Renders an optional
     * close button and stops click events from propagating to the overlay.
     *
     * @deprecated Use `ModalV2.Card` instead.
     */
    Box: (props: import("./types").ModalBoxProps & import("react").RefAttributes<HTMLDivElement>) => React.ReactElement | null;
};
export * from "./types";
