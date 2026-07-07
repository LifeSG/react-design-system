import type {
    NavItemCommonProps,
    NavItemLinkProps,
    NavItemProps,
} from "./types";

export class NavbarHelper {
    public static isNavItemCommon<T>(
        item: NavItemProps<T> | NavItemCommonProps<T>
    ): item is NavItemCommonProps<T> {
        return !!(item as NavItemCommonProps<T>).onClick;
    }

    public static isNavItemLink<T>(
        item: NavItemProps<T> | NavItemCommonProps<T>
    ): item is NavItemLinkProps<T> {
        const link = item as NavItemLinkProps<T>;
        return !link.itemType || link.itemType === "link";
    }
}
