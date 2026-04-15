import { ModalProps } from "../modal";
import { Insets } from "../shared/types";

export interface FullscreenImageCarouselRef {
    currentItemIndex: number;
    setCurrentItem: (currentItemIndex: number) => void;
    goToPrevItem: () => void;
    goToNextItem: () => void;
}

export interface FullscreenImageCarouselProps
    extends Pick<
        ModalProps,
        "show" | "rootComponentId" | "animationFrom" | "zIndex"
    > {
    items: CarouselItemProps[];
    /** The index of the visible item, starts from 0 */
    initialActiveItemIndex?: number | undefined;
    hideThumbnail?: boolean | undefined;
    hideNavigation?: boolean | undefined;
    hideCounter?: boolean | undefined;
    hideMagnifier?: boolean | undefined;
    onDelete?: ((item: CarouselItemProps, index: number) => void) | undefined;
    onClose?: (() => void) | undefined;
    insets?: Insets | undefined;
}

/**
 * Base item props shared by all carousel items.
 * Kept as a standalone interface for backward compatibility
 * (consumers may extend it).
 */
export interface FullscreenCarouselItemProps {
    src: string;
    alt?: string | undefined;
    thumbnailSrc?: string | undefined;
}

export interface ImageCarouselItemProps extends FullscreenCarouselItemProps {
    renderContent?: never;
}

export interface CustomCarouselItemProps {
    /** The thumbnail image src. If omitted, a placeholder is shown in the thumbnail strip. */
    thumbnailSrc?: string | undefined;
    /** Label for this item used in aria-labels (e.g. "PDF"). Defaults to "image". When any item sets this, carousel-level aria-labels use generic "item" wording. */
    itemLabel?: string | undefined;
    /** Render prop for the full slide area. Consumer is responsible for the entire slide content (e.g. an iframe, embed, or custom viewer). */
    renderContent: () => React.ReactNode;
}

export type CarouselItemProps =
    | ImageCarouselItemProps
    | CustomCarouselItemProps;

export interface ImageDimension {
    width: number;
    height: number;
}
