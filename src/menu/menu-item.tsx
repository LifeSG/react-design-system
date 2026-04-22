import { Typography } from "../typography";
import { MenuItemDiv, SubLabel } from "./menu-item.styles";
import { MenuItemProps } from "./types";

/**
 * A clickable row within a `Menu.Content` or `Menu.Section`.
 *
 * Renders a primary label and an optional sub-label. Spread additional HTML div attributes
 * (e.g. `onClick`) to handle selection.
 * @example
 * ```tsx
 * <Menu.Item label="Edit" subLabel="Modify this item" onClick={handleEdit} />
 * ```
 */
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
