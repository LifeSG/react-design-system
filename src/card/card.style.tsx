import styled, { css } from "styled-components";
import {
    V3_Border,
    V3_Colour,
    V3_Radius,
    V3_Shadow,
    V3_Spacing,
} from "../v3_theme";

// =============================================================================
// STYLING
// =============================================================================
export const StyledCard = styled.div`
    border-radius: ${V3_Radius["md"]};
    background: ${V3_Colour.bg};
    padding: ${V3_Spacing["spacing-16"]} ${V3_Spacing["spacing-32"]};
    ${(props) => {
        return props.theme?.colourMode === "dark"
            ? css`
                  border: ${V3_Border["width-010"]} ${V3_Border["solid"]}
                      ${V3_Colour["border"]};
              `
            : css`
                  box-shadow: ${V3_Shadow["md-subtle"]};
              `;
    }}
`;
