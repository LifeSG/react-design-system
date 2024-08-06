import styled from "styled-components";
import { v2_MediaQuery } from "../../src/v2_media";

export const Wrapper = styled.div`
    width: 70%;
    margin: auto;

    ${v2_MediaQuery.MaxWidth.mobileL} {
        width: 100%;
    }
`;
