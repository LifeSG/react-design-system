# Listing Template

Pages whose primary goal is finding, scanning, or filtering a collection of records.

## When to use

-   Search results, service directories, record indexes
-   Transaction histories, application lists
-   Any screen presenting multiple instances of the same entity type

Do not use for:

-   A single record's detail → use `detail.md`
-   A mixed overview with stats and no primary table → use `dashboard.md`

---

## Page shell

`Navbar` → `<main><PageWrapper><Layout.Container type="grid">` → `<Footer />`. Content lives in a single full-width `ColDiv xsCols={8} lgCols={12}`. For the two-column filter variant, a `TwoColumn` flex div (gap: `spacing-32`) wraps `FilterSidebar` (width: 278px, flex-shrink: 0) and `ResultsArea` (flex: 1) inside that ColDiv.

```
Navbar
main
  PageWrapper (padding: spacing-32 0; lg: spacing-48)
  └── Layout.Container type="grid"
        └── Layout.ColDiv xsCols={8} lgCols={12}
              SearchRow (optional)
              TwoColumn
                ├── FilterSidebar (278px) — omit for search-only variant
                │     Filter
                └── ResultsArea (flex-1)
                      ResultCountRow
                      ErrorDisplay type="no-item-found"  ← empty state
                      Card list / DataTable
                      Pagination (centred)
Footer
```

On mobile the filter sidebar should be hidden behind a modal — `Filter` handles this automatically when `toggleFilterAtBreakpoint` is set.

Use the **Complete template** below as the starting point — it wires all of these together in a single runnable file.

---

## Required components

| Slot           | Component                                       | Required |
| -------------- | ----------------------------------------------- | -------- |
| Navigation     | `Navbar` (masthead enabled)                     | Yes      |
| Results        | `Card` list/grid **or** `DataTable`             | Yes      |
| Result count   | `Typography.BodyMD` — "X result(s) found"       | Yes      |
| Footer         | `Footer`                                        | Yes      |
| Hero banner    | Custom styled section                           | No       |
| Search bar     | `Form.Input` + `Form.Select` + `Button.Default` | No\*     |
| Breadcrumb     | `Breadcrumb`                                    | No       |
| Alert          | `Alert type="info"`                             | No       |
| View toggle    | `Tab`                                           | No       |
| Filter sidebar | `Filter` (~278px wide)                          | No\*     |
| Pagination     | `Pagination showFirstAndLastNav`                | No       |

\* Search bar and filter sidebar are individually optional but **at least one must be present**.

---

## State shape

```tsx
interface ListingState {
    keyword: string;
    filters: Record<string, string[]>; // category -> selected option values
    sortBy: string;
    page: number;
}

const [state, setState] = useState<ListingState>({
    keyword: "",
    filters: {},
    sortBy: "relevance",
    page: 1,
});

// FIXME: replace MOCK_ITEMS with real fetch, e.g.:
// apiClient.get<Item[]>("/api/v1/items").then(({ data }) => setAllRows(data));
const [allRows, setAllRows] = useState<Item[]>(MOCK_ITEMS);

useEffect(() => {
    // FIXME: replace with actual API client and URL to fetch data
    // Example: apiClient.get<Item[]>("/api/v1/items").then(({ data }) => setAllRows(data));
    setAllRows(MOCK_ITEMS);
}, []);
```

-   Changing `keyword`, `filters`, or `sortBy` **must reset `page` to `1`** — never keep the user on a page that may no longer exist after a filter change.
-   Derive filtered/sorted/paginated results with a single `useMemo` — don't split filtering and sorting into separate effects that can race.
-   Fetch-based listings: debounce `keyword` changes (~300ms) before refetching; filter/sort changes refetch immediately.

```tsx
const results = useMemo(() => {
    let rows = allRows.filter(
        (r) =>
            matchesKeyword(r, state.keyword) && matchesFilters(r, state.filters)
    );
    rows = sortRows(rows, state.sortBy);
    return rows;
}, [allRows, state.keyword, state.filters, state.sortBy]);

const pageCount = Math.ceil(results.length / PAGE_SIZE);
const pageRows = results.slice(
    (state.page - 1) * PAGE_SIZE,
    state.page * PAGE_SIZE
);
```

---

## Layout options

### Hero with search + side filters (most feature-complete)

```
Navbar
HeroBanner
  └── Title + subtitle + Tab (search criteria tabs)
      SearchBar (Form.Input / Form.Select + Button.Default)
Layout.Section > Layout.Container
  ├── BreadcrumbRow (Breadcrumb left · optional CTA right)
  ├── Alert (optional)
  └── TwoColumn
        ├── FilterSidebar (~278px)
        │     Form.Input (keyword)
        │     Sort by (RadioButton group)
        │     Filter.Checkbox sections
        └── ResultsArea (flex-1)
              ResultCountRow (count left · Tab view toggle right)
              Card list or grid
              Pagination
Footer
```

### Hero with search only

Remove `FilterSidebar` and `TwoColumn`. `ResultsArea` goes full width.

### Hero with side filters only

