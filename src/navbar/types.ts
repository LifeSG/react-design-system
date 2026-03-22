import { ButtonProps } from "../button";
import { TextLinkProps } from "../text";

// =============================================================================
// NAV ITEM TYPES
// =============================================================================

export interface NavItemLinkProps<T> extends NavItemCommonProps<T> {
    itemType?: "link";
    subMenu?: NavItemCommonProps<T>[] | undefined;
}
export interface NavItemComponentProps {
    itemType: "component";
    children: JSX.Element;
}

export type NavItemProps<T> = NavItemLinkProps<T> | NavItemComponentProps;

export interface NavItemCommonProps<T> extends TextLinkProps {
    id: string;
    "data-testid"?: string | undefined;
    options?: T | undefined;
}

export interface NavItemsProps<T> {
    desktop: NavItemProps<T>[];
    /* The items for mobile drawer. Takes desktop if not specified */
    mobile?: NavItemProps<T>[] | undefined;
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
    uncollapsible?: boolean | undefined;
}

export interface NavbarActionButtonsProps {
    desktop: NavbarButtonProps[];
    /** Navbar action buttons for mobile drawer. Takes desktop if not specified */
    mobile?: NavbarButtonProps[] | undefined;
}

// =============================================================================
// NAVBAR TYPES
// =============================================================================
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

export type DrawerDismissalMethod =
    | "close-button-click"
    | "item-click"
    | "brand-click";

export interface NavbarDrawerProps extends NavbarSharedProps {
    show: boolean;
    children: JSX.Element | JSX.Element[];
    onClose?: (() => void) | undefined;
    /** Triggered when the brand icon is being clicked */
    onBrandClick?:
        | ((
              event: React.MouseEvent<HTMLAnchorElement>,
              type: BrandType
          ) => void)
        | undefined;
}

export type BrandType = "primary" | "secondary";

export type NavbarDrawerHandle = HTMLDivElement & {
    dismissDrawer: () => void;
};

/**
 * Props for the Navbar component - top navigation bar.
 *
 * Renders a full-width header navigation bar with desktop links, mobile
 * drawer, optional action buttons, and brand logos. Supports fixed
 * positioning and a compressed height variant.
 *
 * @example
 * ```tsx
 * <Navbar
 *     items={{
 *         desktop: [{ id: "home", href: "/", children: "Home" }]
 *     }}
 *     selectedId="home"
 * />
 * ```
 * @keywords top navigation, header nav, app bar, menu bar, navigation header
 */
export interface NavbarProps<T = void> extends NavbarSharedProps {
    /** The nav link items for desktop and optional mobile drawer. */
    items: NavItemsProps<T>;
    /** CSS class selector for the component. */
    className?: string | undefined;
    /** The unique id attribute of the component. */
    id?: string | undefined;
    /** The test identifier for the component. */
    "data-testid"?: string | undefined;
    /** The id of the currently active nav item (highlights that item). */
    selectedId?: string | undefined;
    /**
     * When `true`, reduces the Navbar height to a compact size.
     *
     * @default false
     */
    compress?: boolean | undefined;
    /**
     * When `true`, the Navbar is positioned fixed at the top of the viewport.
     *
     * @default true
     */
    fixed?: boolean | undefined;
    /** Specifies which interaction methods should not close the mobile drawer. */
    drawerDismissalExclusions?: DrawerDismissalMethod[] | undefined;
    /** When `true`, hides nav links and action buttons (e.g., during loading). */
    hideNavElements?: boolean | undefined;
    /** Called when a brand logo is clicked. Overrides the shared `onBrandClick`. */
    onBrandClick?: ((type: BrandType) => void) | undefined;
    /** Called when a navigation item is clicked. */
    onItemClick?: ((item: NavItemProps<T>) => void) | undefined;
    /** Called when an action button is clicked. */
    onActionButtonClick?:
        | ((actionButton: NavbarButtonProps) => void)
        | undefined;
    /** When `true`, renders the government masthead above the navbar. */
    masthead?: boolean | undefined;
    /**
     * Controls whether the navbar content fills full width.
     *
     * @default "default"
     */
    layout?: "default" | "stretch" | undefined;
}
