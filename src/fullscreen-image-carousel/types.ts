import { ModalProps } from "../modal";

export interface FullscreenImageCarouselRef {
    currentItemIndex: number;
    setCurrentItem: (currentItemIndex: number) => void;
    goToPrevItem: () => void;
    goToNextItem: () => void;
}

/**
 * Props for the FullscreenImageCarousel component - fullscreen image gallery modal.
 *
 * Renders a modal overlay with a swipeable image carousel and optional
 * thumbnail strip. Extends key `ModalProps` fields for visibility and animation.
 *
 * @example
 * ```tsx
 * <FullscreenImageCarousel
 *     show={lightboxOpen}
 *     items={images}
 *     onClose={() => setLightboxOpen(false)}
 * />
 * ```
 * @keywords lightbox, image gallery, photo viewer, image slider, gallery modal
 */
export interface FullscreenImageCarouselProps
    extends Pick<
        ModalProps,
        "show" | "rootComponentId" | "animationFrom" | "zIndex"
    > {
    /** The ordered list of image items to display in the carousel. */
    items: FullscreenCarouselItemProps[];
    /**
     * The zero-based index of the image to show first.
     *
     * @default 0
     */
    initialActiveItemIndex?: number | undefined;
    /** When `true`, hides the thumbnail strip at the bottom of the carousel. */
    hideThumbnail?: boolean | undefined;
    /** Called when the carousel is dismissed via the close button or Esc key. */
    onClose?: (() => void) | undefined;
}

export interface FullscreenCarouselItemProps {
    src: string;
    alt?: string | undefined;
    thumbnailSrc?: string | undefined;
}
