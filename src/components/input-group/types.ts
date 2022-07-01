import { InputProps } from "../input/types";
import { DropdownListProps } from "../dropdown-list/types";

export type InputGroupAddonType = "label" | "list" | "custom";

export interface AddonProps<T> extends DropdownListProps<T> {
    type?: InputGroupAddonType;
    value?: T;
    children?: JSX.Element;
    placeholder?: string;
    displayValueExtractor?: (item: T) => any; // format function to derive display value upon selected
    onShowOptions?: () => void;
    onHideOptions?: () => void;
    selectorTestId?: string;
}

export interface InputGroupProps<T> extends InputProps {
    addon?: AddonProps<T>;
}

/** To be exposed for Form component inheritance */
export type InputGroupPartialProps<T> = Omit<InputGroupProps<T>, "error">;
