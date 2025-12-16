import { AnchorHTMLAttributes, FunctionComponentElement, HTMLAttributes, ReactElement } from "react";
import { PopoverRenderProps, PopoverV2TriggerProps } from "../popover-v2";
import { MenuItem } from "./menu-item";
import { MenuLink } from "./menu-link";
import { MenuSection } from "./menu-section";
export interface MenuProps extends Omit<PopoverV2TriggerProps, "popoverContent"> {
    menuContent: FunctionComponentElement<MenuContentProps>;
}
export interface MenuContentProps extends HTMLAttributes<HTMLDivElement>, PopoverRenderProps {
    children: ReactElement<typeof MenuSection> | ReactElement<typeof MenuSection>[];
    "data-testid"?: string | undefined;
}
type MenuSectionItem = ReactElement<typeof MenuItem> | ReactElement<typeof MenuLink>;
export interface MenuSectionProps extends HTMLAttributes<HTMLDivElement> {
    children: MenuSectionItem | MenuSectionItem[];
    showDivider?: boolean | undefined;
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
