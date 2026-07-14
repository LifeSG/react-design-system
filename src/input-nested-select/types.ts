import type { RefObject } from "react";

import type {
    InputSelectOptionsProps,
    InputSelectSharedProps,
} from "../input-select";
import type {
    DropdownCustomLabelProps,
    DropdownSearchProps,
    DropdownVariantType,
    ExpandMode,
} from "../shared/dropdown-list/types";
import type { DropdownAlignmentType } from "../shared/dropdown-wrapper/types";

// =============================================================================
// SHARED PROPS
// =============================================================================
/**
 * Options and load-state configuration used by `InputNestedSelect` & `InputNestedMultiSelect`.
 */
export interface InputNestedSelectOptionsProps<V1, V2, V3>
    extends Omit<InputSelectOptionsProps<V1>, "options"> {
    options: L1OptionProps<V1, V2, V3>[];
}

/**
 * Shared behavioral and visual configuration for `InputNestedSelect` & `InputNestedMultiSelect`.
 *
 * The three type parameters describe the value types at each nesting level.
 */
export interface InputNestedSelectSharedProps<V1, V2, V3>
    extends Omit<InputSelectSharedProps<V1>, "options"> {
    readOnly?: boolean | undefined;
    /** Specifies if items are expanded or collapsed when the dropdown is opened */
    mode?: ExpandMode | undefined;
    /**
     * Controls the height of the trigger and dropdown items.
     *
     * @default "default"
     */
    variant?: DropdownVariantType | undefined;
    /** Aligns the dropdown relative to the trigger element. */
    alignment?: DropdownAlignmentType | undefined;
    /** CSS `z-index` applied to the dropdown overlay. */
    dropdownZIndex?: number | undefined;
    /**
     * The root element that contains the dropdown element.
     *
     * @remarks Specify this if you need to change the parent of the
     * dropdown in the HTML DOM.
     * Possible use case: sharing a stacking context.
     *
     * Note: if a parent of the trigger has a higher `z-index` than the dropdown,
     * the dropdown may be obscured.
     *
     * @default `document.body`
     */
    dropdownRootNode?: RefObject<HTMLElement> | undefined;
    /** Function to convert selected value into a string */
    valueToStringFunction?: ((value: V1 | V2 | V3) => string) | undefined;
}

// =============================================================================
// INPUT SELECT PROPS
// =============================================================================
/**
 * Props for `InputNestedSelect` component.
 *
 * The three type parameters describe the value types at each nesting level.
 */
export interface InputNestedSelectProps<V1, V2, V3>
    extends React.HTMLAttributes<HTMLElement>,
        InputNestedSelectOptionsProps<V1, V2, V3>,
        InputNestedSelectSharedProps<V1, V2, V3>,
        DropdownSearchProps<L1OptionProps<V1, V2, V3>> {
    /**
     * Key path identifying the currently selected option. Each entry is the
     * `key` of the option at that nesting level, ordered from level 1 to the
     * selected level. Drives the controlled selection state.
     */
    selectedKeyPath?: string[] | undefined;
    /**
     * When `true`, parent category labels are themselves selectable as options,
     * not just expand/collapse toggles.
     */
    selectableCategory?: boolean | undefined;
    /**
     * Called when the user selects an option.
     *
     * @param keyPath Key path from level 1 to the selected option.
     * @param value Value of the selected option.
     */
    onSelectOption?:
        | ((keyPath: string[], value: V1 | V2 | V3) => void)
        | undefined;
    /**
     * Custom width for the dropdown. When specified, the dropdown uses this
     * width instead of matching the trigger element width.
     */
    dropdownWidth?: string | undefined;
    /**
     * Called when focus leaves both the trigger and the dropdown.
     */
    onBlur?: (() => void) | undefined;
    /**
     * Overrides the default labels shown inside the dropdown and on the trigger.
     */
    customLabels?: DropdownCustomLabelProps | undefined;
}

/**
 * A subset of `InputNestedSelectProps` used by form components that manage
 * the `error` state themselves.
 */
export type InputNestedSelectPartialProps<V1, V2, V3> = Omit<
    InputNestedSelectProps<V1, V2, V3>,
    "error"
>;

// =============================================================================
// OPTION PROPS
// =============================================================================
interface BaseOptionProps {
    label: string;
    key: string;
}

/**
 * A top-level (level-1) option that may contain level-2 sub-options.
 *
 * `V1` is the value type for this level; `V2` and `V3` are the value types for
 * nested levels 2 and 3 respectively.
 */
export interface L1OptionProps<V1, V2, V3> extends BaseOptionProps {
    value: V1;
    /** Nested level-2 options belonging to this category. */
    subItems?: L2OptionProps<V2, V3>[] | undefined;
}

/**
 * A level-2 option that may contain level-3 leaf options.
 *
 * `V2` is the value type for this level; `V3` is the value type for the nested
 * level-3 options.
 */
export interface L2OptionProps<V2, V3> extends BaseOptionProps {
    value: V2;
    /** Nested level-3 leaf options belonging to this item. */
    subItems?: L3OptionProps<V3>[] | undefined;
}

/**
 * A level-3 leaf option with no further nesting.
 *
 * `V3` is the value type for this level.
 */
export interface L3OptionProps<V3> extends BaseOptionProps {
    value: V3;
    subItems?: undefined;
}
