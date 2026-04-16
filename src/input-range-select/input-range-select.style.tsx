import { css } from "@linaria/core";
import styled from "styled-components";

import { ClearButton } from "../input/input.style";
import { InputWrapper } from "../shared/input-wrapper";
import { V3_Colour, V3_Spacing } from "../v3_theme";

// =============================================================================
// STYLING
// =============================================================================
export const wrapper = css`
    position: relative;
    width: 100%;
    min-height: 3rem;
    height: 3rem; // Need this to persist the height when expanding or collapsing list

    &[data-variant="small"] {
        min-height: 2.5rem;
        height: 2.5rem;
    }
`;

export const ClearIconContainer = styled(ClearButton)`
    position: absolute;
    right: 0;
    padding-left: ${V3_Spacing["spacing-8"]};
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
    color: ${V3_Colour.text};

    &:focus,
    &:active {
        outline: none;
    }

    &:focus-visible {
        outline: 2px solid ${V3_Colour["border-focus"]};
        border-radius: 4px;
    }

    &:disabled {
        cursor: not-allowed;
    }
`;
