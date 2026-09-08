import type { InputRangeSelectProps } from "./types";
/**
 * A paired combobox input for selecting a start and end value from dropdown lists.
 *
 * Use `InputRangeSelect` when a consumer must choose a range by picking two
 * values — one for "from" and one for "to" — each from their own option list.
 * @keywords combobox, dropdown, field, form, input, pair, range
 */
export declare const InputRangeSelect: <T, V>({ selectedOptions, placeholders, options, disabled, className, readOnly, error, "data-testid": testId, id, enableSearch, searchFunction, searchPlaceholder, valueExtractor, valueToStringFunction, listExtractor, isOptionDisabled, displayValueExtractor, onSelectOption, onShowOptions, onHideOptions, onRetry, optionsLoadState, optionTruncationType, renderCustomSelectedOption, renderListItem, renderCustomCallToAction, alignment, dropdownZIndex, dropdownRootNode, dropdownWidth, "aria-labelledby": ariaLabelledBy, "aria-describedby": ariaDescribedBy, ...otherProps }: InputRangeSelectProps<T, V>) => JSX.Element;
