import type { TimelineProps } from "./types";
/**
 * A vertically ordered list of steps with visual state indicators.
 *
 * Use `Timeline` to communicate multi-step progress such as application stages
 * or process flows.
 * @keywords history, process, progress, stages, steps
 */
export declare const Timeline: ({ items, className, id, title, startCol, colSpan, "data-base-indicator-testid": baseIndicatorTestId, "data-testid": testId, headingLevel, counterOffset, }: TimelineProps) => JSX.Element;
