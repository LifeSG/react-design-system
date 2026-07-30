import { cloneElement } from "react";

import type { PopoverRenderProps } from "../popover";
import { PopoverTrigger } from "../popover";
import { MenuContent } from "./menu-content";
import { MenuItem } from "./menu-item";
import { MenuLink } from "./menu-link";
import { MenuSection } from "./menu-section";
import type { MenuContentProps, MenuProps } from "./types";

/**
 * Trigger wrapper that anchors a `Menu.Content` panel to its child element.
 *
 * Prefer the `Menu` composite export when building a full menu — it bundles
 * `Menu.Content`, `Menu.Section`, `Menu.Item`, and `Menu.Link` as named
 * sub-components alongside the trigger.
 */
export const MenuTrigger = ({
    children,
    position = "bottom-start",
    menuContent,
    "data-testid": testId = "menu",
    ...otherProps
}: MenuProps): JSX.Element => {
    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    return (
        <PopoverTrigger
            position={position}
            popoverContent={(renderProps: PopoverRenderProps) =>
                cloneElement<MenuContentProps>(menuContent, {
                    overflow: renderProps.overflow,
                    maxHeight: renderProps.maxHeight,
                })
            }
            data-testid={testId}
            {...otherProps}
        >
            {children}
        </PopoverTrigger>
    );
};

// @catalog
/**
 * A popover-anchored menu composed of sections and interactive items.
 *
 * Use `Menu` when a trigger element should open a floating panel of actions or
 * navigation links.
 *
 * Sub-components:
 * - `Menu.Content` — the floating panel that contains menu sections.
 * - `Menu.Item` — a non-anchor interactive list item with a primary label and optional sub-label.
 * - `Menu.Link` — an anchor (`<a>`) list item styled as a menu entry.
 * - `Menu.Section` — a grouping container for `Menu.Item` and `Menu.Link` entries.
 */
export const Menu = Object.assign(MenuTrigger, {
    /** Renders the floating panel that contains menu sections. */
    Content: MenuContent,
    /** Renders a non-anchor interactive list item with a primary label and optional sub-label. */
    Item: MenuItem,
    /** Renders an anchor (`<a>`) list item styled as a menu entry. */
    Link: MenuLink,
    /** Groups related menu entries. */
    Section: MenuSection,
});
