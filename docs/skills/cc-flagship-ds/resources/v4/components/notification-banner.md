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

## Props

| Prop                 | Type                                                | Default | Description                                  |
| -------------------- | --------------------------------------------------- | ------- | -------------------------------------------- |
| `children`           | `string` \| `JSX.Element` \| `JSX.Element[]`        | —       | Banner content                               |
| `dismissible`        | `boolean`                                           | —       | Show dismiss button                          |
| `visible`            | `boolean`                                           | —       | Control visibility externally                |
| `icon`               | `JSX.Element`                                       | —       | Icon displayed in the banner                 |
| `sticky`             | `boolean`                                           | —       | Fix banner to top on scroll                  |
| `onDismiss`          | `() => void`                                        | —       | Called when banner is dismissed              |
| `onClick`            | `(event: React.MouseEvent<HTMLDivElement>) => void` | —       | Called when banner is clicked                |
| `maxCollapsedHeight` | `number`                                            | —       | Maximum visible height of content in px      |
| `actionButton`       | `React.ButtonHTMLAttributes<HTMLButtonElement>`     | —       | Action button at the bottom of the component |

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
