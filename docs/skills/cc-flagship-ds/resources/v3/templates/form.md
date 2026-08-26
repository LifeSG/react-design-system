# Form Template

Single or multi-step form page built with `@lifesg/react-design-system` v3.

## When to use

-   Collecting user input across one or more steps
-   Profile, settings, or data-entry pages

---

## Page shell

Narrow-content shell — `Navbar` + `PageWrapper` (styled div) inside `<main>` + `Footer`. Two sibling `ColDiv`s inside the grid: one full-width row for `ProgressIndicator` (multi-step only), one narrow row for the form body.

```tsx
import { Navbar } from "@lifesg/react-design-system/navbar";
import { Footer } from "@lifesg/react-design-system/footer";
import { Layout } from "@lifesg/react-design-system/layout";
import styled from "styled-components";
import { Spacing, MediaQuery } from "@lifesg/react-design-system/theme";

const PageWrapper = styled.div`
  padding: ${Spacing["spacing-32"]} 0;
  ${MediaQuery.MinWidth.lg} {
    padding: ${Spacing["spacing-64"]} 0;
  }
`;

// Usage:
<Navbar resources={{ primary: { brandName: "MyService", logoSrc: "/logo.svg" } }} items={{ desktop: [] }} />
<main>
  <PageWrapper>
    <Layout.Container type="grid">
      {/* ProgressColDiv — multi-step only; omit for single-step */}
      <Layout.ColDiv xsCols={12} lgCols={12}> ... </Layout.ColDiv>
      {/* FormColDiv — always present */}
      <Layout.ColDiv xsCols={12} lgCols={9} xlCols={8}> ... </Layout.ColDiv>
    </Layout.Container>
  </PageWrapper>
</main>
<Footer />
```

## Page anatomy

```
┌──────────────────────────────────────────────────────────┐
│ Navbar                                                   │
├──────────────────────────────────────────────────────────┤
│  PageWrapper (padding: spacing-32 0; lg: spacing-64)     │
│  └─ Layout.Container type="grid"                         │
│     ├─ ProgressColDiv xsCols={12} lgCols={12}            │
│     │  └─ ProgressIndicator  (multi-step only)           │
│     └─ FormColDiv xsCols={12} lgCols={9} xlCols={8}      │
│        │  flex column · gap: spacing-32                   │
│        ├─ PageHeadingBlock (flex column · gap: 16)        │
│        │  ├─ PageTitle (h1)                               │
│        │  └─ PageDescription (p, optional)               │
│        ├─ FormContent                                     │
│        │  └─ Form fields (built-in margin-bottom: 32)    │
│        │     Non-form components → margin-bottom: 32     │
│        └─ FormNav                                        │
├──────────────────────────────────────────────────────────┤
│ Footer                                                   │
└──────────────────────────────────────────────────────────┘
```

---

## Step state machine

```tsx
const STEPS = ["Step one", "Step two", "Review"];
const [step, setStep] = useState(0);
const isLastStep = step === STEPS.length - 1;
```

-   `currentIndex` on `ProgressIndicator` is **zero-based**
-   `ProgressIndicator` sits in its own `Layout.ColDiv xsCols={12} lgCols={12}` — never inside the 8/9-col form column
-   Page heading defaults to `{STEPS[step]}`; override per step only when the heading needs to differ from the label
-   The review step is **required** as the last entry in `STEPS`

Single-step forms: omit `ProgressColDiv`/`ProgressIndicator` entirely and pass no `onBack` to `FormNav`.

---

## Per-step validation

Validate the current step before advancing — never let `onNext` proceed with invalid fields.

```tsx
function validateStep(step: number): Record<string, string> {
    const errors: Record<string, string> = {};
    if (step === 0) {
        if (!name.trim()) errors.name = "Enter your full name";
        if (!email.trim()) errors.email = "Enter your email address";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
            errors.email = "Enter a valid email address";
    }
    if (step === 1) {
        // step 2 checks
    }
    return errors;
}

const [errors, setErrors] = useState<Record<string, string>>({});

function handleNext() {
    const stepErrors = validateStep(step);
    setErrors(stepErrors);
    if (Object.keys(stepErrors).length > 0) return;
    if (!isLastStep) setStep((s) => s + 1);
    else handleSubmit();
}
```

