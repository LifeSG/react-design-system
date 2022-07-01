import { TextStyleHelper } from "src/components/text/helper";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const OptionContainer = styled.div`
    display: flex;
    :not(:last-of-type) {
        margin-bottom: 1rem;
    }
`;

export const Label = styled.label`
    ${TextStyleHelper.getTextStyle("Body", "regular")}
    margin-left: 1rem;
`;
