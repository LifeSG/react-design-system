import styled from "styled-components";

import { ClickableIcon } from "../shared/clickable-icon";
import { ImagePlaceholder } from "../shared/image-placeholder";
import {
    Border,
    Colour,
    Font,
    MediaQuery,
    Radius,
    Shadow,
    Spacing,
} from "../theme";
import { Typography } from "../typography";
import { StatefulImage } from "./stateful-image";

// =============================================================================
// CSS VARIABLE TOKENS
// =============================================================================
export const tokens = {
    topActionButtons: {
        insetTop:
            "--fds-internal-fullscreenImageCarousel-topActionButtons-insetTop",
        insetLeft:
            "--fds-internal-fullscreenImageCarousel-topActionButtons-insetLeft",
        insetRight:
            "--fds-internal-fullscreenImageCarousel-topActionButtons-insetRight",
    },
    arrowButton: {
        insetLeft:
            "--fds-internal-fullscreenImageCarousel-arrowButton-insetLeft",
        insetRight:
            "--fds-internal-fullscreenImageCarousel-arrowButton-insetRight",
    },
    thumbnailContainer: {
        insetBottom:
            "--fds-internal-fullscreenImageCarousel-thumbnailContainer-insetBottom",
    },
};

// =============================================================================
// STYLING
// =============================================================================
const IconButton = styled(ClickableIcon)`
    padding: 0;
    border-radius: 100%;
    background: ${Colour["bg"]};
    color: ${Colour["icon-primary"]};
    height: 2.5rem;
    width: 2.5rem;
    box-shadow: ${Shadow["md-strong"]};

    svg {
        height: 1.5rem;
        width: 1.5rem;
    }

    &:focus {
        outline: none;
    }

    &:focus-visible {
        outline: ${Border["width-020"]} solid ${Colour["border-selected"]};
        outline-offset: 2px;
    }
`;

export const TopActionButtons = styled.div`
    ${tokens.topActionButtons.insetTop}: initial;
    ${tokens.topActionButtons.insetLeft}: initial;
    ${tokens.topActionButtons.insetRight}: initial;

    order: -1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: ${Spacing["spacing-16"]};

    &[data-has-file-info="true"] {
        flex-shrink: 0;
        background-color: ${Colour["bg-inverse"]};
        padding-top: calc(
            ${Spacing["spacing-24"]} +
                var(${tokens.topActionButtons.insetTop}, 0px)
        );
        padding-bottom: ${Spacing["spacing-24"]};
        padding-left: calc(
            ${Spacing["spacing-32"]} +
                var(${tokens.topActionButtons.insetLeft}, 0px)
        );
        padding-right: calc(
            ${Spacing["spacing-32"]} +
                var(${tokens.topActionButtons.insetRight}, 0px)
        );

        ${MediaQuery.MaxWidth.sm} {
            padding-top: calc(
                ${Spacing["spacing-16"]} +
                    var(${tokens.topActionButtons.insetTop}, 0px)
            );
            padding-bottom: ${Spacing["spacing-16"]};
            padding-left: calc(
                ${Spacing["spacing-20"]} +
                    var(${tokens.topActionButtons.insetLeft}, 0px)
            );
            padding-right: calc(
                ${Spacing["spacing-20"]} +
                    var(${tokens.topActionButtons.insetRight}, 0px)
            );
        }
    }

    &[data-has-file-info="false"] {
        position: absolute;
        top: calc(
            ${Spacing["spacing-48"]} +
                var(${tokens.topActionButtons.insetTop}, 0px)
        );
        right: calc(
            ${Spacing["spacing-48"]} +
                var(${tokens.topActionButtons.insetRight}, 0px)
        );
        z-index: 5;

        ${MediaQuery.MaxWidth.sm} {
            top: calc(
                ${Spacing["spacing-20"]} +
                    var(${tokens.topActionButtons.insetTop}, 0px)
            );
            right: calc(
                ${Spacing["spacing-20"]} +
                    var(${tokens.topActionButtons.insetRight}, 0px)
            );
        }
    }
`;

export const CloseButton = styled(IconButton)``;

export const DeleteButton = styled(IconButton)`
    color: ${Colour["icon-error"]};
`;

export const MagnifierButton = styled(IconButton)``;

export const ArrowButton = styled(IconButton)`
    ${tokens.arrowButton.insetLeft}: initial;
    ${tokens.arrowButton.insetRight}: initial;

    z-index: 4;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    &.arrowButtonLeft {
        left: calc(
            ${Spacing["spacing-48"]} + var(${tokens.arrowButton.insetLeft}, 0px)
        );

        ${MediaQuery.MaxWidth.sm} {
            left: calc(
                ${Spacing["spacing-20"]} +
                    var(${tokens.arrowButton.insetLeft}, 0px)
            );
        }
    }

    &.arrowButtonRight {
        right: calc(
            ${Spacing["spacing-48"]} +
                var(${tokens.arrowButton.insetRight}, 0px)
        );

        ${MediaQuery.MaxWidth.sm} {
            right: calc(
                ${Spacing["spacing-20"]} +
                    var(${tokens.arrowButton.insetRight}, 0px)
            );
        }
    }
`;

