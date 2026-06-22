import type { ButtonProps } from "../button";
import type { TypographyLinkProps } from "../typography";

// =============================================================================
// NAV ITEM TYPES
// =============================================================================

/**
 * Shared fields for navbar link items.
 */
export interface NavItemCommonProps<T> extends TypographyLinkProps {
    /**
     * Unique identifier used for selection state and click callbacks.
     */
    id: string;

    /**
     * Sets the `data-testid` attribute for targeting the element in automated
     * tests.
     */
    "data-testid"?: string | undefined;

    /**
     * Additional metadata returned in click callbacks for the item.
     */
    options?: T | undefined;
}

/**
 * Link-style navigation item rendered inside the navbar.
 */
export interface NavItemLinkProps<T> extends NavItemCommonProps<T> {
    /**
     * Discriminator for union narrowing.
     */
    itemType?: "link";

    /**
     * Optional nested links rendered as a submenu for this item.
     */
    subMenu?: NavItemCommonProps<T>[] | undefined;
}

/**
 * Custom component slot rendered as a navigation item.
 */
export interface NavItemComponentProps {
    itemType: "component";
    children: JSX.Element;
}

/**
 * Navigation item rendered by the navbar.
 *
 * `itemType` determines whether the item is a standard link or a custom
 * component slot.
 */
export type NavItemProps<T> = NavItemLinkProps<T> | NavItemComponentProps;

/**
 * Desktop and mobile navigation item collections for the navbar.
 *
 * @remarks
 * `mobile` falls back to `desktop` when it is not provided.
 */
export interface NavItemsProps<T> {
    desktop: NavItemProps<T>[];

    /**
     * Items rendered in the mobile drawer.
     * Falls back to `desktop` when omitted.
     */
    mobile?: NavItemProps<T>[] | undefined;
}

// =============================================================================
// ACTION BUTTON TYPES
// =============================================================================

/**
 * Download button configuration for navbar action buttons.
 */
export interface NavbarActionButtonDownloadProps {
    type: "download";
    args?: ButtonProps | undefined;

    /**
     * Keeps this action visible in the top bar instead of collapsing into the
     * mobile drawer.
     */
    uncollapsible?: boolean | undefined;
}

/**
 * CTA button configuration for navbar action buttons.
 */
export interface NavbarActionButtonCtaProps {
    type: "button";
    args: ButtonProps;

    /**
     * Keeps this action visible in the top bar instead of collapsing into the
     * mobile drawer.
     */
    uncollapsible?: boolean | undefined;
}

/**
 * Custom component renderer used by action-button component entries.
 */
export interface NavbarButtonComponentProps {
    render: JSX.Element;
}

/**
 * Custom component configuration for navbar action buttons.
 */
export interface NavbarActionButtonComponentProps {
    type: "component";
    args?: NavbarButtonComponentProps | undefined;

    /**
     * Keeps this action visible in the top bar instead of collapsing into the
     * mobile drawer.
     */
    uncollapsible?: boolean | undefined;
}

/**
 * Action button entry rendered by the navbar.
 */
export type NavbarButtonProps =
    | NavbarActionButtonDownloadProps
    | NavbarActionButtonCtaProps
    | NavbarActionButtonComponentProps;

/**
 * Desktop and mobile action-button collections for the navbar.
 *
 * @remarks
 * `mobile` falls back to `desktop` when it is not provided.
 */
export interface NavbarActionButtonsProps {
    desktop: NavbarButtonProps[];

    /**
     * Action buttons rendered in the mobile drawer.
     * Falls back to `desktop` when omitted.
     */
    mobile?: NavbarButtonProps[] | undefined;
}

// =============================================================================
// NAVBAR TYPES
// =============================================================================

/**
 * Branding content for one navbar logo slot.
 */
export interface NavbarBrandingProps {
    brandName: string;
    logoSrc: string;
}

/**
 * Resource logos displayed in the navbar brand area.
 */
export interface NavbarResourcesProps {
    primary?: NavbarBrandingProps | undefined;
    secondary?: NavbarBrandingProps | undefined;
}

/**
 * Shared navbar options used by desktop and drawer variants.
 */
export interface NavbarSharedProps {
    resources?: NavbarResourcesProps | undefined;
    actionButtons?: NavbarActionButtonsProps | undefined;

    /**
     * Hides primary and secondary brand logos from the navbar.
     */
    hideNavBranding?: boolean | undefined;

