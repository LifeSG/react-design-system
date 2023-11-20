import { ModalProps } from "../modal";

export interface FullscreenImageCarouselRef {
    currentSlide: number;
    setCurrentSlide: (currentSlide: number) => void;
    goToPrevSlide: () => void;
    goToNextSlide: () => void;
}

export interface FullscreenImageCarouselProps
    extends Pick<
        ModalProps,
        "show" | "rootComponentId" | "animationFrom" | "zIndex"
    > {
    images?: string[] | undefined;
    initialIndex?: number | undefined;
    hideThumbnail?: boolean | undefined;
    onClose?: (() => void) | undefined;
}
