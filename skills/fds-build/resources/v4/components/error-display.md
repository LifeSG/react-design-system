# ErrorDisplay

Import: `import { ErrorDisplay } from "@lifesg/react-design-system/error-display"`

## When to use

Use for full-page or full-section states where the primary content cannot be shown — HTTP errors, empty results, session states, and system messages. It handles illustration, title, description, and action button as a unit.

Do not build custom error pages with raw Typography + Button — always use `ErrorDisplay` so illustrations and copy stay consistent across products.

## Variants

| `type`                          | When to use                                                      |
| ------------------------------- | ---------------------------------------------------------------- |
| `"no-item-found"`               | Search or filter returned no results                             |
| `"404"`                         | Page not found                                                   |
| `"403"`                         | Access denied / permission error                                 |
| `"500"`                         | Internal server error                                            |
| `"400"`                         | Bad request                                                      |
| `"408"`                         | Request timeout                                                  |
| `"502"`                         | Bad gateway                                                      |
| `"503"`                         | Service unavailable                                              |
| `"504"`                         | Gateway timeout                                                  |
| `"maintenance"`                 | Planned downtime — requires `additionalProps.dateString`         |
| `"inactivity"`                  | Session timeout warning — requires `additionalProps.secondsLeft` |
| `"logout"`                      | User has been logged out                                         |
| `"warning"`                     | General warning state                                            |
| `"confirmation"`                | Action confirmed (e.g. submission complete)                      |
| `"link-error"`                  | Broken or expired link                                           |
| `"insufficient-credits"`        | User lacks credits to proceed                                    |
| `"payment-unsuccessful"`        | Payment failed                                                   |
| `"transfer-unsuccessful"`       | Transfer failed                                                  |
| `"unsupported-browser"`         | Browser not supported                                            |
| `"partially-supported-browser"` | Browser partially supported                                      |

## Usage

```tsx
import { ErrorDisplay } from "@lifesg/react-design-system/error-display";

{
    /* No search results */
}
<ErrorDisplay
    type="no-item-found"
    title="No results found"
    description="Try adjusting your search or filters."
    actionButton={{ children: "Clear filters", onClick: handleClear }}
/>;

{
    /* Page not found */
}
<ErrorDisplay type="404" />;

{
    /* Maintenance with scheduled date */
}
<ErrorDisplay
    type="maintenance"
    additionalProps={{ dateString: "1 Jan 2025, 8:00am to 10:00am" }}
/>;

{
    /* Session inactivity warning */
}
<ErrorDisplay
    type="inactivity"
    additionalProps={{ secondsLeft: 60, reminderInterval: 30 }}
/>;
```

## Props — `MaintenanceAdditionalAttributes`

| Prop            | Type     | Default | Description                                                      |
| --------------- | -------- | ------- | ---------------------------------------------------------------- |
| `dateString` \* | `string` | —       | Date string rendered inside the default maintenance description. |

## Props — `InactivityAdditionalAttributes`

| Prop               | Type     | Default | Description                                                                       |
| ------------------ | -------- | ------- | --------------------------------------------------------------------------------- |
| `secondsLeft` \*   | `number` | —       | Remaining seconds before the session expires, used to render the countdown timer. |
| `reminderInterval` | `number` | —       | Interval (in seconds) for announcing remaining time via screen readers.           |

## Props — `ErrorDisplayAttributes`

| Prop                 | Type                                                                   | Default | Description                                                                                                                                                                         |
| -------------------- | ---------------------------------------------------------------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `img`                | `React.ImgHTMLAttributes<HTMLImageElement>`                            | —       | Overrides the default illustration for the selected `type`.                                                                                                                         |
| `title`              | `string \| JSX.Element`                                                | —       | Overrides the default title for the selected `type`.                                                                                                                                |
| `description`        | `string \| JSX.Element`                                                | —       | Overrides the default description for the selected `type`. When `additionalProps` is also provided for `"maintenance"` or `"inactivity"` types, `additionalProps` takes precedence. |
| `actionButton`       | `ButtonProps`                                                          | —       | Action button rendered below the description. Defaults to a "Proceed" label when `children` is omitted.                                                                             |
| `additionalProps`    | `\| MaintenanceAdditionalAttributes \| InactivityAdditionalAttributes` | —       | Type-specific attributes that inject dynamic content into the default description.                                                                                                  |
| `imageOnly`          | `boolean`                                                              | false   | Renders only the illustration, hiding the title, description, and action button.                                                                                                    |
| `illustrationScheme` | `ThemeType`                                                            | —       | Selects the illustration resource scheme to use.                                                                                                                                    |

