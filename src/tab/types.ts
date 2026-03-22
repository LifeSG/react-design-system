/**
 * Props for the Tab component - tabbed content panel.
 *
 * Renders a row of tab selectors and shows the content of the active tab.
 * Can be used in uncontrolled mode (`initialActive`) or controlled mode
 * (`currentActive`).
 *
 * @example
 * ```tsx
 * <Tab onTabClick={(title, index) => setActiveIndex(index)}>
 *     <Tab.Item title="Details"><DetailsContent /></Tab.Item>
 *     <Tab.Item title="History"><HistoryContent /></Tab.Item>
 * </Tab>
 * ```
 * @keywords tabbed panel, tab strip, content switcher, segmented view, tabbed interface
 */
export interface TabProps {
    /** The `Tab.Item` children that define each tab's selector and content. */
    children: JSX.Element | JSX.Element[];
    /**
     * Specifies the initial tab index to display in uncontrolled mode.
     *
     * @default 0
     */
    initialActive?: number | undefined;
    /**
     * Specifies the active tab index in controlled mode. When set, tab
     * switching must be managed by the parent.
     */
    currentActive?: number;
    /** CSS class selector for the component. */
    className?: string | undefined;
    /** The unique id attribute of the component. */
    id?: string | undefined;
    /** The test identifier for the component. */
    "data-testid"?: string | undefined;
    /**
     * Called when a tab selector is clicked.
     *
     * @param title - The title of the clicked tab.
     * @param index - The zero-based index of the clicked tab.
     */
    onTabClick?: ((title: string, index: number) => void) | undefined;
}

/**
 * Props for the Tab.Item component - individual tab panel.
 *
 * Declares the tab selector label (`title`) and the panel content
 * (`children`) rendered when this tab is active.
 */
export interface TabItemProps {
    /** The label displayed in the tab selector. */
    title: string;
    /** The panel content rendered when this tab is active. */
    children: JSX.Element | JSX.Element[];
    /** CSS class selector for the component. */
    className?: string | undefined;
    /** The unique id attribute of the component. */
    id?: string | undefined;
    /** The test identifier for the component. */
    "data-testid"?: string | undefined;
}

export interface TabLinkProps {
    title: string;
    counter?: number | undefined;
}
