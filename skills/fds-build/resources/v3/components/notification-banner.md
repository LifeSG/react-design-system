# NotificationBanner

Import: `import { NotificationBanner } from "@lifesg/react-design-system/notification-banner"`

## When to use

Use for notices that must always be visible to the user — maintenance windows, policy changes, mandatory announcements. Unlike Toast, it does not auto-dismiss. Unlike Alert, it applies to the entire page, not a specific section.

## Sub-components

-   `NotificationBanner.Link` — Inherits `TypographyLinkProps`. Use for links within banner content.

## HOC

```ts
withNotificationBanner(data: NotificationContentAttributes[])
```

### NotificationContentAttributes

| Prop              | Type                                       | Default | Description                                      |
| ----------------- | ------------------------------------------ | ------- | ------------------------------------------------ |
| `type`            | `"text"` \| `"link"`                       | —       | Type of content — required                       |
| `content`         | `string`                                   | —       | Text content — required                          |
| `otherAttributes` | `TypographyLinkProps` \| `TypographyProps` | —       | Additional props passed to the content component |

## Usage

```tsx
import { NotificationBanner } from "@lifesg/react-design-system/notification-banner";

<NotificationBanner dismissible sticky onDismiss={() => {}}>
    Scheduled maintenance on 1 Feb 2026, 2–4 AM.{" "}
    <NotificationBanner.Link href="/status">
        View status
    </NotificationBanner.Link>
</NotificationBanner>;
```

## Props — `NotificationBannerProps`

| Prop                 | Type                                            | Default | Description                                                                                                                                            |
| -------------------- | ----------------------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `children`           | `React.ReactNode`                               | —       | —                                                                                                                                                      |
| `dismissible`        | `boolean`                                       | true    | Whether the dismiss button is rendered. The caller is responsible for dismissing the banner in the callback.                                           |
| `visible`            | `boolean`                                       | true    | Controls the visibility of the banner.                                                                                                                 |
| `sticky`             | `boolean`                                       | true    | Whether the banner sticks to the top of the viewport while the page scrolls.                                                                           |
| `icon`               | `JSX.Element`                                   | —       | An optional icon element rendered at the leading edge of the banner.                                                                                   |
| `onDismiss`          | `(() => void)`                                  | —       | Called when the user activates the dismiss button and `dismissible` is `true`.                                                                         |
| `maxCollapsedHeight` | `number`                                        | —       | Maximum height in pixels for the content area. When the rendered content exceeds this value, the overflow is clipped.                                  |
| `actionButton`       | `React.ButtonHTMLAttributes<HTMLButtonElement>` | —       | An action button rendered inside the content area. When `actionButton.onClick` is provided it stops propagation to the banner's own `onClick` handler. |

## Props — `NotificationBannerWithForwardedRefProps`

| Prop                 | Type                                            | Default | Description                                                                                                                                            |
| -------------------- | ----------------------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `forwardedRef`       | `React.Ref<HTMLDivElement>`                     | —       | —                                                                                                                                                      |
| `children`           | `React.ReactNode`                               | —       | —                                                                                                                                                      |
| `dismissible`        | `boolean`                                       | true    | Whether the dismiss button is rendered. The caller is responsible for dismissing the banner in the callback.                                           |
| `visible`            | `boolean`                                       | true    | Controls the visibility of the banner.                                                                                                                 |
| `sticky`             | `boolean`                                       | true    | Whether the banner sticks to the top of the viewport while the page scrolls.                                                                           |
| `icon`               | `JSX.Element`                                   | —       | An optional icon element rendered at the leading edge of the banner.                                                                                   |
| `onDismiss`          | `(() => void)`                                  | —       | Called when the user activates the dismiss button and `dismissible` is `true`.                                                                         |
| `maxCollapsedHeight` | `number`                                        | —       | Maximum height in pixels for the content area. When the rendered content exceeds this value, the overflow is clipped.                                  |
| `actionButton`       | `React.ButtonHTMLAttributes<HTMLButtonElement>` | —       | An action button rendered inside the content area. When `actionButton.onClick` is provided it stops propagation to the banner's own `onClick` handler. |

