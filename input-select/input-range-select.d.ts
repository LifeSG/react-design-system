/// <reference types="react" />
import { InputRangeSelectProps } from "./types";
export declare const InputRangeSelect: <T, V>({ selectedOptions, placeholders, options, disabled, readOnly, error, "data-testid": testId, id, enableSearch, searchFunction, searchPlaceholder, valueExtractor, valueToStringFunction, listExtractor, displayValueExtractor, onSelectOption, listStyleWidth, onShowOptions, onHideOptions, onRetry, optionsLoadState, optionTruncationType, renderCustomSelectedOption, renderListItem, renderCustomCallToAction, ...otherProps }: InputRangeSelectProps<T, V>) => JSX.Element;
