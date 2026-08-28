# Form Template (v4)

Single or multi-step form page built with `@lifesg/react-design-system` v4.

## When to use

-   Collecting user input across one or more steps
-   Profile, settings, or data-entry pages

---

## Page anatomy

```
┌──────────────────────────────────────────────────────────┐
│ Header                                                   │
├──────────────────────────────────────────────────────────┤
│  <main>                                                  │
│  └─ pageWrapper (padding: spacing-32 0; lg: spacing-64) │
│     └─ Layout.Container type="grid"                     │
│        ├─ Layout.ColDiv xsCols={12} lgCols={12}         │
│        │  └─ ProgressIndicator  (multi-step only)       │
│        └─ Layout.ColDiv xsCols={12} lgCols={9} xlCols={8}│
│           │  flex column · gap: spacing-32               │
│           ├─ pageHeadingBlock (flex column · gap: 16)   │
│           │  ├─ h1                                       │
│           │  └─ p (optional)                             │
│           ├─ div (form content)                          │
│           │  └─ Form fields (built-in margin-bottom: 32)│
│           │     Non-form components → margin-bottom: 32 │
│           └─ FormNav                                     │
├──────────────────────────────────────────────────────────┤
│ Footer                                                   │
└──────────────────────────────────────────────────────────┘
```

---

## Styling approach

v4 uses **CSS Modules** — no `styled-components`.

-   Design tokens are plain CSS variable strings (`var(--fds-spacing-32)`, `var(--fds-colour-text)`, etc.)
-   Responsive styles use the breakpoint class selector: `:where(body.fds-breakpoint-lg-min) &`
-   `ThemeProvider` adds breakpoint classes to `document.body` at runtime (e.g. `fds-breakpoint-lg-min`)
-   Pass `className={styles.x}` to `Layout.ColDiv`, `Button.Default`, and other DS components that accept it

---

## Rules

|                          | Wrong                | Correct                                                                                                                                                                                  |
| ------------------------ | -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Column width             | `lgCols={12}`        | `lgCols={9} xlCols={8}`                                                                                                                                                                  |
| Progress indicator       | Inside 8-col div     | Separate `lgCols={12}` ColDiv; `currentIndex` is zero-based                                                                                                                              |
| Page heading             | Static string        | Defaults to `{STEPS[step]}`; override per step as needed                                                                                                                                 |
| Field spacing            | `gap` on wrapper div | Rely on component built-in `margin-bottom: 32`; add `margin-bottom: var(--fds-spacing-32)` via CSS Module class for components without it (BoxContainer, Toggle, FileUpload, ESignature) |
| Constrained-width inputs | `width` on element   | `max-width` — works alongside internal `width: 100%`                                                                                                                                     |
| Review step              | Omitting             | Required as last step — one `BoxContainer` per preceding step                                                                                                                            |

---

## CSS setup (index.css)

```css
@import url("https://assets.life.gov.sg/react-design-system/v3/css/open-sans.css");
@import "@lifesg/react-design-system/theme/styles/default.css";
@import "@lifesg/react-design-system/theme/styles/lifesg.css";

html {
    -moz-text-size-adjust: none;
    -webkit-text-size-adjust: none;
    text-size-adjust: none;
    box-sizing: border-box;
}

*,
*::before,
*::after {
    box-sizing: inherit;
    padding: 0;
    margin: 0;
}

body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: var(--fds-font-family-body, "Open Sans", sans-serif);
}

a {
    cursor: pointer;
    text-decoration: none;
}

button,
select,
input[type="button"],
input[type="submit"],
input[type="reset"],
::file-selector-button {
    color: inherit;
}

#root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

#root > div {
    display: flex;
    flex-direction: column;
    flex: 1;
}
```

> `default.css` defines all `--fds-*` tokens. `lifesg.css` overrides brand/primary colours. Font CDN path is still v3 — fonts are shared across versions.

---

## App setup

