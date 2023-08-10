import { InputNestedSelectProps } from "../input-nested-select";

// =============================================================================
// INPUT SELECT PROPS
// =============================================================================

type OmitTypes = "selectedKeyPath" | "onSelectOption" | "selectableCategory";
export interface InputNestedMultiSelectProps<V1, V2, V3>
    extends Omit<InputNestedSelectProps<V1, V2, V3>, OmitTypes> {
    /** Specifies key path to select particular option label */
    selectedKeyPaths?: string[][] | undefined;
    onSelectOptions?:
        | ((keyPaths: string[][], values: Array<V1 | V2 | V3>) => void)
        | undefined;
}

/** To be exposed for Form component inheritance */
export type InputNestedMultiSelectPartialProps<V1, V2, V3> = Omit<
    InputNestedMultiSelectProps<V1, V2, V3>,
    "error"
>;
