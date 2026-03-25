/**
 * Represents a single navigation item in the LocalNav.
 *
 * @keywords local-nav-item, navigation, anchor, section
 */
export interface LocalNavItemProps {
    /** Display title of the nav item. */
    title: string | React.ReactNode;
    /** Unique identifier of the nav item. */
    id?: string | undefined;
}

interface BaseLocalNavProps {
    /** CSS class name for custom styling. */
    className?: string | undefined;
    /** Unique identifier for the component. */
    id?: string | undefined;
    /** Test identifier for automated testing. */
    "data-testid"?: string | undefined;
    /** Called when the nav item is selected. */
    onNavItemSelect: (
        e: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>,
        item: LocalNavItemProps,
        index: number
    ) => void;
    /** The nav items. */
    items: LocalNavItemProps[];
    /** The current selected nav item index. */
    selectedItemIndex?: number | undefined;
}

// =============================================================================
// NAV MENU
// =============================================================================

/**
 * Render props for a LocalNavMenu item.
 *
 * @keywords local-nav, render-props, menu
 */
export interface LocalNavMenuItemRenderProps {
    /** Whether this nav item is currently selected. */
    selected: boolean;
}

/**
 * Props for the LocalNavMenu component, which displays navigation items in a vertical list.
 *
 * @keywords local-nav, menu, vertical, navigation, sidebar
 */
export interface LocalNavMenuProps extends BaseLocalNavProps {
    /** Function to customise the rendering of the nav item. */
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

/**
 * Render props for a LocalNavDropdown item.
 *
 * @keywords local-nav, render-props, dropdown
 */
export interface LocalNavDropdownItemRenderProps {
    /** Whether this nav item is currently selected. */
    selected: boolean;
    /** Whether this nav item is currently stickied. */
    stickied: boolean;
}

/**
 * Props for the LocalNavDropdown component, which displays navigation items in a sticky dropdown.
 *
 * @keywords local-nav, dropdown, sticky, navigation, mobile
 */
export interface LocalNavDropdownProps extends BaseLocalNavProps {
    /** Default label when no nav items are selected. */
    defaultLabel: string | React.ReactNode;
    /** The top offset when the dropdown is sticky. */
    stickyOffset?: number | undefined;
    /** Function to customise the rendering of the nav item. */
    renderItem?:
        | ((
              item: LocalNavItemProps,
              renderProps: LocalNavDropdownItemRenderProps
          ) => React.ReactNode)
        | undefined;
}
