/// <reference types="react" />
import { DateInputProps } from "./types";
export type ActionComponent = "calendar" | "input";
export declare const DateInput: ({ between, disabled, disabledDates, error, value, valueEnd, onChange, onBlur, onChangeRaw, onBlurRaw, withButton: _withButton, readOnly, id, variant, ...otherProps }: DateInputProps) => JSX.Element;
