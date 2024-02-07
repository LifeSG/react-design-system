import { ModalProps } from "../modal";
export interface FullscreenImageCarouselRef {
    currentItemIndex: number;
    setCurrentItem: (currentItemIndex: number) => void;
    goToPrevItem: () => void;
    goToNextItem: () => void;
}
export interface FullscreenImageCarouselProps extends Pick<ModalProps, "show" | "rootComponentId" | "animationFrom" | "zIndex"> {
    items: FullscreenCarouselItemProps[];
    /** The index of the visible item, starts from 0 */
    initialActiveItemIndex?: number | undefined;
    hideThumbnail?: boolean | undefined;
    onClose?: (() => void) | undefined;
}
export interface FullscreenCarouselItemProps {
    src: string;
    alt?: string | undefined;
    thumbnailSrc?: string | undefined;
}
