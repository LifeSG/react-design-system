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

## Props — `PaginationProps`

| Prop                  | Type                                         | Default             | Description                                                                                                   |
| --------------------- | -------------------------------------------- | ------------------- | ------------------------------------------------------------------------------------------------------------- |
| `id`                  | `string`                                     | —                   | —                                                                                                             |
| `className`           | `string`                                     | —                   | —                                                                                                             |
| `pageSize`            | `number`                                     | 10                  | Number of items displayed per page.                                                                           |
| `totalItems` \*       | `number`                                     | —                   | Total number of items across all pages. Used to compute the total page count.                                 |
| `activePage` \*       | `number`                                     | —                   | The currently active 1-based page number. This is a controlled prop; update it in response to `onPageChange`. |
| `pageSizeOptions`     | `PageSizeItemProps[]`                        | 10, 20, 30 per page | Options listed in the page-size changer dropdown. Only relevant when `showPageSizeChanger` is `true`.         |
| `showFirstAndLastNav` | `boolean`                                    | —                   | When `true`, renders first-page and last-page navigation buttons alongside the previous/next buttons.         |
| `showPageSizeChanger` | `boolean`                                    | false               | When `true`, renders a dropdown on desktop viewports to change the `pageSize`.                                |
| `onPageChange`        | `((page: number) => void)`                   | —                   | Called when the user navigates to a different page.                                                           |
| `onPageSizeChange`    | `((page: number, pageSize: number) => void)` | —                   | Called when the user selects a different page size from the dropdown and `showPageSizeChanger` is `true`.     |

## Props — `PageSizeItemProps`

| Prop       | Type     | Default | Description |
| ---------- | -------- | ------- | ----------- |
| `value` \* | `number` | —       | —           |
| `label` \* | `string` | —       | —           |

## Props — `PaginationProps`

| Prop                  | Type                                         | Default             | Description                                                                                                   |
| --------------------- | -------------------------------------------- | ------------------- | ------------------------------------------------------------------------------------------------------------- |
| `id`                  | `string`                                     | —                   | —                                                                                                             |
| `className`           | `string`                                     | —                   | —                                                                                                             |
| `pageSize`            | `number`                                     | 10                  | Number of items displayed per page.                                                                           |
| `totalItems` \*       | `number`                                     | —                   | Total number of items across all pages. Used to compute the total page count.                                 |
| `activePage` \*       | `number`                                     | —                   | The currently active 1-based page number. This is a controlled prop; update it in response to `onPageChange`. |
| `pageSizeOptions`     | `PageSizeItemProps[]`                        | 10, 20, 30 per page | Options listed in the page-size changer dropdown. Only relevant when `showPageSizeChanger` is `true`.         |
| `showFirstAndLastNav` | `boolean`                                    | —                   | When `true`, renders first-page and last-page navigation buttons alongside the previous/next buttons.         |
| `showPageSizeChanger` | `boolean`                                    | false               | When `true`, renders a dropdown on desktop viewports to change the `pageSize`.                                |
| `onPageChange`        | `((page: number) => void)`                   | —                   | Called when the user navigates to a different page.                                                           |
| `onPageSizeChange`    | `((page: number, pageSize: number) => void)` | —                   | Called when the user selects a different page size from the dropdown and `showPageSizeChanger` is `true`.     |

## Props — `PageSizeItemProps`

| Prop       | Type     | Default | Description |
| ---------- | -------- | ------- | ----------- |
| `value` \* | `number` | —       | —           |
| `label` \* | `string` | —       | —           |

## Props — `PaginationProps`

| Prop                  | Type                                         | Default             | Description                                                                                                   |
| --------------------- | -------------------------------------------- | ------------------- | ------------------------------------------------------------------------------------------------------------- |
| `id`                  | `string`                                     | —                   | —                                                                                                             |
| `className`           | `string`                                     | —                   | —                                                                                                             |
| `pageSize`            | `number`                                     | 10                  | Number of items displayed per page.                                                                           |
| `totalItems` \*       | `number`                                     | —                   | Total number of items across all pages. Used to compute the total page count.                                 |
| `activePage` \*       | `number`                                     | —                   | The currently active 1-based page number. This is a controlled prop; update it in response to `onPageChange`. |
| `pageSizeOptions`     | `PageSizeItemProps[]`                        | 10, 20, 30 per page | Options listed in the page-size changer dropdown. Only relevant when `showPageSizeChanger` is `true`.         |
| `showFirstAndLastNav` | `boolean`                                    | —                   | When `true`, renders first-page and last-page navigation buttons alongside the previous/next buttons.         |
| `showPageSizeChanger` | `boolean`                                    | false               | When `true`, renders a dropdown on desktop viewports to change the `pageSize`.                                |
| `onPageChange`        | `((page: number) => void)`                   | —                   | Called when the user navigates to a different page.                                                           |
| `onPageSizeChange`    | `((page: number, pageSize: number) => void)` | —                   | Called when the user selects a different page size from the dropdown and `showPageSizeChanger` is `true`.     |

## Props — `PageSizeItemProps`

| Prop       | Type     | Default | Description |
| ---------- | -------- | ------- | ----------- |
| `value` \* | `number` | —       | —           |
| `label` \* | `string` | —       | —           |

