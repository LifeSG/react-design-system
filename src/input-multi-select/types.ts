import { RefObject } from "react";
import {
    InputSelectOptionsProps,
    InputSelectSharedProps,
} from "../input-select/types";
import {
    DropdownCustomLabelProps,
    DropdownDisplayProps,
    DropdownSearchProps,
    DropdownVariantType,
} from "../shared/dropdown-list-v2/types";
import { DropdownAlignmentType } from "../shared/dropdown-wrapper";

/**
 * A multi-select dropdown input that allows users to pick multiple options from a list.
 *
 * @keywords multi-select, dropdown, checkbox, multiple-choice, form, select
 */
export interface InputMultiSelectProps<T, V>
    extends React.HTMLAttributes<HTMLElement>,
        InputSelectOptionsProps<T>,
        InputSelectSharedProps<T>,
        DropdownDisplayProps<T, V>,
        DropdownSearchProps<T> {
    /** Makes the component read-only, preventing user input. */
    readOnly?: boolean | undefined;
    /** The currently selected options. */
    selectedOptions?: T[] | undefined;
    /** Callback fired when the selected options change. */
    onSelectOptions?: ((options: T[]) => void) | undefined;
    /** Callback fired when the component loses focus. */
    onBlur?: (() => void) | undefined;
    /** Visual variant for the dropdown list. */
    variant?: DropdownVariantType | undefined;
    /** Alignment of the dropdown relative to the trigger element. */
    alignment?: DropdownAlignmentType | undefined;
    /** Z-index override for the dropdown layer. */
    dropdownZIndex?: number | undefined;
    /** Maximum number of options that can be selected. */
    maxSelectable?: number | undefined;
    /** Custom labels for dropdown UI elements such as the search placeholder or empty state. */
    customLabels?: DropdownCustomLabelProps | undefined;
    /** Custom width for the dropdown. */
    dropdownWidth?: string | undefined;
    /**
     * The root element that contains the dropdown element. Defaults to the document body.
     *
     * If the parent that contains the trigger element has a higher z-index than the dropdown,
     * the dropdown may not be visible. Specify the parent element here instead
     */
    dropdownRootNode?: RefObject<HTMLElement> | undefined;
}

/** To be exposed for Form component inheritance */
export type InputMultiSelectPartialProps<T, V> = Omit<
    InputMultiSelectProps<T, V>,
    "error"
>;
