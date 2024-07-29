import {
    DropdownDisplayProps,
    DropdownSearchProps,
    DropdownVariantType,
    ItemsLoadStateType,
    TruncateType,
} from "../shared/dropdown-list-v2/types";
import { DropdownAlignmentType } from "../shared/dropdown-wrapper";

// =============================================================================
// SHARED PROPS
// =============================================================================
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

// =============================================================================
// INPUT SELECT PROPS
// =============================================================================
export interface InputSelectProps<T, V>
    extends React.HTMLAttributes<HTMLElement>,
        InputSelectOptionsProps<T>,
        InputSelectSharedProps<T>,
        DropdownDisplayProps<T, V>,
        DropdownSearchProps<T> {
    // TODO: should be a common state once all variants implement this
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
    /** @deprecated this has no effect as the dropdown will automatically resize */
    listStyleWidth?: string | undefined;
}

/** To be exposed for Form component inheritance */
export type InputSelectPartialProps<T, V> = Omit<
    InputSelectProps<T, V>,
    "error"
>;
