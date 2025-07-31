import { Typography } from "../typography";
import { MenuItemDiv, SubLabel } from "./menu-item.styles";
import { MenuItemProps } from "./types";

export const MenuItem = ({
    label,
    subLabel,
    children,
    "data-testid": testId = "menu-item",
    ...otherProps
}: MenuItemProps): JSX.Element => {
    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    return (
        <MenuItemDiv data-testid={testId} {...otherProps}>
            {label && (
                <Typography.BodyMD weight="semibold">{label}</Typography.BodyMD>
            )}
            {subLabel && <SubLabel>{subLabel}</SubLabel>}
            {children}
        </MenuItemDiv>
    );
};

MenuItem.displayName = "Menu.Item";
