import { InputSelectOptionsProps, InputSelectSharedProps } from "../input-select/types";
import { DropdownDisplayProps, DropdownSearchProps, DropdownStyleProps } from "../shared/dropdown-list/types";
export interface InputMultiSelectProps<T, V> extends React.HTMLAttributes<HTMLElement>, InputSelectOptionsProps<T>, InputSelectSharedProps<T>, DropdownDisplayProps<T, V>, DropdownSearchProps<T>, DropdownStyleProps {
    selectedOptions?: T[] | undefined;
    onSelectOptions?: ((options: T[]) => void) | undefined;
}
/** To be exposed for Form component inheritance */
export type InputMultiSelectPartialProps<T, V> = Omit<InputMultiSelectProps<T, V>, "error">;
