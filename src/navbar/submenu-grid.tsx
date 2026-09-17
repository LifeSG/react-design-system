import { useRef } from "react";
import { useResizeDetector } from "react-resize-detector";

import { Menu as DesktopMenu } from "../menu";
import { useIsomorphicLayoutEffect } from "../util";
import * as styles from "./submenu-grid.styles";
import type { NavItemCommonProps } from "./types";

// comfortable minimum per grid column, and the gap used between columns
const SUBMENU_GRID_COLUMN_WIDTH_PX = 383;
const SUBMENU_GRID_COLUMN_GAP_PX = 8;

/**
 * Recommended `Menu.Content` `maxWidth` for a `columns`-wide `SubMenuGrid` —
 * the default 24rem panel cap is sized for a single-column list and gets
 * cramped once more than 1-2 columns are requested.
 */
export const getSubMenuGridMaxWidth = (columns: number): number =>
    columns * SUBMENU_GRID_COLUMN_WIDTH_PX +
    (columns - 1) * SUBMENU_GRID_COLUMN_GAP_PX;

interface Props<T> {
    items: NavItemCommonProps<T>[];
    columns: number;
    rows: number;
}

/**
 * Lays `items` out in a fixed-column CSS grid, capping the visible height to
 * `rows` and enabling vertical scroll for the remainder.
 *
 * Why DOM measurement (not a fixed row height): items line-clamp to 2 lines,
 * so row heights vary with label length. We measure the offset of the first
 * item past the visible cutoff rather than assume a uniform row height.
 *
 * Why a wrapper `div` (not a `ref` on `Menu.Section`): `Menu.Section` doesn't
 * forward refs, so its rendered `<ul>` is read via `firstElementChild` on a
 * `display: contents` wrapper instead of changing the shared `Menu` component.
 */
export const SubMenuGrid = <T,>({
    items,
    columns,
    rows,
}: Props<T>): JSX.Element | null => {
    // =========================================================================
    // CONST, STATE, REF
    // =========================================================================
    const wrapperRef = useRef<HTMLDivElement>(null);
    // ResizeObserver target: the actual grid <ul>, not wrapperRef — wrapperRef
    // is `display: contents` and never reports a real size to observe.
    const gridRef = useRef<HTMLElement | null>(null);

    // =========================================================================
    // HELPER FUNCTIONS
    // =========================================================================
    const applyGridLayout = () => {
        const grid = wrapperRef.current
            ?.firstElementChild as HTMLElement | null;
        if (!grid) return;
        gridRef.current = grid;

        grid.style.setProperty(styles.tokens.grid.columns, String(columns));

        const visibleCount = rows * columns;
        if (items.length <= visibleCount) {
            grid.style.removeProperty(styles.tokens.grid.maxHeight);
            return;
        }

        const boundaryItem = grid.children[visibleCount] as
            | HTMLElement
            | undefined;
        if (!boundaryItem) return;

        const rowGap = parseFloat(getComputedStyle(grid).rowGap) || 0;
        const visibleHeight = boundaryItem.offsetTop - rowGap / 2;

        grid.style.setProperty(
            styles.tokens.grid.maxHeight,
            `${visibleHeight}px`
        );
    };

    // =========================================================================
    // EFFECTS
    // =========================================================================
    useIsomorphicLayoutEffect(() => {
        applyGridLayout();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [items, columns, rows]);

    useResizeDetector({
        handleWidth: true,
        handleHeight: false,
        skipOnMount: true,
        refreshMode: "throttle",
        targetRef: gridRef,
        onResize: applyGridLayout,
    });

    // =========================================================================
    // RENDER FUNCTIONS
    // =========================================================================
    // guards against callers bypassing navbar-items.tsx's own columns/rows check
    if (columns < 1 || rows < 1) return null;

    return (
        <div ref={wrapperRef} className={styles.measureWrapper}>
            <DesktopMenu.Section showDivider={false} className={styles.grid}>
                {items.map((item, index) => (
                    <DesktopMenu.Link
                        key={`${item.id}-${index}`}
                        href={item.href}
                    >
                        {item.children}
                    </DesktopMenu.Link>
                ))}
            </DesktopMenu.Section>
        </div>
    );
};
