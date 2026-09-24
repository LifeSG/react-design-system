import clsx from "clsx";
import { Children, useMemo, useRef } from "react";

import { useApplyStyle } from "../theme";
import { Typography } from "../typography";
import { useId } from "../util";
import * as styles from "./menu-section.styles";
import type { MenuSectionProps } from "./types";

export const MenuSection = ({
    children,
    label,
    showDivider = true,
    className,
    columns,
    "data-testid": testId = "menu-section",
    ...otherProps
}: MenuSectionProps): JSX.Element => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const internalId = useId();
    const ulRef = useRef<HTMLUListElement>(null);

    // =========================================================================
    // HELPER FUNCTIONS
    // =========================================================================
    const gridRows = useMemo(
        () =>
            columns !== undefined
                ? Math.ceil(Children.count(children) / columns)
                : undefined,
        [columns, children]
    );

    useApplyStyle(
        ulRef,
        gridRows !== undefined
            ? { [styles.gridTokens.rows]: String(gridRows) }
            : undefined
    );

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    const labelElement = label ? (
        <Typography.BodyXS
            className={styles.label}
            weight="semibold"
            id={internalId}
        >
            {label}
        </Typography.BodyXS>
    ) : null;

    // When columns + label: render label outside the <ul> so it is never
    // a grid item and always spans full width above the columns.
    if (columns && label) {
        return (
            <div
                className={clsx(
                    styles.section,
                    showDivider && styles.sectionWithDivider,
                    className
                )}
            >
                {labelElement}
                <ul
                    ref={ulRef}
                    data-testid={testId}
                    aria-labelledby={internalId}
                    className={styles.columns}
                    {...otherProps}
                >
                    {children}
                </ul>
            </div>
        );
    }

    return (
        <ul
            ref={ulRef}
            data-testid={testId}
            aria-labelledby={internalId}
            className={clsx(
                styles.section,
                showDivider && styles.sectionWithDivider,
                columns && styles.columns,
                className
            )}
            {...otherProps}
        >
            {labelElement}
            {children}
        </ul>
    );
};

MenuSection.displayName = "Menu.Section";
