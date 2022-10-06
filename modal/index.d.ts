/// <reference types="react" />
export declare const Modal: (({ id, show, animationFrom, children, enableOverlayClick, rootComponentId, zIndex, onOverlayClick, ...otherProps }: import("./types").ModalProps) => JSX.Element) & {
    Box: ({ id, children, onClose, showCloseButton, ...otherProps }: import("./types").ModalBoxProps) => JSX.Element;
};
export * from "./types";
