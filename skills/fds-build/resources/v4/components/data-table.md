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

## Props — `DataTableProps`

| Prop                              | Type                                             | Default   | Description                                                                                                                                                                                   |
| --------------------------------- | ------------------------------------------------ | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                              | `string`                                         | —         | —                                                                                                                                                                                             |
| `headers` \*                      | `HeaderProps[]`                                  | —         | Column definitions that determine the rendered headers and the `fieldKey` used to read values from each `RowProps` entry.                                                                     |
| `rows`                            | `RowProps[]`                                     | —         | Row data to render. When omitted or empty the empty state is shown.                                                                                                                           |
| `className`                       | `string`                                         | —         | —                                                                                                                                                                                             |
| `selectedIds`                     | `string[]`                                       | —         | The ids of selected items. If undefined, the Select All checkbox remains enabled when rows are non-empty.                                                                                     |
| `disabledIds`                     | `string[]`                                       | —         | Row IDs whose checkboxes are rendered in a disabled state; the rows remain visible.                                                                                                           |
| `enableMultiSelect`               | `boolean`                                        | —         | Renders a checkbox column as the first column of each row to support row selection.                                                                                                           |
| `enableSelectAll`                 | `boolean`                                        | —         | Renders a select-all checkbox in the header checkbox column. Requires `enableMultiSelect`.                                                                                                    |
| `enableActionBar`                 | `boolean`                                        | —         | Shows the action bar whenever one or more rows are selected.                                                                                                                                  |
| `enableActionBarWithoutSelection` | `boolean`                                        | —         | Shows the action bar even when no rows are selected. Requires `enableActionBar`.                                                                                                              |
| `enableStickyHeader`              | `boolean`                                        | —         | Keeps the header row visible as the user scrolls down through the table.                                                                                                                      |
| `actionBarContent`                | `ReactNode`                                      | —         | Additional content rendered inside the action bar.                                                                                                                                            |
| `loadState`                       | `LoadStateType`                                  | "success" | Controls whether the table body renders data rows or a loading indicator.                                                                                                                     |
| `onSelect`                        | `((rowId: string, isSelected: boolean) => void)` | —         | Called when a row's checkbox is toggled; receives the row ID and the new selected state.                                                                                                      |
| `onSelectAll`                     | `((isAllSelected: boolean) => void)`             | —         | Called when the select-all checkbox is toggled.                                                                                                                                               |
| `onHeaderClick`                   | `((fieldKey: string) => void)`                   | —         | Called when a header cell is clicked; receives the `fieldKey` of the clicked column.                                                                                                          |
| `onClearSelectionClick`           | `(() => void)`                                   | —         | Called when the "Clear selection" button inside the action bar is clicked.                                                                                                                    |
| `sortIndicators`                  | `SortIndicatorsProps`                            | —         | Maps each `fieldKey` to its current sort direction. A key present in this map causes the corresponding header to render a directional arrow and expose sort controls to assistive technology. |
| `alternatingRows`                 | `boolean`                                        | —         | Applies an alternate background colour to every odd-indexed row.                                                                                                                              |
| `emptyView`                       | `ErrorDisplayAttributes`                         | —         | Overrides the title and description shown in the built-in empty state. Ignored when `renderCustomEmptyView` is provided.                                                                      |
| `renderCustomEmptyView`           | `(() => ReactNode)`                              | —         | Renders a fully custom empty state in place of the default `ErrorDisplay`.                                                                                                                    |

## Props — `RowProps`

| Prop    | Type               | Default | Description                                                                                   |
| ------- | ------------------ | ------- | --------------------------------------------------------------------------------------------- |
| `id` \* | `string \| number` | —       | Unique identifier for the row; used as the key and referenced by `selectedIds`/`disabledIds`. |

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

## Props — `DataTableProps`

