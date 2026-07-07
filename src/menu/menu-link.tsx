import clsx from "clsx";

import { Typography } from "../typography";
import * as styles from "./menu-link.styles";
import type { MenuLinkProps } from "./types";

export const MenuLink = ({
    children,
    className,
    "data-testid": testId = "menu-link",
    ...otherProps
}: MenuLinkProps): JSX.Element => {
    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    return (
        <li className={styles.menuLinkDiv}>
            <Typography.LinkMD
                data-testid={testId}
                underlineStyle="none"
                className={clsx(styles.link, className)}
                {...otherProps}
            >
                {children}
            </Typography.LinkMD>
        </li>
    );
};

MenuLink.displayName = "Menu.Link";
