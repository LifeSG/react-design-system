// AUTO-GENERATED — do not edit manually.
// Source: src/data-table/types.ts
// Regenerate: npm run props:generate

import { ApiTableSectionProps } from "stories/storybook-common";

export const DataTablePropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "id",
                description:
                    "Sets the HTML id attribute on the table wrapper element. Use this to target the component for anchors, analytics, or integration tests that rely on deterministic DOM identifiers.",
                propTypes: ["string"],
            },
            {
                name: "data-testid",
                description:
                    "Sets the base test id used for the table and generated sub-elements. Child test ids are derived from this value (for example, `header-<fieldKey>` and `row-<rowId>`).",
                propTypes: ["string"],
            },
            {
                name: "headers",
                description:
                    "Defines the table columns and header cell behaviour. Each entry can be: - A string, used as both the `fieldKey` and visible label. - A `HeaderItemProps` object for custom label, click handling, and style.",
                propTypes: ["HeaderProps[]"],
                mandatory: true,
            },
            {
                name: "rows",
                description:
                    "Supplies the row data rendered in the table body. Each row must contain an `id` and keys that match the configured header `fieldKey` values.",
                propTypes: ["RowProps[]"],
            },
            {
                name: "className",
                description:
                    "Appends one or more class names to the table wrapper element. Use this for layout-level overrides or integration with external style hooks.",
                propTypes: ["string"],
            },
            {
                name: "selectedIds",
                description:
                    "Controls which row ids are currently selected. This prop works with `enableMultiSelect` and is typically managed as a controlled state from the parent component.",
                propTypes: ["string[]"],
            },
            {
                name: "disabledIds",
                description:
                    "Prevents specific row ids from being selected. Disabled rows keep their checkbox visible but non-interactive.",
                propTypes: ["string[]"],
            },
            {
                name: "enableMultiSelect",
                description:
                    "Shows a selection checkbox in each row. Enable this when users need to select multiple rows for batch actions.",
                propTypes: ["boolean"],
                defaultValue: "false",
            },
            {
                name: "enableSelectAll",
                description:
                    "Shows a header checkbox to select or clear all rows. This is only meaningful when `enableMultiSelect` is enabled.",
                propTypes: ["boolean"],
                defaultValue: "false",
            },
            {
                name: "enableActionBar",
                description:
                    "Displays the action bar when one or more rows are selected. The action bar appears at the bottom of the table and can show custom actions through `actionBarContent`.",
                propTypes: ["boolean"],
                defaultValue: "false",
            },
            {
                name: "enableStickyHeader",
                description:
                    "Keeps the table header fixed while scrolling. Use this for long tables to preserve column context during vertical navigation.",
                propTypes: ["boolean"],
                defaultValue: "false",
            },
            {
                name: "actionBarContent",
                description:
                    "Renders custom content inside the action bar area. Use this to add contextual actions such as bulk operations.",
                propTypes: ["ReactNode"],
            },
            {
                name: "loadState",
                description:
                    "Controls whether table rows or loading feedback is shown. - `success`: Renders table rows or the empty state. - `loading`: Renders a loading spinner row.",
                propTypes: ["LoadStateType"],
                defaultValue: '"success"',
            },
            {
                name: "onSelect",
                description:
                    "Called when a row selection checkbox is toggled. Use this to update controlled `selectedIds` state in the parent.",
                propTypes: [
                    "((rowId: string, isSelected: boolean) => void) | undefined",
                ],
            },
            {
                name: "onSelectAll",
                description:
                    "Called when the header select-all checkbox is toggled.",
                propTypes: ["((isAllSelected: boolean) => void) | undefined"],
            },
            {
                name: "onHeaderClick",
                description: "Called when a clickable header cell is clicked.",
                propTypes: ["((fieldKey: string) => void) | undefined"],
            },
            {
                name: "onClearSelectionClick",
                description:
                    "Called when the action bar clear selection button is clicked. Use this to reset `selectedIds` in controlled selection mode.",
                propTypes: ["(() => void) | undefined"],
            },
            {
                name: "sortIndicators",
                description:
                    "Maps a column `fieldKey` to its sort direction indicator.",
                propTypes: ["SortIndicatorsProps"],
            },
            {
                name: "alternatingRows",
                description:
                    "Applies alternating background colours to body rows. Use this to improve readability in dense data sets.",
                propTypes: ["boolean"],
                defaultValue: "false",
            },
            {
                name: "emptyView",
                description:
                    "Overrides the default empty-state error display content. Provide this when you need custom empty-state title, description, or related attributes.",
                propTypes: ["ErrorDisplayAttributes"],
            },
            {
                name: "renderCustomEmptyView",
                description:
                    "Returns a fully custom empty-state view. When provided, this takes precedence over `emptyView`.",
                propTypes: ["(() => ReactNode) | undefined"],
            },
        ],
    },
];

export const SortIndicatorsPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "[string]",
                description: "",
                propTypes: ["SortIndicatorType"],
            },
        ],
    },
];

export const HeaderPropsData: ApiTableSectionProps[] = [
    {
        attributes: [],
    },
];

export const HeaderItemPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "fieldKey",
                description:
                    "Identifies the row field rendered in this column. This value must match a key on each row object.",
                propTypes: ["string"],
                mandatory: true,
            },
            {
                name: "label",
                description:
                    "Sets the visible header content for the column. Use a string for standard text headers or a custom node for advanced formatting.",
                propTypes: ["string", "ReactNode"],
                mandatory: true,
            },
            {
                name: "clickable",
                description:
                    "Makes the header cell interactive and clickable. When enabled, clicking the header calls `onHeaderClick` with this column's `fieldKey`.",
                propTypes: ["boolean"],
                defaultValue: "false",
            },
            {
                name: "style",
                description:
                    "Applies inline styles to header and corresponding body cells. Use this mainly for sizing and layout adjustments such as fixed widths.",
                propTypes: ["CSSProperties"],
            },
        ],
    },
];

export const RowPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "id",
                description: "Uniquely identifies the row.",
                propTypes: ["string", "number"],
                mandatory: true,
            },
            {
                name: "[string]",
                description:
                    "Provides column values by `fieldKey`. Values can be primitives, React nodes, or a render function for dynamic cell content.",
                propTypes: [
                    "ReactNode | ((row: RowProps, renderProps: RowRenderProps) => ReactNode)",
                ],
            },
        ],
    },
];
