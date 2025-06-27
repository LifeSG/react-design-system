import styled from "styled-components";
import { Colour, Radius, Spacing } from "../theme";

// =============================================================================
// STYLING
// =============================================================================
export const StyledCard = styled.div`
    border-radius: ${Radius["md"]};
    background: ${Colour.bg};
    padding: ${Spacing["spacing-16"]} ${Spacing["spacing-32"]};
    box-shadow: 0 2px 8px rgba(104, 104, 104, 0.25);
`;
