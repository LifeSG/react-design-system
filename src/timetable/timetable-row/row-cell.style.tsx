import styled, { css } from "styled-components";

import { TimeSlot } from "../../shared/time-slot";
import { Border, Colour, Radius, Spacing } from "../../theme";
import { Typography } from "../../typography";

export const tokens = {
    block: {
        mainColor: "--fds-internal-timetable-rowCellBlock-mainColor",
        altColor: "--fds-internal-timetable-rowCellBlock-altColor",
    },
};

interface BlockStyleProps {
    $width: number;
    $mainColor: string;
    $altColor: string;
}

interface BlockContainerProps {
    $isOnTheHour: boolean;
}

export const BlockContainer = styled.div<BlockContainerProps>`
    border-bottom: ${Border["width-010"]} ${Border["solid"]} ${Colour["border"]};
    ${(props) => {
        if (props.$isOnTheHour) {
            return css`
                box-shadow: inset -0.5px 0px ${Colour["border-primary"]};
            `;
        }
    }}
`;

export const Wrapper = styled.div`
    display: flex;
    margin-bottom: 2px;
    height: 65px;
`;

export const Gap = styled.div`
    width: 2px;
    height: 100%;
`;

export const Block = styled(TimeSlot)<BlockStyleProps>`
    height: 100%;
    width: ${({ $width }) => `${$width}px`};
    border-radius: ${Radius["sm"]};
    box-sizing: border-box;
    padding: ${Spacing["spacing-4"]};

    ${tokens.block.mainColor}: ${({ $mainColor }) => $mainColor};
    ${tokens.block.altColor}: ${({ $altColor }) => $altColor};
`;

export const BlockTitle = styled(Typography.BodySM)`
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`;

export const BlockDescription = styled(Typography.BodyXS)`
    color: ${Colour["text-subtler"]};
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`;
