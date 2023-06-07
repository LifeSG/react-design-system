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

export const SubTitle = styled.span`
    margin-left: 6.5rem;
`;
export const SubTitleDefault = styled.span`
    margin-left: 2rem;
`;
export const SubTitleSmall = styled.span`
    margin-left: 1rem;
`;
