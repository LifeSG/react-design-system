import React from "react";
import { NavItemCommonProps, NavItemProps } from "./types";
interface Props<T> {
    items: NavItemProps<T>[];
    selectedId?: string | undefined;
    /** toggle for mobile or desktop view */
    mobile?: boolean | undefined;
    hideNavBranding?: boolean | undefined;
    /** hide the selected LinkIndicator */
    hideLinkIndicator?: boolean | undefined;
    onItemClick: (event: React.MouseEvent<HTMLAnchorElement>, item: NavItemProps<T> | NavItemCommonProps<T>) => void;
}
export declare const NavbarItems: <T>({ items, selectedId, mobile, hideNavBranding, hideLinkIndicator, onItemClick, }: Props<T>) => JSX.Element;
export {};
