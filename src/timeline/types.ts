import type { PillProps } from "../pill";

/**
 * Visual state of a timeline step.
 *
 * - `"current"` — the active step in progress.
 * - `"completed"` — a finished step; renders a tick icon.
 * - `"upcoming-active"` — a future step that is reachable.
 * - `"upcoming-inactive"` — a future step that cannot yet be started.
 * - `"error"` — the current step requires action; renders an exclamation icon.
 * - `"disabled"` — an inactive step that is not reachable.
 * - `"numeric"` — renders the step's 1-based position number instead of an icon.
 */
export type Variant =
    | "completed"
    | "current"
    | "upcoming-active"
    | "upcoming-inactive"
    | "error"
    | "disabled"
    | "numeric";

/**
 * Configuration for a single step within a `Timeline`.
 */
export interface TimelineItemProps {
    /** Title of the step. */
    title: string | JSX.Element;
    /** Body content of the step. */
    content: string | JSX.Element;
    /**
     * Up to two status `Pill` descriptors rendered below the title.
     * Only the first two entries are displayed when more are provided.
     */
    statuses?: PillProps[] | undefined;
    /**
     * Visual state of this step.
     *
     * @default `"current"` for the first item and `"upcoming-active"` for all subsequent items.
     */
    variant?: Variant | undefined;
}

/**
 * Props for the `Timeline` component.
 */
export interface TimelineProps {
    /** Ordered list of steps to render. */
    items: TimelineItemProps[];
    /** Heading text displayed above the step list. */
    title?: string | undefined;
    /**
     * CSS grid column the timeline wrapper starts on.
     * Useful if component is wrapped in a css grid div.
     */
    startCol?: number | undefined;
    /**
     * Number of grid columns the timeline wrapper spans.
     * Useful if component is wrapped in a css grid div
     */
    colSpan?: number | undefined;
    /**
     * Heading level assigned to the `title` element.
     * Item titles are rendered at `headingLevel + 1`.
     *
     * @default 2
     */
    headingLevel?: number | undefined;
    /**
     * Value added to each step's displayed counter when `variant` is
     * `"numeric"`.
     *
     * @remarks
     * Use this when the timeline numbering should not restart from 1.
     * If offset = `2`, the start of the timeline will be `index + 1 + offset = 3`
     *
     * @default 0
     */
    counterOffset?: number | undefined;
    className?: string | undefined;
    id?: string | undefined;
    "data-testid"?: string | undefined;
    "data-base-indicator-testid"?: string | undefined;
}
