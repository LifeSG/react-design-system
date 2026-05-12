import clsx from "clsx";

import * as styles from "./table.styles";

const Head = ({
    children,
    ...props
}: React.HTMLAttributes<HTMLTableSectionElement>) => (
    <thead {...props}>{children}</thead>
);
Head.displayName = "Table.Head";

const Body = ({
    children,
    className,
    ...props
}: React.HTMLAttributes<HTMLTableSectionElement>) => (
    <tbody className={clsx(styles.tableBody, className)} {...props}>
        {children}
    </tbody>
);
Body.displayName = "Table.Body";

const Row = ({
    children,
    className,
    ...props
}: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr className={clsx(styles.bodyRow, className)} {...props}>
        {children}
    </tr>
);
Row.displayName = "Table.Row";

const Cell = ({
    children,
    className,
    ...props
}: React.TdHTMLAttributes<HTMLTableCellElement>) => (
    <td className={clsx(styles.bodyCell, className)} {...props}>
        {children}
    </td>
);
Cell.displayName = "Table.Cell";

const Header = ({
    children,
    className,
    ...props
}: React.ThHTMLAttributes<HTMLTableCellElement>) => (
    <th className={clsx(styles.headerCell, className)} {...props}>
        {children}
    </th>
);
Header.displayName = "Table.HeaderCell";

const Container = ({
    children,
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
    <div
        className={clsx(styles.tableWrapper, className)}
        data-testid="table-wrapper"
        {...props}
    >
        {children}
    </div>
);
Container.displayName = "Table.Container";

const TableEl = ({
    children,
    className,
    ...props
}: React.TableHTMLAttributes<HTMLTableElement>) => (
    <table className={clsx(styles.tableComponent, className)} {...props}>
        {children}
    </table>
);
TableEl.displayName = "Table.Table";

export const Table = Object.assign(
    ({ children, ...props }: React.TableHTMLAttributes<HTMLTableElement>) => (
        <Container>
            <TableEl {...props}>{children}</TableEl>
        </Container>
    ),
    {
        Container,
        Table: TableEl,
        Head,
        Body,
        Row,
        Cell,
        HeaderCell: Header,
    }
);
