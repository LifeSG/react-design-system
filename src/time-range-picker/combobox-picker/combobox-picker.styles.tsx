import styled from "styled-components";
import { InputWrapper } from "../../shared/input-wrapper/input-wrapper";
import { Spacing } from "@/theme";

// =============================================================================
// STYLING
// =============================================================================
export const TimeFieldContainer = styled(InputWrapper)`
    height: 3rem;
    gap: ${Spacing["spacing-8"]};
    // space for clear icon
    padding-right: calc(1.25rem + ${Spacing["spacing-20"]});
`;
