import { Button } from "src/button";
import { MediaQuery } from "src/media";
import styled, { css } from "styled-components";
import { Color } from "../color";
import { TextStyleHelper } from "../text/helper";
import { DatePickerType, FocusToTypes, VariantDay, View } from "./types";

// =============================================================================
// STYLE INTERFACe
// =============================================================================
interface ContainerStyleProps {
    disabled?: boolean;
    $error?: boolean;
    $readOnly?: boolean;
    type: DatePickerType;
}

interface CalendarContainerProps {
    isOpen: boolean;
    $isHide: boolean;
}

interface CalendarViewProps {
    children: JSX.Element[];
    show: View;
}

interface InputPlaceholderProps {
    disabled?: boolean;
    $readOnly?: boolean;
    left?: string;
    placeholder: "To" | "From";
    right?: string;
    show: string;
    type: DatePickerType;
    focusTo: Pick<FocusToTypes, "container">;
    value?: string;
}

interface DropdownHeaderProps {
    view: View;
}

interface DayNumerProps {
    variant: VariantDay;
    disabled: boolean;
    disabledAfter: boolean;
    disabledBefore: boolean;
}

interface ButtonContainerProps {
    hasButton?: boolean | undefined;
}

interface CircleProps extends Pick<DayNumerProps, "variant"> {
    position: "left" | "right";
}

interface InteractiveCircleProps extends Omit<DayNumerProps, "variant"> {}

// =============================================================================
// STYLING
// =============================================================================
export const Container = styled.div<ContainerStyleProps>`
    position: relative;
    width: 100%;

    ${(props) => {
        if (props.$readOnly) {
            return css`
                border: none;
                padding-left: 0rem;
                background: transparent !important;

                &
                    > :is([type="range"], [data-id="start-placeholder"], [data-id="range-placeholder"]) {
                    border: none;
                    pointer-events: none;
                }

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `;
        } else if (props.disabled) {
            return css`
                pointer-events: none;

                &
                    > :is([type="range"], [data-id="start-placeholder"], [data-id="range-placeholder"]) {
                    background: ${Color.Neutral[6]};
                    cursor: not-allowed;
                }

                :focus-within {
                    border: 1px solid ${Color.Neutral[5]};
                    box-shadow: none;
                }
            `;
        } else if (props.$error) {
            return css`
                & > [type="range"]:first-child {
                    border: 1px solid ${Color.Validation.Red.Border};
                    border-radius: 4px;

                    & :focus-within {
                        border: 1px solid ${Color.Validation.Red.Border};
                        box-shadow: inset 0 0 4px 1px rgba(221, 102, 102, 0.8);
                    }
                }
            `;
        }
    }}

    ${(props) => {
        if (props.type === "range") {
            return css`
                ${MediaQuery.MaxWidth.mobileL} {
                    max-width: 280px;
                    height: 82px;
                }
            `;
        }
    }}
`;

export const CalendarContainer = styled.div<CalendarContainerProps>`
    border: 1px solid ${Color.Neutral[5]};
    position: absolute;
    opacity: 0;
    pointer-events: none;
    left: 0;
    top: 100%;
    width: 100%;
    border-radius: 4px;
    padding: 32px 20px 24px;
    background-color: ${Color.Neutral[8]};
    transition: opacity 250ms ease-in, top 250ms ease-in-out;
    z-index: 2;
    flex-direction: column;

    ${(props) => {
        if (props.isOpen) {
            return css`
                pointer-events: auto;
                display: flex;
                opacity: 1;
                top: calc(100% + 9px);
            `;
        }
    }}

    ${(props) => {
        if (props.$isHide) {
            return css`
                display: none;
            `;
        }
    }}
`;

const ViewSectionBase = styled.div`
    position: relative;
    display: none;
    flex: 1;
`;

