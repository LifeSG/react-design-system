import { FilterItemCheckboxOptionProps } from "../types";
import { FlattenedFilterOption } from "./types";
/**
 * Builds a key path string from an array of keys
 */
export declare const buildKeyPath: (keyPath: string[]) => string;
/**
 * Flattens nested options into a flat array for rendering
 */
export declare const flattenNestedOptions: <T = FilterItemCheckboxOptionProps>(nestedOptions: T[], parentKeyPath?: string[], valueExtractor?: (item: T) => string, labelExtractor?: (item: T) => string) => FlattenedFilterOption<T>[];
/**
 * Gets all descendant key paths (children, grandchildren, etc.) for a given parent
 */
export declare const getAllDescendantKeyPaths: <T = FilterItemCheckboxOptionProps>(flattenedOptions: FlattenedFilterOption<T>[], parentKeyPath: string[]) => string[][];
/**
 * Gets all descendant leaf children (non-parent items)
 */
export declare const getAllDescendantChildren: <T = FilterItemCheckboxOptionProps>(flattenedOptions: FlattenedFilterOption<T>[], parentKeyPath: string[]) => T[];
/**
 * Checks if an option has nested options
 */
export declare const hasNestedOptions: <T = FilterItemCheckboxOptionProps>(options: T[], optionsExtractor?: (item: T) => T[]) => boolean;
