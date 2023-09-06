import { CSSProperties, ReactNode } from "react";
import { ErrorDisplayAttributes } from "../error-display/types";

export interface DataTableProps {
    id?: string | undefined;
    "data-testid"?: string | undefined;
    headers: HeaderProps[];
    rows?: RowProps[] | undefined;
    /** css class to put on table **/
    className?: string | undefined;
    selectedIds?: string[] | undefined;
    disabledIds?: string[] | undefined;
    /** enable checkboxes */
    enableMultiSelect?: boolean | undefined;
    /** display select all checkbox */
    enableSelectAll?: boolean | undefined;
    /** display action bar */
    enableSelectionBar?: boolean | undefined;
    selectionBarContent?: (() => ReactNode) | undefined;
    onSelect?: ((rowId: string, isSelected: boolean) => void) | undefined;
    onSelectAll?: ((isSelected: boolean) => void) | undefined;
    onHeaderClick?: ((fieldKey: string) => void) | undefined;
    onClearSelectionClick?: (() => void) | undefined;
    /** columns that want to show a sort indicator **/
    sortIndicators?: SortIndicatorsProps | undefined;
    alternatingRows?: boolean | undefined;
    renderCustomEmptyView?: (() => ReactNode) | undefined;
    loadState?: LoadStateType | undefined;
    emptyView?: ErrorDisplayAttributes | undefined;
}

export type LoadStateType = "loading" | "success";

export type SortIndicatorType = "asc" | "desc";

export interface SortIndicatorsProps {
    [fieldKey: string]: SortIndicatorType;
}

/** label text. Rest defaults to fieldKey=label, clickable=false **/
export type HeaderProps = string | HeaderItemProps;
interface HeaderItemProps {
    fieldKey: string;
    /** (technically ReactNode also includes string, but this makes it more obvious for devs) **/
    label: string | ReactNode;
    clickable?: boolean | undefined;
    style?: CSSProperties | undefined;
}

export interface RowProps {
    id: string | number;
    /** data with keys matching fieldKey **/
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