export const InputPlaceholder = styled.div<InputPlaceholderProps>`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    height: 38px;
    z-index: 1;
    cursor: pointer;

    &[data-id="start-placeholder"]::before {
        content: "";
        position: absolute;
        height: 2px;
        display: block;
        bottom: 0;
        border-width: 1px 0;
        background-color: ${Color.Primary};
        width: 100%;
        bottom: -4px;
        left: 0%;
        opacity: 0;
        transition: left 250ms ease-in-out;
    }

    ${(props) => {
        if (props.type === "start")
            return css`
                display: none;
            `;

        return css`
            pointer-events: ${props.show === "true" ? "auto" : "none"};
            background-color: ${props.show === "true"
                ? Color.Neutral[8]
                : "unset"};
            left: ${props.left ? props.left : "auto"};
            right: ${props.right ? props.right : "auto"};
            margin-left: ${props.placeholder === "To" ? "1px" : "9px"};
            width: ${props.placeholder === "From"
                ? "calc(50% - 16px - 23px)"
                : "calc(50% - 16px - 21px)"};

            &::after {
                ${TextStyleHelper.getFontFamily("Body", "regular")}
                font-size: 18px;
                content: "${props.placeholder}";
                visibility: ${props.show === "true" ? "visible" : "hidden"};
            }
        `;
    }}

    ${(props) => {
        switch (props.focusTo.container) {
            case "start":
                return css`
                    &[data-id="start-placeholder"]::before {
                        left: 0%;
                        opacity: 1;
                    }
                `;
            case "range":
                return css`
                    &[data-id="start-placeholder"]::before {
                        left: calc(100% + 16px + 23px);
                        opacity: 1;
                    }
                `;
            case "none":
                return css`
                    &[data-id="start-placeholder"]::before {
                        opacity: 0;
                    }
                `;
        }
    }}

    ${(props) => {
        if (props.type === "range") {
            return css`
                ${MediaQuery.MaxWidth.mobileL} {
                    &[data-id="start-placeholder"]::before {
                        opacity: 0;
                    }

                    width: 130px;
                    height: 26px;
                    top: 11px;
                    transform: unset;
                }
            `;
        }
    }}

    ${(props) => {
        if (props.type === "range" && (props.disabled || props.$readOnly)) {
            return css`
                ${MediaQuery.MaxWidth.mobileL} {
                    width: 136px;
                }
            `;
        }
    }}

    ${(props) => {
        if (props.disabled && props.value.length) {
            return css`
                display: none;
            `;
        }
    }}

    ${(props) => {
        if (props.type === "range" && props.placeholder === "To") {
            return css`
                ${MediaQuery.MaxWidth.mobileL} {
                    top: unset;
                    right: unset;
                    bottom: 11px;
                    left: 18px;
                    width: calc(100% - 18px - 16px);
                }
            `;
        }
    }}
`;

export const DayView = styled(ViewSectionBase)``;
export const MonthView = styled(ViewSectionBase)``;
export const YearView = styled(ViewSectionBase)``;

export const Views = styled.div<CalendarViewProps>`
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    flex: 1;

    ${(props) => {
        const _VIEWS = ["Day", "Month", "Year"] as View[];
        let styles = "";

        for (let i = 0; i < props.children.length; i++) {
            styles += `
                    > div:nth-child(${i + 1}) {
                        display: ${
                            props.show === _VIEWS[i] ? "block" : "none"
                        } ;
                    }
                `;
        }

        return css`
            ${styles}
        `;
    }}
`;

export const CalendarHeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    padding: 0 6px;
`;

export const HeaderDropdown = styled.div`
    display: flex;
    gap: 1rem;
    width: 150px;

    svg {
        color: ${Color.Neutral[3]};
        transition: transform 250ms ease-in-out;
    }

    &.active svg {
        transform: rotate(180deg);
    }
`;

const DropdownHeader = styled.div<DropdownHeaderProps>`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: ${Color.Neutral[1]};
    transition: transform 150ms ease-in-out;

    p {
        margin-right: 8px;
    }
`;

export const DropdownMonth = styled(DropdownHeader)`
    ${(props) => {
        switch (props.view) {
            case "Month":
                return css`
                    display: none;
                `;
            case "Year":
                return css`
                    display: none;
                `;
            case "Day":
                return css`
                    display: flex;
                `;
        }

        // return css`
        //     display: ${props.view === "Month" ? "none" : "flex"};
        // `;
    }}