## Props — `ContentLinkAttributes`

| Prop             | Type                       | Default     | Description                                                                                                   |
| ---------------- | -------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------- |
| `weight`         | `TypographyWeight`         | "regular"   | Font weight of the link text.                                                                                 |
| `external`       | `boolean`                  | —           | Appends an external-link icon after the link text to signal that the destination is outside the current site. |
| `underlineStyle` | `TypographyUnderlineStyle` | "underline" | Text-decoration style for the link.                                                                           |

## Props — `ContentTextAttributes`

| Prop        | Type               | Default   | Description                                                                                                         |
| ----------- | ------------------ | --------- | ------------------------------------------------------------------------------------------------------------------- |
| `weight`    | `TypographyWeight` | "regular" | Font weight of the rendered text.                                                                                   |
| `inline`    | `boolean`          | —         | Renders the element as an inline `span`. When `true`, the `as` prop is ignored and `maxLines` clamping is disabled. |
| `paragraph` | `boolean`          | —         | Adds a bottom margin to separate the element from following content.                                                |
| `maxLines`  | `number`           | —         | Clamps visible text to the given number of lines, truncating the remainder.                                         |
| `as`        | `T`                | —         | Overrides the rendered HTML element, e.g. `"h2"`.                                                                   |

## Props — `NotificationContentAttributes`

| Prop              | Type                                     | Default | Description                                                      |
| ----------------- | ---------------------------------------- | ------- | ---------------------------------------------------------------- |
| `type` \*         | `ContentType`                            | —       | Determines how `content` is rendered inside the banner.          |
| `content` \*      | `string`                                 | —       | The text string or link label to display.                        |
| `otherAttributes` | `TypographyLinkProps \| TypographyProps` | —       | Additional props forwarded to the rendered text or link element. |

## Props — `NotificationBannerProps`

| Prop                 | Type                                            | Default | Description                                                                                                                                            |
| -------------------- | ----------------------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `children`           | `React.ReactNode`                               | —       | —                                                                                                                                                      |
| `dismissible`        | `boolean`                                       | true    | Whether the dismiss button is rendered. The caller is responsible for dismissing the banner in the callback.                                           |
| `visible`            | `boolean`                                       | true    | Controls the visibility of the banner.                                                                                                                 |
| `sticky`             | `boolean`                                       | true    | Whether the banner sticks to the top of the viewport while the page scrolls.                                                                           |
| `icon`               | `JSX.Element`                                   | —       | An optional icon element rendered at the leading edge of the banner.                                                                                   |
| `onDismiss`          | `(() => void)`                                  | —       | Called when the user activates the dismiss button and `dismissible` is `true`.                                                                         |
| `maxCollapsedHeight` | `number`                                        | —       | Maximum height in pixels for the content area. When the rendered content exceeds this value, the overflow is clipped.                                  |
| `actionButton`       | `React.ButtonHTMLAttributes<HTMLButtonElement>` | —       | An action button rendered inside the content area. When `actionButton.onClick` is provided it stops propagation to the banner's own `onClick` handler. |

## Props — `NotificationBannerWithForwardedRefProps`

| Prop                 | Type                                            | Default | Description                                                                                                                                            |
| -------------------- | ----------------------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `forwardedRef`       | `React.Ref<HTMLDivElement>`                     | —       | —                                                                                                                                                      |
| `children`           | `React.ReactNode`                               | —       | —                                                                                                                                                      |
| `dismissible`        | `boolean`                                       | true    | Whether the dismiss button is rendered. The caller is responsible for dismissing the banner in the callback.                                           |
| `visible`            | `boolean`                                       | true    | Controls the visibility of the banner.                                                                                                                 |
| `sticky`             | `boolean`                                       | true    | Whether the banner sticks to the top of the viewport while the page scrolls.                                                                           |
| `icon`               | `JSX.Element`                                   | —       | An optional icon element rendered at the leading edge of the banner.                                                                                   |
| `onDismiss`          | `(() => void)`                                  | —       | Called when the user activates the dismiss button and `dismissible` is `true`.                                                                         |
| `maxCollapsedHeight` | `number`                                        | —       | Maximum height in pixels for the content area. When the rendered content exceeds this value, the overflow is clipped.                                  |
| `actionButton`       | `React.ButtonHTMLAttributes<HTMLButtonElement>` | —       | An action button rendered inside the content area. When `actionButton.onClick` is provided it stops propagation to the banner's own `onClick` handler. |

