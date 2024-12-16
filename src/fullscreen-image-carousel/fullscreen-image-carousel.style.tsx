import styled, { css } from "styled-components";
import { ClickableIcon } from "../shared/clickable-icon";
import { ImagePlaceholder } from "../shared/image-placeholder";
import { Border, Colour, MediaQuery, Radius } from "../theme";
import { Typography } from "../typography";
import { StatefulImage } from "./stateful-image";

// =============================================================================
// STYLE INTERFACES
// =============================================================================
interface ArrowButtonStyleProps {
    $position: "left" | "right";
}

interface ThumbnailItemStyleProps {
    $active?: boolean;
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

    svg {
        height: 1.5rem;
        width: 1.5rem;
    }
`;

export const CloseButton = styled(IconButton)`
    position: absolute;
    top: 3rem;
    right: 3rem;
    z-index: 5;

    ${MediaQuery.MaxWidth.sm} {
        top: 1.25rem;
        right: 1.25rem;
    }
`;

export const MagnifierButton = styled(IconButton)`
    position: absolute;
    top: 3rem;
    right: 6.5rem;
    z-index: 5;

    ${MediaQuery.MaxWidth.sm} {
        top: 1.25rem;
        right: 4.75rem;
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
            left: 3rem;
            ${MediaQuery.MaxWidth.sm} {
                left: 1.25rem;
            }
        `}

    ${(props) =>
        props.$position === "right" &&
        css`
            right: 3rem;
            ${MediaQuery.MaxWidth.sm} {
                right: 1.25rem;
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
`;

export const SlidePlaceholderImage = styled(ImagePlaceholder)`
    width: 60vw;
    height: auto;
    max-height: 100%;
    aspect-ratio: 4 / 3;
`;

export const BoxChip = styled.div`
    display: flex;
    justify-content: center;
    padding: 1rem;
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
    padding: 0.25rem 1rem;
    justify-content: center;
    align-items: center;
    border-radius: ${Radius.full};
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
    padding: 1.5rem 1rem;

    ${MediaQuery.MaxWidth.sm} {
        padding: 1rem 1.25rem;
    }
`;

export const ThumbnailWrapper = styled.div`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
`;

export const ThumbnailItemContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 6.25rem;
    width: 6.25rem;

    ${MediaQuery.MaxWidth.sm} {
        height: 4rem;
        width: 4rem;
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
    height: 5.75rem;
    width: 5.75rem;

    ${MediaQuery.MaxWidth.sm} {
        height: 3.75rem;
        width: 3.75rem;
    }

    ${(props) =>
        props.$active
            ? css`
                  border-width: ${Border["width-040"]};
                  border-color: ${Colour["border-selected"]};

                  ${MediaQuery.MaxWidth.sm} {
                      border-width: ${Border["width-020"]};
                  }

                  :hover {
                      border-color: ${Colour["border-selected-hover"]};
                  }
              `
            : css`
                  border-width: ${Border["width-010"]};

                  :hover {
                      border-color: ${Colour["border-hover"]};
                  }
              `};
`;

export const ThumbnailImage = styled(StatefulImage)`
    height: 100%;
    width: 100%;
`;
