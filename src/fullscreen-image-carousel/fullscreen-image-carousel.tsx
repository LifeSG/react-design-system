import {
    ChevronLeftIcon,
    ChevronRightIcon,
    CrossIcon,
    MagnifierMinusIcon,
    MagnifierPlusIcon,
} from "@lifesg/react-icons";
import { BinIcon } from "@lifesg/react-icons/bin";
import { announce, clearAnnouncer } from "@react-aria/live-announcer";
import clsx from "clsx";
import {
    forwardRef,
    useCallback,
    useEffect,
    useImperativeHandle,
    useMemo,
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
import { useApplyStyle } from "../theme";
import { useEventListener } from "../util";
import * as styles from "./fullscreen-image-carousel.styles";
import type {
    FullscreenImageCarouselCustomItemProps,
    FullscreenImageCarouselItemProps,
    FullscreenImageCarouselProps,
    FullscreenImageCarouselRef,
    ImageDimension,
} from "./types";

const isCustomItem = (
    item: FullscreenImageCarouselItemProps | undefined
): item is FullscreenImageCarouselCustomItemProps =>
    !!item && item.type === "custom";

export const Component = (
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
    const topActionButtonsRef = useRef<HTMLDivElement>(null);
    const prevArrowButtonRef = useRef<HTMLButtonElement>(null);
    const nextArrowButtonRef = useRef<HTMLButtonElement>(null);
    const thumbnailContainerRef = useRef<HTMLDivElement>(null);
    const diff = startX && endX ? startX - endX : 0;
    const currentItem = items[currentSlide];
    const hasAnyItemLabel = items.some(
        (item) => isCustomItem(item) && !!item.itemLabel?.trim()
    );
    const carouselItemNoun = hasAnyItemLabel ? "item" : "image";
    const hasFileInfo = useMemo(
        () =>
            items.some(
                (item) => item.fileName?.trim() || item.fileSize?.trim()
            ),
        [items]
    );

    useApplyStyle(topActionButtonsRef, {
        [styles.tokens.topActionButtons.insetTop]: insets?.top,
        [styles.tokens.topActionButtons.insetLeft]: insets?.left,
        [styles.tokens.topActionButtons.insetRight]: insets?.right,
    });

    useApplyStyle(prevArrowButtonRef, {
        [styles.tokens.arrowButton.insetLeft]: insets?.left,
        [styles.tokens.arrowButton.insetRight]: insets?.right,
    });

    useApplyStyle(nextArrowButtonRef, {
        [styles.tokens.arrowButton.insetLeft]: insets?.left,
        [styles.tokens.arrowButton.insetRight]: insets?.right,
    });

    useApplyStyle(thumbnailContainerRef, {
        [styles.tokens.thumbnailContainer.insetBottom]: insets?.bottom,
    });

    const getItemAriaLabel = useCallback(
        (index: number) => {
            const item = items[index];
            const itemTypeLabel = hasAnyItemLabel ? "Item" : "Image";
            const prefix = isCustomItem(item)
                ? item.itemLabel?.trim() || ""
                : item.alt?.trim() || "";
            const positionLabel = `${itemTypeLabel} ${index + 1} of ${
                items.length
            }.`;

            return prefix ? `${prefix}. ${positionLabel}` : positionLabel;
        },
        [items, hasAnyItemLabel]
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
        if (!currentItem || isCustomItem(currentItem)) {
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
                announce(getItemAriaLabel(slide), "polite");
            }
        );
    };

    const goToNextSlide = () => {
        zoomRefs.current?.[currentSlide]?.resetTransform();
        setCurrentSlide(
            (prev) => (prev === items.length - 1 ? 0 : prev + 1),
            (slide) => {
                clearAnnouncer("polite");
                announce(getItemAriaLabel(slide), "polite");
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
            <styles.ImageGallerySlides
                style={{
                    transform: `translateX(calc(${
                        -currentSlide * 100
                    }% - ${diff}px))`,
                }}
            >
                {items.map((item, index) => {
                    const isActive = index === currentSlide;
                    const isActiveOrAdjacent =
                        Math.abs(index - currentSlide) <= 1 ||
                        (currentSlide === 0 && index === items.length - 1) ||
                        (currentSlide === items.length - 1 && index === 0);

                    return (
                        <styles.ImageGallerySlide
                            key={index}
                            data-testid="slide-item"
                        >
                            <styles.FocusableImageRegion
                                ref={isActive ? imageRef : null}
                                tabIndex={isActive ? 0 : -1}
                            >
                                {isCustomItem(item) ? (
                                    isActiveOrAdjacent ? (
                                        item.renderContent()
                                    ) : (
                                        <styles.SlidePlaceholderImage />
                                    )
                                ) : (
                                    <TransformWrapper
                                        ref={(el) =>
                                            (zoomRefs.current[index] = el)
                                        }
                                        panning={{
                                            disabled: zoom <= 1,
                                        }}
                                        initialScale={1}
                                        onZoom={handleZoom}
                                        onZoomStop={handleZoom}
                                        onWheel={handleZoom}
                                    >
                                        <TransformComponent>
                                            <styles.SlideImage
                                                src={item.src}
                                                alt={getItemAriaLabel(index)}
                                                placeholder={
                                                    <styles.SlidePlaceholderImage />
                                                }
                                                fit="scale-down"
                                                retrieveImageDimension
                                                setDimension={setDimension}
                                            />
                                        </TransformComponent>
                                    </TransformWrapper>
                                )}
                            </styles.FocusableImageRegion>
                        </styles.ImageGallerySlide>
                    );
                })}
            </styles.ImageGallerySlides>
        );
    };

    const renderFileInfo = () => {
        const { fileName, fileSize } = currentItem ?? {};
        const trimmedName = fileName?.trim();
        const trimmedSize = fileSize?.trim();

        return (
            <styles.FileInfoTextWrapper
                className={clsx(!trimmedSize && "fileInfoTextWrapperCentered")}
                aria-live="polite"
                aria-atomic="true"
                data-testid="file-info-bar"
            >
                {trimmedName && (
                    <styles.FileInfoFileName
                        weight="semibold"
                        data-testid="file-info-name"
                    >
                        {trimmedName}
                    </styles.FileInfoFileName>
                )}
                {trimmedSize && (
                    <styles.FileInfoFileSize data-testid="file-info-size">
                        {trimmedSize}
                    </styles.FileInfoFileSize>
                )}
            </styles.FileInfoTextWrapper>
        );
    };

    const renderThumbnails = () => {
        return (
            <styles.ThumbnailContainer
                ref={thumbnailContainerRef}
                aria-hidden="true"
            >
                <styles.ThumbnailWrapper>
                    {items.map((item, index) => {
                        const src = isCustomItem(item)
                            ? item.thumbnailSrc
                            : item.thumbnailSrc ?? item.src;
                        return (
                            <styles.ThumbnailItemContainer key={index}>
                                <styles.ThumbnailItem
                                    data-active={index === currentSlide}
                                    data-testid="thumbnail-item"
                                    onClick={() => goToSlide(index)}
                                    ref={(el) =>
                                        (thumbnailRefs.current[index] = el)
                                    }
                                >
                                    {src ? (
                                        <styles.ThumbnailImage
                                            src={src}
                                            alt={`Thumbnail ${index + 1}`}
                                            fit="cover"
                                        />
                                    ) : (
                                        <styles.SlidePlaceholderImage />
                                    )}
                                </styles.ThumbnailItem>
                            </styles.ThumbnailItemContainer>
                        );
                    })}
                </styles.ThumbnailWrapper>
            </styles.ThumbnailContainer>
        );
    };

    return (
        <ModalV2
            {...otherProps}
            data-testid="image-carousel-modal"
            aria-label={hasAnyItemLabel ? "Carousel" : "Image carousel"}
            show={show}
            disableInitialFocus
        >
            <styles.CarouselModalContent>
                <styles.ImageGalleryContainer>
                    <styles.ImageGalleryWrapper>
                        <styles.ImageGallerySwipe
                            ref={containerRef}
                            onTouchStart={handleTouchStart}
                            onTouchMove={handleTouchMove}
                            onTouchEnd={handleTouchEnd}
                        >
                            {renderSlides()}
                        </styles.ImageGallerySwipe>

                        {!hideNavigation && (
                            <>
                                <styles.ArrowButton
                                    ref={prevArrowButtonRef}
                                    className="arrowButtonLeft"
                                    aria-label={`Previous ${carouselItemNoun}`}
                                    data-testid="prev-btn"
                                    onClick={goToPrevSlide}
                                >
                                    <ChevronLeftIcon aria-hidden />
                                </styles.ArrowButton>
                                <styles.ArrowButton
                                    ref={nextArrowButtonRef}
                                    className="arrowButtonRight"
                                    aria-label={`Next ${carouselItemNoun}`}
                                    data-testid="forward-btn"
                                    onClick={goToNextSlide}
                                >
                                    <ChevronRightIcon aria-hidden />
                                </styles.ArrowButton>
                            </>
                        )}

                        {!hideCounter && (
                            <styles.BoxChip aria-hidden="true">
                                <styles.Chip weight="semibold">{`${
                                    currentSlide + 1
                                }/${items.length}`}</styles.Chip>
                            </styles.BoxChip>
                        )}
                    </styles.ImageGalleryWrapper>

                    {!hideThumbnail && renderThumbnails()}
                </styles.ImageGalleryContainer>
                <styles.TopActionButtons
                    ref={topActionButtonsRef}
                    data-has-file-info={hasFileInfo}
                >
                    {hasFileInfo && renderFileInfo()}
                    {!hideMagnifier && !isCustomItem(currentItem) && (
                        <styles.MagnifierButton
                            aria-label={zoom === 1 ? "Zoom in" : "Zoom out"}
                            onClick={handleMagnifier}
                        >
                            {zoom === 1 ? (
                                <MagnifierPlusIcon aria-hidden />
                            ) : (
                                <MagnifierMinusIcon aria-hidden />
                            )}
                        </styles.MagnifierButton>
                    )}

                    {onDelete && (
                        <styles.DeleteButton
                            aria-label={`Delete ${
                                (isCustomItem(currentItem) &&
                                    currentItem.itemLabel?.trim()) ||
                                "image"
                            }`}
                            data-testid="delete-btn"
                            onClick={handleDelete}
                        >
                            <BinIcon aria-hidden />
                        </styles.DeleteButton>
                    )}

                    <styles.CloseButton
                        aria-label={
                            hasAnyItemLabel
                                ? "Close carousel"
                                : "Close image carousel"
                        }
                        onClick={onClose}
                    >
                        <CrossIcon aria-hidden />
                    </styles.CloseButton>
                </styles.TopActionButtons>
            </styles.CarouselModalContent>
        </ModalV2>
    );
};

export const FullscreenImageCarousel = forwardRef<
    FullscreenImageCarouselRef,
    FullscreenImageCarouselProps
>(Component);
