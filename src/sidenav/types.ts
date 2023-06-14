interface SidenavBaseProps {
    "data-testid"?: string | undefined;
    className?: string | undefined;
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

export interface SidenavWrapperProps extends SidenavBaseProps {
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

export interface SidenavItemProps extends SidenavBaseProps {
    id?: string | undefined;
    title: string;
    /** The icon to be rendered */
    icon: React.ReactNode;
    /** Indicates if an item is selected */
    selected?: boolean | undefined;
    /** Called when item selected */
    onClick?: (() => void) | undefined;
    children?: React.ReactNode | undefined;
}

export interface SidenavDrawerItemProps extends SidenavBaseProps {
    title: string;
    children: React.ReactNode | undefined;
    /** Called when item selected */
    onClick?: (() => void) | undefined;
}

export interface SidenavDrawerSubitemProps extends SidenavBaseProps {
    title: string;
    /** Called when item selected */
    onClick?: (() => void) | undefined;
}
