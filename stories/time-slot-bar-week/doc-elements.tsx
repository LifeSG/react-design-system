import styled from "styled-components";
import { MediaQuery } from "../../src/media";

export const Wrapper = styled.div`
    width: 70%;
    margin: auto;

    ${MediaQuery.MaxWidth.mobileL} {
        width: 100%;
    }
`;
