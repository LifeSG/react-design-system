---
name: "fds-build"
description: "Use when building with @lifesg/react-design-system v3. Covers composition rules, correct import patterns, styled-components token usage, and component discovery. Apply whenever the user's package.json has @lifesg/react-design-system ^3.x (or no version). If package.json shows ^4.x, load SKILL-v4.md instead."
metadata:
    version: "3.x"
    audience: external
    category: design-system
---

# Flagship Design System — Agent Skill

You are helping build web applications with **`@lifesg/react-design-system`** for government digital products.

## Version check

Read `@lifesg/react-design-system` version from the consumer's `package.json` before doing anything else:

-   `^4.x` → stop here, load **`SKILL-v4.md`** instead
-   `^3.x` or not found → continue with this file (v3)

**Key differences if you need to compare:**

|               | v3                                                          | v4                                                                |
| ------------- | ----------------------------------------------------------- | ----------------------------------------------------------------- |
| Styling       | `styled-components` peer dep required                       | No `styled-components` — CSS Modules / inline styles              |
| ThemeProvider | `StyleSheetManager` + `ThemeProvider` with theme **object** | `ThemeProvider` with theme **string**, no wrapper needed          |
| CSS setup     | CDN `main.css` only                                         | CDN font + `theme/styles/{theme}.css` from package                |
| Design tokens | Interpolation functions — template literals only            | Plain CSS variable strings — inline styles, CSS Modules, anywhere |

---

## Install

```bash
pnpm add @lifesg/react-design-system @lifesg/react-icons styled-components @floating-ui/react @mui/icons-material @emotion/is-prop-valid
```

Peer deps: `react` + `react-dom` (^17, ^18, or ^19).

**If the project is new or missing setup** — read `./resources/v3/setup/setup.md` for the full CSS/ThemeProvider/Vite walkthrough before writing any component code.

---

## ThemeProvider (required)

Every app must wrap all components in `StyleSheetManager` (outer) + `ThemeProvider` (inner). Missing either causes errors or DOM warnings.

```tsx
import { ThemeProvider, StyleSheetManager } from "styled-components";
import isPropValid from "@emotion/is-prop-valid";
import { LifeSGTheme } from "@lifesg/react-design-system/theme";

export default function App() {
    return (
        <StyleSheetManager shouldForwardProp={isPropValid}>
            <ThemeProvider theme={LifeSGTheme}>{/* your app */}</ThemeProvider>
        </StyleSheetManager>
    );
}
```

`StyleSheetManager` with `isPropValid` stops styled-components forwarding DS-specific props (e.g. `weight`) to DOM elements.

Theme is an **imported object** — not a string. Available themes: `LifeSGTheme` · `BookingSGTheme` · `CCubeTheme` · `MyLegacyTheme` · `OneServiceTheme` · `PATheme` · `SupportGoWhereTheme` · `SGWDigitalLobbyTheme` · `IMDATheme` · `SPFTheme` · `SMGSTheme` · `A11yPlaygroundTheme`

For auto dark/light mode: swap `ThemeProvider` for `DSThemeProvider` (same import path). Force fixed mode: `LifeSGTheme.light` or `LifeSGTheme.dark`.

---

## Component imports

Always use subpath imports:

```tsx
import { Button } from "@lifesg/react-design-system/button";
import { Form } from "@lifesg/react-design-system/form";
```

---

## Page structure

Every page must have `Navbar` at the top and `Footer` at the bottom. Page shells are defined in their respective pattern/template files — see the task map below.

---

## Design tokens

Tokens are **styled-components interpolation functions** — use only inside `styled` template literals, never in inline `style={{}}` props.

```tsx
import styled from "styled-components";
import {
    Colour,
    Font,
    Spacing,
    Radius,
} from "@lifesg/react-design-system/theme";

const Card = styled.div`
    background: ${Colour["bg-strong"]};
    color: ${Colour.text};
    padding: ${Spacing["spacing-24"]};
    border-radius: ${Radius.md};
    ${Font["body-baseline-regular"]}
`;
```

Never hardcode `px` values — always use `Spacing` tokens.

---

## Icons

1. `@lifesg/react-icons` first — read `./resources/v3/components/icon.md` to discover available icon names.
2. `@mui/icons-material` as fallback only.
3. Never guess icon names — verify the import exists before using.

---

## Rules

