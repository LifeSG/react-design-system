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

## Props — `DisclaimerLinks`

| Prop                  | Type                      | Default | Description |
| --------------------- | ------------------------- | ------- | ----------- |
| `privacy`             | `DisclaimerTextLinkProps` | —       | —           |
| `termsOfUse`          | `DisclaimerTextLinkProps` | —       | —           |
| `reportVulnerability` | `DisclaimerTextLinkProps` | —       | —           |

## Props — `FooterLinkProps`

| Prop             | Type                       | Default     | Description                                                                                                   |
| ---------------- | -------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------- |
| `data-options`   | `T`                        | —           | Any custom attributes you would like to pass to the link                                                      |
| `weight`         | `TypographyWeight`         | "regular"   | Font weight of the link text.                                                                                 |
| `external`       | `boolean`                  | —           | Appends an external-link icon after the link text to signal that the destination is outside the current site. |
| `underlineStyle` | `TypographyUnderlineStyle` | "underline" | Text-decoration style for the link.                                                                           |

## Props — `FooterProps`

| Prop                | Type                                   | Default   | Description                                                                                                                                                                                                                  |
| ------------------- | -------------------------------------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `links`             | `FooterLinkProps<T>[][]`               | —         | The footer links. Multi array to present in different columns                                                                                                                                                                |
| `showDownloadAddon` | `boolean`                              | —         | Indicates if the download app icons are to be present                                                                                                                                                                        |
| `showResourceAddon` | `boolean`                              | —         | Indicates if additional app resources should be displayed. When both `showDownloadAddon` and `showResourceAddon` are `true`, `showDownloadAddon` takes priority and the resource add-on is not rendered.                     |
| `children`          | `JSX.Element \| JSX.Element[]`         | —         | Custom component. This overrides the logo, links and download section                                                                                                                                                        |
| `disclaimerLinks`   | `DisclaimerLinks`                      | —         | Override attributes for the built-in disclaimer links. Each supplied key is merged with the theme defaults. Omitted keys fall back to the default URLs for the active theme.                                                 |
| `copyrightInfo`     | `string`                               | —         | A custom copyright text                                                                                                                                                                                                      |
| `logoSrc`           | `string`                               | —         | Custom logo source                                                                                                                                                                                                           |
| `logoAlt`           | `string`                               | —         | Custom logo alt text                                                                                                                                                                                                         |
| `lastUpdated`       | `Date`                                 | —         | Date displayed in the copyright line as "Last updated D MMMM YYYY".                                                                                                                                                          |
| `onFooterLinkClick` | `((link: FooterLinkProps<T>) => void)` | —         | Called when a footer navigation link is clicked. Receives the full `FooterLinkProps` for the clicked link. If the link defines its own `onClick` handler, that handler takes priority and `onFooterLinkClick` is not called. |
| `layout`            | `"default" \| "stretch"`               | "default" | Controls whether the footer content is constrained to a maximum width or stretches to fill the full viewport width.                                                                                                          |
| `id`                | `string`                               | —         | —                                                                                                                                                                                                                            |
| `className`         | `string`                               | —         | —                                                                                                                                                                                                                            |
| `hideLogo`          | `boolean`                              | —         | Suppresses the logo even when a `logoSrc` or a theme-based logo URL is available.                                                                                                                                            |

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

## Props — `DisclaimerLinks`

| Prop                  | Type                      | Default | Description |
| --------------------- | ------------------------- | ------- | ----------- |
| `privacy`             | `DisclaimerTextLinkProps` | —       | —           |
| `termsOfUse`          | `DisclaimerTextLinkProps` | —       | —           |
| `reportVulnerability` | `DisclaimerTextLinkProps` | —       | —           |

## Props — `FooterLinkProps`

