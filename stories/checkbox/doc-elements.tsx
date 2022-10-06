import styled from "styled-components";

// =============================================================================
// STYLING
// =============================================================================
export const Container = styled.div`
    display: flex;

    div {
        :not(:last-of-type) {
            margin-right: 1.5rem;
        }
    }
`;
