import { RefObject } from "react";
import { DropdownDisplayProps, DropdownSearchProps, DropdownVariantType, ItemsLoadStateType, TruncateType } from "../shared/dropdown-list-v2/types";
import { DropdownAlignmentType } from "../shared/dropdown-wrapper";
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
export interface InputSelectProps<T, V> extends React.HTMLAttributes<HTMLElement>, InputSelectOptionsProps<T>, InputSelectSharedProps<T>, DropdownDisplayProps<T, V>, DropdownSearchProps<T> {
    readOnly?: boolean | undefined;
    selectedOption?: T | undefined;
    onSelectOption?: ((option: T, extractedValue: V) => void) | undefined;
    /** Function to derive display value for selected option */
    displayValueExtractor?: ((option: T) => string) | undefined;
    /** Function to convert value into a string */
    valueToStringFunction?: ((value: V) => string) | undefined;
    /** Function to render selected custom component */
    renderCustomSelectedOption?: ((option: T) => JSX.Element) | undefined;
    onBlur?: (() => void) | undefined;
    variant?: DropdownVariantType | undefined;
    alignment?: DropdownAlignmentType | undefined;
    dropdownZIndex?: number | undefined;
    /**
     * The root element that contains the dropdown element. Defaults to the document body.
     *
     * If the parent that contains the trigger element has a higher z-index than the dropdown,
     * the dropdown may not be visible. Specify the parent element here instead
     */
    dropdownRootNode?: RefObject<HTMLElement> | undefined;
    /** @deprecated this has no effect as the dropdown will automatically resize */
    listStyleWidth?: string | undefined;
}
/** To be exposed for Form component inheritance */
export type InputSelectPartialProps<T, V> = Omit<InputSelectProps<T, V>, "error">;
