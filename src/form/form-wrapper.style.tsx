import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    &:not(:last-child) {
        margin-bottom: 2rem;
    }
`;
