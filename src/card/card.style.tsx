import styled, { css } from "styled-components";
import { Border, Colour, Radius, Spacing } from "../theme";

// =============================================================================
// STYLING
// =============================================================================
export const StyledCard = styled.div`
    border-radius: ${Radius["md"]};
    background: ${Colour.bg};
    padding: ${Spacing["spacing-16"]} ${Spacing["spacing-32"]};
    border: ${Border["width-010"]} ${Border["solid"]} ${Colour["border"]};
    ${(props) => {
        return (
            props.theme?.colourMode !== "dark" &&
            css`
                box-shadow: 0 2px 8px 0
                    rgba(from ${Colour.Primitive["neutral-50"]} r g b / 16%);
            `
        );
    }}
`;
