import type { CSSProperties, ReactNode } from "react";

import type { ErrorDisplayAttributes } from "../error-display/types";

/** Props for the `DataTable` component. */
export interface DataTableProps {
    id?: string | undefined;
    "data-testid"?: string | undefined;
    /** Column definitions that determine the rendered headers and the `fieldKey` used to read values from each `RowProps` entry. */
    headers: HeaderProps[];
    /** Row data to render. When omitted or empty the empty state is shown. */
    rows?: RowProps[] | undefined;
    className?: string | undefined;
    /**
     * Controlled set of row IDs that are currently selected.
     *
     * @remarks Must be provided alongside `enableMultiSelect` for selection to work. Pass an
     * empty array (not `undefined`) to enable the select-all checkbox while having no rows
     * selected.
     */
    selectedIds?: string[] | undefined;
    /** Row IDs whose checkboxes are rendered in a disabled state; the rows remain visible. */
    disabledIds?: string[] | undefined;
    /** Renders a checkbox column as the first column of each row to support row selection. */
    enableMultiSelect?: boolean | undefined;
    /** Renders a select-all checkbox in the header checkbox column. Requires `enableMultiSelect`. */
    enableSelectAll?: boolean | undefined;
    /** Shows the action bar whenever one or more rows are selected. */
    enableActionBar?: boolean | undefined;
    /** Keeps the header row visible as the user scrolls down through the table. */
    enableStickyHeader?: boolean | undefined;
    /** Additional content rendered inside the action bar. */
    actionBarContent?: ReactNode | undefined;
    /**
     * Controls whether the table body renders data rows or a loading indicator.
     * @default "success"
     */
    loadState?: LoadStateType | undefined;
    /** Called when a row's checkbox is toggled; receives the row ID and the new selected state. */
    onSelect?: ((rowId: string, isSelected: boolean) => void) | undefined;
    /**
     * Called when the select-all checkbox is toggled.
     */
    onSelectAll?: ((isAllSelected: boolean) => void) | undefined;
    /** Called when a header cell is clicked; receives the `fieldKey` of the clicked column. */
    onHeaderClick?: ((fieldKey: string) => void) | undefined;
    /** Called when the "Clear selection" button inside the action bar is clicked. */
    onClearSelectionClick?: (() => void) | undefined;
    /**
     * Maps each `fieldKey` to its current sort direction. A key present in this map causes the
     * corresponding header to render a directional arrow and expose sort controls to assistive
     * technology.
     */
    sortIndicators?: SortIndicatorsProps | undefined;
    /** Applies an alternate background colour to every odd-indexed row. */
    alternatingRows?: boolean | undefined;
    /**
     * Overrides the title and description shown in the built-in empty state. Ignored when
     * `renderCustomEmptyView` is provided.
     */
    emptyView?: ErrorDisplayAttributes | undefined;
    /** Renders a fully custom empty state in place of the default `ErrorDisplay`. */
    renderCustomEmptyView?: (() => ReactNode) | undefined;
}

/** Whether the table body is in a loading or data-ready state. */
export type LoadStateType = "loading" | "success";

/** Direction of a column sort indicator. */
export type SortIndicatorType = "asc" | "desc";

/** Maps column `fieldKey` values to their current sort direction. */
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
 * Full object form of a column header definition;
 * use instead of a plain string when custom labels, click handling,
 * or accessibility metadata is needed. */
interface HeaderItemProps {
    /** Key used to read the corresponding cell value from each `RowProps` entry. */
    fieldKey: string;
    /** Column heading content. Pass a string for plain text or a `ReactNode` for custom markup. */
    label: string | ReactNode;
    /** Makes the header cell interactive, firing `onHeaderClick` when clicked. */
    clickable?: boolean | undefined;
    /**
     * Used with `enableMultiSelect`. Marks this column as descriptive of the row
     * (e.g. a name or unique ID). Its value is used to label the row's checkbox
     * for screen readers.
     */
    keyColumn?: boolean | undefined;
    style?: CSSProperties | undefined;
}

/** Props for each row of data in the table. */
export interface RowProps {
    /** Unique identifier for the row; used as the key and referenced by `selectedIds`/`disabledIds`. */
    id: string | number;
    /**
     * Cell values keyed by the `fieldKey` of the matching `HeaderProps`. Values can be a
     * primitive (rendered inside a `Typography.BodyBL`), a `ReactNode`, or a render function
     * that receives the full row and `RowRenderProps`.
     */
    [fieldKey: string]:
        | string
        | number
        | ReactNode
        | ((row: RowProps, renderProps: RowRenderProps) => ReactNode)
        | undefined;
}

/** Runtime context passed to a cell's render function when the value is a function. */
interface RowRenderProps {
    /** Whether the row is currently in the `selectedIds` set. */
    isSelected: boolean;
}