| Prop             | Type                       | Default     | Description                                                                                                   |
| ---------------- | -------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------- |
| `data-options`   | `T`                        | —           | Any custom attributes you would like to pass to the link                                                      |
| `weight`         | `TypographyWeight`         | "regular"   | Font weight of the link text.                                                                                 |
| `external`       | `boolean`                  | —           | Appends an external-link icon after the link text to signal that the destination is outside the current site. |
| `underlineStyle` | `TypographyUnderlineStyle` | "underline" | Text-decoration style for the link.                                                                           |

## Props — `FooterProps`

| Prop                | Type                                   | Default   | Description                                                                                                                                                                                                                  |
| ------------------- | -------------------------------------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `links`             | `FooterLinkProps<T>[][]`               | —         | The footer links. Multi array to present in different columns                                                                                                                                                                |
| `showDownloadAddon` | `boolean`                              | —         | Indicates if the download app icons are to be present                                                                                                                                                                        |
| `showResourceAddon` | `boolean`                              | —         | Indicates if additional app resources should be displayed. When both `showDownloadAddon` and `showResourceAddon` are `true`, `showDownloadAddon` takes priority and the resource add-on is not rendered.                     |
| `children`          | `JSX.Element \| JSX.Element[]`         | —         | Custom component. This overrides the logo, links and download section                                                                                                                                                        |
| `disclaimerLinks`   | `DisclaimerLinks`                      | —         | Override attributes for the built-in disclaimer links. Each supplied key is merged with the theme defaults. Omitted keys fall back to the default URLs for the active theme.                                                 |
| `copyrightInfo`     | `string`                               | —         | A custom copyright text                                                                                                                                                                                                      |
| `logoSrc`           | `string`                               | —         | Custom logo source                                                                                                                                                                                                           |
| `logoAlt`           | `string`                               | —         | Custom logo alt text                                                                                                                                                                                                         |
| `lastUpdated`       | `Date`                                 | —         | Date displayed in the copyright line as "Last updated D MMMM YYYY".                                                                                                                                                          |
| `onFooterLinkClick` | `((link: FooterLinkProps<T>) => void)` | —         | Called when a footer navigation link is clicked. Receives the full `FooterLinkProps` for the clicked link. If the link defines its own `onClick` handler, that handler takes priority and `onFooterLinkClick` is not called. |
| `layout`            | `"default" \| "stretch"`               | "default" | Controls whether the footer content is constrained to a maximum width or stretches to fill the full viewport width.                                                                                                          |
| `id`                | `string`                               | —         | —                                                                                                                                                                                                                            |
| `className`         | `string`                               | —         | —                                                                                                                                                                                                                            |
| `hideLogo`          | `boolean`                              | —         | Suppresses the logo even when a `logoSrc` or a theme-based logo URL is available.                                                                                                                                            |

## Props — `DisclaimerLinks`

| Prop                  | Type                      | Default | Description |
| --------------------- | ------------------------- | ------- | ----------- |
| `privacy`             | `DisclaimerTextLinkProps` | —       | —           |
| `termsOfUse`          | `DisclaimerTextLinkProps` | —       | —           |
| `reportVulnerability` | `DisclaimerTextLinkProps` | —       | —           |

## Props — `FooterLinkProps`

| Prop             | Type                       | Default     | Description                                                                                                   |
| ---------------- | -------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------- |
| `data-options`   | `T`                        | —           | Any custom attributes you would like to pass to the link                                                      |
| `weight`         | `TypographyWeight`         | "regular"   | Font weight of the link text.                                                                                 |
| `external`       | `boolean`                  | —           | Appends an external-link icon after the link text to signal that the destination is outside the current site. |
| `underlineStyle` | `TypographyUnderlineStyle` | "underline" | Text-decoration style for the link.                                                                           |

## Props — `FooterProps`

