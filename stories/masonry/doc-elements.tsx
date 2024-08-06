import styled from "styled-components";
import { v2_Color } from "../../src/v2_color";
import { TextStyleHelper } from "../../src/text";

export const DemoContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    background: ${v2_Color.Accent.Light[3]};
    height: 6rem;

    ${TextStyleHelper.getTextStyle("Body", "semibold")}
    text-align: center;
`;
