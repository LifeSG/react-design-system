import { ButtonProps } from "../button";
import { TypographyLinkProps } from "../typography";

// =============================================================================
// NAV ITEM TYPES
// =============================================================================

/**
 * A standard navigation item rendered as a link, optionally with sub-menu items.
 *
 * @keywords nav item, link, sub menu, navigation link
 */
export interface NavItemLinkProps<T> extends NavItemCommonProps<T> {
    /** The link type of this navigation item. @default "link" */
    itemType?: "link";
    /** Sub-menu navigation items displayed under this link. */
    subMenu?: NavItemCommonProps<T>[] | undefined;
}

/**
 * A navigation item rendered as a custom component rather than a link.
 *
 * @keywords nav item, component, custom, navigation
 */
export interface NavItemComponentProps {
    /** The component type of this navigation item. */
    itemType: "component";
    /** The custom component to render in place of a link. */
    children: JSX.Element;
}

export type NavItemProps<T> = NavItemLinkProps<T> | NavItemComponentProps;

/**
 * Shared properties for all navigation item link variants.
 *
 * @keywords nav item, common props, identifier, options
 */
export interface NavItemCommonProps<T> extends TypographyLinkProps {
    /** The unique identifier of the navigation item. Used for the `selectedId` property. */
    id: string;
    /** Test identifier for automated testing. */
    "data-testid"?: string | undefined;
    /** Additional props to be passed to the navigation item. */
    options?: T | undefined;
}

/**
 * Navigation items configured for desktop and mobile viewports.
 *
 * @keywords nav items, desktop, mobile, navigation items
 */
export interface NavItemsProps<T> {
    /** The navigation items for the desktop viewport. */
    desktop: NavItemProps<T>[];
    /* The items for mobile drawer. Takes desktop if not specified */
    mobile?: NavItemProps<T>[] | undefined;
}

// =============================================================================
// ACTION BUTTON TYPES
// =============================================================================

/**
 * A pre-programmed download action button for the Navbar, specific to LifeSG.
 *
 * @keywords navbar button, download, action button
 */
export interface NavbarActionButtonDownloadProps {
    /** The type of action button. */
    type: "download";
    /** The props for the download button. */
    args?: ButtonProps | undefined;
    /** If specified, the item remains on the Navbar and is not collapsed to the drawer in mobile viewports. */
    uncollapsible?: boolean | undefined;
}

/**
 * A call-to-action button for the Navbar.
 *
 * @keywords navbar button, cta, action button
 */
export interface NavbarActionButtonCtaProps {
    /** The type of action button. */
    type: "button";
    /** The props for the CTA button. */
    args: ButtonProps;
    /** If specified, the item remains on the Navbar and is not collapsed to the drawer in mobile viewports. */
    uncollapsible?: boolean | undefined;
}

/**
 * Props for a custom component rendered as a Navbar action button.
 *
 * @keywords navbar component, custom render
 */
export interface NavbarButtonComponentProps {
    /** The custom component to render. */
    render: JSX.Element;
}

/**
 * A custom component action button for the Navbar.
 *
 * @keywords navbar button, component, custom action
 */
export interface NavbarActionButtonComponentProps {
    /** The type of action button. */
    type: "component";
    /** The props for the custom component button. */
    args?: NavbarButtonComponentProps | undefined;
    /** If specified, the item remains on the Navbar and is not collapsed to the drawer in mobile viewports. */
    uncollapsible?: boolean | undefined;
}

export type NavbarButtonProps =
    | NavbarActionButtonDownloadProps
    | NavbarActionButtonCtaProps
    | NavbarActionButtonComponentProps;

/**
 * Action buttons configured for desktop and mobile viewports in the Navbar.
 *
 * @keywords navbar action buttons, desktop, mobile
 */
export interface NavbarActionButtonsProps {
    /** The navigation action buttons for the desktop viewport. */
    desktop: NavbarButtonProps[];
    /** Navbar action buttons for mobile drawer. Takes desktop if not specified */
    mobile?: NavbarButtonProps[] | undefined;
}

