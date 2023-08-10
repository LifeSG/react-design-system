import { CSSProperties, ReactNode } from "react";

export interface IDataTableProps {
    testid?: string;
    headersConfig?: IHeadersConfigProps;
    headers: THeaderProps[];
    rowsConfig?: IRowsConfigProps;
    rows: IRowProps[];
    className?: string; // css class to put on table
    selectionConfig?: ISelectionConfigProps;
    selection?: string[]; // ids of all selected rows
    sortIndicators?: ISortIndicatorsProps; // columns that want to show a sort indicator
    actionsConfig?: IActionsConfigProps;
    alternatingRows?: boolean;
    customEmptyView?: () => ReactNode | string;
    isLoadingData: boolean;
}

export enum SortIndicatorProps {
    ASC = "asc",
    DESC = "desc",
}

export interface ISortIndicatorsProps {
    [colId: string]: SortIndicatorProps;
}

export interface IHeadersConfigProps {
    className?: string; // css class to put on header row
    onClickHeader?: (colId: string) => void;
}

export type THeaderProps =
    | string // label text. Rest defaults to colId=label, clickable=false
    | IHeaderProps;
interface IHeaderProps {
    colId: string;
    label: string | ReactNode; // (technically ReactNode also includes string, but this makes it more obvious for devs)
    clickable?: boolean;
    className?: string; // css class to put on this header cell
    style?: CSSProperties | undefined;
}

export interface IRowsConfigProps {
    className?: string; // css class to put on each row
    alternatingClassName?: string;
}

export interface IRowProps {
    id: string | number;
    [colId: string]: string | number | ReactNode; // data with keys matching colId
}

export interface ISelectionConfigProps {
    showCheckboxes: boolean;
    showHeaderCheckbox?: boolean;
    onClickSelect?: (colId: string, rowId: string, isSelected: boolean) => void;
    onClickSelectAll?: (isSelected: boolean) => void;
    className?: string; // css class to add to each cell containing the checkbox
    headerClassName?: string; // css class to add to the header cell
    headerWidth?: string;
}

export interface IActionsConfigProps {
    showActions: boolean;
    className?: string;
    headerClassName?: string;
    headerLabel?: string | ReactNode;
    actions?: (row: IRowProps, isSelected: boolean) => ReactNode;
    headerWidth?: string;
}
