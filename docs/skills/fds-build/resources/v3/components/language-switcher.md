# LanguageSwitcher

Import: `import { LanguageSwitcher } from "@lifesg/react-design-system/language-switcher"`

## Props

| Prop               | Type                                       | Default      | Description                                       |
| ------------------ | ------------------------------------------ | ------------ | ------------------------------------------------- |
| `variant`          | `"dropdown" \| "link-container"`           | `"dropdown"` | The display variant of the language switcher      |
| `className`        | `string`                                   | —            | The className of the component for custom styling |
| `data-testid`      | `string`                                   | —            | The test identifier of the component              |
| `selectedLanguage` | `"en" \| "zh" \| "ms" \| "ta"`             | `"en"`       | The currently selected language code              |
| `onSelectLanguage` | `(language: LanguageSwitcherCode) => void` | —            | Called when a language is selected                |

## Rules

-   `LanguageSwitcherCode` is the union of supported language codes: `"en" | "zh" | "ms" | "ta"`.
