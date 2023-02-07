import { Color } from "src/color";
import { TextStyleHelper } from "src/text";
import styled, { css } from "styled-components";
import { VariantDay } from "./types";

interface DayNumerProps {
    variant: VariantDay;
    disabled: boolean;
}

interface CircleProps extends Pick<DayNumerProps, "variant"> {
    position: "left" | "right";
}

interface InteractiveCircleProps extends Omit<DayNumerProps, "variant"> {}

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
    ${TextStyleHelper.getFontFamily("H6", "semibold")}
    height: 1.625rem;
    width: 4.875rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${Color.Neutral[1]};
    font-size: 0.875rem !important;

    pointer-events: none;
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none;
`;

export const CalendarDaySection = styled.div`
    display: flex;
    justify-content: space-around;
    margin-bottom: 0.25rem;
`;

export const GrowDayCell = styled.div`
    display: flex;
    position: relative;
    height: 2.5rem;
    align-items: center;
    justify-content: center;

    &.selected-start {
        & [data-circle="left"] {
            background-color: ${Color.Accent.Light[5]};
            border: 1px solid ${Color.Primary};
        }
        & [data-circle="right"] {
            background-color: ${Color.Accent.Light[5]};
            border: 1px solid ${Color.Primary};
        }
    }
`;

const DayCellBasic = styled.div`
    position: relative;
    height: 100%;
    display: flex;
    overflow: hidden;
    width: 1.25rem;
`;

export const LeftCell = styled(DayCellBasic)``;

export const RightCell = styled(DayCellBasic)``;

export const Circle = styled.div<CircleProps>`
    ${TextStyleHelper.getFontFamily("H5", "regular")}
    color: ${Color.Neutral[1]};
    position: absolute;
    border-radius: 50%;
    width: 2.5rem;
    height: 2.5rem;
    ${(props) => {
        switch (props.variant) {
            case "default":
                return css`
                    color: ${Color.Neutral[1]};
                `;
            case "nextMonth":
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
        switch (props.position) {
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

export const DayNumber = styled.div<DayNumerProps>`
    ${TextStyleHelper.getFontFamily("H5", "regular")}
    pointer-events: none;
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none;
    position: absolute;

    ${(props) => {
        if (props.disabled) {
            return css`
                color: ${Color.Neutral[4]};
                pointer-events: none;
            `;
        }

        switch (props.variant) {
            case "nextMonth":
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
        box-shadow: ${(props) =>
            props.theme.name === "BookingSG"
                ? "0px 0px 4px 1px rgba(161, 87, 255, 0.5)"
                : "0px 0px 4px 1px rgba(87, 169, 255, 0.5)"};
        border: 1px solid ${Color.Accent.Light[1]};
    }

    ${(props) => {
        if (props.disabled) {
            return css`
                color: ${Color.Neutral[4]};
                cursor: none;
                pointer-events: none;
            `;
        }
    }}
`;
