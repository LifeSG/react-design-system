import { css } from "@linaria/core";

import { Border, Colour, Font, Radius } from "../theme";

export const tokens = {
    wrapper: {
        offsetX: "--fds-internal-badge-wrapper-offsetX",
        offsetY: "--fds-internal-badge-wrapper-offsetY",
    },
};

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

export const badgeOverlay = css`
    position: relative;
    width: fit-content;
    height: fit-content;
`;

export const badgeWrapper = css``;

export const badgeWrapperIsOverlay = css`
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(50%, -25%)
        translate(
            var(${tokens.wrapper.offsetX}, 0px),
            var(${tokens.wrapper.offsetY}, 0px)
        );
`;

export const badge = css`
    background-color: ${Colour["bg-primary"]};
    color: ${Colour["text-inverse"]};
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
`;

export const badgeImportantColor = css`
    background-color: ${Colour["icon-error"]};
`;

export const badgeNumber = css`
    ${numberBadgeStyles}
    border-radius: ${Radius.full};
`;

export const badgeNumberWithBorder = css`
    ${numberBadgeStyles}
    border-radius: ${Radius.full};
    box-shadow: 0 0 0 ${Border["width-020"]} ${Colour.bg};
`;

export const badgeDot = css`
    ${dotBadgeStyles}
`;

export const badgeDotWithBorder = css`
    ${dotBadgeStyles}
    box-shadow: 0 0 0 ${Border["width-020"]} ${Colour.bg};
`;

export const badgeSquareNumber = css`
    ${numberBadgeStyles}
    border-radius: ${Radius.sm};
    padding: 0.25rem 0.4375rem;
`;

export const badgeSquareNumberDefaultColor = css`
    background-color: ${Colour["bg-primary-subtler"]};
    color: ${Colour["text-primary"]};
`;
