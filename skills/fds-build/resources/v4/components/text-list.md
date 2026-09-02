# TextList

Import: `import { TextList } from "@lifesg/react-design-system/text-list"`

## When to use

Use for semantic list content. For navigation links, use `LinkList` instead.

## Sub-components

| Sub-component | Renders | When to use                                  |
| ------------- | ------- | -------------------------------------------- |
| `TextList.Ul` | `<ul>`  | Unordered list — items without a sequence    |
| `TextList.Ol` | `<ol>`  | Ordered list — numbered or lettered sequence |

## Props — `OrderedListProps`

| Prop               | Type                           | Default   | Description                                                             |
| ------------------ | ------------------------------ | --------- | ----------------------------------------------------------------------- |
| `counterType`      | `CounterType`                  | "decimal" | Counter style applied to each list item.                                |
| `counterSeparator` | `string`                       | ")"       | Character or string rendered after each counter value.                  |
| `reversed`         | `boolean`                      | —         | The counter is decremented from the start value instead of incremented. |
| `start`            | `number`                       | —         | The value to start the list count from.                                 |
| `children` \*      | `JSX.Element \| JSX.Element[]` | —         | —                                                                       |
| `bottomMargin`     | `number`                       | —         | Bottom margin in pixels applied to each list item except the last.      |
| `size`             | `TextListSize`                 | —         | Text size applied to the list content.                                  |
| `id`               | `string`                       | —         | —                                                                       |
| `className`        | `string`                       | —         | —                                                                       |

## Props — `UnorderedListProps`

| Prop           | Type                             | Default | Description                                                                                                                                                      |
| -------------- | -------------------------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `bulletType`   | `BulletType \| CustomBulletIcon` | "disc"  | Marker style for list items. Pass a `BulletType` token for a predefined marker, or any React node to render a custom decorative icon before each item's content. |
| `children` \*  | `JSX.Element \| JSX.Element[]`   | —       | —                                                                                                                                                                |
| `bottomMargin` | `number`                         | —       | Bottom margin in pixels applied to each list item except the last.                                                                                               |
| `size`         | `TextListSize`                   | —       | Text size applied to the list content.                                                                                                                           |
| `id`           | `string`                         | —       | —                                                                                                                                                                |
| `className`    | `string`                         | —       | —                                                                                                                                                                |

## Props — `OrderedListProps`

| Prop               | Type                           | Default   | Description                                                             |
| ------------------ | ------------------------------ | --------- | ----------------------------------------------------------------------- |
| `counterType`      | `CounterType`                  | "decimal" | Counter style applied to each list item.                                |
| `counterSeparator` | `string`                       | ")"       | Character or string rendered after each counter value.                  |
| `reversed`         | `boolean`                      | —         | The counter is decremented from the start value instead of incremented. |
| `start`            | `number`                       | —         | The value to start the list count from.                                 |
| `children` \*      | `JSX.Element \| JSX.Element[]` | —         | —                                                                       |
| `bottomMargin`     | `number`                       | —         | Bottom margin in pixels applied to each list item except the last.      |
| `size`             | `TextListSize`                 | —         | Text size applied to the list content.                                  |
| `id`               | `string`                       | —         | —                                                                       |
| `className`        | `string`                       | —         | —                                                                       |

## Props — `UnorderedListProps`

| Prop           | Type                             | Default | Description                                                                                                                                                      |
| -------------- | -------------------------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `bulletType`   | `BulletType \| CustomBulletIcon` | "disc"  | Marker style for list items. Pass a `BulletType` token for a predefined marker, or any React node to render a custom decorative icon before each item's content. |
| `children` \*  | `JSX.Element \| JSX.Element[]`   | —       | —                                                                                                                                                                |
| `bottomMargin` | `number`                         | —       | Bottom margin in pixels applied to each list item except the last.                                                                                               |
| `size`         | `TextListSize`                   | —       | Text size applied to the list content.                                                                                                                           |
| `id`           | `string`                         | —       | —                                                                                                                                                                |
| `className`    | `string`                         | —       | —                                                                                                                                                                |

## Props — `OrderedListProps`

| Prop               | Type                           | Default   | Description                                                             |
| ------------------ | ------------------------------ | --------- | ----------------------------------------------------------------------- |
| `counterType`      | `CounterType`                  | "decimal" | Counter style applied to each list item.                                |
| `counterSeparator` | `string`                       | ")"       | Character or string rendered after each counter value.                  |
| `reversed`         | `boolean`                      | —         | The counter is decremented from the start value instead of incremented. |
| `start`            | `number`                       | —         | The value to start the list count from.                                 |
| `children` \*      | `JSX.Element \| JSX.Element[]` | —         | —                                                                       |
| `bottomMargin`     | `number`                       | —         | Bottom margin in pixels applied to each list item except the last.      |
| `size`             | `TextListSize`                 | —         | Text size applied to the list content.                                  |
| `id`               | `string`                       | —         | —                                                                       |
| `className`        | `string`                       | —         | —                                                                       |

## Props — `UnorderedListProps`

| Prop           | Type                             | Default | Description                                                                                                                                                      |
| -------------- | -------------------------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `bulletType`   | `BulletType \| CustomBulletIcon` | "disc"  | Marker style for list items. Pass a `BulletType` token for a predefined marker, or any React node to render a custom decorative icon before each item's content. |
| `children` \*  | `JSX.Element \| JSX.Element[]`   | —       | —                                                                                                                                                                |
| `bottomMargin` | `number`                         | —       | Bottom margin in pixels applied to each list item except the last.                                                                                               |
| `size`         | `TextListSize`                   | —       | Text size applied to the list content.                                                                                                                           |
| `id`           | `string`                         | —       | —                                                                                                                                                                |
| `className`    | `string`                         | —       | —                                                                                                                                                                |

