import { PillProps } from "../pill";

export type Variant =
    | "completed"
    | "current"
    | "upcoming-active"
    | "upcoming-inactive"
    | "error"
    | "disabled"
    | "numeric";

/**
 * Represents a single step or item within a Timeline.
 *
 * @keywords timeline item, step, milestone, progress
 */
export interface TimelineItemProps {
    /** The title of the item. */
    title: string | JSX.Element;
    /** The content of the item. Formatting within the content is to be handled by the consumer. */
    content: string | JSX.Element;
    /** The status pills to be rendered. Note that only a maximum of 2 pills will be rendered. */
    statuses?: PillProps[] | undefined;
    /** The style variant of the item indicator. The first item defaults to "current", subsequent items default to "upcoming-active". */
    variant?: Variant | undefined;
}

/**
 * A component that displays upcoming steps of a process in a timeline presentation.
 *
 * @keywords timeline, steps, progress, process, milestones
 */
export interface TimelineProps {
    /** The items to be displayed. */
    items: TimelineItemProps[];
    /** The text title of the Timeline. */
    title?: string | undefined;
    /** CSS class name for custom styling. */
    className?: string | undefined;
    /** Unique identifier for the component. */
    id?: string | undefined;
    /** The column at which the items should start at (useful if component is wrapped in a CSS grid div). */
    startCol?: number | undefined;
    /** The number of columns that the component should span (useful if component is wrapped in a CSS grid div). */
    colSpan?: number | undefined;
    /** Test identifier for automated testing. */
    "data-testid"?: string | undefined;
    /** Test identifier for the component's indicators. */
    "data-base-indicator-testid"?: string | undefined;
    /** Specify a custom heading level to match the component's position in the page. */
    headingLevel?: number | undefined;
    /** The offset for the numeric indicators. If offset = 2, the start of the timeline will be index + 1 + offset = 3. @default 0 */
    counterOffset?: number | undefined;
}
