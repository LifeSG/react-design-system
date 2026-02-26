import { V3_Colour, V3_Font } from "src/v3_theme";
import styled from "styled-components";

// =============================================================================
// STYLING
// =============================================================================
export const SubOption = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;

    margin-left: 2rem;
`;

export const Label = styled.label`
    ${V3_Font["body-baseline-regular"]}
    color: ${V3_Colour.text};
    cursor: pointer;
`;

export const SelectAll = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`;
