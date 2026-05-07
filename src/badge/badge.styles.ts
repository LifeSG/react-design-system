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
    transform: translate(50%, -25%) translate(var(${tokens.wrapper.offsetX}, 0), var(${tokens.wrapper.offsetY}, 0));
`;

export const badge = css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
    color: ${Colour["text-inverse"]};
    background-color: ${Colour["bg-primary"]};

    &[data-variant="number"] {
        ${numberBadgeStyles}
        border-radius: ${Radius.full};
    }

    &[data-variant="number-with-border"] {
        ${numberBadgeStyles}
        border-radius: ${Radius.full};
        box-shadow: 0 0 0 ${Border["width-020"]} ${Colour.bg};
    }

    &[data-variant="dot"] {
        ${dotBadgeStyles}
    }

    &[data-variant="dot-with-border"] {
        ${dotBadgeStyles}
        box-shadow: 0 0 0 ${Border["width-020"]} ${Colour.bg};
    }

    &[data-variant="square-number"] {
        padding: 0.25rem 0.4375rem;
        ${numberBadgeStyles}
        border-radius: ${Radius.sm};
    }

    &[data-variant="square-number"][data-color="default"] {
        color: ${Colour["text-primary"]};
        background-color: ${Colour["bg-primary-subtler"]};
    }

    &[data-color="important"] {
        background-color: ${Colour["icon-error"]};
    }
`;
