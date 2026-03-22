import {
    InputSelectOptionsProps,
    InputSelectSharedProps,
} from "../input-select/types";
import {
    DropdownDisplayProps,
    DropdownSearchProps,
    DropdownStyleProps,
} from "../shared/dropdown-list/types";

/**
 * Props for the InputMultiSelect component - multi-option dropdown selector.
 *
 * Allows the user to choose multiple options from a dropdown list with checkboxes.
 * Supports async option loading, search, and controlled selected state. For
 * single-option selection use `InputSelect`.
 *
 * @example
 * ```tsx
 * <InputMultiSelect
 *     options={tags}
 *     valueExtractor={(item) => item.id}
 *     listExtractor={(item) => item.label}
 *     selectedOptions={selectedTags}
 *     onSelectOptions={(options) => setSelectedTags(options)}
 * />
 * ```
 * @keywords multi-select dropdown, checkbox dropdown, multiple choice, tag select, multi option picker
 */
export interface InputMultiSelectProps<T, V>
    extends React.HTMLAttributes<HTMLElement>,
        InputSelectOptionsProps<T>,
        InputSelectSharedProps<T>,
        DropdownDisplayProps<T, V>,
        DropdownSearchProps<T>,
        DropdownStyleProps {
    /** The list of currently selected options. */
    selectedOptions?: T[] | undefined;
    /**
     * Called when the user changes the selection.
     *
     * @param options - The new array of selected options.
     */
    onSelectOptions?: ((options: T[]) => void) | undefined;
    /** Called when the dropdown loses focus. */
    onBlur?: (() => void) | undefined;
}

/** To be exposed for Form component inheritance */
export type InputMultiSelectPartialProps<T, V> = Omit<
    InputMultiSelectProps<T, V>,
    "error"
>;
