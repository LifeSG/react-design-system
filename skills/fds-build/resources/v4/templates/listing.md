# Listing Template (v4)

Pages whose primary goal is finding, scanning, or filtering a collection of records.

## When to use

-   Search results, service directories, record indexes
-   Transaction histories, application lists
-   Any screen presenting multiple instances of the same entity type

Do not use for:

-   A single record's detail → use `detail.md`
-   A mixed overview with stats and no primary table → use `dashboard.md`

---

## Styling approach

v4 uses **CSS Modules** — no `styled-components`.

-   Design tokens are plain CSS variable strings (`var(--fds-spacing-32)`, `var(--fds-colour-text)`, etc.)
-   Responsive styles use the breakpoint class selector: `:where(body.fds-breakpoint-lg-min) &`
-   `ThemeProvider` adds breakpoint classes to `document.body` at runtime

---

## Page anatomy

```
Navbar
main
  pageWrapper (padding: spacing-32 0; lg: spacing-48)
  └── Layout.Container type="grid"
        └── Layout.ColDiv xsCols={8} lgCols={12}
              searchRow (optional)
              twoColumn
                ├── filterSidebar (278px) — omit for search-only variant
                │     Filter
                └── resultsArea (flex-1)
                      resultCountRow
                      ErrorDisplay type="no-item-found"  ← empty state
                      Card list / DataTable
                      paginationWrapper (centred)
Footer
```

On mobile the filter sidebar should be hidden behind a modal — `Filter` handles this automatically when `toggleFilterAtBreakpoint` is set.

---

## Required components

| Slot           | Component                                 | Required |
| -------------- | ----------------------------------------- | -------- |
| Navigation     | `Navbar` (masthead enabled)               | Yes      |
| Results        | `Card` list/grid **or** `DataTable`       | Yes      |
| Result count   | `Typography.BodyMD` — "X result(s) found" | Yes      |
| Footer         | `Footer`                                  | Yes      |
| Search bar     | `Form.Input` + `Button.Default`           | No\*     |
| Filter sidebar | `Filter` (~278px wide)                    | No\*     |
| Pagination     | `Pagination showFirstAndLastNav`          | No       |

\* Search bar and filter sidebar are individually optional but **at least one must be present**.

---

## CSS (ListingPage.module.css)

```css
.pageWrapper {
    padding: var(--fds-spacing-32) 0;

    :global(body.fds-breakpoint-lg-min) & {
        padding: var(--fds-spacing-48) 0;
    }
}

.twoColumn {
    display: flex;
    gap: var(--fds-spacing-32);
    align-items: flex-start;
}

.filterSidebar {
    width: 278px;
    flex-shrink: 0;
}

.resultsArea {
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: var(--fds-spacing-16);
}

.searchRow {
    display: flex;
    gap: var(--fds-spacing-16);
    align-items: flex-end;
    margin-bottom: var(--fds-spacing-24);
}

.resultCountRow {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.cardBody {
    padding: var(--fds-spacing-24);
}

.paginationWrapper {
    display: flex;
    justify-content: center;
    margin-top: var(--fds-spacing-24);
}
```

---

## Rules

-   Always show result count even when no filters are active — format: "X result(s) found"
-   Always show `ErrorDisplay type="no-item-found"` with contextual copy when results are empty — never an empty container
-   `Pagination` or lazy load — never both on the same list
-   `showFirstAndLastNav` must be set on `Pagination`
-   Filter sidebar width is fixed at ~278px; results area is `flex: 1`
-   Inline action buttons (edit, delete) do not belong on listing cards — those go on the detail screen
-   Changing `keyword`, `filters`, or `sortBy` must reset `page` to `1`

---

## Complete template

A single-file listing page with search, side filters, pagination, loading/error/empty states, and API stub wired in. Remove `filterSidebar` / `twoColumn` for search-only variant.

