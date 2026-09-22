import clsx from "clsx";
import type React from "react";
import {
    Children,
    isValidElement,
    type ReactElement,
    useMemo,
    useRef,
} from "react";

import { useApplyStyle } from "../theme";
import * as styles from "./menu-content.styles";
import * as sectionStyles from "./menu-section.styles";
import type { MenuContentProps, MenuSectionProps } from "./types";

// =============================================================================
// HELPERS
// =============================================================================
const getFocusables = (container: HTMLElement) => {
    return Array.from(
        container.querySelectorAll<HTMLElement>(
            'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
    ).filter((el) => !el.hasAttribute("disabled"));
};

export const MenuContent = ({
    children,
    className,
    "data-testid": testId = "menu-content",
    overflow,
    maxHeight,
    ...otherProps
}: MenuContentProps): JSX.Element => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const panelRef = useRef<HTMLDivElement>(null);

    const gridMaxWidth = useMemo(() => {
        const maxColumns = Children.toArray(children)
            .filter(
                (child): child is ReactElement<MenuSectionProps> =>
                    isValidElement(child) &&
                    !!(child.props as MenuSectionProps).gridLayout
            )
            .reduce(
                (max, child) =>
                    Math.max(max, child.props.gridLayout?.columns ?? 0),
                0
            );
        if (!maxColumns) return undefined;
        return (
            maxColumns * sectionStyles.GRID_COLUMN_WIDTH_PX +
            (maxColumns - 1) * sectionStyles.GRID_COLUMN_GAP_PX +
            2 // 1px border × 2 sides
        );
    }, [children]);

    useApplyStyle(panelRef, {
        [styles.tokens.panel.maxHeight]:
            maxHeight !== undefined ? `${maxHeight}px` : null,
        [styles.tokens.panel.maxWidth]:
            gridMaxWidth !== undefined ? `${gridMaxWidth}px` : null,
        [styles.tokens.panel.overflow]: overflow || null,
    });
    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
        const isNextKey = e.key === "ArrowDown" || e.key === "ArrowRight";
        const isPrevKey = e.key === "ArrowUp" || e.key === "ArrowLeft";

        if (!isNextKey && !isPrevKey) return;

        const container = e.currentTarget as HTMLElement;
        const focusables = getFocusables(container);
        if (!focusables.length) return;

        const active = document.activeElement as HTMLElement | null;
        const idx = active ? focusables.indexOf(active) : -1;

        e.preventDefault();

        const delta = isNextKey ? 1 : -1;

        const nextIndex =
            idx === -1
                ? isNextKey
                    ? 0
                    : focusables.length - 1
                : (idx + delta + focusables.length) % focusables.length;

        focusables[nextIndex]?.focus();
    };
    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    return (
        <div
            ref={panelRef}
            data-testid={testId}
            tabIndex={-1}
            onKeyDown={handleKeyDown}
            className={clsx(styles.panel, className)}
            {...otherProps}
        >
            {children}
        </div>
    );
};

MenuContent.displayName = "Menu.Content";
