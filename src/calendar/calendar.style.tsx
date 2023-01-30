import { Color } from "src/color";
import { Icon } from "src/icon";
import styled, { css } from "styled-components";
import { TextStyleHelper } from "../text/helper";
import { VariantDay, View } from "./types";

interface HeaderDropdownProps {
    view: View;
}

interface CalendarViewProps {
    children: JSX.Element[];
    show: View;
}

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
export const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 656px;
    background-color: ${Color.Neutral[8]};
    border: 1px solid ${Color.Neutral[5]};
    height: 403px;
    border-radius: 12px;
    padding-top: 32px;
    padding-bottom: 32px;
`;

export const HeaderDropdown = styled.div<HeaderDropdownProps>`
    display: flex;
    justify-content: center;
    margin-bottom: 15px;

    svg {
        margin-left: 10px;
        color: ${Color.Neutral[3]};
        transition: transform 250ms ease-in-out;
    }

    ${(props) => {
        switch (props.view) {
            case "Month":
                return css`
                    & > :first-child {
                        display: none;
                    }

                    & > :last-child svg {
                        transform: rotate(180deg);
                    }
                `;
            case "Year":
                return css`
                    & > :first-child {
                        display: none;
                    }
                    & > :last-child svg {
                        transform: rotate(180deg);
                    }
                `;
        }
    }}
`;

const DropdownMonthYearBase = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    p {
        ${TextStyleHelper.getFontFamily("H4", "regular")}
        font-size: 18px !important;
    }
`;

export const DropdownMonth = styled(DropdownMonthYearBase)`
    margin-right: 1rem;
`;
export const DropdownYear = styled(DropdownMonthYearBase)``;

export const Views = styled.div<CalendarViewProps>`
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;

    ${(props) => {
        const _VIEWS = ["Day", "Month", "Year"] as View[];
        let styles = "";
        for (let i = 0; i < props.children.length; i++) {
            styles += `
                    > div:nth-child(${i + 1}) {
                        display: ${props.show === _VIEWS[i] ? "flex" : "none"} ;
                    }
                `;
        }
        return css`
            ${styles}
        `;
    }}
`;

const ViewSectionBase = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 544px;
`;

export const DayView = styled(ViewSectionBase)``;
export const MonthView = styled(ViewSectionBase)``;
export const YearView = styled(ViewSectionBase)``;

export const WeekDaysContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-bottom: 8px;
`;

export const WeekCell = styled.div`
    ${TextStyleHelper.getFontFamily("H6", "semibold")}
    height: 26px;
    width: 78px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${Color.Neutral[1]};
    font-size: 14px !important;

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
    margin-bottom: 4px;
`;

export const GrowDayCell = styled.div`
    display: flex;
    position: relative;
    height: 40px;
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
    width: 20px;
`;

export const LeftCell = styled(DayCellBasic)``;

export const RightCell = styled(DayCellBasic)``;

export const Circle = styled.div<CircleProps>`
    ${TextStyleHelper.getFontFamily("H5", "regular")}
    color: ${Color.Neutral[1]};
    position: absolute;
    border-radius: 50%;
    width: 40px;
    height: 40px;
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

const ArrowLeftRightBase = styled(Icon)`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    color: ${Color.Neutral[3]};
    cursor: pointer;
`;

export const ArrowLeft = styled(ArrowLeftRightBase)`
    left: 20px;
`;
export const ArrowRight = styled(ArrowLeftRightBase)`
    right: 20px;
`;

export const InteractiveCircle = styled.div<InteractiveCircleProps>`
    position: absolute;
    width: 40px;
    height: 40px;
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
