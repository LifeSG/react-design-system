import { L1OptionProps } from "../../input-nested-select/types";

export type TruncateType = "middle" | "end";
export type ItemsLoadStateType = "loading" | "fail" | "success";
export type Mode = "default" | "expand" | "collapse";
export interface DropdownStyleProps {
    listStyleWidth?: string | undefined;
}

export interface SelectedItem<V1, V2, V3> {
    label: string;
    keyPath: string[];
    value: V1 | V2 | V3;
}

export interface DropdownEventHandlerProps<V1, V2, V3> {
    onSelectItem: (item: SelectedItem<V1, V2, V3>) => void;
    onSelectItems?:
        | ((items: SelectedItem<V1, V2, V3>[], keyPaths: string[][]) => void)
        | undefined;
}

export interface DropdownSearchProps {
    /** Specifying will render a search bar in the dropdown */
    enableSearch?: boolean | undefined;
    /** If specified, the default no results display will not be rendered */
    hideNoResultsDisplay?: boolean | undefined;
    searchPlaceholder?: string | undefined;
    onSearch?: (() => void) | undefined;
}

export interface NestedDropdownListProps<V1, V2, V3>
    extends React.HTMLAttributes<HTMLUListElement>,
        DropdownEventHandlerProps<V1, V2, V3>,
        DropdownSearchProps,
        DropdownStyleProps {
    listItems?: L1OptionProps<V1, V2, V3>[] | undefined;
    visible?: boolean | undefined;
    multiSelect?: boolean | undefined;
    /** Specifies key path of selected option */
    selectedKeyPaths: string[][];
    /** Specifies if items are expanded or collapsed when the dropdown is opened */
    mode?: Mode | undefined;
    /** If specified, the category label is selectable */
    selectableCategory?: boolean | undefined;
    /**
     * Used when items are loaded from an api call.
     * Values: "loading" | "fail" | "success"
     */
    itemsLoadState?: ItemsLoadStateType | undefined;
    /** Specifies the truncation type. Truncated text will be replaced with ellipsis. Values: "middle" | "end" */
    itemTruncationType?: TruncateType | undefined;

    onDismiss?: ((setSelectorFocus?: boolean | undefined) => void) | undefined;
    onSelectAll?:
        | ((keyPaths: string[][], items: SelectedItem<V1, V2, V3>[]) => void)
        | undefined;
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
    checked: boolean;
    isSearchTerm: boolean;
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
