import styled, { css } from "styled-components";
import { Border, Colour, Radius, Shadow, Spacing } from "../theme";

// =============================================================================
// STYLING
// =============================================================================
export const StyledCard = styled.div`
    border-radius: ${Radius["md"]};
    background: ${Colour.bg};
    padding: ${Spacing["spacing-16"]} ${Spacing["spacing-32"]};
    ${(props) => {
        return props.theme?.colourMode === "dark"
            ? css`
                  border: ${Border["width-010"]} ${Border["solid"]}
                      ${Colour["border"]};
              `
            : css`
                  box-shadow: ${Shadow["md-subtle"]};
              `;
    }}
`;