| Prop                              | Type                                             | Default   | Description                                                                                                                                                                                   |
| --------------------------------- | ------------------------------------------------ | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                              | `string`                                         | —         | —                                                                                                                                                                                             |
| `headers` \*                      | `HeaderProps[]`                                  | —         | Column definitions that determine the rendered headers and the `fieldKey` used to read values from each `RowProps` entry.                                                                     |
| `rows`                            | `RowProps[]`                                     | —         | Row data to render. When omitted or empty the empty state is shown.                                                                                                                           |
| `className`                       | `string`                                         | —         | —                                                                                                                                                                                             |
| `selectedIds`                     | `string[]`                                       | —         | The ids of selected items. If undefined, the Select All checkbox remains enabled when rows are non-empty.                                                                                     |
| `disabledIds`                     | `string[]`                                       | —         | Row IDs whose checkboxes are rendered in a disabled state; the rows remain visible.                                                                                                           |
| `enableMultiSelect`               | `boolean`                                        | —         | Renders a checkbox column as the first column of each row to support row selection.                                                                                                           |
| `enableSelectAll`                 | `boolean`                                        | —         | Renders a select-all checkbox in the header checkbox column. Requires `enableMultiSelect`.                                                                                                    |
| `enableActionBar`                 | `boolean`                                        | —         | Shows the action bar whenever one or more rows are selected.                                                                                                                                  |
| `enableActionBarWithoutSelection` | `boolean`                                        | —         | Shows the action bar even when no rows are selected. Requires `enableActionBar`.                                                                                                              |
| `enableStickyHeader`              | `boolean`                                        | —         | Keeps the header row visible as the user scrolls down through the table.                                                                                                                      |
| `actionBarContent`                | `ReactNode`                                      | —         | Additional content rendered inside the action bar.                                                                                                                                            |
| `loadState`                       | `LoadStateType`                                  | "success" | Controls whether the table body renders data rows or a loading indicator.                                                                                                                     |
| `onSelect`                        | `((rowId: string, isSelected: boolean) => void)` | —         | Called when a row's checkbox is toggled; receives the row ID and the new selected state.                                                                                                      |
| `onSelectAll`                     | `((isAllSelected: boolean) => void)`             | —         | Called when the select-all checkbox is toggled.                                                                                                                                               |
| `onHeaderClick`                   | `((fieldKey: string) => void)`                   | —         | Called when a header cell is clicked; receives the `fieldKey` of the clicked column.                                                                                                          |
| `onClearSelectionClick`           | `(() => void)`                                   | —         | Called when the "Clear selection" button inside the action bar is clicked.                                                                                                                    |
| `sortIndicators`                  | `SortIndicatorsProps`                            | —         | Maps each `fieldKey` to its current sort direction. A key present in this map causes the corresponding header to render a directional arrow and expose sort controls to assistive technology. |
| `alternatingRows`                 | `boolean`                                        | —         | Applies an alternate background colour to every odd-indexed row.                                                                                                                              |
| `emptyView`                       | `ErrorDisplayAttributes`                         | —         | Overrides the title and description shown in the built-in empty state. Ignored when `renderCustomEmptyView` is provided.                                                                      |
| `renderCustomEmptyView`           | `(() => ReactNode)`                              | —         | Renders a fully custom empty state in place of the default `ErrorDisplay`.                                                                                                                    |

## Props — `RowProps`

| Prop    | Type               | Default | Description                                                                                   |
| ------- | ------------------ | ------- | --------------------------------------------------------------------------------------------- |
| `id` \* | `string \| number` | —       | Unique identifier for the row; used as the key and referenced by `selectedIds`/`disabledIds`. |

## Props — `DataTableProps`

