import styled from "styled-components";
import { v2_Color } from "../v2_color/color";

// =============================================================================
// STYLING
// =============================================================================
export const StyledCard = styled.div`
    border-radius: 0.5rem;
    background: ${v2_Color.Neutral[8]};
    padding: 1rem 2rem;
    box-shadow: 0 0.125rem 0.5rem rgba(104, 104, 104, 0.25);
`;
