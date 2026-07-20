// This file is generated. Do not edit manually.
// Run: npm run storybook:argtypes

export const dataTableExtraArgTypes = {
    "DataTableProps.actionBarContent": {
        "control": false,
        "description": "Additional content rendered inside the action bar.",
        "name": "actionBarContent",
        "table": {
            "category": "DataTableProps",
            "type": {
                "summary": "ReactNode"
            }
        }
    },
    "DataTableProps.alternatingRows": {
        "control": false,
        "description": "Applies an alternate background colour to every odd-indexed row.",
        "name": "alternatingRows",
        "table": {
            "category": "DataTableProps",
            "type": {
                "summary": "boolean"
            }
        }
    },
    "DataTableProps.className": {
        "control": false,
        "name": "className",
        "table": {
            "category": "DataTableProps",
            "type": {
                "summary": "string"
            }
        }
    },
    "DataTableProps.data-testid": {
        "control": false,
        "name": "data-testid",
        "table": {
            "category": "DataTableProps",
            "type": {
                "summary": "string"
            }
        }
    },
    "DataTableProps.disabledIds": {
        "control": false,
        "description": "Row IDs whose checkboxes are rendered in a disabled state; the rows remain visible.",
        "name": "disabledIds",
        "table": {
            "category": "DataTableProps",
            "type": {
                "summary": "string[]"
            }
        }
    },
    "DataTableProps.emptyView": {
        "control": false,
        "description": "Overrides the title and description shown in the built-in empty state. Ignored when\n`renderCustomEmptyView` is provided.",
        "name": "emptyView",
        "table": {
            "category": "DataTableProps",
            "type": {
                "summary": "ErrorDisplayAttributes"
            }
        }
    },
    "DataTableProps.enableActionBar": {
        "control": false,
        "description": "Shows the action bar whenever one or more rows are selected.",
        "name": "enableActionBar",
        "table": {
            "category": "DataTableProps",
            "type": {
                "summary": "boolean"
            }
        }
    },
    "DataTableProps.enableMultiSelect": {
        "control": false,
        "description": "Renders a checkbox column as the first column of each row to support row selection.",
        "name": "enableMultiSelect",
        "table": {
            "category": "DataTableProps",
            "type": {
                "summary": "boolean"
            }
        }
    },
    "DataTableProps.enableSelectAll": {
        "control": false,
        "description": "Renders a select-all checkbox in the header checkbox column. Requires `enableMultiSelect`.",
        "name": "enableSelectAll",
        "table": {
            "category": "DataTableProps",
            "type": {
                "summary": "boolean"
            }
        }
    },
    "DataTableProps.enableStickyHeader": {
        "control": false,
        "description": "Keeps the header row visible as the user scrolls down through the table.",
        "name": "enableStickyHeader",
        "table": {
            "category": "DataTableProps",
            "type": {
                "summary": "boolean"
            }
        }
    },
    "DataTableProps.headers": {
        "control": false,
        "description": "Column definitions that determine the rendered headers and the `fieldKey` used to read values from each `RowProps` entry.",
        "name": "headers",
        "table": {
            "category": "DataTableProps",
            "type": {
                "summary": "HeaderProps[]"
            }
        }
    },
    "DataTableProps.id": {
        "control": false,
        "name": "id",
        "table": {
            "category": "DataTableProps",
            "type": {
                "summary": "string"
            }
        }
    },
    "DataTableProps.loadState": {
        "control": false,
        "description": "Controls whether the table body renders data rows or a loading indicator.",
        "name": "loadState",
        "table": {
            "category": "DataTableProps",
            "defaultValue": {
                "summary": "\"success\""
            },
            "type": {
                "summary": "LoadStateType"
            }
        }
    },
    "DataTableProps.onClearSelectionClick": {
        "control": false,
        "description": "Called when the \"Clear selection\" button inside the action bar is clicked.",
        "name": "onClearSelectionClick",
        "table": {
            "category": "DataTableProps",
            "type": {
                "summary": "() => void"
            }
        }
    },
    "DataTableProps.onHeaderClick": {
        "control": false,
        "description": "Called when a header cell is clicked; receives the `fieldKey` of the clicked column.",
        "name": "onHeaderClick",
        "table": {
            "category": "DataTableProps",
            "type": {
                "summary": "(fieldKey: string) => void"
            }
        }
    },
    "DataTableProps.onSelect": {
        "control": false,
        "description": "Called when a row's checkbox is toggled; receives the row ID and the new selected state.",
        "name": "onSelect",
        "table": {
            "category": "DataTableProps",
            "type": {
                "summary": "(rowId: string, isSelected: boolean) => void"
            }
        }
    },
    "DataTableProps.onSelectAll": {
        "control": false,
        "description": "Called when the select-all checkbox is toggled.",
        "name": "onSelectAll",
        "table": {
            "category": "DataTableProps",
            "type": {
                "summary": "(isAllSelected: boolean) => void"
            }
        }
    },
    "DataTableProps.renderCustomEmptyView": {
        "control": false,
        "description": "Renders a fully custom empty state in place of the default `ErrorDisplay`.",
        "name": "renderCustomEmptyView",
        "table": {
            "category": "DataTableProps",
            "type": {
                "summary": "() => ReactNode"
            }
        }
    },
    "DataTableProps.rows": {
        "control": false,
        "description": "Row data to render. When omitted or empty the empty state is shown.",
        "name": "rows",
        "table": {
            "category": "DataTableProps",
            "type": {
                "summary": "RowProps[]"
            }
        }
    },
    "DataTableProps.selectedIds": {
        "control": false,
        "description": "Controlled set of row IDs that are currently selected.\n\nRemarks:\nMust be provided alongside `enableMultiSelect` for selection to work. Pass an\nempty array (not `undefined`) to enable the select-all checkbox while having no rows\nselected.",
        "name": "selectedIds",
        "table": {
            "category": "DataTableProps",
            "type": {
                "summary": "string[]"
            }
        }
    },
    "DataTableProps.sortIndicators": {
        "control": false,
        "description": "Maps each `fieldKey` to its current sort direction. A key present in this map causes the\ncorresponding header to render a directional arrow and expose sort controls to assistive\ntechnology.",
        "name": "sortIndicators",
        "table": {
            "category": "DataTableProps",
            "type": {
                "summary": "SortIndicatorsProps"
            }
        }
    },
    "HeaderItemProps.clickable": {
        "control": false,
        "description": "Makes the header cell interactive, firing `onHeaderClick` when clicked.",
        "name": "clickable",
        "table": {
            "category": "HeaderItemProps",
            "type": {
                "summary": "boolean"
            }
        }
    },
    "HeaderItemProps.fieldKey": {
        "control": false,
        "description": "Key used to read the corresponding cell value from each `RowProps` entry.",
        "name": "fieldKey",
        "table": {
            "category": "HeaderItemProps",
            "type": {
                "summary": "string"
            }
        }
    },
    "HeaderItemProps.keyColumn": {
        "control": false,
        "description": "Used with `enableMultiSelect`. Marks this column as descriptive of the row\n(e.g. a name or unique ID). Its value is used to label the row's checkbox\nfor screen readers.",
        "name": "keyColumn",
        "table": {
            "category": "HeaderItemProps",
            "type": {
                "summary": "boolean"
            }
        }
    },
    "HeaderItemProps.label": {
        "control": false,
        "description": "Column heading content. Pass a string for plain text or a `ReactNode` for custom markup.",
        "name": "label",
        "table": {
            "category": "HeaderItemProps",
            "type": {
                "summary": "string | ReactNode"
            }
        }
    },
    "HeaderItemProps.style": {
        "control": false,
        "name": "style",
        "table": {
            "category": "HeaderItemProps",
            "type": {
                "summary": "CSSProperties"
            }
        }
    },
    "HeaderProps": {
        "control": false,
        "description": "When a string is specified, it will be used as the header label and\nthe key of the value in the row item object.\n\nFor additional customisation, pass a `HeaderItemProps` object",
        "name": "HeaderProps",
        "table": {
            "category": "HeaderProps",
            "type": {
                "summary": "string | HeaderItemProps"
            }
        }
    },
    "LoadStateType": {
        "control": false,
        "description": "Whether the table body is in a loading or data-ready state.",
        "name": "LoadStateType",
        "table": {
            "category": "LoadStateType",
            "type": {
                "summary": "'success' | 'loading'"
            }
        }
    },
    "RowProps.[fieldKey: string]": {
        "control": false,
        "description": "Cell values keyed by the `fieldKey` of the matching `HeaderProps`. Values can be a\nprimitive (rendered inside a `Typography.BodyBL`), a `ReactNode`, or a render function\nthat receives the full row and `RowRenderProps`.",
        "name": "[fieldKey: string]",
        "table": {
            "category": "RowProps",
            "type": {
                "summary": "string\n| number\n| ReactNode\n| ((row: RowProps, renderProps: RowRenderProps) => ReactNode)"
            }
        }
    },
    "RowProps.id": {
        "control": false,
        "description": "Unique identifier for the row; used as the key and referenced by `selectedIds`/`disabledIds`.",
        "name": "id",
        "table": {
            "category": "RowProps",
            "type": {
                "summary": "string | number"
            }
        }
    },
    "RowRenderProps.isSelected": {
        "control": false,
        "description": "Whether the row is currently in the `selectedIds` set.",
        "name": "isSelected",
        "table": {
            "category": "RowRenderProps",
            "type": {
                "summary": "boolean"
            }
        }
    },
    "SortIndicatorsProps.[fieldKey: string]": {
        "control": false,
        "name": "[fieldKey: string]",
        "table": {
            "category": "SortIndicatorsProps",
            "type": {
                "summary": "'asc'\n| 'desc'"
            }
        }
    },
    "SortIndicatorType": {
        "control": false,
        "description": "Direction of a column sort indicator.",
        "name": "SortIndicatorType",
        "table": {
            "category": "SortIndicatorType",
            "type": {
                "summary": "'asc' | 'desc'"
            }
        }
    }
} satisfies Record<string, unknown>;
