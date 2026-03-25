import { RefObject } from "react";
import { DropdownAlignmentType } from "src/shared/dropdown-wrapper";
import { ListItemDisplayProps } from "../shared/dropdown-list/types";

/**
 * Props for the PredictiveTextInput component, an async autocomplete input that fetches
 * and displays matching suggestions as the user types.
 *
 * @keywords predictive, autocomplete, search, async, dropdown, suggestions
 */
export interface PredictiveTextInputProps<T, V> extends React.AriaAttributes {
    /** Unique HTML identifier for the input element. */
    id?: string | undefined;
    /** Additional CSS class names applied to the root element. */
    className?: string | undefined;
    /** Test identifier for automated testing. */
    "data-testid"?: string | undefined;
    /** Minimum number of characters, before options are shown */
    minimumCharacters?: number | undefined;
    /** Placeholder text displayed when the input is empty. */
    placeholder?: string | undefined;
    /** When `true`, the input is read-only and cannot be changed by the user. */
    readOnly?: boolean | undefined;
    /** When `true`, the input is disabled and cannot be interacted with. */
    disabled?: boolean | undefined;
    /** Applies error styling to indicate an invalid value. */
    error?: boolean | undefined;
    /** The currently selected item; controls which option appears as selected in the dropdown. */
    selectedOption?: T | undefined;
    /** Alignment of the dropdown list relative to the input field. */
    alignment?: DropdownAlignmentType | undefined;
    /** CSS z-index applied to the dropdown overlay. */
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
