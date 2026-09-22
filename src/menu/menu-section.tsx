import clsx from "clsx";
import { Children, useCallback, useMemo, useRef } from "react";
import { useResizeDetector } from "react-resize-detector";

import { useApplyStyle } from "../theme";
import { Typography } from "../typography";
import { useId, useIsomorphicLayoutEffect } from "../util";
import * as styles from "./menu-section.styles";
import type { MenuSectionProps } from "./types";

export const MenuSection = ({
    children,
    label,
    showDivider = true,
    className,
    gridLayout,
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

    const gridRowStyles = useMemo(
        () =>
            gridLayout
                ? { [styles.gridTokens.rows]: String(gridLayout.rows) }
                : undefined,
        [gridLayout]
    );
    useApplyStyle(ulRef, gridRowStyles);

    const applyMaxWidth = useCallback(() => {
        if (!gridLayout) return;
        const grid = ulRef.current;
        if (!grid) return;

        const { columns, rows } = gridLayout;
        const visibleCount = rows * columns;
        if (childCount <= visibleCount) {
            grid.style.removeProperty(styles.gridTokens.maxWidth);
            return;
        }

        // Filter to <li> only: the label element (if present) is also a direct
        // child of the <ul> but must not be counted as a grid item.
        const listItems = Array.from(grid.children).filter(
            (el) => el.tagName === "LI"
        ) as HTMLElement[];
        const boundaryItem = listItems[visibleCount];
        if (!boundaryItem) return;

        const columnGap = parseFloat(getComputedStyle(grid).columnGap) || 0;
        const visibleWidth =
            boundaryItem.getBoundingClientRect().left -
            grid.getBoundingClientRect().left -
            columnGap / 2;

        console.log(boundaryItem, columnGap, visibleWidth);

        grid.style.setProperty(styles.gridTokens.maxWidth, `${visibleWidth}px`);
    }, [gridLayout, childCount]);

    // =========================================================================
    // EFFECTS
    // =========================================================================
    useIsomorphicLayoutEffect(() => {
        applyMaxWidth();
    }, [applyMaxWidth]);

    useResizeDetector({
        handleWidth: true,
        handleHeight: false,
        skipOnMount: true,
        refreshMode: "throttle",
        targetRef: ulRef,
        onResize: applyMaxWidth,
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
                gridLayout && styles.grid,
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
