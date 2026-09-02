# Modal

Import: `import { Modal } from "@lifesg/react-design-system/modal"`

## When to use

Use for focused interactions that interrupt the user's flow — confirmations, detail views, or short multi-field forms that do not warrant a new page.

## Sub-components

`Modal`, `Modal.Box`

## Variants

| Use case            | Notes                                                         |
| ------------------- | ------------------------------------------------------------- |
| Confirmation dialog | Title, description, and primary/secondary action buttons      |
| Detail view         | Informational content with a close button                     |
| Short form          | Minimal fields only; complex forms belong on a dedicated page |

## Usage

### Confirmation dialog

```tsx
import { useState } from "react";
import { Modal } from "@lifesg/react-design-system/modal";
import { Button } from "@lifesg/react-design-system/button";
import { Text } from "@lifesg/react-design-system/text";

const ConfirmDeleteModal = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const handleConfirm = () => {
        // perform action
        setShow(false);
    };

    return (
        <>
            <Button.Default onClick={() => setShow(true)}>
                Delete item
            </Button.Default>

            <Modal show={show} enableOverlayClick onOverlayClick={handleClose}>
                <Modal.Box showCloseButton onClose={handleClose}>
                    <div style={{ padding: "2rem" }}>
                        <Text.H3 style={{ marginBottom: "0.5rem" }}>
                            Delete this item?
                        </Text.H3>
                        <Text.Body style={{ marginBottom: "1.5rem" }}>
                            This action cannot be undone.
                        </Text.Body>
                        <div style={{ display: "flex", gap: "1rem" }}>
                            <Button.Default
                                styleType="secondary"
                                onClick={handleClose}
                            >
                                Cancel
                            </Button.Default>
                            <Button.Default onClick={handleConfirm}>
                                Confirm
                            </Button.Default>
                        </div>
                    </div>
                </Modal.Box>
            </Modal>
        </>
    );
};
```

## Props — `ModalProps`

| Prop                    | Type                      | Default       | Description                                                                                                                                             |
| ----------------------- | ------------------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `show` \*               | `boolean`                 | false         | Controls whether the modal is visible.                                                                                                                  |
| `children` \*           | `React.JSX.Element`       | —             | The content of the modal. The parent element must be a valid HTML element or a component that forwards a ref to a valid HTML element.                   |
| `animationFrom`         | `ModalAnimationDirection` | "bottom"      | Direction from which the modal slides in and out.                                                                                                       |
| `enableOverlayClick`    | `boolean`                 | true          | Whether clicking the overlay backdrop dismisses the modal.                                                                                              |
| `rootComponentId`       | `string`                  | document.body | The `id` of the DOM element to portal the modal into.                                                                                                   |
| `zIndex`                | `number`                  | —             | The z-index applied to the overlay stack.                                                                                                               |
| `onOverlayClick`        | `(() => void)`            | —             | Called when the overlay backdrop is clicked and `enableOverlayClick` is `true`.                                                                         |
| `dismissKeyboardOnShow` | `boolean`                 | true          | Blurs the currently focused element when the modal becomes visible, dismissing the on-screen keyboard on mobile to prevent it from obscuring the modal. |

## Props — `ModalBoxProps`

| Prop              | Type                        | Default | Description                                                                                                                      |
| ----------------- | --------------------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `children` \*     | `React.ReactNode`           | —       | —                                                                                                                                |
| `showCloseButton` | `boolean`                   | true    | Whether to render the close button in the top-right corner of the box.                                                           |
| `onClose`         | `(() => void)`              | —       | Called when the close button is clicked.                                                                                         |
| `elementRef`      | `React.Ref<HTMLDivElement>` | —       | Ref to the modal box DOM element. When used within `Modal`, the default `ref` is not available and you can specify this instead. |

## Props — `ModalProps`

| Prop                    | Type                      | Default       | Description                                                                                                                                             |
| ----------------------- | ------------------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `show` \*               | `boolean`                 | false         | Controls whether the modal is visible.                                                                                                                  |
| `children` \*           | `React.JSX.Element`       | —             | The content of the modal. The parent element must be a valid HTML element or a component that forwards a ref to a valid HTML element.                   |
| `animationFrom`         | `ModalAnimationDirection` | "bottom"      | Direction from which the modal slides in and out.                                                                                                       |
| `enableOverlayClick`    | `boolean`                 | true          | Whether clicking the overlay backdrop dismisses the modal.                                                                                              |
| `rootComponentId`       | `string`                  | document.body | The `id` of the DOM element to portal the modal into.                                                                                                   |
| `zIndex`                | `number`                  | —             | The z-index applied to the overlay stack.                                                                                                               |
| `onOverlayClick`        | `(() => void)`            | —             | Called when the overlay backdrop is clicked and `enableOverlayClick` is `true`.                                                                         |
| `dismissKeyboardOnShow` | `boolean`                 | true          | Blurs the currently focused element when the modal becomes visible, dismissing the on-screen keyboard on mobile to prevent it from obscuring the modal. |