## Props — `ContentLinkAttributes`

| Prop             | Type                       | Default     | Description                                                                                                   |
| ---------------- | -------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------- |
| `weight`         | `TypographyWeight`         | "regular"   | Font weight of the link text.                                                                                 |
| `external`       | `boolean`                  | —           | Appends an external-link icon after the link text to signal that the destination is outside the current site. |
| `underlineStyle` | `TypographyUnderlineStyle` | "underline" | Text-decoration style for the link.                                                                           |

## Props — `ContentTextAttributes`

| Prop        | Type               | Default   | Description                                                                                                         |
| ----------- | ------------------ | --------- | ------------------------------------------------------------------------------------------------------------------- |
| `weight`    | `TypographyWeight` | "regular" | Font weight of the rendered text.                                                                                   |
| `inline`    | `boolean`          | —         | Renders the element as an inline `span`. When `true`, the `as` prop is ignored and `maxLines` clamping is disabled. |
| `paragraph` | `boolean`          | —         | Adds a bottom margin to separate the element from following content.                                                |
| `maxLines`  | `number`           | —         | Clamps visible text to the given number of lines, truncating the remainder.                                         |
| `as`        | `T`                | —         | Overrides the rendered HTML element, e.g. `"h2"`.                                                                   |

## Props — `NotificationContentAttributes`

| Prop              | Type                                     | Default | Description                                                      |
| ----------------- | ---------------------------------------- | ------- | ---------------------------------------------------------------- |
| `type` \*         | `ContentType`                            | —       | Determines how `content` is rendered inside the banner.          |
| `content` \*      | `string`                                 | —       | The text string or link label to display.                        |
| `otherAttributes` | `TypographyLinkProps \| TypographyProps` | —       | Additional props forwarded to the rendered text or link element. |

## Props — `NotificationBannerProps`

| Prop                 | Type                                            | Default | Description                                                                                                                                            |
| -------------------- | ----------------------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `children`           | `React.ReactNode`                               | —       | —                                                                                                                                                      |
| `dismissible`        | `boolean`                                       | true    | Whether the dismiss button is rendered. The caller is responsible for dismissing the banner in the callback.                                           |
| `visible`            | `boolean`                                       | true    | Controls the visibility of the banner.                                                                                                                 |
| `sticky`             | `boolean`                                       | true    | Whether the banner sticks to the top of the viewport while the page scrolls.                                                                           |
| `icon`               | `JSX.Element`                                   | —       | An optional icon element rendered at the leading edge of the banner.                                                                                   |
| `onDismiss`          | `(() => void)`                                  | —       | Called when the user activates the dismiss button and `dismissible` is `true`.                                                                         |
| `maxCollapsedHeight` | `number`                                        | —       | Maximum height in pixels for the content area. When the rendered content exceeds this value, the overflow is clipped.                                  |
| `actionButton`       | `React.ButtonHTMLAttributes<HTMLButtonElement>` | —       | An action button rendered inside the content area. When `actionButton.onClick` is provided it stops propagation to the banner's own `onClick` handler. |

## Props — `NotificationBannerWithForwardedRefProps`

| Prop                 | Type                                            | Default | Description                                                                                                                                            |
| -------------------- | ----------------------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `forwardedRef`       | `React.Ref<HTMLDivElement>`                     | —       | —                                                                                                                                                      |
| `children`           | `React.ReactNode`                               | —       | —                                                                                                                                                      |
| `dismissible`        | `boolean`                                       | true    | Whether the dismiss button is rendered. The caller is responsible for dismissing the banner in the callback.                                           |
| `visible`            | `boolean`                                       | true    | Controls the visibility of the banner.                                                                                                                 |
| `sticky`             | `boolean`                                       | true    | Whether the banner sticks to the top of the viewport while the page scrolls.                                                                           |
| `icon`               | `JSX.Element`                                   | —       | An optional icon element rendered at the leading edge of the banner.                                                                                   |
| `onDismiss`          | `(() => void)`                                  | —       | Called when the user activates the dismiss button and `dismissible` is `true`.                                                                         |
| `maxCollapsedHeight` | `number`                                        | —       | Maximum height in pixels for the content area. When the rendered content exceeds this value, the overflow is clipped.                                  |
| `actionButton`       | `React.ButtonHTMLAttributes<HTMLButtonElement>` | —       | An action button rendered inside the content area. When `actionButton.onClick` is provided it stops propagation to the banner's own `onClick` handler. |

