import styled from "styled-components";
import { Button } from "../button";
import { Input } from "../input";
import { Spacing } from "../theme";
import { Typography } from "../typography";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-self: center;
    align-items: center;
    gap: ${Spacing["spacing-8"]};
`;

export const InputField = styled(Input)`
    min-width: 20px;
    margin-bottom: 0rem !important;

    input {
        padding: 0;
        text-align: center;
    }
`;

export const CTAButton = styled(Button.Small)`
    margin: ${Spacing["spacing-32"]} 0;
`;

export const Prefix = styled(Typography.BodyBL)`
    flex-shrink: 0;
`;
