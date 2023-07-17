import {
    InputSelectOptionsProps,
    InputSelectSharedProps,
} from "../input-select";
import {
    DropdownDisplayProps,
    DropdownStyleProps,
} from "../shared/nested-dropdown-list/types";

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
        DropdownDisplayProps<V1, V2, V3>,
        DropdownStyleProps {
    readOnly?: boolean | undefined;
    selectedOption?: V1 | V2 | V3 | undefined;
    onSelectOption?:
        | ((parentKeys: string[], value: V1 | V2 | V3) => void)
        | undefined;
    /** Function to derive display value for selected option */
    displayValueExtractor?: ((option: V1 | V2 | V3) => string) | undefined; // TODO: what is the type
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
export interface Option<V1, V2, V3> {
    label: string;
    value: V1;
    key: number;
    subItems?: L2<V2, V3>[] | undefined;
}

export interface L2<V2, V3> {
    label: string;
    value: V2;
    key: number;
    subItems?: L3<V3>[] | undefined;
}
export interface L3<V3> {
    label: string;
    value: V3;
    key: number;
    subItems?: undefined;
}

export type ItemOption<V1, V2, V3> = Option<V1, V2, V3> | L2<V2, V3> | L3<V3>;
