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

## Props — `FullscreenImageCarouselRef`

| Prop                  | Type                                 | Default | Description                                                               |
| --------------------- | ------------------------------------ | ------- | ------------------------------------------------------------------------- |
| `currentItemIndex` \* | `number`                             | —       | Zero-based index of the currently visible item.                           |
| `setCurrentItem` \*   | `(currentItemIndex: number) => void` | —       | Navigates directly to the item at the given zero-based index.             |
| `goToPrevItem` \*     | `() => void`                         | —       | Navigates to the previous item, wrapping from the first item to the last. |
| `goToNextItem` \*     | `() => void`                         | —       | Navigates to the next item, wrapping from the last item to the first.     |

## Props — `FullscreenImageCarouselProps`

| Prop                     | Type                                                                   | Default  | Description                                                                                                                    |
| ------------------------ | ---------------------------------------------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `items` \*               | `FullscreenImageCarouselItemProps[]`                                   | —        | The list of items to display. Each item is either an image or a custom content item.                                           |
| `initialActiveItemIndex` | `number`                                                               | 0        | Zero-based index of the item that is active when the carousel first opens.                                                     |
| `hideThumbnail`          | `boolean`                                                              | false    | Hides the thumbnail strip below the main slide.                                                                                |
| `hideNavigation`         | `boolean`                                                              | false    | Hides the previous and next arrow navigation buttons.                                                                          |
| `hideCounter`            | `boolean`                                                              | false    | Hides the slide position counter chip (e.g. "2/5").                                                                            |
| `hideMagnifier`          | `boolean`                                                              | false    | Hides the zoom in/out magnifier button. Has no effect on custom items, which never show the magnifier regardless of this prop. |
| `onDelete`               | `\| ((item: FullscreenImageCarouselItemProps, index: number) => void)` | —        | Called when the delete button is activated for the current item.                                                               |
| `onClose`                | `(() => void)`                                                         | —        | Called when the close button is activated or the Escape key is pressed.                                                        |
| `insets`                 | `Insets`                                                               | —        | Additional pixel insets applied to keep content within a safe area of the viewport and avoid overlap with device UI elements.  |
| `show` \*                | `boolean`                                                              | false    | Controls whether the modal is visible.                                                                                         |
| `rootComponentId`        | `string`                                                               | —        | The `id` of the DOM element to portal the modal into.                                                                          |
| `animationFrom`          | `ModalAnimationDirection`                                              | "bottom" | Direction from which the modal animates in and out.                                                                            |
| `zIndex`                 | `number`                                                               | —        | The z-index applied to the overlay stack.                                                                                      |

## Props — `FullscreenImageCarouselImageItemProps`

| Prop            | Type      | Default | Description                                                                              |
| --------------- | --------- | ------- | ---------------------------------------------------------------------------------------- |
| `type`          | `"image"` | —       | —                                                                                        |
| `src` \*        | `string`  | —       | URL of the full-resolution image shown in the slide.                                     |
| `alt`           | `string`  | —       | Accessible label for the image.                                                          |
| `thumbnailSrc`  | `string`  | —       | URL of the image shown in the thumbnail strip. Falls back to `src` when omitted.         |
| `renderContent` | `never`   | —       | —                                                                                        |
| `fileName`      | `string`  | —       | Display name of the file shown in the top info bar.                                      |
| `fileSize`      | `string`  | —       | Human-readable file size shown alongside `fileName` in the top info bar (e.g. "2.4 MB"). |

## Props — `FullscreenImageCarouselCustomItemProps`

| Prop               | Type                    | Default | Description                                                                                                                          |
| ------------------ | ----------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| `type` \*          | `"custom"`              | —       | —                                                                                                                                    |
| `thumbnailSrc`     | `string`                | —       | The thumbnail image src. If omitted, a placeholder is shown in the thumbnail strip.                                                  |
| `itemLabel`        | `string`                | "image" | Label for this item used in aria-labels (e.g. "PDF").                                                                                |
| `renderContent` \* | `() => React.ReactNode` | —       | Render prop for the full slide area. Consumer is responsible for the entire slide content (e.g. an iframe, embed, or custom viewer). |
| `fileName`         | `string`                | —       | Display name of the file shown in the top info bar.                                                                                  |
| `fileSize`         | `string`                | —       | Human-readable file size shown alongside `fileName` in the top info bar (e.g. "2.4 MB").                                             |

