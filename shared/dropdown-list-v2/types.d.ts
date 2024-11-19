/// <reference types="react" />
export type TruncateType = "middle" | "end";
export type ItemsLoadStateType = "loading" | "fail" | "success";
export type LabelDisplayType = "inline" | "next-line";
export type DropdownVariantType = "small" | "default";
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
    renderListItem?: ((item: T, args: ListItemRenderArgs) => JSX.Element) | undefined;
    /**
     * Function to render a custom call-to-action component at the bottom of the dropdown list.
     * @param hideOptions - A function that can be called to hide the dropdown list.
     * @param options - The currently displayed list items in the dropdown list.
     * @returns A JSX.Element representing the custom call-to-action component.
     */
    renderCustomCallToAction?: ((hideOptions: () => void, options: T[]) => JSX.Element) | undefined;
}
export interface DropdownSearchProps<T> {
    /** Specifying will render a search bar in the dropdown */
    enableSearch?: boolean | undefined;
    /** If specified, the default no results display will not be rendered */
    hideNoResultsDisplay?: boolean | undefined;
    searchPlaceholder?: string | undefined;
    /** Custom function to perform search when a user keys in a value in the search input */
    searchFunction?: ((searchValue: string) => T[]) | undefined;
    onSearch?: (() => void) | undefined;
}
export interface DropdownListProps<T, V> extends DropdownDisplayProps<T, V>, DropdownSearchProps<T> {
    listItems?: T[] | undefined;
    multiSelect?: boolean | undefined;
    selectedItems?: T[] | undefined;
    disableItemFocus?: boolean | undefined;
    listboxId?: string | undefined;
    width?: number | undefined;
    /**
     * Used when items are loaded from an api call.
     * Values: "loading" | "fail" | "success"
     */
    itemsLoadState?: ItemsLoadStateType | undefined;
    /** Specifies the truncation type. Truncated text will be replaced with ellipsis. Values: "middle" | "end" */
    itemTruncationType?: TruncateType | undefined;
    /** Specifies the maximum number of lines visible before the label is truncated for "end" type */
    itemMaxLines?: number | undefined;
    /** Specifying flex direction within item */
    labelDisplayType?: LabelDisplayType | undefined;
    /** Specifies the variant type. Small type will have shorter height. Values: "default" | "small" */
    variant?: DropdownVariantType | undefined;
    /** Specifies the item for which the dropdown’s scroll position will be automatically adjusted */
    topScrollItem?: T | undefined;
    onSelectItem?: ((item: T, extractedValue: V) => void) | undefined;
    onSelectAll?: (() => void) | undefined;
    onDismiss?: ((setSelectorFocus?: boolean | undefined) => void) | undefined;
    onRetry?: (() => void) | undefined;
}
