import { css } from "@linaria/core";

import {
    Border,
    Colour,
    Font,
    MediaQuery,
    Radius,
    Shadow,
    Spacing,
} from "../theme";

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
const iconButton = css`
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

export const topActionButtons = css`
    /* Reset variables to prevent leaking to child components */
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

export const closeButton = css`
    ${iconButton}
`;

export const deleteButton = css`
    ${iconButton}
    color: ${Colour["icon-error"]};
`;

export const magnifierButton = css`
    ${iconButton}
`;

export const arrowButton = css`
    ${iconButton}

    /* Reset variables to prevent leaking to child components */
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

export const carouselModalContent = css`
    position: relative;
    width: 100%;
    height: 100dvh;
    display: flex;
    flex-direction: column;
`;

export const imageGalleryContainer = css`
    display: flex;
    flex-direction: column;
    width: 100%;
    flex: 1;
    min-height: 0;
`;

export const imageGalleryWrapper = css`
    user-select: none;
    position: relative;
    display: block;
    overflow: hidden;
    width: 100%;
    flex: 1;
    min-height: 0;
`;

export const imageGallerySwipe = css`
    display: block;
    user-select: none;
    height: 100%;
    overflow: hidden;
    touch-action: pan-y;
`;

export const imageGallerySlides = css`
    display: flex;
    transition: all 450ms ease-out 0s;
    position: relative;
    text-align: center;
    user-select: none;
    width: 100%;
    height: 100%;
`;

export const imageGallerySlide = css`
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

export const focusableImageRegion = css`
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

export const slideImage = css`
    height: 100%;
    width: 100%;
    border-radius: ${Radius["none"]};
`;

export const slidePlaceholderImage = css`
    width: 60vw;
    height: auto;
    max-height: 100%;
    border-radius: ${Radius["none"]};
    aspect-ratio: 4 / 3;
`;

export const boxChip = css`
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

export const chip = css`
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

export const thumbnailContainer = css`
    /* Reset variable to prevent leaking to child components */
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

export const thumbnailWrapper = css`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    gap: ${Spacing["spacing-16"]};
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
`;

export const thumbnailItemContainer = css`
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

export const thumbnailItem = css`
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

export const thumbnailImage = css`
    height: 100%;
    width: 100%;
`;

// -----------------------------------------------------------------------------
// FILE INFO BAR STYLING
// -----------------------------------------------------------------------------

export const fileInfoTextWrapper = css`
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

export const fileInfoFileName = css`
    color: ${Colour["text-inverse"]};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    min-width: 0;
`;

export const fileInfoFileSize = css`
    color: ${Colour["text-inverse"]};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    min-width: 0;
`;
