import styled from "styled-components";

import { ClearButton } from "../input/input.style";
import { InputWrapper } from "../shared/input-wrapper";
import { V3_Spacing } from "../v3_theme";

// =============================================================================
// STYLING
// =============================================================================
export const ClearIconContainer = styled(ClearButton)`
    position: absolute;
    right: 0;
    padding-left: ${V3_Spacing["spacing-8"]};
    margin-right: 0;
`;

export const StyledInputWrapper = styled(InputWrapper)`
    height: 3rem;
`;
