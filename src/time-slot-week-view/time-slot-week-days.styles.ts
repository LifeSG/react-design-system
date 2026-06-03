import styled from "styled-components";

import { TimeSlot } from "../shared/time-slot";
import { Colour, Font } from "../theme";

// =============================================================================
// TOKENS
// =============================================================================
export const tokens = {
    timeSlotText: {
        color: "--fds-internal-timeSlotWeekDays-timeSlotText-color",
    },
};

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

export const HeaderRow = styled.div`
    grid-column: 1 / -1;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
`;

export const DayLabel = styled.div`
    ${Font["body-xs-semibold"]}
    color: ${Colour["text"]};

    &.dayLabelDisabled {
        color: ${Colour["text-disabled-subtlest"]};
    }
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
    ${tokens.timeSlotText.color}: initial;

    ${Font["body-xs-semibold"]}
    margin: 1rem 0rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    max-width: 2.5rem;
    color: var(${tokens.timeSlotText.color}, ${Colour["text"]});
    span {
        display: block;
    }
`;

export const TimeSlotComponent = styled(TimeSlot)`
    display: flex;
    flex-grow: 1;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: 1px 0px;
    position: relative;

    &:focus-within {
        outline: 2px solid ${Colour["focus-ring"]};
        outline-offset: 2px;
        z-index: 1;
    }
`;

export const TimeSlotWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    margin: 1px;
`;
