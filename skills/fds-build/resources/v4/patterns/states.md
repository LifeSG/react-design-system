# States Pattern

Loading, empty, error, and success states for async operations and data absence.

---

## Loading states

### Full-page loading

```tsx
import { Layout } from "@lifesg/react-design-system/layout";
import { Card } from "@lifesg/react-design-system/card";
import { Typography } from "@lifesg/react-design-system/typography";
import { Spacing } from "@lifesg/react-design-system/theme";

if (isLoading) {
    return (
        <Layout.Container type="grid">
            <Layout.ColDiv xsCols={8} lgCols={12}>
                <Card
                    style={{
                        textAlign: "center",
                        padding: `${Spacing["spacing-64"]} ${Spacing["spacing-32"]}`,
                    }}
                >
                    <LoadingSpinner />
                    {/* import { LoadingSpinner } from "@lifesg/react-design-system/loading-spinner" */}
                    <Typography.BodyBL>Loading...</Typography.BodyBL>
                </Card>
            </Layout.ColDiv>
        </Layout.Container>
    );
}
```

### Skeleton loading (preferred for content-heavy pages)

Render placeholder blocks matching the shape of real content. Use a CSS `pulse` animation (`opacity 0.5 → 1` at 1.5s). Show the same grid structure as the loaded state — same column count, same card shapes.

### Button loading (inline async)

```tsx
<Button.Default type="submit" loading={isSubmitting} disabled={isSubmitting}>
    {isSubmitting ? "Submitting..." : "Submit"}
</Button.Default>
```

Always combine `loading` + `disabled` during async to prevent double-submission.

---

## Empty states

### First-time use (no data)

```tsx
import { Card } from "@lifesg/react-design-system/card";
import { Typography } from "@lifesg/react-design-system/typography";
import { Button } from "@lifesg/react-design-system/button";
import { Spacing } from "@lifesg/react-design-system/theme";

<Card
    style={{
        textAlign: "center",
        padding: `${Spacing["spacing-64"]} ${Spacing["spacing-32"]}`,
    }}
>
    <Typography.HeadingSM>No items yet</Typography.HeadingSM>
    <Typography.BodyBL>
        Get started by creating your first item
    </Typography.BodyBL>
    <Button.Default
        icon={<PlusIcon />}
        style={{ marginTop: Spacing["spacing-24"] }}
        onClick={handleCreate}
    >
        Create item
    </Button.Default>
</Card>;
```

### No search results

```tsx
<Card
    style={{
        textAlign: "center",
        padding: `${Spacing["spacing-64"]} ${Spacing["spacing-32"]}`,
    }}
>
    <Typography.HeadingSM>No results found</Typography.HeadingSM>
    <Typography.BodyBL>Try adjusting your search or filters</Typography.BodyBL>
    <Button.Default
        styleType="secondary"
        style={{ marginTop: Spacing["spacing-24"] }}
        onClick={handleClearFilters}
    >
        Clear filters
    </Button.Default>
</Card>
```

For listing pages, prefer `ErrorDisplay type="no-item-found"` over a custom card.

### Empty section (within a page)

```tsx
import { Typography } from "@lifesg/react-design-system/typography";
import { Colour, Spacing } from "@lifesg/react-design-system/theme";

<div style={{ textAlign: "center", padding: `${Spacing["spacing-32"]} 0` }}>
    <Typography.BodySM style={{ color: Colour["text-subtler"] }}>
        No recent activity to display
    </Typography.BodySM>
</div>;
```

---

## Error states

### API / fetch error

```tsx
import { Alert } from "@lifesg/react-design-system/alert";
import { Layout } from "@lifesg/react-design-system/layout";

if (error) {
    return (
        <Layout.Container type="grid">
            <Layout.ColDiv xsCols={8} lgCols={12}>
                <Alert
                    type="error"
                    actionLink={{
                        children: "Try again",
                        onClick: () => window.location.reload(),
                    }}
                >
                    {error.message}
                </Alert>
            </Layout.ColDiv>
        </Layout.Container>
    );
}
```

### 404 Not found

