import { FilterItemCheckboxOptionProps } from "../types";

/**
 * A flattened representation of a nested filter option, used internally
 * for keyboard navigation and accessibility calculations.
 */
export interface FlattenedFilterOption<T = FilterItemCheckboxOptionProps> {
    /** The original unflattened option item. */
    originalItem: T;
    /** The option's value. */
    value: any;
    /** The display label of the option. */
    label: string;
    /** The path of keys from the root to this option. */
    keyPath: string[];
    /** The nesting depth level of this option (0 = root). */
    level: number;
    /** Whether this option has nested child options. */
    hasChildren: boolean;
    /** The key path of the parent option, if any. */
    parentKeyPath?: string[] | undefined;
    /** The index of this option within its parent's options list. */
    indexInParent: number;
    /** The total number of sibling options in the parent's options list. */
    parentSetSize: number;
}
