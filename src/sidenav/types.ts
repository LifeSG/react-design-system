interface SidenavBaseProps {
    "data-testid"?: string | undefined;
    className?: string | undefined;
    children: React.ReactNode;
}

export interface SidenavProps extends SidenavBaseProps {}

export interface SidenavGroupProps extends SidenavBaseProps {
    separator?: boolean | undefined;
}

export interface SidenavItemProps extends Omit<SidenavBaseProps, "children"> {
    id?: string | undefined;
    title: string;
    icon: React.ReactNode;
    /** Indicates if an item is selected */
    selected?: boolean | undefined;
    /** Called when item selected */
    onClick?: (() => void) | undefined;
}
