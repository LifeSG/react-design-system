# DataTable

Import: `import { DataTable } from "@lifesg/react-design-system/data-table"`

## When to use

-   Displaying tabular data with optional sorting, row selection, and custom cell rendering.
-   Use `enableMultiSelect` + `enableSelectAll` when users need to act on multiple rows at once.

## Usage

### Column definitions, sorting, selection, and custom cell rendering

```tsx
import { useState, useMemo } from "react";
import {
    DataTable,
    SortIndicatorsProps,
} from "@lifesg/react-design-system/data-table";
import { Pill } from "@lifesg/react-design-system/pill";

const rows = [
    { id: "1", name: "Alice", status: "active", score: 90 },
    { id: "2", name: "Bob", status: "inactive", score: 72 },
    { id: "3", name: "Carol", status: "active", score: 85 },
];

const Example = () => {
    const [selectedIds, setSelectedIds] = useState<string[]>([]);
    const [sortState, setSortState] = useState<SortIndicatorsProps>({
        score: "desc",
    });

    // onSelect: toggle a single row id
    const handleSelect = (rowId: string, isSelected: boolean) => {
        setSelectedIds((prev) =>
            isSelected ? [...prev, rowId] : prev.filter((id) => id !== rowId)
        );
    };

    // onSelectAll: isAllSelected=true means "clear all"; false means "select all"
    const handleSelectAll = (isAllSelected: boolean) => {
        setSelectedIds(isAllSelected ? [] : rows.map((r) => r.id));
    };

    const handleHeaderClick = (fieldKey: string) => {
        if (fieldKey === "score") {
            setSortState({ score: sortState.score === "asc" ? "desc" : "asc" });
        }
    };

    const sorted = useMemo(
        () =>
            [...rows].sort((a, b) =>
                sortState.score === "asc"
                    ? a.score - b.score
                    : b.score - a.score
            ),
        [sortState]
    );

    return (
        <DataTable
            headers={[
                { fieldKey: "name", label: "Name", keyColumn: true },
                { fieldKey: "status", label: "Status" },
                { fieldKey: "score", label: "Score", clickable: true },
            ]}
            rows={sorted.map((row) => ({
                ...row,
                // custom cell: render status as a Pill
                status: <Pill type="outline">{row.status}</Pill>,
            }))}
            selectedIds={selectedIds}
            disabledIds={["2"]}
            sortIndicators={sortState}
            enableMultiSelect
            enableSelectAll
            onSelect={handleSelect}
            onSelectAll={handleSelectAll}
            onHeaderClick={handleHeaderClick}
        />
    );
};
```

## Props

| Prop                    | Type                                           | Default     | Description                                               |
| ----------------------- | ---------------------------------------------- | ----------- | --------------------------------------------------------- |
| `headers` \*            | `(string \| HeaderItemProps)[]`                | —           | Configuration for each header column                      |
| `rows`                  | `RowProps[]`                                   | —           | The list of data                                          |
| `selectedIds`           | `string[]`                                     | —           | The ids of selected items                                 |
| `disabledIds`           | `string[]`                                     | —           | The ids of disabled items                                 |
| `sortIndicators`        | `{ [fieldKey]: "asc" \| "desc" }`              | —           | Sort indicator display state for each column              |
| `alternatingRows`       | `boolean`                                      | —           | Every alternate row gets a different background colour    |
| `loadState`             | `"success" \| "loading"`                       | `"success"` | Table load state; shows animation while loading           |
| `renderCustomEmptyView` | `() => React.ReactNode`                        | —           | Custom view rendered when the table is empty              |
| `emptyView`             | `ErrorDisplayAttributes`                       | —           | Override props for the empty view display                 |
| `enableMultiSelect`     | `boolean`                                      | —           | Enables a checkbox in each row for multi-selection        |
| `enableSelectAll`       | `boolean`                                      | —           | Enables a header checkbox to select all / clear selection |
| `enableStickyHeader`    | `boolean`                                      | —           | Fixes the header to the top                               |
| `enableActionBar`       | `boolean`                                      | —           | Shows an action bar when one or more rows are selected    |
| `actionBarContent`      | `React.ReactNode`                              | —           | Custom content rendered within the action bar             |
| `onClearSelectionClick` | `() => void`                                   | —           | Called when the clear button in the action bar is clicked |
| `onSelect`              | `(rowId: string, isSelected: boolean) => void` | —           | Called when a row is selected                             |
| `onSelectAll`           | `(isAllSelected: boolean) => void`             | —           | Called when all rows are selected                         |
| `onHeaderClick`         | `(fieldKey: string) => void`                   | —           | Called with the column field key when a header is clicked |
| `id`                    | `string`                                       | —           | Unique identifier of the component                        |
| `className`             | `string`                                       | —           | Class selector of the component                           |
| `data-testid`           | `string`                                       | —           | Test identifier of the component                          |

`*` = required

## HeaderItemProps

| Prop          | Type                        | Default | Description                                                            |
| ------------- | --------------------------- | ------- | ---------------------------------------------------------------------- |
| `fieldKey` \* | `string`                    | —       | Key name in the row item object                                        |
| `label` \*    | `string \| React.ReactNode` | —       | Display label for the column header                                    |
| `clickable`   | `boolean`                   | —       | If true, `onHeaderClick` is called when the cell is clicked            |
| `style`       | `CSSProperties`             | —       | Custom styles for the column header cell                               |
| `keyColumn`   | `boolean`                   | —       | Marks this column as descriptive for screen reader row checkbox labels |

## RowProps

| Prop         | Type                                                                           | Default | Description                             |
| ------------ | ------------------------------------------------------------------------------ | ------- | --------------------------------------- |
| `id` \*      | `string`                                                                       | —       | Row id                                  |
| `[fieldKey]` | `string \| number \| React.ReactNode \| (row, renderProps) => React.ReactNode` | —       | Other properties on the row item object |

## Rules

-   Each row object must have a unique `id: string` field.
-   `selectedIds` and `disabledIds` are arrays of row `id` strings — manage them in external state.
-   `onSelect(rowId, isSelected)` fires per row; toggle the id into/out of your `selectedIds` array.
-   `onSelectAll(isAllSelected)` fires when the header checkbox is clicked; `isAllSelected` is `true` when the action should clear all selections (the parameter name is inverted — see example).
-   For sortable columns, set `clickable: true` on the header and handle `onHeaderClick(fieldKey)`.
-   Custom cell rendering: set a row field to a `ReactNode` or a render function `(row, renderProps) => ReactNode`.

## Anti-patterns

-   Do not derive `selectedIds` from row data alone without external state — the table is uncontrolled for selection without it.
-   Do not omit `id` on row objects — selection and disabled logic will break silently.
-   Do not add `clickable: true` to a header without wiring `onHeaderClick` — clicks will silently do nothing.
