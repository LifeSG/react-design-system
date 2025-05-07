import { CSSProperties, ReactNode } from "react";
import { ErrorDisplayAttributes } from "../error-display/types";
export interface DataTableProps {
    id?: string | undefined;
    "data-testid"?: string | undefined;
    /** Configuration for each header */
    headers: HeaderProps[];
    rows?: RowProps[] | undefined;
    className?: string | undefined;
    selectedIds?: string[] | undefined;
    disabledIds?: string[] | undefined;
    /** Enables a checkbox for each row */
    enableMultiSelect?: boolean | undefined;
    /** Enables a select all checkbox */
    enableSelectAll?: boolean | undefined;
    /** Specifies if an action bar is visible when one or more rows are selected */
    enableActionBar?: boolean | undefined;
    /** Specifies if the header is fixed to the top */
    enableStickyHeader?: boolean | undefined;
    /** Custom content to be rendered within the action bar */
    actionBarContent?: ReactNode | undefined;
    loadState?: LoadStateType | undefined;
    onSelect?: ((rowId: string, isSelected: boolean) => void) | undefined;
    onSelectAll?: ((isAllSelected: boolean) => void) | undefined;
    onHeaderClick?: ((fieldKey: string) => void) | undefined;
    onClearSelectionClick?: (() => void) | undefined;
    /** Specifies the sort indicator display state for each column **/
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
interface HeaderItemProps {
    fieldKey: string;
    label: string | ReactNode;
    clickable?: boolean | undefined;
    style?: CSSProperties | undefined;
}
export interface RowProps {
    id: string | number;
    /** data with key matching fieldKey in `HeaderProps` */
    [fieldKey: string]: string | number | ReactNode | ((row: RowProps, renderProps: RowRenderProps) => ReactNode) | undefined;
}
interface RowRenderProps {
    isSelected: boolean;
}
export {};