```tsx
// App.tsx
import { ThemeProvider } from "@lifesg/react-design-system/theme";
import { Navbar } from "@lifesg/react-design-system/navbar";
import { Footer } from "@lifesg/react-design-system/footer";
import { Layout } from "@lifesg/react-design-system/layout";
import FormPage from "./FormPage";
import styles from "./App.module.css";

function App() {
    return (
        <ThemeProvider theme="lifesg" mode="light">
            <Navbar
                masthead
                items={{
                    desktop: [{ id: "home", children: "Home", href: "/" }],
                }}
            />
            <main style={{ flex: 1 }}>
                <div className={styles.pageWrapper}>
                    <Layout.Container type="grid">
                        <FormPage />
                    </Layout.Container>
                </div>
            </main>
            <Footer />
        </ThemeProvider>
    );
}
```

```css
/* App.module.css */
.pageWrapper {
    padding: var(--fds-spacing-32) 0;

    :global(body.fds-breakpoint-lg-min) & {
        padding: var(--fds-spacing-64) 0;
    }
}
```

---

## FormNav

```tsx
// FormNav.tsx
import { useRef, useLayoutEffect } from "react";
import { Button } from "@lifesg/react-design-system/button";
import styles from "./FormNav.module.css";

interface FormNavProps {
    onBack?: () => void;
    onNext: () => void;
    nextLabel?: string;
    isSubmitting?: boolean;
    actions?: React.ReactNode;
}

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
        if (!window.matchMedia("(min-width: 769px)").matches) return;
        const widest = Math.max(...buttons.map((b) => b.offsetWidth));
        buttons.forEach((b) => {
            b.style.width = `${widest}px`;
        });
    });

    return (
        <div ref={navRef} className={styles.nav}>
            <div className={styles.primaryGroup}>
                <Button.Default
                    styleType="default"
                    onClick={onNext}
                    loading={isSubmitting}
                    disabled={isSubmitting}
                    className={styles.nextButton}
                >
                    {nextLabel}
                </Button.Default>
                {actions && (
                    <div className={styles.actionsGroup}>{actions}</div>
                )}
            </div>
            {onBack && (
                <Button.Default
                    styleType="secondary"
                    onClick={onBack}
                    className={styles.backButton}
                >
                    Back
                </Button.Default>
            )}
        </div>
    );
}
```

```css
/* FormNav.module.css */
.nav {
    margin-top: var(--fds-spacing-32);
    display: flex;
    flex-direction: column;
    gap: var(--fds-spacing-24);

    :global(body.fds-breakpoint-lg-min) & {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        gap: 0;
    }
}

.primaryGroup {
    display: flex;
    flex-direction: column;
    gap: var(--fds-spacing-16);

    :global(body.fds-breakpoint-lg-min) & {
        flex-direction: row;
        gap: var(--fds-spacing-16);
        order: 2;
        margin-left: auto;
    }
}

.nextButton {
    box-sizing: border-box;
    width: 100%;

    :global(body.fds-breakpoint-lg-min) & {
        width: auto;
        min-width: 10rem;
        order: 1;
    }
}

.actionsGroup {
    display: flex;
    flex-direction: column;
    gap: var(--fds-spacing-16);

    & > button {
        box-sizing: border-box;
        width: 100%;
    }

    :global(body.fds-breakpoint-lg-min) & {
        flex-direction: row;
        gap: var(--fds-spacing-16);
        & > button {
            width: auto;
            min-width: 10rem;
        }
    }
}

.backButton {
    box-sizing: border-box;
    width: 100%;

    :global(body.fds-breakpoint-lg-min) & {
        width: auto;
        min-width: 10rem;
        order: 1;
    }
}
```

---

## Review step

```tsx
import { BoxContainer } from "@lifesg/react-design-system/box-container";
import { UneditableSection } from "@lifesg/react-design-system/uneditable-section";
import styles from "./FormPage.module.css";

{
    step === STEPS.length - 1 && (
        <BoxContainer
            title="Step one"
            collapsible
            expanded
            className={styles.boxContainer}
        >
            <div className={styles.summaryPadding}>
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
            </div>
        </BoxContainer>
    );
}
```

