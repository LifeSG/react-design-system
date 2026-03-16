import styled from "styled-components";

import { InputWrapper } from "../../shared/input-wrapper/input-wrapper";
import { V3_Spacing } from "../../v3_theme";

// =============================================================================
// STYLING
// =============================================================================
export const TimeFieldContainer = styled(InputWrapper)`
    height: 3rem;
    gap: ${V3_Spacing["spacing-8"]};
    // space for clear icon
    padding-right: calc(1.25rem + ${V3_Spacing["spacing-20"]});
`;
