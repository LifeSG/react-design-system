import { InputProps } from "../input/types";
import { DropdownListProps } from "../shared/dropdown-list/types";

export type InputGroupAddonType = "label" | "list" | "custom";

export interface AddonProps<T, V> extends DropdownListProps<T, V> {
    type?: InputGroupAddonType | undefined;
    value?: T | undefined;
    children?: JSX.Element | undefined;
    position?: "left" | "right" | undefined;
    placeholder?: string | undefined;
    displayValueExtractor?: (item: T) => V | undefined;
    "data-selector-testid"?: string | undefined;

    onHideOptions?: () => void | undefined;
    onShowOptions?: () => void | undefined;
}

export interface InputGroupProps<T, V> extends InputProps {
    addon?: AddonProps<T, V> | undefined;
}

/** To be exposed for Form component inheritance */
export type InputGroupPartialProps<T, V> = Omit<InputGroupProps<T, V>, "error">;
