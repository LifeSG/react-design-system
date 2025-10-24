import { FilterProps } from "./types";
export declare const Filter: {
    ({ customLabels, toggleFilterButtonLabel: _toggleFilterButtonLabel, headerTitle: _headerTitle, doneButtonLabel: _doneButtonLabel, toggleFilterButtonStyle, clearButtonDisabled, onClear, onDismiss, onDone, onModalOpen, children, _dangerouslyForceMobile, insets, ...otherProps }: FilterProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
} & {
    Item: {
        ({ collapsible: desktopCollapsible, initialExpanded, expanded: controlledExpanded, onExpandChange, minimisable, minimisedHeight, showDivider, showMobileDivider, title, addon, children, ...otherProps }: import("./types").FilterItemProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    Page: {
        ({ onDismiss, onDone, children, }: import("./types").FilterPageProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    Checkbox: {
        <T = import("./types").FilterItemCheckboxOptionProps>({ selectedOptions, options, showAsCheckboxInMobile, minimisableOptions, onSelect, labelExtractor, valueExtractor, useToggleContentWidth, ...filterItemProps }: import("./types").FilterItemCheckboxProps<T>): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
};
