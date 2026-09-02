# SmartAppBanner

Import: `import { SmartAppBanner } from "@lifesg/react-design-system/smart-app-banner"`

## SmartAppBannerContentProps

| Prop                 | Type     | Default | Description                                                                    |
| -------------------- | -------- | ------- | ------------------------------------------------------------------------------ |
| `title` \*           | `string` | —       | Display title                                                                  |
| `buttonLabel` \*     | `string` | —       | Button text                                                                    |
| `buttonAriaLabel` \* | `string` | —       | Aria label for the button                                                      |
| `numberOfStars` \*   | `number` | —       | Stars to display; decimals accepted; `NaN` or negative hides the stars display |
| `message`            | `string` | —       | Description below the title                                                    |

## Props — `SmartAppBannerProps`

| Prop           | Type                         | Default                                                                    | Description                                                                   |
| -------------- | ---------------------------- | -------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `show` \*      | `boolean`                    | —                                                                          | Controls whether the banner is visible.                                       |
| `href` \*      | `string`                     | —                                                                          | Destination URL opened in a new tab when the banner or CTA button is clicked. |
| `content` \*   | `SmartAppBannerContentProps` | —                                                                          | Text, labels, and rating content rendered inside the banner.                  |
| `offset`       | `number`                     | 0                                                                          | Top offset in pixels applied to the banner's position.                        |
| `icon`         | `string`                     | "https://assets.life.gov.sg/react-design-system/img/app-icon/app-icon.png" | URL of the app icon image displayed in the banner.                            |
| `animated`     | `boolean`                    | false                                                                      | Applies a slide-in entrance animation to the banner.                          |
| `className`    | `string`                     | —                                                                          | —                                                                             |
| `onDismiss` \* | `() => void`                 | —                                                                          | Called when the user clicks the dismiss button.                               |
| `onClick`      | `(() => void)`               | —                                                                          | Called when the user clicks on the banner or the CTA button.                  |

## Props — `SmartAppBannerContentProps`

| Prop               | Type     | Default | Description                                                                    |
| ------------------ | -------- | ------- | ------------------------------------------------------------------------------ |
| `title` \*         | `string` | —       | Primary heading text, typically the app name.                                  |
| `buttonLabel` \*   | `string` | —       | Label text for the CTA button.                                                 |
| `iconAriaLabel`    | `string` | ""      | Alt text for the app icon image.                                               |
| `buttonAriaLabel`  | `string` | —       | Accessible label for the CTA button. Falls back to `buttonLabel` when omitted. |
| `message`          | `string` | —       | Secondary description text displayed beneath the title.                        |
| `numberOfStars` \* | `number` | —       | App store rating rendered as up to 5 star icons.                               |

## Props — `SmartAppBannerProps`

| Prop           | Type                         | Default                                                                    | Description                                                                   |
| -------------- | ---------------------------- | -------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `show` \*      | `boolean`                    | —                                                                          | Controls whether the banner is visible.                                       |
| `href` \*      | `string`                     | —                                                                          | Destination URL opened in a new tab when the banner or CTA button is clicked. |
| `content` \*   | `SmartAppBannerContentProps` | —                                                                          | Text, labels, and rating content rendered inside the banner.                  |
| `offset`       | `number`                     | 0                                                                          | Top offset in pixels applied to the banner's position.                        |
| `icon`         | `string`                     | "https://assets.life.gov.sg/react-design-system/img/app-icon/app-icon.png" | URL of the app icon image displayed in the banner.                            |
| `animated`     | `boolean`                    | false                                                                      | Applies a slide-in entrance animation to the banner.                          |
| `className`    | `string`                     | —                                                                          | —                                                                             |
| `onDismiss` \* | `() => void`                 | —                                                                          | Called when the user clicks the dismiss button.                               |
| `onClick`      | `(() => void)`               | —                                                                          | Called when the user clicks on the banner or the CTA button.                  |

## Props — `SmartAppBannerContentProps`

