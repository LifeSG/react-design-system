import styled from "styled-components";

// =============================================================================
// STYLING
// =============================================================================
export const Container = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;

    div {
        min-width: 5rem;
    }

    button {
        flex-direction: row;
        margin-left: 1rem;
        height: auto;
    }
`;
