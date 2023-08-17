import { CSSProperties, ReactNode } from "react";

export interface DataTableProps {
    id?: string | undefined;
    "data-testid"?: string | undefined;
    headersConfig?: HeadersConfigProps | undefined;
    headers: HeaderProps[];
    rowsConfig?: RowsConfigProps | undefined;
    rows?: RowProps[] | undefined;
    className?: string | undefined; // css class to put on table
    selectionConfig?: SelectionConfigProps | undefined;
    selection?: string[] | undefined; // ids of all selected rows
    sortIndicators?: SortIndicatorsProps | undefined; // columns that want to show a sort indicator
    actionsConfig?: ActionsConfigProps | undefined;
    alternatingRows?: boolean | undefined;
    customEmptyView?: () => ReactNode | string | undefined;
    loadState: LoadingType | undefined;
}

export type LoadingType = "loading" | "success" | "error";

export type SortIndicatorProps = "asc" | "desc" | undefined;

export interface SortIndicatorsProps {
    [fieldKey: string]: SortIndicatorProps;
}

export interface HeadersConfigProps {
    className?: string | undefined; // css class to put on header row
    onClickHeader?: ((fieldKey: string) => void) | undefined;
}

export type HeaderProps =
    | string // label text. Rest defaults to fieldKey=label, clickable=false
    | HeaderItemProps;
interface HeaderItemProps {
    fieldKey: string;
    label: string | ReactNode; // (technically ReactNode also includes string, but this makes it more obvious for devs)
    clickable?: boolean | undefined;
    className?: string | undefined; // css class to put on this header cell
    style?: CSSProperties | undefined;
}

export interface RowsConfigProps {
    className?: string | undefined; // css class to put on each row
    alternatingClassName?: string | undefined;
}

export interface RowProps {
    id: string | number;
    [fieldKey: string]: string | number | ReactNode; // data with keys matching fieldKey
}

export interface SelectionConfigProps {
    showCheckboxes: boolean;
    showHeaderCheckbox?: boolean | undefined;
    onClickSelect?:
        | ((fieldKey: string, rowId: string, isSelected: boolean) => void)
        | undefined;
    onClickSelectAll?: ((isSelected: boolean) => void) | undefined;
    className?: string | undefined; // css class to add to each cell containing the checkbox
    headerClassName?: string | undefined; // css class to add to the header cell
    headerWidth?: string | undefined;
}

export interface ActionsConfigProps {
    showActions: boolean;
    className?: string | undefined;
    headerClassName?: string | undefined;
    headerLabel?: string | ReactNode | undefined;
    actions?: ((row: RowProps, isSelected: boolean) => ReactNode) | undefined;
    headerWidth?: string | undefined;
}
