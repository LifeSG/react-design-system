/** Shared base props for all Sidenav sub-components. */
interface SidenavBaseProps {
    /** Unique identifier for the component. */
    id?: string | undefined;
    /** Test identifier for automated testing. */
    "data-testid"?: string | undefined;
    /** CSS class name for custom styling. */
    className?: string | undefined;
}

/**
 * A component that renders navigation buttons on the side of a page.
 *
 * @keywords sidenav, sidebar, navigation, fixed, menu
 */
export interface SidenavProps extends SidenavBaseProps {
    /** Specifies if sidenav should be fixed to left. Defaults to true */
    fixed?: boolean | undefined;
    /**
     * <Sidenav.Group>
     *   ...
     * </Sidenav.Group>
     */
    children: React.ReactNode;
    /** the accessible label */
    "aria-label"?: string | undefined;
}

/**
 * A grouping component for Sidenav items, optionally separated by a divider.
 *
 * @keywords sidenav, group, separator, nav, section
 */
export interface SidenavGroupProps extends SidenavBaseProps {
    /** Specifies if bottom divider will be rendered */
    separator?: boolean | undefined;
    /**
     * <Sidenav.Item>
     *   ...
     * </Sidenav.Item>
     */
    children: React.ReactNode;
    /** the accessible label */
    "aria-label"?: string | undefined;
}

/**
 * A navigation item in the Sidenav with an icon, title and optional drawer subitems.
 *
 * @keywords sidenav, item, icon, selected, navigation
 */
export interface SidenavItemProps extends SidenavBaseProps {
    /** Display title of the item. */
    title: string;
    /** The icon to be rendered */
    icon: React.ReactNode;
    /** Indicates if an item is initially selected */
    selected?: boolean | undefined;
    /** Called when item is selected */
    onClick?: ((id: string | undefined) => void) | undefined;
    /**
     * <Sidenav.DrawerItem>
     *   ...
     * </Sidenav.DrawerItem>
     */
    children?: React.ReactNode | undefined;
}

/**
 * A drawer item within a Sidenav.Item that can contain sub-navigation entries.
 *
 * @keywords sidenav, drawer, item, submenu, navigation
 */
export interface SidenavDrawerItemProps extends SidenavBaseProps {
    /** Display title of the item. */
    title: string;
    /**
     * <Sidenav.DrawerSubitem>
     *   ...
     * </Sidenav.DrawerSubitem>
     */
    children?: React.ReactNode | undefined;
    /** Called when item is selected */
    onClick?: ((id: string | undefined) => void) | undefined;
}

/**
 * A sub-navigation item nested within a Sidenav drawer item.
 *
 * @keywords sidenav, drawer, subitem, nested, navigation
 */
export interface SidenavDrawerSubitemProps extends SidenavBaseProps {
    /** Display title of the item. */
    title: string;
    /** Called when item is selected */
    onClick?: ((id: string | undefined) => void) | undefined;
}
