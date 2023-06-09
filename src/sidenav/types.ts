interface SidenavBaseProps {
    "data-testid"?: string | undefined;
    className?: string | undefined;
    children: React.ReactNode;
}

export interface SidenavProps extends SidenavBaseProps {
    /** Fix sidenav to position left */
    fixed?: boolean | undefined;
    /**
     * <Sidenav.Group>
     *   ...
     * </Sidenav.Group>
     */
    children: React.ReactNode;
}

export interface SidenavGroupProps extends SidenavBaseProps {
    /** Divider will be rendered */
    separator?: boolean | undefined;
    /**
     * <Sidenav.Item>
     *   ...
     * </Sidenav.Item>
     */
    children: React.ReactNode;
}

export interface SidenavItemProps extends Omit<SidenavBaseProps, "children"> {
    id?: string | undefined;
    title: string;
    /** The icon to be rendered */
    icon: React.ReactNode;
    /** Indicates if an item is selected */
    selected?: boolean | undefined;
    /** Called when item selected */
    onClick?: (() => void) | undefined;
}