| Prop                              | Type                                             | Default   | Description                                                                                                                                                                                   |
| --------------------------------- | ------------------------------------------------ | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                              | `string`                                         | —         | —                                                                                                                                                                                             |
| `headers` \*                      | `HeaderProps[]`                                  | —         | Column definitions that determine the rendered headers and the `fieldKey` used to read values from each `RowProps` entry.                                                                     |
| `rows`                            | `RowProps[]`                                     | —         | Row data to render. When omitted or empty the empty state is shown.                                                                                                                           |
| `className`                       | `string`                                         | —         | —                                                                                                                                                                                             |
| `selectedIds`                     | `string[]`                                       | —         | The ids of selected items. If undefined, the Select All checkbox remains enabled when rows are non-empty.                                                                                     |
| `disabledIds`                     | `string[]`                                       | —         | Row IDs whose checkboxes are rendered in a disabled state; the rows remain visible.                                                                                                           |
| `enableMultiSelect`               | `boolean`                                        | —         | Renders a checkbox column as the first column of each row to support row selection.                                                                                                           |
| `enableSelectAll`                 | `boolean`                                        | —         | Renders a select-all checkbox in the header checkbox column. Requires `enableMultiSelect`.                                                                                                    |
| `enableActionBar`                 | `boolean`                                        | —         | Shows the action bar whenever one or more rows are selected.                                                                                                                                  |
| `enableActionBarWithoutSelection` | `boolean`                                        | —         | Shows the action bar even when no rows are selected. Requires `enableActionBar`.                                                                                                              |
| `enableStickyHeader`              | `boolean`                                        | —         | Keeps the header row visible as the user scrolls down through the table.                                                                                                                      |
| `actionBarContent`                | `ReactNode`                                      | —         | Additional content rendered inside the action bar.                                                                                                                                            |
| `loadState`                       | `LoadStateType`                                  | "success" | Controls whether the table body renders data rows or a loading indicator.                                                                                                                     |
| `onSelect`                        | `((rowId: string, isSelected: boolean) => void)` | —         | Called when a row's checkbox is toggled; receives the row ID and the new selected state.                                                                                                      |
| `onSelectAll`                     | `((isAllSelected: boolean) => void)`             | —         | Called when the select-all checkbox is toggled.                                                                                                                                               |
| `onHeaderClick`                   | `((fieldKey: string) => void)`                   | —         | Called when a header cell is clicked; receives the `fieldKey` of the clicked column.                                                                                                          |
| `onClearSelectionClick`           | `(() => void)`                                   | —         | Called when the "Clear selection" button inside the action bar is clicked.                                                                                                                    |
| `sortIndicators`                  | `SortIndicatorsProps`                            | —         | Maps each `fieldKey` to its current sort direction. A key present in this map causes the corresponding header to render a directional arrow and expose sort controls to assistive technology. |
| `alternatingRows`                 | `boolean`                                        | —         | Applies an alternate background colour to every odd-indexed row.                                                                                                                              |
| `emptyView`                       | `ErrorDisplayAttributes`                         | —         | Overrides the title and description shown in the built-in empty state. Ignored when `renderCustomEmptyView` is provided.                                                                      |
| `renderCustomEmptyView`           | `(() => ReactNode)`                              | —         | Renders a fully custom empty state in place of the default `ErrorDisplay`.                                                                                                                    |

## Props — `RowProps`

| Prop    | Type               | Default | Description                                                                                   |
| ------- | ------------------ | ------- | --------------------------------------------------------------------------------------------- |
| `id` \* | `string \| number` | —       | Unique identifier for the row; used as the key and referenced by `selectedIds`/`disabledIds`. |

## Props — `DataTableProps`

| Prop                              | Type                                             | Default   | Description                                                                                                                                                                                   |
| --------------------------------- | ------------------------------------------------ | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                              | `string`                                         | —         | —                                                                                                                                                                                             |
| `headers` \*                      | `HeaderProps[]`                                  | —         | Column definitions that determine the rendered headers and the `fieldKey` used to read values from each `RowProps` entry.                                                                     |
| `rows`                            | `RowProps[]`                                     | —         | Row data to render. When omitted or empty the empty state is shown.                                                                                                                           |
| `className`                       | `string`                                         | —         | —                                                                                                                                                                                             |
| `selectedIds`                     | `string[]`                                       | —         | The ids of selected items. If undefined, the Select All checkbox remains enabled when rows are non-empty.                                                                                     |
| `disabledIds`                     | `string[]`                                       | —         | Row IDs whose checkboxes are rendered in a disabled state; the rows remain visible.                                                                                                           |
| `enableMultiSelect`               | `boolean`                                        | —         | Renders a checkbox column as the first column of each row to support row selection.                                                                                                           |
| `enableSelectAll`                 | `boolean`                                        | —         | Renders a select-all checkbox in the header checkbox column. Requires `enableMultiSelect`.                                                                                                    |
| `enableActionBar`                 | `boolean`                                        | —         | Shows the action bar whenever one or more rows are selected.                                                                                                                                  |
| `enableActionBarWithoutSelection` | `boolean`                                        | —         | Shows the action bar even when no rows are selected. Requires `enableActionBar`.                                                                                                              |
| `enableStickyHeader`              | `boolean`                                        | —         | Keeps the header row visible as the user scrolls down through the table.                                                                                                                      |
| `actionBarContent`                | `ReactNode`                                      | —         | Additional content rendered inside the action bar.                                                                                                                                            |
| `loadState`                       | `LoadStateType`                                  | "success" | Controls whether the table body renders data rows or a loading indicator.                                                                                                                     |
| `onSelect`                        | `((rowId: string, isSelected: boolean) => void)` | —         | Called when a row's checkbox is toggled; receives the row ID and the new selected state.                                                                                                      |
| `onSelectAll`                     | `((isAllSelected: boolean) => void)`             | —         | Called when the select-all checkbox is toggled.                                                                                                                                               |
| `onHeaderClick`                   | `((fieldKey: string) => void)`                   | —         | Called when a header cell is clicked; receives the `fieldKey` of the clicked column.                                                                                                          |
| `onClearSelectionClick`           | `(() => void)`                                   | —         | Called when the "Clear selection" button inside the action bar is clicked.                                                                                                                    |
| `sortIndicators`                  | `SortIndicatorsProps`                            | —         | Maps each `fieldKey` to its current sort direction. A key present in this map causes the corresponding header to render a directional arrow and expose sort controls to assistive technology. |
| `alternatingRows`                 | `boolean`                                        | —         | Applies an alternate background colour to every odd-indexed row.                                                                                                                              |
| `emptyView`                       | `ErrorDisplayAttributes`                         | —         | Overrides the title and description shown in the built-in empty state. Ignored when `renderCustomEmptyView` is provided.                                                                      |
| `renderCustomEmptyView`           | `(() => ReactNode)`                              | —         | Renders a fully custom empty state in place of the default `ErrorDisplay`.                                                                                                                    |

