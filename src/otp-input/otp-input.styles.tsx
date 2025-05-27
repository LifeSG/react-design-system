import styled from "styled-components";
import { Button } from "../button";
import { Input } from "../input";
import { MediaQuery, Spacing } from "@/theme";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-self: center;
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
