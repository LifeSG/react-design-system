import type { InputSelectProps } from "./types";
/**
 * A single-selection dropdown input.
 *
 * Use `InputSelect` when the user must pick exactly one item from a list.
 */
export declare const InputSelect: <T, V>({ selectedOption, placeholder, options, disabled, error, className, "data-testid": testId, id, "aria-labelledby": ariaLabelledBy, "aria-describedby": ariaDescribedBy, "aria-invalid": ariaInvalid, enableSearch, searchFunction, searchPlaceholder, valueExtractor, valueToStringFunction, listExtractor, displayValueExtractor, onSelectOption, onShowOptions, onHideOptions, onRetry, optionsLoadState, optionTruncationType, renderCustomSelectedOption, renderListItem, hideNoResultsDisplay, noResultsDescription, customLabels, renderCustomCallToAction, onBlur, variant, readOnly, alignment, dropdownZIndex, dropdownRootNode, dropdownWidth, }: InputSelectProps<T, V>) => JSX.Element;
