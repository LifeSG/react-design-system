import clsx from "clsx";

import * as styles from "./navbar.styles";

interface Props {
    compress?: boolean | undefined;
}

export const NavSeparator = ({ compress }: Props) => (
    <div
        className={clsx(
            styles.navSeparator,
            compress ? styles.navSeparatorCompressed : styles.navSeparatorFull,
            styles.navSeparatorResponsive
        )}
    />
);
