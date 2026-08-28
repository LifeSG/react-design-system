# Pagination

Import: `import { Pagination } from "@lifesg/react-design-system/pagination"`

## When to use

Use below lists or tables when content is split across multiple pages.

## Usage

### Basic pagination (1-based indexing)

```tsx
import { useState } from "react";
import { Pagination } from "@lifesg/react-design-system/pagination";

const ResultsList = () => {
    const totalItems = 243;
    const pageSize = 10;
    // activePage is 1-based: page 1 is the first page, not page 0
    const [activePage, setActivePage] = useState(1);

    return (
        <>
            <MyResultsTable
                items={results.slice(
                    (activePage - 1) * pageSize,
                    activePage * pageSize
                )}
            />
            <Pagination
                totalItems={totalItems}
                pageSize={pageSize}
                activePage={activePage}
                onPageChange={(page) => setActivePage(page)} // page is 1-based
                showFirstAndLastNav
            />
        </>
    );
};
```

### With page size changer

`onPageSizeChange` receives `(page, pageSize)` — reset to page 1 when size changes.

```tsx
const [activePage, setActivePage] = useState(1);
const [pageSize, setPageSize] = useState(10);

<Pagination
    totalItems={500}
    pageSize={pageSize}
    activePage={activePage}
    onPageChange={(page) => setActivePage(page)}
    onPageSizeChange={(page, size) => {
        setPageSize(size);
        setActivePage(page); // component resets to page 1 on size change
    }}
    showFirstAndLastNav
    showPageSizeChanger
/>;
```

## Props

| Prop                  | Type                                       | Default        | Description                                                                            |
| --------------------- | ------------------------------------------ | -------------- | -------------------------------------------------------------------------------------- |
| `totalItems`          | `number`                                   | —              | Total number of items across all pages — **required**                                  |
| `activePage`          | `number`                                   | —              | Currently active page (1-based) — **required**                                         |
| `pageSize`            | `number`                                   | `10`           | Number of items per page                                                               |
| `pageSizeOptions`     | `PageSizeItemProps<T>[]`                   | `[10, 20, 30]` | Options for the page size changer dropdown                                             |
| `showFirstAndLastNav` | `boolean`                                  | `false`        | Show buttons to jump to the first and last pages                                       |
| `showPageSizeChanger` | `boolean`                                  | `false`        | Show a page size changer dropdown (desktop only); selected option overrides `pageSize` |
| `onPageChange`        | `(page: number) => void`                   | —              | Called when a page is selected                                                         |
| `onPageSizeChange`    | `(page: number, pageSize: number) => void` | —              | Called when the page size changes                                                      |
| `id`                  | `string`                                   | —              | Unique identifier                                                                      |
| `className`           | `string`                                   | —              | Class selector                                                                         |
| `data-testid`         | `string`                                   | —              | Test identifier                                                                        |

## PageSizeItemProps

| Prop    | Type     | Description                        |
| ------- | -------- | ---------------------------------- |
| `value` | `number` | Page size value                    |
| `label` | `string` | Display label (e.g. `"10 / page"`) |

## Rules

-   `activePage` is 1-based — the first page is `1`, not `0`.
-   Always provide `onPageChange` to update `activePage` when the user changes page.
-   Provide `onPageSizeChange` when `showPageSizeChanger` is enabled.
-   Always center-align pagination below the results list.
-   Place pagination below the results — never above.
-   When total pages exceed 7, the component automatically shows an ellipsis — no additional props needed.
-   The page size changer is only visible in the desktop viewport.
-   The selected option in the page size changer takes precedence over `pageSize`.

## Anti-patterns

-   Do not use `showFirstAndLastNav` and `showPageSizeChanger` together unless the dataset is large enough to warrant both — avoid cluttering the interface with excessive controls.
-   Do not left- or right-align pagination.
-   Do not place pagination above the results.
-   Do not use `pageSize` and a `pageSizeOptions` selection simultaneously without handling `onPageSizeChange` — the changer selection overrides `pageSize`.
