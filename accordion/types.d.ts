/** Props for the `Accordion` container component. */
export interface AccordionProps {
    children: JSX.Element | JSX.Element[];
    /** Section heading rendered above the item list. Visually hidden on mobile unless `showTitleInMobile` is true. */
    title?: string | undefined;
    /**
     * Renders the "Show all" / "Hide all" toggle button.
     *
     * @default true
     */
    enableExpandAll?: boolean | undefined;
    /**
     * Controls whether all items start expanded or collapsed.
     *
     * @default "expand-all"
     */
    initialDisplay?: "collapse-all" | "expand-all" | undefined;
    /**
     * When `true`, the `title` remains visible on mobile viewports.
     *
     * @default false
     */
    showTitleInMobile?: boolean | undefined;
    id?: string | undefined;
    "data-testid"?: string | undefined;
    className?: string | undefined;
    /**
     * The ARIA heading level for the accordion and item titles.
     * Specify a custom value to reflect the component's hierarchy within a page.
     * When a title is provided, the title level = n and the item title level = n + 1.
     * Otherwise, the item title level = n.
     *
     * @default 2
     */
    headingLevel?: number | undefined;
    /**
     * Called after the expand/collapse state changes.
     */
    onExpandCollapseChange?: ((expanded: boolean) => void) | undefined;
}
/** Visual size variant for an `Accordion.Item`. */
export type AccordionItemType = "default" | "small";
/** Props for the `Accordion.Item` sub-component. */
export interface AccordionItemProps {
    title: string | JSX.Element;
    children: JSX.Element | JSX.Element[];
    /**
     * Controls the expanded state of this item. Omit (or pass `undefined`) to let the parent
     * "Show all" / "Hide all" button manage the state. Pass an explicit boolean to take
     * individual control of this item.
     */
    expanded?: boolean | undefined;
    id?: string | undefined;
    "data-testid"?: string | undefined;
    className?: string | undefined;
    /** Visual size variant for the accordion item. */
    type?: AccordionItemType | undefined;
    /**
     * When `false`, the item header is non-interactive and the content panel is
     * always visible.
     *
     * @default true
     */
    collapsible?: boolean | undefined;
}
/** Imperative API available on the `Accordion.Item` ref. */
export interface AccordionItemApi {
    expand: () => void;
    collapse: () => void;
    isExpanded: () => boolean;
}
/** Ref handle for `Accordion.Item`. */
export type AccordionItemHandle = HTMLDivElement & AccordionItemApi;
