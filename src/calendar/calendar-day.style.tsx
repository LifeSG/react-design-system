import { Color } from "../color";
import { TextStyleHelper } from "../text";
import styled, { css } from "styled-components";
import { DayCellStyleProps, VariantDay } from "./calendar-day";

interface DayNumberProps {
    $variant: VariantDay;
    $disabled: boolean;
}

interface GrowDayCellProps extends DayCellStyleProps {}

interface CircleProps extends Pick<DayNumberProps, "$variant"> {
    $position: "left" | "right";
}

interface InteractiveCircleProps extends Omit<DayNumberProps, "$variant"> {}

// =============================================================================
// STYLING
// =============================================================================
export const WeekDaysContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-bottom: 0.5rem;
`;

export const WeekCell = styled.div`
    ${TextStyleHelper.getTextStyle("H6", "semibold")}
    height: 1.625rem;
    width: 4.875rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${Color.Neutral[1]};
    pointer-events: none;
    user-select: none;
`;

export const CalendarDaySection = styled.div`
    display: flex;
    justify-content: space-around;
    margin-bottom: 0.25rem;
`;

export const GrowDayCell = styled.div<GrowDayCellProps>`
    display: flex;
    position: relative;
    height: 2.5rem;
    align-items: center;
    justify-content: center;

    ${(props) => {
        const { $selected } = props;

        if ($selected) {
            return css`
                ${LeftCircle} {
                    background-color: ${Color.Accent.Light[5]};
                    border: 1px solid ${Color.Primary};
                }

                ${RightCircle} {
                    background-color: ${Color.Accent.Light[5]};
                    border: 1px solid ${Color.Primary};
                }
            `;
        }
    }}
`;

const DayCellBasic = styled.div`
    position: relative;
    height: 100%;
    display: flex;
    overflow: hidden;
    width: 1.25rem;
`;

const Circle = styled.div<CircleProps>`
    ${TextStyleHelper.getTextStyle("H5", "regular")}
    color: ${Color.Neutral[1]};
    position: absolute;
    border-radius: 50%;
    width: 2.5rem;
    height: 2.5rem;

    ${(props) => {
        switch (props.$variant) {
            case "default":
                return css`
                    color: ${Color.Neutral[1]};
                `;
            case "other-month":
                return css`
                    color: ${Color.Neutral[4]};
                `;
            case "today":
                return css`
                    background-color: ${Color.Accent.Light[6]};
                    color: ${Color.Neutral[3]};
                `;
        }
    }}
    ${(props) => {
        switch (props.$position) {
            case "left":
                return css`
                    right: 0;
                    transform: translateX(50%);
                `;
            case "right":
                return css`
                    left: 0;
                    transform: translateX(-50%);
                `;
        }
    }}
`;

export const LeftCell = styled(DayCellBasic)``;
export const RightCell = styled(DayCellBasic)``;
export const LeftCircle = styled(Circle)``;
export const RightCircle = styled(Circle)``;

export const DayNumber = styled.div<DayNumberProps>`
    ${TextStyleHelper.getTextStyle("H5", "regular")}
    pointer-events: none;
    user-select: none;
    position: absolute;

    ${(props) => {
        if (props.$disabled) {
            return css`
                color: ${Color.Neutral[4]};
                pointer-events: none;
            `;
        }

        switch (props.$variant) {
            case "other-month":
                return css`
                    color: ${Color.Neutral[4]};
                `;
            case "default":
                return css`
                    color: ${Color.Neutral[1]};
                `;
        }
    }}
`;

export const InteractiveCircle = styled.div<InteractiveCircleProps>`
    position: absolute;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    cursor: pointer;

    &:hover {
        cursor: pointer;
        box-shadow: 0px 0px 4px 1px ${Color.Shadow.Accent};
        border: 1px solid ${Color.Accent.Light[1]};
    }

    ${(props) => {
        if (props.$disabled) {
            return css`
                color: ${Color.Neutral[4]};
                cursor: none;
                pointer-events: none;
            `;
        }
    }}
`;
