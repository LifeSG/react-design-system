import React from "react";
import { NavItemCommonProps } from "./types";
interface Props<T> {
    items: NavItemCommonProps<T>[];
    /** toggle for mobile or desktop view */
    mobile?: boolean | undefined;
    onItemClick: (event: React.MouseEvent<HTMLAnchorElement>, item: NavItemCommonProps<T>) => void;
}
export declare const Menu: <T>({ items, mobile, onItemClick, }: Props<T>) => JSX.Element;
export {};
