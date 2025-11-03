import { CSSProperties, ReactNode } from "react";
import { ErrorDisplayAttributes } from "../error-display/types";

export interface DataTableProps {
    /** The unique identifier of the component */
    id?: string | undefined;
    /** The test identifier of the component */
    "data-testid"?: string | undefined;
    /** The configuration for each header column */
    headers: HeaderProps[];
    /** The list of data */
    rows?: RowProps[] | undefined;
    /** The class selector of the component */
    className?: string | undefined;
    /** The ids of selected items */
    selectedIds?: string[] | undefined;
    /** The ids of disabled items */
    disabledIds?: string[] | undefined;
    /** Enables a checkbox in each row for multi-selection */
    enableMultiSelect?: boolean | undefined;
    /** Enables a checkbox in the header to select all rows or clear the current selection */
    enableSelectAll?: boolean | undefined;
    /** Specifies if an action bar is visible when one or more rows are selected */
    enableActionBar?: boolean | undefined;
    /** Specifies if the header is fixed to the top */
    enableStickyHeader?: boolean | undefined;
    /** Custom content to be rendered within the action bar */
    actionBarContent?: ReactNode | undefined;
    /** Specifies the table load state. Displays an animation when the table is loading. (default: "success") */
    loadState?: LoadStateType | undefined;
    /** Called when a row is selected */
    onSelect?: ((rowId: string, isSelected: boolean) => void) | undefined;
    /** Called when all rows are selected, with the current selection state */
    onSelectAll?: ((isAllSelected: boolean) => void) | undefined;
    /** Called with the corresponding column field key when a header is clicked */
    onHeaderClick?: ((fieldKey: string) => void) | undefined;
    /** Called when clear button in the action bar is clicked */
    onClearSelectionClick?: (() => void) | undefined;
    /** The sort indicator display state for each column */
    sortIndicators?: SortIndicatorsProps | undefined;
    /** Specifies if every alternate row has a different background colour */
    alternatingRows?: boolean | undefined;
    /** Override props for the empty view display */
    emptyView?: ErrorDisplayAttributes | undefined;
    /** Returns a custom view to be rendered when the table is empty */
    renderCustomEmptyView?: (() => ReactNode) | undefined;
}

export type LoadStateType = "loading" | "success";

export type SortIndicatorType = "asc" | "desc";

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

export interface HeaderItemProps {
    /** The name of the corresponding key in the row item object */
    fieldKey: string;
    /** The display label for the column header (string or custom React node) */
    label: string | ReactNode;
    /** Specifies if the column header is clickable. When true, `onHeaderClick` will be called when the cell is clicked */
    clickable?: boolean | undefined;
    /** Specifies custom styles for the column header cell */
    style?: CSSProperties | undefined;
}

export interface RowProps {
    /** Row id */
    id: string | number;
    /** Other properties on the row item object. Keys should match `fieldKey` in `HeaderProps`. Values can be primitive, ReactNode, or a render function receiving (row, renderProps). */
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
