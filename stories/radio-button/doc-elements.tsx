import styled from "styled-components";
import { v2_TextStyleHelper } from "src/v2_text";

// =============================================================================
// STYLING
// =============================================================================
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
    ${v2_TextStyleHelper.getTextStyle("Body", "regular")}
    margin-left: 1rem;
`;
