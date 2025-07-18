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

export interface InputRangeProp<T> {
    from?: T | undefined;
    to?: T | undefined;
}

export interface InputRangeSelectProps<T, V>
    extends React.HTMLAttributes<HTMLElement>,
    InputRangeSelectOptionsProps<T>,
    Omit<InputSelectSharedProps<T>, "options">,
    DropdownDisplayProps<T, V>,
    DropdownSearchProps<T>,
    DropdownStyleProps {
    readOnly?: boolean | undefined;
    placeholders?: InputRangeProp<string> | undefined;
    selectedOptions?: InputRangeProp<T> | undefined;
    onSelectOption?:
    | ((option: InputRangeProp<T>, extractedValue: V | undefined) => void)
    | undefined;
    // /** Function to derive display value for selected option */
    displayValueExtractor?: ((option: T) => string) | undefined;
    // /** Function to convert value into a string */
    valueToStringFunction?: ((value: V) => string) | undefined;
    // /** Function to render selected custom component */
    renderCustomSelectedOption?: ((option: T) => React.JSX.Element) | undefined;
}

/** To be exposed for Form component inheritance */
export type InputRangeSelectPartialProps<T, V> = Omit<
    InputRangeSelectProps<T, V>,
    "error"
>;