    /**
     * Hides the selected-item indicator for navigation links.
     */
    hideLinkIndicator?: boolean | undefined;
}

/**
 * User actions that can trigger mobile drawer dismissal.
 */
export type DrawerDismissalMethod =
    | "close-button-click"
    | "item-click"
    | "brand-click";

/**
 * Props for rendering the mobile navbar drawer.
 */
export interface NavbarDrawerProps extends NavbarSharedProps {
    show: boolean;
    children: JSX.Element | JSX.Element[];
    onClose?: (() => void) | undefined;

    /**
     * Called when a brand link inside the drawer is activated.
     */
    onBrandClick?:
        | ((
              event: React.MouseEvent<HTMLAnchorElement>,
              type: BrandType
          ) => void)
        | undefined;

    /**
     * Accessible label announced for the mobile navigation drawer.
     */
    drawerLabel?: string | undefined;

    /**
     * Ref to the mobile menu trigger used for returning focus when closed.
     */
    mobileMenuRef?: React.RefObject<HTMLButtonElement> | undefined;
}

/**
 * Brand slot identifier passed to brand-click callbacks.
 */
export type BrandType = "primary" | "secondary";

/**
 * Imperative API exposed by the navbar ref.
 */
export type NavbarDrawerApi = {
    /**
     * Closes the mobile drawer programmatically.
     */
    dismissDrawer: () => void;
};

/**
 * Navbar ref handle that combines the root element with drawer controls.
 */
export type NavbarDrawerHandle = HTMLDivElement & NavbarDrawerApi;

/**
 * Props for rendering and controlling the navbar.
 *
 * Use `selectedId` with `onItemClick` for controlled selection behavior.
 *
 * @remarks
 * Mobile items and action buttons fall back to their desktop counterparts when
 * `items.mobile` or `actionButtons.mobile` is omitted.
 *
 * @example
 * <Navbar
 *   selectedId="overview"
 *   items={{
 *     desktop: [{ id: "overview", label: "Overview", href: "/overview" }],
 *   }}
 *   drawerDismissalExclusions={["item-click"]}
 * />
 */
export interface NavbarProps<T = void> extends NavbarSharedProps {
    /**
     * Navigation items rendered in desktop and mobile navbar layouts.
     */
    items: NavItemsProps<T>;

    className?: string | undefined;
    id?: string | undefined;

    /**
     * Sets the `data-testid` attribute for targeting the element in automated
     * tests.
     */
    "data-testid"?: string | undefined;

    /**
     * Currently selected navigation item id.
     * Should match an `id` from the rendered item set.
     */
    selectedId?: string | undefined;

    /**
     * Reduces navbar vertical spacing for compact layouts.
     *
     * @default false
     */
    compress?: boolean | undefined;

    /**
     * Pins the navbar to the top of the viewport.
     *
     * @default true
     */
    fixed?: boolean | undefined;

    /**
     * Drawer dismissal methods that should be ignored.
     *
     * @default []
     */
    drawerDismissalExclusions?: DrawerDismissalMethod[] | undefined;

    /**
     * Hides desktop navigation items, action buttons, and mobile menu trigger.
     */
    hideNavElements?: boolean | undefined;

    /**
     * Called when either primary or secondary brand is activated.
     */
    onBrandClick?: ((type: BrandType) => void) | undefined; // override

    /**
     * Called when a navigation item is activated.
     *
     * For link items without an item-level `onClick`, the default anchor
     * navigation is prevented so selection can be controlled externally.
     */
    onItemClick?:
        | ((item: NavItemProps<T> | NavItemCommonProps<T>) => void)
        | undefined;

    /**
     * Called when an action button is activated and no item-level click handler
     * is provided.
     */
    onActionButtonClick?:
        | ((actionButton: NavbarButtonProps) => void)
        | undefined;

    /**
     * Shows the masthead above the navbar.
     *
     * @default true
     */
    masthead?: boolean | undefined;

    /**
     * Controls content width behavior inside the navbar container.
     *
     * @default "default"
     */
    layout?: "default" | "stretch" | undefined;

    /**
     * Accessible label announced for the main navigation region.
     *
     * @default "Main navigation menu"
     */
    headerLabel?: string | undefined;

    /**
     * Accessible label announced for the mobile navigation drawer.
     */
    drawerLabel?: string | undefined;
}
