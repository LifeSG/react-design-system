import {
    BodyCell,
    BodyRow,
    HeaderCell,
    TableBody,
    TableComponent,
    TableWrapper,
} from "./table.styles";

export const Table = Object.assign(
    ({ children, ...props }: React.TableHTMLAttributes<HTMLTableElement>) => (
        <TableWrapper>
            <TableComponent {...props}>{children}</TableComponent>
        </TableWrapper>
    ),
    {
        Container: TableWrapper,
        Table: TableComponent,
        Head: ({
            children,
            ...props
        }: React.HTMLAttributes<HTMLTableSectionElement>) => (
            <thead {...props}>{children}</thead>
        ),
        Body: ({
            children,
            ...props
        }: React.HTMLAttributes<HTMLTableSectionElement>) => (
            <TableBody {...props}>{children}</TableBody>
        ),
        Row: ({
            children,
            ...props
        }: React.HTMLAttributes<HTMLTableRowElement>) => (
            <BodyRow {...props}>{children}</BodyRow>
        ),
        Cell: ({
            children,
            ...props
        }: React.TdHTMLAttributes<HTMLTableCellElement>) => (
            <BodyCell {...props}>{children}</BodyCell>
        ),
        HeaderCell: ({
            children,
            ...props
        }: React.ThHTMLAttributes<HTMLTableCellElement>) => (
            <HeaderCell {...props}>{children}</HeaderCell>
        ),
    }
);
