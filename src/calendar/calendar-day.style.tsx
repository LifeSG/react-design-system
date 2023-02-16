import { Color } from "../color";
import { TextStyleHelper } from "../text";
import styled, { css } from "styled-components";
import { DayVariant } from "./calendar-day";

export interface DayCellStyleProps {
    $selected?: boolean;
    $point?: "start" | "middle" | "end";
    $hovered?: boolean;
    $disabled?: boolean;
}

interface DayNumberProps {
    $variant: DayVariant;
    $disabled: boolean;
}

interface GrowDayCellProps extends DayCellStyleProps {}

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

                ${DayNumber} {
                    ${TextStyleHelper.getTextStyle("H5", "semibold")}
                    color: ${Color.Primary}
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

const Circle = styled.div`
    ${TextStyleHelper.getTextStyle("H5", "regular")}
    color: ${Color.Neutral[1]};
    position: absolute;
    border-radius: 50%;
    width: 2.5rem;
    height: 2.5rem;
`;

export const LeftCell = styled(DayCellBasic)``;
export const RightCell = styled(DayCellBasic)``;
export const LeftCircle = styled(Circle)`
    right: 0;
    transform: translateX(50%);
`;
export const RightCircle = styled(Circle)`
    left: 0;
    transform: translateX(-50%);
`;

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
            case "today":
                return css`
                    color: ${Color.Neutral[3]};
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
