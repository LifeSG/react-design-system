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

// @storybookSection Menu
/**
 * Props for the `Menu` component.
 *
 */
export interface MenuProps extends Omit<PopoverTriggerProps, "popoverContent"> {
    /**
     * The `Menu.Content` element to display inside the popover panel.
     */
    menuContent: FunctionComponentElement<MenuContentProps>;
}

// @storybookSection Menu.Content
/**
 * Props for the `Menu.Content` sub-component.
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

// @storybookSkipProps
type MenuSectionItem =
    | ReactElement<typeof MenuItem>
    | ReactElement<typeof MenuLink>;

// @storybookSection Menu.Section
/**
 * Props for the `Menu.Section` sub-component.
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
    /**
     * @default "menu-section"
     */
    "data-testid"?: string | undefined;
}

// @storybookSection Menu.Item
/**
 * Props for the `Menu.Item` sub-component.
 */
export interface MenuItemProps extends HTMLAttributes<HTMLLIElement> {
    /** Primary text label. */
    label?: string | undefined;
    /**
     * Secondary descriptive text rendered below `label`.
     */
    subLabel?: string | undefined;
    /**
     * @default "menu-item"
     */
    "data-testid"?: string | undefined;
}

// @storybookSection Menu.Link
/**
 * Props for the `Menu.Link` sub-component.
 */
export interface MenuLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    /**
     * @default "menu-link"
     */
    "data-testid"?: string | undefined;
}
