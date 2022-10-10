/// <reference types="react" />
import { InputSelectProps } from "./types";
export declare const InputSelect: <T, V>({ selectedOption, placeholder, options, disabled, error, "data-testid": testId, id, enableSearch, searchFunction, searchPlaceholder, valueExtractor, valueToStringFunction, listExtractor, displayValueExtractor, onSelectOption, listStyleWidth, onShowOptions, onHideOptions, onRetry, optionsLoadState, optionTruncationType, ...otherProps }: InputSelectProps<T, V>) => JSX.Element;
