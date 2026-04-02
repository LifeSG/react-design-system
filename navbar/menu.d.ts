import React from "react";
import { NavItemCommonProps } from "./types";
interface Props<T> {
    items: NavItemCommonProps<T>[];
    onItemClick: (event: React.MouseEvent<HTMLAnchorElement>, item: NavItemCommonProps<T>) => void;
}
export declare const Menu: <T>({ items, onItemClick }: Props<T>) => JSX.Element;
export {};
