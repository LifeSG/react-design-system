import {
    ChevronLeftIcon,
    ChevronRightIcon,
    CrossIcon,
    MagnifierMinusIcon,
    MagnifierPlusIcon,
} from "@lifesg/react-icons";
import { BinIcon } from "@lifesg/react-icons/bin";
import { announce, clearAnnouncer } from "@react-aria/live-announcer";
import {
    forwardRef,
    useCallback,
    useEffect,
    useImperativeHandle,
    useRef,
    useState,
} from "react";
import type {
    ReactZoomPanPinchContentRef,
    ReactZoomPanPinchRef,
} from "react-zoom-pan-pinch";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";

import { ModalV2 } from "../modal-v2";
import { useStateCallback } from "../shared/hooks";
import { useEventListener } from "../util";
import {
    ArrowButton,
    BoxChip,
    CarouselModalContent,
    Chip,
    CloseButton,
    DeleteButton,
    FocusableImageRegion,
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
    ThumbnailItemContainer,
    ThumbnailWrapper,
    TopActionButtons,
} from "./fullscreen-image-carousel.style";
import type {
    FullscreenImageCarouselProps,
    FullscreenImageCarouselRef,
    ImageDimension,
} from "./types";

const Component = (
    {
        items,
        initialActiveItemIndex,
        hideThumbnail = false,
        hideNavigation = false,
        hideCounter = false,
        hideMagnifier = false,
        onDelete,
        onClose,
        insets,
        show,
        ...otherProps
    }: FullscreenImageCarouselProps,
    ref: React.Ref<FullscreenImageCarouselRef>
) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const [currentSlide, setCurrentSlide] = useStateCallback(
        initialActiveItemIndex ?? 0
    );
    const [imagesDimension, setImageDimension] = useState<
        Record<string, ImageDimension>
    >({});
    const [zoom, setZoom] = useState(1);
    const [startX, setStartX] = useState<number | undefined>();
    const [endX, setEndX] = useState<number | undefined>();
    const containerRef = useRef<HTMLDivElement>(null);
    const thumbnailRefs = useRef<(HTMLDivElement | null)[]>([]);
    const zoomRefs = useRef<(ReactZoomPanPinchContentRef | null)[]>([]);
    const imageRef = useRef<HTMLDivElement>(null);
    const diff = startX && endX ? startX - endX : 0;
    const currentItem = items[currentSlide];

    const getImageAriaLabel = useCallback(
        (index: number) => {
            const item = items[index];
            const altText = item.alt?.trim() || "";
            return `${altText}. Image ${index + 1} of ${items.length}.`;
        },
        [items]
    );

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
        if (show) {
            imageRef.current?.focus();
        }
    }, [show]);

    useEffect(() => {
        if (items.length === 0) {
            setCurrentSlide(0);
            return;
        }

        if (currentSlide > items.length - 1) {
            setCurrentSlide(items.length - 1);
        }
    }, [currentSlide, items.length, setCurrentSlide]);

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
        if (!containerRef.current) return;
        if (Math.abs(diff) > containerRef.current.offsetWidth / 3) {
            if (diff > 0) {
                goToNextSlide();
            } else {
                goToPrevSlide();
            }
        }
        setStartX(undefined);
        setEndX(undefined);
    };

    const handleZoom = (e: ReactZoomPanPinchRef) => {
        setZoom(e.state.scale);
    };

    const handleDelete = () => {
        if (currentItem && onDelete) {
            onDelete(currentItem, currentSlide);
        }
    };

    function handleKeyDown(e: KeyboardEvent) {
        if (e.key === "ArrowRight") {
            goToNextSlide();
        } else if (e.key === "ArrowLeft") {
            goToPrevSlide();
        } else if (e.key === "Escape") {
            onClose?.();
        }
    }

    const handleMagnifier = () => {
        if (zoom === 1) {
            const zoomRatio = getZoomRatio();
            zoomRefs.current?.[currentSlide]?.centerView(zoomRatio);
            setZoom(zoomRatio ?? 1);
        } else {
            setZoom(1);
            zoomRefs.current?.[currentSlide]?.resetTransform();
        }
    };

    const setDimension = ({
        src,
        height,
        width,
    }: {
        src: string;
        height: number;
        width: number;
    }) => {
        setImageDimension((oldState) => {
            return { ...oldState, [src]: { height, width } };
        });
    };

    const getZoomRatio = () => {
        if (!currentItem) {
            return;
        }

        const imageDimension = imagesDimension[currentItem.src];

        if (containerRef.current && !!imageDimension) {
            const { clientHeight, clientWidth } = containerRef.current;
            const { width, height } = imageDimension;
            const isSmallImg = width < clientWidth && height < clientHeight;

            const isImgLandscapeRelativeToDevice =
                height / width < clientHeight / clientWidth;

            if (isSmallImg) {
                return isImgLandscapeRelativeToDevice
                    ? clientWidth / width
                    : clientHeight / height;
            }

            return isImgLandscapeRelativeToDevice
                ? clientHeight / (height / (width / clientWidth))
                : clientWidth / (width / (height / clientHeight));
        }
    };

    // =============================================================================
    // HELPER FUNCTIONS
    // =============================================================================
    const goToPrevSlide = () => {
        zoomRefs.current?.[currentSlide]?.resetTransform();
        setCurrentSlide(
            (prev) => (prev === 0 ? items.length - 1 : prev - 1),
            (slide) => {
                clearAnnouncer("polite");
                announce(getImageAriaLabel(slide), "polite");
            }
        );
    };

    const goToNextSlide = () => {
        zoomRefs.current?.[currentSlide]?.resetTransform();
        setCurrentSlide(
            (prev) => (prev === items.length - 1 ? 0 : prev + 1),
            (slide) => {
                clearAnnouncer("polite");
                announce(getImageAriaLabel(slide), "polite");
            }
        );
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
                    const isActive = index === currentSlide;

                    return (
                        <ImageGallerySlide key={index} data-testid="slide-item">
                            <FocusableImageRegion
                                ref={isActive ? imageRef : null}
                                tabIndex={isActive ? 0 : -1}
                            >
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
                                            alt={getImageAriaLabel(index)}
                                            placeholder={
                                                <SlidePlaceholderImage />
                                            }
                                            fit="scale-down"
                                            retrieveImageDimension
                                            setDimension={setDimension}
                                        />
                                    </TransformComponent>
                                </TransformWrapper>
                            </FocusableImageRegion>
                        </ImageGallerySlide>
                    );
                })}
            </ImageGallerySlides>
        );
    };

    const renderThumbnails = () => {
        return (
            <ThumbnailContainer
                $insetBottom={insets?.bottom}
                aria-hidden="true"
            >
                <ThumbnailWrapper>
                    {items.map((item, index) => {
                        const src = item.thumbnailSrc ?? item.src;
                        return (
                            <ThumbnailItemContainer key={index}>
                                <ThumbnailItem
                                    data-testid="thumbnail-item"
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
                            </ThumbnailItemContainer>
                        );
                    })}
                </ThumbnailWrapper>
            </ThumbnailContainer>
        );
    };

    return (
        <ModalV2
            {...otherProps}
            data-testid="image-carousel-modal"
            aria-label="Image carousel"
            show={show}
            disableInitialFocus
        >
            <CarouselModalContent>
                <ImageGalleryContainer>
                    <ImageGalleryWrapper>
                        <ImageGallerySwipe
                            ref={containerRef}
                            onTouchStart={handleTouchStart}
                            onTouchMove={handleTouchMove}
                            onTouchEnd={handleTouchEnd}
                        >
                            {renderSlides()}
                        </ImageGallerySwipe>

                        {!hideNavigation && (
                            <>
                                <ArrowButton
                                    aria-label="Previous image"
                                    data-testid="prev-btn"
                                    $position="left"
                                    onClick={goToPrevSlide}
                                    $insetLeft={insets?.left}
                                    $insetRight={insets?.right}
                                >
                                    <ChevronLeftIcon aria-hidden />
                                </ArrowButton>
                                <ArrowButton
                                    aria-label="Next image"
                                    data-testid="forward-btn"
                                    $position="right"
                                    onClick={goToNextSlide}
                                    $insetLeft={insets?.left}
                                    $insetRight={insets?.right}
                                >
                                    <ChevronRightIcon aria-hidden />
                                </ArrowButton>
                            </>
                        )}

                        {!hideCounter && (
                            <BoxChip aria-hidden="true">
                                <Chip weight="semibold">{`${currentSlide + 1}/${
                                    items.length
                                }`}</Chip>
                            </BoxChip>
                        )}
                    </ImageGalleryWrapper>

                    {!hideThumbnail && renderThumbnails()}
                </ImageGalleryContainer>

                <TopActionButtons
                    $insetTop={insets?.top}
                    $insetRight={insets?.right}
                >
                    {!hideMagnifier && (
                        <MagnifierButton
                            aria-label={zoom === 1 ? "Zoom in" : "Zoom out"}
                            onClick={handleMagnifier}
                        >
                            {zoom === 1 ? (
                                <MagnifierPlusIcon aria-hidden />
                            ) : (
                                <MagnifierMinusIcon aria-hidden />
                            )}
                        </MagnifierButton>
                    )}

                    {onDelete && (
                        <DeleteButton
                            aria-label="Delete image"
                            data-testid="delete-btn"
                            onClick={handleDelete}
                        >
                            <BinIcon aria-hidden />
                        </DeleteButton>
                    )}

                    <CloseButton
                        aria-label="Close image carousel"
                        onClick={onClose}
                    >
                        <CrossIcon aria-hidden />
                    </CloseButton>
                </TopActionButtons>
            </CarouselModalContent>
        </ModalV2>
    );
};

export const FullscreenImageCarousel = forwardRef<
    FullscreenImageCarouselRef,
    FullscreenImageCarouselProps
>(Component);
