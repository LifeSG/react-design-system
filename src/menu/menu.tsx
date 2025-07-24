import { PopoverTrigger } from "../popover-v2";
import { MenuContent } from "./menu-content";
import { MenuItem } from "./menu-item";
import { MenuLink } from "./menu-link";
import { MenuSection } from "./menu-section";
import { MenuProps } from "./types";

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
            popoverContent={() => menuContent}
            data-testid={testId}
            {...otherProps}
        >
            {children}
        </PopoverTrigger>
    );
};

export const Menu = Object.assign(MenuTrigger, {
    Content: MenuContent,
    Section: MenuSection,
    Item: MenuItem,
    Link: MenuLink,
});
