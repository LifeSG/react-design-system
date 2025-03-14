import React from "react";

export type ModalAnimationDirection = "top" | "bottom" | "left" | "right";

export interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
    show: boolean;
    children: React.ReactNode;
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