## Props — `ErrorDisplayProps`

| Prop                 | Type                                                                   | Default | Description                                                                                                                                                                         |
| -------------------- | ---------------------------------------------------------------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type` \*            | `ErrorDisplayType`                                                     | —       | Determines the default illustration assets and copy to display.                                                                                                                     |
| `img`                | `React.ImgHTMLAttributes<HTMLImageElement>`                            | —       | Overrides the default illustration for the selected `type`.                                                                                                                         |
| `title`              | `string \| JSX.Element`                                                | —       | Overrides the default title for the selected `type`.                                                                                                                                |
| `description`        | `string \| JSX.Element`                                                | —       | Overrides the default description for the selected `type`. When `additionalProps` is also provided for `"maintenance"` or `"inactivity"` types, `additionalProps` takes precedence. |
| `actionButton`       | `ButtonProps`                                                          | —       | Action button rendered below the description. Defaults to a "Proceed" label when `children` is omitted.                                                                             |
| `additionalProps`    | `\| MaintenanceAdditionalAttributes \| InactivityAdditionalAttributes` | —       | Type-specific attributes that inject dynamic content into the default description.                                                                                                  |
| `imageOnly`          | `boolean`                                                              | false   | Renders only the illustration, hiding the title, description, and action button.                                                                                                    |
| `illustrationScheme` | `ThemeType`                                                            | —       | Selects the illustration resource scheme to use.                                                                                                                                    |

## MaintenanceAdditionalAttributes

| Prop            | Type     | Default | Description                            |
| --------------- | -------- | ------- | -------------------------------------- |
| `dateString` \* | `string` | —       | Date display for the maintenance error |

## InactivityAdditionalAttributes

| Prop             | Type     | Default | Description                                          |
| ---------------- | -------- | ------- | ---------------------------------------------------- |
| `secondsLeft` \* | `number` | —       | Time remaining in seconds for the inactivity display |

## Props — `MaintenanceAdditionalAttributes`

| Prop            | Type     | Default | Description                                                      |
| --------------- | -------- | ------- | ---------------------------------------------------------------- |
| `dateString` \* | `string` | —       | Date string rendered inside the default maintenance description. |

## Props — `InactivityAdditionalAttributes`

| Prop               | Type     | Default | Description                                                                       |
| ------------------ | -------- | ------- | --------------------------------------------------------------------------------- |
| `secondsLeft` \*   | `number` | —       | Remaining seconds before the session expires, used to render the countdown timer. |
| `reminderInterval` | `number` | —       | Interval (in seconds) for announcing remaining time via screen readers.           |

## Props — `ErrorDisplayAttributes`

| Prop                 | Type                                                                   | Default | Description                                                                                                                                                                         |
| -------------------- | ---------------------------------------------------------------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `img`                | `React.ImgHTMLAttributes<HTMLImageElement>`                            | —       | Overrides the default illustration for the selected `type`.                                                                                                                         |
| `title`              | `string \| JSX.Element`                                                | —       | Overrides the default title for the selected `type`.                                                                                                                                |
| `description`        | `string \| JSX.Element`                                                | —       | Overrides the default description for the selected `type`. When `additionalProps` is also provided for `"maintenance"` or `"inactivity"` types, `additionalProps` takes precedence. |
| `actionButton`       | `ButtonProps`                                                          | —       | Action button rendered below the description. Defaults to a "Proceed" label when `children` is omitted.                                                                             |
| `additionalProps`    | `\| MaintenanceAdditionalAttributes \| InactivityAdditionalAttributes` | —       | Type-specific attributes that inject dynamic content into the default description.                                                                                                  |
| `imageOnly`          | `boolean`                                                              | false   | Renders only the illustration, hiding the title, description, and action button.                                                                                                    |
| `illustrationScheme` | `ThemeType`                                                            | —       | Selects the illustration resource scheme to use.                                                                                                                                    |

## Props — `ErrorDisplayProps`

| Prop                 | Type                                                                   | Default | Description                                                                                                                                                                         |
| -------------------- | ---------------------------------------------------------------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type` \*            | `ErrorDisplayType`                                                     | —       | Determines the default illustration assets and copy to display.                                                                                                                     |
| `img`                | `React.ImgHTMLAttributes<HTMLImageElement>`                            | —       | Overrides the default illustration for the selected `type`.                                                                                                                         |
| `title`              | `string \| JSX.Element`                                                | —       | Overrides the default title for the selected `type`.                                                                                                                                |
| `description`        | `string \| JSX.Element`                                                | —       | Overrides the default description for the selected `type`. When `additionalProps` is also provided for `"maintenance"` or `"inactivity"` types, `additionalProps` takes precedence. |
| `actionButton`       | `ButtonProps`                                                          | —       | Action button rendered below the description. Defaults to a "Proceed" label when `children` is omitted.                                                                             |
| `additionalProps`    | `\| MaintenanceAdditionalAttributes \| InactivityAdditionalAttributes` | —       | Type-specific attributes that inject dynamic content into the default description.                                                                                                  |
| `imageOnly`          | `boolean`                                                              | false   | Renders only the illustration, hiding the title, description, and action button.                                                                                                    |
| `illustrationScheme` | `ThemeType`                                                            | —       | Selects the illustration resource scheme to use.                                                                                                                                    |

