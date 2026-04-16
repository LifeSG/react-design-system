# LifeSG React Design System

A React component library for LifeSG and BookingSG related products.

## Installation

```
npm i @lifesg/react-design-system
```

### Peer dependencies

```json
{
    "@floating-ui/react": ">=0.26.23 <1.0.0",
    "@lifesg/react-icons": "^1.5.0",
    "react": "^17.0.2 || ^18.0.0 || ^19.0.0",
    "react-dom": "^17.0.2 || ^18.0.0 || ^19.0.0",
    "styled-components": "^6.1.19"
}
```

<br />

## Getting Started

The module requires some custom css for fonts and certain components to work
properly. You will need to load the corresponding stylesheets in your app.

> [!NOTE]
> The font stylesheet example below is for the LifeSG theme. Fonts are
> theme-specific. If you are using another theme, refer to the
> [installation instructions](https://designsystem.life.gov.sg/react/index.html?path=/docs/getting-started-installation--docs).

Add this into the `head` of your html file:

```tsx
<link
    rel="stylesheet"
    type="text/css"
    href="https://assets.life.gov.sg/react-design-system/v3/css/main.css"
/>
<link
    rel="stylesheet"
    type="text/css"
    href="https://assets.life.gov.sg/react-design-system/v3/css/open-sans.css"
/>
```

Or if you are importing to an existing css file:

```css
@import url("https://assets.life.gov.sg/react-design-system/v3/css/main.css");
@import url("https://assets.life.gov.sg/react-design-system/v3/css/open-sans.css");
```

<br />

## Setting up the theme

To use themes, you will need [**Styled Components**](https://styled-components.com/docs).

To configure the theme in your project:

1. Import the theme preset
2. Wrap your components in the `ThemeProvider` context (typically at the root of the application)
3. Pass in the theme object via the `theme` prop

If a theme is not specified, components will use LifeSG as the default.

```tsx
// app.tsx
import { LifeSGTheme } from "@lifesg/react-design-system/theme";
import { ThemeProvider } from "styled-components";
import { Component } from "./index";

const App = () => {
    return (
        <ThemeProvider theme={LifeSGTheme}>
            <Component />
        </ThemeProvider>
    );
};

export default App;
```

For more information on themes and available presets, visit our [documentation](https://designsystem.life.gov.sg/react/index.html?path=/docs/foundations-themes-introduction--docs).

<br />

## Importing the components

```tsx
// Efficient manner
import { Button } from "@lifesg/react-design-system/button";

// Less ideal manner
import { Button } from "@lifesg/react-design-system";
```

To see the full suite of components available, visit our [Storybook documentation](https://designsystem.life.gov.sg/react/index.html?path=/docs/getting-started-installation--docs).

<br />

## Migrations

If you are migrating from an older version of the Design System, you may refer to our [migration guides](https://github.com/LifeSG/react-design-system/wiki).
