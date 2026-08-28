# Toggle

Import: `import { Toggle } from "@lifesg/react-design-system/toggle"`

## When to use

-   Form inputs for boolean choices, single/multi-option selection, and yes/no questions.
-   Preferred over bare `Checkbox` and `RadioButton` when building form inputs that need a card-style visible label container.

## Variants

| `type`       | When to use                                                  |
| ------------ | ------------------------------------------------------------ |
| `"checkbox"` | Multiple options can be selected or deselected independently |
| `"radio"`    | Exactly one option must be selected — cannot be deselected   |
| `"yes"`      | Binary yes answer — use with a paired `type="no"` Toggle     |
| `"no"`       | Binary no answer — use with a paired `type="yes"` Toggle     |

| `styleType`   | When to use                                                  |
| ------------- | ------------------------------------------------------------ |
| `"default"`   | Standard bordered card                                       |
| `"no-border"` | Borderless — for contexts where the border is visually noisy |

| `type`       | Behaviour                            |
| ------------ | ------------------------------------ |
| `"checkbox"` | Allows deselection — standard toggle |
| `"radio"`    | No deselection — radio-style         |
| `"yes"`      | No deselection — tick indicator      |
| `"no"`       | No deselection — cross indicator     |

## Usage

```tsx
import { Toggle } from "@lifesg/react-design-system/toggle";
import { Form } from "@lifesg/react-design-system/form";

{/* Checkbox group */}
<Form.Label>Select your preferences</Form.Label>
<Toggle type="checkbox" indicator checked={emailChecked} onChange={(e) => {}}>
  Email notifications
</Toggle>
<Toggle type="checkbox" indicator checked={smsChecked} onChange={(e) => {}}>
  SMS notifications
</Toggle>
```

## Props

| Prop                    | Type                                                   | Default      | Description                                                              |
| ----------------------- | ------------------------------------------------------ | ------------ | ------------------------------------------------------------------------ |
| `children`              | `string`                                               | —            | Main selector label — **required**                                       |
| `type`                  | `"checkbox" \| "radio" \| "yes" \| "no"`               | `"checkbox"` | Selection behaviour and indicator icon                                   |
| `styleType`             | `"default" \| "no-border"`                             | `"default"`  | Whether a border is displayed                                            |
| `indicator`             | `boolean`                                              | —            | Show the type indicator icon (tick for `"yes"`, cross for `"no"`)        |
| `checked`               | `boolean`                                              | —            | Controlled checked/selected state                                        |
| `subLabel`              | `string \| JSX.Element \| () => JSX.Element`           | —            | Secondary text below the main label                                      |
| `childrenMaxLines`      | `{desktop: number, mobile: number}`                    | —            | Max visible lines in the main label; additional lines are truncated      |
| `disabled`              | `boolean`                                              | —            | Disables the element — non-interactable                                  |
| `focusableWhenDisabled` | `boolean`                                              | —            | Keeps component focusable when disabled, preventing all user interaction |
| `error`                 | `boolean`                                              | —            | Shows error state styling                                                |
| `removable`             | `boolean`                                              | `false`      | Shows a remove button                                                    |
| `onRemove`              | `() => void`                                           | —            | Called when the remove button is clicked                                 |
| `compositeSection`      | `CompositeSectionProps`                                | —            | Collapsible subsection displayed below label and subLabel                |
| `useContentWidth`       | `boolean`                                              | —            | Changes minimum container width to fit content                           |
| `onChange`              | `(event: React.ChangeEvent<HTMLInputElement>) => void` | —            | Called when the Toggle is selected or deselected                         |
| `name`                  | `string`                                               | —            | Name of the element                                                      |
| `id`                    | `string`                                               | —            | Unique identifier of the element                                         |
| `className`             | `string`                                               | —            | Class selector of the element                                            |
| `data-testid`           | `string`                                               | —            | Test identifier of the element                                           |

## CompositeSectionProps

| Prop              | Type                      | Default | Description                                                      |
| ----------------- | ------------------------- | ------- | ---------------------------------------------------------------- |
| `children`        | `string \| JSX.Element`   | —       | Contents of the subsection — **required**                        |
| `collapsible`     | `boolean`                 | `true`  | Whether the subsection is collapsible                            |
| `initialExpanded` | `boolean`                 | —       | Initial expanded state — only applies when `collapsible` is true |
| `errors`          | `string[] \| JSX.Element` | —       | Errors shown when the subsection is collapsed                    |

## Rules

-   `children` (main label) is mandatory.
-   `indicator` is recommended when using `type="yes"` or `type="no"` to show the tick/cross icon.
-   Always pass `indicator` for `type="checkbox"`, `type="radio"`, `type="yes"`, and `type="no"` — it shows the relevant icon (tick, dot, tick, cross) inside the toggle.
-   Use `type="radio"` when the option cannot be deselected (e.g. single-select from a list).
-   Use `compositeSection` to reveal dependent fields when a Toggle is selected — do not conditionally render fields outside the Toggle.
-   Use `subLabel` for secondary supporting text — do not embed long descriptions in `children`.
-   Use `childrenMaxLines` to constrain label height in dense list layouts.
-   Place a `Form.Label` above each toggle group to provide the question or field label.

### Spacing

| Layout                    | Gap                                  |
| ------------------------- | ------------------------------------ |
| Stacked (checkbox, radio) | `spacing-8` between each Toggle      |
| Side by side (yes / no)   | `spacing-16` between the two Toggles |

```tsx
{/* Stacked — checkbox or radio */}
<Form.Label>Declaration</Form.Label>
<ToggleWrapper> {/* margin-bottom: spacing-32 — matches Form field built-in */}
  <Toggle indicator checked={a} onChange={...}>Option A</Toggle>
  <div style={{ marginBottom: Spacing["spacing-8"] }} />
  <Toggle indicator checked={b} onChange={...}>Option B</Toggle>
</ToggleWrapper>

{/* Side by side — yes / no */}
<Form.Label>Do you have a disability?</Form.Label>
<YesNoGroup> {/* display: flex; gap: spacing-16 */}
  <Toggle type="yes" indicator checked={val === "yes"} onChange={...}>Yes</Toggle>
  <Toggle type="no"  indicator checked={val === "no"}  onChange={...}>No</Toggle>
</YesNoGroup>
```

## Anti-patterns

-   Do not use bare `Checkbox` or `RadioButton` in forms when a labelled card container is needed — use `Toggle` instead.
-   Do not conditionally render dependent fields outside the Toggle — use `compositeSection`.
-   Do not use `type="yes"` or `type="no"` without pairing both options together in the UI.
-   Do not omit `indicator` for any Toggle type — it is required for all variants.