## Props — `ContentLinkAttributes`

| Prop             | Type                       | Default     | Description                                                                                                   |
| ---------------- | -------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------- |
| `weight`         | `TypographyWeight`         | "regular"   | Font weight of the link text.                                                                                 |
| `external`       | `boolean`                  | —           | Appends an external-link icon after the link text to signal that the destination is outside the current site. |
| `underlineStyle` | `TypographyUnderlineStyle` | "underline" | Text-decoration style for the link.                                                                           |

## Props — `ContentTextAttributes`

| Prop        | Type               | Default   | Description                                                                                                         |
| ----------- | ------------------ | --------- | ------------------------------------------------------------------------------------------------------------------- |
| `weight`    | `TypographyWeight` | "regular" | Font weight of the rendered text.                                                                                   |
| `inline`    | `boolean`          | —         | Renders the element as an inline `span`. When `true`, the `as` prop is ignored and `maxLines` clamping is disabled. |
| `paragraph` | `boolean`          | —         | Adds a bottom margin to separate the element from following content.                                                |
| `maxLines`  | `number`           | —         | Clamps visible text to the given number of lines, truncating the remainder.                                         |
| `as`        | `T`                | —         | Overrides the rendered HTML element, e.g. `"h2"`.                                                                   |

## Props — `NotificationContentAttributes`

| Prop              | Type                                     | Default | Description                                                      |
| ----------------- | ---------------------------------------- | ------- | ---------------------------------------------------------------- |
| `type` \*         | `ContentType`                            | —       | Determines how `content` is rendered inside the banner.          |
| `content` \*      | `string`                                 | —       | The text string or link label to display.                        |
| `otherAttributes` | `TypographyLinkProps \| TypographyProps` | —       | Additional props forwarded to the rendered text or link element. |

## Props — `NotificationBannerProps`

| Prop                 | Type                                            | Default | Description                                                                                                                                            |
| -------------------- | ----------------------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `children`           | `React.ReactNode`                               | —       | —                                                                                                                                                      |
| `dismissible`        | `boolean`                                       | true    | Whether the dismiss button is rendered. The caller is responsible for dismissing the banner in the callback.                                           |
| `visible`            | `boolean`                                       | true    | Controls the visibility of the banner.                                                                                                                 |
| `sticky`             | `boolean`                                       | true    | Whether the banner sticks to the top of the viewport while the page scrolls.                                                                           |
| `icon`               | `JSX.Element`                                   | —       | An optional icon element rendered at the leading edge of the banner.                                                                                   |
| `onDismiss`          | `(() => void)`                                  | —       | Called when the user activates the dismiss button and `dismissible` is `true`.                                                                         |
| `maxCollapsedHeight` | `number`                                        | —       | Maximum height in pixels for the content area. When the rendered content exceeds this value, the overflow is clipped.                                  |
| `actionButton`       | `React.ButtonHTMLAttributes<HTMLButtonElement>` | —       | An action button rendered inside the content area. When `actionButton.onClick` is provided it stops propagation to the banner's own `onClick` handler. |

## Props — `NotificationBannerWithForwardedRefProps`

