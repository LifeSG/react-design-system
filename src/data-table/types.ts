import { CSSProperties, ReactNode } from "react";

export interface DataTableProps {
    id?: string | undefined;
    "data-testid"?: string | undefined;
    headersConfig?: HeadersConfigProps | undefined;
    headers: HeaderProps[];
    rowsConfig?: RowsConfigProps | undefined;
    rows?: RowProps[] | undefined;
    /** css class to put on table **/
    className?: string | undefined;
    selectionConfig?: SelectionConfigProps | undefined;
    /** ids of all selected rows **/
    selection?: string[] | undefined;
    /** columns that want to show a sort indicator **/
    sortIndicators?: SortIndicatorsProps | undefined;
    actionsConfig?: ActionsConfigProps | undefined;
    alternatingRows?: boolean | undefined;
    customEmptyView?: () => ReactNode | string | undefined;
    loadState: LoadingType | undefined;
}

export type LoadingType = "loading" | "success" | "error";

export type SortIndicatorProps = "asc" | "desc";

export interface SortIndicatorsProps {
    [fieldKey: string]: SortIndicatorProps;
}

export interface HeadersConfigProps {
    /** css class to put on header row **/
    className?: string | undefined;
    onClickHeader?: ((fieldKey: string) => void) | undefined;
}

/** label text. Rest defaults to fieldKey=label, clickable=false **/
export type HeaderProps = string | HeaderItemProps;
interface HeaderItemProps {
    fieldKey: string;
    /** (technically ReactNode also includes string, but this makes it more obvious for devs) **/
    label: string | ReactNode;
    clickable?: boolean | undefined;
    /** css class to put on this header cell **/
    className?: string | undefined;
    style?: CSSProperties | undefined;
}

export interface RowsConfigProps {
    /** css class to put on each row **/
    className?: string | undefined;
    alternatingClassName?: string | undefined;
}

export interface RowProps {
    id: string | number;
    /** data with keys matching fieldKey **/
    [fieldKey: string]: string | number | ReactNode;
}

export interface SelectionConfigProps {
    showCheckboxes: boolean;
    showHeaderCheckbox?: boolean | undefined;
    onClickSelect?:
        | ((fieldKey: string, rowId: string, isSelected: boolean) => void)
        | undefined;
    onClickSelectAll?: ((isSelected: boolean) => void) | undefined;
    /** css class to add to each cell containing the checkbox **/
    className?: string | undefined;
    /** css class to add to the header cell **/
    headerClassName?: string | undefined;
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
