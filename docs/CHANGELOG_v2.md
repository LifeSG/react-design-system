# Changelog v2

| Previous                    | Latest                    | Next                        |
| --------------------------- | ------------------------- | --------------------------- |
| [v1.x.x](./CHANGELOG_v1.md) | [Latest](../CHANGELOG.md) | [v3.x.x](./CHANGELOG_v3.md) |

<br />

## v2.4.0 (19 Feb, 2021)

### Changes

-   Update `Input` component to handle position of caret when user modifies input value
-   Color change to chevron icon in `Input Group`

---
## v2.3.0 (5 Feb, 2021)

### Changes

-   Add chevron-up/down to `Input Group` component
    -   Only shown when `Input` type is `list`
    -   By default, chevron-down is shown on prefix to indicate dropdown
    -   If user clicks on prefix, chevron-up will be shown instead

---
## v2.2.0 (5 Feb, 2021)

### Changes

-   Add `Loading Spinner` component
    -   Add `react-lottie` lib to handle animations
    -   Add `jest-canvas-mock` lib to mock `canvas` after introduction of `lottie` lib

---
## v2.1.2 (4 Feb, 2021)

### Fixes

-   Style fix to `Modal` position and close button

---
## v2.1.1 (3 Feb, 2021)

### Fixes

-   Fix `Navbar` drawer not dismissing on clicking on overlay

---
## v2.1.0 (3 Feb, 2021)

### Changes

-   Improvements to `Input`
    -   Add `spacing` option which creates a space after a specified `spacing` prop number
    -   `spacing` works in conjunction with `tel` `type`

---
## v2.0.0 (3 Feb, 2021)

### Changes

-   **[BREAKING]** Improvements to `Overlay`
    -   Previously required specifying `.overlay-open` css class when using. Now it is generated dynamically
    -   Amend prop names for clarity
-   Introduce `Modal` component
