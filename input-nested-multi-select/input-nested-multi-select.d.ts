import type { InputNestedMultiSelectProps } from "./types";
/**
 * A multi-select input that presents options in a nested hierarchy, up to three levels deep.
 *
 * Use `InputNestedMultiSelect` when users need to choose multiple values from a
 * hierarchical option tree. Selecting a parent item automatically selects all its
 * leaf descendants; deselecting a parent removes all its descendants from the
 * selection.
 */
export declare const InputNestedMultiSelect: <V1, V2, V3>({ placeholder, options: _options, disabled, error, className, "data-testid": testId, id, "aria-labelledby": ariaLabelledBy, "aria-describedby": ariaDescribedBy, "aria-invalid": ariaInvalid, selectedKeyPaths: _selectedKeyPaths, mode, valueToStringFunction, enableSearch, searchPlaceholder, hideNoResultsDisplay, noResultsDescription, customLabels, readOnly, onSearch, onSelectOptions, onShowOptions, onHideOptions, onRetry, onBlur, optionsLoadState, optionTruncationType, variant, alignment, dropdownZIndex, dropdownWidth, dropdownRootNode, }: InputNestedMultiSelectProps<V1, V2, V3>) => JSX.Element;
