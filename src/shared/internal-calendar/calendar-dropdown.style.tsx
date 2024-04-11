import styled from "styled-components";
import { MediaQuery } from "../../media";

export const CalendarWrapper = styled.div`
    max-width: 41rem;
    min-width: 21rem;

    ${MediaQuery.MaxWidth.mobileL} {
        min-width: 17.5rem;
    }
`;
