// This file is generated. Do not edit manually.
// Run: npm run storybook:argtypes

export const dropdownListExtraArgTypes = {
    "ListItemRenderArgs.selected": {
        name: "selected",
        control: false,
        table: {
            category: "ListItemRenderArgs",
            type: {
                summary: "boolean",
            },
        },
    },
    "ListItemDisplayProps.title": {
        name: "title",
        control: false,
        table: {
            category: "ListItemDisplayProps",
            type: {
                summary: "string",
            },
        },
    },
    "ListItemDisplayProps.secondaryLabel": {
        name: "secondaryLabel",
        control: false,
        table: {
            category: "ListItemDisplayProps",
            type: {
                summary: "string",
            },
        },
    },
    "DropdownCustomLabelProps.searchPlaceholder": {
        name: "searchPlaceholder",
        control: false,
        table: {
            category: "DropdownCustomLabelProps",
            type: {
                summary: "string",
            },
        },
    },
    "DropdownCustomLabelProps.noResultsLabel": {
        name: "noResultsLabel",
        control: false,
        table: {
            category: "DropdownCustomLabelProps",
            type: {
                summary: "string",
            },
        },
    },
    "DropdownCustomLabelProps.noResultsDescription": {
        name: "noResultsDescription",
        control: false,
        table: {
            category: "DropdownCustomLabelProps",
            type: {
                summary: "React.ReactNode",
            },
        },
    },
    "DropdownCustomLabelProps.selectAllButtonLabel": {
        name: "selectAllButtonLabel",
        control: false,
        table: {
            category: "DropdownCustomLabelProps",
            type: {
                summary: "string",
            },
        },
    },
    "DropdownCustomLabelProps.clearAllButtonLabel": {
        name: "clearAllButtonLabel",
        control: false,
        table: {
            category: "DropdownCustomLabelProps",
            type: {
                summary: "string",
            },
        },
    },
    "DropdownCustomLabelProps.allSelectedLabel": {
        name: "allSelectedLabel",
        control: false,
        table: {
            category: "DropdownCustomLabelProps",
            type: {
                summary: "string",
            },
        },
    },
    "DropdownCustomLabelProps.multiSelectedLabel": {
        name: "multiSelectedLabel",
        control: false,
        table: {
            category: "DropdownCustomLabelProps",
            type: {
                summary: "string",
            },
        },
    },
    "DropdownDisplayProps.valueExtractor": {
        name: "valueExtractor",
        description: "Function to derive value from an item",
        control: false,
        table: {
            category: "DropdownDisplayProps<T>",
            type: {
                summary: "((item: T) => V)",
            },
        },
    },
    "DropdownDisplayProps.listExtractor": {
        name: "listExtractor",
        description: "Function to derive options display value from an item",
        control: false,
        table: {
            category: "DropdownDisplayProps<T>",
            type: {
                summary: "((item: T) => string | ListItemDisplayProps)",
            },
        },
    },
    "DropdownDisplayProps.renderListItem": {
        name: "renderListItem",
        description: "Function to render custom component",
        control: false,
        table: {
            category: "DropdownDisplayProps<T>",
            type: {
                summary:
                    "| ((item: T, args: ListItemRenderArgs) => JSX.Element)",
            },
        },
    },
    "DropdownDisplayProps.renderCustomCallToAction": {
        name: "renderCustomCallToAction",
        description:
            "Function to render a custom call-to-action component at the bottom of the dropdown list.",
        control: false,
        table: {
            category: "DropdownDisplayProps<T>",
            type: {
                summary:
                    "| ((hideOptions: () => void, options: T[]) => JSX.Element)",
            },
        },
    },
    "DropdownSearchProps.enableSearch": {
        name: "enableSearch",
        description: "Specifying will render a search bar in the dropdown",
        control: false,
        table: {
            category: "DropdownSearchProps<T>",
            type: {
                summary: "boolean",
            },
        },
    },
    "DropdownSearchProps.hideNoResultsDisplay": {
        name: "hideNoResultsDisplay",
        description:
            "If specified, the default no results display will not be rendered",
        control: false,
        table: {
            category: "DropdownSearchProps<T>",
            type: {
                summary: "boolean",
            },
        },
    },
    "DropdownSearchProps.noResultsDescription": {
        name: "noResultsDescription",
        deprecated: "use `noResultsDescription` inside `customLabels`",
        control: false,
        table: {
            category: "DropdownSearchProps<T>",
            type: {
                summary: "React.ReactNode",
            },
        },
    },
    "DropdownSearchProps.searchPlaceholder": {
        name: "searchPlaceholder",
        deprecated: "use `searchPlaceholder` inside `customLabels`",
        control: false,
        table: {
            category: "DropdownSearchProps<T>",
            type: {
                summary: "string",
            },
        },
    },
    "DropdownSearchProps.searchFunction": {
        name: "searchFunction",
        description:
            "Custom function to perform search when a user keys in a value in the search input",
        control: false,
        table: {
            category: "DropdownSearchProps<T>",
            type: {
                summary: "((searchValue: string) => T[])",
            },
        },
    },
    "DropdownSearchProps.onSearch": {
        name: "onSearch",
        control: false,
        table: {
            category: "DropdownSearchProps<T>",
            type: {
                summary: "(() => void)",
            },
        },
    },
    "DropdownConfigProps.multiSelect": {
        name: "multiSelect",
        control: false,
        table: {
            category: "DropdownConfigProps",
            type: {
                summary: "boolean",
            },
        },
    },
    "DropdownConfigProps.maxSelectable": {
        name: "maxSelectable",
        control: false,
        table: {
            category: "DropdownConfigProps",
            type: {
                summary: "number",
            },
        },
    },
    "DropdownConfigProps.customLabels": {
        name: "customLabels",
        control: false,
        table: {
            category: "DropdownConfigProps",
            type: {
                summary: "DropdownCustomLabelProps",
            },
        },
    },
    "DropdownConfigProps.itemsLoadState": {
        name: "itemsLoadState",
        description:
            'Used when items are loaded from an api call.\nValues: "loading" | "fail" | "success"',
        control: false,
        table: {
            category: "DropdownConfigProps",
            type: {
                summary: "ItemsLoadStateType",
            },
        },
    },
    "DropdownConfigProps.itemTruncationType": {
        name: "itemTruncationType",
        description:
            'Specifies the truncation type. Truncated text will be replaced with ellipsis. Values: "middle" | "end"',
        control: false,
        table: {
            category: "DropdownConfigProps",
            type: {
                summary: "TruncateType",
            },
        },
    },
    "DropdownConfigProps.itemMaxLines": {
        name: "itemMaxLines",
        description:
            'Specifies the maximum number of lines visible before the label is truncated for "end" type',
        control: false,
        table: {
            category: "DropdownConfigProps",
            type: {
                summary: "number",
            },
        },
    },
    "DropdownConfigProps.variant": {
        name: "variant",
        description:
            'Specifies the variant type. Small type will have shorter height. Values: "default" | "small"',
        control: false,
        table: {
            category: "DropdownConfigProps",
            type: {
                summary: "DropdownVariantType",
            },
        },
    },
    "DropdownListProps.listItems": {
        name: "listItems",
        control: false,
        table: {
            category: "DropdownListProps<T>",
            type: {
                summary: "T[]",
            },
        },
    },
    "DropdownListProps.selectedItems": {
        name: "selectedItems",
        control: false,
        table: {
            category: "DropdownListProps<T>",
            type: {
                summary: "T[]",
            },
        },
    },
    "DropdownListProps.disableItemFocus": {
        name: "disableItemFocus",
        control: false,
        table: {
            category: "DropdownListProps<T>",
            type: {
                summary: "boolean",
            },
        },
    },
    "DropdownListProps.listboxId": {
        name: "listboxId",
        control: false,
        table: {
            category: "DropdownListProps<T>",
            type: {
                summary: "string",
            },
        },
    },
    "DropdownListProps.labelDisplayType": {
        name: "labelDisplayType",
        description: "Specifying flex direction within item",
        control: false,
        table: {
            category: "DropdownListProps<T>",
            type: {
                summary: "LabelDisplayType",
            },
        },
    },
    "DropdownListProps.topScrollItem": {
        name: "topScrollItem",
        description:
            "Specifies the item for which the dropdown’s scroll position will be automatically adjusted",
        control: false,
        table: {
            category: "DropdownListProps<T>",
            type: {
                summary: "T",
            },
        },
    },
    "DropdownListProps.matchElementWidth": {
        name: "matchElementWidth",
        control: false,
        table: {
            category: "DropdownListProps<T>",
            type: {
                summary: "boolean",
            },
        },
    },
    "DropdownListProps.width": {
        name: "width",
        description:
            "Custom width for the dropdown. When specified, takes precedence over matchElementWidth",
        control: false,
        table: {
            category: "DropdownListProps<T>",
            type: {
                summary: "string",
            },
        },
    },
    "DropdownListProps.ariaLabel": {
        name: "ariaLabel",
        control: false,
        table: {
            category: "DropdownListProps<T>",
            type: {
                summary: "string",
            },
        },
    },
    "DropdownListProps.onSelectItem": {
        name: "onSelectItem",
        control: false,
        table: {
            category: "DropdownListProps<T>",
            type: {
                summary: "((item: T, extractedValue: V) => void)",
            },
        },
    },
    "DropdownListProps.onSelectAll": {
        name: "onSelectAll",
        control: false,
        table: {
            category: "DropdownListProps<T>",
            type: {
                summary: "(() => void)",
            },
        },
    },
    "DropdownListProps.onDismiss": {
        name: "onDismiss",
        control: false,
        table: {
            category: "DropdownListProps<T>",
            type: {
                summary: "((setSelectorFocus?: boolean) => void)",
            },
        },
    },
    "DropdownListProps.onRetry": {
        name: "onRetry",
        control: false,
        table: {
            category: "DropdownListProps<T>",
            type: {
                summary: "(() => void)",
            },
        },
    },
    "DropdownListApi.refocus": {
        name: "refocus",
        control: false,
        table: {
            category: "DropdownListApi",
            type: {
                summary:
                    "(opts?: { index?: number; preferSelected?: boolean }) => void",
            },
        },
    },
    "NestedDropdownListLeafItem.key": {
        name: "key",
        control: false,
        table: {
            category: "NestedDropdownListLeafItem<T>",
            type: {
                summary: "string",
            },
        },
    },
    "NestedDropdownListLeafItem.label": {
        name: "label",
        control: false,
        table: {
            category: "NestedDropdownListLeafItem<T>",
            type: {
                summary: "string",
            },
        },
    },
    "NestedDropdownListLeafItem.value": {
        name: "value",
        control: false,
        table: {
            category: "NestedDropdownListLeafItem<T>",
            type: {
                summary: "T",
            },
        },
    },
    "NestedDropdownListLeafItem.subItems": {
        name: "subItems",
        control: false,
        table: {
            category: "NestedDropdownListLeafItem<T>",
            type: {
                summary: "never",
            },
        },
    },
    "NestedDropdownListParentItem.key": {
        name: "key",
        control: false,
        table: {
            category: "NestedDropdownListParentItem<T>",
            type: {
                summary: "string",
            },
        },
    },
    "NestedDropdownListParentItem.label": {
        name: "label",
        control: false,
        table: {
            category: "NestedDropdownListParentItem<T>",
            type: {
                summary: "string",
            },
        },
    },
    "NestedDropdownListParentItem.value": {
        name: "value",
        control: false,
        table: {
            category: "NestedDropdownListParentItem<T>",
            type: {
                summary: "T",
            },
        },
    },
    "NestedDropdownListParentItem.subItems": {
        name: "subItems",
        control: false,
        table: {
            category: "NestedDropdownListParentItem<T>",
            type: {
                summary: "NestedDropdownListItemProps<T>[]",
            },
        },
    },
    "NestedDropdownListLocalItem.item": {
        name: "item",
        control: false,
        table: {
            category: "NestedDropdownListLocalItem<T>",
            type: {
                summary: "NestedDropdownListItemProps<T>",
            },
        },
    },
    "NestedDropdownListLocalItem.index": {
        name: "index",
        control: false,
        table: {
            category: "NestedDropdownListLocalItem<T>",
            type: {
                summary: "number",
            },
        },
    },
    "NestedDropdownListLocalItem.indexInParent": {
        name: "indexInParent",
        control: false,
        table: {
            category: "NestedDropdownListLocalItem<T>",
            type: {
                summary: "number",
            },
        },
    },
    "NestedDropdownListLocalItem.parentSetSize": {
        name: "parentSetSize",
        control: false,
        table: {
            category: "NestedDropdownListLocalItem<T>",
            type: {
                summary: "number",
            },
        },
    },
    "NestedDropdownListLocalItem.keyPath": {
        name: "keyPath",
        control: false,
        table: {
            category: "NestedDropdownListLocalItem<T>",
            type: {
                summary: "string[]",
            },
        },
    },
    "NestedDropdownListLocalItem.parentIndex": {
        name: "parentIndex",
        control: false,
        table: {
            category: "NestedDropdownListLocalItem<T>",
            type: {
                summary: "number",
            },
        },
    },
    "NestedDropdownListLocalItem.parentKeyPath": {
        name: "parentKeyPath",
        control: false,
        table: {
            category: "NestedDropdownListLocalItem<T>",
            type: {
                summary: "string[]",
            },
        },
    },
    "NestedDropdownListLocalItem.level": {
        name: "level",
        control: false,
        table: {
            category: "NestedDropdownListLocalItem<T>",
            type: {
                summary: "number",
            },
        },
    },
    "NestedDropdownListLocalItem.visible": {
        name: "visible",
        control: false,
        table: {
            category: "NestedDropdownListLocalItem<T>",
            type: {
                summary: "boolean",
            },
        },
    },
    "NestedDropdownListLocalItem.expanded": {
        name: "expanded",
        control: false,
        table: {
            category: "NestedDropdownListLocalItem<T>",
            type: {
                summary: "boolean",
            },
        },
    },
    "NestedDropdownListLocalItem.checked": {
        name: "checked",
        control: false,
        table: {
            category: "NestedDropdownListLocalItem<T>",
            type: {
                summary: '"mixed" | true | false',
            },
        },
    },
    "NestedDropdownListLocalItem.hasSubItems": {
        name: "hasSubItems",
        control: false,
        table: {
            category: "NestedDropdownListLocalItem<T>",
            type: {
                summary: "boolean",
            },
        },
    },
    "NestedDropdownListLocalItem.subItemIndexes": {
        name: "subItemIndexes",
        control: false,
        table: {
            category: "NestedDropdownListLocalItem<T>",
            type: {
                summary: "number[]",
            },
        },
    },
    "NestedDropdownListLocalItem.hasNestedSiblings": {
        name: "hasNestedSiblings",
        control: false,
        table: {
            category: "NestedDropdownListLocalItem<T>",
            type: {
                summary: "boolean",
            },
        },
    },
    "NestedDropdownListLocalItem.matched": {
        name: "matched",
        control: false,
        table: {
            category: "NestedDropdownListLocalItem<T>",
            type: {
                summary: "boolean",
            },
        },
    },
    "NestedDropdownListLocalItem.hasMatchedSubItems": {
        name: "hasMatchedSubItems",
        control: false,
        table: {
            category: "NestedDropdownListLocalItem<T>",
            type: {
                summary: "boolean",
            },
        },
    },
    "NestedDropdownListProps.listItems": {
        name: "listItems",
        control: false,
        table: {
            category: "NestedDropdownListProps<T>",
            type: {
                summary: "NestedDropdownListItemProps<T>[]",
            },
        },
    },
    "NestedDropdownListProps.selectedKeyPaths": {
        name: "selectedKeyPaths",
        control: false,
        table: {
            category: "NestedDropdownListProps<T>",
            type: {
                summary: "Set<string>",
            },
        },
    },
    "NestedDropdownListProps.listboxId": {
        name: "listboxId",
        control: false,
        table: {
            category: "NestedDropdownListProps<T>",
            type: {
                summary: "string",
            },
        },
    },
    "NestedDropdownListProps.mode": {
        name: "mode",
        description:
            "Specifies if items are expanded or collapsed when the dropdown is opened",
        control: false,
        table: {
            category: "NestedDropdownListProps<T>",
            type: {
                summary: "ExpandMode",
            },
        },
    },
    "NestedDropdownListProps.selectableCategory": {
        name: "selectableCategory",
        description: "If specified, the category label is selectable",
        control: false,
        table: {
            category: "NestedDropdownListProps<T>",
            type: {
                summary: "boolean",
            },
        },
    },
    "NestedDropdownListProps.matchElementWidth": {
        name: "matchElementWidth",
        control: false,
        table: {
            category: "NestedDropdownListProps<T>",
            type: {
                summary: "boolean",
            },
        },
    },
    "NestedDropdownListProps.width": {
        name: "width",
        description:
            "Custom width for the dropdown. When specified, takes precedence over matchElementWidth",
        control: false,
        table: {
            category: "NestedDropdownListProps<T>",
            type: {
                summary: "string",
            },
        },
    },
    "NestedDropdownListProps.onSelectItem": {
        name: "onSelectItem",
        control: false,
        table: {
            category: "NestedDropdownListProps<T>",
            type: {
                summary: "((item: NestedDropdownListLocalItem<T>) => void)",
            },
        },
    },
    "NestedDropdownListProps.onSelectAll": {
        name: "onSelectAll",
        control: false,
        table: {
            category: "NestedDropdownListProps<T>",
            type: {
                summary:
                    "| (( keyPaths: string[][], items: NestedDropdownListLocalItem<T>[] ) => void)",
            },
        },
    },
    "NestedDropdownListProps.onRetry": {
        name: "onRetry",
        control: false,
        table: {
            category: "NestedDropdownListProps<T>",
            type: {
                summary: "(() => void)",
            },
        },
    },
    TruncateType: {
        name: "TruncateType",
        control: false,
        table: {
            category: "TruncateType",
            type: {
                summary: '"middle" | "end"',
            },
        },
    },
    ItemsLoadStateType: {
        name: "ItemsLoadStateType",
        control: false,
        table: {
            category: "ItemsLoadStateType",
            type: {
                summary: '"loading" | "fail" | "success"',
            },
        },
    },
    LabelDisplayType: {
        name: "LabelDisplayType",
        control: false,
        table: {
            category: "LabelDisplayType",
            type: {
                summary: '"inline" | "next-line"',
            },
        },
    },
    DropdownVariantType: {
        name: "DropdownVariantType",
        control: false,
        table: {
            category: "DropdownVariantType",
            type: {
                summary: '"small" | "default"',
            },
        },
    },
    NestedDropdownListItemProps: {
        name: "NestedDropdownListItemProps<T>",
        control: false,
        table: {
            category: "NestedDropdownListItemProps<T>",
            type: {
                summary:
                    "| NestedDropdownListLeafItem<T> | NestedDropdownListParentItem<T>",
            },
        },
    },
    ExpandMode: {
        name: "ExpandMode",
        control: false,
        table: {
            category: "ExpandMode",
            type: {
                summary: '"default" | "expand" | "collapse"',
            },
        },
    },
} satisfies Record<string, unknown>;
