import styled from "styled-components";
import { V2_MediaQuery } from "../../src/v2_media";

export const Wrapper = styled.div`
    width: 70%;
    margin: auto;

    ${V2_MediaQuery.MaxWidth.mobileL} {
        width: 100%;
    }
`;
