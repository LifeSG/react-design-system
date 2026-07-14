import type { RefObject } from "react";

import type {
    InputSelectOptionsProps,
    InputSelectSharedProps,
} from "../input-select/types";
import type {
    DropdownCustomLabelProps,
    DropdownDisplayProps,
    DropdownSearchProps,
    DropdownVariantType,
} from "../shared/dropdown-list/types";
import type { DropdownAlignmentType } from "../shared/dropdown-wrapper";

/**
 * Props for the `InputMultiSelect` component.
 *
 * `T` is the option item type. `V` is the extracted value type used for
 * equality comparisons when a `valueExtractor` is provided.
 */
export interface InputMultiSelectProps<T, V>
    extends React.HTMLAttributes<HTMLElement>,
        InputSelectOptionsProps<T>,
        InputSelectSharedProps<T>,
        DropdownDisplayProps<T, V>,
        DropdownSearchProps<T> {
    readOnly?: boolean | undefined;
    /**
     * The currently selected options.
     */
    selectedOptions?: T[] | undefined;
    /**
     * Called when the selection changes. Receives the updated array of selected
     * options after each user interaction.
     */
    onSelectOptions?: ((options: T[]) => void) | undefined;
    /**
     * Called when focus leaves both the trigger and dropdown.
     */
    onBlur?: (() => void) | undefined;
    /**
     * Controls the height of the trigger and dropdown items.
     * - `"default"` — standard height
     * - `"small"` — reduced height
     *
     * @default "default"
     */
    variant?: DropdownVariantType | undefined;
    /**
     * Aligns the dropdown relative to the trigger element.
     * - `"left"` — dropdown left-aligns with the trigger
     * - `"right"` — dropdown right-aligns with the trigger
     */
    alignment?: DropdownAlignmentType | undefined;
    /** CSS `z-index` applied to the dropdown overlay. */
    dropdownZIndex?: number | undefined;
    /**
     * Caps the number of options that can be simultaneously selected.
     */
    maxSelectable?: number | undefined;
    /**
     * Overrides the default labels shown inside the dropdown and on the trigger.
     */
    customLabels?: DropdownCustomLabelProps | undefined;
    /**
     * Custom width for the dropdown. When specified, the dropdown uses this
     * width instead of matching the trigger element width.
     */
    dropdownWidth?: string | undefined;
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
}

/**
 * A subset of `InputMultiSelectProps` used by form components that manage
 * the `error` state themselves.
 */
export type InputMultiSelectPartialProps<T, V> = Omit<
    InputMultiSelectProps<T, V>,
    "error"
>;
