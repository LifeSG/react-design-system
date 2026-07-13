import { css } from "@linaria/core";

import { Colour } from "../theme";

// =============================================================================
// STYLING
// =============================================================================
export const inputSelectorElement = css`
    height: calc(3rem - 2px); /* exclude top and bottom borders */
    cursor: inherit;
`;

export const inputSelectorElementDisabled = css`
    color: ${Colour["text-subtler"]};
    cursor: not-allowed;
`;
