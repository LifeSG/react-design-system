import { css } from "@linaria/core";

import { Spacing } from "../theme";

// =============================================================================
// STYLING
// =============================================================================
export const wrapper = css`
    position: relative;
`;

export const timeContainer = css`
    height: 3rem;
    gap: ${Spacing["spacing-8"]};
`;

export const selectorInput = css`
    display: block;
    width: 100%;
    flex: 1;
`;
