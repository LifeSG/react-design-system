import { NavItemCommonProps, NavItemLinkProps, NavItemProps } from "./types";
export declare namespace NavbarHelper {
    const isNavItemCommon: <T>(item: NavItemProps<T> | NavItemCommonProps<T>) => item is NavItemCommonProps<T>;
    const isNavItemLink: <T>(item: NavItemProps<T> | NavItemCommonProps<T>) => item is NavItemLinkProps<T>;
}
