import type { FilterItemProps } from "../types";

export interface FlattenedFilterOption<T = FilterItemCheckboxOptionProps> {
    originalItem: T;
    value: any;
    label: string;
    keyPath: string[];
    level: number;
    hasChildren: boolean;
    parentKeyPath?: string[] | undefined;
    indexInParent: number;
    parentSetSize: number;
}

/**
 * Default shape for a checkbox option in `Filter.Checkbox`.
 *
 * Nest `options` to create hierarchical groups with parent-level
 * select/deselect all behavior.
 */
export interface FilterItemCheckboxOptionProps {
    value: any;
    label: string;
    /** Nested child options. Providing children makes this item a parent node. */
    options?: FilterItemCheckboxOptionProps[] | undefined;
}

/**
 * Props for the `Filter.Checkbox` sub-component.
 *
 * Supply a generic type `T` to use a custom option shape together with
 * `labelExtractor` and `valueExtractor`.
 */
export interface FilterItemCheckboxProps<T = FilterItemCheckboxOptionProps>
    extends Omit<FilterItemProps, "children"> {
    /** The full list of selectable options. */
    options: T[];
    /**
     * The currently selected options. When provided, the component syncs its
     * internal selection state to this value.
     */
    selectedOptions?: T[] | undefined;
    /**
     * Called when the selection changes.
     *
     * @param options The updated array of selected options.
     */
    onSelect?: ((options: T[]) => void) | undefined;
    /**
     * Derives the display label from an option item.
     * Falls back to `item.label` when not provided.
     */
    labelExtractor?: ((item: T) => React.ReactNode) | undefined;
    /**
     * Derives the unique value key from an option item.
     * Falls back to `item.value` when not provided.
     */
    valueExtractor?: ((item: T) => string) | undefined;
    /**
     * When `true`, toggle chips in mobile mode grow to fit their content width
     * instead of stretching to a fixed minimum width.
     */
    useToggleContentWidth?: boolean | undefined;
    /**
     * When `true`, renders checkboxes instead of toggle chips in mobile mode.
     * Has no effect for nested option trees, which always use checkboxes.
     *
     * @default false
     */
    showAsCheckboxInMobile?: boolean | undefined;
    /**
     * When `true`, shows a "View more / View less" button when there are more
     * options than the minimised threshold.
     *
     * @default true
     */
    minimisableOptions?: boolean | undefined;
}
