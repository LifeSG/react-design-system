# ButtonWithIcon

> **Not available in v4.** If you are building for v4, do not use this component.

Import: `import { ButtonWithIcon } from "@lifesg/react-design-system/button-with-icon"`

## Sub-components

| Sub-component            | When to use                    |
| ------------------------ | ------------------------------ |
| `ButtonWithIcon.Default` | Standard size                  |
| `ButtonWithIcon.Small`   | Dense layouts, toolbars        |
| `ButtonWithIcon.Large`   | Only when explicitly specified |

## Rules

-   `styleType` is mandatory.
-   Use `iconPosition="right"` only for directional actions (next, continue, external link).
-   Combine `loading` and `disabled` during async operations to prevent double-submission.
