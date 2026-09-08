# ModalV2

Import: `import { ModalV2 } from "@lifesg/react-design-system/modal-v2"`

## When to use

Use for focused interactions that interrupt the user's flow — confirmations, detail views, or short multi-field forms that do not warrant a new page.

> **v4 note:** `Modal` is deprecated. Use `ModalV2` — it provides improved scroll behaviour, proper focus management via `@floating-ui/react`, and a composable slot-based API.

## Sub-components

`ModalV2`, `ModalV2.Card`, `ModalV2.Header`, `ModalV2.Content`, `ModalV2.Footer`, `ModalV2.CloseButton`

## Variants

| Use case            | Structure                                                        |
| ------------------- | ---------------------------------------------------------------- |
| Confirmation dialog | `ModalV2.Header` + `ModalV2.Content` + `ModalV2.Footer`          |
| Detail view         | `ModalV2.Header` (close only, no title) + `ModalV2.Content`      |
| Short form          | `ModalV2.Header` + `ModalV2.Content` (fields) + `ModalV2.Footer` |

## Usage

### Confirmation dialog

```tsx
import { useState } from "react";
import { ModalV2 } from "@lifesg/react-design-system/modal-v2";
import { Button } from "@lifesg/react-design-system/button";
import { Typography } from "@lifesg/react-design-system/typography";

const ConfirmDeleteModal = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const handleConfirm = () => {
        // perform action
        setShow(false);
    };

    return (
        <>
            <Button onClick={() => setShow(true)}>Delete item</Button>

            <ModalV2
                show={show}
                onClose={handleClose}
                enableOverlayClick
                onOverlayClick={handleClose}
            >
                <ModalV2.Card>
                    <ModalV2.Header title="Delete this item?" />
                    <ModalV2.Content>
                        <Typography.BodyBL>
                            This action cannot be undone.
                        </Typography.BodyBL>
                    </ModalV2.Content>
                    <ModalV2.Footer
                        primaryButton={
                            <Button onClick={handleConfirm}>Confirm</Button>
                        }
                        secondaryButton={
                            <Button styleType="secondary" onClick={handleClose}>
                                Cancel
                            </Button>
                        }
                    />
                </ModalV2.Card>
            </ModalV2>
        </>
    );
};
```

### Detail view (close button only, no title)

```tsx
<ModalV2 show={show} onClose={handleClose}>
    <ModalV2.Card>
        <ModalV2.Header />
        <ModalV2.Content>
            <Typography.BodyBL>Supplementary details here.</Typography.BodyBL>
        </ModalV2.Content>
    </ModalV2.Card>
</ModalV2>
```

## Props — `ModalV2Props`

| Prop                    | Type                      | Default       | Description                                                                                  |
| ----------------------- | ------------------------- | ------------- | -------------------------------------------------------------------------------------------- |
| `show` \*               | `boolean`                 | false         | Controls whether the modal is visible.                                                       |
| `children` \*           | `React.JSX.Element`       | —             | The content of the modal. Must be a valid HTML element or a component that forwards a ref.   |
| `animationFrom`         | `ModalAnimationDirection` | "bottom"      | Direction from which the modal animates in and out.                                          |
| `enableOverlayClick`    | `boolean`                 | true          | Whether clicking the overlay backdrop triggers `onOverlayClick`.                             |
| `rootComponentId`       | `string`                  | document.body | The `id` of the DOM element to portal the modal into.                                        |
| `zIndex`                | `number`                  | —             | Z-index applied to the overlay stack.                                                        |
| `onClose`               | `(() => void)`            | —             | Called when dismissed via the Escape key or close button.                                    |
| `onOverlayClick`        | `(() => void)`            | —             | Called when the overlay backdrop is clicked and `enableOverlayClick` is `true`.              |
| `dismissKeyboardOnShow` | `boolean`                 | true          | Blurs the focused element when the modal opens, dismissing the on-screen keyboard on mobile. |
| `disableInitialFocus`   | `boolean`                 | false         | Disables automatic focus on the modal container when it opens.                               |

## Props — `ModalCardProps`

| Prop          | Type                        | Default | Description                                                                                     |
| ------------- | --------------------------- | ------- | ----------------------------------------------------------------------------------------------- |
| `children` \* | `React.ReactNode`           | —       | Slot content — `ModalV2.Header`, `ModalV2.Content`, `ModalV2.Footer`, or `ModalV2.CloseButton`. |
| `fullscreen`  | `boolean`                   | —       | Expands the card to fill the viewport with no border-radius, padding, or box-shadow.            |
| `elementRef`  | `React.Ref<HTMLDivElement>` | —       | Ref to the card DOM element.                                                                    |

## Props — `ModalHeaderProps`

| Prop                  | Type                | Default | Description                                        |
| --------------------- | ------------------- | ------- | -------------------------------------------------- |
| `title`               | `string`            | —       | Heading text. Omit for a close-button-only header. |
| `closeButtonPosition` | `"left" \| "right"` | "right" | Which side the close button appears on.            |

## Props — `ModalFooterProps`

| Prop              | Type              | Default | Description                                     |
| ----------------- | ----------------- | ------- | ----------------------------------------------- |
| `primaryButton`   | `React.ReactNode` | —       | Node rendered in the primary action position.   |
| `secondaryButton` | `React.ReactNode` | —       | Node rendered in the secondary action position. |

## Rules

-   Always pass `onClose` to `ModalV2` — it is used by `ModalV2.Header` / `ModalV2.CloseButton` via context.
-   Always wrap content in `ModalV2.Card` — it handles internal layout of slots.
-   Use `ModalV2.Header` (not `ModalV2.CloseButton`) when the modal has a title — the header provides the close button automatically.
-   Use `ModalV2.CloseButton` only for custom layouts where `ModalV2.Header` is not present.
-   Pass action buttons to `ModalV2.Footer` via `primaryButton` / `secondaryButton` — do not place them inside `ModalV2.Content`.
-   Provide `enableOverlayClick` + `onOverlayClick` together to allow overlay dismissal.
-   Use `animationFrom="bottom"` for mobile-friendly sheet-style modals.
-   Keep modal content focused — one task or decision per modal.

## Anti-patterns

-   Do not use the deprecated `Modal` — use `ModalV2`.
-   Do not pass a Fragment as the direct child of `ModalV2` — use `ModalV2.Card` or a forwardRef component.
-   Do not put buttons inside `ModalV2.Content` — use `ModalV2.Footer`.
-   Do not stack modals unless using `zIndex` explicitly.
-   Do not use modals for complex multi-step forms — navigate to a dedicated page instead.
