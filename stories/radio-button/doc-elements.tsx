import { Font } from "src/theme";
import styled from "styled-components";

// =============================================================================
// STYLING
// =============================================================================
export const OptionContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;

    :not(:last-of-type) {
        margin-bottom: 0.5rem;
    }
`;

export const Label = styled.label`
    ${Font["body-baseline-regular"]}
    cursor: pointer;
`;