| Prop                | Type                                   | Default   | Description                                                                                                                                                                                                                  |
| ------------------- | -------------------------------------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `links`             | `FooterLinkProps<T>[][]`               | —         | The footer links. Multi array to present in different columns                                                                                                                                                                |
| `showDownloadAddon` | `boolean`                              | —         | Indicates if the download app icons are to be present                                                                                                                                                                        |
| `showResourceAddon` | `boolean`                              | —         | Indicates if additional app resources should be displayed. When both `showDownloadAddon` and `showResourceAddon` are `true`, `showDownloadAddon` takes priority and the resource add-on is not rendered.                     |
| `children`          | `JSX.Element \| JSX.Element[]`         | —         | Custom component. This overrides the logo, links and download section                                                                                                                                                        |
| `disclaimerLinks`   | `DisclaimerLinks`                      | —         | Override attributes for the built-in disclaimer links. Each supplied key is merged with the theme defaults. Omitted keys fall back to the default URLs for the active theme.                                                 |
| `copyrightInfo`     | `string`                               | —         | A custom copyright text                                                                                                                                                                                                      |
| `logoSrc`           | `string`                               | —         | Custom logo source                                                                                                                                                                                                           |
| `logoAlt`           | `string`                               | —         | Custom logo alt text                                                                                                                                                                                                         |
| `lastUpdated`       | `Date`                                 | —         | Date displayed in the copyright line as "Last updated D MMMM YYYY".                                                                                                                                                          |
| `onFooterLinkClick` | `((link: FooterLinkProps<T>) => void)` | —         | Called when a footer navigation link is clicked. Receives the full `FooterLinkProps` for the clicked link. If the link defines its own `onClick` handler, that handler takes priority and `onFooterLinkClick` is not called. |
| `layout`            | `"default" \| "stretch"`               | "default" | Controls whether the footer content is constrained to a maximum width or stretches to fill the full viewport width.                                                                                                          |
| `id`                | `string`                               | —         | —                                                                                                                                                                                                                            |
| `className`         | `string`                               | —         | —                                                                                                                                                                                                                            |
| `hideLogo`          | `boolean`                              | —         | Suppresses the logo even when a `logoSrc` or a theme-based logo URL is available.                                                                                                                                            |

## Props — `DisclaimerLinks`

| Prop                  | Type                      | Default | Description |
| --------------------- | ------------------------- | ------- | ----------- |
| `privacy`             | `DisclaimerTextLinkProps` | —       | —           |
| `termsOfUse`          | `DisclaimerTextLinkProps` | —       | —           |
| `reportVulnerability` | `DisclaimerTextLinkProps` | —       | —           |

## Props — `FooterLinkProps`

| Prop             | Type                       | Default     | Description                                                                                                   |
| ---------------- | -------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------- |
| `data-options`   | `T`                        | —           | Any custom attributes you would like to pass to the link                                                      |
| `weight`         | `TypographyWeight`         | "regular"   | Font weight of the link text.                                                                                 |
| `external`       | `boolean`                  | —           | Appends an external-link icon after the link text to signal that the destination is outside the current site. |
| `underlineStyle` | `TypographyUnderlineStyle` | "underline" | Text-decoration style for the link.                                                                           |

## Props — `FooterProps`

