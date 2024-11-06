import styled from "styled-components";
import { MediaQuery } from "../theme";

export const Wrapper = styled.div`
    min-width: 18.5rem;

    [data-id="calendar-header"] {
        ${MediaQuery.MaxWidth.sm} {
            padding: 0 1.25rem;
        }
    }
`;
