import styled, { css } from "styled-components";
import { ClickableIcon } from "../shared/clickable-icon";
import { ImagePlaceholder } from "../shared/image-placeholder";
import { Border, Colour, MediaQuery, Radius, Shadow, Spacing } from "../theme";
import { Typography } from "../typography";
import { StatefulImage } from "./stateful-image";

// =============================================================================
// STYLE INTERFACES
// =============================================================================
interface ArrowButtonStyleProps extends InsetStyleProps {
    $position: "left" | "right";
}

interface ThumbnailItemStyleProps {
    $active?: boolean;
}

interface InsetStyleProps {
    $insetTop?: number;
    $insetRight?: number;
    $insetLeft?: number;
}

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
`;

export const CloseButton = styled(IconButton)<InsetStyleProps>`
    position: absolute;
    top: ${(props) =>
        props.$insetTop
            ? css`calc(${Spacing["spacing-48"]} + ${props.$insetTop}px)`
            : css`
                  ${Spacing["spacing-48"]}
              `};
    right: ${(props) =>
        props.$insetRight
            ? css`calc(${Spacing["spacing-48"]} + ${props.$insetRight}px)`
            : css`
                  ${Spacing["spacing-48"]}
              `};
    z-index: 5;

    ${MediaQuery.MaxWidth.sm} {
        top: ${(props) =>
            props.$insetTop
                ? css`calc(${Spacing["spacing-20"]} + ${props.$insetTop}px)`
                : css`
                      ${Spacing["spacing-20"]}
                  `};
        right: ${(props) =>
            props.$insetRight
                ? css`calc(${Spacing["spacing-20"]} + ${props.$insetRight}px)`
                : css`
                      ${Spacing["spacing-20"]}
                  `};
    }
`;

export const MagnifierButton = styled(IconButton)<InsetStyleProps>`
    position: absolute;
    top: ${(props) =>
        props.$insetTop
            ? css`calc(${Spacing["spacing-48"]} + ${props.$insetTop}px)`
            : css`
                  ${Spacing["spacing-48"]}
              `};
    right: ${
        (props) =>
            props.$insetRight
                ? css`calc(2.5rem + ${Spacing["spacing-48"]} + ${Spacing["spacing-16"]} ${props.$insetRight}px)`
                : css`calc(2.5rem + ${Spacing["spacing-48"]} + ${Spacing["spacing-16"]})` // close button + space from screen + gap between buttons
    };

    z-index: 5;

    ${MediaQuery.MaxWidth.sm} {
        top: ${(props) =>
            props.$insetTop
                ? css`calc(${Spacing["spacing-20"]} + ${props.$insetTop}px)`
                : css`
                      ${Spacing["spacing-20"]}
                  `};
        right: ${
            (props) =>
                props.$insetRight
                    ? css`calc(2.5rem + ${Spacing["spacing-20"]} + ${Spacing["spacing-16"]} ${props.$insetRight}px)`
                    : css`calc(2.5rem + ${Spacing["spacing-20"]} + ${Spacing["spacing-16"]})` // close button + space from screen + gap between buttons
        };
    }
`;

export const ArrowButton = styled(IconButton)<ArrowButtonStyleProps>`
    z-index: 4;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    ${(props) =>
        props.$position === "left" &&
        css`
            left: ${props.$insetLeft
                ? css`calc(${Spacing["spacing-48"]} + ${props.$insetLeft}px)`
                : css`
                      ${Spacing["spacing-48"]}
                  `};
            ${MediaQuery.MaxWidth.sm} {
                left: ${props.$insetLeft
                    ? css`calc(${Spacing["spacing-20"]} + ${props.$insetLeft}px)`
                    : css`
                          ${Spacing["spacing-20"]}
                      `};
            }
        `}

    ${(props) =>
        props.$position === "right" &&
        css`
            right: ${props.$insetRight
                ? css`calc(${Spacing["spacing-48"]} + ${props.$insetRight}px)`
                : css`
                      ${Spacing["spacing-48"]}
                  `};
            ${MediaQuery.MaxWidth.sm} {
                right: ${props.$insetRight
                    ? css`calc(${Spacing["spacing-20"]} + ${props.$insetRight}px)`
                    : css`
                          ${Spacing["spacing-20"]}
                      `};
            }
        `}
`;

export const ImageGalleryContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;

export const ImageGalleryWrapper = styled.div`
    user-select: none;
    position: relative;
    display: block;
    overflow: hidden;
    width: 100%;
    height: 100%;
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
    flex-shrink: 0;
    display: flex;
    overflow: auto;
    background-color: ${Colour["bg-inverse"]};
    padding: ${Spacing["spacing-24"]} ${Spacing["spacing-16"]};

    ${MediaQuery.MaxWidth.sm} {
        padding: ${Spacing["spacing-16"]} ${Spacing["spacing-20"]};
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

export const ThumbnailItem = styled.div<ThumbnailItemStyleProps>`
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

    ${(props) =>
        props.$active
            ? css`
                  border-width: ${Border["width-040"]};
                  border-color: ${Colour["border-selected"]};

                  ${MediaQuery.MaxWidth.sm} {
                      border-width: ${Border["width-020"]};
                  }

                  &:hover {
                      border-color: ${Colour["border-selected-hover"]};
                  }
              `
            : css`
                  border-width: ${Border["width-010"]};

                  &:hover {
                      border-color: ${Colour["border-hover"]};
                  }
              `};
`;

export const ThumbnailImage = styled(StatefulImage)`
    height: 100%;
    width: 100%;
`;
