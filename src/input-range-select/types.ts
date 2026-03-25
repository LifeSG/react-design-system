import {
    InputSelectOptionsProps,
    InputSelectSharedProps,
} from "../input-select/types";
import {
    DropdownDisplayProps,
    DropdownSearchProps,
    ItemsLoadStateType,
} from "../shared/dropdown-list-v2/types";
import { RefObject } from "react";
import { DropdownAlignmentType } from "src/shared/dropdown-wrapper";

/**
 * Options props for the range select, providing separate from/to option lists and load states.
 *
 * @keywords range-select, options, from-to, start-end
 */
export interface InputRangeSelectOptionsProps<T>
    extends Omit<InputSelectOptionsProps<T>, "options" | "optionsLoadState"> {
    options: InputRangeProp<T[]>;
    optionsLoadState?: InputRangeProp<ItemsLoadStateType | undefined>;
}

/** Wraps a paired from/to value for range-based inputs. */
export interface InputRangeProp<T> {
    /** The "from" (start) value of the range. */
    from?: T | undefined;
    /** The "to" (end) value of the range. */
    to?: T | undefined;
}

/**
 * A paired dropdown input for selecting a from/to range, each backed by its own options list.
 *
 * @keywords range-select, start-end, dropdown-pair, from-to, select, filter
 */
export interface InputRangeSelectProps<T, V>
    extends React.HTMLAttributes<HTMLElement>,
        InputRangeSelectOptionsProps<T>,
        Omit<InputSelectSharedProps<T>, "options">,
        DropdownDisplayProps<T, V>,
        DropdownSearchProps<T> {
    /** Makes the component read-only, preventing user input. */
    readOnly?: boolean | undefined;
    /** Placeholder text for each of the from/to dropdowns. */
    placeholders?: InputRangeProp<string> | undefined;
    /** The currently selected from/to options. */
    selectedOptions?: InputRangeProp<T> | undefined;
    /** Alignment of the dropdowns relative to their trigger elements. */
    alignment?: DropdownAlignmentType | undefined;
    /** Z-index override for the dropdown layer. */
    dropdownZIndex?: number | undefined;
    /** The root element that contains the dropdown element. Defaults to the document body. */
    dropdownRootNode?: RefObject<HTMLElement> | undefined;
    /** Custom width for the dropdown. */
    dropdownWidth?: string | undefined;
    /** Callback fired when either the from or to option changes. Returns the full range selection and its extracted value. */
    onSelectOption?:
        | ((option: InputRangeProp<T>, extractedValue: V | undefined) => void)
        | undefined;
    /** Function to derive display value for selected option */
    displayValueExtractor?: ((option: T) => string) | undefined;
    /** Function to convert value into a string */
    valueToStringFunction?: ((value: V) => string) | undefined;
    /** Function to render selected custom component */
    renderCustomSelectedOption?: ((option: T) => JSX.Element) | undefined;
}

/** To be exposed for Form component inheritance */
export type InputRangeSelectPartialProps<T, V> = Omit<
    InputRangeSelectProps<T, V>,
    "error"
>;
