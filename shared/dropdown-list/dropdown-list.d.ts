/// <reference types="react" />
import { DropdownListProps } from "./types";
/**
 * NOTE: This component is not directly exportables
 * but forms part of a component
 */
export declare const DropdownList: <T, V>({ listItems, listExtractor, valueExtractor, onSelectItem, listStyleWidth, visible, enableSearch, searchPlaceholder, onSearch, searchFunction, onDismiss, multiSelect, selectedItems, onSelectAll, onRetry, itemsLoadState, itemTruncationType, renderListItem, onBlur, ...otherProps }: DropdownListProps<T, V>) => JSX.Element;
