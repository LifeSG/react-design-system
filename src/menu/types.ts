import {
    AnchorHTMLAttributes,
    FunctionComponentElement,
    HTMLAttributes,
    ReactElement,
} from "react";
import { PopoverRenderProps, PopoverV2TriggerProps } from "../popover-v2";
import { MenuItem } from "./menu-item";
import { MenuLink } from "./menu-link";
import { MenuSection } from "./menu-section";

/**
 * A popover-based dropdown menu component, commonly used with Avatar and Navbar.
 * Extends PopoverV2TriggerProps (except `popoverContent`).
 *
 * @keywords menu, dropdown, popover, context menu, navigation
 */
export interface MenuProps
    extends Omit<PopoverV2TriggerProps, "popoverContent"> {
    /** The menu content inside this menu. */
    menuContent: FunctionComponentElement<MenuContentProps>;
}

/**
 * The main wrapper containing the menu items, rendered inside the popover.
 *
 * @keywords menu content, menu wrapper, popover content
 */
export interface MenuContentProps
    extends HTMLAttributes<HTMLDivElement>,
        PopoverRenderProps {
    /** The menu sections inside this content. Must be one or more `Menu.Section` components. */
    children:
        | ReactElement<typeof MenuSection>
        | ReactElement<typeof MenuSection>[];
    /** Test identifier for automated testing. @default "menu-content" */
    "data-testid"?: string | undefined;
}

type MenuSectionItem =
    | ReactElement<typeof MenuItem>
    | ReactElement<typeof MenuLink>;

/**
 * A section within a menu that groups items and optionally shows a divider and label.
 *
 * @keywords menu section, group, divider, label
 */
export interface MenuSectionProps extends HTMLAttributes<HTMLUListElement> {
    /** The menu items or links inside this section. Must be one or more `Menu.Item` or `Menu.Link` components. */
    children: MenuSectionItem | MenuSectionItem[];
    /** Specify if a divider is shown at the top of the section. @default true */
    showDivider?: boolean | undefined;
    /** Optional label for this section. */
    label?: string | undefined;
    /** Test identifier for automated testing. @default "menu-section" */
    "data-testid"?: string | undefined;
}

/**
 * A clickable item within a menu section, rendered as a list item.
 *
 * @keywords menu item, list item, action
 */
export interface MenuItemProps extends HTMLAttributes<HTMLLIElement> {
    /** Main text for the menu item. */
    label?: string | undefined;
    /** Secondary text for the menu item. */
    subLabel?: string | undefined;
    /** Test identifier for automated testing. @default "menu-item" */
    "data-testid"?: string | undefined;
}

/**
 * A navigational link within a menu section, rendered as an anchor element.
 *
 * @keywords menu link, navigation, anchor
 */
export interface MenuLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    /** Test identifier for automated testing. @default "menu-link" */
    "data-testid"?: string | undefined;
}
