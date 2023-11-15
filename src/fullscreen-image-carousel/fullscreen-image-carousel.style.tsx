import styled, { css } from "styled-components";
import { Color } from "../color";
import { MediaQuery } from "../media";
import { ClickableIcon } from "../shared/clickable-icon";
import { ChevronLeftIcon, ChevronRightIcon } from "@lifesg/react-icons";
import { Text } from "../text";

export const ArrowIconLeft = styled(ChevronLeftIcon)`
    font-size: 1rem;
    color: ${Color.Primary};
`;
export const ArrowIconRight = styled(ChevronRightIcon)`
    font-size: 1rem;
    color: ${Color.Primary};
`;
const IconButton = styled(ClickableIcon)`
    padding: 0;
    border-radius: 100%;
    background: white;
    color: ${Color.Primary};
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
    ${MediaQuery.MaxWidth.tablet} {
        top: 2rem;
        right: 2rem;
    }
    ${MediaQuery.MaxWidth.mobileL} {
        top: 1.25rem;
        right: 1.25rem;
    }
`;
export const ArrowButton = styled(IconButton)<{
    position: "left" | "right";
}>`
    z-index: 4;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    ${(props) =>
        props.position === "left" &&
        css`
            left: 3rem;
            ${MediaQuery.MaxWidth.tablet} {
                left: 2rem;
            }
            ${MediaQuery.MaxWidth.mobileL} {
                left: 1.25rem;
            }
        `}

    ${(props) =>
        props.position === "right" &&
        css`
            right: 3rem;
            ${MediaQuery.MaxWidth.tablet} {
                right: 2rem;
            }
            ${MediaQuery.MaxWidth.mobileL} {
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
    }
    .react-transform-component {
        height: 100%;
    }
`;

export const ImageBox = styled.img`
    max-height: 100%;
    max-width: 100%;
    margin: auto;
    height: auto;
    width: auto;
    object-fit: contain;
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
    width: 100px; /* Need a specific value to work */
    z-index: 3;
`;
export const Chip = styled(Text.XSmall)`
    display: inline-flex;
    padding: 4px 16px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 20px;
    background-color: ${Color.Neutral[8]};
    text-align: center;
    font-weight: 600;
    font-size: 0.75rem;
    line-height: 20px;
    letter-spacing: 0.12px;
`;

export const ThumbnailContainer = styled.div`
    display: flex;
    overflow: auto;
    padding: 1rem 0.625rem;
    background-color: ${Color.Neutral[1]};
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
export const ThumbnailItem = styled.div<{
    acctive?: boolean;
}>`
    cursor: pointer;
    background-color: ${Color.Neutral[1]};
    border-radius: 10px;

    flex-shrink: 0;
    overflow: hidden;
    border: 1px solid ${Color.Neutral[1]};
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
        props.acctive
            ? css`
                  border: 4px solid ${Color.Primary};
              `
            : css`
                  :hover {
                      border: 1px solid ${Color.Neutral[5]};
                  }
              `};
`;

export const ThumbnailImage = styled.img`
    object-fit: cover;
    height: 100%;
    width: 100%;
`;
