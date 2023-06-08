import styled from "styled-components";

// =============================================================================
// STYLING
// =============================================================================
export const Container = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;

    label {
        min-width: 5rem;
    }

    button {
        flex-direction: row;
        margin-left: 1rem;
    }

    span:nth-of-type(1) {
        margin-left: 6rem;
    }
    span:nth-of-type(2) {
        margin-left: 1.5rem;
    }
    span:nth-of-type(3) {
        margin-left: 0.5rem;
    }
    span:nth-of-type(4) {
        margin-left: 2.5rem;
    }
`;

export const Container2 = styled(Container)`
    button:not(:nth-of-type(1)) {
        margin-left: 2rem;
    }
`;

export const Container3 = styled(Container)`
    button:not(:nth-of-type(1)) {
        margin-left: 2.5rem;
    }
`;
