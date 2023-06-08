import styled from "styled-components";

// =============================================================================
// STYLING
// =============================================================================
export const Container = styled.div`
    align-items: flex-start;
    display: grid;
    justify-content: flex-start;
    margin-right: 1rem;

    button {
        margin: 1rem 0;
    }

    span {
        margin-bottom: 3.5rem;
    }
`;
export const ContainerWrapper = styled(Container)`
    display: flex;
`;
