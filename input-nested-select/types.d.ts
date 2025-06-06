import { InputSelectOptionsProps, InputSelectSharedProps } from "../input-select";
import { DropdownSearchProps, DropdownVariantType, ExpandMode } from "../shared/dropdown-list-v2/types";
import { DropdownAlignmentType } from "../shared/dropdown-wrapper/types";
export interface InputNestedSelectOptionsProps<V1, V2, V3> extends Omit<InputSelectOptionsProps<V1>, "options"> {
    options: L1OptionProps<V1, V2, V3>[];
}
export interface InputNestedSelectSharedProps<V1, V2, V3> extends Omit<InputSelectSharedProps<V1>, "options"> {
    readOnly?: boolean | undefined;
    /** Specifies if items are expanded or collapsed when the dropdown is opened */
    mode?: ExpandMode | undefined;
    variant?: DropdownVariantType | undefined;
    alignment?: DropdownAlignmentType | undefined;
    dropdownZIndex?: number | undefined;
    /** Function to convert selected value into a string */
    valueToStringFunction?: ((value: V1 | V2 | V3) => string) | undefined;
}
export interface InputNestedSelectProps<V1, V2, V3> extends React.HTMLAttributes<HTMLElement>, InputNestedSelectOptionsProps<V1, V2, V3>, InputNestedSelectSharedProps<V1, V2, V3>, DropdownSearchProps<L1OptionProps<V1, V2, V3>> {
    /** Specifies key path of the selected option */
    selectedKeyPath?: string[] | undefined;
    /** If specified, the category label is selectable */
    selectableCategory?: boolean | undefined;
    /** Called when an option is selected. Returns the option's key path and value */
    onSelectOption?: ((keyPath: string[], value: V1 | V2 | V3) => void) | undefined;
    /** @deprecated this has no effect as the dropdown will automatically resize */
    listStyleWidth?: string | undefined;
    onBlur?: (() => void) | undefined;
}
/** To be exposed for Form component inheritance */
export type InputNestedSelectPartialProps<V1, V2, V3> = Omit<InputNestedSelectProps<V1, V2, V3>, "error">;
interface BaseOptionProps {
    label: string;
    key: string;
}
export interface L1OptionProps<V1, V2, V3> extends BaseOptionProps {
    value: V1;
    subItems?: L2OptionProps<V2, V3>[] | undefined;
}
export interface L2OptionProps<V2, V3> extends BaseOptionProps {
    value: V2;
    subItems?: L3OptionProps<V3>[] | undefined;
}
export interface L3OptionProps<V3> extends BaseOptionProps {
    value: V3;
    subItems?: undefined;
}
export {};