-   Validate on `Next`, not on every keystroke — re-validate live only once a field already shows an `errorMessage`
-   Pass `errorMessage={errors.fieldName}` directly to the `Form.*` component — never render a separate error block
-   `Back` never triggers validation — always allowed
-   Clear a field's error as soon as its value changes, even before the next `Next` press
-   On the review step, skip validation — the user already passed prior steps

---

## Rules

|                          | Wrong                                 | Correct                                                                                                                                                                 |
| ------------------------ | ------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Column width             | `lgCols={12}`                         | `lgCols={9} xlCols={8}`                                                                                                                                                 |
| Progress indicator       | Inside 8-col div                      | Separate `lgCols={12}` ColDiv; `currentIndex` is zero-based                                                                                                             |
| Page heading             | Static string                         | Defaults to `{STEPS[step]}`; override per step as needed                                                                                                                |
| Field spacing            | `gap` on wrapper div                  | Rely on component built-in `margin-bottom: 32`; add `margin-bottom: spacing-32` via `styled()` for components without it (BoxContainer, Toggle, FileUpload, ESignature) |
| Constrained-width inputs | `width` on `styled(Form.X)`           | `max-width` — works alongside internal `width: 100%`                                                                                                                    |
| Review step              | Omitting                              | Required as last step — one `BoxContainer` per preceding step                                                                                                           |
| Optional fields          | Marking required fields with asterisk | All fields are required by default; add `"(optional)"` to the label of fields not validated in `validateStep`                                                           |

---

## FormNav

Back left · Next right · Extra actions to the left of Next.

**Buttons:** Next → `"default"` · Back → `"secondary"` · Other → `"light"`.

Responsive sizing — copy exactly from the `FormNav.tsx` block below:

-   Mobile: `width: 100%`, stacked column
-   Desktop (`lg`): `width: auto; min-width: 10rem`, row layout, all buttons equalised to widest via `useLayoutEffect`

**Do not simplify — omitting the `MediaQuery` override causes full-width buttons on desktop.**

```tsx
// FormNav.tsx
import { useRef, useLayoutEffect } from "react";
import styled from "styled-components";
import { Spacing, MediaQuery } from "@lifesg/react-design-system/theme";
import { Button } from "@lifesg/react-design-system/button";

interface FormNavProps {
    onBack?: () => void;
    onNext: () => void;
    nextLabel?: string;
    isSubmitting?: boolean;
    actions?: React.ReactNode;
}

const Nav = styled.div`
    margin-top: ${Spacing["spacing-32"]};
    display: flex;
    flex-direction: column;
    gap: ${Spacing["spacing-24"]};
    ${MediaQuery.MinWidth.lg} {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        gap: 0;
    }
`;

const PrimaryGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${Spacing["spacing-16"]};
    ${MediaQuery.MinWidth.lg} {
        flex-direction: row;
        gap: ${Spacing["spacing-16"]};
        order: 2;
        margin-left: auto;
    }
`;

const NextButton = styled(Button.Default)`
    box-sizing: border-box;
    width: 100%;
    ${MediaQuery.MinWidth.lg} {
        width: auto;
        min-width: 10rem;
        order: 1;
    }
`;

const ActionsGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${Spacing["spacing-16"]};
    & > button {
        box-sizing: border-box;
        width: 100%;
    }
    ${MediaQuery.MinWidth.lg} {
        flex-direction: row;
        gap: ${Spacing["spacing-16"]};
        & > button {
            width: auto;
            min-width: 10rem;
        }
    }
`;

const BackButton = styled(Button.Default)`
    box-sizing: border-box;
    width: 100%;
    ${MediaQuery.MinWidth.lg} {
        width: auto;
        min-width: 10rem;
        order: 1;
    }
