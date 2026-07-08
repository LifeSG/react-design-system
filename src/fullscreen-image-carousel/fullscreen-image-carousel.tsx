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
import { ClickableIcon } from "../shared/clickable-icon";
import { useStateCallback } from "../shared/hooks";
import { ImagePlaceholder } from "../shared/image-placeholder";
import { formatUnitValue, useApplyStyle } from "../theme";
import { Typography } from "../typography";
import { useEventListener } from "../util";
import * as styles from "./fullscreen-image-carousel.styles";
import { StatefulImage } from "./stateful-image";
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
        [styles.tokens.topActionButtons.insetTop]: formatUnitValue(
            insets?.top,
            "px"
        ),
        [styles.tokens.topActionButtons.insetLeft]: formatUnitValue(
            insets?.left,
            "px"
        ),
        [styles.tokens.topActionButtons.insetRight]: formatUnitValue(
            insets?.right,
            "px"
        ),
    });

    useApplyStyle(prevArrowButtonRef, {
        [styles.tokens.arrowButton.insetLeft]: formatUnitValue(
            insets?.left,
            "px"
        ),
    });

    useApplyStyle(nextArrowButtonRef, {
        [styles.tokens.arrowButton.insetRight]: formatUnitValue(
            insets?.right,
            "px"
        ),
    });

    useApplyStyle(thumbnailContainerRef, {
        [styles.tokens.thumbnailContainer.insetBottom]: formatUnitValue(
            insets?.bottom,
            "px"
        ),
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
            <div
                className={styles.imageGallerySlides}
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
                        <div
                            className={styles.imageGallerySlide}
                            key={index}
                            data-testid="slide-item"
                        >
                            <div
                                className={styles.focusableImageRegion}
                                ref={isActive ? imageRef : null}
                                tabIndex={isActive ? 0 : -1}
                            >
                                {isCustomItem(item) ? (
                                    isActiveOrAdjacent ? (
                                        item.renderContent()
                                    ) : (
                                        <ImagePlaceholder
                                            className={
                                                styles.slidePlaceholderImage
                                            }
                                        />
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
                                            <StatefulImage
                                                className={styles.slideImage}
                                                src={item.src}
                                                alt={getItemAriaLabel(index)}
                                                placeholder={
                                                    <ImagePlaceholder
                                                        className={
                                                            styles.slidePlaceholderImage
                                                        }
                                                    />
                                                }
                                                fit="scale-down"
                                                retrieveImageDimension
                                                setDimension={setDimension}
                                            />
                                        </TransformComponent>
                                    </TransformWrapper>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    };

    const renderFileInfo = () => {
        const { fileName, fileSize } = currentItem ?? {};
        const trimmedName = fileName?.trim();
        const trimmedSize = fileSize?.trim();

        return (
            <div
                className={clsx(
                    styles.fileInfoTextWrapper,
                    !trimmedSize && styles.fileInfoTextWrapperCentered
                )}
                aria-live="polite"
                aria-atomic="true"
                data-testid="file-info-bar"
            >
                {trimmedName && (
                    <Typography.BodyBL
                        className={styles.fileInfoFileName}
                        weight="semibold"
                        data-testid="file-info-name"
                    >
                        {trimmedName}
                    </Typography.BodyBL>
                )}
                {trimmedSize && (
                    <Typography.BodyMD
                        className={styles.fileInfoFileSize}
                        data-testid="file-info-size"
                    >
                        {trimmedSize}
                    </Typography.BodyMD>
                )}
            </div>
        );
    };

    const renderThumbnails = () => {
        return (
            <div
                className={styles.thumbnailContainer}
                ref={thumbnailContainerRef}
                aria-hidden="true"
                data-testid="thumbnail-container"
            >
                <div className={styles.thumbnailWrapper}>
                    {items.map((item, index) => {
                        const src = isCustomItem(item)
                            ? item.thumbnailSrc
                            : item.thumbnailSrc ?? item.src;
                        return (
                            <div
                                className={styles.thumbnailItemContainer}
                                key={index}
                            >
                                <div
                                    className={styles.thumbnailItem}
                                    data-active={index === currentSlide}
                                    data-testid="thumbnail-item"
                                    onClick={() => goToSlide(index)}
                                    ref={(el) =>
                                        (thumbnailRefs.current[index] = el)
                                    }
                                >
                                    {src ? (
                                        <StatefulImage
                                            className={styles.thumbnailImage}
                                            src={src}
                                            alt={`Thumbnail ${index + 1}`}
                                            fit="cover"
                                        />
                                    ) : (
                                        <ImagePlaceholder
                                            className={
                                                styles.slidePlaceholderImage
                                            }
                                        />
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
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
            <div className={styles.carouselModalContent}>
                <div className={styles.imageGalleryContainer}>
                    <div className={styles.imageGalleryWrapper}>
                        <div
                            className={styles.imageGallerySwipe}
                            ref={containerRef}
                            onTouchStart={handleTouchStart}
                            onTouchMove={handleTouchMove}
                            onTouchEnd={handleTouchEnd}
                        >
                            {renderSlides()}
                        </div>

                        {!hideNavigation && (
                            <>
                                <ClickableIcon
                                    className={clsx(
                                        styles.iconButton,
                                        styles.arrowButton,
                                        styles.arrowButtonLeft
                                    )}
                                    ref={prevArrowButtonRef}
                                    aria-label={`Previous ${carouselItemNoun}`}
                                    data-testid="prev-btn"
                                    onClick={goToPrevSlide}
                                >
                                    <ChevronLeftIcon aria-hidden />
                                </ClickableIcon>
                                <ClickableIcon
                                    className={clsx(
                                        styles.iconButton,
                                        styles.arrowButton,
                                        styles.arrowButtonRight
                                    )}
                                    ref={nextArrowButtonRef}
                                    aria-label={`Next ${carouselItemNoun}`}
                                    data-testid="forward-btn"
                                    onClick={goToNextSlide}
                                >
                                    <ChevronRightIcon aria-hidden />
                                </ClickableIcon>
                            </>
                        )}

                        {!hideCounter && (
                            <div className={styles.boxChip} aria-hidden="true">
                                <Typography.BodyXS
                                    className={styles.chip}
                                    weight="semibold"
                                    data-testid="carousel-counter"
                                >{`${currentSlide + 1}/${
                                    items.length
                                }`}</Typography.BodyXS>
                            </div>
                        )}
                    </div>

                    {!hideThumbnail && renderThumbnails()}
                </div>
                <div
                    className={styles.topActionButtons}
                    ref={topActionButtonsRef}
                    data-has-file-info={hasFileInfo}
                >
                    {hasFileInfo && renderFileInfo()}
                    {!hideMagnifier && !isCustomItem(currentItem) && (
                        <ClickableIcon
                            className={styles.iconButton}
                            aria-label={zoom === 1 ? "Zoom in" : "Zoom out"}
                            onClick={handleMagnifier}
                        >
                            {zoom === 1 ? (
                                <MagnifierPlusIcon aria-hidden />
                            ) : (
                                <MagnifierMinusIcon aria-hidden />
                            )}
                        </ClickableIcon>
                    )}

                    {onDelete && (
                        <ClickableIcon
                            className={clsx(
                                styles.iconButton,
                                styles.iconButtonError
                            )}
                            aria-label={`Delete ${
                                (isCustomItem(currentItem) &&
                                    currentItem.itemLabel?.trim()) ||
                                "image"
                            }`}
                            data-testid="delete-btn"
                            onClick={handleDelete}
                        >
                            <BinIcon aria-hidden />
                        </ClickableIcon>
                    )}

                    <ClickableIcon
                        className={styles.iconButton}
                        aria-label={
                            hasAnyItemLabel
                                ? "Close carousel"
                                : "Close image carousel"
                        }
                        onClick={onClose}
                    >
                        <CrossIcon aria-hidden />
                    </ClickableIcon>
                </div>
            </div>
        </ModalV2>
    );
};

/**
 * A fullscreen modal carousel for browsing images and custom media items.
 *
 * Use to present a collection of images or custom content in an overlay with
 * navigation controls, zoom support, and an optional thumbnail strip.
 * The top info bar is rendered only when at least one item provides some file metadata.
 */
export const FullscreenImageCarousel = forwardRef<
    FullscreenImageCarouselRef,
    FullscreenImageCarouselProps
>(Component);
