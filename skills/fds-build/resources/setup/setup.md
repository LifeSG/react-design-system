# App Setup — Flagship v4

Full project setup for `@lifesg/react-design-system` v4. Work through all four steps before writing any component code.

---

## Step 1 — Install packages

```bash
npm install @lifesg/react-design-system @lifesg/react-icons @floating-ui/react
```

Do NOT install `styled-components` — it is not used in v4.

---

## Step 2 — CSS

### 2a — CDN stylesheet (index.html `<head>`)

Add `main.css` from the v4 CDN. This handles fonts, base reset, and cascade layer ordering.

```html
<link
    rel="stylesheet"
    type="text/css"
    href="https://assets.life.gov.sg/react-design-system/v4/css/main.css"
/>
```

For Next.js App Router, add it in `layout.tsx`:

```tsx
// src/app/layout.tsx
export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://assets.life.gov.sg/react-design-system/v4/css/main.css"
                />
            </head>
            <body>{children}</body>
        </html>
    );
}
```

### 2b — Theme CSS (src/index.css)

```css
@import "@lifesg/react-design-system/theme/styles/lifesg.css";
```

Replace `lifesg` with your chosen theme slug: `lifesg` · `bookingsg` · `ccube` · `mylegacy` · `oneservice` · `pa` · `supportgowhere` · `sgw-digital-lobby` · `careercompass` · `rbs` · `imda` · `spf` · `smgs` · `a11y-playground`

> Vite resolves `node_modules` CSS `@import` automatically. Other build tools may need a CSS resolver configured.

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

For `ThemeProvider`, create a client component wrapper and use it in `layout.tsx`:

```tsx
// src/app/providers.tsx
"use client";
import { ThemeProvider } from "@lifesg/react-design-system/theme";

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider theme="lifesg" mode="light">
            {children}
        </ThemeProvider>
    );
}
```

```tsx
// src/app/layout.tsx
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

```tsx
// src/app/page.tsx
import { Navbar } from "@lifesg/react-design-system/navbar";
import { Footer } from "@lifesg/react-design-system/footer";

export default function Page() {
    return (
        <>
            <Navbar masthead items={{ desktop: [] }} />
            <main style={{ flex: 1 }}>{/* page content */}</main>
            <Footer />
        </>
    );
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
-   [ ] `main.css` CDN link in `index.html` (or `layout.tsx` for Next.js)
-   [ ] `@lifesg/react-design-system/theme/styles/{theme}.css` imported in `index.css`
-   [ ] `ThemeProvider` wraps app root with correct theme string
