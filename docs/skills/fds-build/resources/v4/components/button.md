# Button

Import: `import { Button } from "@lifesg/react-design-system/button"`

## When to use

```
┌─ "Which button component?"
│
├─ Icon only (no text)?
│  └─ IconButton — aria-label required
│
├─ Text + icon together?
│  └─ ButtonWithIcon — icon left (default) or right for directional actions
│
└─ Text only?
   └─ Button
```

## Size variants

| Usage                                       | When to use                                             |
| ------------------------------------------- | ------------------------------------------------------- |
| `<Button>` or `<Button sizeType="default">` | Standard size — use for all buttons including hero CTAs |
| `<Button sizeType="small">`                 | Dense layouts, toolbars                                 |
| `<Button sizeType="large">`                 | Only when explicitly specified — do not use by default  |

> **Deprecated:** `Button.Default`, `Button.Small`, `Button.Large` sub-components are deprecated in v4. Use `<Button sizeType="...">` instead.

## Variants

| `styleType`   | When to use                           |
| ------------- | ------------------------------------- |
| `"default"`   | Main action on the page               |
| `"secondary"` | Cancel, go back, alternative option   |
| `"light"`     | On colored or dark backgrounds        |
| `"link"`      | Tertiary, de-emphasized inline action |

Add `danger` for destructive actions (delete, remove) — applies to any `styleType`.

## Usage

```tsx
import { Button } from "@lifesg/react-design-system/button";

<Button styleType="default" onClick={() => {}}>
    Save changes
</Button>;
```

## Props

| Prop                    | Type                                                  | Default     | Description                                        |
| ----------------------- | ----------------------------------------------------- | ----------- | -------------------------------------------------- |
| `styleType`             | `"default"` \| `"secondary"` \| `"light"` \| `"link"` | `"default"` | Visual style of the button                         |
| `loading`               | `boolean`                                             | `false`     | Displays a loading spinner                         |
| `danger`                | `boolean`                                             | `false`     | Applies a red color scheme for destructive actions |
| `focusableWhenDisabled` | `boolean`                                             | `false`     | Keeps button focusable when disabled               |

Also inherits all props from `HTMLButtonElement` (e.g. `disabled`, `type`, `onClick`, `children`).

## Rules

-   `styleType` is mandatory.
-   Use sentence case for all labels — "Save changes" not "Save Changes".
-   Use concise verb + noun labels — avoid "OK", "Yes", "Click here".
-   Do not use `sizeType="large"` unless explicitly required — default size is correct for hero CTAs.
-   Combine `loading` and `disabled` during async operations to prevent double-submission.
-   Never use raw `<button>` elements — always use design system button components.
-   Do not nest buttons inside buttons or links.
-   `danger` applies to any `styleType`.

## Anti-patterns

-   Do not use `sizeType="large"` as a default choice — it is a special case only.
-   Do not use `Button.Default`, `Button.Small`, or `Button.Large` — these sub-components are deprecated in v4.
-   Do not use vague labels like "OK" or "Yes" — labels must describe the action.
-   Do not use `loading` alone without also setting `disabled`.
