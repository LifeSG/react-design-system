export declare const Modal: (({ id, show, animationFrom, children, enableOverlayClick, rootComponentId, zIndex, onOverlayClick, dismissKeyboardOnShow, ...otherProps }: import("./types").ModalProps) => JSX.Element) & {
    Box: (props: import("./types").ModalBoxProps & import("react").RefAttributes<HTMLDivElement>) => React.ReactElement | null;
};
export * from "./types";
