# Detail Pattern

Pages for reading the full content of a single record.

## When to use

-   User navigated from a list to see one specific record
-   Screen is primarily read-only with limited, targeted edit actions
-   Content is structured around a single entity

Do not use for:

-   Primarily collecting new input → use `form.md`
-   Showing many records side by side → use `listing.md`

---

## Layout types

| Record type                                        | Layout            |
| -------------------------------------------------- | ----------------- |
| Submission, application, job, scheme, general info | Description-based |
| Venue, facility, park, address-centric resource    | Location-based    |
| Bookable resource with availability slots          | Booking-based     |

When in doubt, start with Description-based.

---

## 1. Description-based

```
Layout.Section > Layout.Container > Layout.Content
  │
  ├── BreadcrumbRow (space-between flex)
  │     Breadcrumb (left)
  │     Button.Default styleType="light" (right — page-level utility action)
  │
  ├── Card (full-width, bordered)
  │     ContentArea (flex-1)
  │       Typography.HeadingXL as="h1"       — Record title
  │       Typography.HeadingSM               — Subtitle
  │       Status badge (pill, outlined)      — Optional, below title
  │       Typography.BodyBL color=text-subtler — Description (one line)
  │       AttributeRow × up to 3             — Icon + value text
  │       Tag / Pill row                     — Optional
  │       Typography.BodySM color=text-subtler — Timestamp
  │     CtaColumn (width ~160px)
  │       Button.Default                     — Primary CTA
  │       Button.Default styleType="secondary" — Secondary CTA
  │
  ├── Alert type="info"                      — Optional, outside card
  │
  └── ContentSection × N (no card wrapper)
        Typography.HeadingSM as="h2"         — Section heading
        Typography.BodyBL                    — Body paragraph(s)
```

## 2. Location-based

Same as Description-based but wrapped in a two-column layout. Remove `Layout.Content` and the `Card` + `CtaColumn`:

```
Layout.Section > Layout.Container
  ├── BreadcrumbRow
  └── TwoColumn (flex, gap)
        LeftColumn (~427px)
          <img> or map embed
          Typography.HeadingSM as="h2"   — Attributes subtitle
          AttributeRow × up to 3
          Tag / Pill row (optional)
        RightColumn (flex-1)
          Typography.HeadingXL as="h1"
          Typography.HeadingSM
          Collapsible description (truncated + Show more/less toggle)
          Alert (optional)
          ContentSection × N
```

## 3. Booking-based

Same as Location-based. Right column adds an Availability `Card` between content section groups:

```
RightColumn (flex-1)
  Typography.HeadingXL as="h1"
  ...
  ContentSection(s) before availability
  Card (Availability)
    Typography.HeadingSM as="h2"
    Description
    Calendar
    Time slot display
    Form.TimeRangePicker
    Description note
    Divider
    CTA row: Button.Default styleType="light" (left) · Button.Default (right)
  ContentSection(s) after availability
```

---

## Component defaults

| Slot                      | Component                                        | Notes                                                       |
| ------------------------- | ------------------------------------------------ | ----------------------------------------------------------- |
| Page-level utility action | `Button.Default styleType="light"`               | Right of breadcrumb row — e.g. "View bookmarks"             |
| Record title              | `Typography.HeadingXL as="h1"`                   | —                                                           |
| Subtitle                  | `Typography.HeadingSM`                           | —                                                           |
| Status badge              | Pill-shaped outlined span                        | Outlined border + matching text/bg colour. Never solid fill |
| Description               | `Typography.BodyBL color=Colour["text-subtler"]` | One line, optional                                          |
| Collapsible description   | Custom expand/collapse                           | Location + Booking only. "Show more ↓" / "Show less ↑"      |
| Attribute rows            | Icon + `Typography.BodyBL`                       | Up to 3 rows                                                |
| Timestamp                 | `Typography.BodySM color=Colour["text-subtler"]` | Last element in card content area                           |
| CTAs (in card)            | `Button.Default` primary + secondary             | Description-based only                                      |
| Alert                     | `Alert type="info"`                              | Outside the card                                            |
| Section heading           | `Typography.HeadingSM as="h2"`                   | Outside any card                                            |
| Section body              | `Typography.BodyBL`                              | One or more paragraphs                                      |

## Status badge colour mapping

| Status       | Colour          |
| ------------ | --------------- |
| Submitted    | Green / success |
| Under review | Amber / warning |
| Closed       | Blue / info     |
| Rejected     | Red / error     |
| Draft        | Grey / neutral  |

---

## Rules

-   Breadcrumb is always present — users arriving via deep links need context
-   Entity CTAs (Apply, Save) go inside the details card's right column — not in the breadcrumb row
-   Page-level utility actions (View bookmarks) go in the breadcrumb row — not inside the card
-   Content sections have no card wrapper — they are intentionally borderless
-   Collapsible description: truncate at ~3 lines, "Show more ↓" / "Show less ↑" toggle
-   Key attribute rows: icon + value, no separate field label, up to 3 rows
-   No inline editing — navigate to a separate form screen for edits
-   Status-change actions (Approve / Reject) confirmed via modal before executing
-   When 2+ page-level utility actions exist, collapse into a kebab menu

