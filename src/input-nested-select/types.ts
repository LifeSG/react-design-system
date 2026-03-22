import {
    InputSelectOptionsProps,
    InputSelectSharedProps,
} from "../input-select";
import {
    DropdownSearchProps,
    DropdownStyleProps,
    Mode,
} from "../shared/nested-dropdown-list/types";

export interface InputNestedSelectOptionsProps<V1, V2, V3>
    extends Omit<InputSelectOptionsProps<V1>, "options"> {
    options: L1OptionProps<V1, V2, V3>[];
}

// =============================================================================
// INPUT SELECT PROPS
// =============================================================================
/**
 * Props for the InputNestedSelect component - single-option hierarchical dropdown.
 *
 * Allows the user to drill into nested categories to select a single value from
 * a three-level hierarchy (L1 → L2 → L3). Use `InputNestedMultiSelect` for
 * selecting multiple values. Supports search and async loading.
 *
 * @example
 * ```tsx
 * <InputNestedSelect
 *     options={locationTree}
 *     selectedKeyPath={["sg", "central"]}
 *     onSelectOption={(keyPath, value) => setValue(value)}
 * />
 * ```
 */
export interface InputNestedSelectSharedProps<V1, V2, V3> {
    /**
     * Makes the input read-only, displaying the current value without allowing changes.
     *
     * @default false
     */
    readOnly?: boolean | undefined;
    /**
     * Controls the initial expand/collapse state of category items when the dropdown opens.
     *
     * @see Mode for available values
     * @default undefined
     */
    mode?: Mode | undefined;
    /**
     * Converts the selected value (any level) to a display string for the trigger label.
     *
     * @param value - The selected value at any hierarchy level.
     */
    valueToStringFunction?: ((value: V1 | V2 | V3) => string) | undefined;
}

/**
 * Props for the InputNestedSelect component - single-option hierarchical dropdown.
 *
 * @keywords cascading dropdown, hierarchical select, tree select, category picker, nested category
 */
export interface InputNestedSelectProps<V1, V2, V3>
    extends React.HTMLAttributes<HTMLElement>,
        InputNestedSelectOptionsProps<V1, V2, V3>,
        InputNestedSelectSharedProps<V1, V2, V3>,
        Omit<InputSelectSharedProps<V1>, "options">,
        DropdownSearchProps,
        DropdownStyleProps {
    /**
     * The key path of the currently selected option, e.g., `["country", "region", "city"]`.
     *
     * Each string is the `key` property of the option at that hierarchy level.
     *
     * @default undefined
     */
    selectedKeyPath?: string[] | undefined;
    /**
     * Allows users to select a category (L1 or L2) node, not just leaf (L3) nodes.
     *
     * @default false
     */
    selectableCategory?: boolean | undefined;
    /**
     * Called when the user selects an option from any level of the hierarchy.
     *
     * @param keyPath - The key path of the selected option (e.g., `["sg", "central", "toa-payoh"]`).
     * @param value - The value of the selected option at the appropriate hierarchy level.
     */
    onSelectOption?:
        | ((keyPath: string[], value: V1 | V2 | V3) => void)
        | undefined;
}

/** To be exposed for Form component inheritance */
export type InputNestedSelectPartialProps<V1, V2, V3> = Omit<
    InputNestedSelectProps<V1, V2, V3>,
    "error"
>;

// =============================================================================
// Recursive Types
// =============================================================================
interface BaseOptionProps {
    /** The display label shown in the dropdown list for this item. */
    label: string;
    /** A unique string key for this item within its parent's `subItems` list. */
    key: string;
}

/**
 * An L1 (top-level) option in a three-level nested dropdown hierarchy.
 *
 * May contain `subItems` of type `L2OptionProps` to form the second level.
 */
export interface L1OptionProps<V1, V2, V3> extends BaseOptionProps {
    /** The value held by this L1 option. */
    value: V1;
    /** The second-level options nested under this L1 item. */
    subItems?: L2OptionProps<V2, V3>[] | undefined;
}

/**
 * An L2 (second-level) option nested under an `L1OptionProps`.
 *
 * May contain `subItems` of type `L3OptionProps` to form the third level.
 */
export interface L2OptionProps<V2, V3> extends BaseOptionProps {
    /** The value held by this L2 option. */
    value: V2;
    /** The third-level options nested under this L2 item. */
    subItems?: L3OptionProps<V3>[] | undefined;
}

/**
 * An L3 (leaf-level) option nested under an `L2OptionProps`.
 *
 * This is the deepest level; it has no `subItems`.
 */
export interface L3OptionProps<V3> extends BaseOptionProps {
    /** The value held by this L3 option. */
    value: V3;
    subItems?: undefined;
}
