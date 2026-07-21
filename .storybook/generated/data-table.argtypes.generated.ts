// This file is generated. Do not edit manually.
// Run: npm run storybook:argtypes

export const dataTableExtraArgTypes = {
    "DataTableProps.actionBarContent": {
        control: false,
        description: "Additional content rendered inside the action bar.",
        name: "actionBarContent",
        table: {
            category: "DataTableProps",
            type: {
                summary: "ReactNode",
            },
        },
    },
    "DataTableProps.alternatingRows": {
        control: false,
        description:
            "Applies an alternate background colour to every odd-indexed row.",
        name: "alternatingRows",
        table: {
            category: "DataTableProps",
            type: {
                summary: "boolean",
            },
        },
    },
    "DataTableProps.className": {
        control: false,
        name: "className",
        table: {
            category: "DataTableProps",
            type: {
                summary: "string",
            },
        },
    },
    "DataTableProps.data-testid": {
        control: false,
        name: "data-testid",
        table: {
            category: "DataTableProps",
            type: {
                summary: "string",
            },
        },
    },
    "DataTableProps.disabledIds": {
        control: false,
        description:
            "Row IDs whose checkboxes are rendered in a disabled state; the rows remain visible.",
        name: "disabledIds",
        table: {
            category: "DataTableProps",
            type: {
                summary: "string[]",
            },
        },
    },
    "DataTableProps.emptyView": {
        control: false,
        description:
            "Overrides the title and description shown in the built-in empty state. Ignored when\n`renderCustomEmptyView` is provided.",
        name: "emptyView",
        table: {
            category: "DataTableProps",
            type: {
                summary: "ErrorDisplayAttributes",
            },
        },
    },
    "DataTableProps.enableActionBar": {
        control: false,
        description:
            "Shows the action bar whenever one or more rows are selected.",
        name: "enableActionBar",
        table: {
            category: "DataTableProps",
            type: {
                summary: "boolean",
            },
        },
    },
    "DataTableProps.enableMultiSelect": {
        control: false,
        description:
            "Renders a checkbox column as the first column of each row to support row selection.",
        name: "enableMultiSelect",
        table: {
            category: "DataTableProps",
            type: {
                summary: "boolean",
            },
        },
    },
    "DataTableProps.enableSelectAll": {
        control: false,
        description:
            "Renders a select-all checkbox in the header checkbox column. Requires `enableMultiSelect`.",
        name: "enableSelectAll",
        table: {
            category: "DataTableProps",
            type: {
                summary: "boolean",
            },
        },
    },
    "DataTableProps.enableStickyHeader": {
        control: false,
        description:
            "Keeps the header row visible as the user scrolls down through the table.",
        name: "enableStickyHeader",
        table: {
            category: "DataTableProps",
            type: {
                summary: "boolean",
            },
        },
    },
    "DataTableProps.headers": {
        control: false,
        description:
            "Column definitions that determine the rendered headers and the `fieldKey` used to read values from each `RowProps` entry.",
        name: "headers",
        table: {
            category: "DataTableProps",
            type: {
                summary: "HeaderProps[]",
            },
        },
    },
    "DataTableProps.id": {
        control: false,
        name: "id",
        table: {
            category: "DataTableProps",
            type: {
                summary: "string",
            },
        },
    },
    "DataTableProps.loadState": {
        control: false,
        description:
            "Controls whether the table body renders data rows or a loading indicator.",
        name: "loadState",
        table: {
            category: "DataTableProps",
            defaultValue: {
                summary: '"success"',
            },
            type: {
                summaryParts: ["'loading'", "'success'"],
            },
        },
    },
    "DataTableProps.onClearSelectionClick": {
        control: false,
        description:
            'Called when the "Clear selection" button inside the action bar is clicked.',
        name: "onClearSelectionClick",
        table: {
            category: "DataTableProps",
            type: {
                summary: "() => void",
            },
        },
    },
    "DataTableProps.onHeaderClick": {
        control: false,
        description:
            "Called when a header cell is clicked; receives the `fieldKey` of the clicked column.",
        name: "onHeaderClick",
        table: {
            category: "DataTableProps",
            type: {
                summary: "(fieldKey: string) => void",
            },
        },
    },
    "DataTableProps.onSelect": {
        control: false,
        description:
            "Called when a row's checkbox is toggled; receives the row ID and the new selected state.",
        name: "onSelect",
        table: {
            category: "DataTableProps",
            type: {
                summary: "(rowId: string, isSelected: boolean) => void",
            },
        },
    },
    "DataTableProps.onSelectAll": {
        control: false,
        description: "Called when the select-all checkbox is toggled.",
        name: "onSelectAll",
        table: {
            category: "DataTableProps",
            type: {
                summary: "(isAllSelected: boolean) => void",
            },
        },
    },
    "DataTableProps.renderCustomEmptyView": {
        control: false,
        description:
            "Renders a fully custom empty state in place of the default `ErrorDisplay`.",
        name: "renderCustomEmptyView",
        table: {
            category: "DataTableProps",
            type: {
                summary: "() => ReactNode",
            },
        },
    },
    "DataTableProps.rows": {
        control: false,
        description:
            "Row data to render. When omitted or empty the empty state is shown.",
        name: "rows",
        table: {
            category: "DataTableProps",
            type: {
                summary: "RowProps[]",
            },
        },
    },
    "DataTableProps.selectedIds": {
        control: false,
        description:
            "Controlled set of row IDs that are currently selected.\n\nRemarks:\nMust be provided alongside `enableMultiSelect` for selection to work. Pass an\nempty array (not `undefined`) to enable the select-all checkbox while having no rows\nselected.",
        name: "selectedIds",
        table: {
            category: "DataTableProps",
            type: {
                summary: "string[]",
            },
        },
    },
    "DataTableProps.sortIndicators": {
        control: false,
        description:
            "Maps each `fieldKey` to its current sort direction. A key present in this map causes the\ncorresponding header to render a directional arrow and expose sort controls to assistive\ntechnology.",
        name: "sortIndicators",
        table: {
            category: "DataTableProps",
            type: {
                summary: "SortIndicatorsProps",
            },
        },
    },
    "ErrorDisplayAttributes.actionButton": {
        control: false,
        description:
            'Action button rendered below the description.\nDefaults to a "Proceed" label when `children` is omitted.',
        name: "actionButton",
        table: {
            category: "ErrorDisplayAttributes",
            type: {
                summary: "ButtonProps",
            },
        },
    },
    "ErrorDisplayAttributes.additionalProps": {
        control: false,
        description:
            'Type-specific attributes that inject dynamic content into the default description.\n\nRemarks:\nPass `MaintenanceAdditionalAttributes` when `type` is `"maintenance"` and\n`InactivityAdditionalAttributes` when `type` is `"inactivity"`. Ignored for all other types.',
        name: "additionalProps",
        table: {
            category: "ErrorDisplayAttributes",
            type: {
                summaryParts: [
                    "InactivityAdditionalAttributes",
                    "MaintenanceAdditionalAttributes",
                ],
            },
        },
    },
    "ErrorDisplayAttributes.description": {
        control: false,
        description:
            'Overrides the default description for the selected `type`.\nWhen `additionalProps` is also provided for `"maintenance"` or\n`"inactivity"` types, `additionalProps` takes precedence.',
        name: "description",
        table: {
            category: "ErrorDisplayAttributes",
            type: {
                summaryParts: ["JSX.Element", "string"],
            },
        },
    },
    "ErrorDisplayAttributes.illustrationScheme": {
        control: false,
        description:
            "Selects the illustration resource scheme to use.\n\nRemarks:\nFalls back to the active theme scheme from `ThemeProvider` when omitted.",
        name: "illustrationScheme",
        table: {
            category: "ErrorDisplayAttributes",
            type: {
                summary:
                    "'a11y-playground' | 'bookingsg' | 'careercompass' | 'ccube' | 'imda' | 'lifesg' | 'mylegacy' | 'oneservice' | 'pa' | 'rbs' | 'sgw-digital-lobby' | 'smgs' | 'spf' | 'supportgowhere'",
            },
        },
    },
    "ErrorDisplayAttributes.imageOnly": {
        control: false,
        description:
            "Renders only the illustration, hiding the title, description, and action button.",
        name: "imageOnly",
        table: {
            category: "ErrorDisplayAttributes",
            defaultValue: {
                summary: "false",
            },
            type: {
                summary: "boolean",
            },
        },
    },
    "ErrorDisplayAttributes.img": {
        control: false,
        description:
            "Overrides the default illustration for the selected `type`.",
        name: "img",
        table: {
            category: "ErrorDisplayAttributes",
            type: {
                summary: "React.ImgHTMLAttributes<HTMLImageElement>",
            },
        },
    },
    "ErrorDisplayAttributes.title": {
        control: false,
        description: "Overrides the default title for the selected `type`.",
        name: "title",
        table: {
            category: "ErrorDisplayAttributes",
            type: {
                summaryParts: ["JSX.Element", "string"],
            },
        },
    },
    "HeaderItemProps.clickable": {
        control: false,
        description:
            "Makes the header cell interactive, firing `onHeaderClick` when clicked.",
        name: "clickable",
        table: {
            category: "HeaderItemProps",
            type: {
                summary: "boolean",
            },
        },
    },
    "HeaderItemProps.fieldKey": {
        control: false,
        description:
            "Key used to read the corresponding cell value from each `RowProps` entry.",
        name: "fieldKey",
        table: {
            category: "HeaderItemProps",
            type: {
                summary: "string",
            },
        },
    },
    "HeaderItemProps.keyColumn": {
        control: false,
        description:
            "Used with `enableMultiSelect`. Marks this column as descriptive of the row\n(e.g. a name or unique ID). Its value is used to label the row's checkbox\nfor screen readers.",
        name: "keyColumn",
        table: {
            category: "HeaderItemProps",
            type: {
                summary: "boolean",
            },
        },
    },
    "HeaderItemProps.label": {
        control: false,
        description:
            "Column heading content. Pass a string for plain text or a `ReactNode` for custom markup.",
        name: "label",
        table: {
            category: "HeaderItemProps",
            type: {
                summary: "string | ReactNode",
            },
        },
    },
    "HeaderItemProps.style": {
        control: false,
        name: "style",
        table: {
            category: "HeaderItemProps",
            type: {
                summary: "CSSProperties",
            },
        },
    },
    HeaderProps: {
        control: false,
        description:
            "When a string is specified, it will be used as the header label and\nthe key of the value in the row item object.\n\nFor additional customisation, pass a `HeaderItemProps` object",
        name: "HeaderProps",
        table: {
            category: "HeaderProps",
            type: {
                summary: "string | HeaderItemProps",
            },
        },
    },
    "RowProps.[fieldKey: string]": {
        control: false,
        description:
            "Cell values keyed by the `fieldKey` of the matching `HeaderProps`. Values can be a\nprimitive (rendered inside a `Typography.BodyBL`), a `ReactNode`, or a render function\nthat receives the full row and `RowRenderProps`.",
        name: "[fieldKey: string]",
        table: {
            category: "RowProps",
            type: {
                summary:
                    "string\n| number\n| ReactNode\n| ((row: RowProps, renderProps: RowRenderProps) => ReactNode)",
            },
        },
    },
    "RowProps.id": {
        control: false,
        description:
            "Unique identifier for the row; used as the key and referenced by `selectedIds`/`disabledIds`.",
        name: "id",
        table: {
            category: "RowProps",
            type: {
                summaryParts: ["number", "string"],
            },
        },
    },
    "RowRenderProps.isSelected": {
        control: false,
        description: "Whether the row is currently in the `selectedIds` set.",
        name: "isSelected",
        table: {
            category: "RowRenderProps",
            type: {
                summary: "boolean",
            },
        },
    },
    "SortIndicatorsProps.[fieldKey: string]": {
        control: false,
        name: "[fieldKey: string]",
        table: {
            category: "SortIndicatorsProps",
            type: {
                summary: "'asc'\n| 'desc'",
            },
        },
    },
} satisfies Record<string, unknown>;
