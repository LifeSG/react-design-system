# Changelog v3

| Previous                    | Latest                    | Next                        |
| --------------------------- | ------------------------- | --------------------------- |
| [v2.x.x](./CHANGELOG_v2.md) | [Latest](../CHANGELOG.md) | [v4.x.x](./CHANGELOG_v4.md) |

<br />

## v3.9.3 (6 April, 2021)

### Fixes

-   Fix horizontal padding for `Footer` in tablet and mobile viewports (From `2rem` to `1.5rem`)

---
## v3.9.2 (1 April, 2021)

### Fixes

-   Update ImageSelector mobile to always position the background image with `object-position: top`

---
## v3.9.1 (31 March, 2021)

### Fixes

-   Update ImageSelector to always position the background image with `object-position: top`
-   Fix an issue on MasonryGrid where different sizes columns will sometimes appear on large screens

---
## v3.9.0 (25 March, 2021)

### Changes

-   Add `Link Button` component

---
## v3.8.0 (24 March, 2021)

### Changes

-   Update `List` component styles & typing

---
## v3.7.0 (22 March, 2021)

### Changes

-   Update `Text.Link` to only show darker blue shade on hover (as opposed to active, focus & hover)
-   Move `Color.Accent.Dark[4]` to `Color.Secondary` and update references

---
## v3.6.0 (19 March, 2021)

### Changes

-   Update `List` to accept onItemClick prop and remove onClick prop in `listItem` component

### Fixes

-   Fix `List` styles
-   Remove `isPadded` prop from `List`

---
## v3.5.0 (18 March, 2021)

### Changes

-   Improve `InputSelect` to allow configuring the options width
-   Enhance `Dropdown` component guards for missing display extractor props
-   **[WARNING]** Update `InputSelect` props and refactor component to handle more use cases (did not increase major version as
    it is not used yet)

### Fixes

-   Fix bug in `InputSelect` whereby selecting an option would throw an error
-   Fix bug in `InputSelect` where the selected value display does not reflect when value prop changes

---
## v3.4.0 (17 March, 2021)

### Changes

-   Add new color to `Color.Accent.Dark`
-   Update link interaction to darker shade on hover, action & focus
-   Refactor `InputSelect` props and add new callback to handle when an item is selected from the dropdown list

### Fixes

-   Fix styles in `List` component (margin & line-height)
-   Fix bug whereby `RadioButton` checked state is not updated when the prop value changes. Applied the same fix to
    `Checkbox` component as wells

---
## v3.3.0 (16 March, 2021)

### Changes

-   Add `RadioButton` component
-   Add `Form.CustomField` component to allow ability to add custom elements while enjoying the label and error message
    style preset. Good for grouped fields.
-   Expose form labels `Form.Label` and `Form.ErrorMessage` for usage
-   Add `InputSelect` component to allow selection of options

---
## v3.2.1 (12 March, 2021)

### Fixes

-   Fix `ImageSelector` component hover animation not appearing on tab focus
-   Remove `ImageSelector` component hover animation for video-thumbnail type as designers find it distracting with
    the play icon changing colour as well

---
## v3.2.0 (11 March, 2021)

### Changes

-   Update `ImageSelector` component to have an animation when hovered. Can be toggled using the `hoverAnimation` prop
-   Add custom transition function for `Transition` that accepts a duration in ms

---
## v3.1.1 (9 March, 2021)

### Changes

-   Update `ImageSelector` component `background-position` to `top center` insteead of `center center`

---
## v3.1.0 (4 March, 2021)

### Changes

-   Add `List` component

---
## v3.0.1 (3 March, 2021)

-   Update `ImageSelector` component to have an alternate styling using `styleType`

---
## v3.0.0 (24 Feb, 2021)

### Changes

-   **[WARNING]** Update to use React 17
    -   Also update other dependencies to resolve vulnerabilities
