import { AnchorHTMLAttributes, FunctionComponentElement, HTMLAttributes, ReactElement } from "react";
import { PopoverRenderProps, PopoverV2TriggerProps } from "../popover-v2";
import { MenuItem } from "./menu-item";
import { MenuLink } from "./menu-link";
export interface MenuProps extends Omit<PopoverV2TriggerProps, "popoverContent"> {
    menuContent: FunctionComponentElement<MenuContentProps>;
}
export interface MenuContentProps extends HTMLAttributes<HTMLDivElement>, PopoverRenderProps {
    children: ReactElement<MenuSectionProps> | ReactElement<MenuSectionProps>[];
    "data-testid"?: string | undefined;
}
type MenuSectionItem = ReactElement<typeof MenuItem> | ReactElement<typeof MenuLink>;
export interface MenuSectionProps extends HTMLAttributes<HTMLUListElement> {
    children: MenuSectionItem | MenuSectionItem[];
    showDivider?: boolean | undefined;
    columns?: number | undefined;
    label?: string | undefined;
    "data-testid"?: string | undefined;
}
export interface MenuItemProps extends HTMLAttributes<HTMLLIElement> {
    label?: string | undefined;
    subLabel?: string | undefined;
    "data-testid"?: string | undefined;
}
export interface MenuLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    "data-testid"?: string | undefined;
}
export {};
