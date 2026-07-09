interface SidenavBaseProps {
    id?: string | undefined;
    "data-testid"?: string | undefined;
    className?: string | undefined;
}

/**
 * Props for the `Sidenav` root navigation shell.
 */
export interface SidenavProps extends SidenavBaseProps {
    /**
     * Pins the sidebar to the left edge of the viewport while the page scrolls.
     *
     * @default true
     */
    fixed?: boolean | undefined;
    /**
     * Navigation groups and items. Accepts `Sidenav.Group` elements.
     */
    children: React.ReactNode;
    /**
     * Accessible label announced for the sidebar navigation landmark.
     *
     * @default "Sidebar"
     */
    "aria-label"?: string | undefined;
}

/**
 * Props for `Sidenav.Group` component.
 */
export interface SidenavGroupProps extends SidenavBaseProps {
    /**
     * Renders a horizontal divider after the last item in the group.
     */
    separator?: boolean | undefined;
    /**
     * Navigation items within the group. Accepts `Sidenav.Item` elements.
     */
    children: React.ReactNode;
    /**
     * Accessible label for this navigation group.
     */
    "aria-label"?: string | undefined;
}

/**
 * Props for `Sidenav.Item` component.
 */
export interface SidenavItemProps extends SidenavBaseProps {
    /**
     * Label displayed below the icon.
     */
    title: string;
    /**
     * Icon displayed above the title.
     */
    icon: React.ReactNode;
    /**
     * Sets the item as initially selected on mount.
     */
    selected?: boolean | undefined;
    /**
     * Called when the item is activated and it has no drawer children. When
     * `children` are provided, clicking opens the drawer without invoking this
     * callback.
     *
     * @param id The item's resolved `id` value.
     */
    onClick?: ((id: string | undefined) => void) | undefined;
    /**
     * Drawer content displayed to the right of the sidebar when the item is
     * active. Accepts `Sidenav.DrawerItem` elements.
     */
    children?: React.ReactNode | undefined;
}

/**
 * Props for `Sidenav.DrawerItem`component.
 */
export interface SidenavDrawerItemProps extends SidenavBaseProps {
    /**
     * The displayed label.
     */
    title: string;
    /**
     * Sub-level entries for this section. Accepts `Sidenav.DrawerSubitem`
     * elements. When provided, clicking toggles the collapsed/expanded state
     * instead of invoking `onClick`.
     */
    children?: React.ReactNode | undefined;
    /**
     * Called when the item is activated and it has no sub-item children.
     *
     * @param id The item's `id` value.
     */
    onClick?: ((id: string | undefined) => void) | undefined;
}

/**
 * Props for `Sidenav.DrawerSubitem` component.
 */
export interface SidenavDrawerSubitemProps extends SidenavBaseProps {
    /**
     * The displayed label.
     */
    title: string;
    /**
     * Called when the sub-item is activated.
     *
     * @param id The sub-item's `id` value.
     */
    onClick?: ((id: string | undefined) => void) | undefined;
}
