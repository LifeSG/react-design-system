import {
    FilterOption,
    FlattenedFilterOption,
    NestedSelectionState,
} from "../types";

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
 * Determines the selection state of a parent based on its children
 */
export const getParentSelectionState = (
    parentKeyPath: string[],
    flattenedOptions: FlattenedFilterOption[],
    selectedKeyPaths: Set<string>
): NestedSelectionState => {
    const directChildren = flattenedOptions.filter((option) => {
        return (
            option.keyPath.length === parentKeyPath.length + 1 &&
            option.keyPath.slice(0, parentKeyPath.length).join(".") ===
                buildKeyPath(parentKeyPath)
        );
    });

    if (directChildren.length === 0) {
        return "unselected";
    }

    let selectedCount = 0;
    let partialCount = 0;

    directChildren.forEach((child) => {
        const childKeyPathString = buildKeyPath(child.keyPath);
        if (selectedKeyPaths.has(childKeyPathString)) {
            selectedCount++;
        } else if (child.hasChildren) {
            // Check if child has partial selection
            const childState = getParentSelectionState(
                child.keyPath,
                flattenedOptions,
                selectedKeyPaths
            );
            if (childState === "partial" || childState === "selected") {
                partialCount++;
            }
        }
    });

    if (selectedCount === directChildren.length) {
        return "selected";
    } else if (selectedCount > 0 || partialCount > 0) {
        return "partial";
    } else {
        return "unselected";
    }
};

/**
 * Handles parent click - selects/deselects all children
 */
export const handleParentClick = (
    parentKeyPath: string[],
    flattenedOptions: FlattenedFilterOption[],
    selectedKeyPaths: Set<string>
): { newSelectedKeyPaths: string[][]; newValues: FilterOption[] } => {
    const parentKeyPathString = buildKeyPath(parentKeyPath);
    const parentSelectionState = getParentSelectionState(
        parentKeyPath,
        flattenedOptions,
        selectedKeyPaths
    );

    // Get all descendant key paths
    const allDescendants = getAllDescendantKeyPaths(
        flattenedOptions,
        parentKeyPath
    );

    const newSelectedSet = new Set(selectedKeyPaths);

    if (parentSelectionState === "selected") {
        // Deselect parent and all descendants
        newSelectedSet.delete(parentKeyPathString);
        allDescendants.forEach((keyPath) => {
            newSelectedSet.delete(buildKeyPath(keyPath));
        });
    } else {
        // Select parent and all descendants
        newSelectedSet.add(parentKeyPathString);
        allDescendants.forEach((keyPath) => {
            newSelectedSet.add(buildKeyPath(keyPath));
        });
    }

    const newSelectedKeyPaths = Array.from(newSelectedSet).map(
        (keyPathString) => keyPathString.split(".")
    );

    // Get values for leaf nodes only
    const leafOptions = flattenedOptions.filter(
        (option) => !option.hasChildren
    );
    const newValues = leafOptions
        .filter((option) => newSelectedSet.has(buildKeyPath(option.keyPath)))
        .map((option) => option.originalItem);

    return { newSelectedKeyPaths, newValues };
};

/**
 * Handles child click - updates parent state accordingly
 */
export const handleChildClick = (
    childKeyPath: string[],
    flattenedOptions: FlattenedFilterOption[],
    selectedKeyPaths: Set<string>
): { newSelectedKeyPaths: string[][]; newValues: FilterOption[] } => {
    const childKeyPathString = buildKeyPath(childKeyPath);
    const newSelectedSet = new Set(selectedKeyPaths);

    // Toggle child selection
    if (newSelectedSet.has(childKeyPathString)) {
        newSelectedSet.delete(childKeyPathString);

        // If this was a parent, also remove all its descendants
        const childOption = flattenedOptions.find(
            (opt) => buildKeyPath(opt.keyPath) === childKeyPathString
        );
        if (childOption?.hasChildren) {
            const descendants = getAllDescendantKeyPaths(
                flattenedOptions,
                childKeyPath
            );
            descendants.forEach((keyPath) => {
                newSelectedSet.delete(buildKeyPath(keyPath));
            });
        }
    } else {
        newSelectedSet.add(childKeyPathString);

        // If this was a parent, also select all its descendants
        const childOption = flattenedOptions.find(
            (opt) => buildKeyPath(opt.keyPath) === childKeyPathString
        );
        if (childOption?.hasChildren) {
            const descendants = getAllDescendantKeyPaths(
                flattenedOptions,
                childKeyPath
            );
            descendants.forEach((keyPath) => {
                newSelectedSet.add(buildKeyPath(keyPath));
            });
        }
    }

    // Update parent states up the hierarchy
    const currentPath = [...childKeyPath];
    while (currentPath.length > 1) {
        currentPath.pop(); // Remove last element to get parent path
        const parentKeyPathString = buildKeyPath(currentPath);
        const parentState = getParentSelectionState(
            currentPath,
            flattenedOptions,
            newSelectedSet
        );

        if (parentState === "selected") {
            newSelectedSet.add(parentKeyPathString);
        } else {
            newSelectedSet.delete(parentKeyPathString);
        }
    }

    const newSelectedKeyPaths = Array.from(newSelectedSet).map(
        (keyPathString) => keyPathString.split(".")
    );

    // Get values for leaf nodes only
    const leafOptions = flattenedOptions.filter(
        (option) => !option.hasChildren
    );
    const newValues = leafOptions
        .filter((option) => newSelectedSet.has(buildKeyPath(option.keyPath)))
        .map((option) => option.originalItem);

    return { newSelectedKeyPaths, newValues };
};

/**
 * Gets the selection state for a specific option
 */
export const getOptionSelectionState = (
    keyPath: string[],
    flattenedOptions: FlattenedFilterOption[],
    selectedKeyPaths: Set<string>
): NestedSelectionState => {
    const keyPathString = buildKeyPath(keyPath);
    const option = flattenedOptions.find(
        (opt) => buildKeyPath(opt.keyPath) === keyPathString
    );

    if (!option) {
        return "unselected";
    }

    if (selectedKeyPaths.has(keyPathString)) {
        return "selected";
    }

    if (option.hasChildren) {
        return getParentSelectionState(
            keyPath,
            flattenedOptions,
            selectedKeyPaths
        );
    }

    return "unselected";
};

/**
 * Checks if an option has nested options
 */
export const hasNestedOptions = (options: FilterOption[]): boolean => {
    return options.some(
        (option) => option.options && option.options.length > 0
    );
};

/**
 * Converts selected options to key paths for nested handling
 */
export const selectedOptionsToKeyPaths = (
    selectedOptions: FilterOption[],
    flattenedOptions: FlattenedFilterOption[]
): string[][] => {
    const keyPaths: string[][] = [];

    selectedOptions.forEach((selectedOption) => {
        const found = flattenedOptions.find(
            (opt) =>
                opt.value === selectedOption.value &&
                opt.label === selectedOption.label
        );
        if (found) {
            keyPaths.push(found.keyPath);
        }
    });

    return keyPaths;
};
