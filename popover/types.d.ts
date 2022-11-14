/// <reference types="react" />
export interface PopoverProps {
    children: string | JSX.Element;
    visible?: boolean | undefined;
    id?: string | undefined;
    className?: string | undefined;
    "data-testid"?: string | undefined;
    onMobileClose?: () => void | undefined;
}
export interface PopoverHOCProps {
    onPopoverAppear?: () => void | undefined;
    onPopoverDismiss?: () => void | undefined;
}
export interface PopoverHOCOptionsProps {
    content: string | JSX.Element;
    trigger?: "click" | "hover" | undefined;
    id?: string | undefined;
    "data-testid"?: string | undefined;
}
