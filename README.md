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

The module requires some custom css for certain components to work properly. As the module does not ship with css, you will need to add this into the `head` of your html file.

```tsx
<link
    rel="stylesheet"
    type="text/css"
    href="https://assets.life.gov.sg/react-design-system/css/main.css"
/>
```

Or if you are importing to an existing css file

```css
@import url("https://assets.life.gov.sg/react-design-system/css/main.css");
```

<br />

## Setting up the theme

If you are intending to make use of the themes, you will need [**Styled Components**](https://styled-components.com/docs).

Styled components provide us with the `ThemeProvider` which you could make use of.

```tsx
// app.tsx
import { ThemeProvider } from "styled-components";
import { BaseTheme } from "@lifesg/react-design-system/theme";
import { Component } from "./index";

const App = () => {
    return (
        <ThemeProvider theme={BaseTheme}>
            <Component />
        </ThemeProvider>
    );
};

export default App;
```

For more information on the usage of themes, you can visit our [documentation](https://designsystem.life.gov.sg/react/index.html?path=/docs/getting-started-themes--docs) about it.

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
