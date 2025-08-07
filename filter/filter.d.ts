import { FilterProps } from "./types";
export declare const Filter: {
    ({ toggleFilterButtonLabel, toggleFilterButtonStyle, headerTitle, doneButtonLabel, clearButtonDisabled, onClear, onDismiss, onDone, children, ...otherProps }: FilterProps): import("react/jsx-runtime").JSX.Element;
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
        <T>({ selectedOptions, options, onSelect, labelExtractor, valueExtractor, useToggleContentWidth, ...filterItemProps }: import("./types").FilterItemCheckboxProps<T>): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
};
