import { Option } from "../../input-nested-select";

export type TruncateType = "middle" | "end";
export type ItemsLoadStateType = "loading" | "fail" | "success";
export type Mode = "default" | "expand" | "collapse";

export interface DropdownStyleProps {
    listStyleWidth?: string | undefined;
}

export interface DropdownEventHandlerProps<V1, V2, V3> {
    onSelectItem: (item: FItemOption<V1, V2, V3>) => void;
}

export interface NestedDropdownListProps<V1, V2, V3>
    extends React.HTMLAttributes<HTMLUListElement>,
        DropdownEventHandlerProps<V1, V2, V3>,
        DropdownStyleProps {
    listItems?: Option<V1, V2, V3>[] | undefined;
    visible?: boolean | undefined;
    selectedKeys?: string[][] | undefined;
    /** Behavior of dropdown list items once it is opened */
    mode?: Mode;
    /**
     * Used when items are loaded from an api call.
     * Values: "loading" | "fail" | "success"
     */
    itemsLoadState?: ItemsLoadStateType | undefined;
    /** Specifies the truncation type. Truncated text will be replaced with ellipsis. Values: "middle" | "end" */
    itemTruncationType?: TruncateType | undefined;

    onDismiss?: ((setSelectorFocus?: boolean | undefined) => void) | undefined;
    onRetry?: (() => void) | undefined;
    onBlur?: (() => void) | undefined;
}

export interface ListItemSelectorProps {
    onClick?: (() => void) | undefined;
}

// =============================================================================
// Recursive Types
// =============================================================================
export interface FormattedOption<V1, V2, V3> {
    label: string;
    value: V1;
    keyPath: string[];
    subItems: Map<string, FL2<V2, V3>> | undefined;
}

export interface FL2<V2, V3> {
    label: string;
    value: V2;
    keyPath: string[];
    subItems: Map<string, FL3<V3>> | undefined;
}
export interface FL3<V3> {
    label: string;
    value: V3;
    keyPath: string[];
    subItems: undefined;
}

export type FItemOption<V1, V2, V3> =
    | FormattedOption<V1, V2, V3>
    | FL2<V2, V3>
    | FL3<V3>;
