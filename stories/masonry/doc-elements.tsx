import styled from "styled-components";
import { V2_Color } from "../../src/v2_color";
import { V2_TextStyleHelper } from "../../src/v2_text";

export const DemoContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    background: ${V2_Color.Accent.Light[3]};
    height: 6rem;

    ${V2_TextStyleHelper.getTextStyle("Body", "semibold")}
    text-align: center;
`;
