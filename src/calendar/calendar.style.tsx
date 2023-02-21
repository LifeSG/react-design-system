import { Color } from "../color";
import { ChevronLeftIcon } from "@lifesg/react-icons/chevron-left";
import { ChevronRightIcon } from "@lifesg/react-icons/chevron-right";
import { ChevronDownIcon } from "@lifesg/react-icons/chevron-down";
import styled, { css } from "styled-components";
import { View } from "./calendar";
import { CalendarType } from "./types";
import { MonthPickerContainer } from "./calendar-month.style";
import { YearPickerContainer } from "./calendar-year.style";

interface ContainerStyleProps {
    $type: CalendarType;
}

interface HeaderDropdownProps {
    $view: View;
}

interface CalendarViewProps {
    $view: View;
}

// =============================================================================
// STYLING
// =============================================================================
export const Container = styled.div<ContainerStyleProps>`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 41rem;
    background-color: ${Color.Neutral[8]};
    border: 1px solid ${Color.Neutral[5]};
    height: 25.125rem;
    border-radius: 0.75rem;
    padding: 2rem 0;

    ${(props) => {
        const { $type } = props;

        switch ($type) {
            // stand alone calender style control from here
            // calendar with input with control inside the file
            case "calendar":
                return css`
                    ${ArrowLeft},
                    ${ArrowRight} {
                        width: 1.5rem;
                        height: 1.5rem;
                    }

                    ${IconChevronDown} {
                        width: 1.125rem;
                        height: 1.125rem;
                    }

                    ${MonthPickerContainer} {
                        gap: 0.5rem 2.5rem;
                    }

                    ${YearPickerContainer} {
                        gap: 0.5rem 2rem;
                    }
                `;
        }
    }}
`;

export const HeaderDropdown = styled.div<HeaderDropdownProps>`
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;

    ${(props) => {
        switch (props.$view) {
            case "month":
            case "year":
                return css`
                    ${DropdownMonth} {
                        display: none;
                    }
                    ${DropdownYear} svg {
                        transform: rotate(180deg);
                    }
                `;
        }
    }}
`;

export const IconChevronDown = styled(ChevronDownIcon)`
    margin-left: 0.625rem;
    color: ${Color.Neutral[3]};
    transition: transform 250ms ease-in-out;

    width: 1rem;
    height: 1rem;
`;

const DropdownMonthYearBase = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

export const DropdownMonth = styled(DropdownMonthYearBase)`
    margin-right: 1rem;
`;
export const DropdownYear = styled(DropdownMonthYearBase)``;

export const ContentBody = styled.div`
    display: flex;
    align-items: center;
    padding: 0 1.25rem;
`;

export const Views = styled.div<CalendarViewProps>`
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;

    ${(props) => {
        const _VIEWS = ["day", "month", "year"] as View[];

        return _VIEWS.map(
            (view, i) => `
            > div:nth-child(${i + 1}) {
                display: ${props.$view === view ? "flex" : "none"}
            }
        `
        );
    }}
`;

const ViewSectionBase = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 34rem;
`;

export const DayView = styled(ViewSectionBase)``;
export const MonthView = styled(ViewSectionBase)``;
export const YearView = styled(ViewSectionBase)``;

export const ArrowLeft = styled(ChevronLeftIcon)`
    color: ${Color.Neutral[3]};
    cursor: pointer;
    width: 1rem;
    height: 1rem;
    margin: 0 0 3rem 0;
`;

export const ArrowRight = styled(ChevronRightIcon)`
    color: ${Color.Neutral[3]};
    cursor: pointer;
    width: 1rem;
    height: 1rem;
    margin: 0 0 3rem 0;
`;
