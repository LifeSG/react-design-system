import { AnchorHTMLAttributes, HTMLAttributes, ReactElement } from "react";
import { PopoverV2TriggerProps } from "../popover-v2";
import { MenuContent } from "./menu-content";
import { MenuItem } from "./menu-item";
import { MenuLink } from "./menu-link";
import { MenuSection } from "./menu-section";

export interface MenuProps
    extends Omit<PopoverV2TriggerProps, "popoverContent"> {
    menuContent: ReactElement<typeof MenuContent>;
}

export interface MenuContentProps extends HTMLAttributes<HTMLDivElement> {
    children:
        | ReactElement<typeof MenuSection>
        | ReactElement<typeof MenuSection>[];
    "data-testid"?: string | undefined;
}

type MenuSectionItem =
    | ReactElement<typeof MenuItem>
    | ReactElement<typeof MenuLink>;

export interface MenuSectionProps extends HTMLAttributes<HTMLDivElement> {
    children: MenuSectionItem | MenuSectionItem[];
    showDivider?: boolean | undefined;
    label?: string | undefined;
    "data-testid"?: string | undefined;
}

export interface MenuItemProps extends HTMLAttributes<HTMLDivElement> {
    label?: string | undefined;
    subLabel?: string | undefined;
    "data-testid"?: string | undefined;
}

export interface MenuLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    "data-testid"?: string | undefined;
}
