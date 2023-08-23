import {
    InputNestedSelectOptionsProps,
    InputNestedSelectSharedProps,
} from "../input-nested-select";
import { InputSelectSharedProps } from "../input-select";
import {
    DropdownSearchProps,
    DropdownStyleProps,
} from "../shared/nested-dropdown-list/types";

// =============================================================================
// INPUT SELECT PROPS
// =============================================================================

export interface InputNestedMultiSelectProps<V1, V2, V3>
    extends React.HTMLAttributes<HTMLElement>,
        InputNestedSelectOptionsProps<V1, V2, V3>,
        Omit<InputSelectSharedProps<V1>, "options">,
        InputNestedSelectSharedProps<V1, V2, V3>,
        DropdownSearchProps,
        DropdownStyleProps {
    /** Specifies key path to select particular option label */
    selectedKeyPaths?: string[][] | undefined;
    /** Called when option label is selected */
    onSelectOptions?:
        | ((keyPaths: string[][], values: Array<V1 | V2 | V3>) => void)
        | undefined;
}

/** To be exposed for Form component inheritance */
export type InputNestedMultiSelectPartialProps<V1, V2, V3> = Omit<
    InputNestedMultiSelectProps<V1, V2, V3>,
    "error"
>;
