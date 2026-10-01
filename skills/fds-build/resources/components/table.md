# Table

Import: `import { Table } from "@lifesg/react-design-system/table"`

## When to use

-   Displaying read-only structured data with no sorting, selection, or pagination needed.
-   Use `DataTable` instead when you need sortable columns, row selection, or pagination controls.

## Composition

`Table` is a thin styled wrapper over semantic HTML table elements:

| Sub-component      | Renders as             |
| ------------------ | ---------------------- |
| `Table.Container`  | `<div>` scroll wrapper |
| `Table`            | `<table>`              |
| `Table.Head`       | `<thead>`              |
| `Table.Body`       | `<tbody>`              |
| `Table.Row`        | `<tr>`                 |
| `Table.HeaderCell` | `<th>`                 |
| `Table.Cell`       | `<td>`                 |

Always wrap with `Table.Container` so the table scrolls horizontally on narrow viewports.

## Usage

```tsx
import { Table } from "@lifesg/react-design-system/table";
import { Typography } from "@lifesg/react-design-system/typography";

const ServiceTable = () => (
    <Table.Container>
        <Table>
            <Table.Head>
                <Table.Row>
                    <Table.HeaderCell>Service</Table.HeaderCell>
                    <Table.HeaderCell>Status</Table.HeaderCell>
                    <Table.HeaderCell>Last updated</Table.HeaderCell>
                </Table.Row>
            </Table.Head>
            <Table.Body>
                <Table.Row>
                    <Table.Cell>MyService</Table.Cell>
                    <Table.Cell>Active</Table.Cell>
                    <Table.Cell>1 Jan 2024</Table.Cell>
                </Table.Row>
            </Table.Body>
        </Table>
    </Table.Container>
);
```

## Rules

-   Always wrap in `Table.Container` — it provides horizontal scroll on small viewports.
-   Use `Table.HeaderCell` (`<th>`) for column headers, not `Table.Cell`.
-   Use `DataTable` for sortable, selectable, or paginated tables — `Table` is read-only only.
-   All props pass through to the underlying HTML element — use `style` or `className` for custom layout only when DS tokens don't cover the need.

## Anti-patterns

-   Do not use `Table` when rows need to be selected or sorted — use `DataTable`.
-   Do not nest tables.
-   Do not omit `Table.Container` — the table will overflow on mobile without it.
