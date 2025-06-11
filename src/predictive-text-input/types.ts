import { RefObject } from "react";
import { ListItemDisplayProps } from "../shared/dropdown-list/types";
import { DropdownAlignmentType } from "../shared/dropdown-wrapper";

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
    selectedOption?: T | undefined;
    alignment?: DropdownAlignmentType | undefined;
    /**
     * The root element that contains the popover element. Defaults to the document body.
     *
     * If the parent that contains the trigger element has a higher z-index than the popover,
     * the popover may not be visible. Specify the parent element here instead
     */
    rootNode?: RefObject<HTMLElement> | undefined;
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
