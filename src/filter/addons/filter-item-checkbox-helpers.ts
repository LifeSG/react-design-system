import { FilterOption, FlattenedFilterOption } from "../types";

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
export const flattenNestedOptions = (
    nestedOptions: FilterOption[],
    parentKeyPath: string[] = []
): FlattenedFilterOption[] => {
    const flattened: FlattenedFilterOption[] = [];

    nestedOptions.forEach((option) => {
        const keyPath = [...parentKeyPath, String(option.value)];
        const hasChildren = !!(option.options && option.options.length > 0);

        flattened.push({
            originalItem: option,
            value: option.value,
            label: option.label,
            keyPath,
            level: parentKeyPath.length,
            hasChildren,
            parentKeyPath: parentKeyPath.length > 0 ? parentKeyPath : undefined,
        });

        // Recursively flatten children
        if (hasChildren) {
            flattened.push(...flattenNestedOptions(option.options!, keyPath));
        }
    });

    return flattened;
};

/**
 * Gets all descendant key paths (children, grandchildren, etc.) for a given parent
 */
export const getAllDescendantKeyPaths = (
    flattenedOptions: FlattenedFilterOption[],
    parentKeyPath: string[]
): string[][] => {
    const parentKeyPathString = buildKeyPath(parentKeyPath);

    return flattenedOptions
        .filter((option) => {
            const optionKeyPathString = buildKeyPath(option.keyPath);
            return (
                option.keyPath.length > parentKeyPath.length &&
                optionKeyPathString.startsWith(parentKeyPathString + ".")
            );
        })
        .map((option) => option.keyPath);
};

/**
 * Checks if an option has nested options
 */
export const hasNestedOptions = (options: FilterOption[]): boolean => {
    return options.some(
        (option) => option.options && option.options.length > 0
    );
};
