import styled from "styled-components";
import { MediaQuery } from "../media/media";

export const Wrapper = styled.div`
    [data-id="calendar-container"] {
        padding: 1.5rem 1.25rem;
        display: flex;
        padding: 0rem;
        border: none;
    }

    [data-id="calendar-header"] {
        display: flex;
        justify-content: space-between;
        margin-bottom: 0rem;
        padding: 0rem;
        ${MediaQuery.MaxWidth.mobileL} {
            padding: 0 1.25rem;
        }
    }
`;
