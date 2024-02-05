import { PillProps, PillType } from "../pill";

export type Variant =
    | "completed"
    | "current"
    | "upcoming-active"
    | "upcoming-inactive";

export type TimelineStatusType = PillType | "dark" | "light";

export interface TimelineStatusProps extends Omit<PillProps, "type"> {
    type: TimelineStatusType;
    /** @deprecated This attribute has been deprecated in favour of the children attribute of `PillProps` */
    label?: string;
}

export interface TimelineItemProps {
    title: string | JSX.Element;
    content: string | JSX.Element;
    statuses?: TimelineStatusProps[] | undefined;
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