## Props — `ImageDimension`

| Prop        | Type     | Default | Description |
| ----------- | -------- | ------- | ----------- |
| `width` \*  | `number` | —       | —           |
| `height` \* | `number` | —       | —           |

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

## Props — `FullscreenImageCarouselRef`

| Prop                  | Type                                 | Default | Description                                                               |
| --------------------- | ------------------------------------ | ------- | ------------------------------------------------------------------------- |
| `currentItemIndex` \* | `number`                             | —       | Zero-based index of the currently visible item.                           |
| `setCurrentItem` \*   | `(currentItemIndex: number) => void` | —       | Navigates directly to the item at the given zero-based index.             |
| `goToPrevItem` \*     | `() => void`                         | —       | Navigates to the previous item, wrapping from the first item to the last. |
| `goToNextItem` \*     | `() => void`                         | —       | Navigates to the next item, wrapping from the last item to the first.     |

## Props — `FullscreenImageCarouselProps`

| Prop                     | Type                                                                   | Default  | Description                                                                                                                    |
| ------------------------ | ---------------------------------------------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `items` \*               | `FullscreenImageCarouselItemProps[]`                                   | —        | The list of items to display. Each item is either an image or a custom content item.                                           |
| `initialActiveItemIndex` | `number`                                                               | 0        | Zero-based index of the item that is active when the carousel first opens.                                                     |
| `hideThumbnail`          | `boolean`                                                              | false    | Hides the thumbnail strip below the main slide.                                                                                |
| `hideNavigation`         | `boolean`                                                              | false    | Hides the previous and next arrow navigation buttons.                                                                          |
| `hideCounter`            | `boolean`                                                              | false    | Hides the slide position counter chip (e.g. "2/5").                                                                            |
| `hideMagnifier`          | `boolean`                                                              | false    | Hides the zoom in/out magnifier button. Has no effect on custom items, which never show the magnifier regardless of this prop. |
| `onDelete`               | `\| ((item: FullscreenImageCarouselItemProps, index: number) => void)` | —        | Called when the delete button is activated for the current item.                                                               |
| `onClose`                | `(() => void)`                                                         | —        | Called when the close button is activated or the Escape key is pressed.                                                        |
| `insets`                 | `Insets`                                                               | —        | Additional pixel insets applied to keep content within a safe area of the viewport and avoid overlap with device UI elements.  |
| `show` \*                | `boolean`                                                              | false    | Controls whether the modal is visible.                                                                                         |
| `rootComponentId`        | `string`                                                               | —        | The `id` of the DOM element to portal the modal into.                                                                          |
| `animationFrom`          | `ModalAnimationDirection`                                              | "bottom" | Direction from which the modal animates in and out.                                                                            |
| `zIndex`                 | `number`                                                               | —        | The z-index applied to the overlay stack.                                                                                      |

## Props — `FullscreenImageCarouselImageItemProps`

| Prop            | Type      | Default | Description                                                                              |
| --------------- | --------- | ------- | ---------------------------------------------------------------------------------------- |
| `type`          | `"image"` | —       | —                                                                                        |
| `src` \*        | `string`  | —       | URL of the full-resolution image shown in the slide.                                     |
| `alt`           | `string`  | —       | Accessible label for the image.                                                          |
| `thumbnailSrc`  | `string`  | —       | URL of the image shown in the thumbnail strip. Falls back to `src` when omitted.         |
| `renderContent` | `never`   | —       | —                                                                                        |
| `fileName`      | `string`  | —       | Display name of the file shown in the top info bar.                                      |
| `fileSize`      | `string`  | —       | Human-readable file size shown alongside `fileName` in the top info bar (e.g. "2.4 MB"). |

## Props — `FullscreenImageCarouselCustomItemProps`

| Prop               | Type                    | Default | Description                                                                                                                          |
| ------------------ | ----------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| `type` \*          | `"custom"`              | —       | —                                                                                                                                    |
| `thumbnailSrc`     | `string`                | —       | The thumbnail image src. If omitted, a placeholder is shown in the thumbnail strip.                                                  |
| `itemLabel`        | `string`                | "image" | Label for this item used in aria-labels (e.g. "PDF").                                                                                |
| `renderContent` \* | `() => React.ReactNode` | —       | Render prop for the full slide area. Consumer is responsible for the entire slide content (e.g. an iframe, embed, or custom viewer). |
| `fileName`         | `string`                | —       | Display name of the file shown in the top info bar.                                                                                  |
| `fileSize`         | `string`                | —       | Human-readable file size shown alongside `fileName` in the top info bar (e.g. "2.4 MB").                                             |

