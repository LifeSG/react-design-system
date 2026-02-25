import styled from "styled-components";
import { ClearButton } from "../input/input.style";
import { Spacing } from "../v3_theme";
import { InputWrapper } from "../shared/input-wrapper";

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