## Props — `PaginationProps`

| Prop                  | Type                                         | Default             | Description                                                                                                   |
| --------------------- | -------------------------------------------- | ------------------- | ------------------------------------------------------------------------------------------------------------- |
| `id`                  | `string`                                     | —                   | —                                                                                                             |
| `className`           | `string`                                     | —                   | —                                                                                                             |
| `pageSize`            | `number`                                     | 10                  | Number of items displayed per page.                                                                           |
| `totalItems` \*       | `number`                                     | —                   | Total number of items across all pages. Used to compute the total page count.                                 |
| `activePage` \*       | `number`                                     | —                   | The currently active 1-based page number. This is a controlled prop; update it in response to `onPageChange`. |
| `pageSizeOptions`     | `PageSizeItemProps[]`                        | 10, 20, 30 per page | Options listed in the page-size changer dropdown. Only relevant when `showPageSizeChanger` is `true`.         |
| `showFirstAndLastNav` | `boolean`                                    | —                   | When `true`, renders first-page and last-page navigation buttons alongside the previous/next buttons.         |
| `showPageSizeChanger` | `boolean`                                    | false               | When `true`, renders a dropdown on desktop viewports to change the `pageSize`.                                |
| `onPageChange`        | `((page: number) => void)`                   | —                   | Called when the user navigates to a different page.                                                           |
| `onPageSizeChange`    | `((page: number, pageSize: number) => void)` | —                   | Called when the user selects a different page size from the dropdown and `showPageSizeChanger` is `true`.     |

## Props — `PageSizeItemProps`

| Prop       | Type     | Default | Description |
| ---------- | -------- | ------- | ----------- |
| `value` \* | `number` | —       | —           |
| `label` \* | `string` | —       | —           |

## Props — `PaginationProps`

| Prop                  | Type                                         | Default             | Description                                                                                                   |
| --------------------- | -------------------------------------------- | ------------------- | ------------------------------------------------------------------------------------------------------------- |
| `id`                  | `string`                                     | —                   | —                                                                                                             |
| `className`           | `string`                                     | —                   | —                                                                                                             |
| `pageSize`            | `number`                                     | 10                  | Number of items displayed per page.                                                                           |
| `totalItems` \*       | `number`                                     | —                   | Total number of items across all pages. Used to compute the total page count.                                 |
| `activePage` \*       | `number`                                     | —                   | The currently active 1-based page number. This is a controlled prop; update it in response to `onPageChange`. |
| `pageSizeOptions`     | `PageSizeItemProps[]`                        | 10, 20, 30 per page | Options listed in the page-size changer dropdown. Only relevant when `showPageSizeChanger` is `true`.         |
| `showFirstAndLastNav` | `boolean`                                    | —                   | When `true`, renders first-page and last-page navigation buttons alongside the previous/next buttons.         |
| `showPageSizeChanger` | `boolean`                                    | false               | When `true`, renders a dropdown on desktop viewports to change the `pageSize`.                                |
| `onPageChange`        | `((page: number) => void)`                   | —                   | Called when the user navigates to a different page.                                                           |
| `onPageSizeChange`    | `((page: number, pageSize: number) => void)` | —                   | Called when the user selects a different page size from the dropdown and `showPageSizeChanger` is `true`.     |

## Props — `PageSizeItemProps`

| Prop       | Type     | Default | Description |
| ---------- | -------- | ------- | ----------- |
| `value` \* | `number` | —       | —           |
| `label` \* | `string` | —       | —           |

## Props — `PaginationProps`

| Prop                  | Type                                         | Default             | Description                                                                                                   |
| --------------------- | -------------------------------------------- | ------------------- | ------------------------------------------------------------------------------------------------------------- |
| `id`                  | `string`                                     | —                   | —                                                                                                             |
| `className`           | `string`                                     | —                   | —                                                                                                             |
| `pageSize`            | `number`                                     | 10                  | Number of items displayed per page.                                                                           |
| `totalItems` \*       | `number`                                     | —                   | Total number of items across all pages. Used to compute the total page count.                                 |
| `activePage` \*       | `number`                                     | —                   | The currently active 1-based page number. This is a controlled prop; update it in response to `onPageChange`. |
| `pageSizeOptions`     | `PageSizeItemProps[]`                        | 10, 20, 30 per page | Options listed in the page-size changer dropdown. Only relevant when `showPageSizeChanger` is `true`.         |
| `showFirstAndLastNav` | `boolean`                                    | —                   | When `true`, renders first-page and last-page navigation buttons alongside the previous/next buttons.         |
| `showPageSizeChanger` | `boolean`                                    | false               | When `true`, renders a dropdown on desktop viewports to change the `pageSize`.                                |
| `onPageChange`        | `((page: number) => void)`                   | —                   | Called when the user navigates to a different page.                                                           |
| `onPageSizeChange`    | `((page: number, pageSize: number) => void)` | —                   | Called when the user selects a different page size from the dropdown and `showPageSizeChanger` is `true`.     |

## Props — `PageSizeItemProps`

| Prop       | Type     | Default | Description |
| ---------- | -------- | ------- | ----------- |
| `value` \* | `number` | —       | —           |
| `label` \* | `string` | —       | —           |

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
