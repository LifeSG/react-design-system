import clsx from "clsx";
import { Children, useCallback, useRef } from "react";
import { useResizeDetector } from "react-resize-detector";

import { Typography } from "../typography";
import { useId, useIsomorphicLayoutEffect } from "../util";
import * as styles from "./menu-section.styles";
import type { MenuSectionProps } from "./types";

export const MenuSection = ({
    children,
    label,
    showDivider = true,
    className,
    columns,
    rows,
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
    const childCount = Children.count(children);

    const applyGridLayout = useCallback(() => {
        if (!columns || !rows) return;
        const grid = ulRef.current;
        if (!grid) return;

        grid.style.setProperty(styles.gridTokens.columns, String(columns));

        const visibleCount = rows * columns;
        if (childCount <= visibleCount) {
            grid.style.removeProperty(styles.gridTokens.maxHeight);
            return;
        }

        // Filter to <li> only: the label element (if present) is also a direct
        // child of the <ul> but must not be counted as a grid item.
        const listItems = Array.from(grid.children).filter(
            (el) => el.tagName === "LI"
        ) as HTMLElement[];
        const boundaryItem = listItems[visibleCount];
        if (!boundaryItem) return;

        const rowGap = parseFloat(getComputedStyle(grid).rowGap) || 0;
        const visibleHeight = boundaryItem.offsetTop - rowGap / 2;

        grid.style.setProperty(
            styles.gridTokens.maxHeight,
            `${visibleHeight}px`
        );
    }, [columns, rows, childCount]);

    // =========================================================================
    // EFFECTS
    // =========================================================================
    useIsomorphicLayoutEffect(() => {
        applyGridLayout();
    }, [applyGridLayout]);

    useResizeDetector({
        handleWidth: true,
        handleHeight: false,
        skipOnMount: true,
        refreshMode: "throttle",
        targetRef: ulRef,
        onResize: applyGridLayout,
    });

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    return (
        <ul
            ref={ulRef}
            data-testid={testId}
            aria-labelledby={internalId}
            className={clsx(
                styles.section,
                showDivider && styles.sectionWithDivider,
                columns && columns >= 1 && rows && rows >= 1 && styles.grid,
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
