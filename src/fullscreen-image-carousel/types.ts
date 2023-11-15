import { ModalProps } from "../modal";

export interface ImageCarouselRef {
    currentSlide: number;
    setCurrentSlide: (currentSlide: number) => void;
    goToPrevSlide: () => void;
    goToNextSlide: () => void;
}
export interface ImageCarouselProps
    extends Pick<
        ModalProps,
        | "show"
        | "onOverlayClick"
        | "rootComponentId"
        | "animationFrom"
        | "zIndex"
    > {
    images?: string[] | undefined;
    initialIndex?: number;
    hideThumbnail?: boolean;
}
export interface ImageCarouselItem {
    url: string;
}

export interface ImprogressiveImageProps
    extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, "children"> {
    children?: (params: {
        loading: boolean;
        error: any;
        src: string;
        placeholder?: string;
    }) => React.ReactNode;
}
