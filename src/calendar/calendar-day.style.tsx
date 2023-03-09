import styled, { css } from "styled-components";
import { Color } from "../color";
import { Text, TextStyleHelper } from "../text";
import { DayVariant } from "./calendar-day";
import { CalendarType } from "./types";

interface StyleProps {
    $point?: "start" | "middle" | "end" | "after-end" | "selected" | "none";
    $hovered?: boolean;
    $selected?: boolean;
}

interface DayLabelStyleProps extends StyleProps {
    $variant: DayVariant;
    $disabled?: boolean;
}

interface OverflowDisplayProps extends StyleProps {
    $position: "left" | "right";
}

interface WrapperStyleProps {
    $type: CalendarType;
}

interface InteractiveCircleProps extends DayLabelStyleProps {}

export interface DayCellStyleProps extends StyleProps {
    $disabled?: boolean;
}

// =============================================================================
// STYLING
// =============================================================================
export const Wrapper = styled.div<WrapperStyleProps>`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);

    ${(props) => {
        switch (props.$type) {
            case "standalone":
                return css`
                    row-gap: 0.5rem;
                `;
            case "input":
                return css`
                    row-gap: 0.25rem;
                `;
        }
    }}
`;

export const HeaderCell = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
    user-select: none;
    margin-bottom: 0.625rem;
`;

export const RowDayCell = styled.div`
    grid-column: 1 / -1;
    display: flex;
`;

export const GrowDayCell = styled.div<DayCellStyleProps>`
    display: flex;
    position: relative;
    height: 2.5rem;
    align-items: center;
    justify-content: center;
    flex: 1;

    ${(props) => {
        const { $hovered, $point, $selected } = props;

        if ($hovered && $point === "middle" && !$selected) {
            return css`
                border-top: 1px dashed ${Color.Accent.Light[4](props)};
                border-bottom: 1px dashed ${Color.Accent.Light[4](props)};
                background-color: ${Color.Accent.Light[6](props)};
            `;
        }

        if ($hovered && $point === "middle" && $selected) {
            return css`
                border-top: 1px solid ${Color.Accent.Light[4](props)};
                border-bottom: 1px solid ${Color.Accent.Light[4](props)};
                background-color: ${Color.Accent.Light[4](props)};
            `;
        }

        if (!$hovered && $point === "middle" && $selected) {
            return css`
                border-top: 1px solid ${Color.Accent.Light[4](props)};
                border-bottom: 1px solid ${Color.Accent.Light[4](props)};
                background-color: ${Color.Accent.Light[5](props)};
            `;
        }
    }}
`;

export const OverflowDisplay = styled.div<OverflowDisplayProps>`
    position: absolute;
    width: 50%;
    height: 100%;

    ${(props) => {
        switch (props.$position) {
            case "left":
                return css`
                    left: 0;
                `;
            case "right":
                return css`
                    right: 0;
                `;
        }
    }}

    ${(props) => {
        const { $hovered, $point, $selected } = props;

        if (!$hovered && $point === "none" && $selected) {
            return css`
                border-top: 1px solid ${Color.Accent.Light[4](props)};
                border-bottom: 1px solid ${Color.Accent.Light[4](props)};
                background-color: ${Color.Accent.Light[5](props)};
            `;
        }

        if (!$hovered && $point === "after-end" && $selected) {
            return css`
                border-top: 1px solid ${Color.Accent.Light[4](props)};
                border-bottom: 1px solid ${Color.Accent.Light[4](props)};
                background-color: ${Color.Accent.Light[4](props)};
            `;
        }

        if (!$hovered && $point === "after-end" && $selected) {
            return css`
                border-top: 1px solid ${Color.Accent.Light[4](props)};
                border-bottom: 1px solid ${Color.Accent.Light[4](props)};
                background-color: ${Color.Accent.Light[4](props)};
            `;
        }

        if ($hovered && $point === "after-end" && $selected) {
            return css`
                border-top: 1px dashed ${Color.Accent.Light[4](props)};
                border-bottom: 1px dashed ${Color.Accent.Light[4](props)};
                background-color: ${Color.Accent.Light[5](props)};
            `;
        }

        if ($hovered && $point === "end" && !$selected) {
            return css`
                border-top: 1px dashed ${Color.Accent.Light[4](props)};
                border-bottom: 1px dashed ${Color.Accent.Light[4](props)};
                background-color: ${Color.Accent.Light[6](props)};
            `;
        }

        if ($hovered && $point === "end" && !$selected) {
            return css`
                border-top: 1px dashed ${Color.Accent.Light[4](props)};
                border-bottom: 1px dashed ${Color.Accent.Light[4](props)};
                background-color: ${Color.Accent.Light[6](props)};
            `;
        }

        if (!$hovered && $point === "start" && $selected) {
            return css`
                border-top: 1px solid ${Color.Accent.Light[4](props)};
                border-bottom: 1px solid ${Color.Accent.Light[4](props)};
                background-color: ${Color.Accent.Light[4](props)};
            `;
        }

        if ($hovered && $point === "end" && $selected) {
            return css`
                background-color: ${Color.Accent.Light[5](props)};
            `;
        }
    }}
