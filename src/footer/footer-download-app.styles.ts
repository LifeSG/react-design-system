import { css } from "@linaria/core";

import { ComponentToken, MediaQuery, Spacing } from "../theme";

export const wrapper = css`
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    ${MediaQuery.MaxWidth.lg} {
        justify-content: flex-start;
        padding: 0;
    }
`;

export const label = css`
    margin-bottom: ${Spacing["spacing-16"]};
    color: ${ComponentToken.Footer["colour-text"]};
    font-weight: 600;
    font-size: 1rem;
    line-height: 1.5rem;
`;

export const appButtonsWrapper = css`
    display: flex;
    flex-wrap: wrap;
    row-gap: ${Spacing["spacing-16"]};
    column-gap: ${Spacing["spacing-16"]};
`;

export const appStoreLink = css`
    img {
        width: auto;
        height: 3.75rem;
        object-fit: contain;
        display: block;
    }

    ${MediaQuery.MaxWidth.lg} {
        img {
            height: 3rem;
            width: 100%;
        }
    }
`;
