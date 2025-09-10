import styled from "styled-components";
import { Button } from "../button";
import { Input } from "../input";
import { MediaQuery, Spacing } from "../theme";
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
    margin-bottom: 0rem !important;

    input {
        text-align: center;

        ${MediaQuery.MaxWidth.xs} {
            padding: 0 ${Spacing["spacing-8"]};
        }
    }
`;

export const CTAButton = styled(Button.Small)`
    margin: ${Spacing["spacing-32"]} 0;
`;

export const Prefix = styled(Typography.HeadingSM)`
    flex-shrink: 0;
`;
