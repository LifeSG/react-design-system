import styled from "styled-components";
import { MediaQuery } from "../media/media";

export const Wrapper = styled.div`
    min-width: 18.5rem;

    [data-id="calendar-header"] {
        ${MediaQuery.MaxWidth.mobileL} {
            padding: 0 1.25rem;
        }
    }
`;
