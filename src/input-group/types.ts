import { RefObject } from "react";
import { InputProps } from "../input/types";
import {
    DropdownDisplayProps,
    DropdownSearchProps,
    ItemsLoadStateType,
    TruncateType,
} from "../shared/dropdown-list-v2";

/** The type of addon attached to the input group. */
export type InputGroupAddonType = "label" | "list" | "custom";
/** The side where the addon is positioned relative to the input field. */
export type InputGroupAddonPosition = "left" | "right" | undefined;

/** Configuration for a fully custom JSX addon. */
export interface CustomAddon {
    /** The custom JSX content to render as the addon. */
    children?: JSX.Element | undefined;
}

/** Configuration for a static text label addon. */
export interface LabelAddon {
    /** The text string to display as the label addon. */
    value?: string | undefined;
}

/**
 * Configuration for a dropdown list addon that lets the user select a prefix or suffix option
 * (e.g. a currency code or country dial code) alongside the input field.
 */
export interface ListAddon<T, V>
    extends DropdownDisplayProps<T, V>,
        DropdownSearchProps<T> {
    /** Placeholder text shown in the dropdown trigger when no option is selected. */
    placeholder?: string | undefined;
    /** Custom function to extract a display string from a selected item. */
    displayValueExtractor?: ((item: T) => string) | undefined;
    /** Test identifier for the dropdown selector element. */
    "data-selector-testid"?: string | undefined;
    /** Accessible label for the dropdown trigger button. */
    "aria-label"?: string | undefined;

    // Dropdown props (unable to inherit directly)
    /** The list of selectable options. */
    options?: T[] | undefined;
    /** The currently selected option object. */
    selectedOption?: T | undefined;
    /** Called when the user selects an option. Receives the option object and its extracted value. */
    onSelectOption?: ((option: T, extractedValue: T | V) => void) | undefined;
    /**
     * Used when items are loaded from an api call.
     * Values: "loading" | "fail" | "success"
     */
    optionsLoadState?: ItemsLoadStateType | undefined;
    /** Specifies the truncation type. Truncated text will be replaced with ellipsis. Values: "middle" | "end" */
    optionTruncationType?: TruncateType | undefined;

    /** Called when the user retries a failed options load. */
    onRetry?: (() => void) | undefined;
    /** Called when the dropdown is hidden. */
    onHideOptions?: (() => void) | undefined;
    /** Called when the dropdown is shown. */
    onShowOptions?: (() => void) | undefined;

    /** Z-index override for the dropdown overlay. */
    dropdownZIndex?: number | undefined;
    /**
     * The root element that contains the dropdown element. Defaults to the document body.
     *
     * If the parent that contains the trigger element has a higher z-index than the dropdown,
     * the dropdown may not be visible. Specify the parent element here instead
     */
    dropdownRootNode?: RefObject<HTMLElement> | undefined;
}

/** Describes a single addon (label, list dropdown, or custom JSX) with its type and position. */
export interface AddonProps<T, V> {
    /** The kind of addon to render. */
    type?: InputGroupAddonType | undefined;
    /** The configuration attributes specific to the chosen addon type. */
    attributes: ListAddon<T, V> | LabelAddon | CustomAddon;
    /** Which side of the input field the addon is attached to. */
    position?: InputGroupAddonPosition;
}

/**
 * A text input that can have an addon (label, dropdown list, or custom element) attached to either side.
 * Useful for structured inputs such as currency amounts, phone extensions, or unit-qualified entries.
 *
 * @keywords input-group, addon, label, dropdown, prefix, suffix
 */
export interface InputGroupProps<T, V> extends InputProps {
    /** The addon configuration to attach to the input field. */
    addon?: AddonProps<T, V> | undefined;
    /** Removes the outer border from the input group container. */
    noBorder?: boolean | undefined;
    // Note: the onBlur event argument is optional because the onBlur event from one
    // of the addon types (ListAddon) does not originate from the input element
    /** Called when the input or its addon loses focus. The event argument is optional for list addons. */
    onBlur?: ((event?: React.FocusEvent<HTMLInputElement>) => void) | undefined;
}

/** To be exposed for Form component inheritance */
export type InputGroupPartialProps<T, V> = Omit<InputGroupProps<T, V>, "error">;