## Props — `ImageDimension`

| Prop        | Type     | Default | Description |
| ----------- | -------- | ------- | ----------- |
| `width` \*  | `number` | —       | —           |
| `height` \* | `number` | —       | —           |

## Props — `FullscreenImageCarouselRef`

| Prop                  | Type                                 | Default | Description                                                               |
| --------------------- | ------------------------------------ | ------- | ------------------------------------------------------------------------- |
| `currentItemIndex` \* | `number`                             | —       | Zero-based index of the currently visible item.                           |
| `setCurrentItem` \*   | `(currentItemIndex: number) => void` | —       | Navigates directly to the item at the given zero-based index.             |
| `goToPrevItem` \*     | `() => void`                         | —       | Navigates to the previous item, wrapping from the first item to the last. |
| `goToNextItem` \*     | `() => void`                         | —       | Navigates to the next item, wrapping from the last item to the first.     |

## Props — `FullscreenImageCarouselProps`

| Prop                     | Type                                                                   | Default  | Description                                                                                                                    |
| ------------------------ | ---------------------------------------------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `items` \*               | `FullscreenImageCarouselItemProps[]`                                   | —        | The list of items to display. Each item is either an image or a custom content item.                                           |
| `initialActiveItemIndex` | `number`                                                               | 0        | Zero-based index of the item that is active when the carousel first opens.                                                     |
| `hideThumbnail`          | `boolean`                                                              | false    | Hides the thumbnail strip below the main slide.                                                                                |
| `hideNavigation`         | `boolean`                                                              | false    | Hides the previous and next arrow navigation buttons.                                                                          |
| `hideCounter`            | `boolean`                                                              | false    | Hides the slide position counter chip (e.g. "2/5").                                                                            |
| `hideMagnifier`          | `boolean`                                                              | false    | Hides the zoom in/out magnifier button. Has no effect on custom items, which never show the magnifier regardless of this prop. |
| `onDelete`               | `\| ((item: FullscreenImageCarouselItemProps, index: number) => void)` | —        | Called when the delete button is activated for the current item.                                                               |
| `onClose`                | `(() => void)`                                                         | —        | Called when the close button is activated or the Escape key is pressed.                                                        |
| `insets`                 | `Insets`                                                               | —        | Additional pixel insets applied to keep content within a safe area of the viewport and avoid overlap with device UI elements.  |
| `show` \*                | `boolean`                                                              | false    | Controls whether the modal is visible.                                                                                         |
| `rootComponentId`        | `string`                                                               | —        | The `id` of the DOM element to portal the modal into.                                                                          |
| `animationFrom`          | `ModalAnimationDirection`                                              | "bottom" | Direction from which the modal animates in and out.                                                                            |
| `zIndex`                 | `number`                                                               | —        | The z-index applied to the overlay stack.                                                                                      |

## Props — `FullscreenImageCarouselImageItemProps`

| Prop            | Type      | Default | Description                                                                              |
| --------------- | --------- | ------- | ---------------------------------------------------------------------------------------- |
| `type`          | `"image"` | —       | —                                                                                        |
| `src` \*        | `string`  | —       | URL of the full-resolution image shown in the slide.                                     |
| `alt`           | `string`  | —       | Accessible label for the image.                                                          |
| `thumbnailSrc`  | `string`  | —       | URL of the image shown in the thumbnail strip. Falls back to `src` when omitted.         |
| `renderContent` | `never`   | —       | —                                                                                        |
| `fileName`      | `string`  | —       | Display name of the file shown in the top info bar.                                      |
| `fileSize`      | `string`  | —       | Human-readable file size shown alongside `fileName` in the top info bar (e.g. "2.4 MB"). |

## Props — `FullscreenImageCarouselCustomItemProps`

| Prop               | Type                    | Default | Description                                                                                                                          |
| ------------------ | ----------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| `type` \*          | `"custom"`              | —       | —                                                                                                                                    |
| `thumbnailSrc`     | `string`                | —       | The thumbnail image src. If omitted, a placeholder is shown in the thumbnail strip.                                                  |
| `itemLabel`        | `string`                | "image" | Label for this item used in aria-labels (e.g. "PDF").                                                                                |
| `renderContent` \* | `() => React.ReactNode` | —       | Render prop for the full slide area. Consumer is responsible for the entire slide content (e.g. an iframe, embed, or custom viewer). |
| `fileName`         | `string`                | —       | Display name of the file shown in the top info bar.                                                                                  |
| `fileSize`         | `string`                | —       | Human-readable file size shown alongside `fileName` in the top info bar (e.g. "2.4 MB").                                             |

