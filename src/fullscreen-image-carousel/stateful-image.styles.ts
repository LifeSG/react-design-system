import { css } from "@linaria/core";

export const tokens = {
    imageBox: {
        fit: "--fds-internal-fullscreenImageCarousel-statefulImage-imageBox-fit",
    },
};

export const imageWrapper = css`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const imageBox = css`
    /* Reset variable to prevent leaking to child components */
    ${tokens.imageBox.fit}: initial;

    height: 100%;
    width: 100%;
    object-fit: var(${tokens.imageBox.fit}, contain);
`;

export const defaultPlaceholder = css`
    width: 100%;
    height: 100%;
`;
