import styled from "styled-components";

// =============================================================================
// STYLING
// =============================================================================
export const Container = styled.ul`
    display: flex;

    li {
        :not(:last-child) {
            margin-right: 1.5rem;
        }
    }
`;