Remove `SearchBar` from hero. Add `Form.Input` for keyword above `Filter` in sidebar. Results shown on load.

### Compact (no hero) — search + side filters

Remove `HeroBanner`. Add `Typography.HeadingLG as="h1"` + description + `SearchBar` directly in `Layout.Container` above breadcrumb row.

### Compact — side filters only

No hero, no search bar. Title + description in container. Filters in sidebar. Results shown on load.

### Compact — search only, description column

No hero. Full-width `SearchBar` above two-column region. Left column = description text; right column = results full width. No filter sidebar.

### No description, search + side filters

No hero. Full-width `SearchBar` above breadcrumb row. Filter sidebar + results as normal.

---

## Filter sidebar

```tsx
<Filter onClear={handleClear}>
    <Filter.Item title="Sort by" collapsible={false}>
        {SORT_OPTIONS.map((opt) => (
            <RadioButton
                key={opt.value}
                checked={state.sortBy === opt.value}
                onChange={() =>
                    setState((s) => ({ ...s, page: 1, sortBy: opt.value }))
                }
            >
                {opt.label}
            </RadioButton>
        ))}
    </Filter.Item>
    <Filter.Checkbox
        title="Category"
        options={categoryOptions}
        selected={state.filters.category ?? []}
        onChange={(values) =>
            setState((s) => ({
                ...s,
                page: 1,
                filters: { ...s.filters, category: values },
            }))
        }
    />
</Filter>
```

`onClear` resets `filters` to `{}` and `page` to `1`. It does not reset `keyword` unless the design explicitly requires it.

---

## Cards vs DataTable

-   **Cards** — citizen-facing listing screens
-   **DataTable** — internal/admin screens with 4+ structured columns where columnar comparison is the primary goal

---

## Rules

-   Always show result count even when no filters are active — format: "X result(s) found"
-   Always show `ErrorDisplay type="no-item-found"` with contextual copy when results are empty — never an empty container
-   `Pagination` or lazy load — never both on the same list
-   `showFirstAndLastNav` must be set on `Pagination`
-   Filter sidebar width is fixed at ~278px; results area is `flex: 1`
-   Inline action buttons (edit, delete) do not belong on listing cards — those go on the detail screen

---

## Complete template

A single-file listing page with search, side filters, pagination, loading/error/empty states, and API stub wired in. Remove `FilterSidebar` / `TwoColumn` for search-only variant.

```tsx
import { useState, useEffect, useMemo } from "react";
import styled from "styled-components";
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
import { Spacing, MediaQuery } from "@lifesg/react-design-system/theme";

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

// ─── Styled components ────────────────────────────────────────────────────────

const PageWrapper = styled.div`
    padding: ${Spacing["spacing-32"]} 0;
    ${MediaQuery.MinWidth.lg} {
        padding: ${Spacing["spacing-48"]} 0;
    }
`;

const TwoColumn = styled.div`
    display: flex;
    gap: ${Spacing["spacing-32"]};
    align-items: flex-start;
`;

const FilterSidebar = styled.div`
    width: 278px;
    flex-shrink: 0;
`;

const ResultsArea = styled.div`
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: ${Spacing["spacing-16"]};
`;

const SearchRow = styled.div`
    display: flex;
    gap: ${Spacing["spacing-16"]};
    align-items: flex-end;
    margin-bottom: ${Spacing["spacing-24"]};
`;

const ResultCountRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const CardBody = styled.div`
    padding: ${Spacing["spacing-24"]};
`;

const PaginationWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: ${Spacing["spacing-24"]};
`;

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
            <Navbar
                resources={{
                    primary: { brandName: "MyService", logoSrc: "/logo.svg" },
                }}
                items={{ desktop: [] }}
            />
            <main>
                <PageWrapper>
                    <Layout.Container type="grid">
                        <Layout.ColDiv xsCols={8} lgCols={12}>
                            {/* Search bar */}
                            <SearchRow>
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
                            </SearchRow>

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
                                <TwoColumn>
                                    {/* Filter sidebar — omit for search-only variant */}
                                    <FilterSidebar>
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
                                    </FilterSidebar>

                                    <ResultsArea>
                                        {/* Result count */}
                                        <ResultCountRow>
                                            <Typography.BodyMD>
                                                {results.length} result
                                                {results.length !== 1
                                                    ? "s"
                                                    : ""} found
                                            </Typography.BodyMD>
                                        </ResultCountRow>

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
                                                <CardBody>
                                                    <Typography.HeadingSM>
                                                        {item.title}
                                                    </Typography.HeadingSM>
                                                    <Typography.BodyMD>
                                                        {item.description}
                                                    </Typography.BodyMD>
                                                </CardBody>
                                            </Card>
                                        ))}

                                        {/* Pagination */}
                                        {pageCount > 1 && (
                                            <PaginationWrapper>
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
                                            </PaginationWrapper>
                                        )}
                                    </ResultsArea>
                                </TwoColumn>
                            )}
                        </Layout.ColDiv>
                    </Layout.Container>
                </PageWrapper>
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
