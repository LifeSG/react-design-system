import { ButtonProps } from "../button";
import { TextLinkProps } from "../text";

// =============================================================================
// NAV ITEM TYPES
// =============================================================================
export interface NavItemProps<T> extends TextLinkProps {
    id: string;
    "data-testid"?: string | undefined;
    options?: T | undefined;
    subMenu?: NavSubItemProps<T>[] | undefined;
}

export interface NavSubItemProps<T> extends TextLinkProps {
    id: string;
    "data-testid"?: string | undefined;
    options?: T | undefined;
}

export interface NavItemsProps<T> {
    desktop: NavItemProps<T>[];
    /* The items for mobile drawer. Takes desktop if not specified */
    mobile?: NavItemProps<T>[] | undefined;
    searchMenuItems?: NavSubItemProps<T>[] | undefined;
}

// =============================================================================
// ACTION BUTTON TYPES
// =============================================================================

export interface NavbarButtonComponentProps {
    render: JSX.Element;
}

export interface NavbarButtonProps {
    type: "download" | "button" | "component";
    args?: ButtonProps | NavbarButtonComponentProps | undefined;
}

export interface NavbarActionButtonsProps {
    desktop: NavbarButtonProps[];
    /** Navbar action buttons for mobile drawer. Takes desktop if not specified */
    mobile?: NavbarButtonProps[] | undefined;
}

// =============================================================================
// NAVBAR TYPES
// =============================================================================
export interface NavbarResourcesProps {
    brandName: string;
    logoSrc: string;
}

export interface NavbarSharedProps {
    resources?: NavbarResourcesProps | undefined;
    actionButtons?: NavbarActionButtonsProps | undefined;
    /** Triggered when the brand icon is being clicked */
    onBrandClick?: (
        event: React.MouseEvent<HTMLAnchorElement>
    ) => void | undefined;
}

export type DrawerDismissalMethod =
    | "close-button-click"
    | "item-click"
    | "brand-click";

export interface NavbarDrawerProps extends NavbarSharedProps {
    show: boolean;
    children: JSX.Element | JSX.Element[];
    onClose?: () => void | undefined;
}

export interface NavbarSecondarySharedProps {
    resourcesSecondaryBrand?: NavbarResourcesProps | undefined;
    actionButtons?: NavbarActionButtonsProps | undefined;
    /** Triggered when the brand icon is being clicked */
    onBrandClick?: (
        event: React.MouseEvent<HTMLAnchorElement>
    ) => void | undefined;
}

export interface NavbarProps<T = void>
    extends NavbarSharedProps,
        NavbarSecondarySharedProps {
    items: NavItemsProps<T>;
    id?: string | undefined;
    "data-testid"?: string | undefined;
    selectedId?: string | undefined;
    /** Specifies if the Navbar should be compressed */
    compress?: boolean | undefined;
    /** Specifies if Navbar should be fixed to top */
    fixed?: boolean | undefined;
    /** Specifies which methods will not dismiss the drawer */
    drawerDismissalExclusions?: DrawerDismissalMethod[] | undefined;
    hideNavElements?: boolean | undefined;
    /** Custom component. This overrides the logo, links and download section */
    children?: JSX.Element | JSX.Element[] | undefined;
    showSearch?: boolean | undefined;
    onBrandClick?: () => void | undefined; // override
    onItemClick?: (item: NavItemProps<T>) => void | undefined;
    onActionButtonClick?:
        | ((actionButton: NavbarButtonProps) => void)
        | undefined;
}
