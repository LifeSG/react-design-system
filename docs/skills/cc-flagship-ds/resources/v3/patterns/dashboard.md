# Dashboard Pattern

Admin interfaces, internal portals, and post-login overview pages. Always uses the sidenav shell.

## When to use

-   Admin portals and internal tools
-   Post-login landing pages
-   User portals with personalised data and quick actions

Do not use for public-facing pages without authentication → use `Navbar` + `<main><Layout.Container type="grid">` + `Footer` directly.
Do not use for a single record's full detail → use `detail.md`.

---

## Page shell

```
Navbar
├── Sidenav (fixed left, 240px)
└── main content (flex: 1)
Footer
```

```tsx
import { Navbar } from "@lifesg/react-design-system/navbar";
import { Footer } from "@lifesg/react-design-system/footer";
import { Layout } from "@lifesg/react-design-system/layout";
import { Sidenav } from "@lifesg/react-design-system/sidenav";
import styled from "styled-components";
import { Spacing, MediaQuery } from "@lifesg/react-design-system/theme";

const AppShell = styled.div`
    display: flex;
    min-height: 100vh;
`;

const SidenavWrapper = styled.aside`
    width: 240px;
    flex-shrink: 0;
    ${MediaQuery.MaxWidth.md} {
        display: none;
    }
`;

const MainContent = styled.main`
    flex: 1;
    min-width: 0;
    padding: ${Spacing["spacing-32"]};
`;

export default function DashboardPage() {
    return (
        <>
            <Navbar
                resources={{
                    primary: { brandName: "MyService", logoSrc: "/logo.svg" },
                }}
                items={{ desktop: [] }}
            />
            <AppShell>
                <SidenavWrapper>
                    <Sidenav>
                        {/* See sidenav.md for full Sidenav.Group / Sidenav.Item wiring */}
                    </Sidenav>
                </SidenavWrapper>
                <MainContent>
                    <Layout.Container type="grid">
                        <Layout.ColDiv xsCols={8} lgCols={12}>
                            {/* page content */}
                        </Layout.ColDiv>
                    </Layout.Container>
                </MainContent>
            </AppShell>
            <Footer />
        </>
    );
}
```

For Sidenav wiring (groups, items, selected state, onClick) — read `../components/sidenav.md`.

---

## Components

| Slot                  | Component                                                             |
| --------------------- | --------------------------------------------------------------------- |
| Header                | `Navbar` (masthead enabled)                                           |
| Side navigation       | `Sidenav`                                                             |
| Content layout        | `Layout.Container type="grid"` + `Layout.ColDiv` inside `MainContent` |
| Metric containers     | `Card`                                                                |
| Section headings      | `Typography.HeadingMD`, `Typography.HeadingSM`                        |
| Metric values         | `Typography.HeadingXL`                                                |
| Labels / descriptions | `Typography.BodyBL`, `Typography.BodyBLSmall`                         |
| Status indicators     | `Badge`                                                               |
| Quick actions         | `Button.Default`, `ButtonWithIcon.Default`                            |
| Footer                | `Footer`                                                              |

---

## Content area layout structures

These go inside the `Layout.Container` within `MainContent`.

### Metric cards row

```
ColDiv xsCols=8 mdCols=6 lgCols=3  — Metric card
ColDiv xsCols=8 mdCols=6 lgCols=3  — Metric card
ColDiv xsCols=8 mdCols=6 lgCols=3  — Metric card
ColDiv xsCols=8 mdCols=6 lgCols=3  — Metric card
```

### Settings / profile page

```
ColDiv xsCols=8 lgCols=12
  HeadingXL + BodyMD subtitle       (spacing-32 below)
  Card — Settings group 1
  Card — Settings group 2           (spacing-32 between cards)
  Sticky action bar (see form.md)   (if page exceeds viewport)
```

`Toast` for save confirmations; `Alert type="error"` above the relevant `Card` for validation failures.

### Full-width with sections

```
ColDiv xsCols=8                    — Section heading
ColDiv xsCols=8 mdCols=4  ×3      — Metric row
ColDiv xsCols=8                    — Section heading
ColDiv xsCols=8                    — Full-width table
```

---

## Rules

-   Always use the sidenav shell — `Navbar` + `Sidenav` (left) + `MainContent` (right) + `Footer`
-   **Always use `Layout.Container type="grid"` + `Layout.ColDiv` inside `MainContent`** — never replace with plain styled divs. The DS grid encodes gutter tokens and breakpoints that plain CSS duplicates incorrectly.
-   Show 3–4 key metrics prominently — never more than fits above the fold
-   Metric cards must have a label, a value, and an optional trend (`Badge`)
-   All grid columns must stack on mobile: `xsCols={8}`
-   Limit dashboard to 1–2 scroll-lengths — remove or collapse lower-priority content
-   Use skeleton loading while fetching (see `states.md`)

## Anti-patterns

-   Do not use Shell 1 (full-width, no sidenav) for dashboard screens
-   **Do not use plain `styled.div` grids for metric rows or content sections** — use `Layout.Container type="grid"` + `Layout.ColDiv xsCols mdCols lgCols` instead
-   Do not show percentage changes without context labels
-   Do not combine pagination AND lazy loading on the same list
-   Do not omit loading state — always show feedback while fetching metrics
