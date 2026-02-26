import { TickIcon } from "@lifesg/react-icons/tick";
import { V3_Colour } from "src/v3_theme";
import styled from "styled-components";

export const ImageWrapper = styled.div`
    display: flex;
    border-radius: 4px;
    border: 1px solid black;
    overflow: hidden;
    align-items: center;
`;

export const Image = styled.img`
    height: 40px;
    width: 184px;
`;

export const ImageWrapperSelected = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
`;

export const Checkmark = styled(TickIcon)`
    height: 32px;
    width: 32px;
    color: ${V3_Colour["icon-primary"]};
`;