`;

export default function FormNav({
    onBack,
    onNext,
    nextLabel = "Next",
    isSubmitting = false,
    actions,
}: FormNavProps) {
    const navRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        if (!navRef.current) return;
        const buttons = Array.from(
            navRef.current.querySelectorAll<HTMLElement>("button")
        );
        buttons.forEach((b) => {
            b.style.width = "";
        });
        if (!window.matchMedia("(min-width: 1024px)").matches) return;
        const widest = Math.max(...buttons.map((b) => b.offsetWidth));
        buttons.forEach((b) => {
            b.style.width = `${widest}px`;
        });
    });

    return (
        <Nav ref={navRef}>
            <PrimaryGroup>
                <NextButton
                    styleType="default"
                    onClick={onNext}
                    loading={isSubmitting}
                    disabled={isSubmitting}
                >
                    {nextLabel}
                </NextButton>
                {actions && <ActionsGroup>{actions}</ActionsGroup>}
            </PrimaryGroup>
            {onBack && (
                <BackButton
                    styleType="secondary"
                    onClick={onBack}
                    disabled={isSubmitting}
                >
                    Back
                </BackButton>
            )}
        </Nav>
    );
}
```

Usage:

```tsx
<FormNav
    onBack={step > 0 ? () => setStep((s) => s - 1) : undefined}
    onNext={handleNext}
    nextLabel={isLastStep ? "Submit" : "Next"}
    actions={
        <Button.Default styleType="light" onClick={saveDraft}>
            Save draft
        </Button.Default>
    }
/>
```

---

## Review step

Last step of every multi-step form. One `BoxContainer` per preceding step.

```tsx
import { BoxContainer } from "@lifesg/react-design-system/box-container";
import { UneditableSection } from "@lifesg/react-design-system/uneditable-section";

const StyledBoxContainer = styled(BoxContainer)`
    margin-bottom: ${Spacing["spacing-32"]};
`;

const SummaryPadding = styled.div`
    padding: ${Spacing["spacing-20"]};
    ${MediaQuery.MinWidth.md} {
        padding: ${Spacing["spacing-32"]};
    }
`;

{
    step === STEPS.length - 1 && (
        <StyledBoxContainer title="Step one" collapsible expanded>
            <SummaryPadding>
                <UneditableSection
                    fullWidth
                    background={false}
                    items={[
                        {
                            label: "Short field",
                            value: valueA || "—",
                            displayWidth: "half",
                        },
                        {
                            label: "Short field",
                            value: valueB || "—",
                            displayWidth: "half",
                        },
                        { label: "Long field", value: longValue || "—" },
                    ]}
                />
            </SummaryPadding>
        </StyledBoxContainer>
    );
}
```

-   `background={false}` — removes default background when inside `BoxContainer`
-   `fullWidth` — fills container without `Layout.Content` spacing
-   `displayWidth: "half"` — two short fields per row; omit for long values
-   Show `"—"` for unanswered fields
-   Review-step fields are `readOnly`, never `disabled` — `disabled` reads as broken to screen readers

---

## Sticky action bar

For forms longer than one viewport height, fix the action buttons at the bottom instead of the inline `FormNav`.

```tsx
const StickyBar = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: ${Colour["bg-stronger"]};
    padding: ${Spacing["spacing-16"]} ${Spacing["spacing-24"]};
    display: flex;
    justify-content: flex-end;
    gap: ${Spacing["spacing-16"]};
    box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.08);
`;
```

Do not show both `FormNav` and a sticky bar — use one or the other.

---

## Anti-patterns

-   Do not validate all steps upfront — only the current step, on `Next`
-   Do not use `disabled` for read-only review fields — use `readOnly`
-   Do not skip the review step on a multi-step form
-   Do not put `ProgressIndicator` inside the 8/9-col form column
-   Do not hardcode step count logic — derive `isLastStep` from `STEPS.length`
-   Do not let `Back` trigger validation — it must always be allowed

---

## Complete template

This renders the inner grid content only (ColDivs and form body). Wrap with the page shell defined in `## Page shell` above — `<Navbar />`, `<main><PageWrapper><Layout.Container type="grid">`, this content, `</Layout.Container></PageWrapper></main>`, `<Footer />`.

```tsx
import { useState } from "react";
import styled from "styled-components";
import { Spacing, MediaQuery } from "@lifesg/react-design-system/theme";
import { Form } from "@lifesg/react-design-system/form";
import { ProgressIndicator } from "@lifesg/react-design-system/progress-indicator";
import { Layout } from "@lifesg/react-design-system/layout";
import { Alert } from "@lifesg/react-design-system/alert";
import FormNav from "./FormNav";

const ProgressColDiv = styled(Layout.ColDiv)`
    margin-bottom: ${Spacing["spacing-32"]};
