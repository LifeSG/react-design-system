import styled from "styled-components";

import { InputWrapper } from "../shared/input-wrapper";
import { Colour, Spacing } from "../theme";
import { V3_Colour, V3_Spacing } from "../v3_theme";

export const ClearIconContainer = styled.button`
    height: auto;
    padding: ${Spacing["spacing-12"]} ${Spacing["spacing-16"]};
    cursor: pointer;
    color: ${Colour.icon};

    /* Position styles */
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
