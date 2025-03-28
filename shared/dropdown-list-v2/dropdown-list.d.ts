/// <reference types="react" />
import { DropdownListProps } from "./types";
/**
 * NOTE: This component is not directly exportable but forms part of a component
 */
export declare const DropdownList: <T, V>({ listItems, multiSelect, selectedItems, disableItemFocus, itemsLoadState, itemTruncationType, itemMaxLines, labelDisplayType, variant, listboxId, width, topScrollItem, onSelectItem, onSelectAll, onDismiss, onRetry, valueExtractor, listExtractor, renderListItem, renderCustomCallToAction, enableSearch, hideNoResultsDisplay, searchPlaceholder, searchFunction, onSearch, }: DropdownListProps<T, V>) => JSX.Element;