| Prop                 | Type                                            | Default | Description                                                                                                                                            |
| -------------------- | ----------------------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `forwardedRef`       | `React.Ref<HTMLDivElement>`                     | —       | —                                                                                                                                                      |
| `children`           | `React.ReactNode`                               | —       | —                                                                                                                                                      |
| `dismissible`        | `boolean`                                       | true    | Whether the dismiss button is rendered. The caller is responsible for dismissing the banner in the callback.                                           |
| `visible`            | `boolean`                                       | true    | Controls the visibility of the banner.                                                                                                                 |
| `sticky`             | `boolean`                                       | true    | Whether the banner sticks to the top of the viewport while the page scrolls.                                                                           |
| `icon`               | `JSX.Element`                                   | —       | An optional icon element rendered at the leading edge of the banner.                                                                                   |
| `onDismiss`          | `(() => void)`                                  | —       | Called when the user activates the dismiss button and `dismissible` is `true`.                                                                         |
| `maxCollapsedHeight` | `number`                                        | —       | Maximum height in pixels for the content area. When the rendered content exceeds this value, the overflow is clipped.                                  |
| `actionButton`       | `React.ButtonHTMLAttributes<HTMLButtonElement>` | —       | An action button rendered inside the content area. When `actionButton.onClick` is provided it stops propagation to the banner's own `onClick` handler. |

## Props — `ContentLinkAttributes`

| Prop             | Type                       | Default     | Description                                                                                                   |
| ---------------- | -------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------- |
| `weight`         | `TypographyWeight`         | "regular"   | Font weight of the link text.                                                                                 |
| `external`       | `boolean`                  | —           | Appends an external-link icon after the link text to signal that the destination is outside the current site. |
| `underlineStyle` | `TypographyUnderlineStyle` | "underline" | Text-decoration style for the link.                                                                           |

## Props — `ContentTextAttributes`

| Prop        | Type               | Default   | Description                                                                                                         |
| ----------- | ------------------ | --------- | ------------------------------------------------------------------------------------------------------------------- |
| `weight`    | `TypographyWeight` | "regular" | Font weight of the rendered text.                                                                                   |
| `inline`    | `boolean`          | —         | Renders the element as an inline `span`. When `true`, the `as` prop is ignored and `maxLines` clamping is disabled. |
| `paragraph` | `boolean`          | —         | Adds a bottom margin to separate the element from following content.                                                |
| `maxLines`  | `number`           | —         | Clamps visible text to the given number of lines, truncating the remainder.                                         |
| `as`        | `T`                | —         | Overrides the rendered HTML element, e.g. `"h2"`.                                                                   |

## Props — `NotificationContentAttributes`

| Prop              | Type                                     | Default | Description                                                      |
| ----------------- | ---------------------------------------- | ------- | ---------------------------------------------------------------- |
| `type` \*         | `ContentType`                            | —       | Determines how `content` is rendered inside the banner.          |
| `content` \*      | `string`                                 | —       | The text string or link label to display.                        |
| `otherAttributes` | `TypographyLinkProps \| TypographyProps` | —       | Additional props forwarded to the rendered text or link element. |

## Props — `NotificationBannerProps`

| Prop                 | Type                                            | Default | Description                                                                                                                                            |
| -------------------- | ----------------------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `children`           | `React.ReactNode`                               | —       | —                                                                                                                                                      |
| `dismissible`        | `boolean`                                       | true    | Whether the dismiss button is rendered. The caller is responsible for dismissing the banner in the callback.                                           |
| `visible`            | `boolean`                                       | true    | Controls the visibility of the banner.                                                                                                                 |
| `sticky`             | `boolean`                                       | true    | Whether the banner sticks to the top of the viewport while the page scrolls.                                                                           |
| `icon`               | `JSX.Element`                                   | —       | An optional icon element rendered at the leading edge of the banner.                                                                                   |
| `onDismiss`          | `(() => void)`                                  | —       | Called when the user activates the dismiss button and `dismissible` is `true`.                                                                         |
| `maxCollapsedHeight` | `number`                                        | —       | Maximum height in pixels for the content area. When the rendered content exceeds this value, the overflow is clipped.                                  |
| `actionButton`       | `React.ButtonHTMLAttributes<HTMLButtonElement>` | —       | An action button rendered inside the content area. When `actionButton.onClick` is provided it stops propagation to the banner's own `onClick` handler. |

## Props — `NotificationBannerWithForwardedRefProps`

