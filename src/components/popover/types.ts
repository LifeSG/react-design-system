export interface PopoverProps {
    visible?: boolean;
    children: string | JSX.Element;
    onMobileClose?: () => void;
    id?: string;
    className?: string;
    "data-testid"?: string;
}

export interface PopoverHOCProps {
    onPopoverAppear?: () => void;
    onPopoverDismiss?: () => void;
}

export interface PopoverHOCOptionsProps {
    content: string | JSX.Element;
    trigger?: "click" | "hover";
    id?: string;
    "data-testid"?: string;
}
