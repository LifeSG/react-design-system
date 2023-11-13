import { CrossIcon } from "@lifesg/react-icons";
import {
    forwardRef,
    useEffect,
    useImperativeHandle,
    useRef,
    useState,
} from "react";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import { Modal } from "../modal";
import {
    ArrowIconLeft,
    ArrowIconRight,
} from "../time-slot-bar/time-slot-bar.styles";
import {
    ArrowButton,
    BoxChip,
    Chip,
    CloseButton,
    ImageGalleryContainer,
    ImageGallerySlide,
    ImageGallerySlides,
    ImageGallerySwipe,
    ImageGalleryWrapper,
    ThumbnailContainer,
    ThumbnailImage,
    ThumbnailItem,
    ThumbnailWrapper,
} from "./image-carousel.style";
import ImprogressiveImage from "./inprogressive-image";
import { IImageCarouselProps, IImageCarouselRef } from "./types";

// eslint-disable-next-line react/display-name
export const ImageCarousel = forwardRef<IImageCarouselRef, IImageCarouselProps>(
    (props, ref) => {
        const { show, images, initialIndex, onOverlayClick, ...rest } = props;
        const [currentSlide, setCurrentSlide] = useState(initialIndex ?? 0);
        const [zoom, setZoom] = useState(1);
        const [startX, setStartX] = useState(null);
        const [endX, setEndX] = useState(null);
        const containerRef = useRef(null);
        const diff = startX && endX ? startX - endX : 0;

        // =============================================================================
        // HELPER FUNCTIONS
        // =============================================================================
        const goToPrevSlide = () => {
            setCurrentSlide((prev) =>
                prev === 0 ? images.length - 1 : prev - 1
            );
        };

        const goToNextSlide = () => {
            setCurrentSlide((prev) =>
                prev === images.length - 1 ? 0 : prev + 1
            );
        };

        const handleTouchStart = (e) => {
            if (zoom <= 1) setStartX(e.touches[0].clientX);
        };

        const handleTouchMove = (e) => {
            if (!startX || zoom > 1) return;
            setEndX(e.touches[0].clientX);
        };

        const handleTouchEnd = () => {
            if (Math.abs(diff) > containerRef.current.offsetWidth / 3) {
                if (diff > 0) {
                    goToNextSlide();
                } else {
                    goToPrevSlide();
                }
            }
            setStartX(null);
            setEndX(null);
        };

        const keyDown = (e: KeyboardEvent) => {
            if (e.key === "ArrowRight") {
                goToNextSlide();
            } else if (e.key === "ArrowLeft") {
                goToPrevSlide();
            } else if (e.key === "Escape") {
                onOverlayClick && onOverlayClick();
            }
        };

        useImperativeHandle<
            Partial<IImageCarouselRef>,
            Partial<IImageCarouselRef>
        >(ref, () => ({
            currentSlide: currentSlide,
            setCurrentSlide: (value) => setCurrentSlide(value),
            goToPrevSlide,
            goToNextSlide,
        }));

        useEffect(() => {
            document.addEventListener("keydown", keyDown);
            return () => {
                document.removeEventListener("keydown", keyDown);
            };
        }, []);

        useEffect(() => {
            const currentThumbnail = document.getElementById(
                `thumbnail_${currentSlide}`
            );
            currentThumbnail?.scrollIntoView({ behavior: "smooth" });
            setZoom(1);
        }, [currentSlide]);

        return (
            <Modal show={show} {...rest}>
                <CloseButton // second element for tab focus order
                    aria-label="Close drawer"
                    onClick={onOverlayClick}
                    focusHighlight={false}
                >
                    <CrossIcon aria-hidden />
                </CloseButton>
                <ImageGalleryContainer>
                    <ImageGalleryWrapper>
                        <ArrowButton position="left" onClick={goToPrevSlide}>
                            <ArrowIconLeft />
                        </ArrowButton>
                        <ArrowButton position="right" onClick={goToNextSlide}>
                            <ArrowIconRight />
                        </ArrowButton>
                        <ImageGallerySwipe
                            ref={containerRef}
                            onTouchStart={handleTouchStart}
                            onTouchMove={handleTouchMove}
                            onTouchEnd={handleTouchEnd}
                        >
                            <ImageGallerySlides
                                style={{
                                    transform: `translateX(calc(${
                                        -currentSlide * 100
                                    }% - ${diff}px))`,
                                }}
                            >
                                {images.map((src, index) => {
                                    return (
                                        <ImageGallerySlide key={index}>
                                            <TransformWrapper
                                                panning={{
                                                    disabled: zoom <= 1,
                                                }}
                                                initialScale={zoom}
                                                onZoom={(e) => {
                                                    setZoom(e.state.scale);
                                                }}
                                                onZoomStop={(e) => {
                                                    setZoom(e.state.scale);
                                                }}
                                                onWheel={(e) => {
                                                    setZoom(e.state.scale);
                                                }}
                                            >
                                                <TransformComponent>
                                                    <ImprogressiveImage
                                                        src={src}
                                                        alt={`Slide ${index}`}
                                                    />
                                                </TransformComponent>
                                            </TransformWrapper>
                                        </ImageGallerySlide>
                                    );
                                })}
                            </ImageGallerySlides>
                        </ImageGallerySwipe>
                        <BoxChip>
                            <Chip>{`${currentSlide + 1}/${
                                images.length
                            }`}</Chip>
                        </BoxChip>
                    </ImageGalleryWrapper>

                    <ThumbnailContainer>
                        <ThumbnailWrapper>
                            {images.map((src, index) => (
                                <ThumbnailItem
                                    key={index}
                                    id={`thumbnail_${index}`}
                                    acctive={index === currentSlide}
                                    onClick={() => setCurrentSlide(index)}
                                >
                                    <ThumbnailImage
                                        src={src}
                                        alt={`Slide thumbnail ${index}`}
                                    />
                                </ThumbnailItem>
                            ))}
                        </ThumbnailWrapper>
                    </ThumbnailContainer>
                </ImageGalleryContainer>
            </Modal>
        );
    }
);
