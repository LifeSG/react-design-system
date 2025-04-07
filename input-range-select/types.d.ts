import { InputSelectOptionsProps, InputSelectSharedProps } from "../input-select/types";
import { DropdownDisplayProps, DropdownSearchProps, DropdownStyleProps, ItemsLoadStateType } from "../shared/dropdown-list/types";
export interface InputRangeSelectOptionsProps<T> extends Omit<InputSelectOptionsProps<T>, "options" | "optionsLoadState"> {
    options: InputRangeProp<T[]>;
    optionsLoadState?: InputRangeProp<ItemsLoadStateType | undefined>;
}
export interface InputRangeProp<T> {
    from?: T | undefined;
    to?: T | undefined;
}
export interface InputRangeSelectProps<T, V> extends React.HTMLAttributes<HTMLElement>, InputRangeSelectOptionsProps<T>, Omit<InputSelectSharedProps<T>, "options">, DropdownDisplayProps<T, V>, DropdownSearchProps<T>, DropdownStyleProps {
    readOnly?: boolean | undefined;
    placeholders?: InputRangeProp<string> | undefined;
    selectedOptions?: InputRangeProp<T> | undefined;
    onSelectOption?: ((option: InputRangeProp<T>, extractedValue: V | undefined) => void) | undefined;
    displayValueExtractor?: ((option: T) => string) | undefined;
    valueToStringFunction?: ((value: V) => string) | undefined;
    renderCustomSelectedOption?: ((option: T) => JSX.Element) | undefined;
}
/** To be exposed for Form component inheritance */
export type InputRangeSelectPartialProps<T, V> = Omit<InputRangeSelectProps<T, V>, "error">;
