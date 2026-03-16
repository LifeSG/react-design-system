import styled from "styled-components";

import { Typography } from "../../typography";
import {
    V3_Border,
    V3_Colour,
    V3_Font,
    V3_Radius,
    V3_Spacing,
} from "../../v3_theme";
import { CELL_HEIGHT, TIME_INDICATOR_WIDTH } from "../const";

// =============================================================================
// STYLE INTERFACES
// =============================================================================
interface TimelineCircleStyleProps {
    $top: number;
    $isWeekView: boolean;
}

// =============================================================================
// STYLING
// =============================================================================
export const TimeColumnWrapper = styled.div`
    position: sticky;
    z-index: 3;
`;

export const TimeColumn = styled.div`
    display: flex;
    flex-direction: column;
    min-width: ${TIME_INDICATOR_WIDTH}px;
    background: ${V3_Colour["bg"]};
    border-right: ${V3_Border["width-010"]} ${V3_Border.solid}
        ${V3_Colour["border"]};
`;

export const TimeLabel = styled(Typography.BodySM)`
    min-height: ${CELL_HEIGHT * 2}px; /* 2 slots */
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    color: ${V3_Colour["text-subtler"]};
    padding-right: ${V3_Spacing["spacing-8"]};
    font-weight: ${V3_Font.Spec["weight-bold"]};
    position: relative;
`;
export const HourDisplay = styled.span`
    position: absolute;
    top: -18px;
`;

export const TimelineCircle = styled.div<TimelineCircleStyleProps>`
    position: absolute;
    right: -6px;
    top: ${(props) => props.$top - 6}px;
    width: ${V3_Spacing["spacing-12"]};
    height: ${V3_Spacing["spacing-12"]};
    border-radius: ${V3_Radius["full"]};
    background: ${V3_Colour["icon-primary"]};
    z-index: 4;
    display: ${(props) => (props.$isWeekView ? "none" : "block")};
`;
