import { css } from "@linaria/core";

import { Colour, Font, Motion, Radius, Spacing } from "../theme";

export const tokens = {
    timeColumn: {
        height: "--fds-internal-timeSlotBarWeek-timeColumn-height",
    },
    timeSlotComponent: {
        height: "--fds-internal-timeSlotBarWeek-timeSlotComponent-height",
        halfFillBgColor:
            "--fds-internal-timeSlotBarWeek-timeSlotComponent-halfFillBgColor",
        halfFillBgColor2:
            "--fds-internal-timeSlotBarWeek-timeSlotComponent-halfFillBgColor2",
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
    ${tokens.timeSlotComponent.height}: initial;
    ${tokens.timeSlotComponent.halfFillBgColor}: ${Colour["bg-stronger"]};
    ${tokens.timeSlotComponent.halfFillBgColor2}: ${Colour["bg-strongest"]};
    display: flex;
    flex-grow: 1;
    align-items: center;
    justify-content: center;
    width: 100%;
    position: relative;
    max-width: 200px;
    height: var(${tokens.timeSlotComponent.height});
    min-height: var(${tokens.timeSlotComponent.height});
    margin: 0;
    border-radius: ${Radius["xs"]};

    &:focus-within {
        outline: 2px solid ${Colour["focus-ring"]};
        outline-offset: -2px;
    }
`;

const halfFillStripesRepeatingGradient = `repeating-linear-gradient(
    135deg,
    var(${tokens.timeSlotComponent.halfFillBgColor2}) 0px,
    var(${tokens.timeSlotComponent.halfFillBgColor2}) 10px,
    var(${tokens.timeSlotComponent.halfFillBgColor}) 10px,
    var(${tokens.timeSlotComponent.halfFillBgColor}) 20px
)`;

export const timeSlotComponentHalfFillTop = css`
    &[data-style-type="default"] {
        background: linear-gradient(
            to top,
            var(${tokens.timeSlotComponent.halfFillBgColor}) 50%,
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
            var(${tokens.timeSlotComponent.halfFillBgColor}) 50%,
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
