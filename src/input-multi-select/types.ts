import { RefObject } from "react";
import {
    InputSelectOptionsProps,
    InputSelectSharedProps,
} from "../input-select/types";
import {
    DropdownDisplayProps,
    DropdownSearchProps,
    DropdownVariantType,
} from "../shared/dropdown-list-v2/types";
import { DropdownAlignmentType } from "../shared/dropdown-wrapper";

export interface InputMultiSelectProps<T, V>
    extends React.HTMLAttributes<HTMLElement>,
        InputSelectOptionsProps<T>,
        InputSelectSharedProps<T>,
        DropdownDisplayProps<T, V>,
        DropdownSearchProps<T> {
    readOnly?: boolean | undefined;
    selectedOptions?: T[] | undefined;
    onSelectOptions?: ((options: T[]) => void) | undefined;
    onBlur?: (() => void) | undefined;
    variant?: DropdownVariantType | undefined;
    alignment?: DropdownAlignmentType | undefined;
    dropdownZIndex?: number | undefined;
    maxSelectable?: number | undefined;
    /** @deprecated this has no effect as the dropdown will automatically resize */
    listStyleWidth?: string | undefined;
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
