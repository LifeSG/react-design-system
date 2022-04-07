import { MediaQuery, MediaWidths } from "src/components";
import styled from "styled-components";

const MINIMUM_SIDE_PADDING = 48;

export const StoryContainer = styled.div`
    min-width: 500px;

    ${MediaQuery.MaxWidth.tablet} {
        min-width: 400px;
    }

    ${MediaQuery.MaxWidth.mobileL} {
        min-width: 350px;
    }

    ${MediaQuery.MaxWidth.mobileM} {
        min-width: 0;
        width: calc(${MediaWidths.mobileM}px - ${MINIMUM_SIDE_PADDING}px);
    }

    ${MediaQuery.MaxWidth.mobileS} {
        width: calc(${MediaWidths.mobileS}px - ${MINIMUM_SIDE_PADDING}px);
    }
`;