`;
export const DropdownYear = styled(DropdownHeader)`
    ${(props) => {
        return css`
            svg {
                transform: ${props.view === "Month" || props.view === "Year"
                    ? "rotate(-180deg)"
                    : "auto"};
            }
        `;
    }}
`;

export const MonthList = styled.div``;

export const HeaderIcon = styled.div`
    display: flex;
    margin-left: auto;

    svg {
        color: ${Color.Neutral[3]};
        cursor: pointer;

        &:first-child {
            margin-right: 28px;
        }
    }
`;

export const WeekDaysContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-bottom: 8px;
`;

export const WeekDayCell = styled.div`
    ${TextStyleHelper.getFontFamily("H6", "semibold")}
    height: 26px;
    width: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${Color.Neutral[1]};
    font-size: 14px;
`;

const CircleBgColor = (color: any) => {
    return css`
        & [data-circle="left"] {
            background-color: ${color};
        }

        & [data-circle="right"] {
            background-color: ${color};
        }
    `;
};

const DayCellBasic = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
    display: flex;
    overflow: hidden;
`;

const PseudoBaseCellStyle = css`
    content: "";
    display: block;
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
`;

const DashedBaseCellStyle = css`
    border-width: 1px 0px;
    border-top: dashed ${Color.Accent.Light[4]};
    border-bottom: dashed ${Color.Accent.Light[4]};
`;

const SolidBaseCellStyle = css`
    border-width: 1px 0px;
    border-top: solid ${Color.Accent.Light[4]};
    border-bottom: solid ${Color.Accent.Light[4]};
`;

const ResetPseudoCell = css`
    border: none;
`;

const HoverCellLightBg = css`
    background-color: ${Color.Accent.Light[6]};
`;

const SelectedBgColor = css`
    background-color: ${Color.Accent.Light[5]};
`;

const HoverReSelectedCell = css`
    background-color: ${Color.Accent.Light[4]};
`;

const CircleSelectedGoToRight = css`
    > [data-cell="left"] {
        background-color: ${Color.Neutral[8]};
    }

    > [data-cell="right"] {
        background-color: ${Color.Accent.Light[5]};

        &::before {
            ${PseudoBaseCellStyle};
            ${SolidBaseCellStyle};
        }
    }
`;

const CircleSelectedGoToLeft = css`
    > [data-cell="right"] {
        background-color: ${Color.Neutral[8]};
    }

    > [data-cell="left"] {
        background-color: ${Color.Accent.Light[5]};

        &::before {
            ${PseudoBaseCellStyle};
            ${SolidBaseCellStyle};
        }
    }
`;

const HoverSelectingToStart = css`
    background-color: ${Color.Neutral[8]};

    > [data-cell="right"] {
        ${HoverCellLightBg};
    }
`;

const HoverSelectingToRange = css`
    background-color: ${Color.Neutral[8]};

    > [data-cell="left"] {
        ${HoverCellLightBg};
    }
`;

const HoverToRangeStlyes = css`
    &.pre-selected-start {
        & [data-cell="right"] {
            ${HoverCellLightBg};

            &::before {
                ${PseudoBaseCellStyle};
                ${DashedBaseCellStyle};
            }
        }
    }

    &:not(.pre-selected-start) {
        ${HoverCellLightBg};

        &::before {
            ${PseudoBaseCellStyle};
            ${DashedBaseCellStyle};
        }
    }

    &.hover-end:not(.pre-selected-start) {
        ${HoverSelectingToRange};
    }

    &.hover-end {
        ${CircleBgColor(Color.Neutral[8])}

        > [data-cell="left"]::before {
            ${PseudoBaseCellStyle};
            ${DashedBaseCellStyle};
        }

        &::before {
            ${ResetPseudoCell};
        }
    }
`;

const HoverToStartStlyes = css`
    &.pre-selected-end,
    &.selected-end {
        & [data-cell="left"] {
            ${HoverCellLightBg};

            &::before {
                ${PseudoBaseCellStyle};
                ${DashedBaseCellStyle};
            }
        }
    }

    &:not(.pre-selected-end) {
        ${HoverCellLightBg};

        &::before {
            ${PseudoBaseCellStyle};
            ${DashedBaseCellStyle};
        }
    }

    &.hover-start:not(.pre-selected-end) {
        ${HoverSelectingToStart};
    }

    &.hover-start {
        ${CircleBgColor(Color.Neutral[8])}

        > [data-cell="right"]::before {
            ${PseudoBaseCellStyle};
            ${DashedBaseCellStyle};
        }

        &::before {
            ${ResetPseudoCell};
        }
    }
