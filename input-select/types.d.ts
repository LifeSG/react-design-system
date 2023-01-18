/// <reference types="react" />
import { DropdownDisplayProps, DropdownSearchProps, DropdownStyleProps, ItemsLoadStateType, TruncateType } from "../shared/dropdown-list/types";
export interface InputSelectOptionsProps<T> {
    options: T[];
    /**
     * Used when options are loaded from an api call.
     * Values: "loading" | "fail" | "success"
     */
    optionsLoadState?: ItemsLoadStateType | undefined;
    /** Specifies the truncation type. Truncated text will be replaced with ellipsis. Values: "middle" | "end" */
    optionTruncationType?: TruncateType | undefined;
    onShowOptions?: (() => void) | undefined;
    onHideOptions?: (() => void) | undefined;
    onRetry?: (() => void) | undefined;
}
export interface InputSelectSharedProps<T> {
    /** HTML button props */
    name?: string | undefined;
    /** Component specific props */
    options: T[];
    placeholder?: string | undefined;
    disabled?: boolean | undefined;
    error?: boolean | undefined;
    "data-testid"?: string | undefined;
}
export interface InputSelectWrapperProps {
    children: JSX.Element[];
    show: boolean;
    onBlur: () => void;
    error?: boolean | undefined;
    disabled?: boolean | undefined;
    testId?: string | undefined;
    readOnly?: boolean | undefined;
}
export interface InputSelectProps<T, V> extends React.HTMLAttributes<HTMLElement>, InputSelectOptionsProps<T>, InputSelectSharedProps<T>, DropdownDisplayProps<T, V>, DropdownSearchProps<T>, DropdownStyleProps {
    readOnly?: boolean | undefined;
    selectedOption?: T | undefined;
    onSelectOption?: ((option: T, extractedValue: V) => void) | undefined;
    /** Function to derive display value for selected option */
    displayValueExtractor?: ((option: T) => string) | undefined;
    /** Function to convert value into a string */
    valueToStringFunction?: ((value: V) => string) | undefined;
    /** Function to render selected custom component */
    renderCustomSelectedOption?: ((option: T) => JSX.Element) | undefined;
}
/** To be exposed for Form component inheritance */
export declare type InputSelectPartialProps<T, V> = Omit<InputSelectProps<T, V>, "error">;
export interface InputMultiSelectProps<T, V> extends React.HTMLAttributes<HTMLElement>, InputSelectOptionsProps<T>, InputSelectSharedProps<T>, DropdownDisplayProps<T, V>, DropdownSearchProps<T>, DropdownStyleProps {
    selectedOptions?: T[] | undefined;
    onSelectOptions?: ((options: T[]) => void) | undefined;
}
/** To be exposed for Form component inheritance */
export declare type InputMultiSelectPartialProps<T, V> = Omit<InputMultiSelectProps<T, V>, "error">;
