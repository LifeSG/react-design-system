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
    const gridColumns = gridLayout?.columns;
    const gridRows = gridLayout?.rows;

    const gridRowStyles = useMemo(
        () =>
            gridRows !== undefined
                ? { [styles.gridTokens.rows]: String(gridRows) }
                : undefined,
        [gridRows]
    );
    useApplyStyle(ulRef, gridRowStyles);

    const applyMaxWidth = useCallback(() => {
        if (gridColumns === undefined || gridRows === undefined) return;
        const grid = ulRef.current;
        if (!grid) return;

        const visibleCount = gridRows * gridColumns;
        if (childCount <= visibleCount) {
            grid.style.removeProperty(styles.gridTokens.maxWidth);
            return;
        }

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

        grid.style.setProperty(styles.gridTokens.maxWidth, `${visibleWidth}px`);
    }, [gridColumns, gridRows, childCount]);

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
    const labelElement = label ? (
        <Typography.BodyXS
            className={styles.label}
            weight="semibold"
            id={internalId}
        >
            {label}
        </Typography.BodyXS>
    ) : null;

    // When gridLayout + label: render label outside the <ul> so it is never
    // a grid item. The <ul> is the CSS grid container and must only hold <li>s.
    if (gridLayout && label) {
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
                    className={styles.grid}
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
                gridLayout && styles.grid,
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
