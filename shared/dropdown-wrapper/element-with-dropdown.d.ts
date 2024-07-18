/// <reference types="react" />
interface ElementWithDropdownProps {
    enabled: boolean;
    isOpen: boolean;
    onOpen?: () => void | undefined;
    onClose?: () => void | undefined;
    onDismiss?: () => void | undefined;
    renderElement: () => React.ReactNode;
    renderDropdown: () => React.ReactNode;
    zIndex?: number | undefined;
    clickToToggle?: boolean | undefined;
}
export declare const ElementWithDropdown: ({ enabled, isOpen, onOpen, onClose, onDismiss, renderElement, renderDropdown, zIndex, clickToToggle, }: ElementWithDropdownProps) => import("react/jsx-runtime").JSX.Element;
export {};
