import { TickIcon } from "@lifesg/react-icons/tick";
import styled from "styled-components";
import { Color } from "../../../src/color";

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
    color: ${Color.Primary};
`;

export const CustomCTAContainer = styled.div`
    margin: 0 0.5rem;
    border-top: 1px solid ${Color.Neutral[4]};
    padding: 1rem 0.5rem;
`;
