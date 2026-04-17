export declare const ModalV2: (({ id, show, onClose, animationFrom, children, enableOverlayClick, rootComponentId, zIndex, onOverlayClick, dismissKeyboardOnShow, "data-testid": testId, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledBy, "aria-describedby": ariaDescribedBy, disableInitialFocus, ...otherProps }: import("./types").ModalV2Props) => JSX.Element) & {
    Card: (props: import("./types").ModalCardProps & import("react").RefAttributes<HTMLDivElement>) => React.ReactElement | null;
    CloseButton: {
        ({ "data-testid": testId, ...otherProps }: import("./types").ModalCloseButtonProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    Content: {
        ({ "data-testid": testId, children, ...otherProps }: import("./types").ModalContentProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    Footer: {
        ({ "data-testid": testId, primaryButton, secondaryButton, ...otherProps }: import("./types").ModalFooterProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
};
export * from "./types";