| Prop               | Type     | Default | Description                                                                    |
| ------------------ | -------- | ------- | ------------------------------------------------------------------------------ |
| `title` \*         | `string` | —       | Primary heading text, typically the app name.                                  |
| `buttonLabel` \*   | `string` | —       | Label text for the CTA button.                                                 |
| `iconAriaLabel`    | `string` | ""      | Alt text for the app icon image.                                               |
| `buttonAriaLabel`  | `string` | —       | Accessible label for the CTA button. Falls back to `buttonLabel` when omitted. |
| `message`          | `string` | —       | Secondary description text displayed beneath the title.                        |
| `numberOfStars` \* | `number` | —       | App store rating rendered as up to 5 star icons.                               |

## Props — `SmartAppBannerProps`

| Prop           | Type                         | Default                                                                    | Description                                                                   |
| -------------- | ---------------------------- | -------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `show` \*      | `boolean`                    | —                                                                          | Controls whether the banner is visible.                                       |
| `href` \*      | `string`                     | —                                                                          | Destination URL opened in a new tab when the banner or CTA button is clicked. |
| `content` \*   | `SmartAppBannerContentProps` | —                                                                          | Text, labels, and rating content rendered inside the banner.                  |
| `offset`       | `number`                     | 0                                                                          | Top offset in pixels applied to the banner's position.                        |
| `icon`         | `string`                     | "https://assets.life.gov.sg/react-design-system/img/app-icon/app-icon.png" | URL of the app icon image displayed in the banner.                            |
| `animated`     | `boolean`                    | false                                                                      | Applies a slide-in entrance animation to the banner.                          |
| `className`    | `string`                     | —                                                                          | —                                                                             |
| `onDismiss` \* | `() => void`                 | —                                                                          | Called when the user clicks the dismiss button.                               |
| `onClick`      | `(() => void)`               | —                                                                          | Called when the user clicks on the banner or the CTA button.                  |

## Props — `SmartAppBannerContentProps`

| Prop               | Type     | Default | Description                                                                    |
| ------------------ | -------- | ------- | ------------------------------------------------------------------------------ |
| `title` \*         | `string` | —       | Primary heading text, typically the app name.                                  |
| `buttonLabel` \*   | `string` | —       | Label text for the CTA button.                                                 |
| `iconAriaLabel`    | `string` | ""      | Alt text for the app icon image.                                               |
| `buttonAriaLabel`  | `string` | —       | Accessible label for the CTA button. Falls back to `buttonLabel` when omitted. |
| `message`          | `string` | —       | Secondary description text displayed beneath the title.                        |
| `numberOfStars` \* | `number` | —       | App store rating rendered as up to 5 star icons.                               |

## Props — `SmartAppBannerProps`

| Prop           | Type                         | Default                                                                    | Description                                                                   |
| -------------- | ---------------------------- | -------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `show` \*      | `boolean`                    | —                                                                          | Controls whether the banner is visible.                                       |
| `href` \*      | `string`                     | —                                                                          | Destination URL opened in a new tab when the banner or CTA button is clicked. |
| `content` \*   | `SmartAppBannerContentProps` | —                                                                          | Text, labels, and rating content rendered inside the banner.                  |
| `offset`       | `number`                     | 0                                                                          | Top offset in pixels applied to the banner's position.                        |
| `icon`         | `string`                     | "https://assets.life.gov.sg/react-design-system/img/app-icon/app-icon.png" | URL of the app icon image displayed in the banner.                            |
| `animated`     | `boolean`                    | false                                                                      | Applies a slide-in entrance animation to the banner.                          |
| `className`    | `string`                     | —                                                                          | —                                                                             |
| `onDismiss` \* | `() => void`                 | —                                                                          | Called when the user clicks the dismiss button.                               |
| `onClick`      | `(() => void)`               | —                                                                          | Called when the user clicks on the banner or the CTA button.                  |

## Props — `SmartAppBannerContentProps`

| Prop               | Type     | Default | Description                                                                    |
| ------------------ | -------- | ------- | ------------------------------------------------------------------------------ |
| `title` \*         | `string` | —       | Primary heading text, typically the app name.                                  |
| `buttonLabel` \*   | `string` | —       | Label text for the CTA button.                                                 |
| `iconAriaLabel`    | `string` | ""      | Alt text for the app icon image.                                               |
| `buttonAriaLabel`  | `string` | —       | Accessible label for the CTA button. Falls back to `buttonLabel` when omitted. |
| `message`          | `string` | —       | Secondary description text displayed beneath the title.                        |
| `numberOfStars` \* | `number` | —       | App store rating rendered as up to 5 star icons.                               |

