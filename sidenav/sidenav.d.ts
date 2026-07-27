import type { SidenavProps } from "./types";
/**
 * A fixed sidebar navigation component for multi-level page navigation.
 *
 * Use `Sidenav` to present a persistent icon-based navigation rail with
 * optional menu drawers.
 */
export declare const Sidenav: (({ fixed, children, "aria-label": ariaLabel, className, ...otherProps }: SidenavProps) => import("react/jsx-runtime").JSX.Element) & {
    /** Renders a group of navigation items, optionally separated by a divider. */
    Group: ({ separator, children, className, ...otherProps }: import("./types").SidenavGroupProps) => import("react/jsx-runtime").JSX.Element;
    /** Renders a single icon-and-label navigation entry that can open a menu drawer. */
    Item: ({ children, icon, title, onClick, selected, className, ...otherProps }: import("./types").SidenavItemProps) => import("react/jsx-runtime").JSX.Element;
    /** Renders a menu item inside an item's drawer, with optional collapsible sub-items. */
    DrawerItem: ({ id, title, onClick, children, className, ...otherProps }: import("./types").SidenavDrawerItemProps) => import("react/jsx-runtime").JSX.Element;
    /** Renders a leaf-level navigation entry inside a `Sidenav.DrawerItem`. */
    DrawerSubitem: ({ id, title, onClick, className, ...otherProps }: import("./types").SidenavDrawerSubitemProps) => import("react/jsx-runtime").JSX.Element;
};