| Prop                 | Type                                            | Default | Description                                                                                                                                            |
| -------------------- | ----------------------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `forwardedRef`       | `React.Ref<HTMLDivElement>`                     | —       | —                                                                                                                                                      |
| `children`           | `React.ReactNode`                               | —       | —                                                                                                                                                      |
| `dismissible`        | `boolean`                                       | true    | Whether the dismiss button is rendered. The caller is responsible for dismissing the banner in the callback.                                           |
| `visible`            | `boolean`                                       | true    | Controls the visibility of the banner.                                                                                                                 |
| `sticky`             | `boolean`                                       | true    | Whether the banner sticks to the top of the viewport while the page scrolls.                                                                           |
| `icon`               | `JSX.Element`                                   | —       | An optional icon element rendered at the leading edge of the banner.                                                                                   |
| `onDismiss`          | `(() => void)`                                  | —       | Called when the user activates the dismiss button and `dismissible` is `true`.                                                                         |
| `maxCollapsedHeight` | `number`                                        | —       | Maximum height in pixels for the content area. When the rendered content exceeds this value, the overflow is clipped.                                  |
| `actionButton`       | `React.ButtonHTMLAttributes<HTMLButtonElement>` | —       | An action button rendered inside the content area. When `actionButton.onClick` is provided it stops propagation to the banner's own `onClick` handler. |

## Props — `ContentLinkAttributes`

| Prop             | Type                       | Default     | Description                                                                                                   |
| ---------------- | -------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------- |
| `weight`         | `TypographyWeight`         | "regular"   | Font weight of the link text.                                                                                 |
| `external`       | `boolean`                  | —           | Appends an external-link icon after the link text to signal that the destination is outside the current site. |
| `underlineStyle` | `TypographyUnderlineStyle` | "underline" | Text-decoration style for the link.                                                                           |

## Props — `ContentTextAttributes`

| Prop        | Type               | Default   | Description                                                                                                         |
| ----------- | ------------------ | --------- | ------------------------------------------------------------------------------------------------------------------- |
| `weight`    | `TypographyWeight` | "regular" | Font weight of the rendered text.                                                                                   |
| `inline`    | `boolean`          | —         | Renders the element as an inline `span`. When `true`, the `as` prop is ignored and `maxLines` clamping is disabled. |
| `paragraph` | `boolean`          | —         | Adds a bottom margin to separate the element from following content.                                                |
| `maxLines`  | `number`           | —         | Clamps visible text to the given number of lines, truncating the remainder.                                         |
| `as`        | `T`                | —         | Overrides the rendered HTML element, e.g. `"h2"`.                                                                   |

## Props — `NotificationContentAttributes`

| Prop              | Type                                     | Default | Description                                                      |
| ----------------- | ---------------------------------------- | ------- | ---------------------------------------------------------------- |
| `type` \*         | `ContentType`                            | —       | Determines how `content` is rendered inside the banner.          |
| `content` \*      | `string`                                 | —       | The text string or link label to display.                        |
| `otherAttributes` | `TypographyLinkProps \| TypographyProps` | —       | Additional props forwarded to the rendered text or link element. |

## Props — `NotificationBannerProps`

| Prop                 | Type                                            | Default | Description                                                                                                                                            |
| -------------------- | ----------------------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `children`           | `React.ReactNode`                               | —       | —                                                                                                                                                      |
| `dismissible`        | `boolean`                                       | true    | Whether the dismiss button is rendered. The caller is responsible for dismissing the banner in the callback.                                           |
| `visible`            | `boolean`                                       | true    | Controls the visibility of the banner.                                                                                                                 |
| `sticky`             | `boolean`                                       | true    | Whether the banner sticks to the top of the viewport while the page scrolls.                                                                           |
| `icon`               | `JSX.Element`                                   | —       | An optional icon element rendered at the leading edge of the banner.                                                                                   |
| `onDismiss`          | `(() => void)`                                  | —       | Called when the user activates the dismiss button and `dismissible` is `true`.                                                                         |
| `maxCollapsedHeight` | `number`                                        | —       | Maximum height in pixels for the content area. When the rendered content exceeds this value, the overflow is clipped.                                  |
| `actionButton`       | `React.ButtonHTMLAttributes<HTMLButtonElement>` | —       | An action button rendered inside the content area. When `actionButton.onClick` is provided it stops propagation to the banner's own `onClick` handler. |

