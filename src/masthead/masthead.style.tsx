import styled from "styled-components";
import { v2_MediaQuery } from "../v2_media";

export const Wrapper = styled.div`
    background: hsl(0, 0%, 94%);
    padding: 0 0.5rem;

    ${v2_MediaQuery.MaxWidth.mobileL} {
        padding: 0;
    }
`;
