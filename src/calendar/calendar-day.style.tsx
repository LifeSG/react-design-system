import styled, { css } from "styled-components";
import { Color } from "../color";
import { Text } from "../text";
import { DayVariant } from "./calendar-day";

export interface DayCellStyleProps {
    $point?: "start" | "middle" | "end";
    $hovered?: boolean;
    $disabled?: boolean;
}

interface DayLabelStyleProps {
    $variant: DayVariant;
    $disabled: boolean;
    $selected: boolean;
}

interface OverflowDisplayProps {
    $position: "left" | "right";
}

interface InteractiveCircleProps extends Omit<DayLabelStyleProps, "$variant"> {}

// interface DayNumberProps {
//     $variant: DayVariant;
//     $disabled: boolean;
// }

// interface GrowDayCellProps extends DayCellStyleProps {}

// =============================================================================
// STYLING
// =============================================================================
export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    row-gap: 0.5rem;
`;

export const HeaderCell = styled.div`
    height: 1.625rem;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
    user-select: none;
    margin-bottom: 0.625rem;
`;

export const GrowDayCell = styled.div<DayCellStyleProps>`
    display: flex;
    position: relative;
    height: 2.5rem;
    align-items: center;
    justify-content: center;
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
`;

const Circle = styled.div`
    position: absolute;
    border-radius: 50%;
    width: 2.5rem;
    height: 2.5rem;
`;

export const InteractiveCircle = styled(Circle)<InteractiveCircleProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    :hover {
        box-shadow: 0px 0px 4px 1px ${Color.Shadow.Accent};
        border: 1px solid ${Color.Accent.Light[1]};
    }

    ${(props) => {
        if (props.$selected) {
            return css`
                background: ${Color.Accent.Light[5](props)};
                border: 1px solid ${Color.Primary(props)};
            `;
        }

        if (props.$disabled) {
            return css`
                color: ${Color.Neutral[4](props)};
                cursor: not-allowed;
                pointer-events: none;
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
`;

// // FIXME:
// const dayCellStyles = css`
//     position: relative;
//     height: 100%;
//     display: flex;
//     overflow: hidden;
//     width: 1.25rem;
// `;

// export const LeftCell = styled.div`
//     ${dayCellStyles}
// `;

// export const RightCell = styled.div`
//     ${dayCellStyles}
// `;

// // FIXME:
// export const WeekDaysContainer = styled.div`
//     /* display: flex;
//     flex-direction: row;
//     justify-content: space-around; */
//     margin-bottom: 0.5rem;
// `;

// // FIXME:
// export const CalendarDaySection = styled.div`
//     display: flex;
//     justify-content: space-around;
//     margin-bottom: 0.25rem;
// `;

// export const DayNumber = styled.div<DayNumberProps>`
//     ${TextStyleHelper.getTextStyle("H5", "regular")}
//     pointer-events: none;
//     user-select: none;
//     position: absolute;

//     ${(props) => {
//         if (props.$disabled) {
//             return css`
//                 color: ${Color.Neutral[4]};
//                 pointer-events: none;
//             `;
//         }

//         switch (props.$variant) {
//             case "other-month":
//                 return css`
//                     color: ${Color.Neutral[4]};
//                 `;
//             case "today":
//                 return css`
//                     color: ${Color.Neutral[3]};
//                 `;
//             case "default":
//                 return css`
//                     color: ${Color.Neutral[1]};
//                 `;
//         }
//     }}
// `;

// export const OverflowCell = styled.div`
//     position: relative;
//     height: 100%;
//     display: flex;
//     overflow: hidden;
//     width: 1.25rem;
// `;

// export const LeftCircle = styled(Circle)`
//     right: 0;
//     transform: translateX(50%);
//     background: green;
// `;

// export const RightCircle = styled(Circle)`
//     left: 0;
//     transform: translateX(-50%);
//     background: red;
// `;
