// This file is generated. Do not edit manually.
// Run: npm run storybook:argtypes

export const dataTableExtraArgTypes = {
    "DataTableProps.id": {
        name: "id",
        control: false,
        table: {
            category: "DataTableProps",
            type: {
                summary: "string",
            },
        },
    },
    "DataTableProps.data-testid": {
        name: "data-testid",
        control: false,
        table: {
            category: "DataTableProps",
            type: {
                summary: "string",
            },
        },
    },
    "DataTableProps.headers": {
        name: "headers",
        description: "Configuration for each header",
        control: false,
        table: {
            category: "DataTableProps",
            type: {
                summary: "HeaderProps[]",
            },
        },
    },
    "DataTableProps.rows": {
        name: "rows",
        control: false,
        table: {
            category: "DataTableProps",
            type: {
                summary: "RowProps[]",
            },
        },
    },
    "DataTableProps.className": {
        name: "className",
        control: false,
        table: {
            category: "DataTableProps",
            type: {
                summary: "string",
            },
        },
    },
    "DataTableProps.selectedIds": {
        name: "selectedIds",
        control: false,
        table: {
            category: "DataTableProps",
            type: {
                summary: "string[]",
            },
        },
    },
    "DataTableProps.disabledIds": {
        name: "disabledIds",
        control: false,
        table: {
            category: "DataTableProps",
            type: {
                summary: "string[]",
            },
        },
    },
    "DataTableProps.enableMultiSelect": {
        name: "enableMultiSelect",
        description: "Enables a checkbox for each row",
        control: false,
        table: {
            category: "DataTableProps",
            type: {
                summary: "boolean",
            },
        },
    },
    "DataTableProps.enableSelectAll": {
        name: "enableSelectAll",
        description: "Enables a select all checkbox",
        control: false,
        table: {
            category: "DataTableProps",
            type: {
                summary: "boolean",
            },
        },
    },
    "DataTableProps.enableActionBar": {
        name: "enableActionBar",
        description:
            "Specifies if an action bar is visible when one or more rows are selected",
        control: false,
        table: {
            category: "DataTableProps",
            type: {
                summary: "boolean",
            },
        },
    },
    "DataTableProps.enableStickyHeader": {
        name: "enableStickyHeader",
        description: "Specifies if the header is fixed to the top",
        control: false,
        table: {
            category: "DataTableProps",
            type: {
                summary: "boolean",
            },
        },
    },
    "DataTableProps.actionBarContent": {
        name: "actionBarContent",
        description: "Custom content to be rendered within the action bar",
        control: false,
        table: {
            category: "DataTableProps",
            type: {
                summary: "ReactNode",
            },
        },
    },
    "DataTableProps.loadState": {
        name: "loadState",
        control: false,
        table: {
            category: "DataTableProps",
            type: {
                summary: "LoadStateType",
            },
        },
    },
    "DataTableProps.onSelect": {
        name: "onSelect",
        control: false,
        table: {
            category: "DataTableProps",
            type: {
                summary: "((rowId: string, isSelected: boolean) => void)",
            },
        },
    },
    "DataTableProps.onSelectAll": {
        name: "onSelectAll",
        control: false,
        table: {
            category: "DataTableProps",
            type: {
                summary: "((isAllSelected: boolean) => void)",
            },
        },
    },
    "DataTableProps.onHeaderClick": {
        name: "onHeaderClick",
        control: false,
        table: {
            category: "DataTableProps",
            type: {
                summary: "((fieldKey: string) => void)",
            },
        },
    },
    "DataTableProps.onClearSelectionClick": {
        name: "onClearSelectionClick",
        control: false,
        table: {
            category: "DataTableProps",
            type: {
                summary: "(() => void)",
            },
        },
    },
    "DataTableProps.sortIndicators": {
        name: "sortIndicators",
        description:
            "Specifies the sort indicator display state for each column *",
        control: false,
        table: {
            category: "DataTableProps",
            type: {
                summary: "SortIndicatorsProps",
            },
        },
    },
    "DataTableProps.alternatingRows": {
        name: "alternatingRows",
        description:
            "Specifies if every alternate row has a different background colour",
        control: false,
        table: {
            category: "DataTableProps",
            type: {
                summary: "boolean",
            },
        },
    },
    "DataTableProps.emptyView": {
        name: "emptyView",
        description: "Override props for the empty view display",
        control: false,
        table: {
            category: "DataTableProps",
            type: {
                summary: "ErrorDisplayAttributes",
            },
        },
    },
    "DataTableProps.renderCustomEmptyView": {
        name: "renderCustomEmptyView",
        description:
            "Returns a custom view to be rendered when the table is empty",
        control: false,
        table: {
            category: "DataTableProps",
            type: {
                summary: "(() => ReactNode)",
            },
        },
    },
    "HeaderItemProps.fieldKey": {
        name: "fieldKey",
        control: false,
        table: {
            category: "HeaderItemProps",
            type: {
                summary: "string",
            },
        },
    },
    "HeaderItemProps.label": {
        name: "label",
        control: false,
        table: {
            category: "HeaderItemProps",
            type: {
                summary: "string | ReactNode",
            },
        },
    },
    "HeaderItemProps.clickable": {
        name: "clickable",
        control: false,
        table: {
            category: "HeaderItemProps",
            type: {
                summary: "boolean",
            },
        },
    },
    "HeaderItemProps.keyColumn": {
        name: "keyColumn",
        description:
            "Used with `enableMultiSelect`. Marks this column as descriptive of the row\n(e.g. a name or unique ID). Its value is used to label the row's checkbox\nfor screen readers.",
        control: false,
        table: {
            category: "HeaderItemProps",
            type: {
                summary: "boolean",
            },
        },
    },
    "HeaderItemProps.style": {
        name: "style",
        control: false,
        table: {
            category: "HeaderItemProps",
            type: {
                summary: "CSSProperties",
            },
        },
    },
    "RowProps.id": {
        name: "id",
        control: false,
        table: {
            category: "RowProps",
            type: {
                summary: "string | number",
            },
        },
    },
    "RowRenderProps.isSelected": {
        name: "isSelected",
        control: false,
        table: {
            category: "RowRenderProps",
            type: {
                summary: "boolean",
            },
        },
    },
    LoadStateType: {
        name: "LoadStateType",
        control: false,
        table: {
            category: "LoadStateType",
            type: {
                summary: '"loading" | "success"',
            },
        },
    },
    SortIndicatorType: {
        name: "SortIndicatorType",
        control: false,
        table: {
            category: "SortIndicatorType",
            type: {
                summary: '"asc" | "desc"',
            },
        },
    },
    HeaderProps: {
        name: "HeaderProps",
        description:
            "When a string is specified, it will be used as the header label and\nthe key of the value in the row item object.\n\nFor additional customisation, pass a `HeaderItemProps` object",
        control: false,
        table: {
            category: "HeaderProps",
            type: {
                summary: "string | HeaderItemProps",
            },
        },
    },
} satisfies Record<string, unknown>;
