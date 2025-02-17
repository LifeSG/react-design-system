import { NestedDropdownListItemProps, NestedDropdownListLocalItem } from "./types";
/**
 * builds a flattened representation of the tree
 * the items are listed in their visual order
 */
export declare const flattenList: <T>(nestedList: NestedDropdownListItemProps<T>[], selectedKeyPaths: string[][], multiSelect: boolean, searchTerm: string, initialExpanded: boolean) => NestedDropdownListLocalItem<T>[];
export declare const expandSelectedSubtrees: <T>(list: NestedDropdownListLocalItem<T>[]) => NestedDropdownListLocalItem<T>[];
export declare const expandMatchedSubtrees: <T>(list: NestedDropdownListLocalItem<T>[]) => NestedDropdownListLocalItem<T>[];
export declare const expandFirstSubtree: <T>(list: NestedDropdownListLocalItem<T>[]) => NestedDropdownListLocalItem<T>[];
export declare const toggleSubtree: <T>(list: NestedDropdownListLocalItem<T>[], index: number, expanded: boolean) => NestedDropdownListLocalItem<T>[];
export declare const updateSelectedState: <T>(list: NestedDropdownListLocalItem<T>[], selectedKeyPaths: string[][], multiSelect: boolean) => NestedDropdownListLocalItem<T>[];
export declare const findIndexFromStart: <T>(arr: T[], predicate: (e: T) => boolean, start: number) => number;
export declare const findIndexFromEnd: <T>(arr: T[], predicate: (e: T) => boolean, end: number) => number;
export declare const findItemByKeyPath: <T>(nestedList: NestedDropdownListItemProps<T>[], keyPath: string[]) => any;
