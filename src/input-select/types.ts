import { RefObject } from "react";
import {
    DropdownCustomLabelProps,
    DropdownDisplayProps,
    DropdownSearchProps,
    DropdownVariantType,
    ItemsLoadStateType,
    TruncateType,
} from "../shared/dropdown-list-v2/types";
import { DropdownAlignmentType } from "../shared/dropdown-wrapper";

// =============================================================================
// SHARED PROPS
// =============================================================================
/**
 * Options and loading state props shared across select components.
 *
 * @keywords select, dropdown, options, loading, retry
 */
export interface InputSelectOptionsProps<T> {
    options: T[];
    /**
     * Used when options are loaded from an api call.
     * Values: "loading" | "fail" | "success"
     */
    optionsLoadState?: ItemsLoadStateType | undefined;
    /** Specifies the truncation type. Truncated text will be replaced with ellipsis. Values: "middle" | "end" */
    optionTruncationType?: TruncateType | undefined;

    /** Callback fired when the dropdown options list is shown. */
    onShowOptions?: (() => void) | undefined;
    /** Callback fired when the dropdown options list is hidden. */
    onHideOptions?: (() => void) | undefined;
    /** Callback fired when the user retries loading options after a failure. */
    onRetry?: (() => void) | undefined;
}

/**
 * Shared interactive props for select input components.
 *
 * @keywords select, dropdown, placeholder, disabled, error
 */
export interface InputSelectSharedProps<T> {
    /** The name attribute for the underlying button element. */
    name?: string | undefined;
    /** The list of options to display in the dropdown. */
    options: T[];
    /** Placeholder text displayed when no value is selected. */
    placeholder?: string | undefined;
    /** Disables user interaction with the component. */
    disabled?: boolean | undefined;
    /** Displays the component in an error state. */
    error?: boolean | undefined;
    /** Test identifier for automated testing. */
    "data-testid"?: string | undefined;
}

// =============================================================================
// INPUT SELECT PROPS
// =============================================================================
/**
 * A single-select dropdown input that allows users to pick one option from a list.
 *
 * @keywords input-select, dropdown, single-select, combobox, form
 */
export interface InputSelectProps<T, V>
    extends React.HTMLAttributes<HTMLElement>,
        InputSelectOptionsProps<T>,
        InputSelectSharedProps<T>,
        DropdownDisplayProps<T, V>,
        DropdownSearchProps<T> {
    // TODO: should be a common state once all variants implement this
    /** Makes the component read-only, preventing user input. */
    readOnly?: boolean | undefined;
    /** The currently selected option. */
    selectedOption?: T | undefined;
    /** Callback fired when an option is selected. Returns the option and its extracted value. */
    onSelectOption?: ((option: T, extractedValue: V) => void) | undefined;
    /** Function to derive display value for selected option */
    displayValueExtractor?: ((option: T) => string) | undefined;
    /** Function to convert value into a string */
    valueToStringFunction?: ((value: V) => string) | undefined;
    /** Function to render selected custom component */
    renderCustomSelectedOption?: ((option: T) => JSX.Element) | undefined;
    /** Callback fired when the component loses focus. */
    onBlur?: (() => void) | undefined;
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
    /**
     * Custom width for the dropdown in pixels. When specified, the dropdown will use this
     * width instead of matching the input element width.
     */
    dropdownWidth?: string | undefined;
    /** Custom labels for dropdown UI elements such as the search placeholder or empty state. */
    customLabels?: DropdownCustomLabelProps | undefined;
}

/** To be exposed for Form component inheritance */
export type InputSelectPartialProps<T, V> = Omit<
    InputSelectProps<T, V>,
    "error"
>;
