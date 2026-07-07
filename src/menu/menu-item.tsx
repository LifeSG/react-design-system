import clsx from "clsx";

import { Typography } from "../typography";
import * as styles from "./menu-item.styles";
import type { MenuItemProps } from "./types";

export const MenuItem = ({
    label,
    subLabel,
    children,
    className,
    "data-testid": testId = "menu-item",
    ...otherProps
}: MenuItemProps): JSX.Element => {
    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    return (
        <li
            data-testid={testId}
            className={clsx(styles.menuItemDiv, styles.text, className)}
            {...otherProps}
        >
            {label && (
                <Typography.BodyMD className={styles.text} weight="semibold">
                    {label}
                </Typography.BodyMD>
            )}
            {subLabel && (
                <Typography.BodySM className={styles.subLabel}>
                    {subLabel}
                </Typography.BodySM>
            )}
            {children}
        </li>
    );
};

MenuItem.displayName = "Menu.Item";
