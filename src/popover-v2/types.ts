export interface PopoverV2Props {
    children: string | JSX.Element;
    visible?: boolean | undefined;
    id?: string | undefined;
    className?: string | undefined;
    "data-testid"?: string | undefined;
    onMobileClose?: (() => void) | undefined;
}

export type PopoverV2TriggerType = "click" | "hover";

export interface PopoverV2TriggerProps {
    children: React.ReactNode;
    popoverContent: string | JSX.Element;
    trigger?: PopoverV2TriggerType | undefined;
    id?: string | undefined;
    className?: string | undefined;
    "data-testid"?: string | undefined;
    onPopoverAppear?: (() => void) | undefined;
    onPopoverDismiss?: (() => void) | undefined;
}
