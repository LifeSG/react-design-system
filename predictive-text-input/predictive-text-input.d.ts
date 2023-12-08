/// <reference types="react" />
import { PredictiveTextInputProps } from "./types";
export declare const PredictiveTextInput: <T, V>({ className, "data-testid": testId, selectedOption, minimumCharacters, fetchOptions, placeholder, readOnly, disabled, error, valueExtractor, listExtractor, displayValueExtractor, onSelectOption, }: PredictiveTextInputProps<T, V>) => JSX.Element;