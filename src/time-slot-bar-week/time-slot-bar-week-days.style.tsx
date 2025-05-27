import { ChevronUpIcon } from "@lifesg/react-icons";
import { animated } from "react-spring";
import styled, { css } from "styled-components";
import { Button } from "../button";
import { Colour, Font, Motion, Radius, Spacing } from "@/theme";
import {
    TimeSlot,
    TimeSlotStyleProps,
} from "../time-slot-bar/time-slot-bar.styles";
import { Typography } from "../typography";

interface TimeSlotCellProps extends TimeSlotStyleProps {
    $height: number;
    $halfFill?: "top" | "bottom";
}

interface TimeColumnStyleProps {
    $height?: number;
}

interface CellWeekTextStyleProps {
    $disabled?: boolean;
}

interface ChevronIconStyleProps {
    $isExpanded?: boolean;
}

export const HeaderCellWeek = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
    user-select: none;
    margin-bottom: ${Spacing["spacing-8"]};
    flex: 1;
`;

export const CellWeekText = styled(Typography.BodyXS)<CellWeekTextStyleProps>`
    ${(props) =>
        props.$disabled &&
        css`
            color: ${Colour["text-disabled-subtlest"]};
        `}
`;

export const HeaderCellWeekColumn = styled.div`
    grid-column: 2 / -1;
    display: flex;
`;

export const Wrapper = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: auto repeat(7, 1fr);
    column-gap: ${Spacing["spacing-4"]};
`;

export const Expandable = styled(animated.div)`
    grid-column: 2 / -1;
    overflow: hidden;
`;

export const ColumnWeekCell = styled.div`
    display: flex;
    gap: ${Spacing["spacing-4"]};
    transition: all ${Motion["duration-250"]} ${Motion["ease-default"]};
    overflow: hidden;
`;

export const TimeColumn = styled.div<TimeColumnStyleProps>`
    display: flex;
    flex-direction: column;
    grid-row: 3 / auto;
    gap: ${Spacing["spacing-4"]};
    width: 1.375rem;
    transition: all ${Motion["duration-250"]} ${Motion["ease-default"]};
    overflow: hidden;

    ${(props) => props.$height && `height: ${props.$height}px;`}
`;

export const TimeColumnWrapper = styled.div`
    min-height: 3.75rem;
    :last-child {
        min-height: 0;
    }
`;

export const TimeColumnText = styled.div`
    ${Font["body-xs-bold"]}
    color: ${Colour["text-subtler"]};
    text-align: center;
    line-height: 12px; // align with cell on the same row
    :first-line {
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
    grid-row: 4;
    grid-column: 1 / -1;
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

export const ChevronIcon = styled(ChevronUpIcon)<ChevronIconStyleProps>`
    transform: rotate(${(props) => (props.$isExpanded ? 0 : 180)}deg);
    transition: transform ${Motion["duration-250"]} ${Motion["ease-default"]};
`;

export const TimeSlotComponent = styled(TimeSlot)<TimeSlotCellProps>`
    ${(props) => {
        if (props.$type === "vertical") {
            return css`
                max-width: 200px;
                height: ${props.$height}px;
                min-height: ${props.$height}px;
                margin: 0;
                border-radius: ${Radius["xs"]};
            `;
        }
    }}

    ${(props) => {
        if (!props.$halfFill) {
            return css`
                background-color: ${props.$bgColor};
            `;
        } else {
            return css`
                background: linear-gradient(
                        to ${props.$halfFill},
                        ${props.$styleType === "stripes"
                                ? "transparent"
                                : props.$bgColor}
                            50%,
                        ${Colour["bg-strongest"]} 0%
                    )
                    ${props.$styleType === "stripes" &&
                    `, repeating-linear-gradient(
                            135deg,
                            ${props.$bgColor2 || Colour["bg-strongest"]} 0px,
                            ${props.$bgColor2 || Colour["bg-strongest"]} 10px,
                            ${props.$bgColor || Colour["bg-stronger"]} 10px,
                            ${props.$bgColor || Colour["bg-stronger"]} 20px
                        )`};
            `;
        }
    }}
`;
