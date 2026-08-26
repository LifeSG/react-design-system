# ButtonWithIcon

> **Not available in v4.** If you are building for v4, do not use this component.

Import: `import { ButtonWithIcon } from "@lifesg/react-design-system/button-with-icon"`

## Sub-components

| Sub-component            | When to use                    |
| ------------------------ | ------------------------------ |
| `ButtonWithIcon.Default` | Standard size                  |
| `ButtonWithIcon.Small`   | Dense layouts, toolbars        |
| `ButtonWithIcon.Large`   | Only when explicitly specified |

## Props

Also inherits all props from `HTMLButtonElement` (e.g. `disabled`, `onClick`, `children`).

| Prop                    | Type                                                  | Default     | Description                                        |
| ----------------------- | ----------------------------------------------------- | ----------- | -------------------------------------------------- |
| `icon`                  | `JSX.Element`                                         | —           | Icon component to render                           |
| `iconPosition`          | `"left"` \| `"right"`                                 | `"left"`    | Icon position relative to label                    |
| `styleType`             | `"default"` \| `"secondary"` \| `"light"` \| `"link"` | `"default"` | Visual style of the button                         |
| `danger`                | `boolean`                                             | `false`     | Applies a red color scheme for destructive actions |
| `loading`               | `boolean`                                             | `false`     | Replaces the icon with a loading spinner           |
| `focusableWhenDisabled` | `boolean`                                             | `false`     | Keeps button focusable when disabled               |

## Rules

-   `styleType` is mandatory.
-   Use `iconPosition="right"` only for directional actions (next, continue, external link).
-   Combine `loading` and `disabled` during async operations to prevent double-submission.
