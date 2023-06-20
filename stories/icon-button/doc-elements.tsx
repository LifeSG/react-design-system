import styled from "styled-components";

// =============================================================================
// STYLING
// =============================================================================

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(5, min-content);
    gap: 1.5rem;
    align-items: center;
    justify-items: center;
    overflow-x: auto;
    padding-bottom: 1rem;
    margin: auto;
`;

export const Row = styled.div`
    display: contents;
`;