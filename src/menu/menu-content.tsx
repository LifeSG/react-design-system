import React, { Children, useMemo } from "react";
import { MenuPanel } from "./menu-content.styles";
import {
    GRID_COLUMN_GAP_PX,
    GRID_COLUMN_WIDTH_PX,
} from "./menu-section.styles";
import { MenuContentProps, MenuSectionProps } from "./types";

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
    "data-testid": testId = "menu-content",
    overflow,
    maxHeight,
    ...otherProps
}: MenuContentProps): JSX.Element => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    // caps the panel width so it fits the widest Menu.Section's grid columns, falling back to the default 24rem
    const gridMaxWidth = useMemo(() => {
        const maxColumns = Children.toArray(children)
            .filter(
                (child): child is React.ReactElement<MenuSectionProps> =>
                    React.isValidElement(child) &&
                    !!(child.props as MenuSectionProps).columns
            )
            .reduce((max, child) => Math.max(max, child.props.columns ?? 0), 0);

        if (!maxColumns) return undefined;

        return (
            maxColumns * GRID_COLUMN_WIDTH_PX +
            (maxColumns - 1) * GRID_COLUMN_GAP_PX +
            2 // 1px border × 2 sides
        );
    }, [children]);

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
        <MenuPanel
            $overflow={overflow}
            $maxHeight={maxHeight}
            $maxWidth={gridMaxWidth}
            data-testid={testId}
            tabIndex={-1}
            onKeyDown={handleKeyDown}
            {...otherProps}
        >
            {children}
        </MenuPanel>
    );
};

MenuContent.displayName = "Menu.Content";
