import { Font } from "src/theme";
import styled from "styled-components";

// =============================================================================
// STYLING
// =============================================================================
export const SubOptionContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;

    margin-left: 2rem;
`;

export const Label = styled.label`
    ${Font["body-baseline-regular"]}
`;
