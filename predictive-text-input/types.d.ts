import { ListItemDisplayProps } from "../shared/dropdown-list/types";
export interface PredictiveTextInputProps<T, V> {
    id?: string | undefined;
    className?: string | undefined;
    "data-testid"?: string | undefined;
    /** Minimum number of characters, before options are shown */
    minimumCharacters?: number | undefined;
    placeholder?: string | undefined;
    readOnly?: boolean | undefined;
    disabled?: boolean | undefined;
    error?: boolean | undefined;
    selectedOption?: T | undefined;
    /** Async Function to populate options */
    fetchOptions: (input: string) => Promise<T[]>;
    /** Function to derive value from an item */
    valueExtractor?: (item: T) => V | undefined;
    /** Function to derive options display value from an item */
    listExtractor?: ((item: T) => string | ListItemDisplayProps) | undefined;
    /** Function to derive display value for selected option */
    displayValueExtractor?: ((option: T) => string) | undefined;
    /** Callback function when option is selected */
    onSelectOption?: ((option: T, extractedValue: V) => void) | undefined;
}
