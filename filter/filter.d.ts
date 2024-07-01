import { FilterProps } from "./types";
export declare const Filter: (({ toggleFilterButtonLabel, headerTitle, clearButtonDisabled, onClear, onDismiss, onDone, children, ...otherProps }: FilterProps) => import("react/jsx-runtime").JSX.Element) & {
    Item: ({ collapsible: desktopCollapsible, initialExpanded, expanded: controlledExpanded, onExpandChange, minimisable, minimisedHeight, showDivider, showMobileDivider, title, addon, children, ...otherProps }: import("./types").FilterItemProps) => import("react/jsx-runtime").JSX.Element;
    Page: ({ onDismiss, onDone, children, }: import("./types").FilterPageProps) => import("react/jsx-runtime").JSX.Element;
    Checkbox: <T>({ selectedOptions, options, onSelect, labelExtractor, valueExtractor, ...filterItemProps }: import("./types").FilterItemCheckboxProps<T>) => import("react/jsx-runtime").JSX.Element;
};
