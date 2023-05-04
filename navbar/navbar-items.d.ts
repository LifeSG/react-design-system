import React from "react";
import { NavItemProps } from "./types";
interface Props<T> {
    items: NavItemProps<T>[];
    selectedId?: string | undefined;
    /** toggle for mobile or desktop view */
    mobile?: boolean | undefined;
    onItemClick: (event: React.MouseEvent<HTMLAnchorElement>, item: NavItemProps<T>) => void;
}
export declare const NavbarItems: <T>({ items, selectedId, mobile, onItemClick, }: Props<T>) => JSX.Element;
export {};
