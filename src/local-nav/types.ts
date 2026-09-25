// @storybookSection LocalNavMenu, LocalNavDropdown
/**
 * Configuration for the optional addon elements displayed alongside a
 * navigation item's title. Both slots may be used at the same time.
 */
export interface TitleAddonProps {
    /** Element rendered immediately before the title. */
    left?: JSX.Element | undefined;
    /** Element rendered after the title, flushed to the far right of the item. */
    right?: JSX.Element | undefined;
}

// @storybookSection LocalNavMenu, LocalNavDropdown
/**
 * Data for a single local navigation item.
 */
export interface LocalNavItemProps {
    title: string | React.ReactNode;
    id?: string | undefined;
    /**
     * Optional addon element rendered alongside the item title.
     *
     * Ignored when a custom `renderItem` is provided, since the caller then
     * controls the item's layout.
     */
    titleAddon?: TitleAddonProps | undefined;
}

// @storybookSkipProps
/**
 * Base props for local navigation components.
 */
interface BaseLocalNavProps {
    className?: string | undefined;
    id?: string | undefined;
    "data-testid"?: string | undefined;
    /**
     * Called when a navigation item is activated.
     *
     * @param e The originating mouse or keyboard event.
     * @param item The activated navigation item.
     * @param index Zero-based index of the activated item within `items`.
     */
    onNavItemSelect: (
        e: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>,
        item: LocalNavItemProps,
        index: number
    ) => void;
    /** The list of navigation items to render. */
    items: LocalNavItemProps[];
    /**
     * Zero-based index of the currently selected item.
     */
    selectedItemIndex?: number | undefined;
}

// =============================================================================
// NAV MENU
// =============================================================================

// @storybookSection LocalNavMenu
/**
 * Render props supplied to the `renderItem` callback of `LocalNavMenu`.
 */
export interface LocalNavMenuItemRenderProps {
    /** Whether this item is the currently selected navigation item. */
    selected: boolean;
}

// @storybookSection LocalNavMenu
/**
 * Props for the `LocalNavMenu` component.
 */
export interface LocalNavMenuProps extends BaseLocalNavProps {
    /**
     * Custom renderer for each navigation item.
     */
    renderItem?:
        | ((
              item: LocalNavItemProps,
              renderProps: LocalNavMenuItemRenderProps
          ) => React.ReactNode)
        | undefined;
}

// =============================================================================
// NAV DROPDOWN
// =============================================================================

// @storybookSection LocalNavDropdown
/**
 * Render props supplied to the `renderItem` callback of `LocalNavDropdown`.
 */
export interface LocalNavDropdownItemRenderProps {
    /** Whether this item is the currently selected navigation item. */
    selected: boolean;
    /**
     * Whether the dropdown is currently in its stickied (fixed) state.
     * Use this to conditionally style items differently when the nav is pinned.
     */
    stickied: boolean;
}

// @storybookSection LocalNavDropdown
/**
 * Props for the `LocalNavDropdown` component.
 */
export interface LocalNavDropdownProps extends BaseLocalNavProps {
    /**
     * Label shown in the collapsed trigger when no item is selected or when the
     * dropdown is not stickied. Once the dropdown is stickied and an item is
     * selected, the trigger displays the selected item's title instead.
     */
    defaultLabel: string | React.ReactNode;
    /**
     * Distance in pixels from the top of the viewport while the dropdown is stickied.
     *
     * @default 0
     */
    stickyOffset?: number | undefined;
    /**
     * Custom renderer for each item in the dropdown list.
     */
    renderItem?:
        | ((
              item: LocalNavItemProps,
              renderProps: LocalNavDropdownItemRenderProps
          ) => React.ReactNode)
        | undefined;
}
