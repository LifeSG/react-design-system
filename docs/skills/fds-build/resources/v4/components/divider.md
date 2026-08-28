# Divider

Import: `import { Divider } from "@lifesg/react-design-system/divider"`

## Props

Inherits all props from `HTMLElement`.

| Prop          | Type                                           | Default   | Description                                                   |
| ------------- | ---------------------------------------------- | --------- | ------------------------------------------------------------- |
| `thickness`   | `number`                                       | `1`       | Height of the Divider in px                                   |
| `lineStyle`   | `"solid" \| "dashed"`                          | `"solid"` | Style of the divider line                                     |
| `layoutType`  | `"flex" \| "grid"`                             | `"flex"`  | Layout type context                                           |
| `color`       | `string \| (props: ThemeStyleProps) => string` | —         | Color of the divider line                                     |
| `mobileCols`  | `number \| number[]`                           | `4`       | Column span on mobile; only applies with `layoutType="grid"`  |
| `tabletCols`  | `number \| number[]`                           | `8`       | Column span on tablet; only applies with `layoutType="grid"`  |
| `desktopCols` | `number \| number[]`                           | `12`      | Column span on desktop; only applies with `layoutType="grid"` |

## Rules

-   `mobileCols`, `tabletCols`, `desktopCols` follow the same semantics as `Layout.ColDiv` — see ColDiv docs for details.
