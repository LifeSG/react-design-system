import { ListItemDisplayProps } from "../shared/dropdown-list/types";

/**
 * Props for the PredictiveTextInput component - autocomplete text input.
 *
 * Displays suggestions fetched asynchronously as the user types. The
 * suggestions list appears after a configurable minimum number of characters
 * have been entered. Selecting a suggestion calls `onSelectOption`. Used for
 * location search, name lookup, and other typeahead scenarios.
 *
 * @example
 * ```tsx
 * <PredictiveTextInput
 *     fetchOptions={async (input) => await searchLocations(input)}
 *     listExtractor={(item) => item.name}
 *     onSelectOption={(option, value) => setLocation(value)}
 *     minimumCharacters={2}
 * />
 * ```
 * @keywords typeahead, autocomplete, autosuggest, live search, search suggestions
 */
export interface PredictiveTextInputProps<T, V> {
    /** The HTML `id` attribute for the root element. */
    id?: string | undefined;
    /** Additional CSS class name. */
    className?: string | undefined;
    /**
     * Sets the `data-testid` attribute for targeting the element in automated tests.
     */
    "data-testid"?: string | undefined;
    /**
     * The minimum number of characters to type before the suggestions list appears.
     *
     * @default 1
     */
    minimumCharacters?: number | undefined;
    /** Placeholder text shown in the input when it is empty. */
    placeholder?: string | undefined;
    /**
     * Makes the input read-only, displaying the selected option without allowing changes.
     *
     * @default false
     */
    readOnly?: boolean | undefined;
    /**
     * Disables the input and prevents interaction.
     *
     * @default false
     */
    disabled?: boolean | undefined;
    /**
     * Applies error styling to indicate an invalid value.
     *
     * @default false
     */
    error?: boolean | undefined;
    /** The currently selected option object. */
    selectedOption?: T | undefined;
    /**
     * Async function that fetches autocomplete suggestions for the typed input.
     *
     * @param input - The current text entered by the user.
     * @returns A promise resolving to an array of suggestion items.
     */
    fetchOptions: (input: string) => Promise<T[]>;
    /**
     * Extracts the value from a suggestion item.
     *
     * @param item - A suggestion item from `fetchOptions`.
     */
    valueExtractor?: (item: T) => V | undefined;
    /**
     * Extracts the display text shown in the dropdown list for a suggestion item.
     *
     * Return a `ListItemDisplayProps` to render a two-line list row with a subtitle.
     *
     * @param item - A suggestion item from `fetchOptions`.
     */
    listExtractor?: ((item: T) => string | ListItemDisplayProps) | undefined;
    /**
     * Derives the display string shown in the input field for the selected option.
     *
     * @param option - The currently selected item object.
     */
    displayValueExtractor?: ((option: T) => string) | undefined;
    /**
     * Called when the user selects a suggestion from the dropdown.
     *
     * @param option - The selected suggestion item.
     * @param extractedValue - The value extracted by `valueExtractor`.
     */
    onSelectOption?: ((option: T, extractedValue: V) => void) | undefined;
}
