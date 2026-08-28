# Badge

Import: `import { Badge } from "@lifesg/react-design-system/badge"`

## Props

Inherits `HTMLAttributes<HTMLDivElement>`.

| Prop          | Type                                                                                        | Default     | Description                                                     |
| ------------- | ------------------------------------------------------------------------------------------- | ----------- | --------------------------------------------------------------- |
| `variant`     | `"number"` \| `"number-with-border"` \| `"dot"` \| `"dot-with-border"` \| `"square-number"` | `"number"`  | Visual style of the badge                                       |
| `color`       | `"default"` \| `"important"`                                                                | `"default"` | Color tone of the badge                                         |
| `count`       | `number`                                                                                    | —           | Number to display — applies to number-based variants only       |
| `badgeOffset` | `[string, string]`                                                                          | —           | Offset from top-right corner as `[left, top]` CSS length values |
| `children`    | `JSX.Element`                                                                               | —           | Content to wrap — badge is positioned in the top-right corner   |
| `data-testid` | `string`                                                                                    | `"badge"`   | Test identifier                                                 |

## Rules

-   `count` only applies to `"number"`, `"number-with-border"`, and `"square-number"` variants.
-   When `children` is provided, the badge overlays the top-right corner of the child element.
