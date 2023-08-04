import {
    InputSelectOptionsProps,
    InputSelectSharedProps,
} from "../input-select";
import {
    DropdownSearchProps,
    DropdownStyleProps,
    Mode,
} from "../shared/nested-dropdown-list/types";

interface InputNestedSelectOptionsProps<V1, V2, V3>
    extends Omit<InputSelectOptionsProps<V1>, "options"> {
    options: L1OptionProps<V1, V2, V3>[];
}

// =============================================================================
// INPUT SELECT PROPS
// =============================================================================
export interface InputNestedSelectProps<V1, V2, V3>
    extends React.HTMLAttributes<HTMLElement>,
        InputNestedSelectOptionsProps<V1, V2, V3>,
        Omit<InputSelectSharedProps<V1>, "options">,
        DropdownSearchProps,
        DropdownStyleProps {
    readOnly?: boolean | undefined;
    /** Specifies key path to select particular option label */
    selectedKeyPath?: string[] | undefined;
    /** Behavior of dropdown list items once it is opened */
    mode?: Mode | undefined;
    /** If specified, the title category label is selectable */
    selectableCategory?: boolean | undefined;
    onSelectOption?:
        | ((keyPath: string[], value: V1 | V2 | V3) => void)
        | undefined;
    /** Function to convert value into a string */
    valueToStringFunction?: ((value: V1 | V2 | V3) => string) | undefined;
}

/** To be exposed for Form component inheritance */
export type InputNestedSelectPartialProps<V1, V2, V3> = Omit<
    InputNestedSelectProps<V1, V2, V3>,
    "error"
>;

// =============================================================================
// Recursive Types
// =============================================================================
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
