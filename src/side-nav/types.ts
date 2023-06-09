interface SideNavBaseProps {
    "data-testid"?: string | undefined;
    className?: string | undefined;
    id?: string | undefined;
    title: string;
    children: React.ReactNode;
}

export interface SideNavProps
    extends Pick<SideNavBaseProps, "children" | "className" | "data-testid"> {}

export interface SideNavGroupProps
    extends Pick<SideNavBaseProps, "children" | "className" | "data-testid"> {
    separator?: boolean | undefined;
}

export interface SideNavItemProps extends Omit<SideNavBaseProps, "children"> {
    icon: React.ReactNode;
    /** Pre select item */
    selected?: boolean | undefined;
    /** Called when item selected */
    onClick?: (() => void) | undefined;
}
