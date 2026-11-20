import clsx from "clsx";

import * as styles from "./navbar.styles";

interface Props {
    compress?: boolean | undefined;
    /** Applies the responsive margins for tablet and mobile viewports */
    responsive?: boolean | undefined;
}

export const NavSeparator = ({ compress, responsive = true }: Props) => (
    <div
        className={clsx(
            styles.navSeparator,
            compress ? styles.navSeparatorCompressed : styles.navSeparatorFull,
            responsive && styles.navSeparatorResponsive
        )}
    />
);