## Props — `ImageDimension`

| Prop        | Type     | Default | Description |
| ----------- | -------- | ------- | ----------- |
| `width` \*  | `number` | —       | —           |
| `height` \* | `number` | —       | —           |

## Props — `FullscreenImageCarouselItemProps`

| Prop            | Type      | Default | Description                                                                              |
| --------------- | --------- | ------- | ---------------------------------------------------------------------------------------- |
| `type`          | `"image"` | —       | —                                                                                        |
| `thumbnailSrc`  | `string`  | —       | URL of the image shown in the thumbnail strip. Falls back to `src` when omitted.         |
| `renderContent` | `never`   | —       | —                                                                                        |
| `fileName`      | `string`  | —       | Display name of the file shown in the top info bar.                                      |
| `fileSize`      | `string`  | —       | Human-readable file size shown alongside `fileName` in the top info bar (e.g. "2.4 MB"). |

## Props — `FullscreenImageCarouselRef`

| Prop                  | Type                                 | Default | Description                                                               |
| --------------------- | ------------------------------------ | ------- | ------------------------------------------------------------------------- |
| `currentItemIndex` \* | `number`                             | —       | Zero-based index of the currently visible item.                           |
| `setCurrentItem` \*   | `(currentItemIndex: number) => void` | —       | Navigates directly to the item at the given zero-based index.             |
| `goToPrevItem` \*     | `() => void`                         | —       | Navigates to the previous item, wrapping from the first item to the last. |
| `goToNextItem` \*     | `() => void`                         | —       | Navigates to the next item, wrapping from the last item to the first.     |

## Props — `FullscreenImageCarouselProps`

| Prop                     | Type                                                                   | Default  | Description                                                                                                                    |
| ------------------------ | ---------------------------------------------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `items` \*               | `FullscreenImageCarouselItemProps[]`                                   | —        | The list of items to display. Each item is either an image or a custom content item.                                           |
| `initialActiveItemIndex` | `number`                                                               | 0        | Zero-based index of the item that is active when the carousel first opens.                                                     |
| `hideThumbnail`          | `boolean`                                                              | false    | Hides the thumbnail strip below the main slide.                                                                                |
| `hideNavigation`         | `boolean`                                                              | false    | Hides the previous and next arrow navigation buttons.                                                                          |
| `hideCounter`            | `boolean`                                                              | false    | Hides the slide position counter chip (e.g. "2/5").                                                                            |
| `hideMagnifier`          | `boolean`                                                              | false    | Hides the zoom in/out magnifier button. Has no effect on custom items, which never show the magnifier regardless of this prop. |
| `onDelete`               | `\| ((item: FullscreenImageCarouselItemProps, index: number) => void)` | —        | Called when the delete button is activated for the current item.                                                               |
| `onClose`                | `(() => void)`                                                         | —        | Called when the close button is activated or the Escape key is pressed.                                                        |
| `insets`                 | `Insets`                                                               | —        | Additional pixel insets applied to keep content within a safe area of the viewport and avoid overlap with device UI elements.  |
| `show` \*                | `boolean`                                                              | false    | Controls whether the modal is visible.                                                                                         |
| `rootComponentId`        | `string`                                                               | —        | The `id` of the DOM element to portal the modal into.                                                                          |
| `animationFrom`          | `ModalAnimationDirection`                                              | "bottom" | Direction from which the modal animates in and out.                                                                            |
| `zIndex`                 | `number`                                                               | —        | The z-index applied to the overlay stack.                                                                                      |

## Props — `FullscreenImageCarouselImageItemProps`

| Prop            | Type      | Default | Description                                                                              |
| --------------- | --------- | ------- | ---------------------------------------------------------------------------------------- |
| `type`          | `"image"` | —       | —                                                                                        |
| `src` \*        | `string`  | —       | URL of the full-resolution image shown in the slide.                                     |
| `alt`           | `string`  | —       | Accessible label for the image.                                                          |
| `thumbnailSrc`  | `string`  | —       | URL of the image shown in the thumbnail strip. Falls back to `src` when omitted.         |
| `renderContent` | `never`   | —       | —                                                                                        |
| `fileName`      | `string`  | —       | Display name of the file shown in the top info bar.                                      |
| `fileSize`      | `string`  | —       | Human-readable file size shown alongside `fileName` in the top info bar (e.g. "2.4 MB"). |

