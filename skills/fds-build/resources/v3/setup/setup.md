# App Setup — Flagship v3

Full project setup for `@lifesg/react-design-system` v3. Work through all four steps before writing any component code.

---

## Step 1 — Install packages

```bash
pnpm add @lifesg/react-design-system @lifesg/react-icons styled-components @floating-ui/react @mui/icons-material @emotion/is-prop-valid
```

---

## Step 2 — CSS (src/index.css)

`main.css` must come first. Font stylesheet must match the selected theme.

```css
@import url("https://assets.life.gov.sg/react-design-system/v3/css/main.css");
@import url("https://assets.life.gov.sg/react-design-system/v3/css/open-sans.css");
```

Font-to-theme mapping:

| Font stylesheet             | Themes                              |
| --------------------------- | ----------------------------------- |
| `open-sans.css`             | LifeSG, CCube, MyLegacy, OneService |
| `plus-jakarta-sans.css`     | BookingSG                           |
| `lato.css`                  | PA                                  |
| `libre-franklin.css`        | SupportGoWhere, SGW Digital Lobby   |
| `poppins.css` + `inter.css` | SMGS (**both files required**)      |

---

## Step 3 — App.tsx

> Use the two-argument `shouldForwardProp`. The single-argument form blocks non-HTML props (e.g. `styleType="no-border"`) from reaching inner React components through styled-component wrappers, causing visual rendering bugs.

> Sticky footer: set `#root { min-height: 100vh; display: flex; flex-direction: column; }` in `index.css` and `<main style={{ flex: 1 }}>` in App.tsx. Do not use CSS Grid on `#root` — it overrides `Layout.Container`'s max-width.

```tsx
import { ThemeProvider, StyleSheetManager } from "styled-components";
import styled from "styled-components";
import isPropValid from "@emotion/is-prop-valid";
import {
    LifeSGTheme,
    Spacing,
    MediaQuery,
} from "@lifesg/react-design-system/theme";
import { Navbar } from "@lifesg/react-design-system/navbar";
import { Footer } from "@lifesg/react-design-system/footer";
import { Layout } from "@lifesg/react-design-system/layout";

const PageWrapper = styled.div`
    padding: ${Spacing["spacing-32"]} 0;

    ${MediaQuery.MinWidth.lg} {
        padding: ${Spacing["spacing-64"]} 0;
    }
`;

export default function App() {
    return (
        <StyleSheetManager
            shouldForwardProp={(prop, target) =>
                typeof target === "string" ? isPropValid(prop) : true
            }
        >
            <ThemeProvider theme={LifeSGTheme}>
                <Navbar
                    masthead
                    items={{
                        desktop: [{ id: "home", children: "Home", href: "/" }],
                    }}
                />
                <main style={{ flex: 1 }}>
                    <PageWrapper>
                        <Layout.Container type="grid">
                            {/* page content — ColDivs here */}
                        </Layout.Container>
                    </PageWrapper>
                </main>
                <Footer />
            </ThemeProvider>
        </StyleSheetManager>
    );
}
```

**All available theme objects:**

```tsx
import {
    LifeSGTheme,
    BookingSGTheme,
    CCubeTheme,
    MyLegacyTheme,
    OneServiceTheme,
    PATheme,
    A11yPlaygroundTheme,
    SupportGoWhereTheme,
    SGWDigitalLobbyTheme,
    IMDATheme,
    SPFTheme,
    SMGSTheme,
} from "@lifesg/react-design-system/theme";
```

**Dark/light mode:** swap `ThemeProvider` for `DSThemeProvider` (auto-detects OS preference). Pass `LifeSGTheme.light` or `LifeSGTheme.dark` to force a fixed mode.

```tsx
import { DSThemeProvider } from "@lifesg/react-design-system/theme";

// inside the same StyleSheetManager wrapper:
<DSThemeProvider theme={LifeSGTheme}>{/* app */}</DSThemeProvider>;
```

---

## Step 4 — Vite config

```ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({ plugins: [react()] });
```

---

## Checklist

-   [ ] `main.css` imported first; font stylesheet matches theme (SMGS = two files)
-   [ ] `StyleSheetManager` uses two-argument `shouldForwardProp`
-   [ ] `ThemeProvider` (or `DSThemeProvider`) wraps the app with the correct theme object
-   [ ] `#root` has `min-height: 100vh; display: flex; flex-direction: column`

---

## TypeScript setup

Create `src/styled.d.ts` once per project so `Colour[...]` and `Spacing[...]` interpolations resolve without TypeScript errors:

```ts
// src/styled.d.ts
import "styled-components";
import { ThemeSpec } from "@lifesg/react-design-system/theme/types";

declare module "styled-components" {
    export interface DefaultTheme extends ThemeSpec {
        maxColumns?: {
            xxs: 8;
            xs: 8;
            sm: 8;
            md: 8;
            lg: 12;
            xl: 12;
            xxl: 12;
        };
    }
}
```

---

## ThemeSpec structure

A `ThemeSpec` object is composed of several scheme keys:

```ts
{
  colourScheme: "lifesg",
  fontScheme: "default",
  motionScheme: "default",
  borderScheme: "default",
  spacingScheme: "default",
  radiusScheme: "default",
  breakpointScheme: "default",
  resourceScheme: "lifesg"
}
```

---

## DSThemeProvider

**Import:** `import { DSThemeProvider } from "@lifesg/react-design-system/theme"`

