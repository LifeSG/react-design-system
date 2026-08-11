import type { TableBodyProps, TableCellProps, TableContainerProps, TableHeaderProps, TableHeadProps, TableRowProps, TableTableProps } from "./types";
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
export declare const Table: (({ children, ...props }: TableTableProps) => import("react/jsx-runtime").JSX.Element) & {
    /** Scrollable wrapper div that contains a `Table.Table`. */
    Container: {
        ({ children, className, ...props }: TableContainerProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    /** The bare `<table>` element. Use directly when you need to place the table inside a custom container. */
    Table: {
        ({ children, className, ...props }: TableTableProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    /** Renders the `<thead>` section of the table. */
    Head: {
        ({ children, ...props }: TableHeadProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    /** Renders the `<tbody>` section of the table. */
    Body: {
        ({ children, className, ...props }: TableBodyProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    /** Renders a `<tr>` row within a `Table.Body`. */
    Row: {
        ({ children, className, ...props }: TableRowProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    /** Renders a `<td>` data cell within a `Table.Row`. */
    Cell: {
        ({ children, className, ...props }: TableCellProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    /** Renders a `<th>` header cell within a `Table.Head` row. */
    HeaderCell: {
        ({ children, className, ...props }: TableHeaderProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
};
