import styled from "styled-components";
import { v2_Color } from "../../src/v2_color";
import { v2_TextStyleHelper } from "../../src/v2_text";

export const DemoContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    background: ${v2_Color.Accent.Light[3]};
    height: 6rem;

    ${v2_TextStyleHelper.getTextStyle("Body", "semibold")}
    text-align: center;
`;
