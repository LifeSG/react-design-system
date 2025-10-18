import { RefObject } from "react";
import { DropdownAlignmentType } from "src/shared/dropdown-wrapper";
import { ListItemDisplayProps } from "../shared/dropdown-list/types";

export interface PredictiveTextInputProps<T, V> {
    id?: string | undefined;
    className?: string | undefined;
    "data-testid"?: string | undefined;
    /** Minimum number of characters, before options are shown */
    minimumCharacters?: number | undefined;
    placeholder?: string | undefined;
    readOnly?: boolean | undefined;
    disabled?: boolean | undefined;
    error?: boolean | undefined;
    errorMessage?: string | React.ReactNode | undefined;
    selectedOption?: T | undefined;
    alignment?: DropdownAlignmentType | undefined;
    dropdownZIndex?: number | undefined;
    /**
     * The root element that contains the dropdown element. Defaults to the document body.
     *
     * If the parent that contains the trigger element has a higher z-index than the dropdown,
     * the dropdown may not be visible. Specify the parent element here instead
     */
    dropdownRootNode?: RefObject<HTMLElement> | undefined;
    /**
     * Custom width for the dropdown in pixels. When specified, the dropdown will use this
     * width instead of matching the input element width.
     */
    dropdownWidth?: string | undefined;
    /** Async Function to populate options */
    fetchOptions: (input: string) => Promise<T[]>;
    /** Function to derive value from an item */
    valueExtractor?: ((item: T) => V) | undefined;
    /** Function to derive options display value from an item */
    listExtractor?: ((item: T) => string | ListItemDisplayProps) | undefined;
    /** Function to derive display value for selected option */
    displayValueExtractor?: ((option: T) => string) | undefined;
    /** Callback function when option is selected */
    onSelectOption?:
        | ((option: T | undefined, extractedValue: V | undefined) => void)
        | undefined;
}
