import { css } from "@linaria/core";

import { Colour } from "../theme";

// =============================================================================
// STYLING
// =============================================================================
export const wrapperBase = css`
    flex-shrink: 0;
    width: 1.625rem;
    height: 1.625rem;
    margin-right: 0.5rem;
    color: ${Colour["icon-subtle"]};

    svg {
        width: 100%;
        height: 100%;
    }
`;

export const wrapperDisabled = css`
    color: ${Colour["icon-disabled-subtle"]};
`;

export const wrapperActive = css`
    color: ${Colour["icon-selected"]};
`;

export const wrapperActiveDisabled = css`
    color: ${Colour["icon-selected-disabled"]};
`;
