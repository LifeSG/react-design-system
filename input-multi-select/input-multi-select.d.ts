import type { InputMultiSelectProps } from "./types";
/**
 * A dropdown field that lets users select multiple options from a list.
 *
 * Use `InputMultiSelect` when users need to pick one or more items from a
 * predefined list.
 * @keywords combobox, dropdown, field, form, input, multi-value, multiple, select
 */
export declare const InputMultiSelect: <T, V>({ selectedOptions, placeholder, options, disabled, error, className, "data-testid": testId, id, "aria-labelledby": ariaLabelledBy, "aria-describedby": ariaDescribedBy, "aria-invalid": ariaInvalid, enableSearch, searchFunction, searchPlaceholder, valueExtractor, listExtractor, onSelectOptions, onShowOptions, onHideOptions, onRetry, optionsLoadState, optionTruncationType, renderListItem, hideNoResultsDisplay, noResultsDescription, customLabels, renderCustomCallToAction, onBlur, variant, readOnly, alignment, dropdownZIndex, maxSelectable, dropdownRootNode, dropdownWidth, }: InputMultiSelectProps<T, V>) => JSX.Element;