## Props — `MaintenanceAdditionalAttributes`

| Prop            | Type     | Default | Description                                                      |
| --------------- | -------- | ------- | ---------------------------------------------------------------- |
| `dateString` \* | `string` | —       | Date string rendered inside the default maintenance description. |

## Props — `InactivityAdditionalAttributes`

| Prop               | Type     | Default | Description                                                                       |
| ------------------ | -------- | ------- | --------------------------------------------------------------------------------- |
| `secondsLeft` \*   | `number` | —       | Remaining seconds before the session expires, used to render the countdown timer. |
| `reminderInterval` | `number` | —       | Interval (in seconds) for announcing remaining time via screen readers.           |

## Props — `ErrorDisplayAttributes`

| Prop                 | Type                                                                   | Default | Description                                                                                                                                                                         |
| -------------------- | ---------------------------------------------------------------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `img`                | `React.ImgHTMLAttributes<HTMLImageElement>`                            | —       | Overrides the default illustration for the selected `type`.                                                                                                                         |
| `title`              | `string \| JSX.Element`                                                | —       | Overrides the default title for the selected `type`.                                                                                                                                |
| `description`        | `string \| JSX.Element`                                                | —       | Overrides the default description for the selected `type`. When `additionalProps` is also provided for `"maintenance"` or `"inactivity"` types, `additionalProps` takes precedence. |
| `actionButton`       | `ButtonProps`                                                          | —       | Action button rendered below the description. Defaults to a "Proceed" label when `children` is omitted.                                                                             |
| `additionalProps`    | `\| MaintenanceAdditionalAttributes \| InactivityAdditionalAttributes` | —       | Type-specific attributes that inject dynamic content into the default description.                                                                                                  |
| `imageOnly`          | `boolean`                                                              | false   | Renders only the illustration, hiding the title, description, and action button.                                                                                                    |
| `illustrationScheme` | `ThemeType`                                                            | —       | Selects the illustration resource scheme to use.                                                                                                                                    |

## Props — `ErrorDisplayProps`