```css
/* in FormPage.module.css */
.boxContainer {
    margin-bottom: var(--fds-spacing-32);
}

.summaryPadding {
    padding: var(--fds-spacing-20);

    :global(body.fds-breakpoint-md-min) & {
        padding: var(--fds-spacing-32);
    }
}
```

---

## Complete template

```tsx
// FormPage.tsx
import { useState } from "react";
import { Form } from "@lifesg/react-design-system/form";
import { ProgressIndicator } from "@lifesg/react-design-system/progress-indicator";
import { Layout } from "@lifesg/react-design-system/layout";
import { Alert } from "@lifesg/react-design-system/alert";
import FormNav from "./FormNav";
import styles from "./FormPage.module.css";

const STEPS = ["Step one", "Step two", "Review"];

const CATEGORY_OPTIONS = [
    { label: "Option A", value: "a" },
    { label: "Option B", value: "b" },
];

export default function FormPage() {
    const [step, setStep] = useState(0);
    const isLastStep = step === STEPS.length - 1;

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
            // FIXME: replace with actual API call, e.g.:
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

    return (
        <>
            <Layout.ColDiv
                xsCols={12}
                lgCols={12}
                className={styles.progressColDiv}
            >
                <ProgressIndicator
                    steps={STEPS}
                    currentIndex={step}
                    displayExtractor={(s) => s}
                />
            </Layout.ColDiv>

            <Layout.ColDiv
                xsCols={12}
                lgCols={9}
                xlCols={8}
                className={styles.formColDiv}
            >
                <div className={styles.pageHeadingBlock}>
                    <h1 className={styles.pageTitle}>{STEPS[step]}</h1>
                    {/* <p className={styles.pageDescription}>Optional description</p> */}
                </div>

                {submitError && <Alert type="error">{submitError}</Alert>}

                <div>
                    {step === 0 && (
                        <>
                            <Form.Input
                                label="Full name"
                                value={name}
                                errorMessage={errors.name}
                                onChange={(e) => {
                                    setName(e.target.value);
                                    if (errors.name)
                                        setErrors((prev) => ({
                                            ...prev,
                                            name: "",
                                        }));
                                }}
                            />
                            <Form.Select
                                label="Category"
                                options={CATEGORY_OPTIONS}
                                selectedOption={CATEGORY_OPTIONS.find(
                                    (o) => o.value === category
                                )}
                                listExtractor={(o) => o.label}
                                displayValueExtractor={(o) => o.label}
                                valueExtractor={(o) => o.value}
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
                </div>

                <FormNav
                    onBack={step > 0 ? () => setStep((s) => s - 1) : undefined}
                    onNext={handleNext}
                    nextLabel={isLastStep ? "Submit" : "Next"}
                    isSubmitting={isSubmitting}
                />
            </Layout.ColDiv>
        </>
    );
}
```

```css
/* FormPage.module.css */
.progressColDiv {
    margin-bottom: var(--fds-spacing-32);
}

.formColDiv {
    display: flex;
    flex-direction: column;
    gap: var(--fds-spacing-32);
}

.pageHeadingBlock {
    display: flex;
    flex-direction: column;
    gap: var(--fds-spacing-16);
}

.pageTitle {
    margin: 0;
}

.pageDescription {
    margin: 0;
}
```

---

## Notes

-   Single-step: omit `ProgressIndicator` and pass no `onBack` to `FormNav`
-   Pass `actions` to `FormNav` for secondary actions like Save draft
-   `ThemeProvider` accepts `theme` (string from `THEME_TYPES`) and `mode` (`"light" | "dark" | "auto"`)
-   CSS variables (`--fds-*`) are scoped to the `ThemeProvider` div — they are not global
