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

export const SubTitle = styled.span`
    margin-left: 6rem;
`;
export const SubTitleDefault = styled.span`
    margin-left: 1.5rem;
`;
export const SubTitleSmall = styled.span`
    margin-left: 0.5rem;
`;
export const SubTitleDisabled = styled.span`
    margin-left: 2.5rem;
`;
