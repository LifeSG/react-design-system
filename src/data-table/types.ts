import { CSSProperties, ReactNode } from "react";

export interface IDataTableProps {
    testid?: string;
    headersConfig?: IHeadersConfig;
    headers: THeader[];
    rowsConfig?: IRowsConfig;
    rows: IRow[];
    className?: string; // css class to put on table
    selectionConfig?: ISelectionConfig;
    selection?: string[]; // ids of all selected rows
    sortIndicators?: ISortIndicators; // columns that want to show a sort indicator
    actionsConfig?: IActionsConfig;
    alternatingRows?: boolean;
    customEmptyView?: () => ReactNode | string;
    isLoadingData: boolean;
}

export enum SortIndicator {
    ASC = "asc",
    DESC = "desc",
}

export interface ISortIndicators {
    [colId: string]: SortIndicator;
}

export interface IHeadersConfig {
    className?: string; // css class to put on header row
    onClickHeader?: (colId: string) => void;
}

export type THeader =
    | string // label text. Rest defaults to colId=label, clickable=false
    | IHeader;
interface IHeader {
    colId: string;
    label: string | ReactNode; // (technically ReactNode also includes string, but this makes it more obvious for devs)
    clickable?: boolean;
    className?: string; // css class to put on this header cell
    style?: CSSProperties | undefined;
}

export interface IRowsConfig {
    className?: string; // css class to put on each row
    alternatingClassName?: string;
}

export interface IRow {
    id: string | number;
    [colId: string]: string | number | ReactNode; // data with keys matching colId
}

export interface ISelectionConfig {
    showCheckboxes: boolean;
    showHeaderCheckbox?: boolean;
    onClickSelect?: (colId: string, rowId: string, isSelected: boolean) => void;
    onClickSelectAll?: (isSelected: boolean) => void;
    className?: string; // css class to add to each cell containing the checkbox
    headerClassName?: string; // css class to add to the header cell
    headerWidth?: string;
}

export interface IActionsConfig {
    showActions: boolean;
    className?: string;
    headerClassName?: string;
    headerLabel?: string | ReactNode;
    actions?: (row: IRow, isSelected: boolean) => ReactNode;
    headerWidth?: string;
}
