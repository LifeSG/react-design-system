import type React from "react";
import type { NavItemCommonProps } from "./types";
interface Props<T> {
    items: NavItemCommonProps<T>[];
    selectedId?: string | undefined;
    onItemClick: (event: React.MouseEvent<HTMLAnchorElement>, item: NavItemCommonProps<T>) => void;
}
export declare const Menu: <T>({ items, selectedId, onItemClick, }: Props<T>) => JSX.Element;
export {};
