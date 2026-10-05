# App Setup — Flagship v4

Full project setup for `@lifesg/react-design-system` v4. Work through all five steps before writing any component code.

---

## Step 1 — Install packages

```bash
npm install @lifesg/react-design-system @lifesg/react-icons @floating-ui/react
```

Do NOT install `styled-components` — it is not used in v4.

---

## Step 2 — CDN stylesheets

Add these stylesheets to normalise browser styles and display fonts.

```html
<link
    rel="stylesheet"
    type="text/css"
    href="https://assets.life.gov.sg/react-design-system/v4/css/main.css"
/>
<link
    rel="stylesheet"
    type="text/css"
    href="https://assets.life.gov.sg/react-design-system/v3/css/open-sans.css"
/>
```

Or if you are importing to an existing CSS file:

```css
@import url("https://assets.life.gov.sg/react-design-system/v4/css/main.css");
@import url("https://assets.life.gov.sg/react-design-system/v3/css/open-sans.css");
```

Replace `open-sans` with the font for your theme:

| Theme                                    | Font CSS                           |
| ---------------------------------------- | ---------------------------------- |
| lifesg, ccube, mylegacy, oneservice, rbs | `open-sans`                        |
| bookingsg, careercompass, smgs           | `plus-jakarta-sans`                |
| spf, vica, websg, wise, wogaa            | `public-sans`                      |
| sgw-digital-lobby, supportgowhere        | `libre-franklin`                   |
| pa                                       | `lato`                             |
| imda                                     | `montserrat`                       |
| tote-board                               | `inter`                            |
| a11y-playground                          | `atkinson-hyperlegible-next`       |
| sportsg-orange                           | `apfel-grotezk` + `hanken-grotesk` |

---

## Step 3 — Theme stylesheet

In your application's CSS entrypoint, import the theme stylesheet:

```css
@import "@lifesg/react-design-system/theme/styles/lifesg.css";
```

> CSS `@import` from `node_modules` requires your framework or build tool to support it. Vite and Next.js resolve this automatically; other build tools may need a CSS resolver configured.

Or in your application's JavaScript entrypoint, import the theme stylesheet:

```tsx
import "@lifesg/react-design-system/theme/styles/lifesg.css";
```

Replace `lifesg` with your chosen theme slug: `a11y-playground` · `bookingsg` · `careercompass` · `ccube` · `imda` · `lifesg` · `mylegacy` · `oneservice` · `pa` · `rbs` · `sgw-digital-lobby` · `smgs` · `spf` · `sportsg-orange` · `supportgowhere` · `tote-board` · `vica` · `websg` · `wise` · `wogaa`

---

## Step 4 — ThemeProvider

Wrap your app root in `ThemeProvider`. The `theme` prop is a string matching the slug used in Step 3.

```tsx
import { ThemeProvider } from "@lifesg/react-design-system/theme";

const App = () => {
    return (
        <ThemeProvider theme="lifesg">
            <Component />
        </ThemeProvider>
    );
};
```

**Dark/light mode:** `mode` prop defaults to `"auto"` (OS preference).

```tsx
<ThemeProvider theme="lifesg" mode="light">  {/* force light */}
<ThemeProvider theme="lifesg" mode="dark">   {/* force dark */}
```

---

## Vite

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

## Next.js App Router

No special `next.config.js` is needed. Suggested configuration below.

### CSS

Create a global CSS file with all three imports — CDN stylesheets and theme:

```css
/* global.css */
@import url("https://assets.life.gov.sg/react-design-system/v4/css/main.css");
@import url("https://assets.life.gov.sg/react-design-system/v3/css/open-sans.css");
@import "@lifesg/react-design-system/theme/styles/lifesg.css";
```

Wrap the app in a flex column layout so the footer stays pinned to the bottom on short pages:

```css
body {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

main {
    flex: 1;
}

.theme-provider {
    display: flex;
    flex-direction: column;
}
```

### ThemeProvider

`ThemeProvider` is a client component, so create a wrapper:

```tsx
// src/app/providers.tsx
"use client";
import { ThemeProvider } from "@lifesg/react-design-system/theme";

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider theme="lifesg" className="theme-provider">
            {children}
        </ThemeProvider>
    );
}
```

### Root layout

Import the global CSS and the providers wrapper in `layout.tsx`:

```tsx
// src/app/layout.tsx
import "./global.css";
import Providers from "./providers";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
```

---

## Verification checklist

-   [ ] `@lifesg/react-design-system`, `@lifesg/react-icons`, `@floating-ui/react` installed
-   [ ] `styled-components` NOT installed
-   [ ] `main.css` and font CDN links imported in HTML doc or CSS file
-   [ ] `@lifesg/react-design-system/theme/styles/{theme}.css` imported in entrypoint or CSS file
-   [ ] `ThemeProvider` wraps app root with correct theme string
