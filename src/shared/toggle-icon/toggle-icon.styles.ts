import { css } from "@linaria/core";

import { Colour } from "../../theme";

// =============================================================================
// STYLING
// =============================================================================
export const WrapperBase = css`
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

export const WrapperDisabled = css`
    color: ${Colour["icon-disabled-subtle"]};
`;

export const WrapperActive = css`
    color: ${Colour["icon-selected"]};
`;

export const WrapperActiveDisabled = css`
    color: ${Colour["icon-selected-disabled"]};
`;
