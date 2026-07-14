import type { ButtonProps } from "../button";
import type { TypographyLinkProps } from "../typography";

// =============================================================================
// NAV ITEM TYPES
// =============================================================================

/**
 * Props for a standard navigation link item.
 */
export interface NavItemLinkProps<T> extends NavItemCommonProps<T> {
    itemType?: "link";
    subMenu?: NavItemCommonProps<T>[] | undefined;
}
/**
 * Props for a custom component slot navigation item.
 */
export interface NavItemComponentProps {
    itemType: "component";
    children: JSX.Element;
}

/**
 * A single navigation item rendered by the navbar.
 */
export type NavItemProps<T> = NavItemLinkProps<T> | NavItemComponentProps;

/**
 * Shared props for link-type navigation items.
 *
 * `T` is the type of the arbitrary `options` payload.
 */
export interface NavItemCommonProps<T> extends TypographyLinkProps {
    id: string;
    "data-testid"?: string | undefined;
    /**
     * Arbitrary data passed through to callback arguments such as `onItemClick`.
     */
    options?: T | undefined;
}

/**
 * Desktop and mobile navigation item lists for the navbar.
 *
 * `T` is the type of the arbitrary `options` payload on each item.
 */
export interface NavItemsProps<T> {
    /**
     * Items rendered in the desktop navbar.
     */
    desktop: NavItemProps<T>[];
    /**
     * Items rendered in the mobile drawer. Falls back to `desktop` when omitted.
     */
    mobile?: NavItemProps<T>[] | undefined;
}

// =============================================================================
// ACTION BUTTON TYPES
// =============================================================================

/** Props for a `"download"` type action button in the navbar. */
export interface NavbarActionButtonDownloadProps {
    type: "download";
    args?: ButtonProps | undefined;
    /**
     * When `true`, the button remains visible outside the mobile drawer rather
     * than being collapsed into it.
     *
     * @default false
     */
    uncollapsible?: boolean | undefined;
}

/** Props for a `"button"` type action button in the navbar. */
export interface NavbarActionButtonCtaProps {
    type: "button";
    args: ButtonProps;
    /**
     * When `true`, the button remains visible outside the mobile drawer rather
     * than being collapsed into it.
     *
     * @default false
     */
    uncollapsible?: boolean | undefined;
}

/** Props for the internal `"component"` type action button wrapper. */
interface NavbarButtonComponentProps {
    render: JSX.Element;
}

/** Props for a `"component"` type action button in the navbar. */
export interface NavbarActionButtonComponentProps {
    type: "component";
    args?: NavbarButtonComponentProps | undefined;
    /**
     * When `true`, the button remains visible outside the mobile drawer rather
     * than being collapsed into it.
     *
     * @default false
     */
    uncollapsible?: boolean | undefined;
}

/**
 * Props for a single action button in the navbar.
 *
 * `type` discriminates between `"button"`, `"download"`, and `"component"`.
 */
export type NavbarButtonProps =
    | NavbarActionButtonDownloadProps
    | NavbarActionButtonCtaProps
    | NavbarActionButtonComponentProps;

/** Props for the desktop and mobile action button lists in the navbar. */
export interface NavbarActionButtonsProps {
    /**
     * Action buttons rendered in the desktop navbar.
     */
    desktop: NavbarButtonProps[];
    /**
     * Action buttons rendered in the mobile drawer. Falls back to `desktop`
     * when omitted.
     */
    mobile?: NavbarButtonProps[] | undefined;
}

// =============================================================================
// NAVBAR TYPES
// =============================================================================
/**
 * Branding identity for a primary or secondary brand slot in the navbar.
 */
export interface NavbarBrandingProps {
    /** The name of the brand, used for accessibility and alt text. */
    brandName: string;
    /** The source URL for the brand logo image. */
    logoSrc: string;
}

/**
 * Logo resources for the primary and secondary brand slots in the navbar.
 *
 */
export interface NavbarResourcesProps {
    /**
     * When omitted, a default logo derived from the active theme is used.
     */
    primary?: NavbarBrandingProps | undefined;
    /**
     * When omitted, the secondary brand slot is hidden.
     */
    secondary?: NavbarBrandingProps | undefined;
}

/**
 * Props shared between `NavbarProps` and `NavbarDrawerProps`.
 */
