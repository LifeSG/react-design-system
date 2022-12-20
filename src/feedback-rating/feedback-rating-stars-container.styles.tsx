import { Icon } from "src/icon";
import styled from "styled-components";

export const StarIcon = styled(Icon)`
    width: 2rem;
    height: 2rem;
`;

export const Input = styled.input`
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
`;

export const Label = styled.label`
    margin: 0rem 1rem;
    padding: 0rem;
    @media screen and (max-width: 38rem) {
        margin: 0rem 0.5rem;
    }
`;

export const Container = styled.div`
    display: flex;
    justify-content: center;
    height: 2rem;
    margin: 1rem;
`;
