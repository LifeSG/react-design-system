interface SidenavBaseProps {
    id?: string | undefined;
    "data-testid"?: string | undefined;
    className?: string | undefined;
}

export interface SidenavProps extends SidenavBaseProps {
    /** Specifies if sidenav should be fixed to left. Defaults to true */
    fixed?: boolean | undefined;
    /**
     * <Sidenav.Group>
     *   ...
     * </Sidenav.Group>
     */
    children: React.ReactNode;
}

export interface SidenavGroupProps extends SidenavBaseProps {
    /** Specifies if bottom divider will be rendered */
    separator?: boolean | undefined;
    /**
     * <Sidenav.Item>
     *   ...
     * </Sidenav.Item>
     */
    children: React.ReactNode;
}

export interface SidenavItemProps extends SidenavBaseProps {
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

export interface SidenavDrawerItemProps extends SidenavBaseProps {
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

export interface SidenavDrawerSubitemProps extends SidenavBaseProps {
    title: string;
    /** Called when item is selected */
    onClick?: ((id: string | undefined) => void) | undefined;
}
