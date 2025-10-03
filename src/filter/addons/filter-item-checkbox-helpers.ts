import { FilterItemCheckboxOptionProps } from "../types";
import { FlattenedFilterOption } from "./types";

// =============================================================================
// HELPER FUNCTIONS FOR NESTED OPTIONS
// =============================================================================

/**
 * Builds a key path string from an array of keys
 */
export const buildKeyPath = (keyPath: string[]): string => {
    return keyPath.join(".");
};

/**
 * Flattens nested options into a flat array for rendering
 */
export const flattenNestedOptions = <T = FilterItemCheckboxOptionProps>(
    nestedOptions: T[],
    parentKeyPath: string[] = [],
    valueExtractor?: (item: T) => string,
    labelExtractor?: (item: T) => string
): FlattenedFilterOption<T>[] => {
    const flattened: FlattenedFilterOption<T>[] = [];

    nestedOptions.forEach((option, index) => {
        const value: string = valueExtractor
            ? valueExtractor(option)
            : (option as any).value;
        const label: string = labelExtractor
            ? labelExtractor(option)
            : (option as any).label;
        const options: any[] = (option as any).options;
        const keyPath = [...parentKeyPath, value];
        const hasChildren = !!(options && options.length > 0);

        flattened.push({
            originalItem: option,
            value,
            label,
            keyPath,
            level: parentKeyPath.length,
            hasChildren,
            parentKeyPath: parentKeyPath.length > 0 ? parentKeyPath : undefined,
            indexInParent: index,
            parentSetSize: nestedOptions.length,
        });

        // Recursively flatten children
        if (hasChildren) {
            flattened.push(
                ...flattenNestedOptions(
                    options,
                    keyPath,
                    valueExtractor,
                    labelExtractor
                )
            );
        }
    });

    return flattened;
};

/**
 * Checks if a child key path is a descendant of a parent key path
 */
const isChild = (parentKeyPath: string[], childKeyPath: string[]): boolean => {
    if (childKeyPath.length <= parentKeyPath.length) return false;

    const parentKeyPathString = buildKeyPath(parentKeyPath);
    const childKeyPathString = buildKeyPath(childKeyPath);

    return childKeyPathString.startsWith(parentKeyPathString + ".");
};

/**
 * Gets all descendant key paths (children, grandchildren, etc.) for a given parent
 */
export const getAllDescendantKeyPaths = <T = FilterItemCheckboxOptionProps>(
    flattenedOptions: FlattenedFilterOption<T>[],
    parentKeyPath: string[]
): string[][] => {
    return flattenedOptions
        .filter((option) => isChild(parentKeyPath, option.keyPath))
        .map((option) => option.keyPath);
};

/**
 * Gets all descendant leaf children (non-parent items)
 */
export const getAllDescendantChildren = <T = FilterItemCheckboxOptionProps>(
    flattenedOptions: FlattenedFilterOption<T>[],
    parentKeyPath: string[]
): T[] => {
    const parentKeyPathString = buildKeyPath(parentKeyPath);
    const children: T[] = [];

    const parentIndex = flattenedOptions.findIndex(
        (option) => buildKeyPath(option.keyPath) === parentKeyPathString
    );

    if (parentIndex === -1) return children;

    // Single pass: iterate from parent+1 until we find an item that's not a descendant
    for (let i = parentIndex + 1; i < flattenedOptions.length; i++) {
        const option = flattenedOptions[i];

        // Check if this item is a descendant
        if (isChild(parentKeyPath, option.keyPath)) {
            // Only include leaf nodes (non-parent items)
            if (!option.hasChildren) {
                children.push(option.originalItem as T);
            }
        } else {
            // No more descendants - we can break early
            break;
        }
    }

    return children;
};

/**
 * Checks if an option has nested options
 */
export const hasNestedOptions = <T = FilterItemCheckboxOptionProps>(
    options: T[],
    optionsExtractor?: (item: T) => T[]
): boolean => {
    return options.some((option: T) => {
        const nestedOptions: any[] = optionsExtractor
            ? optionsExtractor(option)
            : (option as any).options;
        return nestedOptions && nestedOptions.length > 0;
    });
};
