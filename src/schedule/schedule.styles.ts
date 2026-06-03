import styled from "styled-components";

import { ErrorDisplay } from "../error-display";
import { Border, Colour, Radius, Spacing } from "../theme";
import { MIN_COLUMN_WIDTH } from "./const";

// =============================================================================
// STYLING
// =============================================================================
export const containerLoading = "scheduleContainerLoading";

export const Container = styled.div`
    min-width: 320px;
    max-width: 90vw;
    box-sizing: border-box;

    &.${containerLoading}:hover {
        cursor: not-allowed;
    }
`;

export const ScheduleBodyContainer = styled.div`
    height: 100%;
    position: relative;
    overflow: hidden;
`;

export const EmptyTableContainer = styled.div`
    display: grid;
    overflow: auto;
    position: relative;
    grid-template-columns: ${MIN_COLUMN_WIDTH}px auto;
    border: ${Border["width-010"]} ${Border.solid} ${Colour["border"]};
    border-radius: ${Radius["md"]};
    background: ${Colour["bg"]};
`;

export const NoResultsFound = styled(ErrorDisplay)`
    grid-column: 1 / -1;
    grid-row: 2;
    padding: ${Spacing["spacing-72"]} 0;
`;
