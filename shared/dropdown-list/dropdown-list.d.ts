import { DropdownListProps } from "./types";
/**
 * NOTE: This component is not directly exportables
 * but forms part of a component
 */
export declare const DropdownList: <T, V>({ listItems, listExtractor, valueExtractor, onSelectItem, listStyleWidth, visible, enableSearch, searchPlaceholder, onSearch, searchFunction, onDismiss, disableItemFocus, multiSelect, selectedItems, onSelectAll, onRetry, itemsLoadState, itemTruncationType, itemMaxLines, labelDisplayType, renderListItem, onBlur, hideNoResultsDisplay, renderCustomCallToAction, variant, ...otherProps }: DropdownListProps<T, V>) => JSX.Element;
