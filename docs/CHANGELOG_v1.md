# Changelog v1


| Previous    | Latest                    | Next                        |
| ----------- | ------------------------- | --------------------------- |
| -           | [Latest](../CHANGELOG.md) | [v2.x.x](./CHANGELOG_v2.md) |

<br />

## v1.4.0 (1 Feb, 2021)

### Changes

-   Introduce `Textarea` component
-   Amend `data-testid` attribute for `Form.Field` and `Form.FieldGroup` label and error messages, to include id for a more distinct identifier

---
## v1.3.5 (21 Jan, 2021)

### Changes

-   Change color code of TransparentColor in breadcrumb styles

---
## v1.3.4 (18 Jan, 2021)

### Changes

-   Introduce `Checkbox` component
-   Add blur effect to `Overlay` component which can be enabled/disabled by a prop
-   Set default opacity for `Overlay` to 0.8 (was 0.9)
-   Enhance tests on `InputGroup`

---
## v1.3.3 (11 Jan, 2021)

-   Update media width for larger mobile devices

---
## v1.3.2 (11 Jan, 2021)

### Changes

-   Add accessibility features to `Navbar` where links are now tabbable & interactable
-   Refactor `Navbar` component

---
## v1.3.1 (6 Jan, 2021)

### Changes

-   Add `mobileImgSrc` prop to `ImageSelector` to allow for customization in mobile viewports

---
## v1.3.0 (22 Dec, 2020)

### Changes

-   **[BREAKING]** Improvements to `VideoBanner` with mobile view built in rather than required to implement separately
    -   Also updated props for clarity as well as style cleanup
    -   Fix layout issue on tab focus

---
## v1.2.2 (18 Dec, 2020)

### Fixes

-   Fix bug where `type` indicated in `Form.FieldGroup` was not passed down to the input element

---
## v1.2.1 (15 Dec, 2020)

### Changes

-   Enhance accessibility for `InputGroup` list options
-   **[BREAKING]** Rename `imgSet` prop in `Banner` to `imgset` due to React warning of unrecognizable custom prop

### Fixes

-   Allow all native props to be passed through in `Layout.Container` and `Layout.Section`

---
## v1.2.0 (11 Dec, 2020)

### Changes

-   Introduce `InputGroup` and `FormFieldGroup` components
    -   You can now add a label or action to the `Input` field

---
## v1.1.1 (10 Dec, 2020)

### Changes

-   Footer: Separate border from BottomSection into its own div

---
## v1.1.0 (5 Dec, 2020)

### Changes

-   Convert `Input` to the base element and introduce `FormElement.Field`
-   Introduce form elements

---
## v1.0.1 (1 Dec, 2020)

### Changes

-   Add portal support for `Overlay`

### Fixes

-   Allow override of styles for `ImageSelector`

---
## v1.0.0 (27 Nov, 2020)

-   Initial release of Design system with base components
