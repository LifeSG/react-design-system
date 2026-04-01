import styled from "styled-components";

import { BasicInput, InputWrapper } from "../shared/input-wrapper";
import { V3_Spacing } from "../v3_theme";

// =============================================================================
// STYLING
// =============================================================================
export const Wrapper = styled.div`
    position: relative;
`;

export const TimeContainer = styled(InputWrapper)`
    height: 3rem;
    gap: ${V3_Spacing["spacing-8"]};
`;

export const SelectorInput = styled(BasicInput)`
    display: block;
    width: 100%;
    flex: 1;
`;
