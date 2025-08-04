import { DropdownListProps } from "./types";
/**
 * NOTE: This component is not directly exportable but forms part of a component
 */
export declare const DropdownList: <T, V>({ listItems, multiSelect, maxSelectable, selectedItems, disableItemFocus, itemsLoadState, itemTruncationType, itemMaxLines, labelDisplayType, variant, listboxId, width, topScrollItem, onSelectItem, onSelectAll, onDismiss, onRetry, valueExtractor, listExtractor, renderListItem, renderCustomCallToAction, enableSearch, hideNoResultsDisplay, noResultsDescription, searchPlaceholder, searchFunction, onSearch, }: DropdownListProps<T, V>) => JSX.Element;
