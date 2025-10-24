import { ButtonProps } from "../button";
import { TypographyLinkProps } from "../typography";
export interface NavItemLinkProps<T> extends NavItemCommonProps<T> {
    itemType?: "link";
    subMenu?: NavItemCommonProps<T>[] | undefined;
}
export interface NavItemComponentProps {
    itemType: "component";
    children: JSX.Element;
}
export type NavItemProps<T> = NavItemLinkProps<T> | NavItemComponentProps;
export interface NavItemCommonProps<T> extends TypographyLinkProps {
    id: string;
    "data-testid"?: string | undefined;
    options?: T | undefined;
}
export interface NavItemsProps<T> {
    desktop: NavItemProps<T>[];
    mobile?: NavItemProps<T>[] | undefined;
}
export interface NavbarActionButtonDownloadProps {
    type: "download";
    args?: ButtonProps | undefined;
    uncollapsible?: boolean | undefined;
}
export interface NavbarActionButtonCtaProps {
    type: "button";
    args: ButtonProps;
    uncollapsible?: boolean | undefined;
}
export interface NavbarButtonComponentProps {
    render: JSX.Element;
}
export interface NavbarActionButtonComponentProps {
    type: "component";
    args?: NavbarButtonComponentProps | undefined;
    uncollapsible?: boolean | undefined;
}
export type NavbarButtonProps = NavbarActionButtonDownloadProps | NavbarActionButtonCtaProps | NavbarActionButtonComponentProps;
export interface NavbarActionButtonsProps {
    desktop: NavbarButtonProps[];
    /** Navbar action buttons for mobile drawer. Takes desktop if not specified */
    mobile?: NavbarButtonProps[] | undefined;
}
export interface NavbarBrandingProps {
    brandName: string;
    logoSrc: string;
}
export interface NavbarResourcesProps {
    primary?: NavbarBrandingProps | undefined;
    secondary?: NavbarBrandingProps | undefined;
}
export interface NavbarSharedProps {
    resources?: NavbarResourcesProps | undefined;
    actionButtons?: NavbarActionButtonsProps | undefined;
    /** Specifies if brand logos are visible */
    hideNavBranding?: boolean | undefined;
}
export type DrawerDismissalMethod = "close-button-click" | "item-click" | "brand-click";
export interface NavbarDrawerProps extends NavbarSharedProps {
    show: boolean;
    children: JSX.Element | JSX.Element[];
    onClose?: (() => void) | undefined;
    /** Triggered when the brand icon is being clicked */
    onBrandClick?: ((event: React.MouseEvent<HTMLAnchorElement>, type: BrandType) => void) | undefined;
    /** Custom aria-label for the mobile navigation drawer */
    drawerLabel?: string | undefined;
    /** Ref to the mobile menu button for focus management */
    mobileMenuRef?: React.RefObject<HTMLButtonElement> | undefined;
}
export type BrandType = "primary" | "secondary";
export type NavbarDrawerApi = {
    dismissDrawer: () => void;
};
export type NavbarDrawerHandle = HTMLDivElement & NavbarDrawerApi;
export interface NavbarProps<T = void> extends NavbarSharedProps {
    items: NavItemsProps<T>;
    className?: string | undefined;
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
    onBrandClick?: ((type: BrandType) => void) | undefined;
    onItemClick?: ((item: NavItemProps<T> | NavItemCommonProps<T>) => void) | undefined;
    onActionButtonClick?: ((actionButton: NavbarButtonProps) => void) | undefined;
    /** Specifies if masthead should be rendered */
    masthead?: boolean | undefined;
    layout?: "default" | "stretch" | undefined;
    /** Custom aria-label for the main navigation header */
    headerLabel?: string | undefined;
    /** Custom aria-label for the mobile navigation drawer */
    drawerLabel?: string | undefined;
}
