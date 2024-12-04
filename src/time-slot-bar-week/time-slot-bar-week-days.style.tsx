import styled, { css } from "styled-components";
import { Button } from "../button";
import { ChevronUpIcon } from "@lifesg/react-icons";
import { V2_Transition } from "../v2_transition";
import {
    TimeSlot,
    TimeSlotStyleProps,
} from "../time-slot-bar/time-slot-bar.styles";
import { animated } from "react-spring";
import { Colour, Font } from "../theme";
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
    margin-bottom: 0.5rem;
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
    column-gap: 0.25rem;
`;

export const Expandable = styled(animated.div)`
    grid-column: 2 / -1;
    overflow: hidden;
`;

export const ColumnWeekCell = styled.div`
    display: flex;
    gap: 0.25rem;
    transition: ${V2_Transition.Base};
    overflow: hidden;
`;

export const TimeColumn = styled.div<TimeColumnStyleProps>`
    display: flex;
    flex-direction: column;
    grid-row: 3 / auto;
    gap: 0.25rem;
    width: 1.375rem;
    transition: ${V2_Transition.Base};
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
    ${Font["body-baseline-bold"]}
    color: ${Colour["text-subtler"]};
    font-size: 0.625rem !important;
    line-height: 0.75rem !important;
    text-align: center;
    :first-line {
        font-size: 0.875rem !important;
    }
`;

export const TimeSlotWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 0.25rem;
`;

export const CollapseExpandAllWrapper = styled.div`
    grid-row: 4;
    grid-column: 1 / -1;
    display: flex;
    margin-top: 0.5rem;
`;

export const CollapseExpandAllButton = styled(Button.Small)`
    width: 100%;
    height: 2.5rem;
    span {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
`;

export const ChevronIcon = styled(ChevronUpIcon)<ChevronIconStyleProps>`
    transform: rotate(${(props) => (props.$isExpanded ? 0 : 180)}deg);
    transition: transform 300ms ease-in-out;
`;

export const TimeSlotComponent = styled(TimeSlot)<TimeSlotCellProps>`
    ${(props) => {
        if (props.$type === "vertical") {
            return css`
                max-width: 200px;
                height: ${props.$height}px;
                min-height: ${props.$height}px;
                margin: 0;
                border-radius: 0.125rem;
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