## Props — `RowProps`

| Prop    | Type               | Default | Description                                                                                   |
| ------- | ------------------ | ------- | --------------------------------------------------------------------------------------------- |
| `id` \* | `string \| number` | —       | Unique identifier for the row; used as the key and referenced by `selectedIds`/`disabledIds`. |

## Props — `DataTableProps`

| Prop                              | Type                                             | Default   | Description                                                                                                                                                                                   |
| --------------------------------- | ------------------------------------------------ | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                              | `string`                                         | —         | —                                                                                                                                                                                             |
| `headers` \*                      | `HeaderProps[]`                                  | —         | Column definitions that determine the rendered headers and the `fieldKey` used to read values from each `RowProps` entry.                                                                     |
| `rows`                            | `RowProps[]`                                     | —         | Row data to render. When omitted or empty the empty state is shown.                                                                                                                           |
| `className`                       | `string`                                         | —         | —                                                                                                                                                                                             |
| `selectedIds`                     | `string[]`                                       | —         | The ids of selected items. If undefined, the Select All checkbox remains enabled when rows are non-empty.                                                                                     |
| `disabledIds`                     | `string[]`                                       | —         | Row IDs whose checkboxes are rendered in a disabled state; the rows remain visible.                                                                                                           |
| `enableMultiSelect`               | `boolean`                                        | —         | Renders a checkbox column as the first column of each row to support row selection.                                                                                                           |
| `enableSelectAll`                 | `boolean`                                        | —         | Renders a select-all checkbox in the header checkbox column. Requires `enableMultiSelect`.                                                                                                    |
| `enableActionBar`                 | `boolean`                                        | —         | Shows the action bar whenever one or more rows are selected.                                                                                                                                  |
| `enableActionBarWithoutSelection` | `boolean`                                        | —         | Shows the action bar even when no rows are selected. Requires `enableActionBar`.                                                                                                              |
| `enableStickyHeader`              | `boolean`                                        | —         | Keeps the header row visible as the user scrolls down through the table.                                                                                                                      |
| `actionBarContent`                | `ReactNode`                                      | —         | Additional content rendered inside the action bar.                                                                                                                                            |
| `loadState`                       | `LoadStateType`                                  | "success" | Controls whether the table body renders data rows or a loading indicator.                                                                                                                     |
| `onSelect`                        | `((rowId: string, isSelected: boolean) => void)` | —         | Called when a row's checkbox is toggled; receives the row ID and the new selected state.                                                                                                      |
| `onSelectAll`                     | `((isAllSelected: boolean) => void)`             | —         | Called when the select-all checkbox is toggled.                                                                                                                                               |
| `onHeaderClick`                   | `((fieldKey: string) => void)`                   | —         | Called when a header cell is clicked; receives the `fieldKey` of the clicked column.                                                                                                          |
| `onClearSelectionClick`           | `(() => void)`                                   | —         | Called when the "Clear selection" button inside the action bar is clicked.                                                                                                                    |
| `sortIndicators`                  | `SortIndicatorsProps`                            | —         | Maps each `fieldKey` to its current sort direction. A key present in this map causes the corresponding header to render a directional arrow and expose sort controls to assistive technology. |
| `alternatingRows`                 | `boolean`                                        | —         | Applies an alternate background colour to every odd-indexed row.                                                                                                                              |
| `emptyView`                       | `ErrorDisplayAttributes`                         | —         | Overrides the title and description shown in the built-in empty state. Ignored when `renderCustomEmptyView` is provided.                                                                      |
| `renderCustomEmptyView`           | `(() => ReactNode)`                              | —         | Renders a fully custom empty state in place of the default `ErrorDisplay`.                                                                                                                    |

