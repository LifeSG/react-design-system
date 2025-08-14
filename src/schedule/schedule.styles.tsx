import styled, { css } from "styled-components";
import { MIN_COLUMN_WIDTH } from "./const";
import { ErrorDisplay } from "../error-display";
import { Spacing } from "../theme";

// =============================================================================
// STYLING
// =============================================================================
interface ScheduleProps {
    $loading: boolean | undefined;
}

export const Container = styled.div<ScheduleProps>`
    min-width: 320px;
    max-width: 90vw;
    box-sizing: border-box;
    ${(props) => {
        if (props.$loading) {
            return css`
                :hover {
                    cursor: not-allowed;
                    padding-bottom: 0;
                }
            `;
        }
    }}
`;

export const EmptyTableContainer = styled.div`
    display: grid;
    overflow: scroll;
    position: relative;
    grid-template-columns: ${MIN_COLUMN_WIDTH}px auto;
`;

export const NoResultsFound = styled(ErrorDisplay)`
    grid-column: 1 / -1;
    grid-row: 2;
    padding: ${Spacing["spacing-72"]} 0;
`;
