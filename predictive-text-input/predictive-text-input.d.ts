import type { PredictiveTextInputProps } from "./types";
/**
 * A text input that fetches and displays matching suggestions as the user types.
 *
 * Use `PredictiveTextInput` for search-as-you-type or autocomplete scenarios
 * where options are loaded asynchronously based on the current input.
 * @keywords autocomplete, combobox, field, form, input, search, suggestions, typeahead
 */
export declare const PredictiveTextInput: <T, V>({ className, "data-testid": testId, selectedOption, minimumCharacters, fetchOptions, placeholder, readOnly, disabled, error, valueExtractor, listExtractor, displayValueExtractor, onSelectOption, alignment, dropdownZIndex, dropdownRootNode, dropdownWidth, "aria-describedby": ariaDescribedBy, ...otherProps }: PredictiveTextInputProps<T, V>) => JSX.Element;