## Props — `FullscreenImageCarouselCustomItemProps`

| Prop               | Type                    | Default | Description                                                                                                                          |
| ------------------ | ----------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| `type` \*          | `"custom"`              | —       | —                                                                                                                                    |
| `thumbnailSrc`     | `string`                | —       | The thumbnail image src. If omitted, a placeholder is shown in the thumbnail strip.                                                  |
| `itemLabel`        | `string`                | "image" | Label for this item used in aria-labels (e.g. "PDF").                                                                                |
| `renderContent` \* | `() => React.ReactNode` | —       | Render prop for the full slide area. Consumer is responsible for the entire slide content (e.g. an iframe, embed, or custom viewer). |
| `fileName`         | `string`                | —       | Display name of the file shown in the top info bar.                                                                                  |
| `fileSize`         | `string`                | —       | Human-readable file size shown alongside `fileName` in the top info bar (e.g. "2.4 MB").                                             |

## Props — `ImageDimension`

| Prop        | Type     | Default | Description |
| ----------- | -------- | ------- | ----------- |
| `width` \*  | `number` | —       | —           |
| `height` \* | `number` | —       | —           |

## Props — `FullscreenImageCarouselItemProps`

| Prop            | Type      | Default | Description                                                                              |
| --------------- | --------- | ------- | ---------------------------------------------------------------------------------------- |
| `type`          | `"image"` | —       | —                                                                                        |
| `thumbnailSrc`  | `string`  | —       | URL of the image shown in the thumbnail strip. Falls back to `src` when omitted.         |
| `renderContent` | `never`   | —       | —                                                                                        |
| `fileName`      | `string`  | —       | Display name of the file shown in the top info bar.                                      |
| `fileSize`      | `string`  | —       | Human-readable file size shown alongside `fileName` in the top info bar (e.g. "2.4 MB"). |

## Props — `FullscreenImageCarouselRef`

| Prop                  | Type                                 | Default | Description                                                               |
| --------------------- | ------------------------------------ | ------- | ------------------------------------------------------------------------- |
| `currentItemIndex` \* | `number`                             | —       | Zero-based index of the currently visible item.                           |
| `setCurrentItem` \*   | `(currentItemIndex: number) => void` | —       | Navigates directly to the item at the given zero-based index.             |
| `goToPrevItem` \*     | `() => void`                         | —       | Navigates to the previous item, wrapping from the first item to the last. |
| `goToNextItem` \*     | `() => void`                         | —       | Navigates to the next item, wrapping from the last item to the first.     |

## Props — `FullscreenImageCarouselProps`

| Prop                     | Type                                                                   | Default  | Description                                                                                                                    |
| ------------------------ | ---------------------------------------------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `items` \*               | `FullscreenImageCarouselItemProps[]`                                   | —        | The list of items to display. Each item is either an image or a custom content item.                                           |
| `initialActiveItemIndex` | `number`                                                               | 0        | Zero-based index of the item that is active when the carousel first opens.                                                     |
| `hideThumbnail`          | `boolean`                                                              | false    | Hides the thumbnail strip below the main slide.                                                                                |
| `hideNavigation`         | `boolean`                                                              | false    | Hides the previous and next arrow navigation buttons.                                                                          |
| `hideCounter`            | `boolean`                                                              | false    | Hides the slide position counter chip (e.g. "2/5").                                                                            |
| `hideMagnifier`          | `boolean`                                                              | false    | Hides the zoom in/out magnifier button. Has no effect on custom items, which never show the magnifier regardless of this prop. |
| `onDelete`               | `\| ((item: FullscreenImageCarouselItemProps, index: number) => void)` | —        | Called when the delete button is activated for the current item.                                                               |
| `onClose`                | `(() => void)`                                                         | —        | Called when the close button is activated or the Escape key is pressed.                                                        |
| `insets`                 | `Insets`                                                               | —        | Additional pixel insets applied to keep content within a safe area of the viewport and avoid overlap with device UI elements.  |
| `show` \*                | `boolean`                                                              | false    | Controls whether the modal is visible.                                                                                         |
| `rootComponentId`        | `string`                                                               | —        | The `id` of the DOM element to portal the modal into.                                                                          |
| `animationFrom`          | `ModalAnimationDirection`                                              | "bottom" | Direction from which the modal animates in and out.                                                                            |
| `zIndex`                 | `number`                                                               | —        | The z-index applied to the overlay stack.                                                                                      |

