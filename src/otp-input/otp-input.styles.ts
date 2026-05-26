import { css } from "@linaria/core";

import { Spacing } from "../theme";

export const wrapper = css`
    display: flex;
    flex-direction: column;
`;

export const inputContainer = css`
    display: flex;
    flex-direction: row;
    align-self: center;
    align-items: center;
    gap: ${Spacing["spacing-8"]};
`;

export const inputField = css`
    input {
        padding: 0;
        text-align: center;
    }
`;

export const ctaButton = css`
    margin: ${Spacing["spacing-32"]} 0;
`;

export const prefix = css`
    flex-shrink: 0;
`;
