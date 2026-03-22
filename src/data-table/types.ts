import { CSSProperties, ReactNode } from "react";
import { ErrorDisplayAttributes } from "../error-display/types";

/**
 * Props for the DataTable component - tabular data display with selection.
 *
 * DataTable organises row data into columns and supports sortable headers,
 * optional row selection, loading states, sticky headers, and empty states.
 * Use it when users need to scan, compare, and act on structured data.
 *
 * @example
 * ```tsx
 * <DataTable
 *   headers={[
 *     { fieldKey: "name", label: "Name" },
 *     { fieldKey: "status", label: "Status", clickable: true },
 *   ]}
 *   rows={[
 *     { id: "1", name: "Jane", status: "Active" },
 *     { id: "2", name: "John", status: "Pending" },
 *   ]}
 *   onHeaderClick={(fieldKey) => {
 *     console.log("Sort by", fieldKey);
 *   }}
 * />
 * ```
 * @keywords table, grid, spreadsheet, sortable table, data grid
 */
export interface DataTableProps {
    /**
     * Sets the HTML id attribute on the table wrapper element.
     *
     * Use this to target the component for anchors, analytics, or integration
     * tests that rely on deterministic DOM identifiers.
     *
     * @default undefined
     */
    id?: string | undefined;
    /**
     * Sets the base test id used for the table and generated sub-elements.
     *
     * Child test ids are derived from this value (for example,
     * `header-<fieldKey>` and `row-<rowId>`).
     *
     * @default undefined
     */
    "data-testid"?: string | undefined;
    /**
     * Defines the table columns and header cell behaviour.
     *
     * Each entry can be:
     * - A string, used as both the `fieldKey` and visible label.
     * - A `HeaderItemProps` object for custom label, click handling, and style.
     *
     * @see HeaderProps for supported header formats.
     */
    headers: HeaderProps[];
    /**
     * Supplies the row data rendered in the table body.
     *
     * Each row must contain an `id` and keys that match the configured header
     * `fieldKey` values.
     *
     * @default undefined
     */
    rows?: RowProps[] | undefined;
    /**
     * Appends one or more class names to the table wrapper element.
     *
     * Use this for layout-level overrides or integration with external style
     * hooks.
     *
     * @default undefined
     */
    className?: string | undefined;
    /**
     * Controls which row ids are currently selected.
     *
     * This prop works with `enableMultiSelect` and is typically managed as a
     * controlled state from the parent component.
     *
     * @default undefined
     */
    selectedIds?: string[] | undefined;
    /**
     * Prevents specific row ids from being selected.
     *
     * Disabled rows keep their checkbox visible but non-interactive.
     *
     * @default undefined
     */
    disabledIds?: string[] | undefined;
    /**
     * Shows a selection checkbox in each row.
     *
     * Enable this when users need to select multiple rows for batch actions.
     *
     * @default false
     */
    enableMultiSelect?: boolean | undefined;
    /**
     * Shows a header checkbox to select or clear all rows.
     *
     * This is only meaningful when `enableMultiSelect` is enabled.
     *
     * @default false
     */
    enableSelectAll?: boolean | undefined;
    /**
     * Displays the action bar when one or more rows are selected.
     *
     * The action bar appears at the bottom of the table and can show custom
     * actions through `actionBarContent`.
     *
     * @default false
     */
    enableActionBar?: boolean | undefined;
    /**
     * Keeps the table header fixed while scrolling.
     *
     * Use this for long tables to preserve column context during vertical
     * navigation.
     *
     * @default false
     */
    enableStickyHeader?: boolean | undefined;
    /**
     * Renders custom content inside the action bar area.
     *
     * Use this to add contextual actions such as bulk operations.
     *
     * @default undefined
     */
    actionBarContent?: ReactNode | undefined;
    /**
     * Controls whether table rows or loading feedback is shown.
     *
     * - `success`: Renders table rows or the empty state.
     * - `loading`: Renders a loading spinner row.
     *
     * @default "success"
     */
    loadState?: LoadStateType | undefined;
    /**
     * Called when a row selection checkbox is toggled.
     *
     * Use this to update controlled `selectedIds` state in the parent.
     *
     * @param rowId - The id of the row that was toggled.
     * @param isSelected - Whether the row should be considered selected.
     *
     * @example
     * ```tsx
     * <DataTable
     *   enableMultiSelect
     *   selectedIds={selectedIds}
     *   onSelect={(rowId, isSelected) => {
     *     setSelectedIds((prev) =>
     *       isSelected
     *         ? [...prev, rowId]
     *         : prev.filter((id) => id !== rowId)
     *     );
     *   }}
     * />
     * ```
     */
    onSelect?: ((rowId: string, isSelected: boolean) => void) | undefined;
    /**
     * Called when the header select-all checkbox is toggled.
     *
     * @param isAllSelected - Whether all rows are currently selected before
     * applying the next state.
     *
     * @default undefined
     */
    onSelectAll?: ((isAllSelected: boolean) => void) | undefined;
    /**
     * Called when a clickable header cell is clicked.
     *
     * @param fieldKey - The field key for the clicked column.
     *
     * @default undefined
     */
    onHeaderClick?: ((fieldKey: string) => void) | undefined;
    /**
     * Called when the action bar clear selection button is clicked.
     *
     * Use this to reset `selectedIds` in controlled selection mode.
     *
     * @default undefined
     */
    onClearSelectionClick?: (() => void) | undefined;
    /**
     * Maps a column `fieldKey` to its sort direction indicator.
     *
     * @see SortIndicatorsProps for value structure.
     * @default undefined
     */
    sortIndicators?: SortIndicatorsProps | undefined;
    /**
     * Applies alternating background colours to body rows.
     *
     * Use this to improve readability in dense data sets.
     *
     * @default false
     */
    alternatingRows?: boolean | undefined;
    /**
     * Overrides the default empty-state error display content.
     *
     * Provide this when you need custom empty-state title, description, or
     * related attributes.
     *
     * @see ErrorDisplayAttributes for available options.
     * @default undefined
     */
    emptyView?: ErrorDisplayAttributes | undefined;
    /**
     * Returns a fully custom empty-state view.
     *
     * When provided, this takes precedence over `emptyView`.
     *
     * @default undefined
     */
    renderCustomEmptyView?: (() => ReactNode) | undefined;
}

