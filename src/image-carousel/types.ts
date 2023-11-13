import { ModalProps } from "../modal";

export interface IImageCarouselRef {
    currentSilde: number;
    setCurrentSlide: (currentSilde: number) => void;
    goToPrevSlide: () => void;
    goToNextSlide: () => void;
}
export interface IImageCarouselProps
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
}
export interface IImageCarouselItem {
    url: string;
}

export interface IImprogressiveImage
    extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, "children"> {
    children?: (params: {
        loading: boolean;
        error: any;
        src: string;
        placeholder?: string;
    }) => React.ReactNode;
}
