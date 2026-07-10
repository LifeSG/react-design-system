import type { RefObject } from "react";

import type { ListItemDisplayProps } from "../shared/dropdown-list/types";
import type { DropdownAlignmentType } from "../shared/dropdown-wrapper";

/**
 * Props for `PredictiveTextInput`.
 *
 * `T` is the shape of each option item returned by `fetchOptions`.
 * `V` is the extracted value type produced by `valueExtractor`.
 */
export interface PredictiveTextInputProps<T, V> extends React.AriaAttributes {
    id?: string | undefined;
    className?: string | undefined;
    "data-testid"?: string | undefined;
    /**
     * Minimum number of characters the user must type before `fetchOptions` is
     * called and the dropdown opens.
     *
     * @default 3
     */
    minimumCharacters?: number | undefined;
    /**
     * Placeholder text shown inside the input when it is empty.
     *
     * @default "Enter here..."
     */
    placeholder?: string | undefined;
    readOnly?: boolean | undefined;
    disabled?: boolean | undefined;
    /**
     * Applies error styling to the input wrapper.
     */
    error?: boolean | undefined;
    /**
     * The currently confirmed option. Updating this prop resets the displayed
     * text and clears the dropdown options list. Pass `undefined` to clear the
     * selection.
     */
    selectedOption?: T | undefined;
    /**
     * Horizontal alignment of the dropdown relative to the input element.
     */
    alignment?: DropdownAlignmentType | undefined;
    /**
     * CSS `z-index` applied to the dropdown overlay.
     */
    dropdownZIndex?: number | undefined;
    /**
     * The root element that contains the dropdown element.
     *
     * @remarks Specify this if you need to change the parent of the
     * dropdown in the HTML DOM.
     * Possible use case: sharing a stacking context.
     *
     * Note: if a parent of the trigger has a higher `z-index` than the dropdown,
     * the dropdown may be obscured.
     *
     * @default `document.body`
     */
    dropdownRootNode?: RefObject<HTMLElement> | undefined;
    /**
     * Custom width for the dropdown. When specified, the dropdown uses this
     * width instead of matching the trigger element width.
     */
    dropdownWidth?: string | undefined;
    /**
     * Async function called with the current input string to retrieve matching
     * options. A rejected promise triggers the error state in the
     * dropdown.
     *
     * @param input The current text in the input field.
     */
    fetchOptions: (input: string) => Promise<T[]>;
    /**
     * Derives the submitted value `V` from a selected item `T`.
     */
    valueExtractor?: ((item: T) => V) | undefined;
    /**
     * Derives the display label for each option in the dropdown list.
     */
    listExtractor?: ((item: T) => string | ListItemDisplayProps) | undefined;
    /**
     * Derives the text shown in the input field after an option is selected.
     */
    displayValueExtractor?: ((option: T) => string) | undefined;
    /**
     * Called when the user selects an option from the dropdown or clears the
     * field.
     *
     * @param option The selected item, or `undefined` when cleared.
     * @param extractedValue The value produced by `valueExtractor`, or `undefined` when cleared.
     */
    onSelectOption?:
        | ((option: T | undefined, extractedValue: V | undefined) => void)
        | undefined;
}
