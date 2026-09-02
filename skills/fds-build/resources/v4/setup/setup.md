# App Setup — Flagship v4

Full project setup for `@lifesg/react-design-system` v4. Work through all four steps before writing any component code.

---

## Step 1 — Install packages

```bash
pnpm add @lifesg/react-design-system @lifesg/react-icons @floating-ui/react @mui/icons-material
```

Do NOT install `styled-components` — it is not used in v4.

---

## Step 2 — CSS (src/index.css)

Three imports are required. Order matters.

```css
/* 1. Font — CDN path is v3 but fonts are shared across versions */
@import url("https://assets.life.gov.sg/react-design-system/v3/css/open-sans.css");

/* 2. Base token sheet — defines every --fds-* CSS custom property */
@import "@lifesg/react-design-system/theme/styles/default.css";

/* 3. Theme overrides — brand/primary colour values for the chosen theme */
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

/* v4 ThemeProvider renders a wrapper div as the only child of #root.
   Make it the flex column so Navbar/main/Footer are proper flex children
   and the footer sticks to the bottom on short pages. */
#root > div {
    display: flex;
    flex-direction: column;
    flex: 1;
}
```

**`default.css` is required.** It defines all `--fds-spacing-*`, `--fds-colour-*`, `--fds-radius-*` etc. Without it every CSS variable resolves to nothing and components are unstyled.

Replace `lifesg.css` with your chosen theme slug. Available slugs:
`lifesg` · `bookingsg` · `ccube` · `mylegacy` · `oneservice` · `pa` · `supportgowhere` · `sgw-digital-lobby` · `careercompass` · `rbs` · `imda` · `spf` · `smgs` · `a11y-playground`

> Vite resolves `node_modules` CSS `@import` automatically. Other build tools may need a CSS resolver configured.

Font-to-theme mapping:

| Font stylesheet                  | Themes                                             |
| -------------------------------- | -------------------------------------------------- |
| `open-sans.css`                  | `lifesg`, `ccube`, `mylegacy`, `oneservice`, `rbs` |
| `plus-jakarta-sans.css`          | `bookingsg`, `careercompass`, `smgs`               |
| `lato.css`                       | `pa`                                               |
| `libre-franklin.css`             | `supportgowhere`, `sgw-digital-lobby`              |
| `montserrat.css`                 | `imda`                                             |
| `public-sans.css`                | `spf`                                              |
| `atkinson-hyperlegible-next.css` | `a11y-playground`                                  |

---

## Step 3 — ThemeProvider (src/App.tsx)

Wrap your app root. Theme is a string matching the slug used in Step 2. Do NOT re-import the CSS here — it is already imported via `index.css`.

```tsx
// src/App.tsx
import { ThemeProvider } from "@lifesg/react-design-system/theme";
import { Navbar } from "@lifesg/react-design-system/navbar";
import { Footer } from "@lifesg/react-design-system/footer";

export default function App() {
    return (
        <ThemeProvider theme="lifesg" mode="light">
            <Navbar
                masthead
                items={{
                    desktop: [{ id: "home", children: "Home", href: "/" }],
                }}
            />
            <main style={{ flex: 1 }}>{/* page content */}</main>
            <Footer />
        </ThemeProvider>
    );
}
```

**Dark/light mode:** `mode` prop defaults to `"auto"` (OS preference).

```tsx
<ThemeProvider theme="lifesg" mode="light">  {/* force light */}
<ThemeProvider theme="lifesg" mode="dark">   {/* force dark */}
```

---

## Step 4 — Vite config

No special configuration needed for the design system. Standard React setup:

```ts
// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
});
```

---

## Verification checklist

-   [ ] `@lifesg/react-design-system`, `@lifesg/react-icons`, `@floating-ui/react` installed
-   [ ] `styled-components` NOT installed
-   [ ] Font CDN stylesheet imported first in `index.css` and matches selected theme
-   [ ] `@lifesg/react-design-system/theme/styles/default.css` imported in `index.css` (before theme CSS)
-   [ ] `@lifesg/react-design-system/theme/styles/{theme}.css` imported in `index.css` (after default.css)
-   [ ] `body { margin: 0 }` and `#root { min-height: 100vh; display: flex; flex-direction: column }` in `index.css`
-   [ ] `ThemeProvider` wraps app root with correct theme string
