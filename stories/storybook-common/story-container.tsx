import styled from "styled-components";
import { MediaQuery } from "../../src/media";
import { MediaWidths } from "../../src/spec/media-spec";

const MINIMUM_SIDE_PADDING = 48;
const SIDEBAR_WIDTH = 210;
const SPACER = 600;

export const StoryContainer = styled.div`
    min-width: 500px;
    width: calc(
        ${MediaWidths.desktopM}px -
            ${MINIMUM_SIDE_PADDING + SIDEBAR_WIDTH + SPACER}px
    );

    ${MediaQuery.MaxWidth.tablet} {
        min-width: 400px;
        width: calc(
            ${MediaWidths.tablet}px -
                ${MINIMUM_SIDE_PADDING + SIDEBAR_WIDTH + SPACER}px
        );
    }

    ${MediaQuery.MaxWidth.mobileL} {
        min-width: 350px;
        width: calc(
            ${MediaWidths.mobileL}px - ${MINIMUM_SIDE_PADDING + SPACER}px
        );
    }

    ${MediaQuery.MaxWidth.mobileM} {
        min-width: 0;
        width: calc(${MediaWidths.mobileM}px - ${MINIMUM_SIDE_PADDING}px);
    }

    ${MediaQuery.MaxWidth.mobileS} {
        width: calc(${MediaWidths.mobileS}px - ${MINIMUM_SIDE_PADDING}px);
    }
`;
