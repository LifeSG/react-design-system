import { FadeColorSet } from "../shared/fade-wrapper";

/**
 * Used to organise content into multiple panes. Users can toggle between the different tabs to view different categories of information.
 *
 * @keywords tab, pane, navigation, toggle, tabs
 */
export interface TabProps {
    /** The tab contents. The tab order is determined by the specification of the child items. */
    children: JSX.Element | JSX.Element[];
    /** Specify the initial tab index that is to be displayed */
    initialActive?: number | undefined;
    /**
     * Specify the current tab index that is to be displayed. By specifying
     * this prop, the tab rendering will be manually controlled by you
     */
    currentActive?: number;
    /** CSS class name for custom styling. */
    className?: string | undefined;
    /** Unique identifier for the component. */
    id?: string | undefined;
    /** Test identifier for automated testing. */
    "data-testid"?: string | undefined;
    /** Called when a tab item selector is clicked. */
    onTabClick?: ((title: string, index: number) => void) | undefined;
    /** Extends the bottom border to the full width of the container. */
    fullWidthIndicatorLine?: boolean | undefined;
    /** The color of the fade effect when the tab is too long. */
    fadeColor?: string[] | FadeColorSet | undefined;
}

/**
 * Represents a single tab pane within a Tab component.
 *
 * @keywords tab item, pane, tab content, tab panel
 */
export interface TabItemProps {
    /** The tab selector label. */
    title: string;
    /** The content of the Tab.Item. */
    children: JSX.Element | JSX.Element[];
    /** Custom addon content displayed next to the tab title */
    titleAddon?: TitleAddonProps | undefined;
    /** CSS class name for custom styling. */
    className?: string | undefined;
    /** Unique identifier for the component. */
    id?: string | undefined;
    /** Test identifier for automated testing. */
    "data-testid"?: string | undefined;
    /** The tab selector width. */
    width?: string | undefined;
}

/**
 * Configuration for addon content displayed next to a tab title.
 *
 * @keywords tab addon, tab title addon, tab extra content
 */
export interface TitleAddonProps {
    /** addon content */
    content: JSX.Element;
    /** position of the addon content, defaults to "right" */
    position?: "left" | "right" | undefined;
}