## Props — `SmartAppBannerProps`

| Prop           | Type                         | Default                                                                    | Description                                                                   |
| -------------- | ---------------------------- | -------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `show` \*      | `boolean`                    | —                                                                          | Controls whether the banner is visible.                                       |
| `href` \*      | `string`                     | —                                                                          | Destination URL opened in a new tab when the banner or CTA button is clicked. |
| `content` \*   | `SmartAppBannerContentProps` | —                                                                          | Text, labels, and rating content rendered inside the banner.                  |
| `offset`       | `number`                     | 0                                                                          | Top offset in pixels applied to the banner's position.                        |
| `icon`         | `string`                     | "https://assets.life.gov.sg/react-design-system/img/app-icon/app-icon.png" | URL of the app icon image displayed in the banner.                            |
| `animated`     | `boolean`                    | false                                                                      | Applies a slide-in entrance animation to the banner.                          |
| `className`    | `string`                     | —                                                                          | —                                                                             |
| `onDismiss` \* | `() => void`                 | —                                                                          | Called when the user clicks the dismiss button.                               |
| `onClick`      | `(() => void)`               | —                                                                          | Called when the user clicks on the banner or the CTA button.                  |

## Props — `SmartAppBannerContentProps`

| Prop               | Type     | Default | Description                                                                    |
| ------------------ | -------- | ------- | ------------------------------------------------------------------------------ |
| `title` \*         | `string` | —       | Primary heading text, typically the app name.                                  |
| `buttonLabel` \*   | `string` | —       | Label text for the CTA button.                                                 |
| `iconAriaLabel`    | `string` | ""      | Alt text for the app icon image.                                               |
| `buttonAriaLabel`  | `string` | —       | Accessible label for the CTA button. Falls back to `buttonLabel` when omitted. |
| `message`          | `string` | —       | Secondary description text displayed beneath the title.                        |
| `numberOfStars` \* | `number` | —       | App store rating rendered as up to 5 star icons.                               |

## Props — `SmartAppBannerProps`

| Prop           | Type                         | Default                                                                    | Description                                                                   |
| -------------- | ---------------------------- | -------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `show` \*      | `boolean`                    | —                                                                          | Controls whether the banner is visible.                                       |
| `href` \*      | `string`                     | —                                                                          | Destination URL opened in a new tab when the banner or CTA button is clicked. |
| `content` \*   | `SmartAppBannerContentProps` | —                                                                          | Text, labels, and rating content rendered inside the banner.                  |
| `offset`       | `number`                     | 0                                                                          | Top offset in pixels applied to the banner's position.                        |
| `icon`         | `string`                     | "https://assets.life.gov.sg/react-design-system/img/app-icon/app-icon.png" | URL of the app icon image displayed in the banner.                            |
| `animated`     | `boolean`                    | false                                                                      | Applies a slide-in entrance animation to the banner.                          |
| `className`    | `string`                     | —                                                                          | —                                                                             |
| `onDismiss` \* | `() => void`                 | —                                                                          | Called when the user clicks the dismiss button.                               |
| `onClick`      | `(() => void)`               | —                                                                          | Called when the user clicks on the banner or the CTA button.                  |

## Props — `SmartAppBannerContentProps`

| Prop               | Type     | Default | Description                                                                    |
| ------------------ | -------- | ------- | ------------------------------------------------------------------------------ |
| `title` \*         | `string` | —       | Primary heading text, typically the app name.                                  |
| `buttonLabel` \*   | `string` | —       | Label text for the CTA button.                                                 |
| `iconAriaLabel`    | `string` | ""      | Alt text for the app icon image.                                               |
| `buttonAriaLabel`  | `string` | —       | Accessible label for the CTA button. Falls back to `buttonLabel` when omitted. |
| `message`          | `string` | —       | Secondary description text displayed beneath the title.                        |
| `numberOfStars` \* | `number` | —       | App store rating rendered as up to 5 star icons.                               |
