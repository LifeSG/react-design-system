import styled from "styled-components";
import { Button } from "../button";
import { Input } from "../input";
import { V2_MediaQuery } from "../v2_media";

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
    input[type="text"] {
        text-align: center;
        -moz-appearance: textfield;
    }

    ${V2_MediaQuery.MaxWidth.mobileM} {
        padding: 0 0.5rem;
    }
`;

export const CTAButton = styled(Button.Small)`
    margin: 2rem 0rem;
`;