## Props — `ModalBoxProps`

| Prop              | Type                        | Default | Description                                                                                                                      |
| ----------------- | --------------------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `children` \*     | `React.ReactNode`           | —       | —                                                                                                                                |
| `showCloseButton` | `boolean`                   | true    | Whether to render the close button in the top-right corner of the box.                                                           |
| `onClose`         | `(() => void)`              | —       | Called when the close button is clicked.                                                                                         |
| `elementRef`      | `React.Ref<HTMLDivElement>` | —       | Ref to the modal box DOM element. When used within `Modal`, the default `ref` is not available and you can specify this instead. |

## Props — `ModalProps`

| Prop                    | Type                      | Default       | Description                                                                                                                                             |
| ----------------------- | ------------------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `show` \*               | `boolean`                 | false         | Controls whether the modal is visible.                                                                                                                  |
| `children` \*           | `React.JSX.Element`       | —             | The content of the modal. The parent element must be a valid HTML element or a component that forwards a ref to a valid HTML element.                   |
| `animationFrom`         | `ModalAnimationDirection` | "bottom"      | Direction from which the modal slides in and out.                                                                                                       |
| `enableOverlayClick`    | `boolean`                 | true          | Whether clicking the overlay backdrop dismisses the modal.                                                                                              |
| `rootComponentId`       | `string`                  | document.body | The `id` of the DOM element to portal the modal into.                                                                                                   |
| `zIndex`                | `number`                  | —             | The z-index applied to the overlay stack.                                                                                                               |
| `onOverlayClick`        | `(() => void)`            | —             | Called when the overlay backdrop is clicked and `enableOverlayClick` is `true`.                                                                         |
| `dismissKeyboardOnShow` | `boolean`                 | true          | Blurs the currently focused element when the modal becomes visible, dismissing the on-screen keyboard on mobile to prevent it from obscuring the modal. |

## Props — `ModalBoxProps`

| Prop              | Type                        | Default | Description                                                                                                                      |
| ----------------- | --------------------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `children` \*     | `React.ReactNode`           | —       | —                                                                                                                                |
| `showCloseButton` | `boolean`                   | true    | Whether to render the close button in the top-right corner of the box.                                                           |
| `onClose`         | `(() => void)`              | —       | Called when the close button is clicked.                                                                                         |
| `elementRef`      | `React.Ref<HTMLDivElement>` | —       | Ref to the modal box DOM element. When used within `Modal`, the default `ref` is not available and you can specify this instead. |

## Props — `ModalProps`

| Prop                    | Type                      | Default       | Description                                                                                                                                             |
| ----------------------- | ------------------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `show` \*               | `boolean`                 | false         | Controls whether the modal is visible.                                                                                                                  |
| `children` \*           | `React.JSX.Element`       | —             | The content of the modal. The parent element must be a valid HTML element or a component that forwards a ref to a valid HTML element.                   |
| `animationFrom`         | `ModalAnimationDirection` | "bottom"      | Direction from which the modal slides in and out.                                                                                                       |
| `enableOverlayClick`    | `boolean`                 | true          | Whether clicking the overlay backdrop dismisses the modal.                                                                                              |
| `rootComponentId`       | `string`                  | document.body | The `id` of the DOM element to portal the modal into.                                                                                                   |
| `zIndex`                | `number`                  | —             | The z-index applied to the overlay stack.                                                                                                               |
| `onOverlayClick`        | `(() => void)`            | —             | Called when the overlay backdrop is clicked and `enableOverlayClick` is `true`.                                                                         |
| `dismissKeyboardOnShow` | `boolean`                 | true          | Blurs the currently focused element when the modal becomes visible, dismissing the on-screen keyboard on mobile to prevent it from obscuring the modal. |

## Props — `ModalBoxProps`

| Prop              | Type                        | Default | Description                                                                                                                      |
| ----------------- | --------------------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `children` \*     | `React.ReactNode`           | —       | —                                                                                                                                |
| `showCloseButton` | `boolean`                   | true    | Whether to render the close button in the top-right corner of the box.                                                           |
| `onClose`         | `(() => void)`              | —       | Called when the close button is clicked.                                                                                         |
| `elementRef`      | `React.Ref<HTMLDivElement>` | —       | Ref to the modal box DOM element. When used within `Modal`, the default `ref` is not available and you can specify this instead. |

## Props — `ModalProps`

