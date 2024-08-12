import styled from "styled-components";
import { V2_MediaQuery } from "../v2_media";

export const Wrapper = styled.div`
    background: hsl(0, 0%, 94%);
    padding: 0 0.5rem;

    ${V2_MediaQuery.MaxWidth.mobileL} {
        padding: 0;
    }
`;
