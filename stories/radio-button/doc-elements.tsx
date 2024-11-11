import styled from "styled-components";
import { Font } from "../../src";

// =============================================================================
// STYLING
// =============================================================================
export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`;

export const OptionContainer = styled.div`
    display: flex;
    :not(:last-of-type) {
        margin-bottom: 1rem;
    }
`;

export const Label = styled.label`
    ${Font["body-baseline-regular"]}
    margin-left: 1rem;
`;
