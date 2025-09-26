import { RefObject } from "react";
import { InputProps } from "../input/types";
import { DropdownDisplayProps, DropdownSearchProps, ItemsLoadStateType, TruncateType } from "../shared/dropdown-list-v2";
export type InputGroupAddonType = "label" | "list" | "custom";
export type InputGroupAddonPosition = "left" | "right" | undefined;
export interface CustomAddon {
    children?: JSX.Element | undefined;
}
export interface LabelAddon {
    value?: string | undefined;
}
export interface ListAddon<T, V> extends DropdownDisplayProps<T, V>, DropdownSearchProps<T> {
    placeholder?: string | undefined;
    displayValueExtractor?: ((item: T) => string) | undefined;
    "data-selector-testid"?: string | undefined;
    options?: T[] | undefined;
    selectedOption?: T | undefined;
    onSelectOption?: ((option: T, extractedValue: T | V) => void) | undefined;
    /**
     * Used when items are loaded from an api call.
     * Values: "loading" | "fail" | "success"
     */
    optionsLoadState?: ItemsLoadStateType | undefined;
    /** Specifies the truncation type. Truncated text will be replaced with ellipsis. Values: "middle" | "end" */
    optionTruncationType?: TruncateType | undefined;
    onRetry?: (() => void) | undefined;
    onHideOptions?: (() => void) | undefined;
    onShowOptions?: (() => void) | undefined;
    dropdownZIndex?: number | undefined;
    /**
     * The root element that contains the dropdown element. Defaults to the document body.
     *
     * If the parent that contains the trigger element has a higher z-index than the dropdown,
     * the dropdown may not be visible. Specify the parent element here instead
     */
    dropdownRootNode?: RefObject<HTMLElement> | undefined;
}
export interface AddonProps<T, V> {
    type?: InputGroupAddonType | undefined;
    attributes: ListAddon<T, V> | LabelAddon | CustomAddon;
    position?: InputGroupAddonPosition;
}
export interface InputGroupProps<T, V> extends InputProps {
    addon?: AddonProps<T, V> | undefined;
    onBlur?: ((event?: React.FocusEvent<HTMLInputElement>) => void) | undefined;
}
/** To be exposed for Form component inheritance */
export type InputGroupPartialProps<T, V> = Omit<InputGroupProps<T, V>, "error">;
