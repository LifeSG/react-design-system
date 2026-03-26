import { RefObject } from "react";
import {
    InputSelectOptionsProps,
    InputSelectSharedProps,
} from "../input-select";
import {
    DropdownCustomLabelProps,
    DropdownSearchProps,
    DropdownVariantType,
    ExpandMode,
} from "../shared/dropdown-list-v2/types";
import { DropdownAlignmentType } from "../shared/dropdown-wrapper/types";

// =============================================================================
// SHARED PROPS
// =============================================================================
/**
 * Options props for nested select, replacing the flat options list with a hierarchical one.
 *
 * @keywords nested-select, options, hierarchical, l1-l2-l3
 */
export interface InputNestedSelectOptionsProps<V1, V2, V3>
    extends Omit<InputSelectOptionsProps<V1>, "options"> {
    options: L1OptionProps<V1, V2, V3>[];
}

/**
 * Shared interactive props for nested select components.
 *
 * @keywords nested-select, shared, read-only, variant, alignment
 */
export interface InputNestedSelectSharedProps<V1, V2, V3>
    extends Omit<InputSelectSharedProps<V1>, "options"> {
    /** Makes the component read-only, preventing user input. */
    readOnly?: boolean | undefined;
    /** Specifies if items are expanded or collapsed when the dropdown is opened */
    mode?: ExpandMode | undefined;
    /** Visual variant for the dropdown list. */
    variant?: DropdownVariantType | undefined;
    /** Alignment of the dropdown relative to the trigger element. */
    alignment?: DropdownAlignmentType | undefined;
    /** Z-index override for the dropdown layer. */
    dropdownZIndex?: number | undefined;
    /**
     * The root element that contains the dropdown element. Defaults to the document body.
     *
     * If the parent that contains the trigger element has a higher z-index than the dropdown,
     * the dropdown may not be visible. Specify the parent element here instead
     */
    dropdownRootNode?: RefObject<HTMLElement> | undefined;
    /** Function to convert selected value into a string */
    valueToStringFunction?: ((value: V1 | V2 | V3) => string) | undefined;
}

// =============================================================================
// INPUT SELECT PROPS
// =============================================================================
/**
 * A single-select dropdown with hierarchical (nested) option categories up to 3 levels deep.
 *
 * @keywords nested-select, hierarchical, category, dropdown, tree-select, l1-l2-l3
 */
export interface InputNestedSelectProps<V1, V2, V3>
    extends React.HTMLAttributes<HTMLElement>,
        InputNestedSelectOptionsProps<V1, V2, V3>,
        InputNestedSelectSharedProps<V1, V2, V3>,
        DropdownSearchProps<L1OptionProps<V1, V2, V3>> {
    /** Specifies key path of the selected option */
    selectedKeyPath?: string[] | undefined;
    /** If specified, the category label is selectable */
    selectableCategory?: boolean | undefined;
    /** Called when an option is selected. Returns the option's key path and value */
    onSelectOption?:
        | ((keyPath: string[], value: V1 | V2 | V3) => void)
        | undefined;
    /** Custom width for the dropdown  */
    dropdownWidth?: string | undefined;
    /** Callback fired when the component loses focus. */
    onBlur?: (() => void) | undefined;
    /** Custom labels for dropdown UI elements such as the search placeholder or empty state. */
    customLabels?: DropdownCustomLabelProps | undefined;
}

/** To be exposed for Form component inheritance */
export type InputNestedSelectPartialProps<V1, V2, V3> = Omit<
    InputNestedSelectProps<V1, V2, V3>,
    "error"
>;

// =============================================================================
// OPTION PROPS
// =============================================================================
/** Base shape for all nested option items, providing a display label and a unique key. */
interface BaseOptionProps {
    label: string;
    key: string;
}

/** Level-1 option that can contain level-2 sub-items. */
export interface L1OptionProps<V1, V2, V3> extends BaseOptionProps {
    value: V1;
    subItems?: L2OptionProps<V2, V3>[] | undefined;
}

/** Level-2 option that can contain level-3 sub-items. */
export interface L2OptionProps<V2, V3> extends BaseOptionProps {
    value: V2;
    subItems?: L3OptionProps<V3>[] | undefined;
}
/** Level-3 leaf option with no further sub-items. */
export interface L3OptionProps<V3> extends BaseOptionProps {
    value: V3;
    subItems?: undefined;
}
