import { useEffect } from "react";

import { useMaxWidthMediaQuery } from "../theme";
import { FilterItemCheckbox } from "./addons/filter-item-checkbox";
import { FilterItem } from "./filter-item";
import { FilterItemPage } from "./filter-item-page";
import { FilterModal } from "./filter-modal";
import { FilterSidebar } from "./filter-sidebar";
import type { FilterProps } from "./types";

/**
 * A responsive filter panel that switches between a persistent sidebar on
 * desktop and a modal overlay on mobile.
 *
 * Use `Filter` to let users narrow a result set by one or more criteria.
 * On mobile (below lg breakpoint) the panel is hidden behind a toggle button and
 * rendered in a full-screen modal; otherwise it is displayed as a
 * fixed sidebar.
 *
 * Sub-components:
 * - `Filter.Sidebar` — standalone desktop sidebar, used by `Filter` internally.
 * - `Filter.Modal` — standalone mobile modal, used by `Filter` internally.
 * - `Filter.Item` — a collapsible section within the panel.
 * - `Filter.Page` — a drill-down sub-page inside the mobile modal.
 * - `Filter.Checkbox` — a filter item with selectable checkbox or toggle options.
 */
export const Filter = ({
    children,
    className,
    style,
    onDismiss,
    onDone,
    onModalOpen,
    toggleFilterButtonStyle,
    insets,
    id,
    "data-testid": testId,
    ...props
}: FilterProps) => {
    const isMobile = useMaxWidthMediaQuery("lg");

    useEffect(() => {
        if (!isMobile) {
            onDismiss?.();
        }
    }, [isMobile]);

    return (
        <div className={className} style={style} id={id} data-testid={testId}>
            {isMobile ? (
                <FilterModal
                    onDismiss={onDismiss}
                    onDone={onDone}
                    onModalOpen={onModalOpen}
                    toggleFilterButtonStyle={toggleFilterButtonStyle}
                    insets={insets}
                    {...props}
                >
                    {typeof children === "function"
                        ? children("mobile")
                        : children}
                </FilterModal>
            ) : (
                <FilterSidebar {...props}>
                    {typeof children === "function"
                        ? children("default")
                        : children}
                </FilterSidebar>
            )}
        </div>
    );
};

/** Standalone desktop sidebar variant of the filter panel. */
Filter.Sidebar = FilterSidebar;
/** Standalone mobile modal variant of the filter panel. */
Filter.Modal = FilterModal;
/** A collapsible section within a filter panel. */
Filter.Item = FilterItem;
/** A full-screen sub-page overlay for drill-down selection in the mobile modal. */
Filter.Page = FilterItemPage;
/** A filter item that renders selectable checkboxes (desktop) or toggle chips (mobile). */
Filter.Checkbox = FilterItemCheckbox;
