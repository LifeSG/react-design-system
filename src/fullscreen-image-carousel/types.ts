import { ModalProps } from "../modal";

export interface FullscreenImageCarouselRef {
    currentItem: number;
    setCurrentItem: (currentItem: number) => void;
    goToPrevItem: () => void;
    goToNextItem: () => void;
}

export interface FullscreenImageCarouselProps
    extends Pick<
        ModalProps,
        "show" | "rootComponentId" | "animationFrom" | "zIndex"
    > {
    items: FullscreenCarouselItemProps[];
    /** The index of the visible item, starts from 0 */
    initialActiveItem?: number | undefined;
    hideThumbnail?: boolean | undefined;
    onClose?: (() => void) | undefined;
}

export interface FullscreenCarouselItemProps {
    src: string;
    alt?: string | undefined;
    thumbnailSrc?: string | undefined;
}