```tsx
// ListingPage.tsx
import { useState, useEffect, useMemo } from "react";
import { Navbar } from "@lifesg/react-design-system/navbar";
import { Footer } from "@lifesg/react-design-system/footer";
import { Layout } from "@lifesg/react-design-system/layout";
import { Typography } from "@lifesg/react-design-system/typography";
import { Card } from "@lifesg/react-design-system/card";
import { Filter } from "@lifesg/react-design-system/filter";
import { RadioButton } from "@lifesg/react-design-system/radio-button";
import { Pagination } from "@lifesg/react-design-system/pagination";
import { ErrorDisplay } from "@lifesg/react-design-system/error-display";
import { Alert } from "@lifesg/react-design-system/alert";
import { Button } from "@lifesg/react-design-system/button";
import { Form } from "@lifesg/react-design-system/form";
import styles from "./ListingPage.module.css";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Item {
    id: string;
    title: string;
    description: string;
    category: string;
}

interface ListingState {
    keyword: string;
    filters: Record<string, string[]>;
    sortBy: string;
    page: number;
}

// ─── Constants ────────────────────────────────────────────────────────────────

const PAGE_SIZE = 10;

const SORT_OPTIONS = [
    { label: "Relevance", value: "relevance" },
    { label: "Newest first", value: "newest" },
];

const CATEGORY_OPTIONS = [
    { label: "Category A", value: "a" },
    { label: "Category B", value: "b" },
];

// FIXME: replace with real seed data or remove once API is wired up
const MOCK_ITEMS: Item[] = [];

// ─── Helpers ──────────────────────────────────────────────────────────────────

function matchesKeyword(item: Item, keyword: string): boolean {
    if (!keyword.trim()) return true;
    const q = keyword.toLowerCase();
    return (
        item.title.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q)
    );
}

function matchesFilters(
    item: Item,
    filters: Record<string, string[]>
): boolean {
    const cats = filters.category;
    if (!cats || cats.length === 0) return true;
    return cats.includes(item.category);
}

function sortItems(items: Item[], sortBy: string): Item[] {
    if (sortBy === "newest") return [...items].reverse();
    return items;
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function ListingPage() {
    const [allItems, setAllItems] = useState<Item[]>(MOCK_ITEMS);
    const [isLoading, setIsLoading] = useState(true);
    const [fetchError, setFetchError] = useState<string | null>(null);

    const [state, setState] = useState<ListingState>({
        keyword: "",
        filters: {},
        sortBy: "relevance",
        page: 1,
    });

    useEffect(() => {
        setIsLoading(true);
        setFetchError(null);
        // FIXME: replace with actual API client and URL to fetch data, e.g.:
        // apiClient
        //   .get<Item[]>("/api/v1/items")
        //   .then(({ data }) => setAllItems(data))
        //   .catch((err) => setFetchError(err.message))
        //   .finally(() => setIsLoading(false));
        setAllItems(MOCK_ITEMS);
        setIsLoading(false);
    }, []);

    const results = useMemo(() => {
        let rows = allItems.filter(
            (r) =>
                matchesKeyword(r, state.keyword) &&
                matchesFilters(r, state.filters)
        );
        return sortItems(rows, state.sortBy);
    }, [allItems, state.keyword, state.filters, state.sortBy]);

    const pageCount = Math.ceil(results.length / PAGE_SIZE);
    const pageRows = results.slice(
        (state.page - 1) * PAGE_SIZE,
        state.page * PAGE_SIZE
    );

    function handleClear() {
        setState((s) => ({ ...s, filters: {}, page: 1 }));
    }

    return (
        <>
            <Navbar masthead items={{ desktop: [] }} />
            <main style={{ flex: 1 }}>
                <div className={styles.pageWrapper}>
                    <Layout.Container type="grid">
                        <Layout.ColDiv xsCols={8} lgCols={12}>
                            {/* Search bar */}
                            <div className={styles.searchRow}>
                                <Form.Input
                                    label="Search"
                                    placeholder="Search by keyword"
                                    value={state.keyword}
                                    onChange={(e) =>
                                        setState((s) => ({
                                            ...s,
                                            keyword: e.target.value,
                                            page: 1,
                                        }))
                                    }
                                />
                                <Button.Default
                                    styleType="default"
                                    onClick={() =>
                                        setState((s) => ({ ...s, page: 1 }))
                                    }
                                >
                                    Search
                                </Button.Default>
                            </div>

                            {/* Loading */}
                            {isLoading && (
                                <Typography.BodyMD>
                                    Loading...
                                </Typography.BodyMD>
                            )}

                            {/* Fetch error */}
                            {!isLoading && fetchError && (
                                <Alert
                                    type="error"
                                    actionLink={{
                                        children: "Try again",
                                        onClick: () => window.location.reload(),
                                    }}
                                >
                                    {fetchError}
                                </Alert>
                            )}

                            {/* Results */}
                            {!isLoading && !fetchError && (
                                <div className={styles.twoColumn}>
                                    {/* Filter sidebar — omit for search-only variant */}
                                    <div className={styles.filterSidebar}>
                                        <Filter onClear={handleClear}>
                                            <Filter.Item
                                                title="Sort by"
                                                collapsible={false}
                                            >
                                                {SORT_OPTIONS.map((opt) => (
                                                    <RadioButton
                                                        key={opt.value}
                                                        checked={
                                                            state.sortBy ===
                                                            opt.value
                                                        }
                                                        onChange={() =>
                                                            setState((s) => ({
                                                                ...s,
                                                                sortBy: opt.value,
                                                                page: 1,
                                                            }))
                                                        }
                                                    >
                                                        {opt.label}
                                                    </RadioButton>
                                                ))}
                                            </Filter.Item>
                                            <Filter.Checkbox
                                                title="Category"
                                                options={CATEGORY_OPTIONS}
                                                selected={
                                                    state.filters.category ?? []
                                                }
                                                onChange={(values) =>
                                                    setState((s) => ({
                                                        ...s,
                                                        page: 1,
                                                        filters: {
                                                            ...s.filters,
                                                            category: values,
                                                        },
                                                    }))
                                                }
                                            />
                                        </Filter>
                                    </div>

                                    <div className={styles.resultsArea}>
                                        {/* Result count */}
                                        <div className={styles.resultCountRow}>
                                            <Typography.BodyMD>
                                                {results.length} result
                                                {results.length !== 1
                                                    ? "s"
                                                    : ""} found
                                            </Typography.BodyMD>
                                        </div>

                                        {/* Empty state */}
                                        {results.length === 0 && (
                                            <ErrorDisplay
                                                type="no-item-found"
                                                title="No results found"
                                                description="Try adjusting your search or filters."
                                                actionButton={{
                                                    children: "Clear filters",
                                                    onClick: handleClear,
                                                }}
                                            />
                                        )}

                                        {/* Card list */}
                                        {pageRows.map((item) => (
                                            <Card key={item.id}>
                                                <div
                                                    className={styles.cardBody}
                                                >
                                                    <Typography.HeadingSM>
                                                        {item.title}
                                                    </Typography.HeadingSM>
                                                    <Typography.BodyMD>
                                                        {item.description}
                                                    </Typography.BodyMD>
                                                </div>
                                            </Card>
                                        ))}

                                        {/* Pagination */}
                                        {pageCount > 1 && (
                                            <div
                                                className={
                                                    styles.paginationWrapper
                                                }
                                            >
                                                <Pagination
                                                    totalItems={results.length}
                                                    pageSize={PAGE_SIZE}
                                                    activePage={state.page}
                                                    onPageChange={(page) =>
                                                        setState((s) => ({
                                                            ...s,
                                                            page,
                                                        }))
                                                    }
                                                    showFirstAndLastNav
                                                />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}
                        </Layout.ColDiv>
                    </Layout.Container>
                </div>
            </main>
            <Footer />
        </>
    );
}
```

---

## Anti-patterns

-   Do not omit the result count
-   Do not show an empty results area with no state message
-   Do not use `DataTable` for citizen-facing records
-   Do not use pagination AND lazy loading together
-   Do not leave stale `page` values pointing past the end of a newly-filtered result set
-   Do not split filtering and sorting into separate `useEffect` calls — derive from a single `useMemo`
-   Do not use `styled-components` — use CSS Module classes with `var(--fds-*)` tokens
