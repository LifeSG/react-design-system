import { Color } from "../color";
import { Icon } from "../icon";
import styled from "styled-components";

export const Input = styled.input`
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
`;

export const StarIcon = styled(Icon)`
    width: 2rem;
    height: 2rem;
    ${Input}:focus-visible + & {
        outline: 0.125rem solid ${Color.Primary};
        outline-offset: -0.0625rem;
        border-radius: 0.25rem;
    }
`;

export const Label = styled.label`
    margin: 0 1rem;
    line-height: 0;
    @media screen and (max-width: 38rem) {
        margin: 0 0.5rem;
    }
`;

export const Container = styled.div`
    display: flex;
    justify-content: center;
    margin: 1rem;
`;
