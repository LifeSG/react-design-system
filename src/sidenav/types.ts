interface SidenavBaseProps {
    id?: string | undefined;
    "data-testid"?: string | undefined;
    className?: string | undefined;
}

/**
 * Props for the Sidenav component - vertical side navigation panel.
 *
 * Renders a fixed-left sidebar containing `Sidenav.Group` children with
 * icon-labelled items and optional drawer sub-items.
 *
 * @example
 * ```tsx
 * <Sidenav>
 *     <Sidenav.Group>
 *         <Sidenav.Item title="Dashboard" icon={<DashboardIcon />} />
 *     </Sidenav.Group>
 * </Sidenav>
 * ```
 * @keywords side menu, left navigation, vertical nav, sidebar menu, navigation panel
 */
export interface SidenavProps extends SidenavBaseProps {
    /**
     * When `true`, the sidenav is fixed to the left of the viewport.
     *
     * @default true
     */
    fixed?: boolean | undefined;
    /** One or more `Sidenav.Group` elements. */
    children: React.ReactNode;
}

/**
 * Props for the Sidenav.Group component - grouped section of nav items.
 *
 * Wraps one or more `Sidenav.Item` elements. An optional bottom divider
 * visually separates groups.
 */
export interface SidenavGroupProps extends SidenavBaseProps {
    /** When `true`, renders a bottom divider below the group. */
    separator?: boolean | undefined;
    /** One or more `Sidenav.Item` elements. */
    children: React.ReactNode;
}

/**
 * Props for the Sidenav.Item component - icon nav item with optional drawer.
 *
 * Renders an icon + label nav entry. When children are provided, clicking
 * the item opens an inline drawer with `Sidenav.DrawerItem` sub-links.
 */
export interface SidenavItemProps extends SidenavBaseProps {
    title: string;
    /** The icon to be rendered */
    icon: React.ReactNode;
    /** Indicates if an item is initially selected */
    selected?: boolean | undefined;
    /** Called when item is selected */
    onClick?: ((id: string) => void) | undefined;
    /** One or more `Sidenav.DrawerItem` elements shown in the slide-out drawer. */
    children?: React.ReactNode | undefined;
}

/**
 * Props for the Sidenav.DrawerItem component - drawer-level nav link.
 *
 * A first-level item inside a `Sidenav.Item` drawer. Can contain
 * `Sidenav.DrawerSubitem` children for a second level.
 */
export interface SidenavDrawerItemProps extends SidenavBaseProps {
    title: string;
    /** One or more `Sidenav.DrawerSubitem` elements. */
    children?: React.ReactNode | undefined;
    /** Called when item is selected */
    onClick?: ((id: string) => void) | undefined;
}

/**
 * Props for the Sidenav.DrawerSubitem component - second-level drawer link.
 */
export interface SidenavDrawerSubitemProps extends SidenavBaseProps {
    title: string;
    /** Called when item is selected */
    onClick?: ((id: string) => void) | undefined;
}
