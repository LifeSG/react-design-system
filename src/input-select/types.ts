import {
    DropdownDisplayProps,
    DropdownSearchProps,
    DropdownStyleProps,
    ItemsLoadStateType,
    TruncateType,
} from "../shared/dropdown-list/types";

// =============================================================================
// SHARED PROPS
// =============================================================================
export interface InputSelectOptionsProps<T> {
    /** The list of options to display in the dropdown. */
    options: T[];
    /**
     * The async load state of the options list.
     *
     * - `"loading"`: Shows a loading spinner.
     * - `"fail"`: Shows an error state with a retry action.
     * - `"success"`: Options are loaded and displayed.
     *
     * @default undefined
     */
    optionsLoadState?: ItemsLoadStateType | undefined;
    /**
     * Controls how long option labels are truncated.
     *
     * - `"middle"`: Truncates the middle of the text with an ellipsis.
     * - `"end"`: Truncates the end of the text with an ellipsis.
     *
     * @default undefined
     */
    optionTruncationType?: TruncateType | undefined;
    /** Called when the dropdown list is opened. */
    onShowOptions?: (() => void) | undefined;
    /** Called when the dropdown list is closed. */
    onHideOptions?: (() => void) | undefined;
    /** Called when the user triggers the retry action after a failed load. */
    onRetry?: (() => void) | undefined;
}

/**
 * Shared props used by both InputSelect and InputMultiSelect.
 */
export interface InputSelectSharedProps<T> {
    /** The HTML `name` attribute forwarded to the hidden form input. */
    name?: string | undefined;
    /** The list of options to display in the dropdown. */
    options: T[];
    /** Placeholder text shown in the trigger when no option is selected. */
    placeholder?: string | undefined;
    /**
     * Disables the input and prevents interaction.
     *
     * @default false
     */
    disabled?: boolean | undefined;
    /**
     * Applies error styling to indicate an invalid selection.
     *
     * @default false
     */
    error?: boolean | undefined;
    /**
     * Sets the `data-testid` attribute for targeting the element in automated tests.
     */
    "data-testid"?: string | undefined;
}

// =============================================================================
// INPUT SELECT PROPS
// =============================================================================
/**
 * Props for the InputSelect component - single-option dropdown selector.
 *
 * Allows the user to choose one option from a scrollable dropdown list.
 * Supports async option loading, search, custom rendering, and controlled or
 * uncontrolled selected state. For multi-option selection use `InputMultiSelect`.
 *
 * @example
 * ```tsx
 * <InputSelect
 *     options={countries}
 *     valueExtractor={(item) => item.code}
 *     listExtractor={(item) => item.name}
 *     onSelectOption={(option, value) => setValue(value)}
 * />
 * ```
 * @keywords dropdown, combobox, select box, picker, option list
 */
export interface InputSelectProps<T, V>
    extends React.HTMLAttributes<HTMLElement>,
        InputSelectOptionsProps<T>,
        InputSelectSharedProps<T>,
        DropdownDisplayProps<T, V>,
        DropdownSearchProps<T>,
        DropdownStyleProps {
    /**
     * Makes the input read-only, preventing user changes while still displaying the current value.
     *
     * @default false
     */
    readOnly?: boolean | undefined;
    /** The currently selected option object. */
    selectedOption?: T | undefined;
    /**
     * Called when the user selects an option from the dropdown.
     *
     * @param option - The full selected item object.
     * @param extractedValue - The extracted value derived by `valueExtractor`.
     */
    onSelectOption?: ((option: T, extractedValue: V) => void) | undefined;
    /**
     * Derives the display string shown in the trigger for the selected option.
     *
     * @param option - The currently selected item object.
     */
    displayValueExtractor?: ((option: T) => string) | undefined;
    /**
     * Converts the extracted value to a human-readable string representation.
     *
     * @param value - The extracted value.
     */
    valueToStringFunction?: ((value: V) => string) | undefined;
    /**
     * Renders a custom component inside the dropdown trigger for the selected option.
     *
     * @param option - The currently selected item object.
     */
    renderCustomSelectedOption?: ((option: T) => JSX.Element) | undefined;
    /** Called when the dropdown loses focus. */
    onBlur?: (() => void) | undefined;
}

/** To be exposed for Form component inheritance */
export type InputSelectPartialProps<T, V> = Omit<
    InputSelectProps<T, V>,
    "error"
>;