export interface NavbarSharedProps {
    /**
     * Branding and logo resources for the navbar.
     */
    resources?: NavbarResourcesProps | undefined;
    /** Action buttons rendered in the navbar and mobile drawer. */
    actionButtons?: NavbarActionButtonsProps | undefined;
    /**
     * Hides all brand logos from the navbar and drawer.
     *
     * @default false
     */
    hideNavBranding?: boolean | undefined;
    /**
     * Hides the active-item underline indicator across desktop and drawer views.
     *
     * @default false
     */
    hideLinkIndicator?: boolean | undefined;
}

/**
 * Identifies the user action that can dismiss the mobile navigation drawer.
 *
 * Pass one or more values to `drawerDismissalExclusions` on `NavbarProps` to
 * prevent those actions from closing the drawer.
 *
 * - `"close-button-click"` — the drawer's close button or overlay click
 * - `"item-click"` — clicking a nav item or action button
 * - `"brand-click"` — clicking a brand logo
 */
export type DrawerDismissalMethod =
    | "close-button-click"
    | "item-click"
    | "brand-click";

// TODO: Make this to be an internal type
/**
 * Props for the internal mobile navigation drawer panel.
 */
export interface NavbarDrawerProps extends NavbarSharedProps {
    /**
     * Controls whether the drawer is visible.
     */
    show: boolean;
    children: JSX.Element | JSX.Element[];
    /**
     * Called when the drawer requests to be closed via the close button or
     * overlay click.
     */
    onClose?: (() => void) | undefined;
    /**
     * Called when a brand logo inside the drawer is clicked.
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
     * Ref to the mobile menu button used to return focus when the drawer closes.
     */
    mobileMenuRef?: React.RefObject<HTMLButtonElement> | undefined;
}

/**
 * Identifies which brand slot was interacted with in brand-related callbacks.
 */
export type BrandType = "primary" | "secondary";

/**
 * Imperative methods exposed by the `Navbar` component via `ref`.
 */
export type NavbarDrawerApi = {
    /**
     * Programmatically closes the mobile navigation drawer with its exit
     * animation.
     */
    dismissDrawer: () => void;
};

/**
 * Imperative handle returned by `Navbar` via `ref`.
 *
 * Extends `HTMLDivElement` with `NavbarDrawerApi`. Use the ref to dismiss the
 * mobile drawer programmatically without needing to manage drawer state
 * externally.
 */
export type NavbarDrawerHandle = HTMLDivElement & NavbarDrawerApi;

/**
 * Props for the `Navbar` component.
 */
export interface NavbarProps<T = void> extends NavbarSharedProps {
    items: NavItemsProps<T>;
    className?: string | undefined;
    id?: string | undefined;
    "data-testid"?: string | undefined;
    /**
     * The currently selected navigation item identifier.
     * Must match the `id` of one of the rendered items.
     */
    selectedId?: string | undefined;
    /**
     * Reduces the height and logo size of the navbar.
     *
     * @default false
     */
    compress?: boolean | undefined;
    /**
     * Pins the navbar to the top of the viewport while the page scrolls.
     *
     * @default true
     */
    fixed?: boolean | undefined;
    /**
     * Drawer dismissal methods that should be suppressed. The drawer will not
     * close when the user performs any of the listed actions.
     */
    drawerDismissalExclusions?: DrawerDismissalMethod[] | undefined;
    /**
     * Hides nav items and action buttons, leaving only the brand area visible.
     *
     * @default false
     */
    hideNavElements?: boolean | undefined;
    /**
     * Called when a brand logo is clicked. `type` identifies which brand slot
     * was activated.
     */
    onBrandClick?: ((type: BrandType) => void) | undefined;
    /**
     * Called when a navigation item is activated from the desktop bar or the
     * mobile drawer. The item's full props object is passed as the argument.
     */
    onItemClick?:
        | ((item: NavItemProps<T> | NavItemCommonProps<T>) => void)
        | undefined;
    /**
     * Called when an action button without its own `onClick` handler is
     * activated. The button's full props object is passed as the argument.
     */
    onActionButtonClick?:
        | ((actionButton: NavbarButtonProps) => void)
        | undefined;
    /**
     * Renders the `Masthead` (SGDS official government banner) above the navbar.
     *
     * @default true
     */
    masthead?: boolean | undefined;
    /**
     * Controls how the navbar content fills its container. `"stretch"` expands
     * to the full container width; `"default"` uses the standard content width.
     *
     * @default "default"
     */
    layout?: "default" | "stretch" | undefined;
    /**
     * Accessible label announced for the main navigation header.
     *
     * @default "Main navigation menu"
     */
    headerLabel?: string | undefined;
    /**
     * Accessible label announced for the mobile navigation drawer.
     */
    drawerLabel?: string | undefined;
}
