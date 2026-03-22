import {
    InputSelectOptionsProps,
    InputSelectSharedProps,
} from "../input-select/types";
import {
    DropdownDisplayProps,
    DropdownSearchProps,
    DropdownStyleProps,
    ItemsLoadStateType,
} from "../shared/dropdown-list/types";

export interface InputRangeSelectOptionsProps<T>
    extends Omit<InputSelectOptionsProps<T>, "options" | "optionsLoadState"> {
    options: InputRangeProp<T[]>;
    optionsLoadState?: InputRangeProp<ItemsLoadStateType | undefined>;
}

/**
 * A generic from/to pair used by InputRangeSelect for options and selected values.
 *
 * @template T - The type of the option value.
 */
export interface InputRangeProp<T> {
    /** The start/from value. */
    from?: T | undefined;
    /** The end/to value. */
    to?: T | undefined;
}

/**
 * Props for the InputRangeSelect component - dual dropdown for a from/to range.
 *
 * Renders two linked dropdown selectors side by side for selecting a start and
 * end value from the same options list (e.g., price range, date range by preset).
 * Options can be loaded asynchronously.
 *
 * @example
 * ```tsx
 * <InputRangeSelect
 *     options={{ from: priceOptions, to: priceOptions }}
 *     selectedOptions={{ from: minPrice, to: maxPrice }}
 *     listExtractor={(item) => item.label}
 *     onSelectOption={(range, value) => setRange(range)}
 * />
 * ```
 * @keywords from to dropdown, range selector, dual select, price range select, start end picker
 */
export interface InputRangeSelectProps<T, V>
    extends React.HTMLAttributes<HTMLElement>,
        InputRangeSelectOptionsProps<T>,
        Omit<InputSelectSharedProps<T>, "options">,
        DropdownDisplayProps<T, V>,
        DropdownSearchProps<T>,
        DropdownStyleProps {
    /**
     * Makes both dropdowns read-only.
     *
     * @default false
     */
    readOnly?: boolean | undefined;
    /**
     * Placeholder text for the from and to dropdown triggers.
     *
     * @default undefined
     */
    placeholders?: InputRangeProp<string> | undefined;
    /**
     * The currently selected `{ from, to }` option pair.
     *
     * @default undefined
     */
    selectedOptions?: InputRangeProp<T> | undefined;
    /**
     * Called when the user selects an option in either the from or to dropdown.
     *
     * @param option - The updated `{ from?, to? }` option pair.
     * @param extractedValue - The extracted value for the changed side.
     */
    onSelectOption?:
        | ((option: InputRangeProp<T>, extractedValue: V) => void)
        | undefined;
    /**
     * Derives the display string shown in the trigger for the selected option.
     *
     * @param option - A selected item object.
     */
    displayValueExtractor?: ((option: T) => string) | undefined;
    /**
     * Converts the extracted value to a human-readable string.
     *
     * @param value - The extracted value.
     */
    valueToStringFunction?: ((value: V) => string) | undefined;
    /**
     * Renders a custom component inside the trigger for the selected option.
     *
     * @param option - The selected item object.
     */
    renderCustomSelectedOption?: ((option: T) => JSX.Element) | undefined;
}

/** To be exposed for Form component inheritance */
export type InputRangeSelectPartialProps<T, V> = Omit<
    InputRangeSelectProps<T, V>,
    "error"
>;
