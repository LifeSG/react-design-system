import type {
    AnchorHTMLAttributes,
    FunctionComponentElement,
    HTMLAttributes,
    ReactElement,
} from "react";

import type { PopoverRenderProps, PopoverTriggerProps } from "../popover";
import type { MenuItem } from "./menu-item";
import type { MenuLink } from "./menu-link";
import type { MenuSection } from "./menu-section";

/**
 * Props for the `Menu` trigger.
 */
export interface MenuProps extends Omit<PopoverTriggerProps, "popoverContent"> {
    /**
     * The `Menu.Content` element to display inside the popover panel.
     */
    menuContent: FunctionComponentElement<MenuContentProps>;
}

/**
 * Props for the `Menu.Content` floating panel.
 */
export interface MenuContentProps
    extends HTMLAttributes<HTMLDivElement>,
        PopoverRenderProps {
    /** One or more `Menu.Section` elements that make up the panel body. */
    children:
        | ReactElement<typeof MenuSection>
        | ReactElement<typeof MenuSection>[];
    "data-testid"?: string | undefined;
}

type MenuSectionItem =
    | ReactElement<typeof MenuItem>
    | ReactElement<typeof MenuLink>;

/**
 * Props for `Menu.Section`.
 */
export interface MenuSectionProps extends HTMLAttributes<HTMLUListElement> {
    /** One or more `Menu.Item` or `Menu.Link` elements within this section. */
    children: MenuSectionItem | MenuSectionItem[];
    /**
     * Whether to render a top divider separating this section from the one above.
     *
     * @default true
     */
    showDivider?: boolean | undefined;
    /**
     * Accessible group label rendered above the section items.
     */
    label?: string | undefined;
    "data-testid"?: string | undefined;
}

/**
 * Props for `Menu.Item`, a non-anchor interactive list entry.
 */
export interface MenuItemProps extends HTMLAttributes<HTMLLIElement> {
    /** Primary text label. */
    label?: string | undefined;
    /**
     * Secondary descriptive text rendered below `label`.
     */
    subLabel?: string | undefined;
    "data-testid"?: string | undefined;
}

/**
 * Props for `Menu.Link`, an anchor-based list entry styled as a menu item.
 */
export interface MenuLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    "data-testid"?: string | undefined;
}
