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

| Prop                    | Type                 | Default   | Description                                                                                                                                                                                                                                       |
| ----------------------- | -------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `styleType`             | `ButtonStyleType`    | "default" | Visual style variant of the button.                                                                                                                                                                                                               |
| `sizeType`              | `ButtonSizeType`     | "default" | Controls the button's size.                                                                                                                                                                                                                       |
| `danger`                | `boolean`            | false     | Applies a red color scheme for destructive actions.                                                                                                                                                                                               |
| `loading`               | `boolean`            | false     | Displays a loading spinner and sets `aria-busy` on the button. The spinner replaces the icon (if present); children continue to render.                                                                                                           |
| `focusableWhenDisabled` | `boolean`            | false     | Keeps the button keyboard-focusable when disabled. When true, the HTML `disabled` attribute is not set, but `aria-disabled` remains true and the click handler is suppressed.                                                                     |
| `icon`                  | `JSX.Element`        | —         | Icon element rendered inside the button. The icon receives `aria-hidden` automatically. When provided without children, the button renders in icon-only mode (square layout) — provide `aria-label` on the button for accessibility in that case. |
| `iconPosition`          | `ButtonIconPosition` | "left"    | Position of the icon relative to the button label.                                                                                                                                                                                                |

## Props

| Prop                    | Type                 | Default   | Description                                                                                                                                                                                                                                       |
| ----------------------- | -------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `styleType`             | `ButtonStyleType`    | "default" | Visual style variant of the button.                                                                                                                                                                                                               |
| `sizeType`              | `ButtonSizeType`     | "default" | Controls the button's size.                                                                                                                                                                                                                       |
| `danger`                | `boolean`            | false     | Applies a red color scheme for destructive actions.                                                                                                                                                                                               |
| `loading`               | `boolean`            | false     | Displays a loading spinner and sets `aria-busy` on the button. The spinner replaces the icon (if present); children continue to render.                                                                                                           |
| `focusableWhenDisabled` | `boolean`            | false     | Keeps the button keyboard-focusable when disabled. When true, the HTML `disabled` attribute is not set, but `aria-disabled` remains true and the click handler is suppressed.                                                                     |
| `icon`                  | `JSX.Element`        | —         | Icon element rendered inside the button. The icon receives `aria-hidden` automatically. When provided without children, the button renders in icon-only mode (square layout) — provide `aria-label` on the button for accessibility in that case. |
| `iconPosition`          | `ButtonIconPosition` | "left"    | Position of the icon relative to the button label.                                                                                                                                                                                                |

## Props

| Prop                    | Type                 | Default   | Description                                                                                                                                                                                                                                       |
| ----------------------- | -------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `styleType`             | `ButtonStyleType`    | "default" | Visual style variant of the button.                                                                                                                                                                                                               |
| `sizeType`              | `ButtonSizeType`     | "default" | Controls the button's size.                                                                                                                                                                                                                       |
| `danger`                | `boolean`            | false     | Applies a red color scheme for destructive actions.                                                                                                                                                                                               |
| `loading`               | `boolean`            | false     | Displays a loading spinner and sets `aria-busy` on the button. The spinner replaces the icon (if present); children continue to render.                                                                                                           |
| `focusableWhenDisabled` | `boolean`            | false     | Keeps the button keyboard-focusable when disabled. When true, the HTML `disabled` attribute is not set, but `aria-disabled` remains true and the click handler is suppressed.                                                                     |
| `icon`                  | `JSX.Element`        | —         | Icon element rendered inside the button. The icon receives `aria-hidden` automatically. When provided without children, the button renders in icon-only mode (square layout) — provide `aria-label` on the button for accessibility in that case. |
| `iconPosition`          | `ButtonIconPosition` | "left"    | Position of the icon relative to the button label.                                                                                                                                                                                                |

## Props

| Prop                    | Type                 | Default   | Description                                                                                                                                                                                                                                       |
| ----------------------- | -------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `styleType`             | `ButtonStyleType`    | "default" | Visual style variant of the button.                                                                                                                                                                                                               |
| `sizeType`              | `ButtonSizeType`     | "default" | Controls the button's size.                                                                                                                                                                                                                       |
| `danger`                | `boolean`            | false     | Applies a red color scheme for destructive actions.                                                                                                                                                                                               |
| `loading`               | `boolean`            | false     | Displays a loading spinner and sets `aria-busy` on the button. The spinner replaces the icon (if present); children continue to render.                                                                                                           |
| `focusableWhenDisabled` | `boolean`            | false     | Keeps the button keyboard-focusable when disabled. When true, the HTML `disabled` attribute is not set, but `aria-disabled` remains true and the click handler is suppressed.                                                                     |
| `icon`                  | `JSX.Element`        | —         | Icon element rendered inside the button. The icon receives `aria-hidden` automatically. When provided without children, the button renders in icon-only mode (square layout) — provide `aria-label` on the button for accessibility in that case. |
| `iconPosition`          | `ButtonIconPosition` | "left"    | Position of the icon relative to the button label.                                                                                                                                                                                                |

## Props

| Prop                    | Type                 | Default   | Description                                                                                                                                                                                                                                       |
| ----------------------- | -------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `styleType`             | `ButtonStyleType`    | "default" | Visual style variant of the button.                                                                                                                                                                                                               |
| `sizeType`              | `ButtonSizeType`     | "default" | Controls the button's size.                                                                                                                                                                                                                       |
| `danger`                | `boolean`            | false     | Applies a red color scheme for destructive actions.                                                                                                                                                                                               |
| `loading`               | `boolean`            | false     | Displays a loading spinner and sets `aria-busy` on the button. The spinner replaces the icon (if present); children continue to render.                                                                                                           |
| `focusableWhenDisabled` | `boolean`            | false     | Keeps the button keyboard-focusable when disabled. When true, the HTML `disabled` attribute is not set, but `aria-disabled` remains true and the click handler is suppressed.                                                                     |
| `icon`                  | `JSX.Element`        | —         | Icon element rendered inside the button. The icon receives `aria-hidden` automatically. When provided without children, the button renders in icon-only mode (square layout) — provide `aria-label` on the button for accessibility in that case. |
| `iconPosition`          | `ButtonIconPosition` | "left"    | Position of the icon relative to the button label.                                                                                                                                                                                                |

## Props

| Prop                    | Type                 | Default   | Description                                                                                                                                                                                                                                       |
| ----------------------- | -------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `styleType`             | `ButtonStyleType`    | "default" | Visual style variant of the button.                                                                                                                                                                                                               |
| `sizeType`              | `ButtonSizeType`     | "default" | Controls the button's size.                                                                                                                                                                                                                       |
| `danger`                | `boolean`            | false     | Applies a red color scheme for destructive actions.                                                                                                                                                                                               |
| `loading`               | `boolean`            | false     | Displays a loading spinner and sets `aria-busy` on the button. The spinner replaces the icon (if present); children continue to render.                                                                                                           |
| `focusableWhenDisabled` | `boolean`            | false     | Keeps the button keyboard-focusable when disabled. When true, the HTML `disabled` attribute is not set, but `aria-disabled` remains true and the click handler is suppressed.                                                                     |
| `icon`                  | `JSX.Element`        | —         | Icon element rendered inside the button. The icon receives `aria-hidden` automatically. When provided without children, the button renders in icon-only mode (square layout) — provide `aria-label` on the button for accessibility in that case. |
| `iconPosition`          | `ButtonIconPosition` | "left"    | Position of the icon relative to the button label.                                                                                                                                                                                                |

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
