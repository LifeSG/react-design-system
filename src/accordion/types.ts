/** Props for the Accordion component. */
export interface AccordionProps {
    /** The accordion items to render. */
    children: JSX.Element | JSX.Element[];
    /** Optional heading text displayed above the accordion items. */
    title?: string | undefined;
    /**
     * Displays a "Show all" / "Hide all" toggle button.
     * @default true
     */
    enableExpandAll?: boolean | undefined;
    /**
     * Sets the initial expand/collapse state of all items.
     * - `"collapse-all"`: All items start collapsed.
     * - `"expand-all"`: All items start expanded.
     * @default "expand-all"
     */
    initialDisplay?: "collapse-all" | "expand-all" | undefined;
    /**
     * Displays the title on mobile viewports.
     * @default false
     */
    showTitleInMobile?: boolean | undefined;
    /** Sets the HTML `id` attribute on the root element. */
    id?: string | undefined;
    /** Sets the `data-testid` attribute for targeting the element in automated tests. */
    "data-testid"?: string | undefined;
    /** CSS class name for custom styling. */
    className?: string | undefined;
    /**
     * Heading level applied to the accordion title element.
     * @default 2
     */
    headingLevel?: number | undefined;
    /** Called when all items transition to all-expanded or all-collapsed state. */
    onExpandCollapseChange?: ((expanded: boolean) => void) | undefined;
}

export type AccordionItemType = "default" | "small";

/** Props for an individual accordion item. */
export interface AccordionItemProps {
    /** The header text or element displayed in the item's toggle button. */
    title: string | JSX.Element;
    /** The content rendered inside the item when expanded. */
    children: JSX.Element | JSX.Element[];
    /**
     * Omit or set this to undefined to allow 'Hide All'/'Show All' in parent to take precedence
     * for cases where we want the default expand behaviour
     */
    expanded?: boolean | undefined;
    /** Sets the HTML `id` attribute on the root element. */
    id?: string | undefined;
    /**
     * Sets the `data-testid` attribute for targeting the element in automated tests.
     * @default "accordion-item"
     */
    "data-testid"?: string | undefined;
    /** CSS class name for custom styling. */
    className?: string | undefined;
    /**
     * Controls the visual size variant of the item.
     * - `"default"`: Standard-height item.
     * - `"small"`: Compact-height item.
     * @default "default"
     */
    type?: AccordionItemType | undefined;
    /**
     * Enables expand and collapse behaviour for the item.
     * @default true
     */
    collapsible?: boolean | undefined;
}

/** Imperative API methods exposed via a ref on AccordionItem. */
export interface AccordionItemApi {
    /** Expands the accordion item. */
    expand: () => void;
    /** Collapses the accordion item. */
    collapse: () => void;
    /** Returns whether the accordion item is currently expanded. */
    isExpanded: () => boolean;
}

/** Combined ref type exposing the DOM element and the imperative AccordionItem API. */
export type AccordionItemHandle = HTMLDivElement & AccordionItemApi;

/**
 * Transient props are denoted with $
 * See more https://styled-components.com/docs/api#transient-props
 */

export interface TitleStyleProps {
    $showInMobile?: boolean | undefined;
}

export interface TitleWrapperStyleProps {
    $showTitleInMobile: boolean;
    $hasExpandAll: boolean;
}