| Prop                 | Type                                                                   | Default | Description                                                                                                                                                                         |
| -------------------- | ---------------------------------------------------------------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type` \*            | `ErrorDisplayType`                                                     | —       | Determines the default illustration assets and copy to display.                                                                                                                     |
| `img`                | `React.ImgHTMLAttributes<HTMLImageElement>`                            | —       | Overrides the default illustration for the selected `type`.                                                                                                                         |
| `title`              | `string \| JSX.Element`                                                | —       | Overrides the default title for the selected `type`.                                                                                                                                |
| `description`        | `string \| JSX.Element`                                                | —       | Overrides the default description for the selected `type`. When `additionalProps` is also provided for `"maintenance"` or `"inactivity"` types, `additionalProps` takes precedence. |
| `actionButton`       | `ButtonProps`                                                          | —       | Action button rendered below the description. Defaults to a "Proceed" label when `children` is omitted.                                                                             |
| `additionalProps`    | `\| MaintenanceAdditionalAttributes \| InactivityAdditionalAttributes` | —       | Type-specific attributes that inject dynamic content into the default description.                                                                                                  |
| `imageOnly`          | `boolean`                                                              | false   | Renders only the illustration, hiding the title, description, and action button.                                                                                                    |
| `illustrationScheme` | `ThemeType`                                                            | —       | Selects the illustration resource scheme to use.                                                                                                                                    |

## Props — `MaintenanceAdditionalAttributes`

| Prop            | Type     | Default | Description                                                      |
| --------------- | -------- | ------- | ---------------------------------------------------------------- |
| `dateString` \* | `string` | —       | Date string rendered inside the default maintenance description. |

## Props — `InactivityAdditionalAttributes`

| Prop               | Type     | Default | Description                                                                       |
| ------------------ | -------- | ------- | --------------------------------------------------------------------------------- |
| `secondsLeft` \*   | `number` | —       | Remaining seconds before the session expires, used to render the countdown timer. |
| `reminderInterval` | `number` | —       | Interval (in seconds) for announcing remaining time via screen readers.           |

## Props — `ErrorDisplayAttributes`

| Prop                 | Type                                                                   | Default | Description                                                                                                                                                                         |
| -------------------- | ---------------------------------------------------------------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `img`                | `React.ImgHTMLAttributes<HTMLImageElement>`                            | —       | Overrides the default illustration for the selected `type`.                                                                                                                         |
| `title`              | `string \| JSX.Element`                                                | —       | Overrides the default title for the selected `type`.                                                                                                                                |
| `description`        | `string \| JSX.Element`                                                | —       | Overrides the default description for the selected `type`. When `additionalProps` is also provided for `"maintenance"` or `"inactivity"` types, `additionalProps` takes precedence. |
| `actionButton`       | `ButtonProps`                                                          | —       | Action button rendered below the description. Defaults to a "Proceed" label when `children` is omitted.                                                                             |
| `additionalProps`    | `\| MaintenanceAdditionalAttributes \| InactivityAdditionalAttributes` | —       | Type-specific attributes that inject dynamic content into the default description.                                                                                                  |
| `imageOnly`          | `boolean`                                                              | false   | Renders only the illustration, hiding the title, description, and action button.                                                                                                    |
| `illustrationScheme` | `ThemeType`                                                            | —       | Selects the illustration resource scheme to use.                                                                                                                                    |

## Props — `ErrorDisplayProps`

| Prop                 | Type                                                                   | Default | Description                                                                                                                                                                         |
| -------------------- | ---------------------------------------------------------------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type` \*            | `ErrorDisplayType`                                                     | —       | Determines the default illustration assets and copy to display.                                                                                                                     |
| `img`                | `React.ImgHTMLAttributes<HTMLImageElement>`                            | —       | Overrides the default illustration for the selected `type`.                                                                                                                         |
| `title`              | `string \| JSX.Element`                                                | —       | Overrides the default title for the selected `type`.                                                                                                                                |
| `description`        | `string \| JSX.Element`                                                | —       | Overrides the default description for the selected `type`. When `additionalProps` is also provided for `"maintenance"` or `"inactivity"` types, `additionalProps` takes precedence. |
| `actionButton`       | `ButtonProps`                                                          | —       | Action button rendered below the description. Defaults to a "Proceed" label when `children` is omitted.                                                                             |
| `additionalProps`    | `\| MaintenanceAdditionalAttributes \| InactivityAdditionalAttributes` | —       | Type-specific attributes that inject dynamic content into the default description.                                                                                                  |
| `imageOnly`          | `boolean`                                                              | false   | Renders only the illustration, hiding the title, description, and action button.                                                                                                    |
| `illustrationScheme` | `ThemeType`                                                            | —       | Selects the illustration resource scheme to use.                                                                                                                                    |

