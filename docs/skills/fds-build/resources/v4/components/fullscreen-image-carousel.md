# FullscreenImageCarousel

Import: `import { FullscreenImageCarousel } from "@lifesg/react-design-system/fullscreen-image-carousel"`

## When to use

Use to display a fullscreen overlay carousel of images or custom content (e.g. PDFs, videos) with thumbnail navigation, zoom, and optional delete controls.

## Sub-components

-   `FullscreenImageCarouselItemProps` — union of `FullscreenImageCarouselImageItemProps` and `FullscreenImageCarouselCustomItemProps`

## Usage

### Mixed image and custom items

Items use a discriminated union on `type`. Image items may omit `type` (defaults to image); custom items **must** set `type: "custom"` and provide `renderContent`.

```tsx
import { useState } from "react";
import { FullscreenImageCarousel } from "@lifesg/react-design-system/fullscreen-image-carousel";

const DocViewer = () => {
    const [show, setShow] = useState(false);

    const items = [
        // Image item — type may be omitted
        {
            src: "https://example.com/photo.jpg",
            alt: "Site photo",
            fileName: "photo.jpg",
            fileSize: "1.2 MB",
        },
        // Custom item — type is required
        {
            type: "custom" as const,
            itemLabel: "PDF",
            thumbnailSrc: "https://example.com/pdf-thumb.svg",
            renderContent: () => (
                <iframe
                    src="https://example.com/document.pdf"
                    title="PDF preview"
                    style={{ width: "100%", height: "100%", border: "none" }}
                />
            ),
        },
    ];

    const handleDelete = (item, index) => {
        // Remove the item from your state; the delete button only appears
        // because onDelete is provided.
        removeItem(index);
    };

    return (
        <>
            <button onClick={() => setShow(true)}>View files</button>
            <FullscreenImageCarousel
                show={show}
                items={items}
                onClose={() => setShow(false)}
                onDelete={handleDelete} // omit to hide delete button
                showFirstAndLastNav
            />
        </>
    );
};
```

## Props

| Prop                     | Type                                                               | Default    | Description                                                                               |
| ------------------------ | ------------------------------------------------------------------ | ---------- | ----------------------------------------------------------------------------------------- |
| `show` \*                | `boolean`                                                          | `false`    | Toggles the visibility of the Modal                                                       |
| `items` \*               | `FullscreenImageCarouselItemProps[]`                               | —          | List of carousel items                                                                    |
| `animationFrom`          | `"top" \| "bottom" \| "left" \| "right"`                           | `"bottom"` | The animation direction the Modal will appear from                                        |
| `zIndex`                 | `number`                                                           | —          | Custom z-index for modal stacking                                                         |
| `initialActiveItemIndex` | `number`                                                           | `0`        | The initial image that will be displayed                                                  |
| `hideThumbnail`          | `boolean`                                                          | —          | Specifies if the bottom thumbnail row is visible                                          |
| `hideNavigation`         | `boolean`                                                          | —          | Specifies if the left and right navigation buttons are visible                            |
| `hideCounter`            | `boolean`                                                          | —          | Specifies if the pagination counter pill is visible                                       |
| `hideMagnifier`          | `boolean`                                                          | —          | Specifies if the magnifier/zoom button is visible                                         |
| `onDelete`               | `(item: FullscreenImageCarouselItemProps, index: number) => void`  | —          | Called when the delete button is clicked; showing the button requires providing this prop |
| `onClose`                | `() => void`                                                       | —          | Called when the overlay is dismissed via close button or Esc key                          |
| `insets`                 | `{ top?: number; bottom?: number; left?: number; right?: number }` | —          | Safe-area insets from viewport edges                                                      |

`*` = required

## FullscreenImageCarouselItemProps (shared)

| Prop       | Type     | Default | Description                                      |
| ---------- | -------- | ------- | ------------------------------------------------ |
| `fileName` | `string` | —       | File name displayed in the info bar at the top   |
| `fileSize` | `string` | —       | Pre-formatted file size string (e.g. `"2.4 MB"`) |

## FullscreenImageCarouselImageItemProps

| Prop           | Type      | Default | Description                                   |
| -------------- | --------- | ------- | --------------------------------------------- |
| `type`         | `"image"` | —       | Discriminant; may be omitted for image items  |
| `src` \*       | `string`  | —       | The image src                                 |
| `alt`          | `string`  | —       | Descriptive text for screen readers           |
| `thumbnailSrc` | `string`  | —       | Thumbnail src; falls back to `src` if omitted |

## FullscreenImageCarouselCustomItemProps

| Prop               | Type                    | Default | Description                                  |
| ------------------ | ----------------------- | ------- | -------------------------------------------- |
| `type` \*          | `"custom"`              | —       | Discriminant; must be `"custom"`             |
| `renderContent` \* | `() => React.ReactNode` | —       | Custom render prop for the full slide area   |
| `thumbnailSrc`     | `string`                | —       | Thumbnail src; shows placeholder if omitted  |
| `itemLabel`        | `string`                | —       | Label describing content type (e.g. `"PDF"`) |

## Rules

-   Always provide `show` and `items` — both are required.
-   Always wire `onClose` to set `show` to `false`; the component does not close itself.
-   Do not reorder the `items` array while a delete is in flight.
-   The delete button only appears when `onDelete` is provided — omit the prop to hide the button entirely.

## Anti-patterns

-   Do not use for inline image galleries — this component renders as a fullscreen modal overlay.
