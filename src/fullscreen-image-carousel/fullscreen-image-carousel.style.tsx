import styled, { css } from "styled-components";
import { Color } from "../color";
import { MediaQuery } from "../media";
import { ClickableIcon } from "../shared/clickable-icon";
import { ImagePlaceholder } from "../shared/image-placeholder";
import { Text } from "../text";
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
    background: ${Color.Neutral[8]};
    color: ${Color.Primary};
    height: 2.5rem;
    width: 2.5rem;
`;

export const CloseButton = styled(IconButton)`
    position: absolute;
    top: 3rem;
    right: 3rem;
    z-index: 5;

    ${MediaQuery.MaxWidth.mobileL} {
        top: 1.25rem;
        right: 1.25rem;
    }

    svg {
        height: 1.5rem;
        width: 1.5rem;
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
            ${MediaQuery.MaxWidth.mobileL} {
                left: 1.25rem;
            }
        `}

    ${(props) =>
        props.$position === "right" &&
        css`
            right: 3rem;
            ${MediaQuery.MaxWidth.mobileL} {
                right: 1.25rem;
            }
        `}

    svg {
        height: 1.25rem;
        width: 1.25rem;
    }
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

export const Chip = styled(Text.XSmall)`
    display: inline-flex;
    padding: 0.25rem 1rem;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    background-color: ${Color.Neutral[8]};
    text-align: center;
`;

// -----------------------------------------------------------------------------
// THUMBNAIL STYLING
// -----------------------------------------------------------------------------

export const ThumbnailContainer = styled.div`
    flex-shrink: 0;
    display: flex;
    overflow: auto;
    background-color: ${Color.Neutral[1]};
    padding: 1.5rem 1rem;

    ${MediaQuery.MaxWidth.mobileL} {
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

export const ThumbnailItem = styled.div<ThumbnailItemStyleProps>`
    cursor: pointer;
    background-color: ${Color.Neutral[1]};
    border-radius: 10px;

    flex-shrink: 0;
    overflow: hidden;
    border: 1px solid transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 6.25rem;
    width: 6.25rem;

    ${MediaQuery.MaxWidth.mobileL} {
        height: 4rem;
        width: 4rem;
    }

    ${(props) =>
        props.$active
            ? css`
                  border: 4px solid ${Color.Primary};

                  ${MediaQuery.MaxWidth.mobileL} {
                      border: 2px solid ${Color.Primary};
                  }
              `
            : css`
                  :hover {
                      border: 1px solid ${Color.Neutral[5]};
                  }
              `};
`;

export const ThumbnailImage = styled(StatefulImage)`
    height: 100%;
    width: 100%;
`;