## Props — `MaintenanceAdditionalAttributes`

| Prop            | Type     | Default | Description                                                      |
| --------------- | -------- | ------- | ---------------------------------------------------------------- |
| `dateString` \* | `string` | —       | Date string rendered inside the default maintenance description. |

## Props — `InactivityAdditionalAttributes`

| Prop               | Type     | Default | Description                                                                       |
| ------------------ | -------- | ------- | --------------------------------------------------------------------------------- |
| `secondsLeft` \*   | `number` | —       | Remaining seconds before the session expires, used to render the countdown timer. |
| `reminderInterval` | `number` | —       | Interval (in seconds) for announcing remaining time via screen readers.           |

## Props — `ErrorDisplayAttributes`

| Prop                 | Type                                                                   | Default | Description                                                                                                                                                                         |
| -------------------- | ---------------------------------------------------------------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `img`                | `React.ImgHTMLAttributes<HTMLImageElement>`                            | —       | Overrides the default illustration for the selected `type`.                                                                                                                         |
| `title`              | `string \| JSX.Element`                                                | —       | Overrides the default title for the selected `type`.                                                                                                                                |
| `description`        | `string \| JSX.Element`                                                | —       | Overrides the default description for the selected `type`. When `additionalProps` is also provided for `"maintenance"` or `"inactivity"` types, `additionalProps` takes precedence. |
| `actionButton`       | `ButtonProps`                                                          | —       | Action button rendered below the description. Defaults to a "Proceed" label when `children` is omitted.                                                                             |
| `additionalProps`    | `\| MaintenanceAdditionalAttributes \| InactivityAdditionalAttributes` | —       | Type-specific attributes that inject dynamic content into the default description.                                                                                                  |
| `imageOnly`          | `boolean`                                                              | false   | Renders only the illustration, hiding the title, description, and action button.                                                                                                    |
| `illustrationScheme` | `ThemeType`                                                            | —       | Selects the illustration resource scheme to use.                                                                                                                                    |

## Props — `ErrorDisplayProps`