Use `DSThemeProvider` for all new projects and any project that requires dark mode token switching. Never use both `ThemeProvider` and `DSThemeProvider` simultaneously. Never import `Theme` from `@lifesg/react-design-system/theme` (that export does not exist).

**Key props:**

| Prop       | Type        | Required | Notes                                                                                  |
| ---------- | ----------- | -------- | -------------------------------------------------------------------------------------- |
| `theme`    | `ThemeSpec` | yes      | A preset theme object. Pass `LifeSGTheme.light` or `LifeSGTheme.dark` to force a mode. |
| `children` | `ReactNode` | yes      | The entire React component tree.                                                       |

**Canonical usage:**

```tsx
// Auto mode (follows system prefers-color-scheme)
<DSThemeProvider theme={LifeSGTheme}><App /></DSThemeProvider>

// Force light mode regardless of system preference
<DSThemeProvider theme={LifeSGTheme.light}><App /></DSThemeProvider>

// Force dark mode regardless of system preference
<DSThemeProvider theme={LifeSGTheme.dark}><App /></DSThemeProvider>
```

**Known limitations:**

-   Prefer `Colour[]` interpolation functions over accessing `props.theme` directly — `DSThemeProvider` does not guarantee a fully resolved `ThemeObject` on `props.theme`
-   The per-element `modifiedProps` override pattern is valid only with `ThemeProvider` directly, not with `DSThemeProvider`
-   There is no export named `Theme` — using it throws a runtime error

---

## Advanced Theme Customisation

### Custom theme from scratch

```tsx
import { ThemeSpec } from "@lifesg/react-design-system/theme";
import { ThemeProvider } from "styled-components";

const myTheme: ThemeSpec = {
    colourScheme: "bookingsg",
    fontScheme: "default",
    motionScheme: "default",
    borderScheme: "default",
    spacingScheme: "default",
    radiusScheme: "default",
    breakpointScheme: "default",
    resourceScheme: "mylegacy",
};

<ThemeProvider theme={myTheme}>
    <App />
</ThemeProvider>;
```

### Extending a preset

```tsx
const customTheme: ThemeSpec = {
    ...LifeSGTheme,
    overrides: {
        primitiveColour: { "primary-10": "#F3C85C" },
        font: {
            "heading-size-xxl": "4rem",
            "heading-lh-xxl": "4.5rem",
        },
    },
};
```

### Per-element theme override (ThemeProvider only — not supported with DSThemeProvider)

```tsx
import { Colour } from "@lifesg/react-design-system/theme";
import styled, { css } from "styled-components";

const SomeComponent = styled.div`
    ${(props) => {
        const modifiedProps = {
            ...props,
            theme: { ...props.theme, colourScheme: "bookingsg" },
        };
        return css`
            background: ${Colour["background-error"](modifiedProps)};
        `;
    }}
`;
```

---

## Dark Mode

| Theme passed        | Behaviour                                    |
| ------------------- | -------------------------------------------- |
| `LifeSGTheme`       | Auto — follows system `prefers-color-scheme` |
| `LifeSGTheme.light` | Always light, ignores system preference      |
| `LifeSGTheme.dark`  | Always dark, ignores system preference       |

The same `.light` / `.dark` sub-properties exist on every theme preset (e.g. `SupportGoWhereTheme.light`).

> For citizen-facing government applications where design requires light mode, pass `LifeSGTheme.light` rather than the bare `LifeSGTheme` — this prevents the UI from shifting to dark when users have a dark system preference.

**Manual user toggle:**

```tsx
const [preference, setPreference] = useState<"light" | "dark" | "auto">("auto");

const currentTheme =
    preference === "dark"
        ? LifeSGTheme.dark
        : preference === "light"
        ? LifeSGTheme.light
        : LifeSGTheme;

<DSThemeProvider theme={currentTheme}>
    <App />
</DSThemeProvider>;
```

**`useDSTheme` hook (read the active colour mode):**

```tsx
import { useDSTheme } from "@lifesg/react-design-system/theme";

const { colourMode, theme } = useDSTheme();
```

**Extending dark mode overrides:**

```tsx
const customTheme: ThemeSpec = {
    ...LifeSGTheme,
    overrides: {
        primitiveColour: { "primary-50": "#0066cc" },
        primitiveColourDark: { "primary-50": "#4d94ff" },
        semanticColour: { text: "#2c2c2c" },
        semanticColourDark: { text: "#f0f0f0" },
    },
};
```

Without `semanticColourDark` / `primitiveColourDark`, the light-mode override values are used in both modes.

---

## Migration — ThemeProvider to DSThemeProvider

### Step 1 — Replace the root provider

```tsx
// Before
import { ThemeProvider } from "styled-components";
<ThemeProvider theme={LifeSGTheme}>
    <App />
</ThemeProvider>;

// After
import { DSThemeProvider } from "@lifesg/react-design-system/theme";
<DSThemeProvider theme={LifeSGTheme}>
    <App />
</DSThemeProvider>;
```

### Step 2 — Add dark mode overrides (if using custom colours)

```tsx
const customTheme = {
    ...LifeSGTheme,
    overrides: {
        primitiveColour: { "primary-50": "#0066cc" },
        primitiveColourDark: { "primary-50": "#4d94ff" },
        semanticColour: { text: "#custom-light" },
        semanticColourDark: { text: "#custom-dark" },
    },
};
```

### Step 3 — Test both modes

Toggle system preference or use browser DevTools to simulate `prefers-color-scheme: dark`. Existing styled-components using `Colour` and `Spacing` interpolation functions will adapt automatically.
