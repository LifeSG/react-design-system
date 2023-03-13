export type Mode = "default" | "mobile" | "fullscreen";

export interface FilterProps {
    items: FilterItemProps[];
}

export interface FilterItemProps {
    allowFullscreen?: boolean | undefined;
    collapsible?: boolean | undefined;
    title?: string | undefined;
    render: (context: Mode) => React.ReactNode;
}
