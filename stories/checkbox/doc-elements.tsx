import styled from "styled-components";

// =============================================================================
// STYLING
// =============================================================================
export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, min-content);
    gap: 0.5rem 1.5rem;
`;

export const Row = styled.div`
    display: contents;
    margin-bottom: 4rem;
`;

export const SubOption = styled.div`
    display: flex;
    margin-left: 2rem;
    align-items: center;
    gap: 0.5rem;
`;
