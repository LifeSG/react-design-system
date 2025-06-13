import styled from "styled-components";

// =============================================================================
// STYLING
// =============================================================================
export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;

    :not(:last-child) {
        margin-bottom: 1.5rem;
    }

    button {
        flex: 0 fit-content;
    }
`;