## Props — `FullscreenImageCarouselImageItemProps`

| Prop            | Type      | Default | Description                                                                              |
| --------------- | --------- | ------- | ---------------------------------------------------------------------------------------- |
| `type`          | `"image"` | —       | —                                                                                        |
| `src` \*        | `string`  | —       | URL of the full-resolution image shown in the slide.                                     |
| `alt`           | `string`  | —       | Accessible label for the image.                                                          |
| `thumbnailSrc`  | `string`  | —       | URL of the image shown in the thumbnail strip. Falls back to `src` when omitted.         |
| `renderContent` | `never`   | —       | —                                                                                        |
| `fileName`      | `string`  | —       | Display name of the file shown in the top info bar.                                      |
| `fileSize`      | `string`  | —       | Human-readable file size shown alongside `fileName` in the top info bar (e.g. "2.4 MB"). |

## Props — `FullscreenImageCarouselCustomItemProps`

| Prop               | Type                    | Default | Description                                                                                                                          |
| ------------------ | ----------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| `type` \*          | `"custom"`              | —       | —                                                                                                                                    |
| `thumbnailSrc`     | `string`                | —       | The thumbnail image src. If omitted, a placeholder is shown in the thumbnail strip.                                                  |
| `itemLabel`        | `string`                | "image" | Label for this item used in aria-labels (e.g. "PDF").                                                                                |
| `renderContent` \* | `() => React.ReactNode` | —       | Render prop for the full slide area. Consumer is responsible for the entire slide content (e.g. an iframe, embed, or custom viewer). |
| `fileName`         | `string`                | —       | Display name of the file shown in the top info bar.                                                                                  |
| `fileSize`         | `string`                | —       | Human-readable file size shown alongside `fileName` in the top info bar (e.g. "2.4 MB").                                             |

## Props — `ImageDimension`

| Prop        | Type     | Default | Description |
| ----------- | -------- | ------- | ----------- |
| `width` \*  | `number` | —       | —           |
| `height` \* | `number` | —       | —           |

## Props — `FullscreenImageCarouselItemProps`

| Prop            | Type      | Default | Description                                                                              |
| --------------- | --------- | ------- | ---------------------------------------------------------------------------------------- |
| `type`          | `"image"` | —       | —                                                                                        |
| `thumbnailSrc`  | `string`  | —       | URL of the image shown in the thumbnail strip. Falls back to `src` when omitted.         |
| `renderContent` | `never`   | —       | —                                                                                        |
| `fileName`      | `string`  | —       | Display name of the file shown in the top info bar.                                      |
| `fileSize`      | `string`  | —       | Human-readable file size shown alongside `fileName` in the top info bar (e.g. "2.4 MB"). |

## Props — `FullscreenImageCarouselRef`

| Prop                  | Type                                 | Default | Description                                                               |
| --------------------- | ------------------------------------ | ------- | ------------------------------------------------------------------------- |
| `currentItemIndex` \* | `number`                             | —       | Zero-based index of the currently visible item.                           |
| `setCurrentItem` \*   | `(currentItemIndex: number) => void` | —       | Navigates directly to the item at the given zero-based index.             |
| `goToPrevItem` \*     | `() => void`                         | —       | Navigates to the previous item, wrapping from the first item to the last. |
| `goToNextItem` \*     | `() => void`                         | —       | Navigates to the next item, wrapping from the last item to the first.     |

## Props — `FullscreenImageCarouselProps`

