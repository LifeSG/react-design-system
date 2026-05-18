import { css } from "@linaria/core";

import { Spacing } from "../theme";

export const MOBILE_WRAP_WIDTH = 320;

// =============================================================================
// STYLING
// =============================================================================
export const containerWrap = css`
    padding: ${Spacing["spacing-12"]} ${Spacing["spacing-16"]};
`;

export const containerWrapReadOnly = css`
    padding: ${Spacing["spacing-12"]} 0;
`;

export const inputContainer = css`
    display: flex;
    align-items: center;
    height: calc(3rem - 2px); /* exclude top and bottom borders */
    width: 100%;
`;

export const inputContainerWrap = css`
    height: fit-content;
`;
