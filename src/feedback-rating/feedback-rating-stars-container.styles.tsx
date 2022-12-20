import { Color } from "src/color";
import styled from "styled-components";

export const Input = styled.input`
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
`;

export const Img = styled.img`
    pointer-events: none;
`;

export const Label = styled.label`
    margin: 0rem 1rem;
    padding: 0rem;
    @media screen and (max-width: 38rem) {
        margin: 0rem 0.5rem;
    }
`;

export const SVG = styled.svg`
    height: 2rem;
    width: 2rem;
    color: ${Color.Primary};
`;

export const Container = styled.div`
    display: flex;
    justify-content: center;
    height: 2rem;
    margin: 1rem;
`;