| Prop                     | Type                                                                   | Default  | Description                                                                                                                    |
| ------------------------ | ---------------------------------------------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `items` \*               | `FullscreenImageCarouselItemProps[]`                                   | —        | The list of items to display. Each item is either an image or a custom content item.                                           |
| `initialActiveItemIndex` | `number`                                                               | 0        | Zero-based index of the item that is active when the carousel first opens.                                                     |
| `hideThumbnail`          | `boolean`                                                              | false    | Hides the thumbnail strip below the main slide.                                                                                |
| `hideNavigation`         | `boolean`                                                              | false    | Hides the previous and next arrow navigation buttons.                                                                          |
| `hideCounter`            | `boolean`                                                              | false    | Hides the slide position counter chip (e.g. "2/5").                                                                            |
| `hideMagnifier`          | `boolean`                                                              | false    | Hides the zoom in/out magnifier button. Has no effect on custom items, which never show the magnifier regardless of this prop. |
| `onDelete`               | `\| ((item: FullscreenImageCarouselItemProps, index: number) => void)` | —        | Called when the delete button is activated for the current item.                                                               |
| `onClose`                | `(() => void)`                                                         | —        | Called when the close button is activated or the Escape key is pressed.                                                        |
| `insets`                 | `Insets`                                                               | —        | Additional pixel insets applied to keep content within a safe area of the viewport and avoid overlap with device UI elements.  |
| `show` \*                | `boolean`                                                              | false    | Controls whether the modal is visible.                                                                                         |
| `rootComponentId`        | `string`                                                               | —        | The `id` of the DOM element to portal the modal into.                                                                          |
| `animationFrom`          | `ModalAnimationDirection`                                              | "bottom" | Direction from which the modal animates in and out.                                                                            |
| `zIndex`                 | `number`                                                               | —        | The z-index applied to the overlay stack.                                                                                      |

## Props — `FullscreenImageCarouselImageItemProps`

| Prop            | Type      | Default | Description                                                                              |
| --------------- | --------- | ------- | ---------------------------------------------------------------------------------------- |
| `type`          | `"image"` | —       | —                                                                                        |
| `src` \*        | `string`  | —       | URL of the full-resolution image shown in the slide.                                     |
| `alt`           | `string`  | —       | Accessible label for the image.                                                          |
| `thumbnailSrc`  | `string`  | —       | URL of the image shown in the thumbnail strip. Falls back to `src` when omitted.         |
| `renderContent` | `never`   | —       | —                                                                                        |
| `fileName`      | `string`  | —       | Display name of the file shown in the top info bar.                                      |
| `fileSize`      | `string`  | —       | Human-readable file size shown alongside `fileName` in the top info bar (e.g. "2.4 MB"). |

## Props — `FullscreenImageCarouselCustomItemProps`

| Prop               | Type                    | Default | Description                                                                                                                          |
| ------------------ | ----------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| `type` \*          | `"custom"`              | —       | —                                                                                                                                    |
| `thumbnailSrc`     | `string`                | —       | The thumbnail image src. If omitted, a placeholder is shown in the thumbnail strip.                                                  |
| `itemLabel`        | `string`                | "image" | Label for this item used in aria-labels (e.g. "PDF").                                                                                |
| `renderContent` \* | `() => React.ReactNode` | —       | Render prop for the full slide area. Consumer is responsible for the entire slide content (e.g. an iframe, embed, or custom viewer). |
| `fileName`         | `string`                | —       | Display name of the file shown in the top info bar.                                                                                  |
| `fileSize`         | `string`                | —       | Human-readable file size shown alongside `fileName` in the top info bar (e.g. "2.4 MB").                                             |

## Props — `ImageDimension`

| Prop        | Type     | Default | Description |
| ----------- | -------- | ------- | ----------- |
| `width` \*  | `number` | —       | —           |
| `height` \* | `number` | —       | —           |

## Props — `FullscreenImageCarouselItemProps`

| Prop            | Type      | Default | Description                                                                              |
| --------------- | --------- | ------- | ---------------------------------------------------------------------------------------- |
| `type`          | `"image"` | —       | —                                                                                        |
| `thumbnailSrc`  | `string`  | —       | URL of the image shown in the thumbnail strip. Falls back to `src` when omitted.         |
| `renderContent` | `never`   | —       | —                                                                                        |
| `fileName`      | `string`  | —       | Display name of the file shown in the top info bar.                                      |
| `fileSize`      | `string`  | —       | Human-readable file size shown alongside `fileName` in the top info bar (e.g. "2.4 MB"). |

## Rules

-   Always provide `show` and `items` — both are required.
-   Always wire `onClose` to set `show` to `false`; the component does not close itself.
-   Do not reorder the `items` array while a delete is in flight.
-   The delete button only appears when `onDelete` is provided — omit the prop to hide the button entirely.

## Anti-patterns

-   Do not use for inline image galleries — this component renders as a fullscreen modal overlay.
