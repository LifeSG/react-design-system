---
name: add-theme
description: >-
    Guides the creation of a new theme for the design system, including the
    theme CSS file, type registration, optional font preset, and Storybook/E2E
    wiring. Use when introducing a new visual theme.
argument-hint: >-
    Provide the theme name in kebab-case (e.g. "lifesg", "lifesg-playground").
---

# Add theme

You are tasked with adding a new theme to the `@lifesg/react-design-system` library.

## Input requirements

The user must provide:

1. **Theme name** in kebab-case (e.g. `lifesg`, `lifesg-playground`)
2. **Design specifications** — colour palette, font preferences, any component-specific overrides

Optional:

-   Whether the theme needs a custom font preset
-   Whether Navbar/Footer logos need to be customised
-   Colour values for primitive and semantic tokens

## Overview

Each theme is a standalone CSS file that provides:

-   **Primitive colours** — the raw colour palette
-   **Semantic colours** — purpose-driven tokens referencing primitives
-   **Font** — font family, scale, and typography settings
-   **Component tokens** — overrides for Button, Navbar, Footer, Animation
-   Other tokens: radius, shadow, border

Themes reuse shared presets via CSS mixins, only defining values inline when they differ from defaults. If inline values will be reused across multiple themes, extract them into new mixins.

## Step-by-Step

### 1. Create the theme CSS file

Add a new file at `src/theme/styles/<theme-name>.css`.

Use an existing theme as reference:

-   `ccube.css` — standard theme (good starting point)
-   `wise.css` — example with font presets

Structure:

```css
@import url("./presets/default.css");

[data-fds-theme="<theme-name>"] {
    /* Primitive colours */
    --fds-colour-primitive-...: #...;

    /* Semantic colours */
    --fds-colour-...: var(--fds-colour-primitive-...);

    /* Typography (if different from default) */
    --fds-font-family-heading: "...";
    --fds-font-family-body: "...";

    /* Component tokens (if needed) */
    --fds-button-...: ...;

    /* Other tokens */
    --fds-radius-...: ...;
    --fds-shadow-...: ...;
}

[data-fds-theme="<theme-name>"][data-fds-theme-mode="dark"] {
    /* Dark mode overrides */
    --fds-colour-...: ...;
}
```

Key principles:

-   Use the shared presets via `@mixin` where the theme follows defaults
-   Only define values inline when they differ from the default preset
-   Token naming follows the existing convention: `--fds-<category>-<token-name>`

### 2. Register the theme name

Add the new theme name in **alphabetical order** to the `THEME_TYPES` array in `src/theme/types.ts`:

```ts
export const THEME_TYPES = [
    // ... existing themes
    "<theme-name>", // insert alphabetically
    // ... existing themes
] as const;
```

### 3. (Optional) Add a font preset

If the theme supports multiple fonts, create a font preset at `src/theme/styles/presets/fonts/<preset-name>.css`:

```css
@define-mixin font-<preset-name> {
    --fds-font-family-heading: "<Font Name>";
    --fds-font-family-body: "<Font Name>";
    --fds-font-variant: normal;
    /* other font tokens... */
}
```

Then in the theme CSS:

```css
@import url("./presets/fonts/<preset-name>.css");

[data-fds-theme="<theme-name>"][data-fds-theme-font="<preset-name>"] {
    @mixin font-<preset-name>;
}
```

Add the preset name in **alphabetical order** to `THEME_FONT_PRESETS` in `src/theme/types.ts`.

If this font preset should be the default for the theme, update `getDefaultFontPresetForTheme` in `src/theme/theme-provider/preset.ts`.

### 4. (If applicable) Update theme-specific components

Some components have theme-specific customisation. Check and update:

-   **Navbar** logo — `src/navbar/navbar-logo-data.ts`
-   **Footer** logo and copyright text — `src/footer/footer-helper.ts`
-   **Footer** disclaimer links — `src/footer/footer-disclaimer-links-data.tsx`

### 5. Load theme in Storybook

#### 5.1 Import the theme stylesheet

Import the stylesheet in **alphabetical order** under `.storybook/preview.css`. If the theme uses a custom font that requires a new CDN stylesheet, also add it in the same file.

#### 5.2 Register the theme

Add an entry in **alphabetical order** to `THEME_TYPE_TO_KEY_MAPPING` in `.storybook/decorators/theme-mapping.ts`.

Then update the installation instructions by adding the corresponding entries to `THEME_TO_DISPLAY_NAME_MAPPING` and `THEME_TO_FONT_MAPPING` in `stories/getting-started/doc-elements.tsx`.

#### 5.3 Document colour tokens

Create a colour documentation story at `stories/theme/colour/<prefix>-colour-<theme-name>.mdx`. The alphabetical prefix (e.g. `d-`, `e-`, `u-`) determines sidebar sort order — use the next available letter after the last existing file.

#### 5.4 Document font tokens

-   **If the theme uses an existing font** — add the theme name to the description list in `stories/theme/font/<prefix>-font-<theme-name>.mdx`
-   **If the theme uses a new font** — create a new font story at `stories/theme/font/<prefix>-font-<theme-name>.mdx`. The alphabetical prefix (e.g. `d-`, `e-`, `u-`) determines sidebar sort order — use the next available letter after the last existing file.

#### 5.5. Verify

Run Storybook and check:

1. Preview tokens under `Foundations > Colours` and `Foundations > Font`
2. Switch to the new theme and verify visual output
3. Check both light and dark mode
4. Verify Navbar and Footer render correctly with the theme

### 6. Load theme in E2E NextJS app

#### 6.1 Import the theme stylesheet

Add an import in **alphabetical order** in `e2e/nextjs-app/src/app/components/[component]/[story]/layout.tsx`. If the theme uses a custom font that requires a new CDN stylesheet, also add the link to the `CDN_STYLE_ASSETS` array in `e2e/nextjs-app/src/app/layout.tsx`.

#### 6.2 Generate baseline screenshots

The Navbar, Footer and Theme E2E specs loop over all entries in `THEME_TYPES` automatically — **no test code changes are needed**. Run the following command to generate or update the E2E snapshots:

```
npm run test-e2e -- --update-snapshots=changed -g "<theme name>"
```

## Important notes

-   Static assets (fonts, logos) are hosted on S3 at `https://assets.life.gov.sg/react-design-system/` — they are NOT stored in the repo. Provide new asset files to the repository maintainers for upload.
-   Provide fonts in `woff2` format, prefer variable fonts, and subset where possible to minimise file size.
-   Provide logo images as SVG where possible.

## Verification checklist

Attempt each verification command. If a command fails due to sandbox restrictions or environment issues, report it to the user so they can run it manually.

1. Theme CSS file created at `src/theme/styles/<theme-name>.css`
2. Theme name registered in `THEME_TYPES` array (alphabetical)
3. Font preset created and registered in `THEME_FONT_PRESETS` array (if applicable)
4. Theme-specific components updated (if applicable)
5. E2E app loads the theme and tests pass
6. `npm run lint` passes
7. `npm run build` succeeds

Do **not** start Storybook yourself. Remind the user to run `npm run storybook` and verify the theme loads and renders correctly.
