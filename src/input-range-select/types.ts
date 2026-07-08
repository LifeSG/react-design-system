import type { RefObject } from "react";

import type {
    InputSelectOptionsProps,
    InputSelectSharedProps,
} from "../input-select/types";
import type {
    DropdownDisplayProps,
    DropdownSearchProps,
    ItemsLoadStateType,
} from "../shared/dropdown-list/types";
import type { DropdownAlignmentType } from "../shared/dropdown-wrapper";

/**
 * Options configuration for `InputRangeSelect`.
 */
export interface InputRangeSelectOptionsProps<T>
    extends Omit<InputSelectOptionsProps<T>, "options" | "optionsLoadState"> {
    /**
     * The list of selectable items for each end of the range.
     */
    options: InputRangeProp<T[]>;
    /**
     * The async load state for each end's option list.
     *
     * @default { from: "success", to: "success" }
     */
    optionsLoadState?: InputRangeProp<ItemsLoadStateType | undefined>;
}

/**
 * A representation of a paired "from" and "to" value.
 */
export interface InputRangeProp<T> {
    from?: T | undefined;
    to?: T | undefined;
}

/**
 * Props for `InputRangeSelect`.
 *
 * `T` is the option item type; `V` is the extracted value type returned by
 * `valueExtractor`.
 */
export interface InputRangeSelectProps<T, V>
    extends React.HTMLAttributes<HTMLElement>,
        InputRangeSelectOptionsProps<T>,
        Omit<InputSelectSharedProps<T>, "options">,
        DropdownDisplayProps<T, V>,
        DropdownSearchProps<T> {
    readOnly?: boolean | undefined;
    /**
     * Placeholder text shown in each selector when no value is selected.
     *
     * @default { from: "Select", to: "Select" }
     */
    placeholders?: InputRangeProp<string> | undefined;
    /**
     * The currently selected option for each end of the range.
     * Controls the displayed value for both selectors.
     */
    selectedOptions?: InputRangeProp<T> | undefined;
    /**
     * Aligns the dropdown relative to the trigger element.
     * - `"left"` — dropdown left-aligns with the trigger
     * - `"right"` — dropdown right-aligns with the trigger
     */
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
    /**
     * Custom width for the dropdown. When specified, the dropdown uses this
     * width instead of matching the trigger element width.
     */
    dropdownWidth?: string | undefined;
    /**
     * Called when a selection is made in either the "from" or "to" dropdown,
     * or when the current range selection is cleared.
     *
     * @param option The partial or full range selection after the interaction.
     * @param extractedValue The value produced by `valueExtractor` for the
     *   chosen item, or `undefined` when cleared.
     */
    onSelectOption?:
        | ((option: InputRangeProp<T>, extractedValue: V | undefined) => void)
        | undefined;
    /**
     * Derives a display string for the selected option shown in the trigger
     * button. Takes precedence over `valueExtractor` + `valueToStringFunction`
     * for display purposes.
     */
    displayValueExtractor?: ((option: T) => string) | undefined;
    /** Function to convert selected value into a string */
    valueToStringFunction?: ((value: V) => string) | undefined;
    /**
     * Renders a custom element for the currently selected option.
     */
    renderCustomSelectedOption?: ((option: T) => JSX.Element) | undefined;
}

/**
 * A subset of `InputRangeSelectProps` used by form components that manage
 * the `error` state themselves.
 */
export type InputRangeSelectPartialProps<T, V> = Omit<
    InputRangeSelectProps<T, V>,
    "error"
>;
