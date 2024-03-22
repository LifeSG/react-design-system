import {
    ChevronLeftIcon,
    ChevronRightIcon,
    CrossIcon,
    MagnifierMinusIcon,
    MagnifierPlusIcon,
} from "@lifesg/react-icons";
import {
    forwardRef,
    useEffect,
    useImperativeHandle,
    useRef,
    useState,
} from "react";
import {
    ReactZoomPanPinchContentRef,
    ReactZoomPanPinchRef,
    TransformComponent,
    TransformWrapper,
} from "react-zoom-pan-pinch";
import { Modal } from "../modal";
import { useEventListener } from "../util";
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
    MagnifierButton,
    SlideImage,
    SlidePlaceholderImage,
    ThumbnailContainer,
    ThumbnailImage,
    ThumbnailItem,
    ThumbnailWrapper,
} from "./fullscreen-image-carousel.style";
import {
    FullscreenImageCarouselProps,
    FullscreenImageCarouselRef,
} from "./types";

export const Component = (
    {
        items,
        initialActiveItemIndex,
        hideThumbnail = false,
        hideNavigation = false,
        hideCounter = false,
        hideMagnifier = false,
        onClose,
        ...otherProps
    }: FullscreenImageCarouselProps,
    ref: React.Ref<FullscreenImageCarouselRef>
) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================

    const [currentSlide, setCurrentSlide] = useState(
        initialActiveItemIndex ?? 0
    );
    const [imagesDimension, setImageDimension] = useState({});
    const [zoom, setZoom] = useState(1);
    const [startX, setStartX] = useState(null);
    const [endX, setEndX] = useState(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const thumbnailRefs = useRef<HTMLDivElement[]>([]);
    const zoomRefs = useRef<ReactZoomPanPinchContentRef[]>([]);
    const diff = startX && endX ? startX - endX : 0;

    useImperativeHandle<FullscreenImageCarouselRef, FullscreenImageCarouselRef>(
        ref,
        () => ({
            currentItemIndex: currentSlide,
            setCurrentItem: goToSlide,
            goToPrevItem: goToPrevSlide,
            goToNextItem: goToNextSlide,
        })
    );

    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEventListener("keydown", handleKeyDown, "document");

    useEffect(() => {
        thumbnailRefs.current?.[currentSlide]?.scrollIntoView({
            behavior: "smooth",
            inline: "center",
        });
        setZoom(1);
    }, [currentSlide]);

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleTouchStart = (e: React.TouchEvent) => {
        if (zoom <= 1) setStartX(e.touches[0].clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
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

    const handleMagnifier = () => {
        if (zoom === 1) {
            const zoomRatio = getZoomRatio();
            zoomRefs.current?.[currentSlide]?.centerView(zoomRatio);
            setZoom(zoomRatio);
        } else {
            setZoom(1);
            zoomRefs.current?.[currentSlide]?.resetTransform();
        }
    };

    const setDimension = ({ src, height, width }) => {
        setImageDimension((oldState) => {
            return { ...oldState, [src]: { height, width } };
        });
    };

    const getZoomRatio = () => {
        const src = items[currentSlide].src;
        const { width, height } = imagesDimension[src];

        const isImgLandscapeRelativeToDevice =
            height / width <
            containerRef?.current.clientHeight /
                containerRef?.current.clientWidth;

        return isImgLandscapeRelativeToDevice
            ? containerRef?.current.clientHeight /
                  (height / (width / containerRef?.current.clientWidth))
            : containerRef?.current.clientWidth /
                  (width / (height / containerRef?.current.clientHeight));
    };

    // =============================================================================
    // HELPER FUNCTIONS
    // =============================================================================
    const goToPrevSlide = () => {
        zoomRefs.current?.[currentSlide]?.resetTransform();
        setCurrentSlide((prev) => (prev === 0 ? items.length - 1 : prev - 1));
    };

    const goToNextSlide = () => {
        zoomRefs.current?.[currentSlide]?.resetTransform();
        setCurrentSlide((prev) => (prev === items.length - 1 ? 0 : prev + 1));
    };

    const goToSlide = (index: number) => {
        zoomRefs.current?.[currentSlide]?.resetTransform();
        setCurrentSlide(index);
    };

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    const renderSlides = () => {
        return (
            <ImageGallerySlides
                style={{
                    transform: `translateX(calc(${
                        -currentSlide * 100
                    }% - ${diff}px))`,
                }}
            >
                {items.map((item, index) => {
                    return (
                        <ImageGallerySlide key={index} data-testid="slide-item">
                            <TransformWrapper
                                ref={(el) => (zoomRefs.current[index] = el)}
                                panning={{
                                    disabled: zoom <= 1,
                                }}
                                initialScale={1}
                                onZoom={handleZoom}
                                onZoomStop={handleZoom}
                                onWheel={handleZoom}
                            >
                                <TransformComponent>
                                    <SlideImage
                                        src={item.src}
                                        alt={item.alt ?? `Image ${index + 1}`}
                                        placeholder={<SlidePlaceholderImage />}
                                        retrieveImageDimension
                                        setDimension={setDimension}
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
            <ThumbnailContainer>
                <ThumbnailWrapper>
                    {items.map((item, index) => {
                        const src = item.thumbnailSrc ?? item.src;
                        return (
                            <ThumbnailItem
                                data-testid="thumbnail-item"
                                key={index}
                                $active={index === currentSlide}
                                onClick={() => goToSlide(index)}
                                ref={(el) =>
                                    (thumbnailRefs.current[index] = el)
                                }
                            >
                                <ThumbnailImage
                                    src={src}
                                    alt={`Thumbnail ${index + 1}`}
                                    fit="cover"
                                />
                            </ThumbnailItem>
                        );
                    })}
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
            {!hideMagnifier && (
                <MagnifierButton
                    aria-label="Magnify image"
                    onClick={handleMagnifier}
                    focusHighlight={false}
                >
                    {zoom === 1 ? (
                        <MagnifierPlusIcon aria-hidden />
                    ) : (
                        <MagnifierMinusIcon aria-hidden />
                    )}
                </MagnifierButton>
            )}
            <ImageGalleryContainer>
                <ImageGalleryWrapper>
                    {!hideNavigation && (
                        <>
                            <ArrowButton
                                aria-label="View previous image"
                                data-testid="prev-btn"
                                $position="left"
                                onClick={goToPrevSlide}
                            >
                                <ChevronLeftIcon aria-hidden />
                            </ArrowButton>
                            <ArrowButton
                                aria-label="View next image"
                                data-testid="forward-btn"
                                $position="right"
                                onClick={goToNextSlide}
                            >
                                <ChevronRightIcon aria-hidden />
                            </ArrowButton>
                        </>
                    )}
                    <ImageGallerySwipe
                        ref={containerRef}
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                    >
                        {renderSlides()}
                    </ImageGallerySwipe>
                    {!hideCounter && (
                        <BoxChip>
                            <Chip weight="semibold">{`${currentSlide + 1}/${
                                items.length
                            }`}</Chip>
                        </BoxChip>
                    )}
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
