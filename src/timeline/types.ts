import { PillProps } from "../pill/types";

export type Variant =
    | "completed"
    | "current"
    | "upcoming-active"
    | "upcoming-inactive";

/** @deprecated This field is deprecated */
export interface TimelineStatusProps {
    /** @deprecated This field is deprecated */
    type: "dark" | "light";
    /** @deprecated This field is deprecated */
    label: string;
}

export interface TimelineItemProps {
    title: string | JSX.Element;
    content: string | JSX.Element;
    statuses?: PillProps[] | undefined;
    variant?: Variant | undefined;
}

export interface TimelineProps {
    items: TimelineItemProps[];
    title?: string | undefined;
    className?: string | undefined;
    startCol?: number | undefined;
    colSpan?: number | undefined;
    "data-testid"?: string | undefined;
    "data-base-indicator-testid"?: string | undefined;
}
