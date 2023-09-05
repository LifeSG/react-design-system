/// <reference types="react" />
import { FilterProps } from "./types";
export declare const Filter: (({ toggleFilterButtonLabel, headerTitle, clearButtonDisabled, onClear, onDismiss, onDone, children, ...otherProps }: FilterProps) => JSX.Element) & {
    Item: ({ collapsible: desktopCollapsible, minimisable, minimisedHeight, showDivider, showMobileDivider, title, children, ...otherProps }: import("./types").FilterItemProps) => JSX.Element;
    Page: ({ onDismiss, onDone, children, }: import("./types").FilterPageProps) => JSX.Element;
    Checkbox: <T>({ selectedOptions, options, onSelect, labelExtractor, valueExtractor, ...filterItemProps }: import("./types").FilterItemCheckboxProps<T>) => JSX.Element;
};
