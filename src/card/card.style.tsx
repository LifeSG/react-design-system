import { Color } from "src/color";
import styled from "styled-components";

// =============================================================================
// STYLING
// =============================================================================
export const StyledCard = styled.div`
    border-radius: 8px;
    background: ${Color.Neutral[8]};
    padding: 1rem 2rem;
    box-shadow: 0 2px 8px 0 rgba(104, 104, 104, 0.24);
`;
