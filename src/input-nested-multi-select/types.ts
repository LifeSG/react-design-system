import type {
    InputNestedSelectOptionsProps,
    InputNestedSelectSharedProps,
    L1OptionProps,
} from "../input-nested-select";
import type {
    DropdownCustomLabelProps,
    DropdownSearchProps,
} from "../shared/dropdown-list/types";

/** Value type returned for a selected item at any nesting level. */
export type InputNestedMultiSelectValue<V1, V2, V3> = V1 | V2 | V3;

/** Ordered list of selected item values returned by `onSelectOptions`. */
export type InputNestedMultiSelectValues<V1, V2, V3> = Array<
    InputNestedMultiSelectValue<V1, V2, V3>
>;

/**
 * Props for the `InputNestedMultiSelect` component.
 *
 * The three type parameters describe the value types at each nesting level.
 */
export interface InputNestedMultiSelectProps<V1, V2, V3>
    extends React.HTMLAttributes<HTMLElement>,
        InputNestedSelectOptionsProps<V1, V2, V3>,
        InputNestedSelectSharedProps<V1, V2, V3>,
        DropdownSearchProps<L1OptionProps<V1, V2, V3>> {
    /**
     * The currently selected options expressed as an array of key paths.
     * Each key path is an ordered array of `key` strings from the root option
     * down to the selected item.
     */
    selectedKeyPaths?: string[][] | undefined;
    /**
     * Called after the selection changes.
     *
     * @param keyPaths The key paths of all selected items in the new selection state.
     * @param values The values of all selected items in the same order as `keyPaths`.
     */
    onSelectOptions?:
        | ((
              keyPaths: string[][],
              values: InputNestedMultiSelectValues<V1, V2, V3>
          ) => void)
        | undefined;
    /**
     * Custom width for the dropdown. When specified, the dropdown uses this
     * width instead of matching the trigger element width.
     */
    dropdownWidth?: string | undefined;
    /**
     * Called when focus leaves both the trigger and dropdown.
     */
    onBlur?: (() => void) | undefined;
    /**
     * Overrides the default labels shown inside the dropdown and on the trigger.
     */
    customLabels?: DropdownCustomLabelProps | undefined;
}

/**
 * A subset of `InputNestedMultiSelectProps` used by form components that manage
 * the `error` state themselves.
 */
export type InputNestedMultiSelectPartialProps<V1, V2, V3> = Omit<
    InputNestedMultiSelectProps<V1, V2, V3>,
    "error"
>;
