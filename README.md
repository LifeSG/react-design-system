# LifeSG React Design System

A React component library for LifeSG and BookingSG related products.

## Installation

```
npm i @lifesg/react-design-system
```

<br />

## Getting Started

The module requires some custom css for certain components to work properly. As the module does not ship with css, you will need to add this into the `head` of your html file.

```tsx
<link
    rel="stylesheet"
    type="text/css"
    href="https://assets.life.gov.sg/react-design-system/v1.0.0/css/main.css"
/>
```

Or if you are importing to an existing css file

```css
@import url("https://assets.life.gov.sg/react-design-system/v1.0.0/css/main.css");
```

<br />

## Importing the components

```tsx
// Efficient manner
import { Button } from "@lifesg/react-design-system/button";

// Less ideal manner
import { Button } from "@lifesg/react-design-system";
```