`;

export const InteractiveCircle = styled.div<InteractiveCircleProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 2.5rem;
    height: 2.5rem;
    cursor: pointer;
    position: absolute;

    :hover {
        box-shadow: 0px 0px 4px 1px ${Color.Shadow.Accent};
        border: 1px solid ${Color.Accent.Light[1]};
        background-color: ${Color.Neutral[8]};
    }

    ${(props) => {
        if (props.$disabled) {
            return css`
                color: ${Color.Neutral[4](props)};
                cursor: not-allowed;
                pointer-events: none;
            `;
        }

        if (props.$selected) {
            return css`
                background: ${Color.Accent.Light[5](props)};
                border: 1px solid ${Color.Primary(props)};
            `;
        }

        switch (props.$variant) {
            case "today":
                return css`
                    background: ${Color.Accent.Light[5](props)};
                `;
            default:
                break;
        }
    }}

    ${(props) => {
        const { $hovered, $point, $selected } = props;

        if ($hovered && $point === "selected" && $selected) {
            return css`
                background: ${Color.Accent.Light[4](props)};

                :hover {
                    background: ${Color.Accent.Light[4](props)};
                }
            `;
        }

        if ($hovered && $point === "start" && $selected) {
            return css`
                ${TextStyleHelper.getTextStyle("H5", "semibold")};
                background-color: ${Color.Accent.Light[5](props)};

                :hover {
                    box-shadow: 0px 0px 4px 1px ${Color.Shadow.Accent};
                    background-color: ${Color.Accent.Light[5](props)};
                }
            `;
        }

        if ($hovered && $point === "after-end" && $selected) {
            return css`
                ${TextStyleHelper.getTextStyle("H5", "semibold")};
                background-color: ${Color.Accent.Light[4](props)};
            `;
        }

        if (!$hovered && $point === "selected" && $selected) {
            return css`
                background-color: ${Color.Accent.Light[4](props)};

                :hover {
                    box-shadow: 0px 0px 4px 1px ${Color.Shadow.Accent};
                    background-color: ${Color.Accent.Light[4](props)};
                }
            `;
        }
    }}
`;

export const DayLabel = styled(Text.H5)<DayLabelStyleProps>`
    ${(props) => {
        if (props.$disabled) {
            return css`
                color: ${Color.Neutral[4](props)};
            `;
        }

        if (props.$selected) {
            return css`
                ${TextStyleHelper.getTextStyle("H5", "semibold")};
                color: ${Color.Primary(props)};
            `;
        }

        switch (props.$variant) {
            case "other-month":
                return css`
                    color: ${Color.Neutral[4](props)};
                `;
            case "today":
                return css`
                    color: ${Color.Neutral[3](props)};
                `;
            case "default":
                return css`
                    color: ${Color.Neutral[1](props)};
                `;
        }
    }}

    ${(props) => {
        const { $hovered, $point, $selected, $disabled } = props;

        if ($disabled && $hovered && !$selected) {
            return css`
                ${TextStyleHelper.getTextStyle("H5", "semibold")};
                color: ${Color.Accent.Light[2](props)};
            `;
        }

        if ($disabled && !$hovered && $selected) {
            return css`
                color: ${Color.Accent.Light[2](props)};
            `;
        }

        if ($hovered && $point === "end" && !$selected) {
            return css`
                ${TextStyleHelper.getTextStyle("H5", "semibold")};
                color: ${Color.Primary(props)};
            `;
        }

        if (!$hovered && $point === "none" && $selected) {
            return css`
                color: ${Color.Primary(props)};
            `;
        }
    }}
`;