| Prop                    | Type                      | Default       | Description                                                                                                                                             |
| ----------------------- | ------------------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `show` \*               | `boolean`                 | false         | Controls whether the modal is visible.                                                                                                                  |
| `children` \*           | `React.JSX.Element`       | —             | The content of the modal. The parent element must be a valid HTML element or a component that forwards a ref to a valid HTML element.                   |
| `animationFrom`         | `ModalAnimationDirection` | "bottom"      | Direction from which the modal slides in and out.                                                                                                       |
| `enableOverlayClick`    | `boolean`                 | true          | Whether clicking the overlay backdrop dismisses the modal.                                                                                              |
| `rootComponentId`       | `string`                  | document.body | The `id` of the DOM element to portal the modal into.                                                                                                   |
| `zIndex`                | `number`                  | —             | The z-index applied to the overlay stack.                                                                                                               |
| `onOverlayClick`        | `(() => void)`            | —             | Called when the overlay backdrop is clicked and `enableOverlayClick` is `true`.                                                                         |
| `dismissKeyboardOnShow` | `boolean`                 | true          | Blurs the currently focused element when the modal becomes visible, dismissing the on-screen keyboard on mobile to prevent it from obscuring the modal. |

## Props — `ModalBoxProps`

| Prop              | Type                        | Default | Description                                                                                                                      |
| ----------------- | --------------------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `children` \*     | `React.ReactNode`           | —       | —                                                                                                                                |
| `showCloseButton` | `boolean`                   | true    | Whether to render the close button in the top-right corner of the box.                                                           |
| `onClose`         | `(() => void)`              | —       | Called when the close button is clicked.                                                                                         |
| `elementRef`      | `React.Ref<HTMLDivElement>` | —       | Ref to the modal box DOM element. When used within `Modal`, the default `ref` is not available and you can specify this instead. |

## Props — `ModalProps`

| Prop                    | Type                      | Default       | Description                                                                                                                                             |
| ----------------------- | ------------------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `show` \*               | `boolean`                 | false         | Controls whether the modal is visible.                                                                                                                  |
| `children` \*           | `React.JSX.Element`       | —             | The content of the modal. The parent element must be a valid HTML element or a component that forwards a ref to a valid HTML element.                   |
| `animationFrom`         | `ModalAnimationDirection` | "bottom"      | Direction from which the modal slides in and out.                                                                                                       |
| `enableOverlayClick`    | `boolean`                 | true          | Whether clicking the overlay backdrop dismisses the modal.                                                                                              |
| `rootComponentId`       | `string`                  | document.body | The `id` of the DOM element to portal the modal into.                                                                                                   |
| `zIndex`                | `number`                  | —             | The z-index applied to the overlay stack.                                                                                                               |
| `onOverlayClick`        | `(() => void)`            | —             | Called when the overlay backdrop is clicked and `enableOverlayClick` is `true`.                                                                         |
| `dismissKeyboardOnShow` | `boolean`                 | true          | Blurs the currently focused element when the modal becomes visible, dismissing the on-screen keyboard on mobile to prevent it from obscuring the modal. |

## Props — `ModalBoxProps`

| Prop              | Type                        | Default | Description                                                                                                                      |
| ----------------- | --------------------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `children` \*     | `React.ReactNode`           | —       | —                                                                                                                                |
| `showCloseButton` | `boolean`                   | true    | Whether to render the close button in the top-right corner of the box.                                                           |
| `onClose`         | `(() => void)`              | —       | Called when the close button is clicked.                                                                                         |
| `elementRef`      | `React.Ref<HTMLDivElement>` | —       | Ref to the modal box DOM element. When used within `Modal`, the default `ref` is not available and you can specify this instead. |

## Rules

-   Always include `showCloseButton` on `Modal.Box` — the close button is the minimum required exit mechanism.
-   `Modal` handles the overlay and animation. Always nest `Modal.Box` (or a custom content container) inside `Modal`.
-   Fragments are not supported as direct children of `Modal`.
-   Content inside `Modal.Box` scrolls automatically when it exceeds the screen height.
-   Use `animationFrom="bottom"` for mobile-friendly sheet-style modals.
-   Optionally also allow overlay dismissal via `enableOverlayClick` + `onOverlayClick`.
-   Use Typography components for all text inside the modal — not raw HTML elements.
-   Keep modal content focused — one task or decision per modal.
-   Use illustrations (image above the title) for complex messages to reduce cognitive load; skip them for simple confirmations.

## Anti-patterns

-   Do not use a Fragment as a direct child of `Modal` — use a valid HTML element or a component that forwards a ref.
-   Do not use modals for complex multi-step forms — navigate to a dedicated page instead.
-   Do not stack modals unless using `zIndex` to manage layering explicitly.
-   Do not omit `showCloseButton` — users must always have a way to exit the modal.
