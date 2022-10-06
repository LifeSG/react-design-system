import styled from "styled-components";
import { Color } from "../../src/color";
import { TextStyleHelper } from "../../src/text";

export const DemoContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    background: ${Color.Accent.Light[3]};
    height: 6rem;

    ${TextStyleHelper.getTextStyle("Body", "semibold")}
    text-align: center;
`;
