import {
    DropdownDisplayExtractorProps,
    DropdownEventHandlerProps,
    DropdownStyleProps,
    ItemsLoadStateType,
    TruncateType,
} from "../shared/dropdown-list/types";

export interface InputSelectProps<T, V>
    extends React.HTMLAttributes<HTMLElement>,
        DropdownEventHandlerProps<T, V>,
        DropdownDisplayExtractorProps<T, V>,
        DropdownStyleProps {
    /** HTML button props */
    name?: string | undefined;

    /** Component specific props */
    disabled?: boolean | undefined;
    selectedOption?: T | undefined;
    placeholder?: string | undefined;
    error?: boolean | undefined;
    options: T[] | undefined;
    "data-testid"?: string | undefined;
    /** Function to derive display value for selected item */
    displayValueExtractor?: (item: T) => string | undefined;
    /** Function to convert value into a string */
    valueToStringFunction?: (item: V) => string | undefined;
    enableSearch?: boolean | undefined;
    /** Custom function to perform search when a user keys in a value in the search input */
    searchFunction?: (searchValue: string) => T[] | undefined;
    searchPlaceholder?: string | undefined;
    /**
     * Used when options are loaded from an api call.
     * Values: "loading" | "fail" | "success"
     */
    optionsLoadState?: ItemsLoadStateType | undefined;
    /** Specifies the truncation type. Truncated text will be replaced with ellipsis. Values: "middle" | "end" */
    optionTruncationType?: TruncateType | undefined;

    onShowOptions?: () => void | undefined;
    onHideOptions?: () => void | undefined;
    onRetry?: () => void | undefined;
}

/** To be exposed for Form component inheritance */
export type InputSelectPartialProps<T, V> = Omit<
    InputSelectProps<T, V>,
    "error"
>;

export interface InputSelectWrapperProps {
    children: JSX.Element[];
    show: boolean;
    onBlur: () => void;
    error?: boolean | undefined;
    disabled?: boolean | undefined;
    testId?: string | undefined;
}
