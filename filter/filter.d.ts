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
export declare const Filter: {
    ({ children, className, style, onDismiss, onDone, onModalOpen, toggleFilterButtonStyle, insets, id, "data-testid": testId, ...props }: FilterProps): import("react/jsx-runtime").JSX.Element;
    /** Standalone desktop sidebar variant of the filter panel. */
    Sidebar: {
        ({ customLabels, onClear, clearButtonDisabled, count, children, headerTitle: _headerTitle, className, ...otherProps }: import("./types").FilterSidebarProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    /** Standalone mobile modal variant of the filter panel. */
    Modal: {
        ({ customLabels, onClear, onDone, onDismiss, onModalOpen, toggleFilterButtonStyle, clearButtonDisabled, insets, count, children, toggleFilterButtonLabel: _toggleFilterButtonLabel, headerTitle: _headerTitle, doneButtonLabel: _doneButtonLabel, className, ...otherProps }: import("./types").FilterModalProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    /** A collapsible section within a filter panel. */
    Item: {
        ({ collapsible: desktopCollapsible, initialExpanded, expanded: controlledExpanded, onExpandChange, minimisable, minimisedHeight, showDivider, showMobileDivider, title, addon, children, className, ...otherProps }: import("./types").FilterItemProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    /** A full-screen sub-page overlay for drill-down selection in the mobile modal. */
    Page: {
        ({ onDismiss, onDone, children, "data-testid": dataTestId, }: import("./types").FilterPageProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    /** A filter item that renders selectable checkboxes (desktop) or toggle chips (mobile). */
    Checkbox: {
        <T = import("./types").FilterItemCheckboxOptionProps>({ selectedOptions, options, showAsCheckboxInMobile, minimisableOptions, onSelect, labelExtractor, valueExtractor, useToggleContentWidth, ...filterItemProps }: import("./types").FilterItemCheckboxProps<T>): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
};
