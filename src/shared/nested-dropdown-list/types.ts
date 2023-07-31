import { L1OptionProps } from "../../input-nested-select/types";

export type TruncateType = "middle" | "end";
export type ItemsLoadStateType = "loading" | "fail" | "success";
export type Mode = "default" | "expand" | "collapse";

export interface DropdownStyleProps {
    listStyleWidth?: string | undefined;
}

export interface DropdownEventHandlerProps<V1, V2, V3> {
    onSelectItem: (item: CombinedFormattedOptionProps<V1, V2, V3>) => void;
}

export interface NestedDropdownListProps<V1, V2, V3>
    extends React.HTMLAttributes<HTMLUListElement>,
        DropdownEventHandlerProps<V1, V2, V3>,
        DropdownStyleProps {
    listItems?: L1OptionProps<V1, V2, V3>[] | undefined;
    visible?: boolean | undefined;
    selectedKeyPath?: string[] | undefined;
    /** Behavior of dropdown list items once it is opened */
    mode?: Mode | undefined;
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
interface BaseFormattedOptionProps {
    label: string;
    keyPath: string[];
    expanded: boolean;
}

export interface FormattedOption<V1, V2, V3> extends BaseFormattedOptionProps {
    value: V1;
    subItems: Map<string, FL2<V2, V3>> | undefined;
}

export interface FL2<V2, V3> extends BaseFormattedOptionProps {
    value: V2;
    subItems: Map<string, FL3<V3>> | undefined;
}
export interface FL3<V3> extends BaseFormattedOptionProps {
    value: V3;
    subItems: undefined;
}

export type CombinedFormattedOptionProps<V1, V2, V3> =
    | FormattedOption<V1, V2, V3>
    | FL2<V2, V3>
    | FL3<V3>;
