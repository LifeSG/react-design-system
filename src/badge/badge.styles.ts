import styled from "styled-components";

import { Border, Colour, Font, Radius } from "../theme";

// =============================================================================
// STYLE TOKENS
// =============================================================================
export const tokens = {
    wrapper: {
        offsetX: "--fds-internal-badge-wrapper-offsetX",
        offsetY: "--fds-internal-badge-wrapper-offsetY",
    },
};

// =============================================================================
// STYLING
// =============================================================================
const numberBadgeStyles = `
    min-width: 1.25rem;
    padding: 0.25rem 0.375rem;
    ${Font["body-xs-bold"]}
    line-height: 1;
`;

const dotBadgeStyles = `
    border-radius: 50%;
    width: 0.5rem;
    height: 0.5rem;
`;

export const BadgeOverlay = styled.div`
    &.badgeOverlayIsOverlay {
        position: relative;
        width: fit-content;
        height: fit-content;
    }
`;

export const BadgeWrapper = styled.div`
    &.badgeWrapperIsOverlay {
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(50%, -25%)
            translate(
                var(${tokens.wrapper.offsetX}, 0px),
                var(${tokens.wrapper.offsetY}, 0px)
            );
    }
`;

export const StyledBadge = styled.div`
    background-color: ${Colour["bg-primary"]};
    color: ${Colour["text-inverse"]};
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;

    &.styledBadgeImportantColor {
        background-color: ${Colour["icon-error"]};
    }

    &.styledBadgeNumber {
        ${numberBadgeStyles}
        border-radius: ${Radius.full};
    }

    &.styledBadgeNumberWithBorder {
        ${numberBadgeStyles}
        border-radius: ${Radius.full};
        box-shadow: 0 0 0 ${Border["width-020"]} ${Colour.bg};
    }

    &.styledBadgeDot {
        ${dotBadgeStyles}
    }

    &.styledBadgeDotWithBorder {
        ${dotBadgeStyles}
        box-shadow: 0 0 0 ${Border["width-020"]} ${Colour.bg};
    }

    &.styledBadgeSquareNumber {
        ${numberBadgeStyles}
        border-radius: ${Radius.sm};
        padding: 0.25rem 0.4375rem;
    }

    &.styledBadgeSquareNumberDefaultColor {
        background-color: ${Colour["bg-primary-subtler"]};
        color: ${Colour["text-primary"]};
    }
`;
