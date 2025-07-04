import { NestedDropdownListItemProps, NestedDropdownListLocalItem } from "./types";
/**
 * builds a flattened representation of the tree
 * the items are listed in their visual order
 */
export declare const flattenList: <T>(nestedList: NestedDropdownListItemProps<T>[], selectedKeyPaths: Set<string>, multiSelect: boolean, searchTerm: string, initialExpanded: boolean) => NestedDropdownListLocalItem<T>[];
export declare const expandSelectedSubtrees: <T>(list: NestedDropdownListLocalItem<T>[]) => NestedDropdownListLocalItem<T>[];
export declare const expandMatchedSubtrees: <T>(list: NestedDropdownListLocalItem<T>[]) => NestedDropdownListLocalItem<T>[];
export declare const expandFirstSubtree: <T>(list: NestedDropdownListLocalItem<T>[]) => NestedDropdownListLocalItem<T>[];
export declare const toggleSubtree: <T>(list: NestedDropdownListLocalItem<T>[], index: number, expanded: boolean) => NestedDropdownListLocalItem<T>[];
export declare const updateSelectedState: <T>(list: NestedDropdownListLocalItem<T>[], selectedKeyPaths: Set<string>, multiSelect: boolean) => NestedDropdownListLocalItem<T>[];
export declare const findItemFromStart: <T>(arr: T[], predicate: (e: T) => boolean, start: number) => T;
export declare const findItemFromEnd: <T>(arr: T[], predicate: (e: T) => boolean, end: number) => T;
export declare const findItemByKeyPath: <T>(nestedList: NestedDropdownListItemProps<T>[], keyPath: string[]) => any;
export declare const buildKeyPath: (keyPath: string[]) => string;
export declare const buildKeyPathToSet: (keyPathArr: string[][]) => Set<string> | undefined;
