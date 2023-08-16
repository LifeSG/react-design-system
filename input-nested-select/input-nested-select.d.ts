/// <reference types="react" />
import { InputNestedSelectProps, L1OptionProps, L2OptionProps, L3OptionProps } from "./types";
export type CombinedOptionProps<V1, V2, V3> = L1OptionProps<V1, V2, V3> | L2OptionProps<V2, V3> | L3OptionProps<V3>;
export declare const InputNestedSelect: <V1, V2, V3>({ placeholder, options, disabled, error, className, "data-testid": testId, id, selectedKeyPath: _selectedKeyPath, mode, valueToStringFunction, enableSearch, searchPlaceholder, selectableCategory, hideNoResultsDisplay, listStyleWidth, readOnly, onSearch, onSelectOption, onShowOptions, onHideOptions, onRetry, optionsLoadState, optionTruncationType, ...otherProps }: InputNestedSelectProps<V1, V2, V3>) => JSX.Element;
