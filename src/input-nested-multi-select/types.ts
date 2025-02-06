import {
    InputNestedSelectOptionsProps,
    InputNestedSelectSharedProps,
    L1OptionProps,
} from "../input-nested-select";
import { DropdownSearchProps } from "../shared/dropdown-list-v2/types";

// =============================================================================
// INPUT SELECT PROPS
// =============================================================================

export interface InputNestedMultiSelectProps<V1, V2, V3>
    extends React.HTMLAttributes<HTMLElement>,
        InputNestedSelectOptionsProps<V1, V2, V3>,
        InputNestedSelectSharedProps<V1, V2, V3>,
        DropdownSearchProps<L1OptionProps<V1, V2, V3>> {
    /** Specifies key paths to select particular option label */
    selectedKeyPaths?: string[][] | undefined;
    /** Called when a selection is made. Returns the key paths and values of selected items in the next selection state */
    onSelectOptions?:
        | ((keyPaths: string[][], values: Array<V1 | V2 | V3>) => void)
        | undefined;
    /** @deprecated this has no effect as the dropdown will automatically resize */
    listStyleWidth?: string | undefined;
    onBlur?: (() => void) | undefined;
}

/** To be exposed for Form component inheritance */
export type InputNestedMultiSelectPartialProps<V1, V2, V3> = Omit<
    InputNestedMultiSelectProps<V1, V2, V3>,
    "error"
>;
