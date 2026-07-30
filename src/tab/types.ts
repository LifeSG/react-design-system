import type { FadeColorSet } from "../shared/fade-wrapper";

// @storybookSection Tab
/**
 * Props for the `Tab` component.
 */
export interface TabProps {
    children: JSX.Element | JSX.Element[];
    /**
     * Zero-based index of the tab panel displayed on first render.
     *
     * Ignored when `currentActive` is provided.
     *
     * @default 0
     */
    initialActive?: number | undefined;
    /**
     * Zero-based index of the currently active tab panel.
     *
     * When provided, the component operates in controlled mode — the caller is
     * responsible for updating this value in response to `onTabClick` to
     * reflect tab changes.
     */
    currentActive?: number;
    className?: string | undefined;
    id?: string | undefined;
    "data-testid"?: string | undefined;
    /**
     * Called when the user clicks a tab link.
     *
     * @param title The `title` of the clicked `Tab.Item`.
     * @param index The zero-based index of the clicked `Tab.Item`.
     */
    onTabClick?: ((title: string, index: number) => void) | undefined;
    /**
     * Extends all tab indicator lines to the full width
     * of the tab bar instead of matching only the tab link width.
     *
     * @default false
     */
    fullWidthIndicatorLine?: boolean | undefined;
    /**
     * Background color(s) used for the fade overlays at the edges of the
     * scrollable tab link bar.
     *
     * Pass a `string[]` to apply the same gradient stop colors on both edges,
     * or a `FadeColorSet` to specify left and right edges independently.
     */
    fadeColor?: string[] | FadeColorSet | undefined;
}

// @storybookSection Tab.Item
/**
 * Props for the `Tab.Item` sub-component.
 */
export interface TabItemProps {
    /**
     * Text label rendered in the tab link bar for this panel.
     */
    title: string;
    children: JSX.Element | JSX.Element[];
    /**
     * Optional addon element rendered alongside the tab title in the link bar.
     */
    titleAddon?: TitleAddonProps | undefined;
    className?: string | undefined;
    id?: string | undefined;
    "data-testid"?: string | undefined;
    /**
     * Explicit width for this tab link in the tab bar. Accepts any valid CSS width value.
     */
    width?: string | undefined;
}

// @storybookSection Tab.Item
/**
 * Configuration for the optional addon element displayed next to a tab title.
 */
export interface TitleAddonProps {
    /** The element rendered as the addon. */
    content: JSX.Element;
    /**
     * Which side of the tab title the addon appears on.
     *
     * @default "right"
     */
    position?: "left" | "right" | undefined;
}
