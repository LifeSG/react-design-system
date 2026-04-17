import { css } from "@linaria/core";

import { Colour } from "../theme";

// =============================================================================
// STYLING
// =============================================================================
export const wrapperBase = css`
    height: 1.625rem;
    width: 1.625rem;
    margin-right: 0.5rem;
    flex-shrink: 0;
    color: ${Colour["icon-subtle"]};

    svg {
        height: 100%;
        width: 100%;
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
