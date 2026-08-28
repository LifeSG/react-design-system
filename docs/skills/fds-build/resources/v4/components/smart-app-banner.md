# SmartAppBanner

Import: `import { SmartAppBanner } from "@lifesg/react-design-system/smart-app-banner"`

## Props

| Prop           | Type                         | Default              | Description                                                                     |
| -------------- | ---------------------------- | -------------------- | ------------------------------------------------------------------------------- |
| `show` \*      | `boolean`                    | —                    | Whether the SmartAppBanner is displayed                                         |
| `href` \*      | `string`                     | —                    | Destination URL when the banner is clicked                                      |
| `content` \*   | `SmartAppBannerContentProps` | —                    | Content of the banner                                                           |
| `onDismiss` \* | `() => void`                 | —                    | Called when the banner is dismissed                                             |
| `offset`       | `number`                     | `0`                  | Sets the `top` value in px                                                      |
| `icon`         | `string`                     | Life SG app icon URL | URL for the app icon                                                            |
| `animated`     | `boolean`                    | `false`              | Adds a slide-down animation on appearance                                       |
| `ref`          | `React.Ref<HTMLDivElement>`  | —                    | Ref for the banner element                                                      |
| `onClick`      | `() => void`                 | —                    | Additional behaviour on press (non-dismiss area); default opens link in new tab |

`*` = required

## SmartAppBannerContentProps

| Prop                 | Type     | Default | Description                                                                    |
| -------------------- | -------- | ------- | ------------------------------------------------------------------------------ |
| `title` \*           | `string` | —       | Display title                                                                  |
| `buttonLabel` \*     | `string` | —       | Button text                                                                    |
| `buttonAriaLabel` \* | `string` | —       | Aria label for the button                                                      |
| `numberOfStars` \*   | `number` | —       | Stars to display; decimals accepted; `NaN` or negative hides the stars display |
| `message`            | `string` | —       | Description below the title                                                    |
