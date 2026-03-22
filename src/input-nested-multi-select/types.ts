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

/**
 * Props for the InputNestedMultiSelect component - multi-option hierarchical dropdown.
 *
 * Allows the user to drill into nested categories and select multiple values from
 * a three-level hierarchy (L1 → L2 → L3). Use `InputNestedSelect` for single
 * value selection. Supports search and async loading.
 *
 * @example
 * ```tsx
 * <InputNestedMultiSelect
 *     options={categoryTree}
 *     selectedKeyPaths={selectedPaths}
 *     onSelectOptions={(keyPaths, values) => setSelected(values)}
 * />
 * ```
 * @keywords hierarchical multi-select, tree select multiple, cascading checklist, nested dropdown multiple
 */
export interface InputNestedMultiSelectProps<V1, V2, V3>
    extends React.HTMLAttributes<HTMLElement>,
        InputNestedSelectOptionsProps<V1, V2, V3>,
        Omit<InputSelectSharedProps<V1>, "options">,
        InputNestedSelectSharedProps<V1, V2, V3>,
        DropdownSearchProps,
        DropdownStyleProps {
    /**
     * The set of currently selected option key paths.
     *
     * Each element in the outer array is a key path (array of string keys)
     * representing one selected item in the hierarchy.
     *
     * @default undefined
     */
    selectedKeyPaths?: string[][] | undefined;
    /**
     * Called when the user changes the selection.
     *
     * @param keyPaths - The key paths of all selected items after the change.
     * @param values - The extracted values of all selected items after the change.
     */
    onSelectOptions?:
        | ((keyPaths: string[][], values: Array<V1 | V2 | V3>) => void)
        | undefined;
}

/** To be exposed for Form component inheritance */
export type InputNestedMultiSelectPartialProps<V1, V2, V3> = Omit<
    InputNestedMultiSelectProps<V1, V2, V3>,
    "error"
>;
