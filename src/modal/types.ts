import React from "react";

export type ModalAnimationDirection = "top" | "bottom" | "left" | "right";

type OverlayClickProps =
    | {
          enableOverlayClick: false;
          onOverlayClick?: (() => void) | undefined;
      }
    | {
          enableOverlayClick?: true | undefined;
          onOverlayClick: () => void;
      };

export type ModalProps = React.HTMLAttributes<HTMLDivElement> & {
    show: boolean;
    children: React.ReactNode;
    /** Animation direction of appearance and dismissal. Values: "top" | "bottom" | "left" | "right" */
    animationFrom?: ModalAnimationDirection | undefined;
    /** The identifier of the element to inject the Modal into */
    rootComponentId?: string | undefined;
    zIndex?: number | undefined;
    /** Dismiss keyboard to keep modal in fullscreen */
    dismissKeyboardOnShow?: boolean | undefined;
} & OverlayClickProps;

export interface ModalBoxProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    showCloseButton?: boolean | undefined;
    onClose?: (() => void) | undefined;
}
