import styled, { css } from "styled-components";

import { Colour } from "../../theme";

// =============================================================================
// STYLING
// =============================================================================
export const Wrapper = styled.div`
    height: 1.625rem;
    width: 1.625rem;
    margin-right: 0.5rem;
    flex-shrink: 0;

    svg {
        height: 100%;
        width: 100%;
    }

    &.wrapperActive {
        color: ${Colour["icon-selected"]};
    }

    &.wrapperActiveDisabled {
        color: ${Colour["icon-selected-disabled"]};
    }

    &.wrapperDisabled {
        color: ${Colour["icon-disabled-subtle"]};
    }
`;

export const basicWrapperColor = css`
    color: ${Colour["icon-subtle"]};
`;
