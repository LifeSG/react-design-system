export type TruncateType = "middle" | "end";
export type ItemsLoadStateType = "loading" | "fail" | "success";

export interface ListItemRenderArgs {
    selected: boolean;
}

export interface ListItemDisplayProps {
    title: string;
    secondaryLabel?: string | undefined;
}

export interface DropdownDisplayProps<T, V> {
    /** Function to derive value from an item */
    valueExtractor?: ((item: T) => V) | undefined;
    /** Function to derive options display value from an item */
    listExtractor?: ((item: T) => string | ListItemDisplayProps) | undefined;
    /** Function to render custom component */
    renderListItem?:
        | ((item: T, args: ListItemRenderArgs) => JSX.Element)
        | undefined;
}

export interface DropdownStyleProps {
    listStyleWidth?: string | undefined;
}

export interface DropdownEventHandlerProps<T, V> {
    onSelectItem?: ((item: T, extractedValue: V) => void) | undefined;
    onSelectItems?: ((items: T[]) => void) | undefined;
}

export interface DropdownSearchProps<T> {
    /** Specifying will render a search bar in the dropdown */
    enableSearch?: boolean | undefined;
    searchPlaceholder?: string | undefined;
    /** Custom function to perform search when a user keys in a value in the search input */
    searchFunction?: ((searchValue: string) => T[]) | undefined;
    onSearch?: (() => void) | undefined;
}

export interface DropdownListProps<T, V>
    extends React.HTMLAttributes<HTMLUListElement>,
        DropdownEventHandlerProps<T, V>,
        DropdownDisplayProps<T, V>,
        DropdownSearchProps<T>,
        DropdownStyleProps {
    listItems?: T[] | undefined;
    visible?: boolean | undefined;
    multiSelect?: boolean | undefined;
    selectedItems?: T[] | undefined;
    /**
     * Used when items are loaded from an api call.
     * Values: "loading" | "fail" | "success"
     */
    itemsLoadState?: ItemsLoadStateType | undefined;
    /** Specifies the truncation type. Truncated text will be replaced with ellipsis. Values: "middle" | "end" */
    itemTruncationType?: TruncateType | undefined;

    onDismiss?: (() => void) | undefined;
    onSelectAll?: (() => void) | undefined;
    onRetry?: (() => void) | undefined;
}

export interface ListItemSelectorProps {
    onClick?: (() => void) | undefined;
}