`;

const SelectedBetweenStyles = css`
    &.pre-selected-start {
        ${CircleSelectedGoToRight};
    }

    &.pre-selected-end {
        ${CircleSelectedGoToLeft};
    }

    &::before {
        ${PseudoBaseCellStyle};
        ${SolidBaseCellStyle};
    }
`;

export const LeftCell = styled(DayCellBasic)``;
export const RightCell = styled(DayCellBasic)``;

export const CalendarDaySection = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 4px;
`;

// Previous verion
export const GrowDayCell = styled.div`
    display: flex;
    position: relative;
    height: 40px;
    flex: 1;
    align-items: center;
    justify-content: center;
    transition: background-color 100ms ease-in-out;

    &.hover-to-range {
        ${HoverToRangeStlyes};

        &.selected-start {
            & > [data-cell="left"] {
                background-color: ${Color.Neutral[8]};
            }

            & > [data-cell="right"] {
                background-color: ${Color.Accent.Light[6]};

                &::before {
                    ${PseudoBaseCellStyle};
                    ${DashedBaseCellStyle};
                }
            }
        }
    }

    &.hover-to-start {
        ${HoverToStartStlyes}

        &.selected-end::before {
            background-color: ${Color.Neutral[8]};
            ${ResetPseudoCell};
        }
    }

    &.pre-selected-start:has(~ .pre-selected-between) {
        & > [data-cell="right"] {
            ${SelectedBgColor};

            &::before {
                ${PseudoBaseCellStyle};
                ${SolidBaseCellStyle};
            }
        }
    }

    &.pre-selected-between {
        ${SelectedBgColor};
        ${SelectedBetweenStyles};

        &:not(.next-month) > [data-type="number"] {
            ${TextStyleHelper.getFontFamily("H5", "semibold")}
            color: ${Color.Primary};
        }
    }

    &.selected-between {
        ${SelectedBgColor};
        ${SelectedBetweenStyles};

        &.selected-start > [data-cell="left"] {
            background-color: ${Color.Neutral[8]};
        }
        &.selected-end > [data-cell="right"] {
            background-color: ${Color.Neutral[8]};
        }
    }

    &.hover-reselected-start {
        ${HoverReSelectedCell};

        &.hover-start {
            > [data-cell="left"] {
                ${SelectedBgColor};

                &::before {
                    ${PseudoBaseCellStyle};
                    ${SolidBaseCellStyle};
                }
            }

            ${CircleBgColor(Color.Accent.Light[4])}
        }

        &.pre-selected-end.pre-selected-between,
        &.selected-end.selected-between {
            > [data-cell="left"] {
                background-color: ${Color.Accent.Light[4]};
            }

            ${CircleBgColor(Color.Accent.Light[4])}
        }

        &.pre-selected-end.pre-selected-between.hover-start,
        &.selected-end.selected-between.hover-start {
            > [data-cell="left"] {
                background-color: ${Color.Accent.Light[5]};
            }

            & [data-circle="left"] {
                background-color: ${Color.Accent.Light[5]};
            }

            & [data-circle="right"] {
                background-color: ${Color.Accent.Light[5]};
            }
        }
    }

    &.hover-reselected-range {
        ${HoverReSelectedCell};

        &.hover-end {
            > [data-cell="right"] {
                ${SelectedBgColor};

                &::before {
                    ${PseudoBaseCellStyle};
                    ${SolidBaseCellStyle};
                }
            }

            ${CircleBgColor(Color.Accent.Light[4])}
        }

        &.pre-selected-start.pre-selected-between {
            > [data-cell="right"] {
                background-color: ${Color.Accent.Light[4]};
            }

            ${CircleBgColor(Color.Accent.Light[4])}
        }

        &.pre-selected-start.pre-selected-between.hover-end {
            > [data-cell="right"] {
                background-color: ${Color.Accent.Light[5]};
            }

            & [data-circle="right"] {
                background-color: ${Color.Accent.Light[5]};
            }

            & [data-circle="left"] {
                background-color: ${Color.Accent.Light[5]};
            }
        }
    }

    &.hover-outside-selected-between {
        ${HoverReSelectedCell};

        &.pre-selected-start > [data-cell="right"] {
            ${HoverReSelectedCell};
        }

        &.pre-selected-end > [data-cell="left"] {
            ${HoverReSelectedCell};
        }

        &.pre-selected-start,
        &.selected-start {
            ${CircleBgColor(Color.Accent.Light[4])}
        }

        &.pre-selected-end,
        &.selected-end {
            ${CircleBgColor(Color.Accent.Light[4])}
        }
    }

    &.hover-reselecting-range {
        &:not(.selected-end)::before {
            ${PseudoBaseCellStyle};
            ${DashedBaseCellStyle}
        }

        &.pre-selected-end > [data-cell="right"]::before,
        &.selected-end > [data-cell="right"]::before {
            ${PseudoBaseCellStyle};
            ${DashedBaseCellStyle}
        }

        &.hover-end {
            &::before {
                ${ResetPseudoCell}
            }
            & > [data-cell="left"]::before {
                ${PseudoBaseCellStyle};
                ${DashedBaseCellStyle}
            }
        }
    }

    &.hover-reselecting-start {
        &:not(.pre-selected-start)::before {
            ${PseudoBaseCellStyle};
            ${DashedBaseCellStyle};
        }

        &.pre-selected-start > [data-cell="left"]::before,
        &.selected-start > [data-cell="left"]::before {
            ${PseudoBaseCellStyle};
            ${DashedBaseCellStyle};
        }

        &.hover-start {
            &::before {
                ${ResetPseudoCell}
            }

            & > [data-cell="right"]::before {
                ${PseudoBaseCellStyle};
                ${DashedBaseCellStyle};
            }
        }
    }

    &.pre-selected-start.pre-selected-end {
        &:not(.hover-reselecting-start)::before {
            ${ResetPseudoCell};
        }
        &:not(.hover-reselecting-start) > [data-cell="left"]::before {
            ${ResetPseudoCell};
        }
        &:not(.hover-reselecting-start) > [data-cell="right"]::before {
            ${ResetPseudoCell};
        }
        &.hover-reselecting-start.hover-outside-selected-between
            > [data-cell="right"]::before {
            ${ResetPseudoCell};
        }
        &.hover-reselecting-range.hover-outside-selected-between
            > [data-cell="right"]::before {
            ${DashedBaseCellStyle}
        }

        & > [data-cell="left"] {
            background-color: ${Color.Neutral[8]};
        }

        & > [data-cell="right"] {
            background-color: ${Color.Neutral[8]};
        }

        &.selected-between {
            background-color: ${Color.Neutral[8]};
        }
    }

    &.next-month-selected.selected-end,
    &.next-month-selected.pre-selected-end {
        & [data-circle="left"] {
            background-color: ${Color.Accent.Light[5]};
            border: 1px solid ${Color.Primary};
        }

        & [data-circle="right"] {
            background-color: ${Color.Accent.Light[5]};
            border: 1px solid ${Color.Primary};
        }
    }
    &.next-month-selected.selected-start,
    &.next-month-selected.pre-selected-start {
        & [data-circle="left"] {
            background-color: ${Color.Accent.Light[5]};
            border: 1px solid ${Color.Primary};
        }

        & [data-circle="right"] {
            background-color: ${Color.Accent.Light[5]};
            border: 1px solid ${Color.Primary};
        }
    }

    &.start-today-range :is([data-circle="left"], [data-circle="right"]) {
        background: ${Color.Accent.Light[5]};

        &::before {
            ${PseudoBaseCellStyle};
            ${SolidBaseCellStyle};
        }
    }

    &.start-disabled-range :is([data-type="number"]) {
        color: ${Color.Accent.Light[2]} !important;
    }

    &.start-today-range {
        & :is([data-circle="left"], [data-circle="right"]) {
            background: ${Color.Accent.Light[5]};

            &::before {
                ${PseudoBaseCellStyle};
                ${SolidBaseCellStyle};
            }
        }

        &.hover-reselected-start.selected-between
            :is([data-circle="left"], [data-circle="right"]) {
            background-color: ${Color.Accent.Light[4]};
        }
        &.hover-reselected-range.selected-between
            :is([data-circle="left"], [data-circle="right"]) {
            background-color: ${Color.Accent.Light[4]};
        }

        &.hover-outside-selected-between {
            & :is([data-circle="left"], [data-circle="right"]) {
                background-color: ${Color.Accent.Light[4]};
            }

            &.range-hover-before-start
                :is([data-circle="left"], [data-circle="right"]) {
                background-color: ${Color.Accent.Light[5]};
            }
        }
    }

    &.start-today-range.pre-selected-between {
        &.pre-selected-start [data-circle="left"]::before {
            ${ResetPseudoCell}
        }
        &.pre-selected-start [data-circle="right"]::before {
            ${ResetPseudoCell}
        }
        &.selected-start [data-circle="left"]::before {
            ${ResetPseudoCell}
        }
        &.selected-start [data-circle="right"]::before {
            ${ResetPseudoCell}
        }
    }

    &.start-hover-after-range.pre-selected-between.hover-outside-selected-between {
        background-color: ${Color.Accent.Light[5]};

        &.start-today-range :is([data-circle="left"], [data-circle="right"]) {
            background-color: ${Color.Accent.Light[5]};
        }

        &.selected-end {
            & > [data-cell="left"] {
                background-color: ${Color.Accent.Light[5]};

                &::before {
                    ${PseudoBaseCellStyle};
                    ${SolidBaseCellStyle};
                }
            }
        }
    }

    &.range-hover-before-start.pre-selected-between.hover-outside-selected-between {
        background-color: ${Color.Accent.Light[5]};
    }

    ${MediaQuery.MaxWidth.mobileL} {
        height: 32px;
    }
`;

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
            case "startSelected":
                return css`
                    background-color: ${Color.Accent.Light[5]};
                    border: 1px solid ${Color.Primary};
                `;
            case "rangeSelected":
                return css`
                    background-color: ${Color.Accent.Light[5]};
                    border: 1px solid ${Color.Primary};
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

    ${MediaQuery.MaxWidth.mobileL} {
        width: 32px;
        height: 32px;
    }
`;

