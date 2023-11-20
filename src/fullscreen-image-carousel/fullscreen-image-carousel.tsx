import { CrossIcon } from "@lifesg/react-icons";
import {
    forwardRef,
    useEffect,
    useImperativeHandle,
    useRef,
    useState,
} from "react";
import {
    ReactZoomPanPinchRef,
    TransformComponent,
    TransformWrapper,
} from "react-zoom-pan-pinch";
import { Modal } from "../modal";
import { useEventListener } from "../util";
import {
    ArrowButton,
    ArrowIconLeft,
    ArrowIconRight,
    BoxChip,
    Chip,
    CloseButton,
    ImageGalleryContainer,
    ImageGallerySlide,
    ImageGallerySlides,
    ImageGallerySwipe,
    ImageGalleryWrapper,
    ThumbnailContainer,
    ThumbnailItem,
    ThumbnailWrapper,
} from "./fullscreen-image-carousel.style";
import { StatefulImage } from "./stateful-image";
import {
    FullscreenImageCarouselProps,
    FullscreenImageCarouselRef,
} from "./types";

export const Component = (
    {
        images,
        initialIndex,
        hideThumbnail,
        onClose,
        ...otherProps
    }: FullscreenImageCarouselProps,
    ref: React.Ref<FullscreenImageCarouselRef>
) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const [currentSlide, setCurrentSlide] = useState(initialIndex ?? 0);
    const [zoom, setZoom] = useState(1);
    const [startX, setStartX] = useState(null);
    const [endX, setEndX] = useState(null);
    const containerRef = useRef(null);
    const thumbnailRef = useRef([]);
    const diff = startX && endX ? startX - endX : 0;

    useImperativeHandle<
        Partial<FullscreenImageCarouselRef>,
        Partial<FullscreenImageCarouselRef>
    >(ref, () => ({
        currentSlide: currentSlide,
        setCurrentSlide: (value) => setCurrentSlide(value),
        goToPrevSlide,
        goToNextSlide,
    }));

    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEventListener("keydown", handleKeyDown, "document");

    useEffect(() => {
        typeof thumbnailRef.current?.[currentSlide]?.scrollIntoView ===
            "function" &&
            thumbnailRef.current[currentSlide]?.scrollIntoView({
                behavior: "smooth",
                inline: "center",
            });
        setZoom(1);
    }, [currentSlide]);

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
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

    const handleZoom = (e: ReactZoomPanPinchRef) => {
        setZoom(e.state.scale);
    };

    function handleKeyDown(e: KeyboardEvent) {
        if (e.key === "ArrowRight") {
            goToNextSlide();
        } else if (e.key === "ArrowLeft") {
            goToPrevSlide();
        } else if (e.key === "Escape") {
            onClose && onClose();
        }
    }

    // =============================================================================
    // HELPER FUNCTIONS
    // =============================================================================
    const goToPrevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const goToNextSlide = () => {
        setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    const renderSlides = () => {
        return (
            <ImageGallerySlides
                className="image-carousel-slides"
                style={{
                    transform: `translateX(calc(${
                        -currentSlide * 100
                    }% - ${diff}px))`,
                }}
            >
                {images.map((src, index) => {
                    return (
                        <ImageGallerySlide
                            key={index}
                            className="image-carousel-slide"
                        >
                            <TransformWrapper
                                panning={{
                                    disabled: zoom <= 1,
                                }}
                                initialScale={zoom}
                                onZoom={handleZoom}
                                onZoomStop={handleZoom}
                                onWheel={handleZoom}
                            >
                                <TransformComponent>
                                    <StatefulImage
                                        className="carousel-image"
                                        src={src}
                                        alt={`Slide ${index}`}
                                    />
                                </TransformComponent>
                            </TransformWrapper>
                        </ImageGallerySlide>
                    );
                })}
            </ImageGallerySlides>
        );
    };

    const renderThumbnails = () => {
        return (
            <ThumbnailContainer className="thumbnail-container">
                <ThumbnailWrapper className="thumbnail-wrapper">
                    {images.map((src, index) => (
                        <ThumbnailItem
                            key={index}
                            className="thumbnail-item"
                            active={index === currentSlide}
                            onClick={() => setCurrentSlide(index)}
                            ref={(el) => (thumbnailRef.current[index] = el)}
                        >
                            <StatefulImage
                                className="thumbnail-image"
                                style={{
                                    height: "100%",
                                    width: "100%",
                                    maxHeight: "unset",
                                    objectFit: "cover",
                                }}
                                src={src}
                                alt={`Thumbnail ${index}`}
                            />
                        </ThumbnailItem>
                    ))}
                </ThumbnailWrapper>
            </ThumbnailContainer>
        );
    };

    return (
        <Modal {...otherProps} data-testid="image-carousel-modal">
            <CloseButton
                aria-label="Close image carousel"
                onClick={onClose}
                focusHighlight={false}
            >
                <CrossIcon aria-hidden />
            </CloseButton>
            <ImageGalleryContainer className="image-carousel-container">
                <ImageGalleryWrapper className="image-carousel-wrapper">
                    <ArrowButton
                        aria-label="View previous image"
                        className="prev-btn"
                        data-testid="prev-btn"
                        position="left"
                        onClick={goToPrevSlide}
                    >
                        <ArrowIconLeft aria-hidden />
                    </ArrowButton>
                    <ArrowButton
                        aria-label="View next image"
                        className="forward-btn"
                        data-testid="forward-btn"
                        position="right"
                        onClick={goToNextSlide}
                    >
                        <ArrowIconRight aria-hidden />
                    </ArrowButton>
                    <ImageGallerySwipe
                        ref={containerRef}
                        className="image-carousel-swipe"
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                    >
                        {renderSlides()}
                    </ImageGallerySwipe>
                    <BoxChip className="carousel-footer">
                        <Chip className="carousel-chip" weight={"semibold"}>{`${
                            currentSlide + 1
                        }/${images.length}`}</Chip>
                    </BoxChip>
                </ImageGalleryWrapper>
                {!hideThumbnail && renderThumbnails()}
            </ImageGalleryContainer>
        </Modal>
    );
};

export const FullscreenImageCarousel = forwardRef<
    FullscreenImageCarouselRef,
    FullscreenImageCarouselProps
>(Component);
