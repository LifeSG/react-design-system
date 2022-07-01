// Generated with util/create-component.js

export interface TimelineStatusProps {
    type: "dark" | "light";
    label: string;
}

export interface TimelineItemProps {
    title: string | JSX.Element;
    content: string | JSX.Element;
    statuses?: TimelineStatusProps[];
}

export interface TimelineProps {
    items: TimelineItemProps[];
    className?: string;
    title?: string;
    startCol?: number;
    colSpan?: number;
    baseIndicatorTestID?: string;
}
