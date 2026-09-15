import type React from "react";
import type { FadeColorSet } from "../shared/fade-wrapper";
export interface TabProps {
    children: JSX.Element | JSX.Element[];
    /** Specify the initial tab index that is to be displayed */
    initialActive?: number | undefined;
    /**
     * Specify the current tab index that is to be displayed. By specifying
     * this prop, the tab rendering will be manually controlled by you
     */
    currentActive?: number;
    className?: string | undefined;
    id?: string | undefined;
    "data-testid"?: string | undefined;
    onTabClick?: ((title: string, index: number) => void) | undefined;
    fullWidthIndicatorLine?: boolean | undefined;
    fadeColor?: string[] | FadeColorSet | undefined;
}
export interface TabItemProps {
    title: string;
    children: JSX.Element | JSX.Element[];
    /** Custom addon content displayed next to the tab title */
    titleAddon?: TitleAddonProps | undefined;
    className?: string | undefined;
    id?: string | undefined;
    "data-testid"?: string | undefined;
    width?: string | undefined;
}
export interface TitleAddonProps {
    /** addon content */
    content: JSX.Element;
    /** position of the addon content, defaults to "right" */
    position?: "left" | "right" | undefined;
}
/**
 * Props for the `Tab.Context` component.
 */
export interface TabContextProps {
    children: React.ReactNode;
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
    currentActive?: number | undefined;
    /**
     * Called when the user clicks a tab link.
     *
     * @param title The `title` of the clicked `Tab.TabListItem`.
     * @param index The zero-based index of the clicked `Tab.TabListItem`.
     */
    onTabClick?: ((title: string, index: number) => void) | undefined;
}
/**
 * Props for the `Tab.TabList` component.
 */
export interface TabListProps {
    children: React.ReactNode;
    "data-testid"?: string | undefined;
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
/**
 * Props for the `Tab.TabListItem` component.
 */
export interface TabListItemProps {
    /**
     * Text label rendered in the tab link bar for this item.
     */
    title: string;
    /**
     * Optional addon element rendered alongside the tab title in the link bar.
     */
    titleAddon?: TitleAddonProps | undefined;
    /**
     * Explicit width for this tab link in the tab bar. Accepts any valid CSS width value.
     */
    width?: string | undefined;
}
/**
 * Props for the `Tab.Panel` component.
 */
export interface TabPanelProps {
    /**
     * Zero-based index identifying which active tab this panel corresponds to.
     */
    index: number;
    children: React.ReactNode;
    className?: string | undefined;
    id?: string | undefined;
    "data-testid"?: string | undefined;
}
