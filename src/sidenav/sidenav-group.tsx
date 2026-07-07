import clsx from "clsx";

import * as styles from "./sidenav-group.styles";
import type { SidenavGroupProps } from "./types";

export const SidenavGroup = ({
    separator,
    children,
    className,
    ...otherProps
}: SidenavGroupProps) => {
    // =========================================================================
    // RENDER FUNCTIONS
    // =========================================================================
    return (
        <ul {...otherProps} className={clsx(styles.container, className)}>
            {children}
            {separator && (
                <li data-testid="divider" className={styles.divider} />
            )}
        </ul>
    );
};
