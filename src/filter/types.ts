export type Mode = "default" | "mobile" | "fullscreen";

export interface FilterProps {
    items: FilterItemProps[];
    onDismiss?: (() => void) | undefined;
    onDone?: (() => void) | undefined;
    onClear?: (() => void) | undefined;
}

export interface FilterItemProps {
    allowFullscreen?: boolean | undefined;
    collapsible?: boolean | undefined;
    title?: string | undefined;
    render: (mode: Mode) => React.ReactNode;
}
