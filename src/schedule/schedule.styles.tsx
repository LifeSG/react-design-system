import styled, { css } from "styled-components";
import { MIN_COLUMN_WIDTH } from "./const";
import { ErrorDisplay } from "../error-display";
import { V3_Border, V3_Colour, V3_Radius, V3_Spacing } from "../v3_theme";

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
                &:hover {
                    cursor: not-allowed;
                }
            `;
        }
    }}
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
    border: ${V3_Border["width-010"]} ${V3_Border.solid} ${V3_Colour["border"]};
    border-radius: ${V3_Radius["md"]};
    background: ${V3_Colour["bg"]};
`;

export const NoResultsFound = styled(ErrorDisplay)`
    grid-column: 1 / -1;
    grid-row: 2;
    padding: ${V3_Spacing["spacing-72"]} 0;
`;