```tsx
import { Card } from "@lifesg/react-design-system/card";
import { Typography } from "@lifesg/react-design-system/typography";
import { Button } from "@lifesg/react-design-system/button";
import { Spacing } from "@lifesg/react-design-system/theme";

<Card
    style={{
        textAlign: "center",
        padding: `${Spacing["spacing-64"]} ${Spacing["spacing-32"]}`,
    }}
>
    <Typography.HeadingXL>404</Typography.HeadingXL>
    <Typography.HeadingSM>Page not found</Typography.HeadingSM>
    <Typography.BodyBL>
        The page you're looking for doesn't exist or has been moved
    </Typography.BodyBL>
    <Button.Default
        style={{ marginTop: Spacing["spacing-24"] }}
        onClick={() => navigate("/")}
    >
        Go to home
    </Button.Default>
</Card>;
```

### Permission denied

```tsx
<Card
    style={{
        textAlign: "center",
        padding: `${Spacing["spacing-64"]} ${Spacing["spacing-32"]}`,
    }}
>
    <Typography.HeadingSM>Access denied</Typography.HeadingSM>
    <Typography.BodyBL>
        You don't have permission to view this page
    </Typography.BodyBL>
    <Button.Default
        styleType="secondary"
        style={{ marginTop: Spacing["spacing-24"] }}
        onClick={() => navigate("/")}
    >
        Go to home
    </Button.Default>
</Card>
```

---

## Success states

### Inline success

```tsx
<Alert
    type="success"
    actionLink={{ children: "View details", onClick: handleViewDetails }}
>
    {successMessage}
</Alert>
```

### Toast notification

```tsx
Toast.success("Changes saved successfully"); // auto-dismisses
Toast.error("Failed to save changes");
```

Use `Toast` for non-critical feedback. Use `Alert` for errors requiring action.

### Full-page success (major operations)

```tsx
import { Card } from "@lifesg/react-design-system/card";
import { Typography } from "@lifesg/react-design-system/typography";
import { Button } from "@lifesg/react-design-system/button";
import { Spacing } from "@lifesg/react-design-system/theme";

<Card
    style={{
        textAlign: "center",
        padding: `${Spacing["spacing-64"]} ${Spacing["spacing-32"]}`,
    }}
>
    <Typography.HeadingMD>
        Application submitted successfully
    </Typography.HeadingMD>
    <Typography.BodyBL>Your application is being processed</Typography.BodyBL>
    <div
        style={{
            display: "flex",
            gap: Spacing["spacing-16"],
            justifyContent: "center",
            marginTop: Spacing["spacing-32"],
        }}
    >
        <Button.Default onClick={() => navigate("/applications")}>
            View applications
        </Button.Default>
        <Button.Default styleType="secondary" onClick={() => navigate("/")}>
            Go to home
        </Button.Default>
    </div>
</Card>;
```

---

## State management pattern

```tsx
const [state, setState] = useState({
    data: null,
    isLoading: true,
    error: null,
});

// In component:
if (state.isLoading) return <LoadingState />;
if (state.error) return <ErrorState message={state.error} />;
if (!state.data || state.data.length === 0) return <EmptyState />;
return <DataDisplay data={state.data} />;
```

---

## Rules

-   Show loading feedback for any operation taking longer than 200ms
-   Prefer skeleton loading over a spinner for content-heavy initial page loads
-   Always provide a way out of an error state (retry, go home)
-   Empty state messages: 1–2 sentences max, action-oriented, sentence case
-   Error messages: name the specific problem — never "An error occurred"
-   `Toast` auto-dismisses — use for confirmations; use `Alert` for errors needing action
-   Full-page state containers: `padding: spacing-64 spacing-32`, `textAlign: center`, inside a `Card`
-   Disable interactive elements during loading to prevent race conditions
-   Use `style={{}}` with `Spacing` and `Colour` tokens for all custom spacing and colour

## Anti-patterns

-   Do not show a spinner for operations under 200ms — causes flicker
-   Do not show an empty container with no state message in a listing page
-   Do not use `Toast` for critical errors — user may miss it
-   Do not use generic error text — always tell the user what failed
-   Do not leave submit buttons enabled during async — always set `disabled` + `loading`
-   Do not hardcode `px` values or hex colours — always use `Spacing` and `Colour` tokens
