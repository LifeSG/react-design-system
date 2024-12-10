import styled, { css } from "styled-components";
import { Colour, Font } from "../theme";

// =============================================================================
// STYLE INTERFACES
// =============================================================================
interface LabelStyleProps {
    $disabled: boolean;
}

// =============================================================================
// STYLING
// =============================================================================
export const HeaderCellWeek = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    user-select: none;
    margin-bottom: 0.188rem;
`;

export const DayLabel = styled.div<LabelStyleProps>`
    ${Font["body-xs-semibold"]}
    color:${Colour["text"]};

    ${(props) =>
        props.$disabled &&
        css`
            color: ${Colour["text-disabled-subtlest"]};
        `};
`;

export const Wrapper = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
`;

export const ColumnWeekCell = styled.div`
    grid-column: 1 / -1;
    display: flex;
    min-height: 7.625rem;
`;

export const TimeSlotText = styled.div`
    ${Font["body-xs-semibold"]}
    margin: 1rem 0rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    max-width: 2.5rem;
    color: ${Colour.text};
    span {
        display: block;
    }
`;

export const TimeSlotWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    margin: 1px;
`;
