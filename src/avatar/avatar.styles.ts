import { css } from "@linaria/core";

import { Colour } from "../theme";

// =============================================================================
// STYLING
// =============================================================================
export const avatarDisplay = css`
    border-radius: 50%;
    background-color: ${Colour["bg-primary-subtler"]};
    align-items: center;
    justify-content: center;
    display: flex;
`;

export const avatarDisplayDefault = css`
    width: 2.5rem;
    height: 2.5rem;
`;

export const avatarDisplaySmall = css`
    width: 1.5rem;
    height: 1.5rem;
`;

export const avatarBaselineText = css`
    color: ${Colour["text-primary"]};
`;
