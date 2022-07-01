import React from "react";

export type ModalAnimationDirection = "top" | "bottom" | "left" | "right";

export interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
    show: boolean;
    animationFrom?: ModalAnimationDirection;
    children: JSX.Element | JSX.Element[];
    enableOverlayClick?: boolean;
    stacked?: boolean;
    rootComponentId?: string;
    onOverlayClick?: () => void;
}

export interface ModalBoxProps extends React.HTMLAttributes<HTMLDivElement> {
    showCloseButton?: boolean;
    onClose?: () => void;
    children: JSX.Element | JSX.Element[];
}