/**
 * Available table load states.
 */
export type LoadStateType = "loading" | "success";

/**
 * Available sort indicator directions for a column.
 */
export type SortIndicatorType = "asc" | "desc";

/**
 * Sort indicator state keyed by table column field key.
 */
export interface SortIndicatorsProps {
    [fieldKey: string]: SortIndicatorType;
}

/**
 * When a string is specified, it will be used as the header label and
 * the key of the value in the row item object.
 *
 * For additional customisation, pass a `HeaderItemProps` object
 */
export type HeaderProps = string | HeaderItemProps;

/**
 * Configuration for a DataTable header item.
 */
export interface HeaderItemProps {
    /**
     * Identifies the row field rendered in this column.
     *
     * This value must match a key on each row object.
     */
    fieldKey: string;
    /**
     * Sets the visible header content for the column.
     *
     * Use a string for standard text headers or a custom node for advanced
     * formatting.
     */
    label: string | ReactNode;
    /**
     * Makes the header cell interactive and clickable.
     *
     * When enabled, clicking the header calls `onHeaderClick` with this
     * column's `fieldKey`.
     *
     * @default false
     */
    clickable?: boolean | undefined;
    /**
     * Applies inline styles to header and corresponding body cells.
     *
     * Use this mainly for sizing and layout adjustments such as fixed widths.
     *
     * @default undefined
     */
    style?: CSSProperties | undefined;
}

/**
 * Data model for a rendered table row.
 *
 * Each row must have a unique `id`. Additional keys should correspond to the
 * `fieldKey` values from `headers`.
 */
export interface RowProps {
    /**
     * Uniquely identifies the row.
     */
    id: string | number;
    /**
     * Provides column values by `fieldKey`.
     *
     * Values can be primitives, React nodes, or a render function for dynamic
     * cell content.
     */
    [fieldKey: string]:
        | string
        | number
        | ReactNode
        | ((row: RowProps, renderProps: RowRenderProps) => ReactNode)
        | undefined;
}

interface RowRenderProps {
    isSelected: boolean;
}