// =============================================================================
// NAVBAR TYPES
// =============================================================================

/**
 * Branding information (name and logo) for the Navbar.
 *
 * @keywords navbar branding, brand name, logo
 */
export interface NavbarBrandingProps {
    /** The brand name of the website. */
    brandName: string;
    /** The image source URL of the brand logo. */
    logoSrc: string;
}

/**
 * Primary and secondary branding resources displayed in the Navbar.
 *
 * @keywords navbar resources, primary brand, secondary brand
 */
export interface NavbarResourcesProps {
    /** The primary branding. Defaults to the theme service branding. */
    primary?: NavbarBrandingProps | undefined;
    /** The secondary branding. */
    secondary?: NavbarBrandingProps | undefined;
}

/**
 * Shared properties used by both Navbar and NavbarDrawer.
 *
 * @keywords navbar shared, resources, action buttons, branding
 */
export interface NavbarSharedProps {
    /** Navbar resources as objects containing primary and secondary branding. */
    resources?: NavbarResourcesProps | undefined;
    /** The navigation action buttons shown in the Navbar. */
    actionButtons?: NavbarActionButtonsProps | undefined;
    /** Specifies if brand logos are visible */
    hideNavBranding?: boolean | undefined;
    /** Hide the selected link indicator across the navbar */
    hideLinkIndicator?: boolean | undefined;
}

export type DrawerDismissalMethod =
    | "close-button-click"
    | "item-click"
    | "brand-click";

/**
 * Props for the mobile navigation drawer component within the Navbar.
 *
 * @keywords navbar drawer, mobile navigation, side drawer
 */
export interface NavbarDrawerProps extends NavbarSharedProps {
    /** Toggles the visibility of the mobile navigation drawer. */
    show: boolean;
    /** The navigation content to render inside the drawer. */
    children: JSX.Element | JSX.Element[];
    /** Callback when the drawer is closed. */
    onClose?: (() => void) | undefined;
    /** Triggered when the brand icon is being clicked */
    onBrandClick?:
        | ((
              event: React.MouseEvent<HTMLAnchorElement>,
              type: BrandType
          ) => void)
        | undefined;
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

/**
 * A component that displays navigation links, action buttons, and a brand at the top of the page.
 *
 * @keywords navbar, navigation, header, nav, links, brand
 */
export interface NavbarProps<T = void> extends NavbarSharedProps {
    /** The navigation link items for desktop and mobile viewports. */
    items: NavItemsProps<T>;
    /** CSS class name for custom styling. */
    className?: string | undefined;
    /** Unique identifier for the component. */
    id?: string | undefined;
    /** Test identifier for automated testing. */
    "data-testid"?: string | undefined;
    /** The current selected navigation item identifier. */
    selectedId?: string | undefined;
    /** Specifies if the Navbar should be compressed */
    compress?: boolean | undefined;
    /** Specifies if Navbar should be fixed to top */
    fixed?: boolean | undefined;
    /** Specifies which methods will not dismiss the drawer */
    drawerDismissalExclusions?: DrawerDismissalMethod[] | undefined;
    /** Specifies if links and buttons are hidden. @default false */
    hideNavElements?: boolean | undefined;
    /** Called when the brand icon is clicked. */
    onBrandClick?: ((type: BrandType) => void) | undefined; // override
    /** Called when a navigation item is clicked. */
    onItemClick?:
        | ((item: NavItemProps<T> | NavItemCommonProps<T>) => void)
        | undefined;
    /** Called when a navigation action button is clicked. */
    onActionButtonClick?:
        | ((actionButton: NavbarButtonProps) => void)
        | undefined;
    /** Specifies if masthead should be rendered */
    masthead?: boolean | undefined;
    /** Specifies the layout type of the content in the navbar. @default "default" */
    layout?: "default" | "stretch" | undefined;
    /** Custom aria-label for the main navigation header */
    headerLabel?: string | undefined;
    /** Custom aria-label for the mobile navigation drawer */
    drawerLabel?: string | undefined;
}
