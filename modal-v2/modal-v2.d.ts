import React from "react";
import type { ModalV2Props } from "./types";
/**
 * A composable modal dialog with slot-based content layout.
 *
 * Use `ModalV2` when you need a controlled overlay dialog with structured
 * content slots.
 *
 * Sub-components:
 * - `ModalV2.Card` — wraps modal content and arranges `Content`, `Footer`, and `CloseButton` slots in the correct layout.
 * - `ModalV2.CloseButton` — renders an accessible close button that invokes the modal's `onClose` callback.
 * - `ModalV2.Content` — container for the body content of the modal card.
 * - `ModalV2.Footer` — footer area for primary and secondary action buttons.
 * @keywords dialog, overlay, popup
 */
export declare const ModalV2: (({ id, show, onClose, animationFrom, children, enableOverlayClick, rootComponentId, zIndex, onOverlayClick, dismissKeyboardOnShow, "data-testid": testId, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledBy, "aria-describedby": ariaDescribedBy, disableInitialFocus, className, ...otherProps }: ModalV2Props) => JSX.Element) & {
    /** Wraps modal content and arranges `Content`, `Footer`, and `CloseButton` slots in the correct layout. */
    Card: (props: import("./types").ModalCardProps & React.RefAttributes<HTMLDivElement>) => React.ReactElement | null;
    /** Renders an accessible close button that invokes the modal's `onClose` callback. */
    CloseButton: {
        ({ "data-testid": testId, className, ...otherProps }: import("./types").ModalCloseButtonProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    /** Container for the body content of the modal card. */
    Content: {
        ({ "data-testid": testId, children, className, ...otherProps }: import("./types").ModalContentProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    /** Footer area for primary and secondary action buttons. */
    Footer: {
        ({ "data-testid": testId, primaryButton, secondaryButton, className, ...otherProps }: import("./types").ModalFooterProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    /** Header bar with a close button and optional title. Use instead of `CloseButton` when a heading is needed. */
    Header: {
        ({ "data-testid": testId, title, closeButtonPosition, className, ...otherProps }: import("./types").ModalHeaderProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
};