---

## Complete template

Description-based layout. Swap the body section for Location-based or Booking-based as needed.

```tsx
import { useState, useEffect } from "react";
import styled from "styled-components";
import { Navbar } from "@lifesg/react-design-system/navbar";
import { Footer } from "@lifesg/react-design-system/footer";
import { Layout } from "@lifesg/react-design-system/layout";
import { Breadcrumb } from "@lifesg/react-design-system/breadcrumb";
import { Card } from "@lifesg/react-design-system/card";
import { Typography } from "@lifesg/react-design-system/typography";
import { Button } from "@lifesg/react-design-system/button";
import { Alert } from "@lifesg/react-design-system/alert";
import { ErrorDisplay } from "@lifesg/react-design-system/error-display";
import { Spacing, Colour, MediaQuery } from "@lifesg/react-design-system/theme";

// ─── Types ────────────────────────────────────────────────────────────────────

interface ItemDetail {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    status: string;
}

// ─── Styled components ────────────────────────────────────────────────────────

const PageWrapper = styled.div`
    padding: ${Spacing["spacing-32"]} 0;
    ${MediaQuery.MinWidth.lg} {
        padding: ${Spacing["spacing-48"]} 0;
    }
`;

const BreadcrumbRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: ${Spacing["spacing-24"]};
`;

const DetailCard = styled(Card)`
    display: flex;
    gap: ${Spacing["spacing-32"]};
    padding: ${Spacing["spacing-32"]};
`;

const ContentArea = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: ${Spacing["spacing-16"]};
`;

const CtaColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${Spacing["spacing-12"]};
    width: 160px;
    flex-shrink: 0;
`;

const ContentSection = styled.div`
    margin-top: ${Spacing["spacing-32"]};
    display: flex;
    flex-direction: column;
    gap: ${Spacing["spacing-16"]};
`;

const SubtleText = styled(Typography.BodyBL)`
    color: ${Colour["text-subtler"]};
`;

// ─── Component ────────────────────────────────────────────────────────────────

interface DetailPageProps {
    itemId: string;
}

export default function DetailPage({ itemId }: DetailPageProps) {
    const [item, setItem] = useState<ItemDetail | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [fetchError, setFetchError] = useState<string | null>(null);
    const [notFound, setNotFound] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setFetchError(null);
        setNotFound(false);
        // FIXME: replace with actual API client and URL to fetch record, e.g.:
        // apiClient
        //   .get<ItemDetail>(`/api/v1/items/${itemId}`)
        //   .then(({ data }) => setItem(data))
        //   .catch((err) => {
        //     if (err.status === 404) setNotFound(true);
        //     else setFetchError(err.message);
        //   })
        //   .finally(() => setIsLoading(false));
        setIsLoading(false);
    }, [itemId]);

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
                            {/* Loading */}
                            {isLoading && (
                                <Typography.BodyMD>
                                    Loading...
                                </Typography.BodyMD>
                            )}

                            {/* 404 */}
                            {!isLoading && notFound && (
                                <ErrorDisplay
                                    type="404"
                                    actionButton={{
                                        children: "Go back",
                                        onClick: () => history.back(),
                                    }}
                                />
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

                            {/* Content */}
                            {!isLoading && !notFound && !fetchError && item && (
                                <>
                                    <BreadcrumbRow>
                                        <Breadcrumb
                                            items={[
                                                { label: "Home", href: "/" },
                                                {
                                                    label: "Items",
                                                    href: "/items",
                                                },
                                                { label: item.title },
                                            ]}
                                        />
                                        {/* Page-level utility action — e.g. bookmark */}
                                        {/* <Button.Default styleType="light">Bookmark</Button.Default> */}
                                    </BreadcrumbRow>

                                    <DetailCard>
                                        <ContentArea>
                                            <Typography.HeadingXL as="h1">
                                                {item.title}
                                            </Typography.HeadingXL>
                                            <Typography.HeadingSM>
                                                {item.subtitle}
                                            </Typography.HeadingSM>
                                            <SubtleText>
                                                {item.description}
                                            </SubtleText>
                                        </ContentArea>
                                        <CtaColumn>
                                            <Button.Default styleType="default">
                                                Apply
                                            </Button.Default>
                                            <Button.Default styleType="secondary">
                                                Save
                                            </Button.Default>
                                        </CtaColumn>
                                    </DetailCard>

                                    <ContentSection>
                                        <Typography.HeadingSM as="h2">
                                            Section heading
                                        </Typography.HeadingSM>
                                        <Typography.BodyBL>
                                            Section body paragraph.
                                        </Typography.BodyBL>
                                    </ContentSection>
                                </>
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

-   Do not use `Form.Input` or any form component to display read-only values — use `UnEditableSection` or plain `Typography`
-   Do not omit the breadcrumb
-   Do not hide empty sections with blank space — remove them entirely if no data
-   Do not place the breadcrumb inside a `Card`
-   Do not use `Typography.BodyBL` alone as a section heading — always `as="h2"` for accessibility
-   Do not put entity CTAs in the breadcrumb row
-   Do not put page-level utility actions inside the details card
-   Do not wrap content sections in a `Card`
