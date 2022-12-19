import { MediaQuery } from "src/media";
import styled from "styled-components";

export const Img = styled.img`
    pointer-events: none;
`;

export const Button = styled.button`
    background: transparent;
    border: none;
    margin: 0rem 1rem;
    padding: 0rem;
    ${MediaQuery.MaxWidth.mobileL} {
        margin: 0rem 0.5rem;
    }
`;

export const Ul = styled.ul`
    display: flex;
    justify-content: center;
    height: 2rem;
    margin: 1rem;
`;
