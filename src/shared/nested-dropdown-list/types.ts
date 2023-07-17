import { Option } from "../../input-nested-select";

export type TruncateType = "middle" | "end";
export type ItemsLoadStateType = "loading" | "fail" | "success";
export type Mode = "default" | "expand" | "collapse";

export interface ListItemRenderArgs {
    selected: boolean;
}

export interface DropdownDisplayProps<V1, V2, V3> {
    /** Control the dropdown list when it is first opened */
    mode?: Mode;
    /** Expand the recursively selected key in dropdown list when it is first opened */
    selectedKeyPath: string[];
    /** Function to derive value from an item */
    valueExtractor?: ((item: V1 | V2 | V3) => V1 | V2 | V3) | undefined;
    /** Function to derive options display value from an item */
    listExtractor?: ((item: FItemOption<V1, V2, V3>) => string) | undefined;
}

export interface DropdownStyleProps {
    listStyleWidth?: string | undefined;
}

export interface DropdownEventHandlerProps<V1, V2, V3> {
    onSelectItem?: ((item: FItemOption<V1, V2, V3>) => void) | undefined;
}

export interface NestedDropdownListProps<V1, V2, V3>
    extends React.HTMLAttributes<HTMLUListElement>,
        DropdownEventHandlerProps<V1, V2, V3>,
        DropdownDisplayProps<V1, V2, V3>,
        DropdownStyleProps {
    listItems?: Option<V1, V2, V3>[] | undefined;
    visible?: boolean | undefined;
    selectedItems?: (V1 | V2 | V3)[] | undefined;
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
    key: string;
    categories: string[];
    subItems: Map<string, FL2<V2, V3>> | undefined;
}

export interface FL2<V2, V3> {
    label: string;
    value: V2;
    key: string;
    categories: string[];
    subItems: Map<string, FL3<V3>> | undefined;
}
export interface FL3<V3> {
    label: string;
    value: V3;
    key: string;
    categories: number[];
    subItems: undefined;
}

export type FItemOption<V1, V2, V3> =
    | FormattedOption<V1, V2, V3>
    | FL2<V2, V3>
    | FL3<V3>;
