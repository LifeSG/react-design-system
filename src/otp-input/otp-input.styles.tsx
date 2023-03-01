import styled from "styled-components";
import { Input } from "src/input";
import { Text } from "src/text";
import { Color } from "src/color";
import { Button } from "src/button";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-self: center;
    gap: 0.5rem;
`;

export const InputField = styled(Input)`
    margin-bottom: 0rem !important;
    text-align: center;
    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    /* Firefox */
    input[type="number"] {
        text-align: center;
        -moz-appearance: textfield;
    }
`;

export const ErrorContainer = styled(Text.H6)`
    color: ${Color.Validation.Red.Text};
    margin-top: 0.5rem;
`;

export const CTAButton = styled(Button.Small)`
    margin: 2rem 0rem;
`;
