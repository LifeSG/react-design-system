import styled from "styled-components";
import { v2_MediaQuery } from "../v2_media/media";

export const Wrapper = styled.div`
    min-width: 18.5rem;

    [data-id="calendar-header"] {
        ${v2_MediaQuery.MaxWidth.mobileL} {
            padding: 0 1.25rem;
        }
    }
`;
