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

| Prop                    | Type           | Default   | Description                                                                                                                                                                                                                                                            |
| ----------------------- | -------------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `checked`               | `boolean`      | —         | Controls the checked state of the checkbox. When omitted, the checkbox is uncontrolled.                                                                                                                                                                                |
| `displaySize`           | `CheckboxSize` | "default" | Controls the visual size of the checkbox.                                                                                                                                                                                                                              |
| `indeterminate`         | `boolean`      | —         | Puts the checkbox into an indeterminate visual and accessibility state.                                                                                                                                                                                                |
| `focusableWhenDisabled` | `boolean`      | —         | Allows the checkbox to receive focus when `disabled` is true. When set alongside `disabled`, the native `disabled` attribute is omitted in favor of `aria-disabled="true"` and `tabIndex={0}`, keeping the element keyboard-reachable. `onChange` is still suppressed. |

## Props

| Prop                    | Type           | Default   | Description                                                                                                                                                                                                                                                            |
| ----------------------- | -------------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `checked`               | `boolean`      | —         | Controls the checked state of the checkbox. When omitted, the checkbox is uncontrolled.                                                                                                                                                                                |
| `displaySize`           | `CheckboxSize` | "default" | Controls the visual size of the checkbox.                                                                                                                                                                                                                              |
| `indeterminate`         | `boolean`      | —         | Puts the checkbox into an indeterminate visual and accessibility state.                                                                                                                                                                                                |
| `focusableWhenDisabled` | `boolean`      | —         | Allows the checkbox to receive focus when `disabled` is true. When set alongside `disabled`, the native `disabled` attribute is omitted in favor of `aria-disabled="true"` and `tabIndex={0}`, keeping the element keyboard-reachable. `onChange` is still suppressed. |

## Props

| Prop                    | Type           | Default   | Description                                                                                                                                                                                                                                                            |
| ----------------------- | -------------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `checked`               | `boolean`      | —         | Controls the checked state of the checkbox. When omitted, the checkbox is uncontrolled.                                                                                                                                                                                |
| `displaySize`           | `CheckboxSize` | "default" | Controls the visual size of the checkbox.                                                                                                                                                                                                                              |
| `indeterminate`         | `boolean`      | —         | Puts the checkbox into an indeterminate visual and accessibility state.                                                                                                                                                                                                |
| `focusableWhenDisabled` | `boolean`      | —         | Allows the checkbox to receive focus when `disabled` is true. When set alongside `disabled`, the native `disabled` attribute is omitted in favor of `aria-disabled="true"` and `tabIndex={0}`, keeping the element keyboard-reachable. `onChange` is still suppressed. |

## Props

| Prop                    | Type           | Default   | Description                                                                                                                                                                                                                                                            |
| ----------------------- | -------------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `checked`               | `boolean`      | —         | Controls the checked state of the checkbox. When omitted, the checkbox is uncontrolled.                                                                                                                                                                                |
| `displaySize`           | `CheckboxSize` | "default" | Controls the visual size of the checkbox.                                                                                                                                                                                                                              |
| `indeterminate`         | `boolean`      | —         | Puts the checkbox into an indeterminate visual and accessibility state.                                                                                                                                                                                                |
| `focusableWhenDisabled` | `boolean`      | —         | Allows the checkbox to receive focus when `disabled` is true. When set alongside `disabled`, the native `disabled` attribute is omitted in favor of `aria-disabled="true"` and `tabIndex={0}`, keeping the element keyboard-reachable. `onChange` is still suppressed. |

## Props

| Prop                    | Type           | Default   | Description                                                                                                                                                                                                                                                            |
| ----------------------- | -------------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `checked`               | `boolean`      | —         | Controls the checked state of the checkbox. When omitted, the checkbox is uncontrolled.                                                                                                                                                                                |
| `displaySize`           | `CheckboxSize` | "default" | Controls the visual size of the checkbox.                                                                                                                                                                                                                              |
| `indeterminate`         | `boolean`      | —         | Puts the checkbox into an indeterminate visual and accessibility state.                                                                                                                                                                                                |
| `focusableWhenDisabled` | `boolean`      | —         | Allows the checkbox to receive focus when `disabled` is true. When set alongside `disabled`, the native `disabled` attribute is omitted in favor of `aria-disabled="true"` and `tabIndex={0}`, keeping the element keyboard-reachable. `onChange` is still suppressed. |

## Props

| Prop                    | Type           | Default   | Description                                                                                                                                                                                                                                                            |
| ----------------------- | -------------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `checked`               | `boolean`      | —         | Controls the checked state of the checkbox. When omitted, the checkbox is uncontrolled.                                                                                                                                                                                |
| `displaySize`           | `CheckboxSize` | "default" | Controls the visual size of the checkbox.                                                                                                                                                                                                                              |
| `indeterminate`         | `boolean`      | —         | Puts the checkbox into an indeterminate visual and accessibility state.                                                                                                                                                                                                |
| `focusableWhenDisabled` | `boolean`      | —         | Allows the checkbox to receive focus when `disabled` is true. When set alongside `disabled`, the native `disabled` attribute is omitted in favor of `aria-disabled="true"` and `tabIndex={0}`, keeping the element keyboard-reachable. `onChange` is still suppressed. |

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