| Prop                 | Type                                                                   | Default | Description                                                                                                                                                                         |
| -------------------- | ---------------------------------------------------------------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type` \*            | `ErrorDisplayType`                                                     | —       | Determines the default illustration assets and copy to display.                                                                                                                     |
| `img`                | `React.ImgHTMLAttributes<HTMLImageElement>`                            | —       | Overrides the default illustration for the selected `type`.                                                                                                                         |
| `title`              | `string \| JSX.Element`                                                | —       | Overrides the default title for the selected `type`.                                                                                                                                |
| `description`        | `string \| JSX.Element`                                                | —       | Overrides the default description for the selected `type`. When `additionalProps` is also provided for `"maintenance"` or `"inactivity"` types, `additionalProps` takes precedence. |
| `actionButton`       | `ButtonProps`                                                          | —       | Action button rendered below the description. Defaults to a "Proceed" label when `children` is omitted.                                                                             |
| `additionalProps`    | `\| MaintenanceAdditionalAttributes \| InactivityAdditionalAttributes` | —       | Type-specific attributes that inject dynamic content into the default description.                                                                                                  |
| `imageOnly`          | `boolean`                                                              | false   | Renders only the illustration, hiding the title, description, and action button.                                                                                                    |
| `illustrationScheme` | `ThemeType`                                                            | —       | Selects the illustration resource scheme to use.                                                                                                                                    |

## Props — `MaintenanceAdditionalAttributes`

| Prop            | Type     | Default | Description                                                      |
| --------------- | -------- | ------- | ---------------------------------------------------------------- |
| `dateString` \* | `string` | —       | Date string rendered inside the default maintenance description. |

## Props — `InactivityAdditionalAttributes`

| Prop               | Type     | Default | Description                                                                       |
| ------------------ | -------- | ------- | --------------------------------------------------------------------------------- |
| `secondsLeft` \*   | `number` | —       | Remaining seconds before the session expires, used to render the countdown timer. |
| `reminderInterval` | `number` | —       | Interval (in seconds) for announcing remaining time via screen readers.           |

## Props — `ErrorDisplayAttributes`

| Prop                 | Type                                                                   | Default | Description                                                                                                                                                                         |
| -------------------- | ---------------------------------------------------------------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `img`                | `React.ImgHTMLAttributes<HTMLImageElement>`                            | —       | Overrides the default illustration for the selected `type`.                                                                                                                         |
| `title`              | `string \| JSX.Element`                                                | —       | Overrides the default title for the selected `type`.                                                                                                                                |
| `description`        | `string \| JSX.Element`                                                | —       | Overrides the default description for the selected `type`. When `additionalProps` is also provided for `"maintenance"` or `"inactivity"` types, `additionalProps` takes precedence. |
| `actionButton`       | `ButtonProps`                                                          | —       | Action button rendered below the description. Defaults to a "Proceed" label when `children` is omitted.                                                                             |
| `additionalProps`    | `\| MaintenanceAdditionalAttributes \| InactivityAdditionalAttributes` | —       | Type-specific attributes that inject dynamic content into the default description.                                                                                                  |
| `imageOnly`          | `boolean`                                                              | false   | Renders only the illustration, hiding the title, description, and action button.                                                                                                    |
| `illustrationScheme` | `ThemeType`                                                            | —       | Selects the illustration resource scheme to use.                                                                                                                                    |

## Props — `ErrorDisplayProps`

| Prop                 | Type                                                                   | Default | Description                                                                                                                                                                         |
| -------------------- | ---------------------------------------------------------------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type` \*            | `ErrorDisplayType`                                                     | —       | Determines the default illustration assets and copy to display.                                                                                                                     |
| `img`                | `React.ImgHTMLAttributes<HTMLImageElement>`                            | —       | Overrides the default illustration for the selected `type`.                                                                                                                         |
| `title`              | `string \| JSX.Element`                                                | —       | Overrides the default title for the selected `type`.                                                                                                                                |
| `description`        | `string \| JSX.Element`                                                | —       | Overrides the default description for the selected `type`. When `additionalProps` is also provided for `"maintenance"` or `"inactivity"` types, `additionalProps` takes precedence. |
| `actionButton`       | `ButtonProps`                                                          | —       | Action button rendered below the description. Defaults to a "Proceed" label when `children` is omitted.                                                                             |
| `additionalProps`    | `\| MaintenanceAdditionalAttributes \| InactivityAdditionalAttributes` | —       | Type-specific attributes that inject dynamic content into the default description.                                                                                                  |
| `imageOnly`          | `boolean`                                                              | false   | Renders only the illustration, hiding the title, description, and action button.                                                                                                    |
| `illustrationScheme` | `ThemeType`                                                            | —       | Selects the illustration resource scheme to use.                                                                                                                                    |

## Rules

-   Always use `ErrorDisplay` for error/empty states — never build custom error pages with raw components.
-   `type` is required — it determines the default illustration, title, and description.
-   Override `title` and `description` only when the defaults don't fit your context.
-   `actionButton` accepts standard `ButtonProps` — label and `onClick` are the common fields.
-   `"maintenance"` requires `additionalProps.dateString` to render the scheduled date in the description.
-   `"inactivity"` requires `additionalProps.secondsLeft` for the countdown display.
-   For listing pages use `type="no-item-found"` — it has the correct "empty results" illustration.

## Anti-patterns

-   Do not use `imageOnly` unless rendering inside a constrained space where text would overflow.
-   Do not hardcode error page titles/descriptions that duplicate what `ErrorDisplay` already provides by default.
-   Do not use `type="warning"` as a generic placeholder — it implies a system-level warning, not a validation message (use `Alert` for that).