-   Sentence case for all UI text — "Save changes" not "Save Changes"
-   DS components over raw HTML — `Button.Default` not `<button>`, `Form.Input` not `<input>`
-   `Form.*` fields: `label` always required; `errorMessage` only after validation fails; `readOnly` on review screens, not `disabled`
-   Never hardcode `px` values — always use `Spacing` tokens
-   All `Form.*` components import from `@lifesg/react-design-system/form`

---

## Component selection — ambiguous pairs

Consult this before picking a component. Do not read individual component files to compare — use this table.

| UI need                                           | Use                                      | Not                           |
| ------------------------------------------------- | ---------------------------------------- | ----------------------------- |
| Form input needing a visible card-style label     | `Toggle`                                 | `Checkbox`, `RadioButton`     |
| Table row selection or filter list tick-box       | `Checkbox`                               | `Toggle`                      |
| Binary yes / no question in a form                | `Toggle type="yes"` + `Toggle type="no"` | `RadioButton`                 |
| Compact single-choice in a filter panel           | `RadioButton`                            | `Toggle`                      |
| Block user with a focused action / confirmation   | `Modal`                                  | `Drawer`, `Popover`           |
| Slide-in panel, filter sheet, side tray           | `Drawer`                                 | `Modal`                       |
| Anchored floating panel with interactive content  | `Popover`                                | `Tooltip`                     |
| Short non-interactive hover / focus hint          | `Tooltip`                                | `Popover`                     |
| Multiple independently collapsible panels         | `Accordion`                              | `BoxContainer`                |
| Single collapsible section with optional Edit CTA | `BoxContainer`                           | `Accordion`                   |
| Static status label (1–2 words, no interaction)   | `Pill`                                   | `Tag`, `Badge`                |
| Removable or interactive filter / category chip   | `Tag`                                    | `Pill`                        |
| Numeric count overlaid on an icon or element      | `Badge`                                  | `Pill`, `Tag`                 |
| Inline contextual message within page content     | `Alert`                                  | `NotificationBanner`, `Toast` |
| Persistent announcement banner below Navbar       | `NotificationBanner`                     | `Alert`, `Toast`              |
| Transient auto-dismissing feedback message        | `Toast`                                  | `Alert`, `NotificationBanner` |
| Admin / internal table with 4+ structured columns | `DataTable`                              | `Table`, card list            |
| Citizen-facing record listing or search results   | card list                                | `DataTable`                   |
| Basic read-only table, no sorting or selection    | `Table`                                  | `DataTable`                   |

---

## For AI agents — task → resource map

This skill is self-contained — all resource files live under `./resources/` relative to this file. No npm install or external lookup needed.

**Do not write component code without reading its resource file first.**

| Task                                                                  | What to read                                                           |
| --------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| New project / missing setup                                           | `./resources/v3/setup/setup.md`                                        |
| Find the right component                                              | `./catalogue.md` — search "Also known as" column by keyword            |
| Use a component                                                       | `./resources/v3/components/{name}.md` — contains props AND usage rules |
| Grid system, breakpoints, column widths                               | `./resources/v3/components/layout.md`                                  |
| Build a form page (single or multi-step)                              | `./resources/v3/templates/form.md`                                     |
| Build a dashboard                                                     | `./resources/v3/patterns/dashboard.md`                                 |
| Build a listing / search results page                                 | `./resources/v3/templates/listing.md`                                  |
| Build a detail / record page                                          | `./resources/v3/patterns/detail.md`                                    |
| Handle loading / error / empty states                                 | `./resources/v3/patterns/states.md`                                    |
| Token question (Colour, Spacing, Radius, Typography)                  | `./resources/v3/foundations/tokens.md`                                 |
| Spacing rhythm, visual hierarchy, card rules, settings page structure | `./resources/v3/foundations/layout-composition-patterns.md`            |

**Reading strategy:** read `catalogue.md` once for discovery, then fetch only the specific component `{name}.md` files you need. Do not pre-load all component files.

---

## Gotchas

| Symptom                             | Fix                                                                             |
| ----------------------------------- | ------------------------------------------------------------------------------- |
| Components throw errors             | Add `StyleSheetManager` + `ThemeProvider` wrapping app root                     |
| styled-components DOM prop warnings | `StyleSheetManager` is missing or not wrapping `ThemeProvider`                  |
| No styles / wrong fonts             | Read `./resources/v3/setup/setup.md` — CSS imports likely missing or mismatched |
| Token in inline `style={{}}`        | Tokens are functions — move to a `styled` template literal                      |
