import styled from "styled-components";
import { Border, Colour, Radius, Spacing } from "../theme";

// =============================================================================
// STYLING
// =============================================================================
export const StyledCard = styled.div`
    border-radius: ${Radius["md"]};
    background: ${Colour.bg};
    padding: ${Spacing["spacing-16"]} ${Spacing["spacing-32"]};
    box-shadow: 0 2px 8px rgb(from ${Colour["bg-inverse-subtle"]} r g b / 16%);
    border: ${Border["width-010"]} ${Border["solid"]} ${Colour["border"]};
`;
