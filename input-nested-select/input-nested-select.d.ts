import type { InputNestedSelectProps } from "./types";
/**
 * A single-select input that presents options in a hierarchy, up to three levels deep.
 *
 * Use `InputNestedSelect` when users need to choose a value from a
 * hierarchical option tree. The dropdown renders as an expandable tree.
 * Parent nodes collapse or expand their children, and only one leaf or category
 * value can be selected at a time.
 */
export declare const InputNestedSelect: <V1, V2, V3>({ placeholder, options: _options, disabled, error, className, "data-testid": testId, id, "aria-labelledby": ariaLabelledBy, "aria-describedby": ariaDescribedBy, "aria-invalid": ariaInvalid, selectedKeyPath: _selectedKeyPath, mode, valueToStringFunction, enableSearch, searchPlaceholder, selectableCategory, hideNoResultsDisplay, noResultsDescription, customLabels, readOnly, onBlur, onSearch, onSelectOption, onShowOptions, onHideOptions, onRetry, optionsLoadState, optionTruncationType, variant, alignment, dropdownZIndex, dropdownWidth, dropdownRootNode, }: InputNestedSelectProps<V1, V2, V3>) => JSX.Element;
