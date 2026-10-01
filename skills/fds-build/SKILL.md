---
name: "fds-build"
description: "Use when building with @lifesg/react-design-system v4. Covers composition rules, correct import patterns, token usage, and component discovery."
metadata:
    version: "4.0.0-alpha"
    audience: external
    category: design-system
---

# Flagship Design System — Agent Skill

You are helping build web applications with **`@lifesg/react-design-system`** for government digital products.

---

## Install

```bash
npm install @lifesg/react-design-system @lifesg/react-icons @floating-ui/react
```

Do not install `styled-components` — v4 uses CSS Modules for custom styles.

Peer deps: `react` + `react-dom` (^17, ^18, or ^19).

**If the project is new or missing setup** — read `./resources/setup/setup.md` for the full CSS/ThemeProvider/Vite walkthrough before writing any component code.

---

## ThemeProvider

Wrap your app in `ThemeProvider` to apply the correct theme CSS variables and enable dark/light mode.

```tsx
import { ThemeProvider } from "@lifesg/react-design-system/theme";
import "@lifesg/react-design-system/theme/styles/lifesg.css";

export default function App() {
    return <ThemeProvider theme="lifesg">{/* your app */}</ThemeProvider>;
}
```

Theme is a **string**: `"lifesg"` · `"bookingsg"` · `"ccube"` · `"mylegacy"` · `"oneservice"` · `"pa"` · `"supportgowhere"` · `"sgw-digital-lobby"` · `"careercompass"` · `"rbs"` · `"imda"` · `"spf"` · `"smgs"` · `"a11y-playground"`

Dark/light mode: `mode` prop defaults to `"auto"` (OS preference). Override with `mode="light"` or `mode="dark"`.

---

## Component imports

Always use subpath imports:

```tsx
import { Button } from "@lifesg/react-design-system/button";
import { Form } from "@lifesg/react-design-system/form";
```

---

## Page structure

Every page must have `Navbar` at the top and `Footer` at the bottom.

```tsx
import { Navbar } from "@lifesg/react-design-system/navbar";
import { Footer } from "@lifesg/react-design-system/footer";

<Navbar
    resources={{ primary: { brandName: "MyService", logoSrc: "/logo.svg" } }}
    items={{ desktop: [{ id: "home", children: "Home", href: "/" }] }}
/>;
{
    /* page content */
}
<Footer />;
```

---

## Design tokens

Tokens are **plain CSS variable strings** — use directly in CSS Modules or inline styles.

Prefer CSS Modules for layout and responsive styles:

```css
/* Component.module.css */
.card {
    background: var(--fds-colour-bg-strong);
    padding: var(--fds-spacing-24);
    border-radius: var(--fds-radius-md);

    :global(body.fds-breakpoint-lg-min) & {
        padding: var(--fds-spacing-32);
    }
}
```

> **CSS Modules gotcha:** always use `:global(body.fds-breakpoint-lg-min)` — never `:where(body.fds-breakpoint-lg-min)`. CSS Modules scopes every class selector it finds; `:global()` opts the breakpoint class out of scoping so it matches the runtime class `ThemeProvider` adds to `document.body`.

Inline styles work for simple one-off values:

```tsx
import { Colour, Spacing } from "@lifesg/react-design-system/theme";

<div style={{ color: Colour.text, padding: Spacing["spacing-24"] }} />;
```

**Responsive breakpoints** use body class selectors added by `ThemeProvider`:

-   `body.fds-breakpoint-lg-min` — viewport ≥ lg (769px)
-   `body.fds-breakpoint-md-min` — viewport ≥ md (481px)
-   `body.fds-breakpoint-xl-min` — viewport ≥ xl (1201px)

---

## Icons

1. `@lifesg/react-icons` first — read `./resources/components/icon.md` to discover available icon names.
2. `material-symbols` as fallback only.
3. Never guess icon names — verify the import exists before using.

---

## Rules

-   Sentence case for all UI text — "Save changes" not "Save Changes"
-   DS components over raw HTML — `Button` not `<button>`, `Form.Input` not `<input>`
-   `Form.*` fields: `label` always required; `errorMessage` only after validation fails; `readOnly` on review screens, not `disabled`
-   Never hardcode `px` values — always use `Spacing` tokens
-   All `Form.*` components import from `@lifesg/react-design-system/form`

---

## For AI agents — task → resource map

This skill is self-contained — all resource files live under `./resources/` relative to this file. No npm install or external lookup needed.

**Do not write component code without reading its resource file first.**

| Task                                                                  | What to read                                                |
| --------------------------------------------------------------------- | ----------------------------------------------------------- |
| New project / missing setup                                           | `./resources/setup/setup.md`                                |
| Find the right component                                              | `./catalogue.md` — search "Also known as" column by keyword |
| Use a component                                                       | `./resources/components/{name}.md`                          |
| Grid system, breakpoints, column widths                               | `./resources/components/layout.md`                          |
| Build a form page (single or multi-step)                              | `./resources/templates/form.md`                             |
| Build a listing / search results page                                 | `./resources/templates/listing.md`                          |
| Handle loading / error / empty states                                 | `./resources/patterns/states.md`                            |
| Token question (Colour, Spacing, Radius, Typography)                  | `./resources/foundations/tokens.md`                         |
| Spacing rhythm, visual hierarchy, card rules, settings page structure | `./resources/foundations/layout-composition-patterns.md`    |

**Reading strategy:** read `catalogue.md` once for discovery, then fetch only the specific component `{name}.md` files you need. Do not pre-load all component files.

---

## Gotchas

| Symptom                                        | Fix                                                                                                                                                                                                        |
| ---------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| No styles / wrong fonts                        | Read `./resources/setup/setup.md` — `main.css` CDN link or theme CSS import is likely missing                                                                                                              |
| Footer doesn't stick to bottom on short pages  | Apply a `className` to `ThemeProvider` and target that selector with `display: flex; flex-direction: column; flex: 1`                                                                                      |
| Responsive breakpoint rules don't fire         | Using `:where(body.fds-breakpoint-*)` — replace with `:global(body.fds-breakpoint-*)` so CSS Modules doesn't scope the class                                                                               |
| Theme CSS not loading                          | Vite resolves `node_modules` CSS automatically; other tools need CSS resolver config                                                                                                                       |
| `styled-components` import error               | Remove it — v4 uses CSS Modules; use `className={styles.x}` with a `.module.css` file                                                                                                                      |
| `RadioButton` with children throws in React 19 | v4 `RadioButton` spreads all props (including `children`) onto `<input>` — React 19 rejects children on void elements. Wrap in `<label>` with text outside: `<label><RadioButton .../> Label text</label>` |
| Next.js App Router: no `#root` element         | Next.js renders into `<body>` directly. Replace `#root { ... }` with those styles on `body`, and `#root > div` with `body > div`. See setup.md Next.js section                                             |
