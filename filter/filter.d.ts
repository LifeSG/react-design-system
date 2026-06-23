import type { FilterProps } from "./types";
export declare const Filter: {
    ({ children, className, style, onDismiss, onDone, onModalOpen, toggleFilterButtonStyle, insets, id, "data-testid": testId, ...props }: FilterProps): import("react/jsx-runtime").JSX.Element;
    Sidebar: {
        ({ customLabels, onClear, clearButtonDisabled, count, children, headerTitle: _headerTitle, className, ...otherProps }: import("./types").FilterSidebarProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    Modal: {
        ({ customLabels, onClear, onDone, onDismiss, onModalOpen, toggleFilterButtonStyle, clearButtonDisabled, insets, count, children, toggleFilterButtonLabel: _toggleFilterButtonLabel, headerTitle: _headerTitle, doneButtonLabel: _doneButtonLabel, className, ...otherProps }: import("./types").FilterModalProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    Item: {
        ({ collapsible: desktopCollapsible, initialExpanded, expanded: controlledExpanded, onExpandChange, minimisable, minimisedHeight, showDivider, showMobileDivider, title, addon, children, className, ...otherProps }: import("./types").FilterItemProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    Page: {
        ({ onDismiss, onDone, children, "data-testid": dataTestId, }: import("./types").FilterPageProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    Checkbox: {
        <T = import("./types").FilterItemCheckboxOptionProps>({ selectedOptions, options, showAsCheckboxInMobile, minimisableOptions, onSelect, labelExtractor, valueExtractor, useToggleContentWidth, ...filterItemProps }: import("./types").FilterItemCheckboxProps<T>): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
};
