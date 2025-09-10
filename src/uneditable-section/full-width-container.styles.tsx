import styled from "styled-components";
import { Colour } from "../theme";

interface StyledContainerProps {
    $background: boolean;
}

export const StyledContainer = styled.div<StyledContainerProps>`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    margin: 0 auto;
    position: relative;
    width: auto;
    height: auto;
    background: ${({ $background }) =>
        $background ? Colour["bg-strong"] : "transparent"};
`;
