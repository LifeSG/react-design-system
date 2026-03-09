import styled from "styled-components";
import { ClearButton } from "../input/input.style";
import { InputWrapper } from "../shared/input-wrapper";
import { Colour, Spacing } from "../theme";

// =============================================================================
// STYLING
// =============================================================================
export const ClearIconContainer = styled(ClearButton)`
    position: absolute;
    right: 0;
    padding-left: ${Spacing["spacing-8"]};
    margin-right: 0;
`;

export const StyledInputWrapper = styled(InputWrapper)`
    height: 3rem;
`;

export const RangeSelectorButton = styled.button`
    appearance: none;
    border: 0;
    background: transparent;
    display: flex;
    flex: 1;

    &:focus,
    &:active {
        outline: none;
    }

    &:focus-visible {
        outline: 2px solid ${Colour["border-focus"]};
        border-radius: 4px;
    }

    &:disabled {
        cursor: not-allowed;
    }
`;
