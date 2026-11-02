import type { NavItemCommonProps, NavItemLinkProps, NavItemProps } from "./types";
export declare class NavbarHelper {
    static isNavItemCommon<T>(item: NavItemProps<T> | NavItemCommonProps<T>): item is NavItemCommonProps<T>;
    static isNavItemLink<T>(item: NavItemProps<T> | NavItemCommonProps<T>): item is NavItemLinkProps<T>;
}