export const DayNumber = styled.div<DayNumerProps>`
    ${TextStyleHelper.getFontFamily("H5", "regular")}
    z-index: 1;
    position: absolute;
    pointer-events: none;
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none;

    ${MediaQuery.MaxWidth.mobileL} {
        ${TextStyleHelper.getFontFamily("H6", "regular")}
        font-size: 14px;
    }

    ${(props) => {
        if (props.disabled) {
            return css`
                color: ${Color.Neutral[4]};
                pointer-events: none;
            `;
        }

        if (props.disabledBefore) {
            return css`
                color: ${Color.Neutral[4]};
                pointer-events: none;

                &:hover {
                    box-shadow: unset;
                    border: unset;
                }
            `;
        }

        if (props.disabledAfter) {
            return css`
                color: ${Color.Neutral[4]};
                pointer-events: none;

                &:hover {
                    box-shadow: unset;
                    border: unset;
                }
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
        if (props.disabledBefore) {
            return css`
                cursor: none;
                pointer-events: none;
            `;
        }
        if (props.disabledAfter) {
            return css`
                cursor: none;
                pointer-events: none;
            `;
        }
    }}

    ${MediaQuery.MaxWidth.mobileL} {
        width: 32px;
        height: 32px;
    }
`;

export const ButtonContainer = styled.div<ButtonContainerProps>`
    display: flex;
    margin-top: 32px;
    gap: 8px;

    button:first-child {
        border: 1;
    }

    ${MediaQuery.MaxWidth.mobileL} {
        margin-top: 24px;
    }

    ${(props) => {
        if (!props.hasButton) {
            return css`
                display: none;
            `;
        }
    }}
`;

export const CancelButton = styled(Button.Default)`
    border: 1px solid ${Color.Neutral[5]};
    flex: 1;
`;

export const DoneButton = styled(Button.Default)`
    flex: 1;
`;
