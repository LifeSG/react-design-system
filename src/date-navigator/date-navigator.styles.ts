import { css } from "@linaria/core";

import { Colour, Font, Radius, Spacing } from "../theme";

export const container = css`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    background-color: ${Colour["bg-strong"]};
    border-radius: ${Radius["sm"]};
`;

export const headerArrowButton = css`
    margin: ${Spacing["spacing-8"]};
`;

export const headerArrowButtonIcon = css`
    color: ${Colour["icon"]};
`;

export const dateTextButton = css`
    ${Font["body-baseline-semibold"]}
    color: ${Colour["text"]};
    cursor: default;

    &:not(:disabled) {
        color: ${Colour["text-primary"]};
    }

    &:not(:disabled):hover,
    &:not(:disabled):focus {
        outline: none;
        cursor: pointer;
        text-decoration: underline;
        text-underline-position: under;
    }
`;