`;

const FormColDiv = styled(Layout.ColDiv)`
    display: flex;
    flex-direction: column;
    gap: ${Spacing["spacing-32"]};
`;

const PageHeadingBlock = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${Spacing["spacing-16"]};
`;

const PageTitle = styled.h1`
    margin: 0;
`;

const PageDescription = styled.p`
    margin: 0;
`;

const FormContent = styled.div``;

const STEPS = ["Step one", "Step two", "Review"];

const CATEGORY_OPTIONS = [
    { label: "Option A", value: "a" },
    { label: "Option B", value: "b" },
];

export default function FormPage() {
    const [step, setStep] = useState(0);
    const isLastStep = step === STEPS.length - 1;

    // Step 1 fields
    const [name, setName] = useState("");
    const [category, setCategory] = useState("");

    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);

    function validateStep(s: number): Record<string, string> {
        const e: Record<string, string> = {};
        if (s === 0) {
            if (!name.trim()) e.name = "Enter your full name";
            if (!category) e.category = "Select a category";
        }
        return e;
    }

    function handleNext() {
        const stepErrors = validateStep(step);
        setErrors(stepErrors);
        if (Object.keys(stepErrors).length > 0) return;
        if (!isLastStep) setStep((s) => s + 1);
        else handleSubmit();
    }

    async function handleSubmit() {
        setIsSubmitting(true);
        setSubmitError(null);
        try {
            // FIXME: replace with actual API client and submission endpoint, e.g.:
            // await apiClient.post("/api/v1/submissions", { name, category });
            console.log("submitted", { name, category });
        } catch (err: unknown) {
            setSubmitError(
                err instanceof Error
                    ? err.message
                    : "Submission failed. Please try again."
            );
        } finally {
            setIsSubmitting(false);
        }
    }

    // Render inside: <Layout.Container type="grid"> ... </Layout.Container>
    return (
        <>
            <ProgressColDiv xsCols={12} lgCols={12}>
                <ProgressIndicator
                    steps={STEPS}
                    currentIndex={step}
                    displayExtractor={(s) => s}
                />
            </ProgressColDiv>

            <FormColDiv xsCols={12} lgCols={9} xlCols={8}>
                <PageHeadingBlock>
                    <PageTitle>{STEPS[step]}</PageTitle>
                    {/* <PageDescription>Optional description</PageDescription> */}
                </PageHeadingBlock>

                {submitError && <Alert type="error">{submitError}</Alert>}

                <FormContent>
                    {step === 0 && (
                        <>
                            <Form.Input
                                label="Full name"
                                value={name}
                                onChange={(e) => {
                                    setName(e.target.value);
                                    if (errors.name)
                                        setErrors((prev) => ({
                                            ...prev,
                                            name: "",
                                        }));
                                }}
                                errorMessage={errors.name}
                            />
                            <Form.Select
                                label="Category"
                                options={CATEGORY_OPTIONS}
                                selectedOption={CATEGORY_OPTIONS.find(
                                    (o) => o.value === category
                                )}
                                onSelectOption={(opt) => {
                                    setCategory(opt.value);
                                    if (errors.category)
                                        setErrors((prev) => ({
                                            ...prev,
                                            category: "",
                                        }));
                                }}
                                errorMessage={errors.category}
                            />
                        </>
                    )}
                    {step === 1 && <>{/* step 2 fields */}</>}
                </FormContent>

                <FormNav
                    onBack={step > 0 ? () => setStep((s) => s - 1) : undefined}
                    onNext={handleNext}
                    nextLabel={isLastStep ? "Submit" : "Next"}
                    isSubmitting={isSubmitting}
                />
            </FormColDiv>
        </>
    );
}
```

---

## Notes

-   Single-step: omit `ProgressIndicator` and pass no `onBack` to `FormNav`
-   Pass `actions` to `FormNav` for secondary actions like Save draft
-   `Form.MaskedInput` and other complex inputs require two-argument `shouldForwardProp` in `App.tsx` — see `setup-v3.md`
