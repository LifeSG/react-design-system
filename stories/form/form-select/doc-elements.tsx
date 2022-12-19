import styled from "styled-components";
import { Icon } from "../../../src/icon/icon";

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

export const Checkmark = styled(Icon)`
    height: 32px;
    width: 32px;
`;
