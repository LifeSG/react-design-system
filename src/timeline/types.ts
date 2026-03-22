import { PillProps, PillType } from "../pill";

export type Variant =
    | "completed"
    | "current"
    | "upcoming-active"
    | "upcoming-inactive"
    | "error";

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

/**
 * Props for the Timeline component - vertical process/status tracker.
 *
 * Renders an ordered list of titled items with optional status pills and
 * variant indicators. Grid column props (`startCol`, `colSpan`) are useful
 * when the component is placed inside a CSS grid container.
 *
 * @example
 * ```tsx
 * <Timeline
 *     title="Application Status"
 *     items={[
 *         { title: "Submitted", content: <span>Jan 1</span>, variant: "completed" },
 *         { title: "In Review", content: <span>Current step</span>, variant: "current" },
 *     ]}
 * />
 * ```
 * @keywords process tracker, status history, event history, progress steps, vertical stepper
 */
export interface TimelineProps {
    /** The ordered list of timeline step items. */
    items: TimelineItemProps[];
    /** An optional heading displayed above the timeline. */
    title?: string | undefined;
    /** CSS class selector for the component. */
    className?: string | undefined;
    /** The CSS grid column start index (for grid layout placement). */
    startCol?: number | undefined;
    /** The number of CSS grid columns to span (for grid layout placement). */
    colSpan?: number | undefined;
    /** The test identifier for the component. */
    "data-testid"?: string | undefined;
    /** The test identifier shared across all step indicator elements. */
    "data-base-indicator-testid"?: string | undefined;
}