export const CarouselModalContent = styled.div`
    position: relative;
    width: 100%;
    height: 100dvh;
    display: flex;
    flex-direction: column;
`;

export const ImageGalleryContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    flex: 1;
    min-height: 0;
`;

export const ImageGalleryWrapper = styled.div`
    user-select: none;
    position: relative;
    display: block;
    overflow: hidden;
    width: 100%;
    flex: 1;
    min-height: 0;
`;

export const ImageGallerySwipe = styled.div`
    display: block;
    user-select: none;
    height: 100%;
    overflow: hidden;
    touch-action: pan-y;
`;

export const ImageGallerySlides = styled.div`
    display: flex;
    transition: all 450ms ease-out 0s;
    position: relative;
    text-align: center;
    user-select: none;
    width: 100%;
    height: 100%;
`;

export const ImageGallerySlide = styled.div`
    flex: 0 0 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;

    .react-transform-wrapper {
        height: 100%;
        width: 100%;
    }

    .react-transform-component {
        height: 100%;
        width: 100%;
    }
`;

export const FocusableImageRegion = styled.div`
    height: 100%;
    width: 100%;
    outline: none;

    &:focus {
        outline: none;
    }

    &:focus-visible {
        outline: ${Border["width-020"]} solid ${Colour["border-selected"]};
        outline-offset: -2px;
    }
`;

export const SlideImage = styled(StatefulImage)`
    height: 100%;
    width: 100%;
    border-radius: ${Radius["none"]};
`;

export const SlidePlaceholderImage = styled(ImagePlaceholder)`
    width: 60vw;
    height: auto;
    max-height: 100%;
    border-radius: ${Radius["none"]};
    aspect-ratio: 4 / 3;
`;

export const BoxChip = styled.div`
    display: flex;
    justify-content: center;
    padding: ${Spacing["spacing-16"]};
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    z-index: 3;
`;

export const Chip = styled(Typography.BodyXS)`
    display: inline-flex;
    padding: ${Spacing["spacing-4"]} ${Spacing["spacing-16"]};
    justify-content: center;
    align-items: center;
    border-radius: ${Radius["full"]};
    background-color: ${Colour["bg"]};
    text-align: center;
`;

// -----------------------------------------------------------------------------
// THUMBNAIL STYLING
// -----------------------------------------------------------------------------

export const ThumbnailContainer = styled.div`
    ${tokens.thumbnailContainer.insetBottom}: initial;

    flex-shrink: 0;
    display: flex;
    overflow: auto;
    background-color: ${Colour["bg-inverse"]};
    padding: ${Spacing["spacing-24"]} ${Spacing["spacing-16"]}
        calc(
            ${Spacing["spacing-24"]} +
                var(${tokens.thumbnailContainer.insetBottom}, 0px)
        );

    ${MediaQuery.MaxWidth.sm} {
        padding: ${Spacing["spacing-16"]} ${Spacing["spacing-20"]}
            calc(
                ${Spacing["spacing-16"]} +
                    var(${tokens.thumbnailContainer.insetBottom}, 0px)
            );
    }
`;

export const ThumbnailWrapper = styled.div`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    gap: ${Spacing["spacing-16"]};
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
`;

export const ThumbnailItemContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    width: 100px;

    ${MediaQuery.MaxWidth.sm} {
        height: 64px;
        width: 64px;
    }
`;

export const ThumbnailItem = styled.div`
    cursor: pointer;
    background-color: ${Colour["bg-inverse"]};
    border-radius: ${Radius["md"]};
    border: ${Border["solid"]} transparent;
    box-sizing: content-box;

    flex-shrink: 0;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 92px;
    width: 92px;

    ${MediaQuery.MaxWidth.sm} {
        height: 60px;
        width: 60px;
    }

    &[data-active="true"] {
        border-width: ${Border["width-040"]};
        border-color: ${Colour["border-selected"]};

        ${MediaQuery.MaxWidth.sm} {
            border-width: ${Border["width-020"]};
        }

        &:hover {
            border-color: ${Colour["border-selected-hover"]};
        }
    }

    &[data-active="false"] {
        border-width: ${Border["width-010"]};

        &:hover {
            border-color: ${Colour["border-hover"]};
        }
    }
`;

export const ThumbnailImage = styled(StatefulImage)`
    height: 100%;
    width: 100%;
`;

// -----------------------------------------------------------------------------
// FILE INFO BAR STYLING
// -----------------------------------------------------------------------------

export const FileInfoTextWrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: ${Spacing["spacing-8"]};
    overflow: hidden;
    min-width: 0;
    min-height: calc(
        ${Font.Spec["body-lh-baseline"]} + ${Spacing["spacing-8"]} +
            ${Font.Spec["body-lh-md"]}
    );

    &.fileInfoTextWrapperCentered {
        justify-content: center;
    }
`;

export const FileInfoFileName = styled(Typography.BodyBL)`
    color: ${Colour["text-inverse"]};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    min-width: 0;
`;

export const FileInfoFileSize = styled(Typography.BodyMD)`
    color: ${Colour["text-inverse"]};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    min-width: 0;
`;
