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
    }
    button:nth-of-type(1) {
        margin-left: 1rem;
    }
    button:nth-of-type(2) {
        margin-left: 1rem;
    }

    button:nth-of-type(3) {
        margin-left: 1.5rem;
    }

    button:nth-of-type(4) {
        margin-left: 1rem;
    }
`;
export const ContainerRow2 = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;

    div {
        min-width: 5rem;
    }

    button {
        flex-direction: row;
    }
    button:nth-of-type(1) {
        margin-left: 1rem;
    }
    button:nth-of-type(2) {
        margin-left: 2rem;
    }

    button:nth-of-type(3) {
        margin-left: 2.5rem;
    }

    button:nth-of-type(4) {
        margin-left: 2rem;
    }
`;

export const ContainerRow3 = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;

    div {
        min-width: 5rem;
    }

    button {
        flex-direction: row;
    }
    button:nth-of-type(1) {
        margin-left: 1rem;
    }
    button:nth-of-type(2) {
        margin-left: 2.5rem;
    }

    button:nth-of-type(3) {
        margin-left: 3rem;
    }

    button:nth-of-type(4) {
        margin-left: 2.5rem;
    }
`;

export const SubTitle = styled.span`
    margin-left: 6.5rem;
`;
export const SubTitleDefault = styled.span`
    margin-left: 1rem;
`;
export const SubTitleSmall = styled.span`
    margin-left: 1rem;
`;
export const SubTitleDisabled = styled.span`
    margin-left: 3rem;
`;
