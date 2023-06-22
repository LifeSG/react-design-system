import styled from "styled-components";
import { InputWrapper } from "../shared/input-wrapper/input-wrapper";

export const MOBILE_WRAP_WIDTH = 374;

export const Container = styled(InputWrapper)`
    @media screen and (max-width: ${MOBILE_WRAP_WIDTH}px) {
        padding: 0.75rem 1rem;
    }
`;

export const InputContainer = styled.div`
    display: flex;
    align-items: center;
    height: calc(3rem - 2px); // exclude top and bottom borders
    width: 100%;

    @media screen and (max-width: ${MOBILE_WRAP_WIDTH}px) {
        height: fit-content;
    }
`;
