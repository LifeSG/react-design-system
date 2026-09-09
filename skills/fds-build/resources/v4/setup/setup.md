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

Two imports are required. Order matters.

```css
/* 1. Font — CDN path is v3 but fonts are shared across versions */
@import url("https://assets.life.gov.sg/react-design-system/v3/css/open-sans.css");

/* 2. Theme CSS — defines ALL --fds-* custom properties AND component styles */
@import "@lifesg/react-design-system/theme/styles/lifesg.css";
```

> **Note:** There is no `default.css` in v4. Each theme CSS file is self-contained and defines every `--fds-spacing-*`, `--fds-colour-*`, `--fds-radius-*`, etc. Do not import `default.css` — it does not exist.

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

### Reset block

> **CRITICAL — read before writing any CSS reset:**
>
> v4 wraps **all** component styles inside `@layer fds { }`. CSS cascade layers mean that **any unlayered rule beats all layered rules**, regardless of selector specificity. A `* { padding: 0; margin: 0 }` reset is unlayered and will silently override component padding, nav item margins, filter spacing, etc. — all of which live in `@layer fds`.
>
> **Use only the minimal reset below.** Never add broad element resets (`h1–h6`, `p`, `ul`, `ol`, `li`, `dl`, etc.) — FDS components render those elements internally and depend on their default or computed styles.

```css
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
    /* DO NOT add padding: 0 or margin: 0 here — it overrides @layer fds component styles */
}

body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: var(--fds-font-family-body, "Open Sans", sans-serif);
    color: var(--fds-colour-text);
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

a {
    cursor: pointer;
    text-decoration: none;
    color: inherit;
}

button,
select,
input[type="button"],
input[type="submit"],
input[type="reset"],
::file-selector-button {
    color: inherit;
}

img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
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

### Next.js App Router adaptation

Next.js App Router renders into `<body>` directly — there is no `#root`. Replace the `#root` rules with:

```css
/* Next.js: body is the mount point, not #root */
body > div {
    display: flex;
    flex-direction: column;
    flex: 1;
}
```

And move `min-height: 100vh; display: flex; flex-direction: column` onto `body` (already shown above).

For `ThemeProvider`, create a client component wrapper (`providers.tsx`) since Next.js layouts are Server Components by default:

```tsx
// src/app/providers.tsx
"use client";
import { ThemeProvider } from "@lifesg/react-design-system/theme";

export default function Providers({ children }: { children: React.ReactNode }) {
    return <ThemeProvider theme="lifesg" mode="light">{children}</ThemeProvider>;
}
```

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
-   [ ] `@lifesg/react-design-system/theme/styles/{theme}.css` imported in `index.css` (no `default.css` — it does not exist in v4)
-   [ ] CSS reset uses ONLY `body { margin: 0 }` — no broad `* { padding: 0; margin: 0 }` or element-level resets
-   [ ] `body { min-height: 100vh; display: flex; flex-direction: column }` in `index.css`
-   [ ] `#root > div { display: flex; flex-direction: column; flex: 1 }` (or `body > div` for Next.js)
-   [ ] `ThemeProvider` wraps app root with correct theme string
