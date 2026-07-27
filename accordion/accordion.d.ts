import type React from "react";
import type { AccordionProps } from "./types";
/**
 * A vertically stacked set of collapsible content panels.
 *
 * Use `Accordion` to organise related content into independently expandable
 * sections with shared expand/collapse state. The container synchronises item
 * states and maintains correct heading-level hierarchy.
 *
 * Sub-components:
 * - `Accordion.Item` — a single collapsible panel with an imperative ref handle.
 */
export declare const Accordion: (({ children, title, enableExpandAll, initialDisplay, showTitleInMobile, id, "data-testid": testId, className, headingLevel, onExpandCollapseChange, }: AccordionProps) => JSX.Element) & {
    /**
     * Renders an individual collapsible section within an `Accordion`.
     *
     * Each item has a clickable header that toggles its content panel. The expanded
     * state can be individually controlled via the `expanded` prop, or left to the
     * parent `Accordion` to manage through its "Show all" / "Hide all" mechanism.
     * Exposes an imperative ref handle (`AccordionItemHandle`) for programmatic
     * expand/collapse control.
     */
    Item: (props: import("./types").AccordionItemProps & React.RefAttributes<import("./types").AccordionItemHandle>) => React.ReactElement | null;
};
