/// <reference types="react" />
import { PillProps } from "../pill";
export type Variant = "completed" | "current" | "upcoming-active" | "upcoming-inactive" | "error" | "disabled";
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
    id?: string | undefined;
    startCol?: number | undefined;
    colSpan?: number | undefined;
    "data-testid"?: string | undefined;
    "data-base-indicator-testid"?: string | undefined;
}
