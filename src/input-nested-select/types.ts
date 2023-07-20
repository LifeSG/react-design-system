import {
    InputSelectOptionsProps,
    InputSelectSharedProps,
} from "../input-select";
import { DropdownStyleProps, Mode } from "../shared/nested-dropdown-list/types";

export interface InputNestedSelectionOptionsProps<V1, V2, V3>
    extends Omit<InputSelectOptionsProps<V1>, "options"> {
    options: Option<V1, V2, V3>[];
}

// =============================================================================
// INPUT SELECT PROPS
// =============================================================================
export interface InputNestedSelectProps<V1, V2, V3>
    extends React.HTMLAttributes<HTMLElement>,
        InputNestedSelectionOptionsProps<V1, V2, V3>,
        Omit<InputSelectSharedProps<V1>, "options">,
        DropdownStyleProps {
    readOnly?: boolean | undefined;
    /** Behavior of dropdown list items once it is opened */
    mode?: Mode;
    selectedKeyPath?: string[] | undefined;
    onSelectOption?:
        | ((keyPath: string[], value: V1 | V2 | V3) => void)
        | undefined;
    /** Function to convert value into a string */
    valueToStringFunction?: ((value: V1 | V2 | V3) => string) | undefined;
}

/** To be exposed for Form component inheritance */
export type InputNestedSelectPartialProps<V1, V2, V3> = Omit<
    InputNestedSelectProps<V1, V2, V3>, // what is this? need to check it later
    "error"
>;

// =============================================================================
// Recursive Types
// =============================================================================
interface BaseOption {
    label: string;
    key: number | string;
}

export interface Option<V1, V2, V3> extends BaseOption {
    value: V1;
    subItems?: L2<V2, V3>[] | undefined;
}

export interface L2<V2, V3> extends BaseOption {
    value: V2;
    subItems?: L3<V3>[] | undefined;
}
export interface L3<V3> extends BaseOption {
    value: V3;
    subItems?: undefined;
}

export type ItemOption<V1, V2, V3> = Option<V1, V2, V3> | L2<V2, V3> | L3<V3>;
