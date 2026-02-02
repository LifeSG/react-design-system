import React from "react";
import { MenuPanel } from "./menu-content.styles";
import { MenuContentProps } from "./types";

// =============================================================================
// HELPERS
// =============================================================================
const getFocusables = (container: HTMLElement) => {
    return Array.from(
        container.querySelectorAll<HTMLElement>(
            'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
    ).filter((el) => !el.hasAttribute("disabled") && el.tabIndex !== -1);
};

// =============================================================================
// RENDER FUNCTIONS
// =============================================================================
export const MenuContent = ({
    children,
    "data-testid": testId = "menu-content",
    overflow,
    maxHeight,
    enableArrowNavigation = false,
    ...otherProps
}: MenuContentProps): JSX.Element => {
    return (
        <MenuPanel
            $overflow={overflow}
            $maxHeight={maxHeight}
            data-testid={testId}
            tabIndex={-1}
            onKeyDown={(e: React.KeyboardEvent<HTMLElement>) => {
                if (!enableArrowNavigation) return;

                const isNextKey =
                    e.key === "ArrowDown" || e.key === "ArrowRight";
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
            }}
            {...otherProps}
        >
            {children}
        </MenuPanel>
    );
};

MenuContent.displayName = "Menu.Content";
