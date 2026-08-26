# Drawer

Import: `import { Drawer } from "@lifesg/react-design-system/drawer"`

## When to use

Use to show supplementary content or actions without navigating away from the current page — for example, filter panels or detail views.

Do not use for:

-   Primary forms that require focused attention
-   Flows that need the full viewport

## Usage

```tsx
import { useState } from "react";
import { Drawer } from "@lifesg/react-design-system/drawer";
import { Button } from "@lifesg/react-design-system/button";
import { Text } from "@lifesg/react-design-system/text";

const FilterDrawer = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    return (
        <>
            <Button.Default onClick={() => setShow(true)}>
                Open filters
            </Button.Default>

            <Drawer
                show={show}
                heading="Filter options"
                onClose={handleClose}
                onOverlayClick={handleClose}
            >
                <div style={{ padding: "1.5rem" }}>
                    <Text.H4 style={{ marginBottom: "0.75rem" }}>
                        Category
                    </Text.H4>
                    <Text.Body style={{ marginBottom: "2rem" }}>
                        Filter content goes here.
                    </Text.Body>
                    <Button.Default styleType="secondary" onClick={handleClose}>
                        Close
                    </Button.Default>
                </div>
            </Drawer>
        </>
    );
};
```

## Props

| Prop             | Type              | Default | Description                                 |
| ---------------- | ----------------- | ------- | ------------------------------------------- |
| `show`           | `boolean`         | —       | Controls visibility                         |
| `heading`        | `string`          | —       | Header text of the drawer panel             |
| `onClose`        | `() => void`      | —       | Called when the close button is clicked     |
| `onOverlayClick` | `() => void`      | —       | Called when the backdrop overlay is clicked |
| `children`       | `React.ReactNode` | —       | Panel content                               |
| `id`             | `string`          | —       | Unique identifier                           |
| `className`      | `string`          | —       | Class selector                              |
| `data-testid`    | `string`          | —       | Test identifier                             |

## Rules

-   Always provide `onClose` so users can dismiss the panel via the close button.
-   Provide `onOverlayClick` to allow dismissal by clicking outside the panel; set it to the same handler as `onClose` unless the overlay should not close the panel.
-   Use `heading` to give the drawer a descriptive title for the user and for screen readers.
-   The drawer slides in from the right edge of the viewport.
-   Content scrolls independently within the panel when it exceeds the panel height.

## Anti-patterns

-   Do not use the Drawer for full forms — use a dedicated page or Modal instead.
-   Do not omit `onClose` — users must have a way to dismiss the panel.
