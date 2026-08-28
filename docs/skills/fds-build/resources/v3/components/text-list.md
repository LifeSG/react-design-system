# TextList

Import: `import { TextList } from "@lifesg/react-design-system/text-list"`

## When to use

Use for semantic list content. For navigation links, use `LinkList` instead.

## Sub-components

| Sub-component | Renders | When to use                                  |
| ------------- | ------- | -------------------------------------------- |
| `TextList.Ul` | `<ul>`  | Unordered list — items without a sequence    |
| `TextList.Ol` | `<ol>`  | Ordered list — numbered or lettered sequence |

## Props

### TextList.Ul

| Prop           | Type                                                    | Default  | Description                                                        |
| -------------- | ------------------------------------------------------- | -------- | ------------------------------------------------------------------ |
| `children`     | `JSX.Element \| JSX.Element[]`                          | —        | `<li>` elements                                                    |
| `bulletType`   | `"disc" \| "circle" \| "square" \| "none" \| ReactNode` | `"disc"` | Bullet style — pass a ReactNode (e.g. an icon) for a custom bullet |
| `size`         | `TypographySizeType`                                    | —        | Typography size scale                                              |
| `bottomMargin` | `number`                                                | —        | Bottom margin in px                                                |
| `data-testid`  | `string`                                                | —        | Test identifier                                                    |

### TextList.Ol

| Prop               | Type                                          | Default     | Description                                       |
| ------------------ | --------------------------------------------- | ----------- | ------------------------------------------------- |
| `children`         | `JSX.Element \| JSX.Element[]`                | —           | `<li>` elements                                   |
| `counterType`      | `"decimal" \| "lower-alpha" \| "lower-roman"` | `"decimal"` | Counter style                                     |
| `counterSeparator` | `string`                                      | —           | Character after the counter (e.g. `"."` or `")"`) |
| `reversed`         | `boolean`                                     | `false`     | Count downward                                    |
| `start`            | `number`                                      | `1`         | Starting counter value                            |
| `size`             | `TypographySizeType`                          | —           | Typography size scale                             |
| `bottomMargin`     | `number`                                      | —           | Bottom margin in px                               |
| `data-testid`      | `string`                                      | —           | Test identifier                                   |

## Rules

-   Children must be `<li>` elements.
-   Use `bulletType` as a `ReactNode` to render a custom icon bullet — the icon is automatically marked `aria-hidden`.
