# Checkbox

Import: `import { Checkbox } from "@lifesg/react-design-system/checkbox"`

## When to use

-   Simple boolean selections where a compact tick-box is sufficient.
-   Table row selection (single or "select all").
-   Filter lists with multiple independent options.
-   "Select all" patterns using the `indeterminate` state.

Prefer `Toggle` over `Checkbox` when building form inputs that need a visible card-style label container.

## Variants

| `displaySize` | When to use                    |
| ------------- | ------------------------------ |
| `"default"`   | Standard use                   |
| `"small"`     | Dense layouts, inline controls |

## Usage

```tsx
import { Checkbox } from "@lifesg/react-design-system/checkbox";

<label>
    <Checkbox checked={agreed} onChange={(e) => {}} />I agree to the terms and
    conditions
</label>;
```

## Props

| Prop                    | Type                                               | Default     | Description                                                                  |
| ----------------------- | -------------------------------------------------- | ----------- | ---------------------------------------------------------------------------- |
| `displaySize`           | `"default"` \| `"small"`                           | `"default"` | Display size of the component                                                |
| `checked`               | `boolean`                                          | —           | Controlled checked state                                                     |
| `indeterminate`         | `boolean`                                          | —           | Indeterminate state — use for "select all" when only some items are selected |
| `focusableWhenDisabled` | `boolean`                                          | —           | Keeps component focusable when disabled, preventing all user interaction     |
| `onChange`              | `(e: React.ChangeEvent<HTMLInputElement>) => void` | —           | Called when the checked state changes — inherited from `InputHTMLAttributes` |

Also inherits all props from `React.InputHTMLAttributes<HTMLInputElement>` (e.g. `name`, `value`, `disabled`, `aria-*`).

## Rules

-   Always pair with a visible label — wrap in `<label>` or use `aria-label`.
-   Use `indeterminate` for "select all" controls when only some items in a list are selected — not as a permanent state.
-   Use the same `name` attribute when grouping checkboxes in a form.
-   No dedicated `disabled` prop — use the inherited `disabled` from `InputHTMLAttributes`, or `focusableWhenDisabled` to retain focus while blocking interaction.
-   `indeterminate` is a visual state; manage controlled `checked` separately.

## Anti-patterns

-   Do not use `indeterminate` as a permanent or final state — it is a transitional indicator only.
-   Do not use `Checkbox` alone without a label — always provide accessible text.
-   Do not use `Checkbox` when only one option from a set can be selected — use `RadioButton` instead.
