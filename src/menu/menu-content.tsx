import clsx from "clsx";
import type React from "react";
import { useRef } from "react";

import { useApplyStyle } from "../theme";
import * as styles from "./menu-content.styles";
import type { MenuContentProps } from "./types";

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

    useApplyStyle(panelRef, {
        [styles.tokens.panel.maxHeight]:
            maxHeight !== undefined ? `${maxHeight}px` : null,
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
