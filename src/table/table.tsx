import clsx from "clsx";

import * as styles from "./table.styles";
import type {
    TableBodyProps,
    TableCellProps,
    TableContainerProps,
    TableHeaderProps,
    TableHeadProps,
    TableRowProps,
    TableTableProps,
} from "./types";

const Head = ({ children, ...props }: TableHeadProps) => (
    <thead {...props}>{children}</thead>
);
Head.displayName = "Table.Head";

const Body = ({ children, className, ...props }: TableBodyProps) => (
    <tbody className={clsx(styles.tableBody, className)} {...props}>
        {children}
    </tbody>
);
Body.displayName = "Table.Body";

const Row = ({ children, className, ...props }: TableRowProps) => (
    <tr className={clsx(styles.bodyRow, className)} {...props}>
        {children}
    </tr>
);
Row.displayName = "Table.Row";

const Cell = ({ children, className, ...props }: TableCellProps) => (
    <td className={clsx(styles.bodyCell, className)} {...props}>
        {children}
    </td>
);
Cell.displayName = "Table.Cell";

const Header = ({ children, className, ...props }: TableHeaderProps) => (
    <th className={clsx(styles.headerCell, className)} {...props}>
        {children}
    </th>
);
Header.displayName = "Table.HeaderCell";

const Container = ({ children, className, ...props }: TableContainerProps) => (
    <div
        className={clsx(styles.tableWrapper, className)}
        data-testid="table-wrapper"
        {...props}
    >
        {children}
    </div>
);
Container.displayName = "Table.Container";

const TableEl = ({ children, className, ...props }: TableTableProps) => (
    <table className={clsx(styles.tableComponent, className)} {...props}>
        {children}
    </table>
);
TableEl.displayName = "Table.Table";

/**
 * A styled HTML table with a scrollable container wrapper.
 *
 * Use `Table` when displaying structured tabular data. The default export
 * wraps content in `Table.Container` and `Table.Table` automatically. For
 * full layout control, compose the sub-components directly:
 * - `Table.Container` — scrollable wrapper div
 * - `Table.Table` — the bare `<table>` element
 * - `Table.Head` — the `<thead>` section
 * - `Table.Body` — the `<tbody>` section
 * - `Table.Row` — a `<tr>` row within the body
 * - `Table.Cell` — a `<td>` data cell
 * - `Table.HeaderCell` — a `<th>` column header cell
 */
export const Table = Object.assign(
    ({ children, ...props }: TableTableProps) => (
        <Container>
            <TableEl {...props}>{children}</TableEl>
        </Container>
    ),
    {
        /** Scrollable wrapper div that contains a `Table.Table`. */
        Container,
        /** The bare `<table>` element. Use directly when you need to place the table inside a custom container. */
        Table: TableEl,
        /** Renders the `<thead>` section of the table. */
        Head,
        /** Renders the `<tbody>` section of the table. */
        Body,
        /** Renders a `<tr>` row within a `Table.Body`. */
        Row,
        /** Renders a `<td>` data cell within a `Table.Row`. */
        Cell,
        /** Renders a `<th>` header cell within a `Table.Head` row. */
        HeaderCell: Header,
    }
);
