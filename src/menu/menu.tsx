import { cloneElement } from "react";
import { PopoverRenderProps, PopoverTrigger } from "../popover-v2";
import { MenuContent } from "./menu-content";
import { MenuItem } from "./menu-item";
import { MenuLink } from "./menu-link";
import { MenuSection } from "./menu-section";
import { MenuContentProps, MenuProps } from "./types";

/**
 * A popover-based dropdown menu component, commonly used with Avatar and Navbar.
 * Extends PopoverV2TriggerProps (except `popoverContent`).
 * @example
 * ```tsx
 * <MenuTrigger menuContent={<Menu.Content><Menu.Item label="Edit" onClick={handleEdit} /></Menu.Content>}>
 *     <button>Open Menu</button>
 * </MenuTrigger>
 * ```
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

/**
 * A popover-based dropdown menu that composes `Menu.Content`, `Menu.Section`, `Menu.Item`, and `Menu.Link`.
 *
 * Renders as a trigger element (typically a button or avatar) that opens a floating panel on interaction.
 * @example
 * ```tsx
 * <Menu menuContent={<Menu.Content><Menu.Item label="Edit" onClick={handleEdit} /></Menu.Content>}>
 *     <button>Open</button>
 * </Menu>
 * ```
 */
export const Menu = Object.assign(MenuTrigger, {
    Content: MenuContent,
    Section: MenuSection,
    Item: MenuItem,
    Link: MenuLink,
});
