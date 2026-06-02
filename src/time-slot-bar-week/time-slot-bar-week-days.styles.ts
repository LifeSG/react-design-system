import { ChevronUpIcon } from "@lifesg/react-icons";
import { animated } from "@react-spring/web";
import styled from "styled-components";

import { Button } from "../button";
import { TimeSlot } from "../shared/time-slot";
import { Colour, Font, Motion, Radius, Spacing } from "../theme";
import { Typography } from "../typography";

export const tokens = {
    timeColumn: {
        height: "--fds-internal-timeSlotBarWeek-timeColumn-height",
    },
    timeSlotComponent: {
        height: "--fds-internal-timeSlotBarWeek-timeSlotComponent-height",
    },
};

export const HeaderCellWeek = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
    user-select: none;
    margin-bottom: ${Spacing["spacing-8"]};
    flex: 1;
`;

export const CellWeekText = styled(Typography.BodyXS)`
    &.cellWeekTextDisabled {
        color: ${Colour["text-disabled-subtlest"]};
    }
`;

export const HeaderCellWeekColumn = styled.div`
    grid-column: 2 / -1;
    display: flex;
`;

export const Wrapper = styled.div`
    width: 100%;
`;

export const GridWrapper = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: auto repeat(7, 1fr);
    column-gap: ${Spacing["spacing-4"]};
`;

export const Expandable = animated(styled.div`
    grid-column: 2 / -1;
    overflow: hidden;
`);

export const ColumnWeekCell = styled.div`
    display: flex;
    gap: ${Spacing["spacing-4"]};
    transition: all ${Motion["duration-250"]} ${Motion["ease-default"]};
    overflow: hidden;
`;

export const TimeColumn = styled.div`
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

export const TimeColumnWrapper = styled.div`
    min-height: 60px;
    &:last-child {
        min-height: 0;
    }
`;

export const TimeColumnText = styled.div`
    ${Font["body-xs-bold"]}
    color: ${Colour["text-subtler"]};
    text-align: center;
    line-height: 12px; // align with cell on the same row
    &:first-line {
        font-size: ${Font.Spec["body-size-sm"]};
    }
`;

export const TimeSlotWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: ${Spacing["spacing-4"]};
`;

export const CollapseExpandAllWrapper = styled.div`
    display: flex;
    margin-top: ${Spacing["spacing-8"]};
`;

export const CollapseExpandAllButton = styled(Button.Small)`
    width: 100%;
    height: 2.5rem;
    span {
        display: flex;
        align-items: center;
        gap: ${Spacing["spacing-8"]};
    }
`;

export const ChevronIcon = styled(ChevronUpIcon)`
    transform: rotate(180deg);
    transition: transform ${Motion["duration-250"]} ${Motion["ease-default"]};

    &.chevronIconExpanded {
        transform: rotate(0deg);
    }
`;

export const TimeSlotComponent = styled(TimeSlot)`
    ${tokens.timeSlotComponent.height}: initial;
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

    &.timeSlotComponentDefault {
        background-color: ${(props) => props.bgColor};
    }

    &.timeSlotComponentHalfFillTop {
        background: linear-gradient(
                to top,
                ${(props) =>
                        props.styleType === "stripes"
                            ? "transparent"
                            : props.bgColor}
                    50%,
                ${Colour["bg-strongest"]} 0%
            )
            ${(props) =>
                props.styleType === "stripes" &&
                `, repeating-linear-gradient(
                        135deg,
                        ${props.bgColor2 || Colour["bg-strongest"]} 0px,
                        ${props.bgColor2 || Colour["bg-strongest"]} 10px,
                        ${props.bgColor || Colour["bg-stronger"]} 10px,
                        ${props.bgColor || Colour["bg-stronger"]} 20px
                    )`};
    }

    &.timeSlotComponentHalfFillBottom {
        background: linear-gradient(
                to bottom,
                ${(props) =>
                        props.styleType === "stripes"
                            ? "transparent"
                            : props.bgColor}
                    50%,
                ${Colour["bg-strongest"]} 0%
            )
            ${(props) =>
                props.styleType === "stripes" &&
                `, repeating-linear-gradient(
                        135deg,
                        ${props.bgColor2 || Colour["bg-strongest"]} 0px,
                        ${props.bgColor2 || Colour["bg-strongest"]} 10px,
                        ${props.bgColor || Colour["bg-stronger"]} 10px,
                        ${props.bgColor || Colour["bg-stronger"]} 20px
                    )`};
    }
`;
