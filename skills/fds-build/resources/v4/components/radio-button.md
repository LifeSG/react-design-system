# RadioButton

Import: `import { RadioButton } from "@lifesg/react-design-system/radio-button"`

## When to use

-   User must choose exactly one option from a small set (typically 2–5 options).
-   Options are mutually exclusive.

Prefer `Toggle` with `type="radio"` over bare `RadioButton` when building form inputs that need a visible card-style label container.

## Variants

| `displaySize` | When to use                    |
| ------------- | ------------------------------ |
| `"default"`   | Standard use                   |
| `"small"`     | Dense layouts, inline controls |

## Usage

```tsx
import { RadioButton } from "@lifesg/react-design-system/radio-button";

<div role="radiogroup" aria-labelledby="group-label">
    <label>
        <RadioButton
            name="plan"
            value="basic"
            checked={selected === "basic"}
            onChange={(e) => {}}
        />
        Basic
    </label>
    <label>
        <RadioButton
            name="plan"
            value="pro"
            checked={selected === "pro"}
            onChange={(e) => {}}
        />
        Pro
    </label>
</div>;
```

## Props

| Prop                    | Type              | Default   | Description                                                                                                             |
| ----------------------- | ----------------- | --------- | ----------------------------------------------------------------------------------------------------------------------- |
| `checked`               | `boolean`         | —         | The selected state of the component                                                                                     |
| `disabled`              | `boolean`         | —         | —                                                                                                                       |
| `displaySize`           | `RadioButtonSize` | "default" | Visual size of the radio button icon.                                                                                   |
| `focusableWhenDisabled` | `boolean`         | —         | When `true` and `disabled` is also `true`, the radio button remains keyboard-focusable. `onChange` is still suppressed. |

## Props

| Prop                    | Type              | Default   | Description                                                                                                             |
| ----------------------- | ----------------- | --------- | ----------------------------------------------------------------------------------------------------------------------- |
| `checked`               | `boolean`         | —         | The selected state of the component                                                                                     |
| `disabled`              | `boolean`         | —         | —                                                                                                                       |
| `displaySize`           | `RadioButtonSize` | "default" | Visual size of the radio button icon.                                                                                   |
| `focusableWhenDisabled` | `boolean`         | —         | When `true` and `disabled` is also `true`, the radio button remains keyboard-focusable. `onChange` is still suppressed. |

## Props — `RadioButtonProps`

| Prop                    | Type              | Default   | Description                                                                                                             |
| ----------------------- | ----------------- | --------- | ----------------------------------------------------------------------------------------------------------------------- |
| `checked`               | `boolean`         | —         | The selected state of the component                                                                                     |
| `disabled`              | `boolean`         | —         | —                                                                                                                       |
| `displaySize`           | `RadioButtonSize` | "default" | Visual size of the radio button icon.                                                                                   |
| `focusableWhenDisabled` | `boolean`         | —         | When `true` and `disabled` is also `true`, the radio button remains keyboard-focusable. `onChange` is still suppressed. |

## Props — `RadioButtonProps`

| Prop                    | Type              | Default   | Description                                                                                                             |
| ----------------------- | ----------------- | --------- | ----------------------------------------------------------------------------------------------------------------------- |
| `checked`               | `boolean`         | —         | The selected state of the component                                                                                     |
| `disabled`              | `boolean`         | —         | —                                                                                                                       |
| `displaySize`           | `RadioButtonSize` | "default" | Visual size of the radio button icon.                                                                                   |
| `focusableWhenDisabled` | `boolean`         | —         | When `true` and `disabled` is also `true`, the radio button remains keyboard-focusable. `onChange` is still suppressed. |

## Props — `RadioButtonProps`

| Prop                    | Type              | Default   | Description                                                                                                             |
| ----------------------- | ----------------- | --------- | ----------------------------------------------------------------------------------------------------------------------- |
| `checked`               | `boolean`         | —         | The selected state of the component                                                                                     |
| `disabled`              | `boolean`         | —         | —                                                                                                                       |
| `displaySize`           | `RadioButtonSize` | "default" | Visual size of the radio button icon.                                                                                   |
| `focusableWhenDisabled` | `boolean`         | —         | When `true` and `disabled` is also `true`, the radio button remains keyboard-focusable. `onChange` is still suppressed. |

## Props — `RadioButtonProps`

| Prop                    | Type              | Default   | Description                                                                                                             |
| ----------------------- | ----------------- | --------- | ----------------------------------------------------------------------------------------------------------------------- |
| `checked`               | `boolean`         | —         | The selected state of the component                                                                                     |
| `disabled`              | `boolean`         | —         | —                                                                                                                       |
| `displaySize`           | `RadioButtonSize` | "default" | Visual size of the radio button icon.                                                                                   |
| `focusableWhenDisabled` | `boolean`         | —         | When `true` and `disabled` is also `true`, the radio button remains keyboard-focusable. `onChange` is still suppressed. |

## Rules

-   Always wrap a group in `role="radiogroup"` with a visible group label (`aria-labelledby`).
-   Always set the same `name` on all buttons in a group for native radio behaviour.
-   Always pair each button with a visible label — wrap in `<label>` or use `aria-label`.
-   Never render a single `RadioButton` in isolation — radio inputs only make sense in groups.

## Anti-patterns

-   Do not use `RadioButton` for binary yes/no questions in forms — use `Toggle` with `type="yes"` / `type="no"`.
-   Do not use `RadioButton` when multiple selections are allowed — use `Checkbox` instead.
-   Do not omit the `name` prop — without it, browsers cannot enforce mutual exclusivity natively.
