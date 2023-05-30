import styled from "styled-components";
import { MediaQuery } from "../media/media";

export const Wrapper = styled.div`
    min-width: 18.5rem;
    [data-id="calendar-container"] {
        padding: 1.5rem 1.25rem;
        display: flex;
        padding: 0;
        border: none;
    }

    [data-id="calendar-header"] {
        display: flex;
        justify-content: space-between;
        margin-bottom: 0;
        padding: 0;
        ${MediaQuery.MaxWidth.mobileL} {
            padding: 0 1.25rem;
        }
    }
`;
