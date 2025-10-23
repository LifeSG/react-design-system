import { InputSelectOptionsProps, InputSelectSharedProps } from "../input-select/types";
import { DropdownDisplayProps, DropdownSearchProps, DropdownVariantType } from "../shared/dropdown-list-v2/types";
import { DropdownAlignmentType } from "../shared/dropdown-wrapper";
export interface InputMultiSelectProps<T, V> extends React.HTMLAttributes<HTMLElement>, InputSelectOptionsProps<T>, InputSelectSharedProps<T>, DropdownDisplayProps<T, V>, DropdownSearchProps<T> {
    readOnly?: boolean | undefined;
    selectedOptions?: T[] | undefined;
    onSelectOptions?: ((options: T[]) => void) | undefined;
    onBlur?: (() => void) | undefined;
    variant?: DropdownVariantType | undefined;
    alignment?: DropdownAlignmentType | undefined;
    dropdownZIndex?: number | undefined;
    /** @deprecated this has no effect as the dropdown will automatically resize */
    listStyleWidth?: string | undefined;
}
/** To be exposed for Form component inheritance */
export type InputMultiSelectPartialProps<T, V> = Omit<InputMultiSelectProps<T, V>, "error">;
