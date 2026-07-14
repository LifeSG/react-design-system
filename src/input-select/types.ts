import type { RefObject } from "react";

import type {
    DropdownCustomLabelProps,
    DropdownDisplayProps,
    DropdownSearchProps,
    DropdownVariantType,
    ItemsLoadStateType,
    TruncateType,
} from "../shared/dropdown-list/types";
import type { DropdownAlignmentType } from "../shared/dropdown-wrapper";

// =============================================================================
// SHARED PROPS
// =============================================================================
/**
 * Options configuration for `InputSelect`.
 */
export interface InputSelectOptionsProps<T> {
    /** The list of selectable options rendered in the dropdown. */
    options: T[];
    /**
     * Indicates the load state of options fetched asynchronously.
     * Renders a loading spinner, error retry, or the list depending on the state.
     *
     * @default "success"
     */
    optionsLoadState?: ItemsLoadStateType | undefined;
    /**
     * Controls how long option labels are truncated when they overflow.
     *
     * @default "end"
     */
    optionTruncationType?: TruncateType | undefined;

    /** Called when the dropdown list becomes visible. */
    onShowOptions?: (() => void) | undefined;
    /** Called when the dropdown list is hidden. */
    onHideOptions?: (() => void) | undefined;
    /** Called when the user activates the retry action after a load failure. */
    onRetry?: (() => void) | undefined;
}

/** Common presentation and state props shared across select components. */
export interface InputSelectSharedProps<T> {
    /** Name attribute forwarded to the underlying button element. */
    name?: string | undefined;
    /** The list of selectable options. */
    options: T[];
    /** Placeholder text shown when no option is selected. */
    placeholder?: string | undefined;
    disabled?: boolean | undefined;
    /** Renders the trigger in an error state. */
    error?: boolean | undefined;
    "data-testid"?: string | undefined;
}

// =============================================================================
// INPUT SELECT PROPS
// =============================================================================
/**
 * Props for the `InputSelect` component.
 *
 * `T` is the option item type; `V` is the extracted value type returned by
 * `valueExtractor`.
 */
export interface InputSelectProps<T, V>
    extends React.HTMLAttributes<HTMLElement>,
        InputSelectOptionsProps<T>,
        InputSelectSharedProps<T>,
        DropdownDisplayProps<T, V>,
        DropdownSearchProps<T> {
    // TODO: should be a common state once all variants implement this
    readOnly?: boolean | undefined;
    /** The currently selected option. The component syncs to this value on each render. */
    selectedOption?: T | undefined;
    /**
     * Called when the user picks an item from the dropdown.
     *
     * @param option The full option object that was selected.
     * @param extractedValue The value derived from the option via `valueExtractor`.
     */
    onSelectOption?: ((option: T, extractedValue: V) => void) | undefined;
    /**
     * Derives the display string shown in the trigger for the selected option.
     * Takes precedence over `valueExtractor` + `valueToStringFunction`.
     */
    displayValueExtractor?: ((option: T) => string) | undefined;
    /** Function to convert selected value into a display string */
    valueToStringFunction?: ((value: V) => string) | undefined;
    /**
     * Renders a custom element for the currently selected option.
     */
    renderCustomSelectedOption?: ((option: T) => JSX.Element) | undefined;
    /**
     * Called when focus leaves both the trigger and dropdown.
     */
    onBlur?: (() => void) | undefined;
    /**
     * Visual size variant of the trigger and dropdown.
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
    /**
     * Custom width for the dropdown. When specified, the dropdown uses this
     * width instead of matching the trigger element width.
     */
    dropdownWidth?: string | undefined;
    /**
     * Overrides the default labels shown inside the dropdown and on the trigger.
     */
    customLabels?: DropdownCustomLabelProps | undefined;
}

/**
 * A subset of `InputSelectProps` used by form components that manage
 * the `error` state themselves.
 */
export type InputSelectPartialProps<T, V> = Omit<
    InputSelectProps<T, V>,
    "error"
>;
