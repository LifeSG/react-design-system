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

## Sub-components

| Sub-component    | When to use                                             |
| ---------------- | ------------------------------------------------------- |
| `Button.Default` | Standard size — use for all buttons including hero CTAs |
| `Button.Small`   | Dense layouts, toolbars                                 |
| `Button.Large`   | Only when explicitly specified — do not use by default  |

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

<Button.Default styleType="default" onClick={() => {}}>
    Save changes
</Button.Default>;
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
-   Do not use `Button.Large` unless explicitly required — `Button.Default` is correct for hero CTAs.
-   Combine `loading` and `disabled` during async operations to prevent double-submission.
-   Never use raw `<button>` elements — always use design system button components.
-   Do not nest buttons inside buttons or links.
-   `danger` applies to any `styleType`.

## Anti-patterns

-   Do not use `Button.Large` as a default choice — it is a special case only.
-   Do not use vague labels like "OK" or "Yes" — labels must describe the action.
-   Do not use `loading` alone without also setting `disabled`.
