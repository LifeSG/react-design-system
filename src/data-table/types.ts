import { CSSProperties, ReactNode } from "react";

export interface IDataTableProps {
    testid?: string | undefined;
    headersConfig?: IHeadersConfigProps | undefined;
    headers: THeaderProps[];
    rowsConfig?: IRowsConfigProps | undefined;
    rows?: IRowProps[] | undefined;
    className?: string | undefined; // css class to put on table
    selectionConfig?: ISelectionConfigProps | undefined;
    selection?: string[] | undefined; // ids of all selected rows
    sortIndicators?: ISortIndicatorsProps | undefined; // columns that want to show a sort indicator
    actionsConfig?: IActionsConfigProps | undefined;
    alternatingRows?: boolean | undefined;
    customEmptyView?: () => ReactNode | string | undefined;
    isLoadingData: boolean | undefined;
}

export enum SortIndicatorProps {
    ASC = "asc",
    DESC = "desc",
}

export interface ISortIndicatorsProps {
    [colId: string]: SortIndicatorProps;
}

export interface IHeadersConfigProps {
    className?: string | undefined; // css class to put on header row
    onClickHeader?: ((colId: string) => void) | undefined;
}

export type THeaderProps =
    | string // label text. Rest defaults to colId=label, clickable=false
    | IHeaderProps;
interface IHeaderProps {
    colId: string;
    label: string | ReactNode; // (technically ReactNode also includes string, but this makes it more obvious for devs)
    clickable?: boolean | undefined;
    className?: string | undefined; // css class to put on this header cell
    style?: CSSProperties | undefined;
}

export interface IRowsConfigProps {
    className?: string | undefined; // css class to put on each row
    alternatingClassName?: string | undefined;
}

export interface IRowProps {
    id: string | number;
    [colId: string]: string | number | ReactNode; // data with keys matching colId
}

export interface ISelectionConfigProps {
    showCheckboxes: boolean;
    showHeaderCheckbox?: boolean | undefined;
    onClickSelect?:
        | ((colId: string, rowId: string, isSelected: boolean) => void)
        | undefined;
    onClickSelectAll?: ((isSelected: boolean) => void) | undefined;
    className?: string | undefined; // css class to add to each cell containing the checkbox
    headerClassName?: string | undefined; // css class to add to the header cell
    headerWidth?: string | undefined;
}

export interface IActionsConfigProps {
    showActions: boolean;
    className?: string | undefined;
    headerClassName?: string | undefined;
    headerLabel?: string | ReactNode | undefined;
    actions?: ((row: IRowProps, isSelected: boolean) => ReactNode) | undefined;
    headerWidth?: string | undefined;
}
