# Footer

Import: `import { Footer } from "@lifesg/react-design-system/footer"`

## When to use

Place at the bottom of every page. Required on all pages.

## Variants

| Variant                 | When to use                                                      |
| ----------------------- | ---------------------------------------------------------------- |
| `<Footer />` (no props) | Standard pages — disclaimer links and copyright are theme-driven |
| `links`                 | Pages with navigational footer links (max 2 columns)             |
| `copyrightInfo`         | Custom copyright text required                                   |
| `layout="stretch"`      | Full-width layout — pair with `Navbar layout="stretch"`          |

## Usage

```tsx
import { Footer } from "@lifesg/react-design-system/footer";

{
    /* Standard footer — no props required */
}
<Footer />;

{
    /* Footer with navigation links */
}
<Footer
    links={[
        [
            { children: "About us", href: "/about" },
            { children: "Contact", href: "/contact" },
        ],
    ]}
    lastUpdated={new Date("2025-01-01")}
/>;
```

## Props

| Prop                | Type                                 | Default       | Description                                                                                   |
| ------------------- | ------------------------------------ | ------------- | --------------------------------------------------------------------------------------------- |
| `links`             | `FooterLinkProps<T>[][]`             | —             | Navigation links in the top section — array of columns                                        |
| `children`          | `JSX.Element \| JSX.Element[]`       | —             | Custom content for the top section; overrides `links` and addons                              |
| `showDownloadAddon` | `boolean`                            | —             | Show app store download buttons                                                               |
| `showResourceAddon` | `boolean`                            | —             | Show theme-specific resource links; `showDownloadAddon` takes precedence when both are `true` |
| `disclaimerLinks`   | `DisclaimerLinks`                    | —             | Override href/onClick for mandatory disclaimer links                                          |
| `copyrightInfo`     | `string`                             | —             | Custom copyright text; overrides auto-generated text and makes `lastUpdated` irrelevant       |
| `logoSrc`           | `string`                             | theme default | Logo image source                                                                             |
| `logoAlt`           | `string`                             | `""`          | Logo image alt text                                                                           |
| `lastUpdated`       | `Date`                               | —             | Date shown in "Last updated" text (ignored when `copyrightInfo` is set)                       |
| `hideLogo`          | `boolean`                            | —             | Hide the logo; links align to the leftmost area                                               |
| `layout`            | `"default" \| "stretch"`             | `"default"`   | Layout type — must match Navbar `layout`                                                      |
| `onFooterLinkClick` | `(link: FooterLinkProps<T>) => void` | —             | Called when a footer link is clicked                                                          |
| `id`                | `string`                             | —             | Unique identifier                                                                             |
| `className`         | `string`                             | —             | Class selector                                                                                |
| `data-testid`       | `string`                             | —             | Test identifier                                                                               |

## FooterLinkProps\<T\>

Inherits `TypographyLinkProps`, plus:

| Prop           | Type     | Description                                 |
| -------------- | -------- | ------------------------------------------- |
| `data-options` | `T`      | Custom attributes passed to the link object |
| `data-testid`  | `string` | Test identifier                             |

## DisclaimerLinks

| Prop                  | Type                  | Default    | Description                                                         |
| --------------------- | --------------------- | ---------- | ------------------------------------------------------------------- |
| `privacy`             | `TypographyLinkProps` | predefined | Privacy Statement link — text is fixed to "Privacy Statement"       |
| `termsOfUse`          | `TypographyLinkProps` | predefined | Terms of Use link — text is fixed to "Terms of Use"                 |
| `reportVulnerability` | `TypographyLinkProps` | predefined | Report Vulnerability link — text is fixed to "Report Vulnerability" |

## Rules

-   Use `<Footer />` with no props for standard pages — do not add unnecessary props.
-   `layout` must match the Navbar `layout` prop; do not mix `"default"` and `"stretch"`.
-   Wrap the app in a flex column layout so the footer stays pinned to the bottom on short pages:
    -   Outer wrapper: `display: flex; flex-direction: column; min-height: 100vh`
    -   Page content area: `flex: 1`
-   Disclaimer link text cannot be customised — only `href` and event handlers can be overridden via `disclaimerLinks`.
-   `copyrightInfo` overrides `lastUpdated` — do not set both.
-   When `showDownloadAddon` and `showResourceAddon` are both `true`, download takes precedence.
-   `links` is a 2D array: each inner array is one column of links.

## Anti-patterns

-   Do not omit the flex layout wrapper — the footer will not stick to the bottom on short pages.
-   Do not pass `children` and `links` together — `children` replaces the top section entirely.
-   Do not customise disclaimer link labels — they are legally fixed strings.
