/**
 * Props for the Accordion component - collapsible content container.
 *
 * Wraps one or more `Accordion.Item` children in a panel that can be
 * individually expanded or collapsed. Supports a header title and an
 * expand/collapse-all control.
 *
 * @example
 * ```tsx
 * <Accordion title="Settings" enableExpandAll>
 *     <Accordion.Item title="Profile">...</Accordion.Item>
 *     <Accordion.Item title="Security">...</Accordion.Item>
 * </Accordion>
 * ```
 * @keywords collapsible, expandable, panel, disclosure, expand collapse
 */
export interface AccordionProps {
    /** The content of the Accordion. Must be one or more `Accordion.Item` elements. */
    children: JSX.Element | JSX.Element[];
    /** The header text content for the Accordion. */
    title?: string | undefined;
    /**
     * Specifies if the feature to expand/collapse all child items is enabled.
     *
     * @default true
     */
    enableExpandAll?: boolean | undefined;
    /**
     * Specifies the initial display state of child items.
     *
     * - `"collapse-all"`: All items start collapsed.
     * - `"expand-all"`: All items start expanded.
     *
     * @default "expand-all"
     */
    initialDisplay?: "collapse-all" | "expand-all" | undefined;
    /**
     * Specifies if the title should be shown in mobile viewports.
     *
     * @default false
     */
    showTitleInMobile?: boolean | undefined;
    /** CSS class selector for the component. */
    className?: string | undefined;
}

export type AccordionItemType = "default" | "small";

/**
 * Props for the Accordion.Item component - individual collapsible panel.
 *
 * Renders a header toggle that reveals or hides its children. When `expanded`
 * is set it overrides the parent Accordion's `initialDisplay` setting.
 */
export interface AccordionItemProps {
    /** The header text or element of the Accordion.Item. */
    title: string | JSX.Element;
    /** The content of the Accordion.Item. */
    children: JSX.Element | JSX.Element[];
    /**
     * Specifies if the item is expanded. When set, this takes precedence over
     * `initialDisplay` of the parent `Accordion`. Omit or set to `undefined`
     * to let the parent control the expand/collapse state.
     */
    expanded?: boolean | undefined;
    /** The test identifier for the component. */
    "data-testid"?: string | undefined;
    /** CSS class selector for the component. */
    className?: string | undefined;
    /**
     * Sets the style type of the component.
     *
     * @default "default"
     */
    type?: AccordionItemType | undefined;
    /**
     * Specifies if the item is collapsible.
     *
     * @default true
     */
    collapsible?: boolean | undefined;
}

export type AccordionItemHandle = HTMLDivElement & {
    expand: () => void;
    collapse: () => void;
    isExpanded: () => boolean;
};

/**
 * Transient props are denoted with $
 * See more https://styled-components.com/docs/api#transient-props
 */

export interface TitleStyleProps {
    $showInMobile?: boolean | undefined;
}

export interface TitleWrapperStyleProps {
    $hasTitle: boolean;
}
