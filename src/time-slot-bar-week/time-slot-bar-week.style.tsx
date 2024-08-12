import styled from "styled-components";
import { V2_MediaQuery } from "../v2_media/media";

export const Wrapper = styled.div`
    min-width: 18.5rem;

    [data-id="calendar-header"] {
        ${V2_MediaQuery.MaxWidth.mobileL} {
            padding: 0 1.25rem;
        }
    }
`;
