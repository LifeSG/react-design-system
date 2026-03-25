import { ModalProps } from "../modal";
import { Insets } from "../shared/types";

export interface FullscreenImageCarouselRef {
    currentItemIndex: number;
    setCurrentItem: (currentItemIndex: number) => void;
    goToPrevItem: () => void;
    goToNextItem: () => void;
}

/**
 * An overlay that displays images in a carousel and offers the ability to zoom into the current image.
 *
 * @keywords fullscreen, image, carousel, gallery, zoom, lightbox
 */
export interface FullscreenImageCarouselProps
    extends Pick<
        ModalProps,
        "show" | "rootComponentId" | "animationFrom" | "zIndex"
    > {
    /** List of carousel items. */
    items: FullscreenCarouselItemProps[];
    /** The initial image that will be displayed. @default 0 */
    initialActiveItemIndex?: number | undefined;
    /** Specifies if the bottom thumbnail row is visible. */
    hideThumbnail?: boolean | undefined;
    /** Specifies if the left and right navigation buttons are visible. */
    hideNavigation?: boolean | undefined;
    /** Specifies if the pagination counter pill is visible. */
    hideCounter?: boolean | undefined;
    /** Specifies if the magnifier button controlling zoom behaviour is visible. */
    hideMagnifier?: boolean | undefined;
    /** The callback when the carousel overlay is dismissed via the close button or Esc key. */
    onClose?: (() => void) | undefined;
    /** The distance from the edge of the viewport, defining the safe area not covered by status bars, notches, or other navigation elements. The close, magnifier, and arrow buttons will be offset accordingly. */
    insets?: Insets | undefined;
}

/**
 * Represents a single image item in the FullscreenImageCarousel.
 *
 * @keywords carousel-item, image, thumbnail, gallery
 */
export interface FullscreenCarouselItemProps {
    /** The image src. */
    src: string;
    /** Descriptive text to be set on the image for screen readers. */
    alt?: string | undefined;
    /** The thumbnail image src. If not specified, the image `src` will be used. */
    thumbnailSrc?: string | undefined;
}

export interface ImageDimension {
    width: number;
    height: number;
}
