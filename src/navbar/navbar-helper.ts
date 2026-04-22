import { NavItemCommonProps, NavItemLinkProps, NavItemProps } from "./types";

export namespace NavbarHelper {
    export const isNavItemCommon = <T>(
        item: NavItemProps<T> | NavItemCommonProps<T>
    ): item is NavItemCommonProps<T> => {
        return !!(item as NavItemCommonProps<T>).onClick;
    };

    export const isNavItemLink = <T>(
        item: NavItemProps<T> | NavItemCommonProps<T>
    ): item is NavItemLinkProps<T> => {
        const link = item as NavItemLinkProps<T>;
        return !link.itemType || link.itemType === "link";
    };
}
