// =============================================================================
// SHARED PROPS
// =============================================================================
/** How overflowing option text is truncated. */
export type TruncateType = "middle" | "end";
/** Async load state for dropdown items. */
export type ItemsLoadStateType = "loading" | "fail" | "success";
/** Controls whether secondary labels render inline or on a new line. */
export type LabelDisplayType = "inline" | "next-line";
/** Visual size variant for the dropdown. */
export type DropdownVariantType = "small" | "default";

/** Runtime context passed to a custom `renderListItem` callback. */
export interface ListItemRenderArgs {
    selected: boolean;
}

/** Display model for a list item with an optional secondary label. */
export interface ListItemDisplayProps {
    title: string;
    secondaryLabel?: string | undefined;
}

/** Overrides for built-in text labels rendered inside a dropdown. */
export interface DropdownCustomLabelProps {
    searchPlaceholder?: string | undefined;
    noResultsLabel?: string | undefined;
    noResultsDescription?: React.ReactNode | undefined;
    selectAllButtonLabel?: string | undefined;
    clearAllButtonLabel?: string | undefined;
    allSelectedLabel?: string | undefined;
    multiSelectedLabel?: string | undefined;
}

/** Props controlling how dropdown items are displayed and rendered. */
export interface DropdownDisplayProps<T, V> {
    /** Extracts the comparable value from an option item. */
    valueExtractor?: ((item: T) => V) | undefined;
    /** Extracts the display text for a list item. */
    listExtractor?: ((item: T) => string | ListItemDisplayProps) | undefined;
    /** Renders a fully custom element for each list item. */
    renderListItem?:
        | ((item: T, args: ListItemRenderArgs) => JSX.Element)
        | undefined;
    /**
     * Renders a custom call-to-action at the bottom of the dropdown list.
     *
     * @param hideOptions Callback to programmatically close the dropdown.
     * @param options The currently displayed list items.
     */
    renderCustomCallToAction?:
        | ((hideOptions: () => void, options: T[]) => JSX.Element)
        | undefined;
}

/** Props controlling the search functionality within a dropdown. */
export interface DropdownSearchProps<T> {
    /** Renders a search bar inside the dropdown when `true`. */
    enableSearch?: boolean | undefined;
    /** Suppresses the built-in "no results" message when `true`. */
    hideNoResultsDisplay?: boolean | undefined;
    /** @deprecated Use `noResultsDescription` inside `customLabels`. */
    noResultsDescription?: React.ReactNode | undefined;
    /** @deprecated Use `searchPlaceholder` inside `customLabels`. */
    searchPlaceholder?: string | undefined;
    /** Custom filter function invoked on each keystroke in the search input. */
    searchFunction?: ((searchValue: string) => T[]) | undefined;
    /** Called when the user types in the search input. */
    onSearch?: (() => void) | undefined;
}

/** Internal configuration props for the dropdown list behaviour. */
export interface DropdownConfigProps {
    multiSelect?: boolean | undefined;
    maxSelectable?: number | undefined;
    customLabels?: DropdownCustomLabelProps | undefined;
    /** Async load state driving the loading spinner, error retry, or list render. */
    itemsLoadState?: ItemsLoadStateType | undefined;
    /** How overflowing item text is truncated. */
    itemTruncationType?: TruncateType | undefined;
    /** Maximum visible lines before the label is truncated (applies to `"end"` truncation). */
    itemMaxLines?: number | undefined;
    /** Visual size variant for the dropdown items. */
    variant?: DropdownVariantType | undefined;
}

// =============================================================================
// DROPDOWN PROPS
// =============================================================================

export interface DropdownListProps<T, V>
    extends DropdownDisplayProps<T, V>,
        DropdownSearchProps<T>,
        DropdownConfigProps {
    listItems?: T[] | undefined;
    selectedItems?: T[] | undefined;
    disableItemFocus?: boolean | undefined;
    listboxId?: string | undefined;
    /** Specifying flex direction within item */
    labelDisplayType?: LabelDisplayType | undefined;
    /** Specifies the item for which the dropdown’s scroll position will be automatically adjusted */
    topScrollItem?: T | undefined;
    matchElementWidth?: boolean | undefined;
    /** Custom width for the dropdown. When specified, takes precedence over matchElementWidth */
    width?: string | undefined;
    ariaLabel?: string | undefined;

    onSelectItem?: ((item: T, extractedValue: V) => void) | undefined;
    onSelectAll?: (() => void) | undefined;
    onDismiss?: ((setSelectorFocus?: boolean | undefined) => void) | undefined;
    onRetry?: (() => void) | undefined;
}

export interface DropdownListApi {
    refocus: (opts?: { index?: number; preferSelected?: boolean }) => void;
}

// =============================================================================
// NESTED DROPDOWN PROPS
// =============================================================================

/** A leaf node in a nested dropdown tree (has no children). */
export interface NestedDropdownListLeafItem<T> {
    key: string;
    label: string;
    value: T;
    subItems?: never | undefined;
}

/** A parent node in a nested dropdown tree (has child `subItems`). */
export interface NestedDropdownListParentItem<T> {
    key: string;
    label: string;
    value: T;
    subItems: NestedDropdownListItemProps<T>[];
}

/**
 * A single node in a nested dropdown tree.
 *
 * Presence of `subItems` discriminates parent nodes from leaf nodes.
 */
export type NestedDropdownListItemProps<T> =
    | NestedDropdownListLeafItem<T>
    | NestedDropdownListParentItem<T>;

/** Internal enriched representation of a nested dropdown item with computed tree state. */
export interface NestedDropdownListLocalItem<T> {
    item: NestedDropdownListItemProps<T>;
    index: number;
    indexInParent: number;
    parentSetSize: number;
    keyPath: string[];
    parentIndex: number;
    parentKeyPath: string[];
    level: number;
    visible: boolean;
    expanded: boolean;
    checked: "mixed" | true | false;
    hasSubItems: boolean;
    subItemIndexes: number[];
    hasNestedSiblings: boolean;
    matched: boolean;
    hasMatchedSubItems: boolean;
}

/** Initial expand/collapse state for nested dropdown items when the list opens. */
export type ExpandMode = "default" | "expand" | "collapse";

export interface NestedDropdownListProps<T>
    extends DropdownSearchProps<NestedDropdownListItemProps<T>>,
        DropdownConfigProps {
    listItems: NestedDropdownListItemProps<T>[];
    selectedKeyPaths: Set<string>;
    listboxId?: string | undefined;
    /** Specifies if items are expanded or collapsed when the dropdown is opened */
    mode?: ExpandMode | undefined;
    /** If specified, the category label is selectable */
    selectableCategory?: boolean | undefined;
    matchElementWidth?: boolean | undefined;
    /** Custom width for the dropdown. When specified, takes precedence over matchElementWidth */
    width?: string | undefined;

    onSelectItem?: ((item: NestedDropdownListLocalItem<T>) => void) | undefined;
    onSelectAll?:
        | ((
              keyPaths: string[][],
              items: NestedDropdownListLocalItem<T>[]
          ) => void)
        | undefined;
    onRetry?: (() => void) | undefined;
}