## Props — `NotificationBannerWithForwardedRefProps`

| Prop                 | Type                                            | Default | Description                                                                                                                                            |
| -------------------- | ----------------------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `forwardedRef`       | `React.Ref<HTMLDivElement>`                     | —       | —                                                                                                                                                      |
| `children`           | `React.ReactNode`                               | —       | —                                                                                                                                                      |
| `dismissible`        | `boolean`                                       | true    | Whether the dismiss button is rendered. The caller is responsible for dismissing the banner in the callback.                                           |
| `visible`            | `boolean`                                       | true    | Controls the visibility of the banner.                                                                                                                 |
| `sticky`             | `boolean`                                       | true    | Whether the banner sticks to the top of the viewport while the page scrolls.                                                                           |
| `icon`               | `JSX.Element`                                   | —       | An optional icon element rendered at the leading edge of the banner.                                                                                   |
| `onDismiss`          | `(() => void)`                                  | —       | Called when the user activates the dismiss button and `dismissible` is `true`.                                                                         |
| `maxCollapsedHeight` | `number`                                        | —       | Maximum height in pixels for the content area. When the rendered content exceeds this value, the overflow is clipped.                                  |
| `actionButton`       | `React.ButtonHTMLAttributes<HTMLButtonElement>` | —       | An action button rendered inside the content area. When `actionButton.onClick` is provided it stops propagation to the banner's own `onClick` handler. |

## Props — `ContentLinkAttributes`

| Prop             | Type                       | Default     | Description                                                                                                   |
| ---------------- | -------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------- |
| `weight`         | `TypographyWeight`         | "regular"   | Font weight of the link text.                                                                                 |
| `external`       | `boolean`                  | —           | Appends an external-link icon after the link text to signal that the destination is outside the current site. |
| `underlineStyle` | `TypographyUnderlineStyle` | "underline" | Text-decoration style for the link.                                                                           |

## Props — `ContentTextAttributes`

| Prop        | Type               | Default   | Description                                                                                                         |
| ----------- | ------------------ | --------- | ------------------------------------------------------------------------------------------------------------------- |
| `weight`    | `TypographyWeight` | "regular" | Font weight of the rendered text.                                                                                   |
| `inline`    | `boolean`          | —         | Renders the element as an inline `span`. When `true`, the `as` prop is ignored and `maxLines` clamping is disabled. |
| `paragraph` | `boolean`          | —         | Adds a bottom margin to separate the element from following content.                                                |
| `maxLines`  | `number`           | —         | Clamps visible text to the given number of lines, truncating the remainder.                                         |
| `as`        | `T`                | —         | Overrides the rendered HTML element, e.g. `"h2"`.                                                                   |

## Props — `NotificationContentAttributes`

| Prop              | Type                                     | Default | Description                                                      |
| ----------------- | ---------------------------------------- | ------- | ---------------------------------------------------------------- |
| `type` \*         | `ContentType`                            | —       | Determines how `content` is rendered inside the banner.          |
| `content` \*      | `string`                                 | —       | The text string or link label to display.                        |
| `otherAttributes` | `TypographyLinkProps \| TypographyProps` | —       | Additional props forwarded to the rendered text or link element. |

## Rules

-   Place directly below the Navbar — above all page content.
-   Use for page-wide or system-wide notices only — not for section-specific messages.
-   Use `dismissible={false}` for mandatory notices users must not be able to dismiss.
-   Use `NotificationBanner.Link` for all links within the banner — renders with the external link indicator automatically.
-   Use `maxCollapsedHeight` for long notices to avoid overwhelming the layout.
-   Use the `withNotificationBanner` HOC for banner content driven from a backend or external data source.

## Anti-patterns

-   Using NotificationBanner for section-specific messages — use Alert instead.
-   Using raw anchor tags inside banner content — use `NotificationBanner.Link`.
-   Placing the banner below page content — it must sit directly below the Navbar.