## Props — `RowProps`

| Prop    | Type               | Default | Description                                                                                   |
| ------- | ------------------ | ------- | --------------------------------------------------------------------------------------------- |
| `id` \* | `string \| number` | —       | Unique identifier for the row; used as the key and referenced by `selectedIds`/`disabledIds`. |

## Props — `DataTableProps`

| Prop                              | Type                                             | Default   | Description                                                                                                                                                                                   |
| --------------------------------- | ------------------------------------------------ | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                              | `string`                                         | —         | —                                                                                                                                                                                             |
| `headers` \*                      | `HeaderProps[]`                                  | —         | Column definitions that determine the rendered headers and the `fieldKey` used to read values from each `RowProps` entry.                                                                     |
| `rows`                            | `RowProps[]`                                     | —         | Row data to render. When omitted or empty the empty state is shown.                                                                                                                           |
| `className`                       | `string`                                         | —         | —                                                                                                                                                                                             |
| `selectedIds`                     | `string[]`                                       | —         | The ids of selected items. If undefined, the Select All checkbox remains enabled when rows are non-empty.                                                                                     |
| `disabledIds`                     | `string[]`                                       | —         | Row IDs whose checkboxes are rendered in a disabled state; the rows remain visible.                                                                                                           |
| `enableMultiSelect`               | `boolean`                                        | —         | Renders a checkbox column as the first column of each row to support row selection.                                                                                                           |
| `enableSelectAll`                 | `boolean`                                        | —         | Renders a select-all checkbox in the header checkbox column. Requires `enableMultiSelect`.                                                                                                    |
| `enableActionBar`                 | `boolean`                                        | —         | Shows the action bar whenever one or more rows are selected.                                                                                                                                  |
| `enableActionBarWithoutSelection` | `boolean`                                        | —         | Shows the action bar even when no rows are selected. Requires `enableActionBar`.                                                                                                              |
| `enableStickyHeader`              | `boolean`                                        | —         | Keeps the header row visible as the user scrolls down through the table.                                                                                                                      |
| `actionBarContent`                | `ReactNode`                                      | —         | Additional content rendered inside the action bar.                                                                                                                                            |
| `loadState`                       | `LoadStateType`                                  | "success" | Controls whether the table body renders data rows or a loading indicator.                                                                                                                     |
| `onSelect`                        | `((rowId: string, isSelected: boolean) => void)` | —         | Called when a row's checkbox is toggled; receives the row ID and the new selected state.                                                                                                      |
| `onSelectAll`                     | `((isAllSelected: boolean) => void)`             | —         | Called when the select-all checkbox is toggled.                                                                                                                                               |
| `onHeaderClick`                   | `((fieldKey: string) => void)`                   | —         | Called when a header cell is clicked; receives the `fieldKey` of the clicked column.                                                                                                          |
| `onClearSelectionClick`           | `(() => void)`                                   | —         | Called when the "Clear selection" button inside the action bar is clicked.                                                                                                                    |
| `sortIndicators`                  | `SortIndicatorsProps`                            | —         | Maps each `fieldKey` to its current sort direction. A key present in this map causes the corresponding header to render a directional arrow and expose sort controls to assistive technology. |
| `alternatingRows`                 | `boolean`                                        | —         | Applies an alternate background colour to every odd-indexed row.                                                                                                                              |
| `emptyView`                       | `ErrorDisplayAttributes`                         | —         | Overrides the title and description shown in the built-in empty state. Ignored when `renderCustomEmptyView` is provided.                                                                      |
| `renderCustomEmptyView`           | `(() => ReactNode)`                              | —         | Renders a fully custom empty state in place of the default `ErrorDisplay`.                                                                                                                    |

## Props — `RowProps`

| Prop    | Type               | Default | Description                                                                                   |
| ------- | ------------------ | ------- | --------------------------------------------------------------------------------------------- |
| `id` \* | `string \| number` | —       | Unique identifier for the row; used as the key and referenced by `selectedIds`/`disabledIds`. |

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
