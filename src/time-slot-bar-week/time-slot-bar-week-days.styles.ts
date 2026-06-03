import { css } from "@linaria/core";

import { createStripesGradient } from "../shared/time-slot/time-slot.styles";
import * as timeSlotStyles from "../shared/time-slot/time-slot.styles";
import { Colour, Font, Motion, Spacing } from "../theme";

export const tokens = {
    timeColumn: {
        height: "--fds-internal-timeSlotBarWeek-timeColumn-height",
    },
    timeSlot: {
        height: "--fds-internal-timeSlotBarWeek-timeSlotComponent-height",
    },
};

export const headerCellWeek = css`
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
    user-select: none;
    margin-bottom: ${Spacing["spacing-8"]};
    flex: 1;
`;

export const cellWeekTextDisabled = css`
    color: ${Colour["text-disabled-subtlest"]};
`;

export const headerCellWeekColumn = css`
    grid-column: 2 / -1;
    display: flex;
`;

export const wrapper = css`
    width: 100%;
`;

export const gridWrapper = css`
    width: 100%;
    display: grid;
    grid-template-columns: auto repeat(7, 1fr);
    column-gap: ${Spacing["spacing-4"]};
`;

export const expandable = css`
    grid-column: 2 / -1;
    overflow: hidden;
`;

export const columnWeekCell = css`
    display: flex;
    gap: ${Spacing["spacing-4"]};
    transition: all ${Motion["duration-250"]} ${Motion["ease-default"]};
    overflow: hidden;
`;

export const timeColumn = css`
    ${tokens.timeColumn.height}: initial;
    display: flex;
    flex-direction: column;
    grid-row: 3 / auto;
    gap: ${Spacing["spacing-4"]};
    width: 1.375rem;
    transition: all ${Motion["duration-250"]} ${Motion["ease-default"]};
    overflow: hidden;
    height: var(${tokens.timeColumn.height});
`;

export const timeColumnWrapper = css`
    min-height: 60px;

    &:last-child {
        min-height: 0;
    }
`;

export const timeColumnText = css`
    ${Font["body-xs-bold"]}
    color: ${Colour["text-subtler"]};
    text-align: center;
    line-height: 12px; // align with cell on the same row

    &:first-line {
        font-size: ${Font.Spec["body-size-sm"]};
    }
`;

export const timeSlotWrapper = css`
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: ${Spacing["spacing-4"]};
`;

export const collapseExpandAllWrapper = css`
    display: flex;
    margin-top: ${Spacing["spacing-8"]};
`;

export const collapseExpandAllButton = css`
    width: 100%;
    height: 2.5rem;
`;

export const collapseExpandAllButtonContent = css`
    display: flex;
    align-items: center;
    gap: ${Spacing["spacing-8"]};
`;

export const chevronIcon = css`
    transform: rotate(180deg);
    transition: transform ${Motion["duration-250"]} ${Motion["ease-default"]};
`;

export const chevronIconExpanded = css`
    transform: rotate(0deg);
`;

export const timeSlotComponent = css`
    ${tokens.timeSlot.height}: initial;
    flex-grow: 1;
    max-width: 200px;
    height: var(${tokens.timeSlot.height});
    min-height: var(${tokens.timeSlot.height});
`;

const halfFillStripesRepeatingGradient = createStripesGradient(
    timeSlotStyles.tokens.slot.bgColor,
    timeSlotStyles.tokens.slot.bgColor2,
    10
);

export const timeSlotComponentHalfFillTop = css`
    &[data-style-type="default"] {
        background: linear-gradient(
            to top,
            var(${timeSlotStyles.tokens.slot.bgColor}) 50%,
            ${Colour["bg-strongest"]} 0%
        );
    }

    &[data-style-type="stripes"] {
        background: linear-gradient(
                to top,
                transparent 50%,
                ${Colour["bg-strongest"]} 0%
            ),
            ${halfFillStripesRepeatingGradient};
    }
`;

export const timeSlotComponentHalfFillBottom = css`
    &[data-style-type="default"] {
        background: linear-gradient(
            to bottom,
            var(${timeSlotStyles.tokens.slot.bgColor}) 50%,
            ${Colour["bg-strongest"]} 0%
        );
    }

    &[data-style-type="stripes"] {
        background: linear-gradient(
                to bottom,
                transparent 50%,
                ${Colour["bg-strongest"]} 0%
            ),
            ${halfFillStripesRepeatingGradient};
    }
`;
