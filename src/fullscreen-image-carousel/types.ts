import type { ModalProps } from "../modal";
import type { Insets } from "../shared/types";

// @storybookSkipProps
/**
 * Imperative handle to read or change the active item programmatically.
 */
export interface FullscreenImageCarouselRef {
    /** Zero-based index of the currently visible item. */
    currentItemIndex: number;
    /**
     * Navigates directly to the item at the given zero-based index.
     *
     * @param currentItemIndex Zero-based index of the target item.
     */
    setCurrentItem: (currentItemIndex: number) => void;
    /** Navigates to the previous item, wrapping from the first item to the last. */
    goToPrevItem: () => void;
    /** Navigates to the next item, wrapping from the last item to the first. */
    goToNextItem: () => void;
}

/**
 * Props for the `FullscreenImageCarousel`component.
 */
export interface FullscreenImageCarouselProps
    extends Pick<
        ModalProps,
        "show" | "rootComponentId" | "animationFrom" | "zIndex"
    > {
    /** The list of items to display. Each item is either an image or a custom content item. */
    items: FullscreenImageCarouselItemProps[];
    /**
     * Zero-based index of the item that is active when the carousel first opens.
     *
     * @default 0
     */
    initialActiveItemIndex?: number | undefined;
    /**
     * Hides the thumbnail strip below the main slide.
     *
     * @default false
     */
    hideThumbnail?: boolean | undefined;
    /**
     * Hides the previous and next arrow navigation buttons.
     *
     * @default false
     */
    hideNavigation?: boolean | undefined;
    /**
     * Hides the slide position counter chip (e.g. "2/5").
     *
     * @default false
     */
    hideCounter?: boolean | undefined;
    /**
     * Hides the zoom in/out magnifier button. Has no effect on custom items, which
     * never show the magnifier regardless of this prop.
     *
     * @default false
     */
    hideMagnifier?: boolean | undefined;
    /**
     * Called when the delete button is activated for the current item.
     *
     * @param item The item that was deleted.
     * @param index Zero-based index of the deleted item in the `items` array.
     */
    onDelete?:
        | ((item: FullscreenImageCarouselItemProps, index: number) => void)
        | undefined;
    /** Called when the close button is activated or the Escape key is pressed. */
    onClose?: (() => void) | undefined;
    /**
     * Additional pixel insets applied to keep content within a safe area
     * of the viewport and avoid overlap with device UI elements.
     */
    insets?: Insets | undefined;
}

// @storybookSkipProps
interface FullscreenImageCarouselBaseItemProps {
    /**
     * Display name of the file shown in the top info bar.
     */
    fileName?: string | undefined;
    /**
     * Human-readable file size shown alongside `fileName` in the top
     * info bar (e.g. "2.4 MB").
     */
    fileSize?: string | undefined;
}

/**
 * A standard image item rendered inside the carousel slide.
 */
export interface FullscreenImageCarouselImageItemProps
    extends FullscreenImageCarouselBaseItemProps {
    type?: "image" | undefined;
    /** URL of the full-resolution image shown in the slide. */
    src: string;
    /** Accessible label for the image. */
    alt?: string | undefined;
    /**
     * URL of the image shown in the thumbnail strip.
     * Falls back to `src` when omitted.
     */
    thumbnailSrc?: string | undefined;
    renderContent?: never;
}

// @storybookSkipProps
/** @deprecated Use FullscreenImageCarouselImageItemProps instead */
export type FullscreenCarouselItemProps = FullscreenImageCarouselImageItemProps;

/**
 * A custom-content item for the carousel slide.
 *
 * Use when the slide content is not a plain image — for example an iframe,
 * PDF embed, or any arbitrary React element. The zoom magnifier is not shown
 * for custom items regardless of the `hideMagnifier` prop.
 */
export interface FullscreenImageCarouselCustomItemProps
    extends FullscreenImageCarouselBaseItemProps {
    type: "custom";
    /** The thumbnail image src. If omitted, a placeholder is shown in the thumbnail strip. */
    thumbnailSrc?: string | undefined;
    /**
     * Label for this item used in aria-labels (e.g. "PDF").
     *
     * @default "image"
     */
    itemLabel?: string | undefined;
    /**
     * Render prop for the full slide area. Consumer is responsible
     * for the entire slide content (e.g. an iframe, embed, or custom viewer).
     */
    renderContent: () => React.ReactNode;
}

/**
 * A single item in the carousel.
 *
 * `type` discriminates between a standard image item (`"image"`)
 * and a custom-content item (`"custom"`).
 */
export type FullscreenImageCarouselItemProps =
    | FullscreenImageCarouselImageItemProps
    | FullscreenImageCarouselCustomItemProps;

// @storybookSkipProps
/** Natural pixel dimensions of a carousel image, used for zoom calculations. */
export interface ImageDimension {
    width: number;
    height: number;
}
