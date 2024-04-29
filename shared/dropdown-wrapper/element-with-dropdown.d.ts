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
}
export declare const ElementWithDropdown: ({ enabled, isOpen, onOpen, onClose, onDismiss, renderElement, renderDropdown, zIndex, }: ElementWithDropdownProps) => JSX.Element;
export {};
