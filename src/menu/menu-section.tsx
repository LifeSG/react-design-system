import clsx from "clsx";

import { Typography } from "../typography";
import { useId } from "../util";
import * as styles from "./menu-section.styles";
import type { MenuSectionProps } from "./types";

export const MenuSection = ({
    children,
    label,
    showDivider = true,
    className,
    "data-testid": testId = "menu-section",
    ...otherProps
}: MenuSectionProps): JSX.Element => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const internalId = useId();

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    return (
        <ul
            data-testid={testId}
            aria-labelledby={internalId}
            className={clsx(
                styles.section,
                showDivider && styles.sectionWithDivider,
                className
            )}
            {...otherProps}
        >
            {label && (
                <Typography.BodyXS
                    className={styles.label}
                    weight="semibold"
                    id={internalId}
                >
                    {label}
                </Typography.BodyXS>
            )}
            {children}
        </ul>
    );
};

MenuSection.displayName = "Menu.Section";