| Prop                | Type                                   | Default   | Description                                                                                                                                                                                                                  |
| ------------------- | -------------------------------------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `links`             | `FooterLinkProps<T>[][]`               | —         | The footer links. Multi array to present in different columns                                                                                                                                                                |
| `showDownloadAddon` | `boolean`                              | —         | Indicates if the download app icons are to be present                                                                                                                                                                        |
| `showResourceAddon` | `boolean`                              | —         | Indicates if additional app resources should be displayed. When both `showDownloadAddon` and `showResourceAddon` are `true`, `showDownloadAddon` takes priority and the resource add-on is not rendered.                     |
| `children`          | `JSX.Element \| JSX.Element[]`         | —         | Custom component. This overrides the logo, links and download section                                                                                                                                                        |
| `disclaimerLinks`   | `DisclaimerLinks`                      | —         | Override attributes for the built-in disclaimer links. Each supplied key is merged with the theme defaults. Omitted keys fall back to the default URLs for the active theme.                                                 |
| `copyrightInfo`     | `string`                               | —         | A custom copyright text                                                                                                                                                                                                      |
| `logoSrc`           | `string`                               | —         | Custom logo source                                                                                                                                                                                                           |
| `logoAlt`           | `string`                               | —         | Custom logo alt text                                                                                                                                                                                                         |
| `lastUpdated`       | `Date`                                 | —         | Date displayed in the copyright line as "Last updated D MMMM YYYY".                                                                                                                                                          |
| `onFooterLinkClick` | `((link: FooterLinkProps<T>) => void)` | —         | Called when a footer navigation link is clicked. Receives the full `FooterLinkProps` for the clicked link. If the link defines its own `onClick` handler, that handler takes priority and `onFooterLinkClick` is not called. |
| `layout`            | `"default" \| "stretch"`               | "default" | Controls whether the footer content is constrained to a maximum width or stretches to fill the full viewport width.                                                                                                          |
| `id`                | `string`                               | —         | —                                                                                                                                                                                                                            |
| `className`         | `string`                               | —         | —                                                                                                                                                                                                                            |
| `hideLogo`          | `boolean`                              | —         | Suppresses the logo even when a `logoSrc` or a theme-based logo URL is available.                                                                                                                                            |

## Props — `DisclaimerLinks`

| Prop                  | Type                      | Default | Description |
| --------------------- | ------------------------- | ------- | ----------- |
| `privacy`             | `DisclaimerTextLinkProps` | —       | —           |
| `termsOfUse`          | `DisclaimerTextLinkProps` | —       | —           |
| `reportVulnerability` | `DisclaimerTextLinkProps` | —       | —           |

## Props — `FooterLinkProps`

| Prop             | Type                       | Default     | Description                                                                                                   |
| ---------------- | -------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------- |
| `data-options`   | `T`                        | —           | Any custom attributes you would like to pass to the link                                                      |
| `weight`         | `TypographyWeight`         | "regular"   | Font weight of the link text.                                                                                 |
| `external`       | `boolean`                  | —           | Appends an external-link icon after the link text to signal that the destination is outside the current site. |
| `underlineStyle` | `TypographyUnderlineStyle` | "underline" | Text-decoration style for the link.                                                                           |

## Props — `FooterProps`

| Prop                | Type                                   | Default   | Description                                                                                                                                                                                                                  |
| ------------------- | -------------------------------------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `links`             | `FooterLinkProps<T>[][]`               | —         | The footer links. Multi array to present in different columns                                                                                                                                                                |
| `showDownloadAddon` | `boolean`                              | —         | Indicates if the download app icons are to be present                                                                                                                                                                        |
| `showResourceAddon` | `boolean`                              | —         | Indicates if additional app resources should be displayed. When both `showDownloadAddon` and `showResourceAddon` are `true`, `showDownloadAddon` takes priority and the resource add-on is not rendered.                     |
| `children`          | `JSX.Element \| JSX.Element[]`         | —         | Custom component. This overrides the logo, links and download section                                                                                                                                                        |
| `disclaimerLinks`   | `DisclaimerLinks`                      | —         | Override attributes for the built-in disclaimer links. Each supplied key is merged with the theme defaults. Omitted keys fall back to the default URLs for the active theme.                                                 |
| `copyrightInfo`     | `string`                               | —         | A custom copyright text                                                                                                                                                                                                      |
| `logoSrc`           | `string`                               | —         | Custom logo source                                                                                                                                                                                                           |
| `logoAlt`           | `string`                               | —         | Custom logo alt text                                                                                                                                                                                                         |
| `lastUpdated`       | `Date`                                 | —         | Date displayed in the copyright line as "Last updated D MMMM YYYY".                                                                                                                                                          |
| `onFooterLinkClick` | `((link: FooterLinkProps<T>) => void)` | —         | Called when a footer navigation link is clicked. Receives the full `FooterLinkProps` for the clicked link. If the link defines its own `onClick` handler, that handler takes priority and `onFooterLinkClick` is not called. |
| `layout`            | `"default" \| "stretch"`               | "default" | Controls whether the footer content is constrained to a maximum width or stretches to fill the full viewport width.                                                                                                          |
| `id`                | `string`                               | —         | —                                                                                                                                                                                                                            |
| `className`         | `string`                               | —         | —                                                                                                                                                                                                                            |
| `hideLogo`          | `boolean`                              | —         | Suppresses the logo even when a `logoSrc` or a theme-based logo URL is available.                                                                                                                                            |