## Props — `OrderedListProps`

| Prop               | Type                           | Default   | Description                                                             |
| ------------------ | ------------------------------ | --------- | ----------------------------------------------------------------------- |
| `counterType`      | `CounterType`                  | "decimal" | Counter style applied to each list item.                                |
| `counterSeparator` | `string`                       | ")"       | Character or string rendered after each counter value.                  |
| `reversed`         | `boolean`                      | —         | The counter is decremented from the start value instead of incremented. |
| `start`            | `number`                       | —         | The value to start the list count from.                                 |
| `children` \*      | `JSX.Element \| JSX.Element[]` | —         | —                                                                       |
| `bottomMargin`     | `number`                       | —         | Bottom margin in pixels applied to each list item except the last.      |
| `size`             | `TextListSize`                 | —         | Text size applied to the list content.                                  |
| `id`               | `string`                       | —         | —                                                                       |
| `className`        | `string`                       | —         | —                                                                       |

## Props — `UnorderedListProps`

| Prop           | Type                             | Default | Description                                                                                                                                                      |
| -------------- | -------------------------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `bulletType`   | `BulletType \| CustomBulletIcon` | "disc"  | Marker style for list items. Pass a `BulletType` token for a predefined marker, or any React node to render a custom decorative icon before each item's content. |
| `children` \*  | `JSX.Element \| JSX.Element[]`   | —       | —                                                                                                                                                                |
| `bottomMargin` | `number`                         | —       | Bottom margin in pixels applied to each list item except the last.                                                                                               |
| `size`         | `TextListSize`                   | —       | Text size applied to the list content.                                                                                                                           |
| `id`           | `string`                         | —       | —                                                                                                                                                                |
| `className`    | `string`                         | —       | —                                                                                                                                                                |

## Props — `OrderedListProps`

| Prop               | Type                           | Default   | Description                                                             |
| ------------------ | ------------------------------ | --------- | ----------------------------------------------------------------------- |
| `counterType`      | `CounterType`                  | "decimal" | Counter style applied to each list item.                                |
| `counterSeparator` | `string`                       | ")"       | Character or string rendered after each counter value.                  |
| `reversed`         | `boolean`                      | —         | The counter is decremented from the start value instead of incremented. |
| `start`            | `number`                       | —         | The value to start the list count from.                                 |
| `children` \*      | `JSX.Element \| JSX.Element[]` | —         | —                                                                       |
| `bottomMargin`     | `number`                       | —         | Bottom margin in pixels applied to each list item except the last.      |
| `size`             | `TextListSize`                 | —         | Text size applied to the list content.                                  |
| `id`               | `string`                       | —         | —                                                                       |
| `className`        | `string`                       | —         | —                                                                       |

## Props — `UnorderedListProps`

| Prop           | Type                             | Default | Description                                                                                                                                                      |
| -------------- | -------------------------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `bulletType`   | `BulletType \| CustomBulletIcon` | "disc"  | Marker style for list items. Pass a `BulletType` token for a predefined marker, or any React node to render a custom decorative icon before each item's content. |
| `children` \*  | `JSX.Element \| JSX.Element[]`   | —       | —                                                                                                                                                                |
| `bottomMargin` | `number`                         | —       | Bottom margin in pixels applied to each list item except the last.                                                                                               |
| `size`         | `TextListSize`                   | —       | Text size applied to the list content.                                                                                                                           |
| `id`           | `string`                         | —       | —                                                                                                                                                                |
| `className`    | `string`                         | —       | —                                                                                                                                                                |

## Props — `OrderedListProps`

| Prop               | Type                           | Default   | Description                                                             |
| ------------------ | ------------------------------ | --------- | ----------------------------------------------------------------------- |
| `counterType`      | `CounterType`                  | "decimal" | Counter style applied to each list item.                                |
| `counterSeparator` | `string`                       | ")"       | Character or string rendered after each counter value.                  |
| `reversed`         | `boolean`                      | —         | The counter is decremented from the start value instead of incremented. |
| `start`            | `number`                       | —         | The value to start the list count from.                                 |
| `children` \*      | `JSX.Element \| JSX.Element[]` | —         | —                                                                       |
| `bottomMargin`     | `number`                       | —         | Bottom margin in pixels applied to each list item except the last.      |
| `size`             | `TextListSize`                 | —         | Text size applied to the list content.                                  |
| `id`               | `string`                       | —         | —                                                                       |
| `className`        | `string`                       | —         | —                                                                       |

## Props — `UnorderedListProps`

| Prop           | Type                             | Default | Description                                                                                                                                                      |
| -------------- | -------------------------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `bulletType`   | `BulletType \| CustomBulletIcon` | "disc"  | Marker style for list items. Pass a `BulletType` token for a predefined marker, or any React node to render a custom decorative icon before each item's content. |
| `children` \*  | `JSX.Element \| JSX.Element[]`   | —       | —                                                                                                                                                                |
| `bottomMargin` | `number`                         | —       | Bottom margin in pixels applied to each list item except the last.                                                                                               |
| `size`         | `TextListSize`                   | —       | Text size applied to the list content.                                                                                                                           |
| `id`           | `string`                         | —       | —                                                                                                                                                                |
| `className`    | `string`                         | —       | —                                                                                                                                                                |

## Rules

-   Children must be `<li>` elements.
-   Use `bulletType` as a `ReactNode` to render a custom icon bullet — the icon is automatically marked `aria-hidden`.
