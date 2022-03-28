# Changelog v4

| Previous                    | Latest                    | Next                        |
| --------------------------- | ------------------------- | --------------------------- |
| [v3.x.x](./CHANGELOG_v3.md) | [Latest](../CHANGELOG.md) | [v5.x.x](./CHANGELOG_v5.md) |

<br />

## v4.2.2 (4 May, 2021)

### Fixes

-   Update more dependencies to resolve vulnerabilities (replace `package-lock.json`)
-   Amend `husky` implementation

---
## v4.2.1 (3 May, 2021)

### Fixes

-   Update dependencies to resolve vulnerabilities. Dependencies updated:
    -   `mol-lib-config`, `@storybook/react`, `@storybook/addon-essentials`, `jest`, `y18n`(Part of dependencies' dependency)

---
## v4.2.0 (28 April, 2021)

### Changes

-   Export `Masthead` for usage

---
## v4.1.2 (23 April, 2021)

### Fixes

-   Fixed `href` in `NavbarItems` to use `item.href`.

---
## v4.1.1 (21 April, 2021)

### Fixes

-   Fix `Navbar` drawer's last item being hidden by mobile browser's toolbar.

---
## v4.1.0 (12 April, 2021)

### Fixes

-   Changed `LinkButton` display property to `inline-block`.

---
## v4.0.0 (8 April, 2021)

### Changes

-   **[BREAKING]** Style fix to `Layout.Section` component. Now it comes with a default horizontal padding of `1.5rem`. This is an attempt to standardise the padding and reduce need for manual specification.
-   Add `Layout.Content` component that comprises of the `Layout.Section` and `Layout.Container`
-   Amend styling for `Navbar` and `Banner`
-   Add `Masthead` component to be used in `Navbar`. Now it can open in a new tab when clicked
-   **[BREAKING]** Refactor `Footer` component and amend usage. Remove `FooterLinkGroup` and `FooterLinkItem`. Instead they are grouped under the `FooterLink` component. For usage, refer to docs