## Props — `DisclaimerLinks`

| Prop                  | Type                      | Default | Description |
| --------------------- | ------------------------- | ------- | ----------- |
| `privacy`             | `DisclaimerTextLinkProps` | —       | —           |
| `termsOfUse`          | `DisclaimerTextLinkProps` | —       | —           |
| `reportVulnerability` | `DisclaimerTextLinkProps` | —       | —           |

## Props — `FooterLinkProps`

| Prop             | Type                       | Default     | Description                                                                                                   |
| ---------------- | -------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------- |
| `data-options`   | `T`                        | —           | Any custom attributes you would like to pass to the link                                                      |
| `weight`         | `TypographyWeight`         | "regular"   | Font weight of the link text.                                                                                 |
| `external`       | `boolean`                  | —           | Appends an external-link icon after the link text to signal that the destination is outside the current site. |
| `underlineStyle` | `TypographyUnderlineStyle` | "underline" | Text-decoration style for the link.                                                                           |

## Props — `FooterProps`

| Prop                | Type                                   | Default   | Description                                                                                                                                                                                                                  |
| ------------------- | -------------------------------------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `links`             | `FooterLinkProps<T>[][]`               | —         | The footer links. Multi array to present in different columns                                                                                                                                                                |
| `showDownloadAddon` | `boolean`                              | —         | Indicates if the download app icons are to be present                                                                                                                                                                        |
| `showResourceAddon` | `boolean`                              | —         | Indicates if additional app resources should be displayed. When both `showDownloadAddon` and `showResourceAddon` are `true`, `showDownloadAddon` takes priority and the resource add-on is not rendered.                     |
| `children`          | `JSX.Element \| JSX.Element[]`         | —         | Custom component. This overrides the logo, links and download section                                                                                                                                                        |
| `disclaimerLinks`   | `DisclaimerLinks`                      | —         | Override attributes for the built-in disclaimer links. Each supplied key is merged with the theme defaults. Omitted keys fall back to the default URLs for the active theme.                                                 |
| `copyrightInfo`     | `string`                               | —         | A custom copyright text                                                                                                                                                                                                      |
| `logoSrc`           | `string`                               | —         | Custom logo source                                                                                                                                                                                                           |
| `logoAlt`           | `string`                               | —         | Custom logo alt text                                                                                                                                                                                                         |
| `lastUpdated`       | `Date`                                 | —         | Date displayed in the copyright line as "Last updated D MMMM YYYY".                                                                                                                                                          |
| `onFooterLinkClick` | `((link: FooterLinkProps<T>) => void)` | —         | Called when a footer navigation link is clicked. Receives the full `FooterLinkProps` for the clicked link. If the link defines its own `onClick` handler, that handler takes priority and `onFooterLinkClick` is not called. |
| `layout`            | `"default" \| "stretch"`               | "default" | Controls whether the footer content is constrained to a maximum width or stretches to fill the full viewport width.                                                                                                          |
| `id`                | `string`                               | —         | —                                                                                                                                                                                                                            |
| `className`         | `string`                               | —         | —                                                                                                                                                                                                                            |
| `hideLogo`          | `boolean`                              | —         | Suppresses the logo even when a `logoSrc` or a theme-based logo URL is available.                                                                                                                                            |

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
