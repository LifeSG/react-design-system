import {
    BodyCell,
    BodyRow,
    HeaderCell,
    TableBody,
    TableComponent,
    TableWrapper,
} from "./table.styles";

const Head = ({
    children,
    ...props
}: React.HTMLAttributes<HTMLTableSectionElement>) => (
    <thead {...props}>{children}</thead>
);
Head.displayName = "Table.Head";

const Body = ({
    children,
    ...props
}: React.HTMLAttributes<HTMLTableSectionElement>) => (
    <TableBody {...props}>{children}</TableBody>
);
Body.displayName = "Table.Body";

const Row = ({
    children,
    ...props
}: React.HTMLAttributes<HTMLTableRowElement>) => (
    <BodyRow {...props}>{children}</BodyRow>
);
Row.displayName = "Table.Row";

const Cell = ({
    children,
    ...props
}: React.TdHTMLAttributes<HTMLTableCellElement>) => (
    <BodyCell {...props}>{children}</BodyCell>
);
Cell.displayName = "Table.Cell";

const Header = ({
    children,
    ...props
}: React.ThHTMLAttributes<HTMLTableCellElement>) => (
    <HeaderCell {...props}>{children}</HeaderCell>
);
Header.displayName = "Table.HeaderCell";

export const Table = Object.assign(
    ({ children, ...props }: React.TableHTMLAttributes<HTMLTableElement>) => (
        <TableWrapper>
            <TableComponent {...props}>{children}</TableComponent>
        </TableWrapper>
    ),
    {
        Container: TableWrapper,
        Table: TableComponent,
        Head,
        Body,
        Row,
        Cell,
        HeaderCell: Header,
    }
);
