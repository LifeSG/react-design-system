import type { RefObject } from "react";

import type { InputProps } from "../input/types";
import type {
    DropdownDisplayProps,
    DropdownSearchProps,
    ItemsLoadStateType,
    TruncateType,
} from "../shared/dropdown-list";

/** Determines which kind of addon is rendered alongside the input. */
export type InputGroupAddonType = "label" | "list" | "custom";

/**
 * Placement of the addon relative to the input field.
 */
export type InputGroupAddonPosition = "left" | "right" | undefined;

/** Attributes for a custom addon that renders arbitrary JSX alongside the input. */
export interface CustomAddon {
    /**
     * The JSX element rendered inside the addon slot.
     * If omitted the addon is not displayed.
     */
    children?: JSX.Element | undefined;
}

/** Attributes for a static text label rendered alongside the input. */
export interface LabelAddon {
    /**
     * Text displayed in the addon slot.
     * If omitted the addon is not displayed.
     */
    value?: string | undefined;
}

/**
 * Attributes for a dropdown list addon that pairs a combobox selector with the text input.
 */
export interface ListAddon<T, V>
    extends DropdownDisplayProps<T, V>,
        DropdownSearchProps<T> {
    /**
     * Placeholder text shown in the dropdown trigger when no option is selected.
     *
     * @default "Select"
     */
    placeholder?: string | undefined;
    /**
     * Derives the display string shown in the dropdown trigger from the selected item.
     */
    displayValueExtractor?: ((item: T) => string) | undefined;
    "data-selector-testid"?: string | undefined;
    /**
     * Accessible label for the combobox trigger element.
     */
    "aria-label"?: string | undefined;

    // Dropdown props (unable to inherit directly)
    /** The list of items to render in the dropdown. */
    options?: T[] | undefined;
    /** The currently selected item. Controls the value shown in the trigger. */
    selectedOption?: T | undefined;
    /**
     * Called when the user selects an item from the dropdown.
     *
     * @param option The full item object that was selected.
     * @param extractedValue The value derived by `valueExtractor`, or the item itself when no extractor is provided.
     */
    onSelectOption?: ((option: T, extractedValue: T | V) => void) | undefined;
    /** Indicates the async load state of the options list. */
    optionsLoadState?: ItemsLoadStateType | undefined;
    /** Controls how long option labels are truncated when they overflow. */
    optionTruncationType?: TruncateType | undefined;
    /** Called when the user activates the retry action while `optionsLoadState` is `"fail"`. */
    onRetry?: (() => void) | undefined;
    /** Called when the dropdown list is hidden. */
    onHideOptions?: (() => void) | undefined;
    /** Called when the dropdown list is shown. */
    onShowOptions?: (() => void) | undefined;
    /** CSS `z-index` applied to the dropdown overlay. */
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
     * @default document.body
     */
    dropdownRootNode?: RefObject<HTMLElement> | undefined;
}

/**
 * Configuration for the addon rendered alongside the `InputGroup` text field.
 */
export interface AddonProps<T, V> {
    /**
     * Variant of the addon to render.
     *
     * @default "label"
     */
    type?: InputGroupAddonType | undefined;
    /** Variant-specific configuration. Shape depends on `type`. */
    attributes: ListAddon<T, V> | LabelAddon | CustomAddon;
    /**
     * Side of the input field where the addon is placed.
     *
     * @default "left"
     */
    position?: InputGroupAddonPosition;
}

/** Props for the `InputGroup` component. */
export interface InputGroupProps<T, V> extends InputProps {
    /**
     * Optional addon rendered alongside the text field.
     * Omitting this prop renders a plain input without any addon.
     */
    addon?: AddonProps<T, V> | undefined;
    /**
     * Removes the outer border of the input box.
     *
     * @default false
     */
    noBorder?: boolean | undefined;
    /**
     * Called when focus leaves the entire input group.
     *
     * @remarks The event argument is optional because the `"list"` addon type fires
     * `onBlur` from the dropdown interaction rather than from the native input element.
     */
    onBlur?: ((event?: React.FocusEvent<HTMLInputElement>) => void) | undefined;
}

/**
 * A subset of `InputGroupProps` for use by form components that manage the `error`
 * state themselves.
 */
export type InputGroupPartialProps<T, V> = Omit<InputGroupProps<T, V>, "error">;
