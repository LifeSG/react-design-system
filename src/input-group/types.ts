import { InputProps } from "../input/types";
import {
    DropdownDisplayProps,
    DropdownSearchProps,
    ItemsLoadStateType,
    TruncateType,
} from "../shared/dropdown-list/types";

/**
 * The type of addon attached to the InputGroup.
 *
 * - `"label"`: Fixed text prefix or suffix (e.g., currency symbol, unit).
 * - `"list"`: Selectable dropdown addon (e.g., country-code selector).
 * - `"custom"`: Arbitrary JSX content as the addon.
 */
export type InputGroupAddonType = "label" | "list" | "custom";

/**
 * The side of the input on which the addon appears.
 *
 * - `"left"`: Addon appears before the text input.
 * - `"right"`: Addon appears after the text input.
 * - `undefined`: No position override; defaults to left.
 */
export type InputGroupAddonPosition = "left" | "right" | undefined;

/**
 * Attributes for a custom JSX addon attached to the InputGroup.
 *
 * Use when neither a static label nor a dropdown list suits the addon design.
 */
export interface CustomAddon {
    /** The custom JSX content to render as the addon. */
    children?: JSX.Element | undefined;
}

/**
 * Attributes for a static text label addon attached to the InputGroup.
 *
 * Use to prefix or suffix the input with a fixed unit or symbol (e.g., `$`, `kg`).
 */
export interface LabelAddon {
    /** The static text to display as the addon label. */
    value?: string | undefined;
}

/**
 * Attributes for a dropdown list addon attached to the InputGroup.
 *
 * Use when the user must select a value alongside the text input (e.g., phone
 * country code, currency selector). Supports lazy loading and search.
 *
 * @see DropdownDisplayProps for display customisation options
 * @see DropdownSearchProps for search behaviour options
 */
export interface ListAddon<T, V>
    extends DropdownDisplayProps<T, V>,
        DropdownSearchProps<T> {
    /** Placeholder text shown in the dropdown trigger when no option is selected. */
    placeholder?: string | undefined;
    /**
     * Extracts a display string from the selected item for the dropdown trigger label.
     *
     * @param item - The selected item object.
     */
    displayValueExtractor?: ((item: T) => string) | undefined;
    /**
     * Sets the `data-testid` attribute on the dropdown selector trigger element.
     */
    "data-selector-testid"?: string | undefined;
    /** The list of options available in the dropdown. */
    options?: T[] | undefined;
    /** The currently selected option. */
    selectedOption?: T | undefined;
    /**
     * Called when the user selects an option from the dropdown.
     *
     * @param option - The full selected item object.
     * @param extractedValue - The extracted value (may differ from `option` when `valueExtractor` is set).
     */
    onSelectOption?: ((option: T, extractedValue: T | V) => void) | undefined;
    /**
     * The async load state of the options list.
     *
     * - `"loading"`: Shows a loading indicator.
     * - `"fail"`: Shows an error state with a retry action.
     * - `"success"`: Options are loaded and displayed.
     *
     * @default undefined
     */
    optionsLoadState?: ItemsLoadStateType | undefined;
    /**
     * Controls how long option labels are truncated.
     *
     * - `"middle"`: Truncates the middle of the text with an ellipsis.
     * - `"end"`: Truncates the end of the text with an ellipsis.
     *
     * @default undefined
     */
    optionTruncationType?: TruncateType | undefined;
    /** Called when the user triggers the retry action after a failed load. */
    onRetry?: (() => void) | undefined;
    /** Called when the dropdown list is closed. */
    onHideOptions?: (() => void) | undefined;
    /** Called when the dropdown list is opened. */
    onShowOptions?: (() => void) | undefined;
}

/**
 * Configuration for the addon attached to an InputGroup.
 *
 * @see InputGroupAddonType for available addon types
 * @see ListAddon for dropdown addon attributes
 * @see LabelAddon for static label addon attributes
 * @see CustomAddon for custom JSX addon attributes
 */
export interface AddonProps<T, V> {
    /**
     * The type of addon to render.
     *
     * - `"label"`: Fixed text prefix or suffix.
     * - `"list"`: Selectable dropdown.
     * - `"custom"`: Arbitrary JSX content.
     *
     * @default undefined
     */
    type?: InputGroupAddonType | undefined;
    /**
     * The type-specific attributes for the addon.
     *
     * The shape depends on `type`: use `LabelAddon`, `ListAddon`, or `CustomAddon`.
     */
    attributes: ListAddon<T, V> | LabelAddon | CustomAddon;
    /**
     * The side of the input on which the addon is placed.
     *
     * @default undefined
     */
    position?: InputGroupAddonPosition;
}

/**
 * Props for the InputGroup component - text input with an inline addon.
 *
 * Combines a standard text input with a left or right addon that can be a static
 * label, a selectable dropdown, or custom JSX. Common uses include phone number
 * inputs (country-code dropdown), currency inputs ($ label), or unit inputs (kg label).
 *
 * @example
 * ```tsx
 * <InputGroup
 *     addon={{ type: "label", attributes: { value: "$" }, position: "left" }}
 *     placeholder="0.00"
 * />
 * ```
 * @keywords prefixed input, suffixed input, addon input, currency input, inline addon
 */
export interface InputGroupProps<T, V> extends InputProps {
    /**
     * The addon configuration for the left or right side of the input.
     *
     * @see AddonProps for all available configuration options
     * @default undefined
     */
    addon?: AddonProps<T, V> | undefined;
    /**
     * Called when the input or the list addon loses focus.
     *
     * The event argument is optional because blur events from the `ListAddon`
     * dropdown do not originate from the `<input>` element itself.
     *
     * @param event - The focus event, or `undefined` when triggered by a list addon.
     */
    onBlur?: ((event?: React.FocusEvent<HTMLInputElement>) => void) | undefined;
}

/** To be exposed for Form component inheritance */
export type InputGroupPartialProps<T, V> = Omit<InputGroupProps<T, V>, "error">;
