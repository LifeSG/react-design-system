import { css } from "@linaria/core";

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
export const headerCellWeek = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    user-select: none;
    margin-bottom: 0.188rem;
`;

export const headerRow = css`
    grid-column: 1 / -1;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
`;

export const dayLabel = css`
    ${Font["body-xs-semibold"]}
    color: ${Colour["text"]};
`;

export const dayLabelDisabled = css`
    color: ${Colour["text-disabled-subtlest"]};
`;

export const wrapper = css`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
`;

export const columnWeekCell = css`
    grid-column: 1 / -1;
    display: flex;
    min-height: 7.625rem;
`;

export const timeSlotText = css`
    ${tokens.timeSlotText.color}: initial;

    ${Font["body-xs-semibold"]}
    margin: 1rem 0rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    max-width: 2.5rem;
    color: var(${tokens.timeSlotText.color}, ${Colour["text"]});
`;

export const timeSlotComponent = css`
    display: flex;
    flex-grow: 1;
    align-items: center;
    justify-content: center;
    margin: 1px 0px;
    position: relative;

    &:focus-within {
        outline: 2px solid ${Colour["focus-ring"]};
        outline-offset: 2px;
        z-index: 1;
    }
`;

export const timeSlotWrapper = css`
    display: flex;
    flex-direction: column;
    flex: 1;
    margin: 1px;
`;
